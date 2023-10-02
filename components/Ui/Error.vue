<template>
  <Overlay>
    <div
      class="fixed w-11/12 -translate-x-1/2 -translate-y-1/2 sm:max-w-xl top-1/2 left-1/2 max-w-xxl p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
    >
      <div class="flex items-center">
        <InfoIcon />
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-300">
          Something went wrong
        </h3>
      </div>
      <div class="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
        <p>There was an error and the flight data could not be loaded. Please try again.</p>
        <p class="mt-2">Error message: {{ message }}</p>
      </div>
      <div class="flex">
        <button
          @click="refresh"
          type="button"
          class="ml-auto text-white bg-gray-700 hover:bg-gray-800 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          <RefreshIcon class="-ml-0.5 mr-2 h-3 w-3" />
          Refresh
        </button>
      </div>
    </div>
  </Overlay>
</template>

<script setup lang="ts">
import { Flight } from "~/types";
import { PropType } from "nuxt/dist/app/compat/capi";

const props = defineProps({
  message: {
    type: String,
    required: false,
    default: "Unknown",
  },
  refresh: {
    type: Function as PropType<() => void>,
    required: true
  }
});
</script>
