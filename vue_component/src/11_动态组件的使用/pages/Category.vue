<!-- -->
<template>
  <div class="">category</div>
  <button @click="counter++">{{ counter }}</button>
</template>

<script setup>
import { ref } from "vue";
let counter = ref(0);
</script>
<style lang="scss" scoped></style>
