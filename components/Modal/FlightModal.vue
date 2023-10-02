<template>
  <Overlay :closeModal="closeModal">
    <div
      @click="(e) => e.stopPropagation()"
      class="fixed flex flex-col w-11/12 p-6 text-gray-900 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg shadow top-1/2 left-1/2 max-w-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
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
      <div class="flex justify-center mb-2">
        <p
          :class="`${
            selectedFlight.status === 'cancelled'
              ? 'text-red-600 dark:text-red-500 border-red-600 dark:border-red-500'
              : ''
          } ${
            selectedFlight.status === 'scheduled'
              ? 'text-sky-600 dark:text-sky-500 border-sky-600 dark:border-sky-500'
              : ''
          } ${
            selectedFlight.status === 'active'
              ? 'text-emerald-600 dark:text-emerald-500 border-emerald-600 dark:border-emerald-500'
              : ''
          } ${
            selectedFlight.status === 'landed'
              ? 'text-green-600 dark:text-green-500 border-green-600 dark:border-green-600'
              : ''
          } inline-block px-[6px] py-[2px] text-xs font-semibold border-2 rounded-md`"
        >
          {{ selectedFlight.status.toUpperCase() }}
        </p>
      </div>
      <div class="flex items-center justify-between h-8">
        <h3
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ selectedFlight.dep_iata }}
        </h3>
        <div class="relative w-full h-full mx-4">
          <p
            id="flight-duration"
            class="absolute text-xs text-gray-500 -translate-x-1/2 -translate-y-full dark:text-gray-400 top-1/2 left-1/2 whitespace-nowrap"
          >
            {{
              `${Math.floor(selectedFlight.duration / 60)}h ${
                selectedFlight.duration % 60
              }m`
            }}
          </p>
          <p
            id="flight-number"
            class="absolute text-xs text-gray-500 -translate-x-1/2 dark:text-gray-400 top-1/2 left-1/2 whitespace-nowrap"
          >
            {{
              `${
                selectedFlight.airline_iata || selectedFlight.airline_icao || ""
              }${selectedFlight.flight_number}`
            }}
          </p>
          <span
            id="aeroplane-path"
            class="absolute w-full h-px mb-px -translate-y-1/2 bg-slate-400 dark:bg-slate-200 opacity-60 top-1/2"
          />
          <span
            id="aeroplane"
            :style="{
              left: `${flightProgress}%`,
              textShadow: '-2px 2px 3px rgba(0, 0, 0, 0.8)',
            }"
            :class="`drop-shadow-sm absolute text-emerald-600 dark:text-emerald-500 -translate-x-1/2 -translate-y-1/2 top-1/2
            ${
              selectedFlight.status === 'cancelled' || selectedFlight.delayed
                ? 'text-red-600 dark:text-red-500'
                : 'text-emerald-600 dark:text-emerald-500'
            }
            `"
          >
            ✈
          </span>
        </div>
        <h3
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ selectedFlight.arr_iata }}
        </h3>
      </div>
      <div class="flex flex-col mt-2 sm:flex-row sm:mt-4">
        <!-- flex-col items-center sm:flex-row -->
        <FlightInfo
          :selectedFlight="selectedFlight"
          direction="dep"
          :formatDate="formatDate"
          class="mb-3 sm:mb-0 sm:pr-4"
        />
        <div
          class="h-px sm:my-1 sm:h-auto sm:w-px bg-slate-200 dark:bg-slate-600"
        />
        <FlightInfo
          :selectedFlight="selectedFlight"
          direction="arr"
          :formatDate="formatDate"
          class="sm:pl-4"
        />
      </div>
    </div>
  </Overlay>
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
  const depTime = new Date(props.selectedFlight.dep_actual!);
  const arrTime = new Date(props.selectedFlight.arr_estimated!);

  if (!depTime || !arrTime || now < depTime) {
    flightProgress.value = 0;
  } else if (props.selectedFlight.status === "landed" || now >= arrTime) {
    flightProgress.value = 100;
  } else if (now > depTime && now < arrTime) {
    const timeElapsed = Math.abs(Number(now) - Number(arrTime));
    const duration = Math.abs(Number(arrTime) - Number(depTime));
    const percentage = Math.round(((duration - timeElapsed) / duration) * 100);
    console.log("percentage: ", percentage);
    flightProgress.value = percentage;
  } else {
    flightProgress.value = 0;
  }

  console.log(flightProgress.value);
};

onMounted(() => {
  calculateFlightProgress();
});

watch(
  () => props.selectedFlight,
  () => {
    calculateFlightProgress();
  }
);

const closeButton = (e: MouseEvent) => {
  e.stopPropagation();
  props.closeModal();
};
</script>
