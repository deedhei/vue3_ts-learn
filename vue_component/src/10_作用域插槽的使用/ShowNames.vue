<!-- -->
<template>
  <div class="">
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"></slot>
      <slot name="why" :item="item" :index="index" :why="'why'"></slot>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
let props = defineProps({
  names: {
    // type: String,
  },
});
</script>
<style lang="scss" scoped></style>
