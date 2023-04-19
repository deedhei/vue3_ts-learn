<!-- -->
<template>
  <div class="">Home</div>
  {{ message }}----{{ title }}
</template>

<script>
import {} from "vue";

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
    console.log(props);

    return {
      title: "titile1111111111111111111",
    };
  },
};
</script>
<style lang="scss" scoped></style>
