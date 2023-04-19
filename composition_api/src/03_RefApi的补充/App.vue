<!-- -->
<template>
  <div class="">
    <input v-model="message" />
    <h2>
      {{ message }}
    </h2>
  </div>
</template>

<script>
import { reactive, toRefs, toRef, ref } from "vue";
import debounceRef from "./hook/useDebounceRef.js";
export default {
  setup(props) {
    const message = debounceRef("hello world");

    return { message };
  },
};
</script>
<style lang="scss" scoped></style>
