<!-- -->
<template>
  <div class="">
    <h1 :="$attrs">title： {{ title }}</h1>
    <p>content： {{ content }}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {};
  },
};
</script>
<script setup>
import { def } from "@vue/shared";
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
console.log("props", props);
</script>
<style lang="" scoped></style>
