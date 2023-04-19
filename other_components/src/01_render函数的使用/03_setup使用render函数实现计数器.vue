<script>
import { h, ref } from "vue";

export default {
  setup(props) {
    const counter = ref(0);
    return () => {
      return h("div", { class: "app" }, [
        h("h2", null, `当前计数${counter.value}`),
        h(
          "button",
          {
            onClick: () => counter.value++,
          },
          "+1"
        ),
        h(
          "button",
          {
            onClick: () => counter.value--,
          },
          "-1"
        ),
      ]);
    };
  },
  // render() {
  //   return h("div", { class: "app" }, [
  //     h("h2", null, `当前计数${this.counter}`),
  //     h(
  //       "button",
  //       {
  //         onClick: () => this.counter++,
  //       },
  //       "+1"
  //     ),
  //     h(
  //       "button",
  //       {
  //         onClick: () => this.counter--,
  //       },
  //       "-1"
  //     ),
  //   ]);
  // },
};
</script>
<style scoped></style>
