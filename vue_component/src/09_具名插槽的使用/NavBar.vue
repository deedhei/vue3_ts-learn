<!-- -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
</script>
<style scoped>
.nav-bar {
  display: flex;
}
.left,
.right {
  width: 80px;

  background-color: red;
}
.left,
.right,
.center {
  height: 44px;
}
.center {
  flex: 1;
  background-color: blue;
}
</style>
