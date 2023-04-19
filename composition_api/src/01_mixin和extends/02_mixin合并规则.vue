<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";
export default {
  name: "CompositionApiApp",
  mixins: [demoMixin],
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
