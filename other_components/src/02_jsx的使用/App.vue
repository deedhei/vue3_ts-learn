<!-- -->

<script>
import {} from "vue";
export default {
  data() {
    return {
      data: 100,
    };
  },
  render() {
    const increment = () => this.data++;

    return (
      <div>
        当前计数：{this.data}
        <button onClick={increment}>+1</button>
      </div>
    );
  },
};
</script>
<style lang="scss" scoped></style>
