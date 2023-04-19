<!-- -->
<template>
  <div class="">App</div>
  <Home></Home>
  <button @click="arrPush">+1</button>
</template>

<script setup>
import Home from "./Home.vue";
import { provide, ref, computed } from "vue";
provide("name", "zx");
provide("age", "18");
let arr = ref(["aaa", "bbb", "ccc"]);
provide(
  "length",
  computed(() => arr.value.length)
);
const arrPush = () => {
  arr.value.push("1111");
};
</script>
<style lang="scss" scoped></style>
