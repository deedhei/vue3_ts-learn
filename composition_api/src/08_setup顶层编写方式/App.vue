<!-- -->
<template>
  <div class="">
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const increment = () => counter.value++;
</script>
<style lang="scss" scoped></style>
