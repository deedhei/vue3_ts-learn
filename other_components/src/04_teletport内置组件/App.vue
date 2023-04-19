<!-- -->
<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数</h2>
      <button>+1</button>
      {{ $name }}
      <HelloWorldVue></HelloWorldVue>
    </teleport>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import HelloWorldVue from "./HelloWorld.vue";
const insatnce = getCurrentInstance();
console.log(insatnce.appContext.config.globalProperties);
</script>
<style lang="scss" scoped></style>
