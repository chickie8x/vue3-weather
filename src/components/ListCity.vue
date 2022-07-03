<template>
  <div class="p-3 text-white">
    <div
      v-for="(city, idx) in weatherInfo.cities"
      :key="idx"
      @click="selectCity(city)"
      class="py-2 px-3 duration-300 hover:bg-blue-300 hover:text-indigo-500"
    >
      <div class="cursor-pointer">{{ city.name }} - {{ city.country }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { weather } from "../stores/weather";

export default {
  name: "ListCity",

  setup() {

    const API_KEY = import.meta.env.VITE_API_KEY
    const FORECAST_URL = import.meta.env.VITE_FORECAST_URL

    const weatherInfo = weather();
    const fetchForecast = async () => {
      const _items = await axios.get(FORECAST_URL+API_KEY+`&q=${weatherInfo.seltectedCity.name}&days=3&aqi=yes`)
      if(_items){
        weatherInfo.setWeather(await _items.data)
      }
    }
    const selectCity = (city) => {
      weatherInfo.setselectedCity(city);
      weatherInfo.setCities([]);
      weatherInfo.setInputVal('')
      fetchForecast()
    };
    return {
      weatherInfo,
      selectCity,
    };
  },
};
</script>
