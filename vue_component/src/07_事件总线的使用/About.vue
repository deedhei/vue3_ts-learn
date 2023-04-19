<!-- -->
<template>
  <div class="">
    <button @click="btnClick">about按钮点击</button>
  </div>
</template>

<script setup>
import {} from "vue";
import emitter from "./util/eventbus.js";
const btnClick = () => {
  emitter.emit("why", { name: "Zx", age: 18 });
};
</script>
<style lang="scss" scoped></style>
