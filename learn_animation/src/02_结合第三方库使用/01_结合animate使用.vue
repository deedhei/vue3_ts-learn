<template>
  <div class="app">
    <div><button @click="toggle">显示/隐藏</button></div>
    <transition name="why" mode="out-in" appear="true">
      <h2 v-if="isShow">哈哈哈</h2>
      <!-- <component :is="isShow ? 'home' : 'about'"></component> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: "LearnAnimationApp",
  components: {},
  data() {
    return {
      isShow: false,
    };
  },

  mounted() {},

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.app {
  width: 200px;
  margin: 0 auto;
}

.title {
  display: inline-block;
}
.why-enter-active,
.why-leave-active {
  animation: bounceOut 1s ease;
}
</style>
