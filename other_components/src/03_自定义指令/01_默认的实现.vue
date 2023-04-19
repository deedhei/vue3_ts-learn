<!-- -->
<template>
  <div class="">
    <input type="text" ref="input" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup(props) {
    const input = ref(null);

    onMounted(() => {
      console.log(input);
      input.value.focus();
    });

    return {
      input,
    };
  },
};
</script>
<style lang="scss" scoped></style>
