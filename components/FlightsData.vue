<template>
  <div class="container mx-auto flex flex-col items-center p-4">
    <select v-model="airportCode" class="mx-auto">
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <div class="flex w-full">
      <FlightsDisplay table="arrivals" :flights="arrivals" />
      <FlightsDisplay table="departures" :flights="departures" />
    </div>
  </div>
</template>

<script setup lang="ts">
const arrivals = ref([]);
const departures = ref([]);
const airportCode = ref("SYD");
const airportCodes = ["SYD", "MEL", "BNE", "ADL", "PER", "HBA", "DRW", "CBR"]

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
      if (direction === "dep") {
        departures.value = data.response;
      }
      if (direction === "arr") {
        arrivals.value = data.response;
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

watch(airportCode, (oldVal, newVal) => {
  console.log(airportCode.value);
  fetchDepartures(airportCode.value, "arr");
  fetchDepartures(airportCode.value, "dep");
})

onMounted(() => {
  fetchDepartures("SYD", "arr");
  fetchDepartures("SYD", "dep");
});
</script>
