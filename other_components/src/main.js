import { createApp } from "vue";
import App from "./04_teletport内置组件/App.vue";
import registerDirectives from "./direactives";
// import router from './router'
// import store from './store'
import pluginsObject from "./plugins/plugins_object";
import pluginsFunciton from "./plugins/plugins_funciton";

const app = createApp(App);

registerDirectives(app);
// 自定义全局指令
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
app.use(pluginsObject);
app.use(pluginsFunciton);
app.mount("#app");
