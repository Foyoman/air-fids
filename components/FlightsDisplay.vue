<template>
  <div class="w-2/4 p-4 flex flex-col items-center">
    <h1 v-if="table" class="text-4xl dark:text-white">
      {{ table }}
    </h1>
    <template v-if="!loading && flights.length">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Time</th>
              <th scope="col" class="px-6 py-3">Carrier</th>
              <th scope="col" class="px-6 py-3">Flight</th>
              <th scope="col" class="px-6 py-3">
                {{ table === "arrivals" ? "Origin" : "Destination" }}
              </th>
              <th scope="col" class="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(flight, index) in flights"
              :key="index"
              @click="() => openModal()"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ table === "arrivals" ? formatDate(flight.arr_time) : formatDate(flight.dep_time) }}
              </td>
              <!-- time -->
              <td class="px-6 py-4">
                {{ flight.airline_iata }}
              </td>
              <!-- carrier -->
              <td class="px-6 py-4">
                {{ `${flight.airline_iata ? flight.airline_iata : ""}${flight.flight_number}` }}
              </td>
              <!-- flight -->
              <td class="px-6 py-4">
                {{ table === "arrivals" ? flight.dep_iata : flight.arr_iata }}
                <!-- origin/destination -->
              </td>
              <td class="px-6 py-4">{{ flight.status }}</td>
              <!-- status -->
            </tr>
          </tbody>
        </table>
      </div>
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
            <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ `<` }}</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ `>` }}</a>
          </li>
        </ul>
      </nav>
    </template>
    <Spinner v-else class="mt-8" />
  </div>
</template>

<script lang="ts">
import { Flight } from "~/types";

export default {
  props: {
    table: {
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
  },
  methods: {
    formatDate(date: string) {
      const newDate = new Date(date);
      
      // Get the hours and minutes from the Date object
      const hours = newDate.getHours().toString().padStart(2, '0'); // Ensure two digits for hours
      const minutes = newDate.getMinutes().toString().padStart(2, '0'); // Ensure two digits for minutes

      // Concatenate the hours and minutes with a colon
      return `${hours}:${minutes}`;
    }
  }
};
</script>
