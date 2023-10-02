<template>
  <div id="pagination" class="flex flex-col items-center w-full">
    <div class="flex items-center justify-between w-full px-2 mt-2 mb-2">
      <p class="text-xs text-gray-700 sm:text-sm dark:text-gray-400">
        Showing
        <span class="font-medium">{{
          flights.length ? indexOfFirstFlight + 1 : 0
        }}</span>
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
        <label
          for="per-page"
          class="text-xs text-gray-700 sm:text-sm dark:text-gray-400"
        >
          Per page:
        </label>
        <select
          id="per-page"
          :value="flightsPerPage"
          @input="(e) => updateFlightsPerPage(e as InputEvent)"
          class="block px-0 py-1 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 lg:px-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
        <li v-if="currentPage > 2">
          <p
            @click="emit('update:currentPage', 1)"
            class="flex items-center justify-center h-8 px-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ `<<` }}
          </p>
        </li>
        <li v-if="currentPage > 1">
          <p
            @click="emit('update:currentPage', decrementPage())"
            :class="`flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 2 ? 'mr-0 rounded-l-lg' : ''}`"
          >
            {{ `<` }}
          </p>
        </li>

        <template v-if="currentPage < 98" v-for="i in [1, 2].reverse()">
          <li v-if="currentPage - i >= 1" :key="i">
            <p
              @click="emit('update:currentPage', currentPage - i)"
              class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {{ currentPage - i }}
            </p>
          </li>
        </template>

        <li>
          <p
            :class="`flex items-center justify-center h-8 px-3 text-blue-600 border border-gray-300 cursor-pointer bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white ${
              currentPage === 1 ? 'ml-0 rounded-l-lg' : ''
            } ${
              currentPage === lastPage || lastPage <= 1
                ? 'mr-0 rounded-r-lg'
                : ''
            }`"
          >
            {{ currentPage }}
          </p>
        </li>

        <template v-if="currentPage < 98" v-for="i in 2">
          <li v-if="currentPage + i <= lastPage" :key="i">
            <p
              @click="emit('update:currentPage', currentPage + i)"
              class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {{ currentPage + i }}
            </p>
          </li>
        </template>
        <li v-if="lastPage > 1 && currentPage !== lastPage">
          <p
            @click="emit('update:currentPage', incrementPage())"
            :class="`flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === lastPage - 1 ? 'mr-0 rounded-r-lg' : ''
            }`"
          >
            {{ `>` }}
          </p>
        </li>
        <li v-if="lastPage > 1 && currentPage < lastPage - 1">
          <p
            @click="emit('update:currentPage', lastPage)"
            class="flex items-center justify-center h-8 px-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ `>>` }}
          </p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { Flight } from "~/types";

const props = defineProps({
  flights: {
    type: Array<Flight>,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  indexOfFirstFlight: {
    type: Number,
    required: true,
  },
  indexOfLastFlight: {
    type: Number,
    required: true,
  },
  lastPage: {
    type: Number,
    required: true,
  },
  flightsPerPage: {
    type: Number,
    required: true,
  },
  updateFlightsPerPage: {
    type: Function as PropType<(e: InputEvent) => void>,
    required: true,
  },
  resetValues: {
    type: Function as PropType<() => void>,
    required: true,
  },
});

const emit = defineEmits();

const decrementPage = () => {
  if (props.currentPage > 1) {
    return props.currentPage - 1;
  } else {
    return 1;
  }
};

const incrementPage = () => {
  if (props.currentPage < props.lastPage) {
    return props.currentPage + 1;
  } else {
    return props.lastPage;
  }
};

watch(
  () => props.flights,
  () => {
    // emit("update:currentPage", 1);
    props.resetValues();
  }
);
</script>
