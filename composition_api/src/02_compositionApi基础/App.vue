<!-- -->
<template>
  <div class=""></div>
  <h2>{{ counter }}</h2>
  <button @click="increament">+1</button>
</template>

<script>
import { ref, reactive, readonly } from "vue";

// import Home from "./Home.vue";
export default {
  setup(props) {
    let counter = ref(100);
    let info = { name: "why" };
    let readonlyInfo = readonly(info);

    const increament = () => {
      counter.value++;
      readonlyInfo.name = "111";
    };
    return {
      counter,
      increament,
    };
  },
};
</script>
<style lang="scss" scoped></style>
