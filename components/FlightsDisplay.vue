<template>
  <div
    class="flex-col items-center w-full px-0 py-4 overflow-scroll lg:w-1/2 lg:px-4 lg:py-8"
  >
    <h1
      class="hidden mx-auto mb-4 text-2xl text-center lg:block dark:text-white"
    >
      {{ direction === "arr" ? "Arrivals" : "Departures" }}
    </h1>
    <template v-if="!loading && flights.length">
      <div
        class="relative w-full overflow-x-auto shadow-md lg:block sm:rounded-lg"
      >
        <table
          class="w-full overflow-x-scroll text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th
                scope="col"
                class="px-2 sm:px-4 py-3 text-xs text-center sm:text-sm lg:px-6"
              >
                Time
              </th>
              <th
                scope="col"
                class="px-2 sm:px-4 py-3 text-xs text-center sm:text-sm lg:px-6"
              >
                Flight
              </th>
              <th
                scope="col"
                class="px-2 sm:px-4 py-3 text-xs text-center sm:text-sm lg:px-6"
              >
                {{ direction === "arr" ? "Origin" : "Dest." }}
              </th>
              <th
                scope="col"
                class="px-2 sm:px-4 py-3 text-xs text-center sm:text-sm lg:px-6"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(flight, index) in flights.slice(
                indexOfFirstFlight,
                indexOfLastFlight
              )"
              :key="index"
              @click="() => openModal(flight)"
              class="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                :title="direction === 'arr' ? flight.arr_time : flight.dep_time"
                class="px-2 sm:px-4 py-4 text-xs font-medium text-center text-gray-900 sm:text-sm lg:px-6 whitespace-nowrap dark:text-white"
              >
                <span
                  :class="`${
                    direction === 'arr'
                      ? flight.delayed && flight.arr_estimated
                        ? 'text-gray-500 dark:text-gray-400 line-through font-normal`'
                        : ''
                      : flight.delayed && flight.dep_estimated
                      ? 'text-gray-500 dark:text-gray-400 line-through font-normal`'
                      : ''
                  }`"
                >
                  {{
                    direction === "arr"
                      ? formatDate(flight.arr_time, "time")
                      : formatDate(flight.dep_time, "time")
                  }}
                </span>
                {{ " " }}
                <span>
                  {{
                    direction === "arr"
                      ? flight.delayed && flight.arr_estimated
                        ? formatDate(flight.arr_estimated, "time")
                        : ""
                      : flight.delayed && flight.dep_estimated
                      ? formatDate(flight.dep_estimated, "time")
                      : ""
                  }}
                </span>
              </td>
              <!-- <td class="px-2 sm:px-4 py-4 text-xs text-center sm:text-sm lg:px-6">
                {{ flight.airline_iata }}
              </td> -->
              <td
                id="flight-number"
                class="px-2 sm:px-4 py-4 text-xs text-center sm:text-sm lg:px-6"
              >
                {{
                  `${flight.airline_iata || flight.airline_icao || ""}${
                    flight.flight_number
                  }`
                }}
              </td>
              <td
                id="origin/destination"
                class="px-2 sm:px-4 py-4 text-xs text-center sm:text-sm lg:px-6"
              >
                {{ direction === "arr" ? flight.dep_iata : flight.arr_iata }}
              </td>
              <td
                id="flight-status"
                :class="`${
                  flight.status === 'cancelled'
                    ? 'text-red-600 dark:text-red-500'
                    : ''
                } ${
                  flight.status === 'scheduled'
                    ? 'text-sky-600 dark:text-sky-500'
                    : ''
                } ${
                  flight.status === 'active'
                    ? 'text-emerald-600 dark:text-emerald-500'
                    : ''
                } ${
                  flight.status === 'landed'
                    ? 'text-green-600 dark:text-green-500'
                    : ''
                } text-center text-xs sm:text-sm px-2 sm:px-4 py-4 lg:px-6`"
              >
                {{ flight.status.toUpperCase() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center w-full">
        <div class="mt-4">
          <p class="text-sm text-gray-700 dark:text-gray-400">
            Showing
            <span class="font-medium">{{ indexOfFirstFlight + 1 }}</span>
            to
            <span class="font-medium">{{
              indexOfLastFlight > flights.length
                ? flights.length
                : indexOfLastFlight
            }}</span>
            of
            <span class="font-medium">{{ flights.length }}</span>
            results
          </p>
        </div>
        <nav aria-label="Page navigation example" class="mt-1">
          <ul class="inline-flex -space-x-px text-sm">
            <li v-if="currentPage > 1">
              <p
                @click="() => (currentPage = 1)"
                class="flex items-center justify-center h-8 px-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {{ `<<` }}
              </p>
            </li>
            <li v-if="currentPage > 1">
              <p
                @click="decrementPage"
                class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {{ `<` }}
              </p>
            </li>

            <template v-for="i in [1, 2].reverse()">
              <li v-if="currentPage - i >= 1">
                <p
                  @click="() => goToPage(currentPage - i)"
                  class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {{ currentPage - i }}
                </p>
              </li>
            </template>

            <li>
              <p
                :class="`${currentPage === 1 ? 'ml-0 rounded-l-lg' : ''} ${
                  currentPage === lastPage ? 'mr-0 rounded-r-lg' : ''
                } flex items-center justify-center h-8 px-3 text-blue-600 border border-gray-300 cursor-pointer bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`"
              >
                {{ currentPage }}
              </p>
            </li>

            <template v-for="i in 2">
              <li v-if="currentPage + i <= lastPage">
                <p
                  @click="() => goToPage(currentPage + i)"
                  class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {{ currentPage + i }}
                </p>
              </li>
            </template>
            <li v-if="currentPage !== lastPage">
              <p
                @click="incrementPage"
                class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {{ `>` }}
              </p>
            </li>
            <li v-if="currentPage !== lastPage">
              <p
                @click="() => (currentPage = lastPage)"
                class="flex items-center justify-center h-8 px-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {{ `>>` }}
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </template>
    <Spinner v-else class="mt-8" />
  </div>
</template>

<script setup lang="ts">
import { Flight } from "~/types";

const props = defineProps({
  direction: {
    type: String as () => "arr" | "dep",
    required: true,
    default: null,
  },
  flights: {
    type: Array<Flight>,
    required: false,
    default: null,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  openModal: {
    type: Function as PropType<(flight?: Flight) => void>,
    required: true,
  },
  formatDate: {
    type: Function as PropType<(date: string, key: "date" | "time") => string>,
    required: true,
  },
});

const currentPage = ref(1);
const flightsPerPage = ref(10);
const indexOfLastFlight = ref(currentPage.value * flightsPerPage.value);
const indexOfFirstFlight = ref(indexOfLastFlight.value - flightsPerPage.value);
const lastPage = ref(Math.ceil(props.flights.length / flightsPerPage.value));

watch([() => props.flights, () => props.direction], () => {
  currentPage.value = 1;
  indexOfLastFlight.value = currentPage.value * flightsPerPage.value;
  indexOfFirstFlight.value = indexOfLastFlight.value - flightsPerPage.value;
  lastPage.value = Math.ceil(props.flights.length / flightsPerPage.value);
});

const decrementPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  } else {
    currentPage.value = 1;
  }
};

const incrementPage = () => {
  if (currentPage.value < lastPage.value) {
    currentPage.value++;
  } else {
    currentPage.value = lastPage.value;
  }
};

const goToPage = (page: number) => {
  if (page >= 1 && page <= lastPage.value) {
    currentPage.value = page;
  }
};

watch([currentPage, flightsPerPage], () => {
  indexOfLastFlight.value = currentPage.value * flightsPerPage.value;
  indexOfFirstFlight.value = indexOfLastFlight.value - flightsPerPage.value;
});
</script>
