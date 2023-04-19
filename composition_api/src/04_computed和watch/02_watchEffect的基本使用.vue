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
    };

    watchEffect(() => {
      console.log("name", name.value);
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
