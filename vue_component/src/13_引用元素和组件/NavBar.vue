<!-- -->
<template>
  <div class="">
    <h2>navbar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "1111",
    };
  },
  methods: {
    getParentAndRoot() {
      console.log(this.$parent);
    },
  },
};
</script>

<!-- <script setup>
import { ref } from "vue";
let msg = ref("1111");
</script> -->
<style lang="scss" scoped></style>
