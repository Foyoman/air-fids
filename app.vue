<template>
  <Modal v-if="showModal" :closeModal="toggleModal" />
  <div class="container mx-auto flex flex-col items-center px-4 py-8">
    <label for="cities" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a city</label>
    <select id="cities" v-model="airportCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <DarkModeToggle class="absolute top-4 right-4" />
    <div class="flex w-full">
      <FlightsDisplay
        table="arrivals"
        :flights="arrivals"
        :loading="arrivalsLoading"
        :openModal="toggleModal"
      />
      <FlightsDisplay
        table="departures"
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

const toggleModal = () => {
  console.log('click')
  showModal.value = !showModal.value;
}

watch(showModal, () => {
  const body = document.body;
  if (showModal.value) {
    console.log('adding')
    body.classList.add("overflow-hidden");
  } else {
    console.log('removing')
    body.classList.remove("overflow-hidden");
  }
});

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
