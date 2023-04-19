<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <transition-group tag="p" name="why">
      <span class="item" v-for="item in numbers" :key="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "LearnAnimationApp",

  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numCounter: 10,
    };
  },

  mounted() {},

  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
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
.why-enter-from,
.why-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.why-enter-active,
.why-leave-active {
  transition: all 0.5s ease;
}
.why-move {
  transition: transform 1s ease;
}
</style>
