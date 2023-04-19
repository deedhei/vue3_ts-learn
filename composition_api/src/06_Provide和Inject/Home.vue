<!-- -->
<template>
  <div class="">{{ name }} --- {{ counter }}</div>
</template>

<script>
import { inject } from "vue";
export default {
  setup(props) {
    const name = inject("name");
    const counter = inject("counter");
    console.log("name", name);
    return {
      name,
      counter,
    };
  },
};
</script>
<style lang="scss" scoped></style>
