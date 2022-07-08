<template>
  <div class=" flex px-4 justify-between">
    <div v-for="day, idx in weatherInfo.weather.forecast.forecastday" :key="idx" class=" p-1">
      <div class=" flex justify-start text-xs items-center text-white">
        <img :src="day.day.condition.icon" class=" w-[28px] h-[28px]" alt="">
         <span>{{ day.date }}</span>
      </div>
      <span class="text-xs text-white">{{ day.day.condition.text }}</span>    
      <div class="text-white text-xs mt-2">
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
