<!-- -->
<template>
  <div class="">
    <Home></Home>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  setup(props) {
    const name = ref("coderwhy");
    let counter = ref(100);
    provide("name", readonly(name));
    provide("counter", readonly(counter));
    const increment = () => counter.value++;

    return {
      increment,
    };
  },
};
</script>
<style lang="scss" scoped></style>
