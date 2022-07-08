<template>
  <div class="px-5">
    <div class="flex justify-center">
      <SunPath />
    </div>
    <div class="flex justify-between text-white text-sm mt-2">
      <span>Sunrise {{ weatherInfo.weather.forecast.forecastday[0].astro.sunrise }}</span>
      <span>Sunset {{ weatherInfo.weather.forecast.forecastday[0].astro.sunset }}</span>
    </div>
  </div>
</template>

<script>
import { weather } from "../stores/weather";
import SunPath from "./icons/SunPath.vue";

export default {
  name: "Astronomy",
  components: {
    SunPath,
  },

  setup() {
    const weatherInfo = weather();
    return {
      weatherInfo,
    };
  },
};
</script>
