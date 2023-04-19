<!-- -->
<template>
  <div class="">{{ info }}</div>
  <!-- <div class="">{{ name }}-{{ age }}</div> -->
  <button @click="changeInfo">修改info</button>
</template>

<script>
import { reactive, toRefs, toRef, ref, shallowRef, triggerRef } from "vue";
export default {
  setup(props) {
    // const info = ref({ name: "why" });
    const info = shallowRef({ name: "why" });
    const changeInfo = () => {
      info.value.name = "james";
      triggerRef(info);
    };
    return {
      info,
      changeInfo,
    };
  },
};
</script>
<style lang="scss" scoped></style>
