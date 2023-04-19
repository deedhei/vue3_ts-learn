<!-- -->
<template>
  <div class="">
    <MySoltCpm>
      <button>我是按钮</button>
    </MySoltCpm>
    <MySoltCpm>
      <MyBtton></MyBtton>
    </MySoltCpm>
    <!-- 默认内容 -->
    <MySoltCpm> </MySoltCpm>
    <!-- 插入很多内容 不指定的话就会显示三次 -->
    <MySoltCpm>
      <h2>哈哈哈</h2>
      <button>我是按钮</button>
      <strong>我是strong</strong>
    </MySoltCpm>
    <!--  -->
  </div>
</template>

<script setup>
import MySoltCpm from "./MySoltCpm.vue";
import MyBtton from "./MyBtton.vue";
import {} from "vue";
</script>
<style lang="scss" scoped></style>
