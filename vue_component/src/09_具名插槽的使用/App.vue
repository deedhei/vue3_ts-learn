<!-- -->
<template>
  <div class="">
    <NavBar>
      <template v-slot:[slotName]>
        <button>左边按钮</button>
      </template>
      <template v-slot:center>
        <h2>我是标题</h2>
      </template>
      <template v-slot:right>
        <button>右边按钮</button>
      </template>
    </NavBar>
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import { ref } from "vue";
let slotName = ref("left");
</script>
<style scoped></style>
