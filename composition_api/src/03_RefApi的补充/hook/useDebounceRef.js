import { customRef } from "vue";

// 自定义ref
export default function (value) {
  let timer = null;
  console.log("timer:", timer);
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, 1000);
      },
    };
  });
}
