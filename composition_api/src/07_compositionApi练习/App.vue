<!-- -->
<template>
  <div class="">
    <h2>当前计数：{{ counter }}</h2>
    <h2>计数*2：{{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{ data }}</h2>
    <button @click="changeData">修改data</button>
    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scroll-x: {{ scrollX }}</div>
      <div class="scroll-y">scroll-y: {{ scrollY }}</div>
    </div>
    <div class="mouse">
      <div class="mouse-x">mouse-x: {{ mouseX }}</div>
      <div class="mouse-y">mouse-y: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import useCounter from "./hooks/useCounter";
import useTitle from "./hooks/useTitle";
import useScrollPosition from "./hooks/useScrollPosition";
import useMousePosition from "./hooks/useMousePosition";
import useLocalStorage from "./hooks/useLocalStorage";
export default {
  setup(props) {
    // 1、hooks调用
    const { counter, doubleCounter, decrement, increment } = useCounter();

    // title
    const titleRef = useTitle("codeywhy");
    setTimeout(() => {
      titleRef.value = "kobe";
    }, 3000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();

    // localStorage
    const data = useLocalStorage("info", { name: "corderwhy", age: 18 });

    const changeData = () => (data.value = "哈哈哈");
    return {
      counter,
      doubleCounter,
      decrement,
      increment,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
      changeData,
    };
  },
};
</script>
<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.mouse {
  position: fixed;
  right: 30px;
  bottom: 80px;
}
</style>
