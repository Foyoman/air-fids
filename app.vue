<template>
  <Modal
    v-if="showModal"
    :closeModal="toggleModal"
    :selectedFlight="selectedFlight"
  />
  <div class="container flex flex-col items-center px-4 py-8 mx-auto">
    <select
      id="cities"
      v-model="airportCode"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <DarkModeToggle class="absolute top-4 right-4" />
    <div class="flex flex-col items-center w-full lg:flex-row lg:items-start">
      <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 lg:hidden dark:text-gray-400 dark:border-gray-700"
      >
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <p
              @click="selectTable('arr')"
              :class="
                direction === 'arr' ? selectedStyles : unselectedStyles
              "
            >
              Arrivals
            </p>
          </li>
          <li class="mr-2">
            <p
              @click="selectTable('dep')"
              :class="
                direction === 'dep' ? selectedStyles : unselectedStyles
              "
            >
              Departures
            </p>
          </li>
        </ul>
      </div>
      <FlightsDisplay 
        class="flex lg:hidden"
        :direction="direction"
        :flights="direction === 'arrivals' ? arrivals : departures"
        :loading="direction === 'arrivals' ? arrivalsLoading : departuresLoading"
        :openModal="toggleModal"
      />

      <FlightsDisplay
        class="hidden lg:flex"
        direction="arr"
        :flights="arrivals"
        :loading="arrivalsLoading"
        :openModal="toggleModal"
      />
      <FlightsDisplay
        class="hidden lg:flex"
        direction="dep"
        :flights="departures"
        :loading="departuresLoading"
        :openModal="toggleModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flight } from "~/types";

const arrivals = ref([]);
const departures = ref([]);
const arrivalsLoading = ref(false);
const departuresLoading = ref(false);
const airportCode = ref("SYD");
const airportCodes = ["SYD", "MEL", "BNE", "ADL", "PER", "HBA", "DRW", "CBR"];

const showModal = ref(false);
const selectedFlight = ref<Flight | null>(null);

const direction = ref("arr");

const selectedStyles = "text-lg inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
const unselectedStyles = "text-lg inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"

const toggleModal = (flight?: Flight) => {
  if (!selectedFlight.value && flight) {
    selectedFlight.value = flight;
    console.log(flight);
  } else {
    selectedFlight.value = null;
  }
  showModal.value = !showModal.value;
};

watch(showModal, () => {
  const body = document.body;
  if (showModal.value) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
});

const selectTable = (dir: "arr" | "dep") => {
  direction.value = dir;
}

async function getData(city: string, direction: "arr" | "dep") {
  let params = new URLSearchParams({
    api_key: "47819a31-962d-49be-ad71-248d4005117c",
  });

  params.append(`${direction}_iata`, city);

  await fetch(`https://airlabs.co/api/v9/schedules?${params}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.response.sort((a: Flight, b: Flight) => {
        const dateA = new Date(direction === "arr" ? a.arr_time : a.dep_time);
        const dateB = new Date(direction === "arr" ? b.arr_time : b.dep_time);
        return dateA === dateB ? 0 : dateA < dateB ? -1 : 1;
      });

      if (direction === "arr") {
        arrivals.value = data.response;
        arrivalsLoading.value = false;
      }

      if (direction === "dep") {
        departures.value = data.response;
        departuresLoading.value = false;
      }
    });
}

watch(airportCode, () => {
  departuresLoading.value = true;
  arrivalsLoading.value = true;
  getData(airportCode.value, "arr");
  getData(airportCode.value, "dep");
});

onMounted(() => {
  getData(airportCode.value, "arr");
  getData(airportCode.value, "dep");
});
</script>
