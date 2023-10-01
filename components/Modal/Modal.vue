<template>
  <div
    @click="() => closeModal()"
    class="fixed z-50 w-full h-full bg-black bg-opacity-60"
  >
    <div
      @click="(e) => e.stopPropagation()"
      class="fixed w-11/12 sm:max-w-xl p-6 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg shadow top-1/2 left-1/2 max-w-xxl dark:bg-gray-800 dark:border-gray-700"
    >
      <button
        @click="(e) => closeButton(e)"
        type="button"
        class="absolute inline-flex items-center justify-center w-6 h-6 ml-auto text-sm text-gray-400 bg-transparent rounded-lg right-1 top-1 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
      <div class="flex items-center justify-between h-8 mb-2">
        <h5
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ selectedFlight.dep_iata }}
        </h5>
        <div class="relative w-full h-full mx-4">
          <span
            class="absolute w-full h-px mb-px -translate-y-1/2 bg-slate-200 opacity-60 top-1/2"
          />
          <span
            :style="{ left: `${flightProgress}%` }"
            :class="`absolute text-emerald-600 dark:text-emerald-500 -translate-x-1/2 -translate-y-1/2 top-1/2
            ${
              selectedFlight.status === 'cancelled' || selectedFlight.delayed
                ? 'text-red-500 dark:text-red-500'
                : 'text-emerald-600 dark:text-emerald-500'
            }
            `"
          >
            ✈
          </span>
        </div>
        <h5
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ selectedFlight.arr_iata }}
        </h5>
      </div>
      <div class="flex flex-col">
        <FlightInfo
          :selectedFlight="selectedFlight"
          direction="dep"
          :formatDate="formatDate"
        />
        <FlightInfo
          :selectedFlight="selectedFlight"
          direction="arr"
          :formatDate="formatDate"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { Flight } from "~/types";

const props = defineProps({
  closeModal: {
    type: Function as PropType<(flight?: Flight) => void>,
    required: true,
    default: null,
  },
  selectedFlight: {
    type: Object as () => Flight,
    required: true,
  },
  formatDate: {
    type: Function as PropType<(date: string, key: "date" | "time") => string>,
    required: true,
  },
});

const flightProgress = ref(0);

const calculateFlightProgress = () => {
  const now = new Date();
  const depTime = new Date(props.selectedFlight.dep_actual);
  const arrTime = new Date(props.selectedFlight.arr_estimated);

  if (!depTime || !arrTime || now < depTime) {
    flightProgress.value = 0
  } else if (props.selectedFlight.status === "landed" || now >= arrTime) {
    flightProgress.value = 100;
  } else if (now > depTime && now < arrTime) {
    const timeElapsed = Math.abs(Number(now) - Number(arrTime));
    const duration = Math.abs(Number(arrTime) - Number(depTime));
    const percentage = Math.round((duration - timeElapsed) / duration * 100);
    console.log('percentage: ', percentage)
    flightProgress.value = percentage;
  } else {
    flightProgress.value = 0;
  }

  console.log(flightProgress.value);
}

onMounted(() => {
  calculateFlightProgress()
})

watch(
  () => props.selectedFlight,
  () => {
    calculateFlightProgress();
    // if (props.selectedFlight.stat)
  }
);

const closeButton = (e: MouseEvent) => {
  e.stopPropagation();
  props.closeModal();
};
</script>
