<template>
  <div class="container mx-auto flex flex-col items-center p-4">
    <select v-model="airportCode" class="mx-auto">
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <div class="flex w-full">
      <FlightsDisplay table="arrivals" :flights="arrivals" :loading="arrivalsLoading" />
      <FlightsDisplay table="departures" :flights="departures" :loading="departuresLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flight } from '~/types';

const arrivals = ref([]);
const departures = ref([]);
const arrivalsLoading = ref(false);
const departuresLoading = ref(false);
const airportCode = ref("SYD");
const airportCodes = ["SYD", "MEL", "BNE", "ADL", "PER", "HBA", "DRW", "CBR"];

const fetchDepartures = async (airport: string, direction: "arr" | "dep") => {
  fetch(
    `https://airlabs.co/api/v9/schedules?${direction}_iata=${airport}&api_key=YOUR-API-KEY`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => {
      console.log(data.response);
      data.response.sort((a: Flight, b: Flight) => {
        const dateA = new Date(a.dep_time);
        const dateB = new Date(b.dep_time);
        return dateA === dateB ? 0 : dateA < dateB ? -1 : 1;
      })
      // console.log(new Date(data.response[0].dep_time))

      if (direction === "arr") {
        arrivals.value = data.response;
        arrivalsLoading.value = false;
      }
      if (direction === "dep") {
        departures.value = data.response;
        departuresLoading.value = false;
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

watch(airportCode, (oldVal, newVal) => {
  console.log(airportCode.value);
  departuresLoading.value = true;
  arrivalsLoading.value = true;
  fetchDepartures(airportCode.value, "arr");
  fetchDepartures(airportCode.value, "dep");
})

onMounted(() => {
  fetchDepartures("SYD", "arr");
  fetchDepartures("SYD", "dep");
});
</script>
