<!-- -->
<template>
  <div class="">{{ info.name }}-{{ info.age }}</div>
  <div class="">{{ name }}-{{ age }}</div>
  <button @click="changeAge">修改年龄</button>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";
export default {
  setup(props) {
    const info = reactive({ name: "why", age: 18 });
    // 1、 toRefs：将reactive对象中的所有属性都转成ref,建立链接
    // let { name, age } = toRefs(info);
    // 2、toRef：对其中的一个属性进行转换ref建立链接
    let age = toRef(info, "age");
    let name = toRef(info, "name");
    const changeAge = () => {
      info.age++;
    };

    return {
      info,
      name,
      age,
      changeAge,
    };
  },
};
</script>
<style lang="scss" scoped></style>
