<template>
  <div
    class="text-sm font-medium text-center text-slate-500 border-b border-slate-200 lg:hidden dark:text-slate-400 dark:border-slate-700"
  >
    <ul class="flex flex-wrap -mb-px">
      <li>
        <p
          @click="selectTable('arr')"
          :class="direction === 'arr' ? selectedStyles : unselectedStyles"
        >
          Arrivals
        </p>
      </li>
      <li>
        <p
          @click="selectTable('dep')"
          :class="direction === 'dep' ? selectedStyles : unselectedStyles"
        >
          Departures
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Direction } from "~/types";

const props = defineProps({
  selectTable: {
    type: Function as PropType<(dir: Direction) => void>,
    required: true,
  },
  direction: {
    type: String as () => Direction,
    required: true,
  },
});

const selectedStyles =
  "cursor-pointer text-lg inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const unselectedStyles =
  "cursor-pointer text-lg inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 dark:hover:text-slate-300";
</script>
