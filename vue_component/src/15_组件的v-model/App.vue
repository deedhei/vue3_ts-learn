<template>
  <div>
    <!-- <input v-model="msg" />
    <input :value="msg" @input="msg = $event.target.value" /> -->

    <!-- 组件上使用 -->

    <!-- <HyInput2 v-model="msg" ></HyInput2> -->
    <!-- <HyInput v-model="msg" ></HyInput> -->
    <!-- <h2>{{ msg }}</h2> -->
    <!-- <HyInput :modelValue="msg" @update:model-value="msg = $event"></HyInput> -->

    <!-- 绑定两个v-model -->
    <HyInput2 v-model="msg" v-model:title="title"></HyInput2>
    <h2>{{ msg }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import HyInput from "./HyInput.vue";
import HyInput2 from "./HyInput2.vue";
export default {
  name: "VueComponentApp",

  components: {
    HyInput,
    HyInput2,
  },

  data() {
    return {
      msg: "hello world",
      title: "哈哈哈",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
