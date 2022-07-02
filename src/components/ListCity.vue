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
import { weather } from "../stores/weather";

export default {
  name: "ListCity",

  setup() {
    const weatherInfo = weather();
    const selectCity = (city) => {
      weatherInfo.setselectedCity(city);
      weatherInfo.setCities([]);
      weatherInfo.setInputVal('')
    };
    return {
      weatherInfo,
      selectCity,
    };
  },
};
</script>
