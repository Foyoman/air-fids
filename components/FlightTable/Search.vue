<template>
  <div class="w-full">
    <div
      @click="clickOff"
      id="overlay"
      :class="`fixed top-0 left-0 z-40 w-screen h-screen overflow-hidden ${
        showDropdown ? 'block' : 'hidden'
      }`"
    />
    <form @submit="(e) => handleSumbit(e)" class="mb-2">
      <div class="relative flex">
        <button
          id="dropdown-button"
          type="button"
          @click="toggleDropdown"
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
        >
          {{ selectedOption.label }}
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown"
          :class="`${
            showDropdown ? '' : 'hidden'
          } z-50 absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li
              v-for="(option, i) in searchOptions.filter(
                (opt) => opt.value !== selectedOption.value
              )"
              @click="(e) => selectOption(e, option)"
              :key="i"
            >
              <button
                type="button"
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {{ option.label }}
              </button>
            </li>
          </ul>
        </div>

        <div class="relative w-full">
          <input
            @input="(e) => handleInput(e)"
            v-model="searchTerm"
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:text-white dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Search flights"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Direction, Flight, SearchField, SearchOption } from "~/types";

const props = defineProps({
  direction: {
    type: String as () => Direction,
    required: true,
  },
  updateSearchTerm: {
    type: Function as PropType<(searchTerm: string) => void>,
    required: true,
  },
  updateSearchField: {
    type: Function as PropType<(searchOption: SearchOption) => void>,
    required: true,
  }
});

const searchOptions: SearchOption[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Time",
    value: props.direction === "arr" ? "arr_time" : "dep_time",
  },
  {
    label: "Airline",
    value: "airline_iata",
  },
  {
    label: "Flight",
    value: "flight_number",
  },
  {
    label: props.direction === "arr" ? "Origin" : "Destination",
    value: props.direction === "arr" ? "dep_iata" : "arr_iata",
  },
  {
    label: "Status",
    value: "status",
  },
];

const showDropdown = ref(false);
const selectedOption = ref<SearchOption>(searchOptions[0]);
const searchTerm = ref<string>("");

const handleSumbit = (e: Event) => {
  e.preventDefault();
  console.log("submitted");
};

const toggleDropdown = () => {
  console.log("toggle dropdown");
  showDropdown.value = !showDropdown.value;
};

const selectOption = (e: MouseEvent, option: SearchOption) => {
  e.stopPropagation();
  selectedOption.value = option;
  props.updateSearchField(option);
  showDropdown.value = false;
};

const clickOff = () => {
  showDropdown.value = false;
};

const handleInput = (e: Event) => {
  props.updateSearchTerm(searchTerm.value);
};

/*
<template>
  <div>
    <select v-model="selectedField">
      <option v-for="option in searchOptions" :value="option.value" :key="option.value">
        {{ option.label }}
      </option>
    </select>
    <input v-model="searchTerm" placeholder="Search flights...">
    <!-- ... rest of your table goes here -->
  </div>
</template>

filteredFlights() {
  if (!this.searchTerm) return this.flights;

  return this.flights.filter(flight => {
    if (this.selectedField === 'all') {
      return Object.values(flight).some(value =>
        String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      return String(flight[this.selectedField]).toLowerCase().includes(this.searchTerm.toLowerCase());
    }
  });
}
*/
</script>
