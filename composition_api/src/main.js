import { createApp } from "vue";
import App from "./09_render函数的使用/App.vue";
// import router from './router'
// import store from './store'

const app = createApp(App);
// app.mixin({
//   data() {
//     return {
//       property: "value",
//     };
//   },
//   methods: {},
//   created() {
//     console.log("created  全局mixin");
//   },
// });
app.mount("#app");
