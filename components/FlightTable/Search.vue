<template>
  <div class="w-full">
    <div
      @click="clickOff"
      id="overlay"
      :class="`fixed top-0 left-0 z-40 w-screen h-screen overflow-hidden ${
        showDropdown ? 'block' : 'hidden'
      }`"
    />
    <div>
      <div class="relative flex">
        <button
          id="dropdown-button"
          type="button"
          @click="toggleDropdown"
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
        >
          {{ selectedOption.label }}
          <ExpandIcon />
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
            autocomplete="off"
            placeholder="Search flights"
            class="block focus:outline-1 focus:outline-gray-500 p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:text-white dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Direction, SearchOption } from "~/types";

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
  },
});

// search options with labels for ui and values as keys of Flight type
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
    value: "airline_name",
  },
  {
    label: "Flight",
    value: "flight_iata",
  },
  {
    label: props.direction === "arr" ? "Origin" : "Destination",
    value: props.direction === "arr" ? "dep_city" : "arr_city",
  },
  {
    label: "Status",
    value: "status",
  },
];

const showDropdown = ref(false);
const selectedOption = ref<SearchOption>(searchOptions[0]);
const searchTerm = ref<string>("");

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectOption = (e: MouseEvent, option: SearchOption) => {
  e.stopPropagation();
  selectedOption.value = option;
  props.updateSearchField(option);
  showDropdown.value = false;
};

// clicking off the dropdown will close it
const clickOff = () => {
  showDropdown.value = false;
};

const handleInput = (e: Event) => {
  props.updateSearchTerm(searchTerm.value);
};
</script>
