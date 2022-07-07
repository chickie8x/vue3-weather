import { defineStore } from "pinia";
import sunPath from "../utils/coordinate";

export const weather = defineStore("weatherState", {
  state: () => ({
    cities: [],
    seltectedCity: null,
    weather: null,
    inputVal: "",
  }),

  getters: {
    getCurrentHour(state) {
      const hour = state.weather.location.localtime.split(" ")[1].split(":")[0]
      let x,y

      if (hour <= 6) {
        x = 50;
        y = 50;
      } else if (hour > 6 && hour < 18) {
        x = sunPath[hour].x;
        y = sunPath[hour].y;
      } else if (hour >= 18) {
        x = 250;
        y = 50;
      }  
      return {
        x,
        y
      }
    }
  },
  actions: {
    async setWeather(weather) {
      this.weather = await weather;
    },

    async setCities(cities) {
      this.cities = await cities;
    },

    setselectedCity(city) {
      this.seltectedCity = city;
    },
    setInputVal(val) {
      this.inputVal = val;
    },
  },
});
