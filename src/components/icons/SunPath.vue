<template>
  <div>
    <svg width="300" height="50">
      <circle
        cx="150"
        cy="160"
        r="150"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
      />
      <circle
        :cx= "hour.x"
        :cy= "hour.y"
        r="8"
        stroke="orange"
        strokeWidth="1"
        fill="yellow"
      />
    </svg>
  </div>
</template>

<script>
import { weather } from "../../stores/weather";
import { computed } from "vue";


export default {
  name: "SunPath",

  setup() {
    const weatherInfo = weather()
    const hour = computed(() => weatherInfo.getCurrentHour)

    return {
        weatherInfo,
        hour
    }
  },
};
</script>
