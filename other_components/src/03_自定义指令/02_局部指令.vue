<!-- -->
<template>
  <div class="">
    <input type="text" v-focus />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus();
        console.log(el);
      },
    },
  },
  setup(props) {},
};
</script>
<style lang="scss" scoped></style>
