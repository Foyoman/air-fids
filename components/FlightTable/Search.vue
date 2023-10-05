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
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-slate-900 bg-slate-100 border border-slate-300 rounded-l-lg sm:hover:bg-slate-200 focus:outline-none dark:bg-slate-700 sm:dark:hover:bg-slate-600 dark:text-white dark:border-slate-600"
        >
          {{ selectedOption.label }}
          <ExpandIcon />
        </button>

        <div
          id="dropdown"
          :class="`${
            showDropdown ? '' : 'hidden'
          } z-50 absolute top-12 bg-white divide-y divide-slate-100 rounded-lg shadow w-44 dark:bg-slate-700`"
        >
          <ul
            class="py-2 text-sm text-slate-700 dark:text-slate-200"
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
                class="inline-flex w-full px-4 py-2 sm:hover:bg-slate-100 sm:dark:hover:bg-slate-600 sm:dark:hover:text-white"
              >
                {{ option.label }}
              </button>
            </li>
          </ul>
        </div>

        <div class="relative w-full">
          <input
            @input="handleInput"
            v-model="searchTerm"
            type="search"
            id="search-dropdown"
            autocomplete="off"
            placeholder="Search flights"
            class="block focus:outline-1 focus:outline-slate-500 p-2.5 w-full z-20 text-sm text-slate-900 bg-slate-50 rounded-r-lg border-l-slate-50 border-l-2 border border-slate-300 dark:text-white dark:bg-slate-700 dark:border-l-slate-700 dark:border-slate-600 dark:placeholder-slate-400"
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

const handleInput = () => {
  props.updateSearchTerm(searchTerm.value);
};

// resets search when flights change - flights change on airport change
watch(
  () => props.direction,
  () => {
    props.updateSearchTerm(searchTerm.value);
  }
);
</script>
