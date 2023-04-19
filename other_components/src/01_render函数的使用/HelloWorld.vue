<script>
import { h } from "vue";
export default {
  render() {
    return h("div", null, [
      h("h2", null, "helloworld"),
      this.$slots.default
        ? this.$slots.default()
        : h("span", null, "我是helloworld默认值"),
    ]);
  },
};
</script>
<style lang="scss" scoped></style>
