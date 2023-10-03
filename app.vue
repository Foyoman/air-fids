<template>
  <FlightModal
    v-if="showModal && selectedFlight"
    :closeModal="toggleModal"
    :selectedFlight="selectedFlight"
    :formatDate="formatDate"
    :findName="findName"
  />
  <Error v-if="error" :message="error" :refresh="refresh" />
  <div class="container flex flex-col items-center px-2 py-8 mx-auto sm:px-4">
    <DarkModeToggle class="absolute top-4 right-4" />
    <select
      id="cities"
      v-model="airportCode"
      class="bg-gray-50 tracking-tight font-bold border border-gray-300 text-gray-900 text-2xl rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    >
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <h4
      class="mt-2 text-lg font-light tracking-tight text-center text-gray-900 dark:text-gray-300"
    >
      {{ findName(airportCode) }}
    </h4>
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
import { Flight, Direction, TableField, AirportCode } from "~/types";
import { dummyArrivals, dummyDepartures } from "~/lib/flights"; // remove after
import { airports } from "~/lib/airports";
import { airlines } from "~/lib/airlines";

// api request
const arrivals = ref<Flight[]>([]);
const departures = ref<Flight[]>([]);
const arrivalsLoading = ref(false);
const departuresLoading = ref(false);
const airportCode = ref<AirportCode>("SYD");
const airportCodes: AirportCode[] = [
  "SYD",
  "MEL",
  "BNE",
  "ADL",
  "PER",
  "HBA",
  "DRW",
  "CBR",
];

// modal, selected flight info
const showModal = ref(false);
const selectedFlight = ref<Flight | null>(null);

const flightsPerPage = ref(10);

// for sort
const direction = ref<Direction>("arr");

// error
const error = ref<string | null>("");

const runtimeConfig = useRuntimeConfig();

async function getFlights(city: string, dir: Direction) {
  let params = new URLSearchParams({
    api_key: runtimeConfig.public.API_KEY,
  });

  params.append(`${dir}_iata`, city);

  // `https://airlabs.co/api/v9/schedules?${params}`

  await fetch(`https://airlabs.co/api/v9/schedules?${params}`)
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
        const flights: Flight[] = data.response;

        flights.map((flight) => {
          appendAirlineAndCountry(flight);
        });

        console.log(flights);

        if (dir === "arr") {
          arrivals.value = sortFlights(flights, "arr", "time", false);
          arrivalsLoading.value = false;
        }

        if (dir === "dep") {
          departures.value = sortFlights(flights, "dep", "time", false);
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

const findAirline = (flight: Flight) => {
  return airlines.find((airline) => {
    return airline.iata === flight.airline_iata || airline.icao === flight.airline_icao;
  })
};

const appendAirlineAndCountry = (flight: Flight) => {
  const airline = findAirline(flight);
  const toAssign = {
    airline_name: airline?.name,
    airline_country: airline?.country,
  }
  Object.assign(flight, toAssign);
}

onMounted(() => {
  // getFlights(airportCode.value, "arr");
  // getFlights(airportCode.value, "dep");

  // reset all this
  const sortedArrivals = sortFlights(dummyArrivals, "arr", "time", false);
  const sortedDepartures = sortFlights(dummyDepartures, "dep", "time", false);

  sortedArrivals.map((flight) => {
    appendAirlineAndCountry(flight);
  })

  sortedDepartures.map((flight) => {
    appendAirlineAndCountry(flight);
  })

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
  dir: Direction,
  key: TableField,
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

const findName = (iata: string) => {
  const airport = airports.find((airport) => airport.iata === iata);
  const name = airport?.name;

  return name || iata;
};

const toggleModal = (flight?: Flight) => {
  console.log(flight);
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

const selectTable = (dir: Direction) => {
  direction.value = dir;
};
</script>
