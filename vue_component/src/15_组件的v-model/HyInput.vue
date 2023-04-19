<template>
  <div>{{ modelValue }}</div>
  <button @click="btnClick">hyinput按钮</button>

  <!-- 这样是错误的 -->
  <!-- <input v-model="modelValue" > -->

  <!-- 需要这样使用computed -->
  <input v-model="value" />
</template>

<script>
export default {
  name: "VueComponentHyInput",

  props: {
    modelValue: String,
  },
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    btnClick() {
      this.$emit("update:modelValue", "!23");
    },
  },
};
</script>

<style lang="scss" scoped></style>
