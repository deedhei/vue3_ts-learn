<!-- -->
<template>
  <div class="">
    <h2 ref="title">{{ info }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { watch, reactive, ref } from "vue";

export default {
  setup(props) {
    const title = ref(null);
    const info = reactive({ name: "why", age: 18 });
    // 1、侦听watch传入时，传入一个getter函数
    watch(
      () => info.name,
      (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      }
    );
    // 2、 传入一个可响应对象：reactive对象/ref对象
    // 情况一：reactive对象获取到的newValue, oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue:", oldValue);
    // });
    // 情况二：ref对象获取到的的newValue, oldValue本身都是value本身
    // const name = ref("why");
    // watch(name, (newValue, oldValue) => {
    //   console.log("newValue:", newValue, "oldValue:", oldValue);
    // });
    // 情况三: 如果希望reactive对象获取到的newValue, oldValue是一个普通对象
    // watch(
    //   () => {
    //     return { ...info };
    //   },
    //   (newValue, oldValue) => {
    //     console.log("newValue:", newValue, "oldValue:", oldValue);
    //   }
    // );
    const changeData = () => {
      info.name = "kobe";
      // name.value = "kobe";
    };
    return { title, info, changeData };
  },
};
</script>
<style lang="scss" scoped></style>
