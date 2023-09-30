<template>
  <div
    @click="() => closeModal()"
    class="w-full h-full fixed bg-black bg-opacity-60 z-50"
  >
    <div
      @click="(e) => e.stopPropagation()"
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xxl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <button
        @click="(e) => closeButton(e)"
        type="button"
        class="absolute right-1 top-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
      <div class="flex justify-between">
        <h5
          class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ selectedFlight?.dep_iata }}
        </h5>
        <h5
          class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ selectedFlight?.arr_iata }}
        </h5>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Flight } from "~/types";

export default {
  props: {
    closeModal: {
      type: Function,
      required: true,
      default: null,
    },
    selectedFlight: {
      type: Object as () => Flight | null,
      required: false,
      default: null,
    },
  },
  methods: {
    closeButton(e: MouseEvent) {
      e.stopPropagation();
      this.closeModal();
    },
  },
};
</script>
