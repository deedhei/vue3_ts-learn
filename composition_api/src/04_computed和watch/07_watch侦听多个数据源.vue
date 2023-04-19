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

    const name = ref("why");
    watch([info, name], (newValue, oldValue) => {
      console.log("newValue:", newValue, "oldValue:", oldValue);
    });

    const changeData = () => {
      info.name = "kobe";
      name.value = "kobe";
    };
    return { title, info, changeData };
  },
};
</script>
<style lang="scss" scoped></style>
