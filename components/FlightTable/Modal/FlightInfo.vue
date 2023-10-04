<template>
  <div class="flex flex-col justify-between sm:w-1/2">
    <p
      class="text-xs sm:text-sm tracking-tight text-slate-500 dark:text-slate-400"
    >
      {{
        direction === "arr" ? selectedFlight.arr_name : selectedFlight.dep_name
      }}
    </p>
    <div>
      <p class="text-lg text-slate-800 dark:text-slate-100">
        <span v-if="direction === 'arr' && selectedFlight.arr_city">
          {{ selectedFlight.arr_city }} ·
        </span>
        <span v-if="direction === 'dep' && selectedFlight.dep_city">
          {{ selectedFlight.dep_city }} ·
        </span>
        {{
          formatDate(
            direction === "arr"
              ? selectedFlight.arr_estimated || selectedFlight.arr_time
              : selectedFlight.dep_estimated || selectedFlight.dep_time,
            "date"
          )
        }}
      </p>
      <div class="flex justify-between w-full mt-1">
        <div>
          <p class="text-slate-500 dark:text-slate-400">
            {{ direction === "arr" ? "Arrival" : "Departure" }}
          </p>

          <div class="flex sm:flex-col-reverse">
            <p
              :class="`${
                selectedFlight.status === 'cancelled' ||
                (selectedFlight.arr_estimated &&
                  selectedFlight.dep_estimated &&
                  new Date(
                    direction === 'arr'
                      ? selectedFlight.arr_time
                      : selectedFlight.dep_time
                  ) !==
                    new Date(
                      direction === 'arr'
                        ? selectedFlight.arr_estimated
                        : selectedFlight.dep_estimated
                    ))
                  ? 'line-through text-slate-500 dark:text-slate-400'
                  : 'text-slate-900 dark:text-white sm:text-2xl'
              }`"
            >
              {{
                formatDate(
                  direction === "arr"
                    ? selectedFlight.arr_time
                    : selectedFlight.dep_time,
                  "time"
                )
              }}
            </p>

            <p
              v-if="
                selectedFlight.status === 'cancelled' ||
                (selectedFlight.arr_estimated &&
                  selectedFlight.dep_estimated &&
                  new Date(
                    direction === 'arr'
                      ? selectedFlight.arr_time
                      : selectedFlight.dep_time
                  ) !==
                    new Date(
                      direction === 'arr'
                        ? selectedFlight.arr_estimated
                        : selectedFlight.dep_estimated
                    ))
              "
              :class="`ml-2 sm:ml-0 ${
                selectedFlight.arr_estimated &&
                selectedFlight.dep_estimated &&
                new Date(
                  direction === 'arr'
                    ? selectedFlight.arr_estimated
                    : selectedFlight.dep_estimated
                ) <
                  new Date(
                    direction === 'arr'
                      ? selectedFlight.arr_time
                      : selectedFlight.dep_time
                  )
                  ? 'text-emerald-500'
                  : 'text-red-500'
              } sm:text-2xl`"
            >
              {{
                selectedFlight.status === "cancelled"
                  ? "Cancelled"
                  : selectedFlight.arr_estimated &&
                    selectedFlight.dep_estimated &&
                    formatDate(
                      direction === "arr"
                        ? selectedFlight.arr_estimated
                        : selectedFlight.dep_estimated,
                      "time"
                    )
              }}
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <div>
            <p class="text-slate-500 dark:text-slate-400">Terminal</p>
            <p class="text-slate-900 dark:text-white sm:text-2xl">
              {{
                direction === "arr"
                  ? selectedFlight.arr_terminal || "-"
                  : selectedFlight.dep_terminal || "-"
              }}
            </p>
          </div>
          <div>
            <p class="text-slate-500 dark:text-slate-400">Gate</p>
            <p class="text-slate-900 dark:text-white sm:text-2xl">
              {{
                direction === "arr"
                  ? selectedFlight.arr_gate || "-"
                  : selectedFlight.dep_gate || "-"
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Direction, Flight } from "~/types";

const props = defineProps({
  selectedFlight: {
    type: Object as () => Flight,
    required: true,
  },
  direction: {
    type: String as () => Direction,
    required: true,
  },
  formatDate: {
    type: Function as PropType<(date: string, key: "date" | "time") => string>,
    required: true,
  },
});
</script>
