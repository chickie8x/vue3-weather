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
        :cx= "x"
        :cy= "y"
        r="8"
        stroke="orange"
        strokeWidth="1"
        fill="yellow"
      />
    </svg>
  </div>
</template>

<script>
import { ref } from "vue-demi";
export default {
  name: "SunPath",
  props: {
    hour: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const x = ref(0);
    const y = ref(0);
    const sunPath = {
      6: {
        x: 50,
        y: 50,
      },
      7: {
        x: 67,
        y: 35,
      },
      8: {
        x: 83,
        y: 25,
      },
      9: {
        x: 100,
        y: 20,
      },
      10: {
        x: 116,
        y: 15,
      },
      11: {
        x: 133,
        y: 12,
      },
      12: {
        x: 150,
        y: 10,
      },
      13: {
        x: 166,
        y: 12,
      },
      14: {
        x: 183,
        y: 15,
      },
      15: {
        x: 200,
        y: 20,
      },
      16: {
        x: 217,
        y: 25,
      },
      17: {
        x: 233,
        y: 35,
      },
      18: {
        x: 250,
        y: 50,
      },
    };

    if (props.hour <= 6) {
      x.value = 50;
      y.value = 50;
    } else if (props.hour > 6 && props.hour < 18) {
      x.value = sunPath[props.hour].x;
      y.value = sunPath[props.hour].y;
    } else if (props.hour >= 18) {
      x.value = 250;
      y.value = 50;
    }

    return {
        x,
        y,
        sunPath
    }
  },
};
</script>

<style>
</style>