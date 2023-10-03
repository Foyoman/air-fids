<template>
  <div
    class="flex-col items-center w-full px-0 pt-2 pb-4 lg:w-1/2 lg:py-8 overflow-visible"
  >
    <h2
      class="hidden mx-auto mb-4 text-4xl font-bold text-center lg:block dark:text-white"
    >
      {{ direction === "arr" ? "Arrivals" : "Departures" }}
    </h2>
    <template v-if="!loading && flights.length">
      <Search
        :direction="direction"
        :updateSearchTerm="updateSearchTerm"
        :updateSearchField="updateSearchField"
        class="mb-3"
      />
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
                @click="setSort('time')"
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>Time</p>
                  <SortArrow
                    v-if="sortState === 'time'"
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
              <th
                scope="col"
                @click="setSort('flight')"
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>Flight</p>
                  <SortArrow
                    v-if="sortState === 'flight'"
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
              <th
                scope="col"
                @click="
                  direction === 'arr'
                    ? setSort('origin')
                    : setSort('destination')
                "
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>{{ direction === "arr" ? "Origin" : "Dest." }}</p>
                  <SortArrow
                    v-if="
                      direction === 'arr'
                        ? sortState === 'origin'
                        : sortState === 'destination'
                    "
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
              <th
                scope="col"
                @click="setSort('status')"
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-4 sm:text-sm lg:px-4"
              >
                <span class="flex items-center justify-center">
                  <p>Status</p>
                  <SortArrow
                    v-if="sortState === 'status'"
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(flight, index) in filteredFlights().slice(
                indexOfFirstFlight,
                indexOfLastFlight
              )"
              :key="index"
              @click="openModal(flight)"
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
                  flight.flight_iata ||
                  flight.flight_icao ||
                  flight.flight_number ||
                  ""
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
                  flight.status === 'cancelled' ? 'text-red-500' : ''
                } ${flight.status === 'scheduled' ? 'text-sky-500' : ''} ${
                  flight.status === 'active' ? 'text-emerald-500' : ''
                } ${
                  flight.status === 'landed' ? 'text-green-500' : ''
                } text-center text-xs sm:text-sm px-2 sm:px-4 py-4 lg:px-4`"
              >
                {{ flight.status.toUpperCase() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination
        :flights="filteredFlights()"
        v-model:currentPage="currentPage"
        :indexOfFirstFlight="indexOfFirstFlight"
        :indexOfLastFlight="indexOfLastFlight"
        :lastPage="lastPage"
        :flightsPerPage="flightsPerPage"
        :updateFlightsPerPage="updateFlightsPerPage"
        :resetValues="resetValues"
      />
    </template>
    <Loading v-else class="mt-8" />
  </div>
</template>

<script setup lang="ts">
import { Flight, Direction, TableField, SearchOption } from "~/types";

const props = defineProps({
  direction: {
    type: String as () => Direction,
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
  },
  sortFlights: {
    type: Function as PropType<
      (
        flights: Flight[],
        dir: Direction,
        key: TableField,
        reverse: boolean
      ) => Flight[]
    >,
    required: true,
  },
});

// for sort
const sortState = ref<TableField>("time");
const reverseState = ref(false);

const emit = defineEmits();

// sorts table from table head values and switches state values for ux
const setSort = (sortKey: TableField, fromWatch?: boolean) => {
  const isSameSortKey = sortKey === sortState.value;

  if (!fromWatch) {
    if (!isSameSortKey) {
      sortState.value = sortKey;
      reverseState.value = false;
    } else {
      reverseState.value = !reverseState.value;
    }
  }

  props.sortFlights(
    props.flights,
    props.direction,
    sortKey,
    reverseState.value
  );
};

// for search
const search = ref<string>("");
const field = ref<keyof Flight | "all">("all");

// filters flights based on what's in the search input, and searches within all or within field
const filteredFlights = () => {
  if (!search.value) return props.flights;

  const fieldsToSearch: Array<keyof Flight> = [
    "arr_time",
    "dep_time",
    "airline_name",
    "flight_iata",
    "dep_iata",
    "arr_iata",
    "status",
  ];
  
  const lowerSearch = search.value.toLowerCase()

  // if any part of the search string is found within the search fields
  return props.flights.filter((flight) => {
    if (field.value === "all") {
      return fieldsToSearch.some((field) =>
        String(flight[field]).toLowerCase().includes(lowerSearch)
      );
    } else {
      return String(flight[field.value]).toLowerCase().includes(lowerSearch);
    }
  });
};

// updates search term, resets page to 1 on change to avoid bugs
const updateSearchTerm = (searchTerm: string) => {
  currentPage.value = 1;
  search.value = searchTerm;
};

/* 
prop function instead of emitting for consistency. guess I could change it to an emit, 
but here in case it needs functionality
*/
const updateSearchField = (searchOption: SearchOption) => {
  field.value = searchOption.value;
};

// for pagination
const currentPage = ref(1);
const indexOfLastFlight = ref(currentPage.value * props.flightsPerPage);
const indexOfFirstFlight = ref(indexOfLastFlight.value - props.flightsPerPage);
const lastPage = ref(Math.ceil(props.flights.length / props.flightsPerPage));

// updated the number of flights displayed per page for both tables as ui looks sloppy if they are different
const updateFlightsPerPage = (e: InputEvent) => {
  const selectElement = e.target as HTMLSelectElement;
  emit("update:flightsPerPage", Number(selectElement.value));
};

// resets values on certain changes to avoid bugs
const resetValues = () => {
  const displayedFlights = search ? filteredFlights() : props.flights;
  indexOfLastFlight.value = currentPage.value * props.flightsPerPage;
  indexOfFirstFlight.value = indexOfLastFlight.value - props.flightsPerPage;
  lastPage.value = Math.ceil(displayedFlights.length / props.flightsPerPage);
  setSort(sortState.value, true);
};

// resets values and resets page to 1 in certain cases to avoid bugging the pagination
watch(
  [() => props.flights, () => props.direction, () => props.flightsPerPage],
  () => {
    currentPage.value = 1;
    resetValues();
  }
);

watch([currentPage], () => {
  resetValues();
});
</script>
