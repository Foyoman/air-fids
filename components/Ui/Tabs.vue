<template>
  <div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 lg:hidden dark:text-gray-400 dark:border-gray-700"
  >
    <ul class="flex flex-wrap -mb-px">
      <li class="mr-2">
        <p
          @click="selectTable('arr')"
          :class="direction === 'arr' ? selectedStyles : unselectedStyles"
        >
          Arrivals
        </p>
      </li>
      <li class="mr-2">
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
const props = defineProps({
  selectTable: {
    type: Function as PropType<(dir: "arr" | "dep") => void>,
    required: true,
  },
  direction: {
    type: String as () => "arr" | "dep",
    required: true,
  }
});

const selectedStyles =
  "text-lg inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const unselectedStyles =
  "text-lg inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
</script>
