<template>
  <div v-if="weatherInfo.weather">
    <div class="text-white text-3xl flex justify-center items-center">
      <img
        :src="weatherInfo.weather.current.condition.icon"
        class=""
        alt="weather icon"
      />
      {{ weatherInfo.weather.location.name }}
    </div>
    <div class="text-white text-8xl mt-2 flex justify-center items-start">
      <span class="block relative"
        >{{ weatherInfo.weather.current.temp_c }}
        <span class="text-2xl absolute top-2 right-[-2]">°C</span>
      </span>
    </div>
    <div class="opacity-90 grid grid-flow-row grid-cols-3 mt-6">
      <div
        class="flex flex-col text-white text-sm justify-center mb-3 text-center"
      >
        <span class="text-sm font-bold">Wind</span>
        {{ weatherInfo.weather.current.wind_kph }}
      </div>
      <div
        class="flex flex-col text-white text-sm justify-center mb-3 text-center"
      >
        <span class="text-sm font-bold">Wind direction</span>
        {{ weatherInfo.weather.current.wind_dir }}
      </div>
      <div
        class="flex flex-col text-white text-sm justify-center mb-3 text-center"
      >
        <span class="text-sm font-bold">Pressure</span>
        {{ weatherInfo.weather.current.pressure_mb }}
      </div>
      <div
        class="flex flex-col text-white text-sm justify-center mb-3 text-center"
      >
        <span class="text-sm font-bold">UV</span>
        {{ weatherInfo.weather.current.uv }}
      </div>
      <div
        class="flex flex-col text-white text-sm justify-center mb-3 text-center"
      >
        <span class="text-sm font-bold">Air quality</span>
        {{ weatherInfo.weather.current.air_quality["us-epa-index"] }}
      </div>
    </div>
  </div>
  <div
    v-else
    class="text-center text-white text-sm flex items-center justify-center"
  >
    search your city
  </div>
</template>

<script>
import { weather } from "../stores/weather";

export default {
  name: "WeatherDetail",

  setup() {
    const weatherInfo = weather();

    return {
      weatherInfo,
    };
  },
};
</script>
