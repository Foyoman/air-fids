export type Direction = "arr" | "dep";

export type AirportCode =
  | "SYD"
  | "MEL"
  | "BNE"
  | "ADL"
  | "PER"
  | "HBA"
  | "DRW"
  | "CBR";

export type SearchLabel =
  | "All"
  | "Time"
  | "Airline"
  | "Flight"
  | "Origin"
  | "Destination"
  | "Status";

export interface SearchOption {
  label: SearchLabel;
  value: keyof Flight | "all";
}

export type SortTerm = keyof Flight;

export interface Flight {
  // appended
  airline_country?: string | null;
  airline_name?: string;
  arr_name?: string;
  arr_city?: string;
  dep_name?: string;
  dep_city?: string;

  aircraft_icao: string | null;
  airline_iata: string | null;
  airline_icao: string | null;
  arr_actual?: string;
  arr_actual_ts?: number;
  arr_actual_utc?: string;
  arr_baggage: string | null;
  arr_delayed: number | null;
  arr_estimated?: string;
  arr_estimated_ts?: number;
  arr_estimated_utc?: string;
  arr_gate: string | null;
  arr_iata: string;
  arr_icao: string;
  arr_terminal: string | null;
  arr_time: string;
  arr_time_ts: number;
  arr_time_utc?: string;
  cs_airline_iata: string | null;
  cs_flight_iata: string | null;
  cs_flight_number: string | null;
  delayed: number | null;
  dep_actual?: string;
  dep_actual_ts?: number;
  dep_actual_utc?: string;
  dep_delayed: number | null;
  dep_estimated?: string;
  dep_estimated_ts?: number;
  dep_estimated_utc?: string;
  dep_gate: string | null;
  dep_iata: string;
  dep_icao: string;
  dep_terminal: string | null;
  dep_time: string;
  dep_time_ts: number;
  dep_time_utc?: string;
  duration: number;
  flight_iata: string | null;
  flight_icao: string | null;
  flight_number: string;
  status: string;
}
