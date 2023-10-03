<template>
  <Overlay :closeModal="closeModal">
    <div
      id="flight-modal"
      @click="(e) => e.stopPropagation()"
      class="fixed flex flex-col w-11/12 max-w-2xl p-3 text-gray-900 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 top-1/2 left-1/2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    >
      <button
        @click="(e) => closeButton(e)"
        type="button"
        class="absolute inline-flex items-center justify-center w-6 h-6 ml-auto text-sm text-gray-400 bg-transparent rounded-lg right-1 top-1 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <CloseButton />
      </button>
      <div class="flex justify-center mb-2">
        <p
          :class="`${
            selectedFlight.status === 'cancelled'
              ? 'text-red-500 border-red-500 dark:text-red-600 dark:border-red-600'
              : ''
          } ${
            selectedFlight.status === 'scheduled'
              ? 'text-sky-500 border-sky-500'
              : ''
          } ${
            selectedFlight.status === 'active'
              ? 'text-emerald-500 border-emerald-500'
              : ''
          } ${
            selectedFlight.status === 'landed'
              ? 'text-green-500 border-green-500'
              : ''
          } inline-block px-[6px] py-[2px] text-xs font-semibold border-2 rounded-md`"
        >
          {{ selectedFlight.status.toUpperCase() }}
        </p>
      </div>
      <div class="flex items-center justify-between h-8 mb-2">
        <h3
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
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
              selectedFlight.flight_iata ||
              selectedFlight.flight_icao ||
              selectedFlight.flight_number ||
              ""
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
              textShadow: 'rgba(0, 0, 0, 0.8) -2px 4px 4px',
            }"
            :class="`text-2xl sm:text-3xl pb-px absolute text-emerald-500 -translate-x-1/2 -translate-y-1/2 top-1/2
            ${
              selectedFlight.status === 'cancelled' || selectedFlight.delayed
                ? 'text-red-500 dark:text-red-600'
                : 'text-emerald-500'
            }
            `"
          >
            ✈
          </span>
        </div>
        <h3
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
        >
          {{ selectedFlight.arr_iata }}
        </h3>
      </div>
      <h4
        v-if="selectedFlight.airline_name || selectedFlight.airline_country"
        id="airline-name-and-country"
        class="mt-2 sm:text-center text-md sm:text-lg"
      >
        {{ selectedFlight.airline_name }}
        <span v-if="selectedFlight.airline_name && selectedFlight.airline_country">
          ·
        </span>
        {{ selectedFlight.airline_country }}
      </h4>
      <div class="flex flex-col mt-2 sm:flex-row">
        <FlightInfo
          :selectedFlight="selectedFlight"
          direction="dep"
          :formatDate="formatDate"
          :findName="findName"
          class="mb-3 sm:mb-0 sm:pr-4"
        />
        <div
          class="h-px sm:my-1 sm:h-auto sm:w-px bg-slate-200 dark:bg-slate-600"
        />
        <FlightInfo
          :selectedFlight="selectedFlight"
          direction="arr"
          :formatDate="formatDate"
          :findName="findName"
          class="mt-2 sm:mt-0 sm:pl-4"
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
  findName: {
    type: Function as PropType<(iata: string) => string>,
    required: true,
  },
});

const flightProgress = ref(0);

/* 
my favourite part of the whole project. calculates the progress of an active flight based 
on how much time has elapsed since now and its departure time, and if it has landed
*/
const calculateFlightProgress = () => {
  const now = new Date().getTime();
  const depTime = new Date(props.selectedFlight.dep_actual!).getTime();
  const arrTime = new Date(props.selectedFlight.arr_estimated!).getTime();

  /* 
  handle errors first, then check if landed, then calculate percentage. an alternative would be 
  to check if a flight status is active, but i guess i didn't do that 
  */
  if (isNaN(depTime) || isNaN(arrTime) || now < depTime) {
    flightProgress.value = 0;
  } else if (props.selectedFlight.status === "landed" || now >= arrTime) {
    flightProgress.value = 100;
  } else if (now > depTime) {
    const timeElapsed = arrTime - now;
    const duration = arrTime - depTime;
    flightProgress.value = Math.round(
      ((duration - timeElapsed) / duration) * 100
    );
  } else {
    flightProgress.value = 0;
  }
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
