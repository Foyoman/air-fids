<template>
  <div
    id="pagination"
    class="overflow-x-auto flex flex-col items-center w-full"
  >
    <div class="flex items-center justify-between w-full px-2 mt-2 mb-2">
      <p class="text-xs text-slate-700 sm:text-sm dark:text-slate-400">
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
          class="text-xs text-slate-700 sm:text-sm dark:text-slate-400"
        >
          Per page:
        </label>
        <select
          id="per-page"
          :value="flightsPerPage"
          @input="(e) => updateFlightsPerPage(e as InputEvent)"
          style="
            background-size: 0.5rem;
            background-position: right 0.2rem center;
          "
          class="block text-center bg-chevron bg-no-repeat pl-1 pb-[5px] pt-1 pr-3 text-xs text-slate-900 border border-slate-300 rounded-lg cursor-pointer sm:dark:hover:bg-slate-600 focus:outline-none sm:hover:bg-slate-200 bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
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
            class="flex items-center justify-center h-8 px-2 ml-0 leading-tight text-slate-500 bg-white border border-slate-300 rounded-l-lg cursor-pointer sm:hover:bg-slate-100 sm:hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 sm:dark:hover:bg-slate-700 sm:dark:hover:text-white"
          >
            {{ `<<` }}
          </p>
        </li>

        <li v-if="currentPage > 1">
          <p
            @click="emit('update:currentPage', decrementPage())"
            :class="`flex items-center justify-center h-8 px-3 leading-tight text-slate-500 bg-white border border-slate-300 cursor-pointer sm:hover:bg-slate-100 sm:hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 sm:dark:hover:bg-slate-700 sm:dark:hover:text-white ${
              currentPage === 2 ? 'mr-0 rounded-l-lg' : ''
            }`"
          >
            {{ `<` }}
          </p>
        </li>

        <template v-if="currentPage < 98" v-for="i in [1, 2].reverse()">
          <li v-if="currentPage - i >= 1" :key="i">
            <p
              @click="emit('update:currentPage', currentPage - i)"
              class="flex items-center justify-center h-8 px-3 leading-tight text-slate-500 bg-white border border-slate-300 cursor-pointer sm:hover:bg-slate-100 sm:hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 sm:dark:hover:bg-slate-700 sm:dark:hover:text-white"
            >
              {{ currentPage - i }}
            </p>
          </li>
        </template>

        <li>
          <p
            :class="`flex items-center justify-center h-8 px-3 text-blue-600 border border-slate-300 cursor-pointer bg-blue-50 sm:hover:bg-blue-100 sm:hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white ${
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

        <template
          v-if="currentPage < 98"
          v-for="i in currentPage > 2 ? 2 : currentPage === 1 ? 4 : 3"
        >
          <li v-if="currentPage + i <= lastPage" :key="i">
            <p
              @click="emit('update:currentPage', currentPage + i)"
              class="flex items-center justify-center h-8 px-3 leading-tight text-slate-500 bg-white border border-slate-300 cursor-pointer sm:hover:bg-slate-100 sm:hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 sm:dark:hover:bg-slate-700 sm:dark:hover:text-white"
            >
              {{ currentPage + i }}
            </p>
          </li>
        </template>

        <li v-if="lastPage > 1 && currentPage !== lastPage">
          <p
            @click="emit('update:currentPage', incrementPage())"
            :class="`flex items-center justify-center h-8 px-3 leading-tight text-slate-500 bg-white border border-slate-300 cursor-pointer sm:hover:bg-slate-100 sm:hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 sm:dark:hover:bg-slate-700 sm:dark:hover:text-white ${
              currentPage === lastPage - 1 ? 'mr-0 rounded-r-lg' : ''
            }`"
          >
            {{ `>` }}
          </p>
        </li>

        <li v-if="lastPage > 1 && currentPage < lastPage - 1">
          <p
            @click="emit('update:currentPage', lastPage)"
            class="flex items-center justify-center h-8 px-2 leading-tight text-slate-500 bg-white border border-slate-300 rounded-r-lg cursor-pointer sm:hover:bg-slate-100 sm:hover:text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 sm:dark:hover:bg-slate-700 sm:dark:hover:text-white"
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

/* although previous and next buttons aren't shown when no further or less pages can be selected, 
here for extra measure. */
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
    props.resetValues();
  }
);
</script>
