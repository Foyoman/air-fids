<template>
  <div
    class="flex-col items-center w-full px-0 pt-2 pb-4 overflow-scroll lg:w-1/2 lg:py-8"
  >
    <h2
      class="hidden mx-auto mb-4 text-4xl font-bold text-center lg:block dark:text-white"
    >
      {{ direction === "arr" ? "Arrivals" : "Departures" }}
    </h2>
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
                class="px-2 py-3 text-xs text-center sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>Time</p>
                  <SortIcon />
                </span>
              </th>
              <th
                scope="col"
                class="px-2 py-3 text-xs text-center sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>Flight</p>
                  <SortIcon />
                </span>
              </th>
              <th
                scope="col"
                class="px-2 py-3 text-xs text-center sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>{{ direction === "arr" ? "Origin" : "Dest." }}</p>
                  <SortIcon />
                </span>
              </th>
              <th
                scope="col"
                class="px-2 py-3 text-xs text-center sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>Status</p>
                  <SortIcon />
                </span>
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
                class="px-2 py-4 text-xs font-medium text-center text-gray-900 sm:px-4 sm:text-sm lg:px-4 whitespace-nowrap dark:text-white"
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
              <!-- <td class="px-2 py-4 text-xs text-center sm:px-4 sm:text-sm lg:px-4">
                {{ flight.airline_iata }}
              </td> -->
              <td
                id="flight-number"
                class="px-2 py-4 text-xs text-center sm:px-4 sm:text-sm lg:px-4"
              >
                {{
                  `${flight.airline_iata || flight.airline_icao || ""}${
                    flight.flight_number
                  }`
                }}
              </td>
              <td
                id="origin/destination"
                class="px-2 py-4 text-xs text-center sm:px-4 sm:text-sm lg:px-4"
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
                } text-center text-xs sm:text-sm px-2 sm:px-4 py-4 lg:px-4`"
              >
                {{ flight.status.toUpperCase() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="pagination" class="flex flex-col items-center w-full">
        <div class="mt-2 mb-2 flex items-center justify-between w-full px-2">
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
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

          <div class="flex items-center gap-1">
            <label for="per-page" class="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
              Per page:
            </label>
            <select
              id="per-page"
              :value="flightsPerPage"
              @input="(e) => updateFlightsPerPage(e as InputEvent)"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-0 py-1 lg:px-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option
                v-for="option in [5, 10, 25, 50, 100]"
                :value="option"
                :key="option"
              >
                {{ option }}
              </option>
            </select>
          </div>
        </div>
        <nav class="mt-1">
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
    <Loading v-else class="mt-8" />
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
  flightsPerPage: {
    type: Number,
    required: false,
    default: 10,
  }
});

const emit = defineEmits();

const updateFlightsPerPage = (e: InputEvent) => {
  const selectElement = e.target as HTMLSelectElement;
  emit('update:flightsPerPage', selectElement.value);
}

const currentPage = ref(1);
// const flightsPerPage = ref(10);
const indexOfLastFlight = ref(currentPage.value * props.flightsPerPage);
const indexOfFirstFlight = ref(indexOfLastFlight.value - props.flightsPerPage);
const lastPage = ref(Math.ceil(props.flights.length / props.flightsPerPage));

const resetValues = () => {
  indexOfLastFlight.value = currentPage.value * props.flightsPerPage;
  indexOfFirstFlight.value = indexOfLastFlight.value - props.flightsPerPage;
  lastPage.value = Math.ceil(props.flights.length / props.flightsPerPage);
}

watch([() => props.flights, () => props.direction], () => {
  currentPage.value = 1;
  resetValues()
});

watch([currentPage, () => props.flightsPerPage], () => {
  resetValues();
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
</script>
