<!-- -->
<template>
  <div class="">
    <h2>当前计数：{{ counter }}</h2>
    <CounterOperation @add="addOne" @sub="subOne"></CounterOperation>
  </div>
</template>

<script setup>
import CounterOperation from "./CounterOperation.vue";
import { ref } from "vue";
let counter = ref(0);
let addOne = () => {
  counter.value++;
};
let subOne = () => {
  counter.value--;
};
</script>
<style lang="" scoped></style>
