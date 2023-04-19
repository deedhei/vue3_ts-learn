export const demoMixin = {
  data() {
    return {
      msg: "hello demomixin",
    };
  },
  methods: {
    foo() {
      console.log("demo mixin foo");
    },
  },
  created() {
    console.log("执行了demo mixin created");
  },
};
