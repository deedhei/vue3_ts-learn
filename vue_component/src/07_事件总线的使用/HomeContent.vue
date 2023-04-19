<!-- -->
<template>
  <div class="">HomeContent</div>
</template>

<script setup>
import emitter from "./util/eventbus.js";
import { watch } from "vue";
emitter.on("why", (info) => {
  console.log(info);
});
// 监听所有事件
// emitter.on("*", (type,info) => {
//   console.log(info);
// });
</script>
<style lang="scss" scoped></style>
