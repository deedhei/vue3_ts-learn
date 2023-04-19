<!-- -->
<template>
  <div class="">{{ title }}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
});
console.log("props", props);
</script>
<style lang="scss" scoped></style>
