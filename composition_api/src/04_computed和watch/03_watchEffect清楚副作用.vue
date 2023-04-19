<!-- -->
<template>
  <div class="">
    <h2>{{ name }} -- {{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { watch, watchEffect, ref } from "vue";

export default {
  setup(props) {
    // watchEffect: 自动收集响应式的依赖
    const name = ref("why");
    const age = ref(19);
    const changeName = () => {
      name.value = "kobe";
    };
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stopWatch();
      }
    };
    const stopWatch = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功");
      }, 2000);
      // 根据name和age俩个变量发送网络请求
      onInvalidate(() => {
        clearTimeout(timer);
        // 在这个函数中的清楚额外的副作用
        //  request.cancel()
      });

      console.log("name", name.value, "age:", age.value);
    });

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>
<style lang="scss" scoped></style>
