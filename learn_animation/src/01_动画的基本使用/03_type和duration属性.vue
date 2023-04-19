<template>
  <div class="app">
    <div><button @click="toggle">显示/隐藏</button></div>
    <transition name="why" mode="out-in">
      <h2 class="title" v-if="isShow">hello world</h2>
      <h2 class="title" v-else>你好啊，李银河</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "LearnAnimationApp",

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
/* .why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-to,
.why-leave-from {
  opacity: 1;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 2s ease;
} */
.title {
  display: inline-block;
}
.why-enter-active {
  animation: bounce 1s ease;
}
.why-leave-active {
  animation: bounce 1s ease reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
