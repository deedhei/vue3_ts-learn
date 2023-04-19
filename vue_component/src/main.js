import { createApp } from "vue";
import App from "./15_组件的v-model/App.vue";

// 这样加载会全部放到app，js
// import { sum } from "./12_异步组件的使用/utils/math";

// 通过import函数导入的模块，后续的webpack对其进行打包的时候就会进行分包的操作
// import("./12_异步组件的使用/utils/math").then(({ sum }) => {
//   sum(10, 20);
// });

// import router from "./router";
// console.log(sum(10, 20));
createApp(App).mount("#app");
