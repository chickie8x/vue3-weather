<template>
  <div class="w-full min-h-[100vh] flex justify-center items-center">
    <div class="w-[400px] h-[800px] bg-blue-500 p-3">
      <SearchBar class="mt-2" />
      <ListCity />
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import ListCity from "./components/ListCity.vue";

export default {
  components: {
    SearchBar,
    ListCity,
  },
};
</script>
