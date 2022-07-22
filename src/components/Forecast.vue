<template>
  <div class=" flex px-4 justify-between">
    <div v-for="day, idx in weatherInfo.weather.forecast.forecastday" :key="idx" class=" p-1">
      <div class=" flex flex-col justify-start text-xs text-center items-center text-white">
         <span>{{ day.date }}</span>
        <img :src="day.day.condition.icon" class=" w-[28px] h-[28px]" alt="">
      </div>
      <span class="text-xs text-white">{{ day.day.condition.text }}</span>    
      <div class="text-white text-xs mt-2 text-center">
      {{ day.day.mintemp_c}}°C - {{ day.day.maxtemp_c }}°C
    </div>
    </div>
    
  </div>
</template>

<script>
import { weather } from '../stores/weather'

export default {
    name: "Forecast",

    setup() {
        const weatherInfo = weather()

        return {
            weatherInfo
        }
    }
}
</script>
