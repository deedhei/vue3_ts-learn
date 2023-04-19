<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="foo">按钮</button>
    <Home></Home>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";
import Home from "./pages/Home.vue";
export default {
  name: "CompositionApiApp",
  components: {
    Home,
  },
  data() {
    return {
      msg: "hello app",
    };
  },

  mounted() {},

  methods: {},
  created() {
    console.log("执行了app mixin created");
  },
};
</script>

<style lang="scss" scoped></style>
