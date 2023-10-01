<template>
  <div class="flex justify-between mt-3 lg:mt-0 lg:w-1/2">
    <div>
      <p class="text-gray-500 dark:text-gray-400">{{ direction === 'arr' ? "Arrival" : "Departure" }}</p>
      <div class="flex lg:flex-col-reverse">
        <p
          :class="`${
            selectedFlight.status === 'cancelled' || selectedFlight.arr_estimated && selectedFlight.dep_estimated &&
            new Date(direction === 'arr' ? selectedFlight.arr_time : selectedFlight.dep_time) !==
            new Date(direction === 'arr' ? selectedFlight.arr_estimated : selectedFlight.dep_estimated)
              ? 'line-through text-gray-500 dark:text-gray-400'
              : 'text-gray-900 dark:text-white'
          }`"
        >
          {{ formatDate(direction === 'arr' ? selectedFlight.arr_time : selectedFlight.dep_time, "time") }}
        </p>
        <p
          v-if="
            selectedFlight.status === 'cancelled' || selectedFlight.arr_estimated && selectedFlight.dep_estimated &&
            new Date(direction === 'arr' ? selectedFlight.arr_time : selectedFlight.dep_time) !==
            new Date(direction === 'arr' ? selectedFlight.arr_estimated : selectedFlight.dep_estimated)
          "
          :class="`ml-2 lg:ml-0 ${
            new Date(direction === 'arr' ? selectedFlight.arr_estimated : selectedFlight.dep_estimated) <
            new Date(direction === 'arr' ? selectedFlight.arr_time : selectedFlight.dep_time)
              ? 'text-emerald-600 dark:text-emerald-500'
              : 'text-red-500 dark:text-red-500'
          } lg:text-2xl`"
        >
          {{ selectedFlight.status === 'cancelled' ? 'Cancelled' : formatDate(direction === 'arr' ? selectedFlight.arr_estimated : selectedFlight.dep_estimated, "time") }}
        </p>
      </div>
    </div>
    <div class="flex gap-4">
      <div>
        <p class="text-gray-500 dark:text-gray-400">Terminal</p>
        <p class="text-gray-900 dark:text-white lg:text-2xl">
          {{ direction === 'arr' ? selectedFlight.arr_terminal || "-" : selectedFlight.dep_terminal || "-" }}
        </p>
      </div>
      <div>
        <p class="text-gray-500 dark:text-gray-400">Gate</p>
        <p class="text-gray-900 dark:text-white lg:text-2xl">
          {{ direction === 'arr' ? selectedFlight.arr_gate || "-" : selectedFlight.dep_gate || "-" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flight } from "~/types";

const props = defineProps({
  selectedFlight: {
    type: Object as () => Flight,
    required: true,
  },
  direction: {
    type: String as () => 'arr' | 'dep',
    required: true,
  },
  formatDate: {
    type: Function as PropType<(date: string, key: "date" | "time") => string>,
    required: true,
  },
});
</script>