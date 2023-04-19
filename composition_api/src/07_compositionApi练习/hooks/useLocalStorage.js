import { ref, watch } from "vue";

export default function (key, value) {
  const data = ref(value);
  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    data.value = JSON.parse(window.localStorage.getItem(key));
  }

  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
  });

  return data;
}
// // 一个参数：取值
// useLocalStorage("name");
// // 俩个参数：保存值
// useLocalStorage("name", "coderwhy");
