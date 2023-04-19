<!-- -->
<template>
  <div class="">HomeContent</div>
  name ----- age ----- length : {{ name }} -----{{ age }} ------ {{ length }}
</template>

<script setup>
import { inject } from "vue";
// console.log("inject", inject("age"));
const age = inject("age");
const name = inject("name");
let length = inject("length");
console.log("length", length);
</script>
<style lang="scss" scoped></style>
