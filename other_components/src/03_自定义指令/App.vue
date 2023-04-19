<!-- -->
<template>
  <div class="">
    <h2 v-format-time="'YYYY/MM/DD'">{{ timeStamp }}</h2>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  directives: {},
  setup(props) {
    const timeStamp = 1624452193;
    return {
      timeStamp,
    };
  },
};
</script>
<style lang="scss" scoped></style>
