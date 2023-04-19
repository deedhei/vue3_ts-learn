<!-- -->
<template>
  <div class="">
    <button
      v-for="(item, index) in tabs"
      :key="index"
      @click="itemClick(item)"
      :class="{ active: currentTab == item }"
    >
      {{ item }}
    </button>

    <!--1、 采用v-if使用的 -->
    <!-- <template v-if="currentTab === 'home'">
      <Home> </Home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <About> </About>
    </template>
    <template v-else>
      <Category> </Category>
    </template> -->

    <!-- 2. 动态组件 -->
    <keep-alive include="Home,About">
      <component :is="currentTab" name="zx" :age="18"></component>
    </keep-alive>
  </div>
</template>
<script>
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";
export default {
  components: {
    About,
    Home,
    Category,
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
  },
};
</script>

<!-- <script setup>
import { ref, createApp } from "vue";

import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";
let tabs = ref(["home", "about", "category"]);
let currentTab = ref("home");
const itemClick = (item) => {
  currentTab.value = item;
};
</script> -->
<style scoped>
.active {
  color: red;
}
</style>
