<template>
  <div
    class="flex-col items-center w-full px-0 pt-3 overflow-visible sm:pt-4 lg:w-1/2"
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
        class="relative w-full overflow-x-auto shadow-md lg:block xs:rounded-lg"
      >
        <table
          class="w-full text-sm text-left text-slate-500 dark:text-slate-400"
        >
          <thead
            class="text-xs uppercase text-slate-700 bg-slate-50 dark:bg-slate-700 dark:text-slate-400"
          >
            <tr>
              <th
                scope="col"
                @click="setSort(direction === 'arr' ? 'arr_time' : 'dep_time')"
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-2 sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-600"
              >
                <span class="flex items-center justify-center">
                  <p>Time</p>
                  <SortArrow
                    v-if="sortState === 'arr_time' || sortState === 'dep_time'"
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
              <th
                scope="col"
                @click="setSort('airline_name')"
                class="hidden px-0 py-3 text-xs text-center cursor-pointer xl:table-cell sm:px-2 sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-600"
              >
                <span
                  class="flex items-center justify-center"
                >
                  <p>Airline</p>
                  <SortArrow
                    v-if="sortState === 'airline_name'"
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
              <th
                scope="col"
                @click="setSort('flight_iata')"
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-2 sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-600"
              >
                <span class="flex items-center justify-center">
                  <p>Flight</p>
                  <SortArrow
                    v-if="sortState === 'flight_iata'"
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
              <th
                scope="col"
                @click="
                  direction === 'arr'
                    ? setSort('dep_iata')
                    : setSort('arr_iata')
                "
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-2 sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-600"
              >
                <span class="flex items-center justify-center">
                  <p>{{ direction === "arr" ? "Origin" : "Dest." }}</p>
                  <SortArrow
                    v-if="
                      direction === 'arr'
                        ? sortState === 'dep_iata'
                        : sortState === 'arr_iata'
                    "
                    :class="reverseState ? 'rotate-180' : ''"
                  />
                  <SortIcon v-else />
                </span>
              </th>
              <th
                scope="col"
                @click="setSort('status')"
                class="px-0 py-3 text-xs text-center cursor-pointer sm:px-2 sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-600"
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
              class="bg-white border-b cursor-pointer dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600"
            >
              <td
                class="px-2 py-3 text-xs font-medium text-center text-slate-900 sm:px-2 sm:text-sm whitespace-nowrap dark:text-white"
              >
                <span
                  :class="`${
                    direction === 'arr'
                      ? flight.delayed && flight.arr_estimated
                        ? 'text-slate-500 dark:text-slate-400 line-through font-normal`'
                        : ''
                      : flight.delayed && flight.dep_estimated
                      ? 'text-slate-500 dark:text-slate-400 line-through font-normal`'
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
                <span v-if="flight.status !== 'cancelled'">
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
              <td
                :class="`hidden text-ellipsis max-w-xs xl:table-cell px-2 py-3 text-xs text-center sm:px-2 sm:text-sm ${
                  flight.airline_name
                    ? 'text-slate-900 dark:text-slate-200'
                    : 'text-slate-500 dark:text-slate-400'
                }`"
              >
                {{ flight.airline_name || "Unknown" }}
              </td>
              <td
                id="flight-number"
                class="px-2 py-3 text-xs text-center sm:px-2 sm:text-sm"
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
                class="px-2 py-3 text-xs text-center sm:px-2 sm:text-sm"
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
                } text-center text-xs sm:text-sm px-2 sm:px-2 py-3`"
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
import { Flight, Direction, SearchOption, SortTerm } from "~/types";

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
        key: SortTerm,
        reverse: boolean
      ) => Flight[]
    >,
    required: true,
  },
});

const emit = defineEmits();

// for sort
const sortState = ref<SortTerm>(props.direction === "arr" ? "arr_time" : "dep_time");
const reverseState = ref(false);

// sorts table from table head values and switches state values for ux
const setSort = (sortKey: SortTerm, fromWatch?: boolean) => {
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
    "dep_city",
    "arr_city",
    "status",
  ];

  const lowerSearch = search.value.toLowerCase();

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

// resets search when flights change - flights change on airport change
watch(
  () => props.flights,
  () => {
    search.value = "";
  }
);

// updates search term, resets page to 1 on change to avoid bugs
const updateSearchTerm = (searchTerm: string) => {
  currentPage.value = 1;
  search.value = searchTerm;
};

/* prop function instead of emitting for consistency. guess I could change it to an emit, 
but here in case it needs functionality */
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
