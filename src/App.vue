<template>
  <div class="w-full min-h-[100vh] flex justify-center items-center">
    <div class="w-[400px] h-[800px] bg-blue-500 p-3">
      <div>
        <SearchBar class="mt-2" />
        <ListCity />
      </div>
      <div v-if="weatherInfo.weather" >
        <WeatherDetail />
        <Astronomy />
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
import { weather } from "./stores/weather";

export default {
  components: {
    SearchBar,
    ListCity,
    WeatherDetail,
    Astronomy,
  },

  setup(){
    const weatherInfo = weather()

    return {
      weatherInfo,
    }
  }
};
</script>
