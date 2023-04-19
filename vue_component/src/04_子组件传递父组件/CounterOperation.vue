<!-- -->
<template>
  <div class="">
    <button @click="increment">+1</button>

    <button @click="decrement">-1</button>
    <div v-for="item in data" :key="item">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
const emits = defineEmits(["add", "sub"]);

const data = ref([
  { name: "zx", age: 18 },
  { name: "hahah", age: 11 },
]);
const increment = () => {
  emits("add");
};
const decrement = () => {
  emits("sub");
};
</script>
<style lang="scss" scoped></style>
