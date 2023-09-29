<template>
  <div class="w-2/4 p-4 flex flex-col items-center">
    <h1 v-if="table" class="text-4xl">
      {{ table }}
    </h1>
    <table v-if="flights.length">
      <thead>
        <tr>
          <th>Time</th>
          <th>Carrier</th>
          <th>Flight</th>
          <th>{{ table === "arrivals" ? "Origin" : "Destination" }}</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(flight, index) in flights" :key="index">
          <td>{{ flight.dep_time }}</td>
          <td>{{ flight.airline_iata }}</td>
          <td>{{ `${flight.airline_iata} ${flight.flight_number}` }}</td>
          <td>
            {{ table === "arrivals" ? flight.dep_iata : flight.arr_iata }}
          </td>
          <td>{{ flight.status }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>loading...</div>
  </div>
</template>

<script lang="ts">
import { Flight } from "~/types";

export default {
  props: {
    table: {
      type: String,
      required: true,
      default: null,
    },
    flights: {
      type: Array<Flight>,
      required: false,
      default: null,
    },
  },
};
</script>