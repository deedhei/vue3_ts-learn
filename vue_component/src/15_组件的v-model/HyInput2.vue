<template>
  <input v-model="value" />
  <input v-model="why" />
</template>

<script>
export default {
  name: "VueComponentHyInput",

  props: {
    modelValue: String,
    title: String,
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
    why: {
      set(why) {
        this.$emit("update:title", why);
      },
      get() {
        return this.title;
      },
    },
  },
  emits: ["update:modelValue", "update:title"],
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
