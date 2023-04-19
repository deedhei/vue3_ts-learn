<template>
  <div class="app">
    <div><button @click="toggle">显示/隐藏</button></div>
    <transition
      name="why"
      mode="out-in"
      appear="true"
      @before-enter="beforeenter"
      @enter="enter"
      @after-enter="afterenter"
      @before-leave="beforeleave"
      @leave="leave"
      @after-leave="afterleave"
    >
      <h2 v-if="isShow">哈哈哈</h2>
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
    beforeenter() {
      console.log("beforeenter");
    },
    enter() {
      console.log("enter");
    },
    afterenter() {
      console.log("afterenter");
    },
    beforeleave() {
      console.log("beforeleave");
    },
    leave() {
      console.log("leave");
    },
    afterleave() {
      console.log("afterleave");
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
