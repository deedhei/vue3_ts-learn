<template>
  <div class="app">
    <div><button @click="toggle">显示/隐藏</button></div>
    <transition
      name="why"
      mode="out-in"
      appear="true"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <h2 v-if="isShow">哈哈哈</h2>
    </transition>
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
    };
  },

  mounted() {},

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },

    enter(el, done) {
      gsap.from(el, {
        scale: 0,
        x: 200,
        duration: 1,
        onComplete: done,
      });
    },

    leave(el, done) {
      gsap.to(el, {
        scale: 0,
        x: 200,
        duration: 1,
        onComplete: done,
      });
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
</style>
