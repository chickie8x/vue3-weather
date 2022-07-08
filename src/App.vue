<template>
  <div class="w-full min-h-[100vh] flex justify-center items-center">
    <div class="w-[400px] h-[800px] bg-blue-500 p-3 flex flex-col justify-between">
      <div>
        <SearchBar class="mt-2" />
        <ListCity />
      </div>
      <div v-if="weatherInfo.weather" class="flex flex-col justify-between flex-1 mt-8">
        <WeatherDetail />
        <Astronomy />
        <Forecast />
        <Copyright />
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import ListCity from "./components/ListCity.vue";
import WeatherDetail from "./components/WeatherDetail.vue";
import Astronomy from "./components/Astronomy.vue";
import Forecast from "./components/Forecast.vue";
import Copyright from "./components/Copyright.vue";
import { weather } from "./stores/weather";

export default {
  components: {
    SearchBar,
    ListCity,
    WeatherDetail,
    Astronomy,
    Forecast,
    Copyright
  },

  setup(){
    const weatherInfo = weather()

    return {
      weatherInfo,
    }
  }
};
</script>
