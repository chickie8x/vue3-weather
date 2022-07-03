import { defineStore } from "pinia";

export const weather = defineStore("weatherState", {
  state: () => ({
    cities: [],
    seltectedCity: null,
    weather: {},
    inputVal: "",
  }),

  getters: {},
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
