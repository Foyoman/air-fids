<template>
  <FlightModal
    v-if="showModal && selectedFlight"
    :closeModal="toggleModal"
    :selectedFlight="selectedFlight"
    :formatDate="formatDate"
  />
  <Error v-if="error" :message="error" :refresh="refresh" />
  <div
    class="container flex flex-col items-center px-2 pt-4 pb-8 mx-auto xs:px-4 sm:pt-6 lg:px-4"
  >
    <DarkModeToggle class="absolute top-4 right-4" />
    <select
      id="cities"
      v-model="airportCode"
      style="background-size: 0.75rem; background-position: right 0.5rem center;"
      class="bg-slate-50 pr-4 bg-chevron bg-no-repeat focus:outline-none sm:hover:bg-slate-200 sm:dark:hover:bg-slate-600 cursor-pointer tracking-tight font-bold border border-slate-300 text-slate-900 text-3xl rounded-lg block px-2 py-1 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
    >
      <option v-for="airport in airportCodes" :value="airport" :key="airport">
        {{ airport }}
      </option>
    </select>
    <h4
      class="mt-2 text-lg font-light tracking-tight text-center text-slate-900 dark:text-slate-300"
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
        direction="arr"
        :flights="arrivals"
        :loading="arrivalsLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
        v-model:flightsPerPage="flightsPerPage"
        :sortFlights="sortFlights"
        class="hidden lg:flex lg:pl-0 lg:pr-2 2xl:pr-4"
      />
      <FlightsDisplay
        direction="dep"
        :flights="departures"
        :loading="departuresLoading"
        :openModal="toggleModal"
        :formatDate="formatDate"
        v-model:flightsPerPage="flightsPerPage"
        :sortFlights="sortFlights"
        class="hidden lg:flex lg:pr-0 lg:pl-2 2xl:pl-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flight, Direction, AirportCode, SortTerm } from "~/types";
// import { dummyArrivals, dummyDepartures } from "~/lib/flights"; // uncomment to use static data

// used a node script to combine two JSONs found online to get airport name and full city name
import { airports } from "~/lib/airports";

// a JSON of airlines with name and country
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

  // call to direction and city
  params.append(`${dir}_iata`, city);

  await fetch(`https://airlabs.co/api/v9/schedules?${params}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.error(res);
        // error handling - sets error modal conditional and message
        error.value = `Response status: ${res.status}`;
      }
    })
    .then((data) => {
      if (data.response) {
        const flights: Flight[] = data.response;

        /* append airline name, airline country, arrival and departure cities and airport names of 
        airline to each flight */
        flights.map((flight) => {
          appendAirlineCountryCitiesAirports(flight);
        });

        console.log(flights);

        // set state variables depending on flight direction relative to city
        if (dir === "arr") {
          arrivals.value = sortFlights(flights, "arr", "arr_time", false);
          arrivalsLoading.value = false;
        }

        if (dir === "dep") {
          departures.value = sortFlights(flights, "dep", "dep_time", false);
          departuresLoading.value = false;
        }
      } else {
        // potential errors - invalid api key, exhausted monthly requests, etc. response from airlabs
        error.value = data.error.message;
      }
    })
    .catch((error) => {
      error.value = "Network error";
      console.error(error);
    });
}

onMounted(() => {
  getFlights(airportCode.value, "arr");
  getFlights(airportCode.value, "dep");

  /* uncomment this and comment out all calls of getFlights to use static data and preserve api calls
  const sortedArrivals = sortFlights(dummyArrivals, "arr", "arr_time", false);
  const sortedDepartures = sortFlights(dummyDepartures, "dep", "dep_time", false);

  sortedArrivals.map((flight) => {
    appendAirlineCountryCitiesAirports(flight);
  });

  sortedDepartures.map((flight) => {
    appendAirlineCountryCitiesAirports(flight);
  });

  console.log(sortedArrivals);
  console.log(sortedDepartures);
  arrivals.value = sortedArrivals;
  departures.value = sortedDepartures;
  */
});

// watch each change of airportCode to re-fetch data
watch(airportCode, () => {
  departuresLoading.value = true;
  arrivalsLoading.value = true;
  getFlights(airportCode.value, "arr");
  getFlights(airportCode.value, "dep");
});

// refresh button for error modal
const refresh = () => {
  error.value = null;

  // to refetch flights or to reload page?
  getFlights(airportCode.value, "arr");
  getFlights(airportCode.value, "dep");
  // window.location.reload();
};

// gets airline name and country from flight airline code
const getAirline = (flight: Flight) => {
  const airline = airlines.find((airline) => {
    return (
      airline.iata === flight.airline_iata ||
      airline.icao === flight.airline_icao
    );
  });

  return {
    airline_name: airline?.name,
    airline_country: airline?.country,
  };
};

const getCitiesAndAirports = (flight: Flight) => {
  const arrAirport = airports.find((airport) => {
    return airport.iata === flight.arr_iata;
  });
  const depAirport = airports.find((airport) => {
    return airport.iata === flight.dep_iata;
  });

  return {
    arr_city: arrAirport?.city,
    arr_name: arrAirport?.name,
    dep_city: depAirport?.city,
    dep_name: depAirport?.name,
  };
};

// appends name and country to flight from airline data
const appendAirlineCountryCitiesAirports = (flight: Flight) => {
  const airline = getAirline(flight);
  const citiesAndAirports = getCitiesAndAirports(flight);
  Object.assign(flight, airline, citiesAndAirports);
};

// finds airport name from iata
const findName = (iata: string) => {
  const airport = airports.find((airport) => airport.iata === iata);
  const name = airport?.name;

  return name || iata;
};

// sort flights by table head with option to reverse
const sortFlights = (
  flights: Flight[],
  dir: Direction,
  key: SortTerm,
  reverse: boolean
) => {
  const sorted = flights.sort((a: Flight, b: Flight) => {
    let sortA: Flight | Date | string = a;
    let sortB: Flight | Date | string = b;

    if (key === "dep_time" || key === "arr_time") {
      sortA = new Date(a[key]);
      sortB = new Date(b[key]);
    } else if (key === "flight_iata") {
      sortA = a[key] || a.flight_icao || "";
      sortB = b[key] || b.flight_icao || "";
    } else {
      sortA = String(a[key]) || "";
      sortB = String(b[key]) || "";
    }

    // puts falsy values at the end of sort
    if (!sortA && sortB) return reverse ? -1 : 1;
    if (sortA && !sortB) return reverse ? 1 : -1;
    if (!sortA && !sortB) return 0;

    // if sort key isn't time, still sort by time secondarily
    if (sortA === sortB && key !== "dep_iata" && key !== "arr_iata") {
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

// formats date or time - format: Tue, 3 Oct and 24hr 15:28
const formatDate = (date: string, key: "date" | "time") => {
  const dateObject = new Date(date);

  const dateArr = String(dateObject)
    .split(" ")
    .slice(0, 3)
    .map((val) => val.replace(/^0+/, ""));
  const [day, month, dayDate] = dateArr;
  const formattedDate = `${day}, ${dayDate} ${month}`;

  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  if (key === "date") {
    return formattedDate;
  } else {
    return `${hours}:${minutes}`;
  }
};

// selects arrivals or departure tab for mobile view
const selectTable = (dir: Direction) => {
  direction.value = dir;
};

// toggles flight modal
const toggleModal = (flight?: Flight) => {
  console.log(flight);
  if (!selectedFlight.value && flight) {
    selectedFlight.value = flight;
  } else {
    selectedFlight.value = null;
  }
  showModal.value = !showModal.value;
};

// prevents user from scrolling if modal is open
watch(
  () => showModal.value,
  () => {
    const body = document.body;
    if (showModal.value) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }
);
</script>
