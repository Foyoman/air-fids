<template>
  <Modal
    v-if="showModal && selectedFlight"
    :closeModal="toggleModal"
    :selectedFlight="selectedFlight"
    :formatDate="formatDate"
  />
  <div class="container flex flex-col items-center px-2 sm:px-4 py-8 mx-auto">
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
              :class="direction === 'arr' ? selectedStyles : unselectedStyles"
            >
              Arrivals
            </p>
          </li>
          <li class="mr-2">
            <p
              @click="selectTable('dep')"
              :class="direction === 'dep' ? selectedStyles : unselectedStyles"
            >
              Departures
            </p>
          </li>
        </ul>
      </div>
      <FlightsDisplay
        class="flex lg:hidden"
        :direction="direction"
        :flights="direction === 'arr' ? arrivals : departures"
        :loading="direction === 'arr' ? arrivalsLoading : departuresLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
      />

      <FlightsDisplay
        class="hidden lg:flex"
        direction="arr"
        :flights="arrivals"
        :loading="arrivalsLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
      />
      <FlightsDisplay
        class="hidden lg:flex"
        direction="dep"
        :flights="departures"
        :loading="departuresLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flight } from "~/types";
import { dummyArrivals, dummyDepartures } from '~/lib/flights' // 

const arrivals = ref<Flight[]>([]);
const departures = ref<Flight[]>([]);
const arrivalsLoading = ref(false);
const departuresLoading = ref(false);
const airportCode = ref("SYD");
const airportCodes = ["SYD", "MEL", "BNE", "ADL", "PER", "HBA", "DRW", "CBR"];

const showModal = ref(false);
const selectedFlight = ref<Flight | null>(null);

const direction = ref<"arr" | "dep">("arr");
const sort = ref<"time" | "flight" | "origin" | "destination" | "status">("time")
const reverse = ref(false);

const selectedStyles =
  "text-lg inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const unselectedStyles =
  "text-lg inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

const runtimeConfig = useRuntimeConfig();
async function getFlights(city: string, dir: "arr" | "dep") {
  let params = new URLSearchParams({
    api_key: runtimeConfig.public.API_KEY,
  });

  params.append(`${dir}_iata`, city);

  await fetch(`https://airlabs.co/api/v9/schedules?${params}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (dir === "arr") {
        arrivals.value = sortFlights(data.response, "arr", sort.value, reverse.value);
        arrivalsLoading.value = false;
      }

      if (dir === "dep") {
        departures.value = sortFlights(data.response, "dep", sort.value, reverse.value);
        departuresLoading.value = false;
      }
    });
}

const sortFlights = (
  flights: Flight[],
  dir: "arr" | "dep",
  key: "time" | "flight" | "origin" | "destination" | "status",
  reverse: boolean
) => {
  const timeSorted: Flight[] = flights.sort((a: Flight, b: Flight) => {
    const dateA = new Date(dir === "arr" ? a.arr_time : a.dep_time);
    const dateB = new Date(dir === "arr" ? b.arr_time : b.dep_time);
    return dateA === dateB ? 0 : dateA < dateB ? -1 : 1;
  });

  // TODO: implement other sorts
  if (key === "time") {
    return reverse ? timeSorted.reverse() : timeSorted;
  } else {
    return flights;
  }
};

watch(airportCode, () => {
  departuresLoading.value = true;
  arrivalsLoading.value = true;
  // getFlights(airportCode.value, "arr");
  // getFlights(airportCode.value, "dep");
});

onMounted(() => {
  // getFlights(airportCode.value, "arr");
  // getFlights(airportCode.value, "dep");

  // reset all this 
  const sortedArrivals = sortFlights(dummyArrivals, "arr", sort.value, reverse.value);
  const sortedDepartures = sortFlights(dummyDepartures, "dep", sort.value, reverse.value);

  console.log(sortedArrivals);
  arrivals.value = sortedArrivals;
  departures.value = sortedDepartures;

});

const formatDate = (date: string, key: "date" | "time") => {
  const dateObject = new Date(date);

  const dateArr = String(dateObject)
    .split(" ")
    .slice(0, 3)
    .map((val) => val.replace(/^0+/, ""));
  const [day, month, dayDate] = dateArr;
  const formattedDate = `${day}, ${dayDate} ${month}`;
  console.log(formattedDate);

  // const month = String(dateObject.getMonth() + 1) // .padStart(2, "0"); // Month is zero-based
  // const day = String(dateObject.getDate()) // .padStart(2, "0");
  const hours = String(dateObject.getHours()).padStart(2, "0"); // Ensure two digits for hours
  const minutes = String(dateObject.getMinutes()).padStart(2, "0"); // Ensure two digits for minutes

  if (key === "date") {
    return formattedDate;
  } else {
    return `${hours}:${minutes}`;
  }
};

const toggleModal = (flight?: Flight) => {
  if (!selectedFlight.value && flight) {
    selectedFlight.value = flight;
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
};
</script>
./lib/arrivals