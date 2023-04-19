<!-- -->
<template>
  <div class="">
    <h2 ref="title">哈哈哈</h2>
  </div>
</template>

<script>
import { watch, watchEffect, ref } from "vue";

export default {
  setup(props) {
    const title = ref(null);
    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        flush: "post",
      }
    );

    return { title };
  },
};
</script>
<style lang="scss" scoped></style>