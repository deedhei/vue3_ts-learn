<!-- -->
<template>
  <div class="">Home</div>
  <button @click="increment">+1</button>
  {{ counter }}
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    message: {
      type: String,
    },
  },
  /**
   * 参数一： props 父组件传递过来的属性
   */
  setup(props) {
    let counter = ref(100);
    const increment = () => {
      counter.value++;
      console.log(1111);
    };
    return {
      title: "titile1111111111111111111",
      counter: counter,
      increment,
    };
  },
};
</script>
<style lang="scss" scoped></style>
