<template>
  <div class="app">
    <input type="number" step="100" v-model="counter" />
    <h2>{{ showCounter }}</h2>
    <div><button @click="toggle">显示/隐藏</button></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "LearnAnimationApp",
  components: {},
  data() {
    return {
      isShow: false,
      counter: 0,
      showNumber: 0,
    };
  },

  mounted() {},

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
  computed: {
    showCounter() {
      return this.showNumber.toFixed(0);
    },
  },
  watch: {
    counter(newValue) {
      gsap.to(this, { duration: 1, showNumber: newValue });
    },
  },
};
</script>

<style scoped></style>
