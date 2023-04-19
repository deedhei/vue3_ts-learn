import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// createWebHashHistory  hash模式
// createWebHistory  history模式
import HomeView from "../views/HomeView.vue";

const routes = [
  // {
  //   path: "/",
  //   redirect: "/home",
  // },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user/:username",
    name: "user",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // 对于哪些没有匹配到的路由
  {
    path: "/:pathMath(.*)",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
