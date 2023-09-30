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
              <th scope="col" class="px-6 py-3">Time</th>
              <th scope="col" class="px-6 py-3">Carrier</th>
              <th scope="col" class="px-6 py-3">Flight</th>
              <th scope="col" class="px-6 py-3">
                {{ direction === "arr" ? "Origin" : "Destination" }}
              </th>
              <th scope="col" class="px-6 py-3">Status</th>
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
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{
                  direction === "arr"
                    ? formatDate(flight.arr_time)
                    : formatDate(flight.dep_time)
                }}
              </td>
              <!-- time -->
              <td class="px-6 py-4">
                {{ flight.airline_iata }}
              </td>
              <!-- carrier -->
              <td class="px-6 py-4">
                {{
                  `${flight.airline_iata ? flight.airline_iata : ""}${
                    flight.flight_number
                  }`
                }}
              </td>
              <!-- flight -->
              <td class="px-6 py-4">
                {{ direction === "arr" ? flight.dep_iata : flight.arr_iata }}
                <!-- origin/destination -->
              </td>
              <td class="px-6 py-4">{{ flight.status }}</td>
              <!-- status -->
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
            <span class="font-medium">{{ indexOfLastFlight }}</span>
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
                  currentPage === Math.ceil(flights.length / flightsPerPage)
                    ? 'mr-0 rounded-r-lg'
                    : ''
                } flex items-center justify-center h-8 px-3 text-blue-600 border border-gray-300 cursor-pointer bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`"
              >
                {{ currentPage }}
              </p>
            </li>

            <template v-for="i in 2">
              <li
                v-if="
                  currentPage + i <= Math.ceil(flights.length / flightsPerPage)
                "
              >
                <p
                  @click="() => goToPage(currentPage + i)"
                  class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {{ currentPage + i }}
                </p>
              </li>
            </template>
            <li
              v-if="currentPage !== Math.ceil(flights.length / flightsPerPage)"
            >
              <p
                @click="incrementPage"
                class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {{ `>` }}
              </p>
            </li>
            <li
              v-if="currentPage !== Math.ceil(flights.length / flightsPerPage)"
            >
              <p
                @click="
                  () =>
                    (currentPage = Math.ceil(flights.length / flightsPerPage))
                "
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
    type: String,
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
    type: Function,
    required: false,
    default: null,
  },
});

const formatDate = (date: string) => {
  const newDate = new Date(date);

  // Get the hours and minutes from the Date object
  const hours = newDate.getHours().toString().padStart(2, "0"); // Ensure two digits for hours
  const minutes = newDate.getMinutes().toString().padStart(2, "0"); // Ensure two digits for minutes

  // Concatenate the hours and minutes with a colon
  return `${hours}:${minutes}`;
};

const currentPage = ref(1);
const flightsPerPage = ref(10);
const indexOfLastFlight = ref(currentPage.value * flightsPerPage.value);
const indexOfFirstFlight = ref(indexOfLastFlight.value - flightsPerPage.value);
const lastPage = Math.ceil(props.flights.length / flightsPerPage.value);

const decrementPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  } else {
    currentPage.value = 1;
  }
};

const incrementPage = () => {
  if (
    currentPage.value < Math.ceil(props.flights.length / flightsPerPage.value)
  ) {
    currentPage.value++;
  } else {
    currentPage.value = Math.ceil(props.flights.length / flightsPerPage.value);
  }
};

const goToPage = (page: number) => {
  if (
    page >= 1 &&
    page <= Math.ceil(props.flights.length / flightsPerPage.value)
  ) {
    currentPage.value = page;
  }
};

onMounted(() => {
  console.log(indexOfFirstFlight.value, indexOfLastFlight.value);
});

watch(
  [currentPage, flightsPerPage],
  ([newCPVal, newPPPVal], [oldCPVal, newPPPval]) => {
    indexOfLastFlight.value = currentPage.value * flightsPerPage.value;
    indexOfFirstFlight.value = indexOfLastFlight.value - flightsPerPage.value;
  }
);
</script>
