<template>
  <div
    class="lg:w-1/2 lg:px-4 lg:py-8 items-center w-full px-0 py-4 flex-col overflow-scroll"
  >
    <h1
      class="text-center hidden lg:block text-2xl dark:text-white mb-4 mx-auto"
    >
      {{ direction === "arr" ? "Arrivals" : "Departures" }}
    </h1>
    <template v-if="!loading && flights.length">
      <div
        class="lg:block w-full relative overflow-x-auto shadow-md sm:rounded-lg"
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
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
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
      <div class="flex items-center flex-col w-full">
        <div class="mt-4">
          <p class="text-sm text-gray-700 dark:text-gray-400">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">10</span>
            of
            <span class="font-medium">97</span>
            results
          </p>
        </div>
        <nav aria-label="Page navigation example" class="mt-1">
          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <p
                class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >{{ `<` }}</p
              >
            </li>
            <li>
              <p
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</p
              >
            </li>
            <li>
              <p
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</p
              >
            </li>
            <li>
              <p
                class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</p
              >
            </li>
            <li>
              <p
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >4</p
              >
            </li>
            <li>
              <p
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >5</p
              >
            </li>
            <li>
              <p
                @click="incrementPage"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >{{ `>` }}</p
              >
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

const incrementPage = () => {
  currentPage.value++
  console.log(currentPage.value)
}

const formatDate = (date: string) => {
  const newDate = new Date(date);

  // Get the hours and minutes from the Date object
  const hours = newDate.getHours().toString().padStart(2, "0"); // Ensure two digits for hours
  const minutes = newDate.getMinutes().toString().padStart(2, "0"); // Ensure two digits for minutes

  // Concatenate the hours and minutes with a colon
  return `${hours}:${minutes}`;
};

const currentPage = ref(1);
const postsPerPage = ref(10);
const indexOfLastFlight = ref(currentPage.value * postsPerPage.value);
const indexOfFirstFlight = ref(indexOfLastFlight.value - postsPerPage.value);

onMounted(() => {
  console.log(indexOfFirstFlight.value, indexOfLastFlight.value);
});

watch([currentPage, postsPerPage], ([newCPVal, newPPPVal], [oldCPVal, newPPPval]) => {
  indexOfLastFlight.value = currentPage.value * postsPerPage.value;
  indexOfFirstFlight.value = indexOfLastFlight.value - postsPerPage.value
});
</script>
