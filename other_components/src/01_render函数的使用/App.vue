<script>
import { h, ref } from "vue";
import HelloWorld from "./HelloWorld.vue";
export default {
  render() {
    return h(HelloWorld, null, {
      default: (props) => h("span", null, "app传到hellowrold中的内容"),
    });
  },
};
</script>
<style scoped></style>
