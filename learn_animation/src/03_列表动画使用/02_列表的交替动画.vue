<template>
  <div>
    <input v-model="keyword" />
    <transition-group
      tag="ul"
      name="why"
      :css="false"
      @before-enter="beforeenter"
      @enter="enter"
      @leave="leave"
    >
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "LearnAnimationApp",

  data() {
    return {
      name: ["abc", "cba", "abb", "jjjj", "lmm"],
      keyword: "",
    };
  },

  mounted() {},

  methods: {
    beforeenter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        delay: el.dataset.index * 0.5,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: "0em",
        delay: el.dataset.index * 0.5,
        onComplete: done,
      });
    },
  },

  computed: {
    showNames() {
      return this.name.filter((item) => item.indexOf(this.keyword) !== -1);
    },
  },
};
</script>

<style scoped>
.item {
  margin: 10px;
}
span {
  display: inline-block;
}
/* .why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
} */
</style>
