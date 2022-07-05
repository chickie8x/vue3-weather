<template>
    <div class="flex justify-center">
        <SunPath :hour="12" />
    </div>
</template>

<script>
import { weather } from '../stores/weather'
import SunPath from './icons/SunPath.vue'

export default {
    name: 'Astronomy',
    components: {
        SunPath,
    },

    setup() {
        const weatherInfo = weather()


        return {
            weatherInfo
        }
    }
}
</script>
