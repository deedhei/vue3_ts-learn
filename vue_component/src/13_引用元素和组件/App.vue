<!-- -->
<template>
  <div ref="div">哈哈</div>
  <nav-bar ref="navBar"></nav-bar>
  <button @click="btnClick">获取元素</button>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
  },
  methods: {
    btnClick() {
      console.log(this.$refs.div);
      console.log(this.$refs.navBar);
    },
  },
};
</script>
<!-- <script setup>
import { ref } from "vue";
import NavBar from "./NavBar.vue";
const div = ref();
const aaaa = ref();
const btnClick = () => {
  div.value.innerHTML = "111";
  console.log(div);
  console.log(NavBar);
};
</script> -->
<style scoped></style>
