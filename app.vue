<template>
  <FlightModal
    v-if="showModal && selectedFlight"
    :closeModal="toggleModal"
    :selectedFlight="selectedFlight"
    :formatDate="formatDate"
  />
  <Error v-if="error" :message="error" :refresh="refresh" />
  <div class="container flex flex-col items-center px-2 sm:px-4 py-8 mx-auto">
    <select
      id="cities"
      v-model="airportCode"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <DarkModeToggle class="absolute top-4 right-4" />
    <div
      v-if="!error"
      class="flex flex-col items-center w-full lg:flex-row lg:items-start"
    >
      <Tabs :selectTable="selectTable" :direction="direction" class="mt-2" />
      <FlightsDisplay
        class="flex lg:hidden"
        :direction="direction"
        :flights="direction === 'arr' ? arrivals : departures"
        :loading="direction === 'arr' ? arrivalsLoading : departuresLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
        v-model:flightsPerPage="flightsPerPage"
        :sortFlights="sortFlights"
      />

      <FlightsDisplay
        class="hidden lg:flex lg:pl-0 lg:pr-4"
        direction="arr"
        :flights="arrivals"
        :loading="arrivalsLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
        v-model:flightsPerPage="flightsPerPage"
        :sortFlights="sortFlights"
      />
      <FlightsDisplay
        class="hidden lg:flex lg:pr-0 lg:pl-4"
        direction="dep"
        :flights="departures"
        :loading="departuresLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
        v-model:flightsPerPage="flightsPerPage"
        :sortFlights="sortFlights"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flight } from "~/types";
import { dummyArrivals, dummyDepartures } from "~/lib/flights"; //

// api request
const arrivals = ref<Flight[]>([]);
const departures = ref<Flight[]>([]);
const arrivalsLoading = ref(false);
const departuresLoading = ref(false);
const airportCode = ref("SYD");
const airportCodes = ["SYD", "MEL", "BNE", "ADL", "PER", "HBA", "DRW", "CBR"];

// modal, selected flight info
const showModal = ref(false);
const selectedFlight = ref<Flight | null>(null);

const flightsPerPage = ref(10);

// for sort
const direction = ref<"arr" | "dep">("arr");

// error
const error = ref<string | null>("");

const runtimeConfig = useRuntimeConfig();

async function getFlights(city: string, dir: "arr" | "dep") {
  let params = new URLSearchParams({
    api_key: runtimeConfig.public.API_KEY,
  });

  params.append(`${dir}_iata`, city);

  // `https://airlabs.co/api/v9/schedules?${params}`

  await fetch(`https://airlabs.co/api/v9/schedules?${params}badkey`)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        return res.json();
      } else {
        console.error(res);
        error.value = `Response status: ${res.status}`;
      }
    })
    .then((data) => {
      console.log(data);

      if (data.response) {
        if (dir === "arr") {
          arrivals.value = sortFlights(data.response, "arr", "time", false);
          arrivalsLoading.value = false;
        }

        if (dir === "dep") {
          departures.value = sortFlights(data.response, "dep", "time", false);
          departuresLoading.value = false;
        }
      } else {
        error.value = data.error.message;
      }
    })
    .catch((error) => {
      error.value = "Invalid endpoint url";
      console.error(error);
    });
}

onMounted(() => {
  // getFlights(airportCode.value, "arr");
  // getFlights(airportCode.value, "dep");

  // reset all this
  const sortedArrivals = sortFlights(dummyArrivals, "arr", "time", false);
  const sortedDepartures = sortFlights(dummyDepartures, "dep", "time", false);

  console.log(sortedArrivals);
  arrivals.value = sortedArrivals;
  departures.value = sortedDepartures;
  // down to here
});

watch(airportCode, () => {
  departuresLoading.value = true;
  arrivalsLoading.value = true;
  // getFlights(airportCode.value, "arr");
  // getFlights(airportCode.value, "dep");
});

const refresh = () => {
  error.value = null;
  getFlights(airportCode.value, "arr");
  getFlights(airportCode.value, "dep");
};

const sortFlights = (
  flights: Flight[],
  dir: "arr" | "dep",
  key: "time" | "flight" | "origin" | "destination" | "status",
  reverse: boolean
) => {
  const sorted = flights.sort((a: Flight, b: Flight) => {
    let sortA: Flight | Date | string = a;
    let sortB: Flight | Date | string = b;

    if (key === "time") {
      sortA = new Date(dir === "arr" ? a.arr_time : a.dep_time);
      sortB = new Date(dir === "arr" ? b.arr_time : b.dep_time);
    } else if (key === "flight") {
      sortA = a.airline_iata || a.airline_icao || "";
      sortB = b.airline_iata || b.airline_icao || "";
    } else if (key === "origin") {
      sortA = a.dep_iata || "";
      sortB = b.dep_iata || "";
    } else if (key === "destination") {
      sortA = a.arr_iata || "";
      sortB = b.arr_iata || "";
    } else if (key === "status") {
      sortA = a.status || "";
      sortB = b.status || "";
    }

    if (sortA === sortB && key !== "time") {
      const timeA = new Date(dir === "arr" ? a.arr_time : a.dep_time);
      const timeB = new Date(dir === "arr" ? b.arr_time : b.dep_time);
      return timeA.getTime() - timeB.getTime();
    }

    if (reverse) {
      return sortA === sortB ? 0 : sortA > sortB ? -1 : 1;
    } else {
      return sortA === sortB ? 0 : sortA < sortB ? -1 : 1;
    }
  });

  return sorted;
};

const formatDate = (date: string, key: "date" | "time") => {
  const dateObject = new Date(date);

  const dateArr = String(dateObject)
    .split(" ")
    .slice(0, 3)
    .map((val) => val.replace(/^0+/, ""));
  const [day, month, dayDate] = dateArr;
  const formattedDate = `${day}, ${dayDate} ${month}`;

  // const month = String(dateObject.getMonth() + 1) // .padStart(2, "0"); // Month is zero-based
  // const day = String(dateObject.getDate()) // .padStart(2, "0");
  const hours = String(dateObject.getHours()).padStart(2, "0"); // Ensure two digits for hours
  const minutes = String(dateObject.getMinutes()).padStart(2, "0"); // Ensure two digits for minutes

  if (key === "date") {
    return formattedDate;
  } else {
    return `${hours}:${minutes}`;
  }
};

const toggleModal = (flight?: Flight) => {
  if (!selectedFlight.value && flight) {
    selectedFlight.value = flight;
  } else {
    selectedFlight.value = null;
  }
  showModal.value = !showModal.value;
};

watch(showModal, () => {
  const body = document.body;
  if (showModal.value) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
});

const selectTable = (dir: "arr" | "dep") => {
  direction.value = dir;
};
</script>
