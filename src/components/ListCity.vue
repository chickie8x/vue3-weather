<template>
  <div>
    <h3>this is list city</h3>
    <div>{{ weatherInfo.weather}}</div>
  </div>
</template>

<script>
import {weather} from '../stores/weather'

export default {
    name: 'ListCity',

    setup(){
        const weatherInfo = weather()

        return {
            weatherInfo
        }
    }
}
</script>
