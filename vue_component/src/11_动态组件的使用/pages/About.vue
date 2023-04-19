<!-- -->
<template>
  <div class="">about</div>
  <button @click="counter++">{{ counter }}</button>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});
let counter = ref(0);
console.log("props==>", props);
</script>
<style lang="scss" scoped></style>
