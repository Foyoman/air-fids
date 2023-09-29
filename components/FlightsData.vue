<template>
  <div class="container mx-auto flex flex-col items-center p-4">
    <select v-model="airportCode" class="mx-auto">
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <div class="flex w-full">
      <FlightsDisplay
        table="arrivals"
        :flights="arrivals"
        :loading="arrivalsLoading"
      />
      <FlightsDisplay
        table="departures"
        :flights="departures"
        :loading="departuresLoading"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flight } from "~/types";

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
      data.response.sort((a: Flight, b: Flight) => {
        const dateA = new Date(a.dep_time);
        const dateB = new Date(b.dep_time);
        return dateA === dateB ? 0 : dateA < dateB ? -1 : 1;
      });
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

async function getData(city: string, direction: "arr" | "dep") {
  let params = new URLSearchParams({
    api_key: "47819a31-962d-49be-ad71-248d4005117c",
  });

  params.append(`${direction}_iata`, city);

  await fetch(`https://airlabs.co/api/v9/schedules?${params}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.response.sort((a: Flight, b: Flight) => {
        const dateA = new Date(a.dep_time);
        const dateB = new Date(b.dep_time);
        return dateA === dateB ? 0 : dateA < dateB ? -1 : 1;
      });

      if (direction === "arr") {
        arrivals.value = data.response;
        arrivalsLoading.value = false;
      }

      if (direction === "dep") {
        departures.value = data.response;
        departuresLoading.value = false;
      }
    });
}

watch(airportCode, (oldVal, newVal) => {
  departuresLoading.value = true;
  arrivalsLoading.value = true;
  // fetchDepartures(airportCode.value, "arr");
  // fetchDepartures(airportCode.value, "dep");
  getData(airportCode.value, "arr");
  getData(airportCode.value, "dep");
});

onMounted(() => {
  // fetchDepartures(airportCode.value, "arr");
  // fetchDepartures(airportCode.value, "dep");
  getData(airportCode.value, "arr");
  getData(airportCode.value, "dep");
});
</script>
