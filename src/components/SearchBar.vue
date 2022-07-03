<template>
  <div class="flex w-[350px] bg-white px-2 py-1 rounded-xl mx-auto shadow-md">
    <SearchIcon :color="iconColor" class="mr-2"/>
    <input
      type="text"
      placeholder="Enter your city"
      v-model="value"
      class="border-0 outline-none px-2 flex-1 placeholder-indigo-500 placeholder-opacity-40 text-indigo-500"
      @keyup="searchCity"
    />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import SearchIcon from "./icons/SearchIcon.vue";
import axios from 'axios';
import { weather } from "../stores/weather";
import { set } from "vue-demi";

export default {
  name: "SearchBar",

  components: {
    SearchIcon,
  },

  setup() {
    const iconColor = ref("blue");
    const weatherInfo = weather()
    const value = computed({
      get(){
        return weatherInfo.inputVal
      },
      set(val){
        weatherInfo.inputVal=val
      }
      
      })

    const API_KEY = import.meta.env.VITE_API_KEY
    const CITIES_URL = import.meta.env.VITE_GET_CITIES

    const searchCity = async (e) =>{
      weatherInfo.setInputVal(e.target.value)
      const cities = await axios.get(CITIES_URL+API_KEY+`&q=${e.target.value}`)
      if(cities.data.length){
        weatherInfo.setCities(await cities.data)
      }
    }
    
    return {
      value,
      iconColor,
      searchCity,
    };
  },
};
</script>
