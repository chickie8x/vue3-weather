<template>
  <div class="w-full min-h-[100vh] flex justify-center items-center">
    <div class="w-[400px] h-[800px] bg-blue-500 p-3">
      <SearchBar class="mt-2" />
      <ListCity />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import SearchBar from "./components/SearchBar.vue";
import ListCity from "./components/ListCity.vue"
import {weather} from "./stores/weather";

export default {
  components: {
    SearchBar,
    ListCity,
  },

  setup() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = import.meta.env.VITE_FORECAST_URL;
    const weatherInfo = weather()

    const fetch = async () => {
      const data = await axios.get(URL + API_KEY + `&q=Paris&day=3&aqi=yes`);
      if(data){
        weatherInfo.setWeather(data.data)
      }
    };

    onMounted(() => {
      fetch();
    });

    return {
      weatherInfo,
    };
  },
};
</script>
