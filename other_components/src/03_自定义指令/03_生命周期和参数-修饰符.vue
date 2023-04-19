<!-- -->
<template>
  <div class="">
    <input type="text" v-focus />
    <button v-why.aaa.bbb="123" @click="increment">
      当前计数：{{ counter }}
    </button>
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
    why: {
      created(el, bindings, vnode, preVnode) {
        console.log("created", el, bindings, vnode, preVnode);
      },
      beforeMount() {
        console.log("beforeMount");
      },
      mounted() {
        console.log("mounted");
      },
      beforeUpdate() {
        console.log("beforeUpdate");
      },
      updated() {
        console.log("updated");
      },
      beforeUnmount() {
        console.log("beforeUnmount");
      },
      unmounted() {
        console.log("unmounted");
      },
    },
  },
  setup(props) {
    const counter = ref(0);
    const increment = () => counter.value++;
    return {
      counter,
      increment,
    };
  },
};
</script>
<style lang="scss" scoped></style>
