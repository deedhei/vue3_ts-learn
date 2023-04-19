<!-- -->
<template>
  <div class=""></div>
  <Home></Home>
  <Suspense>
    <template #default>
      <AsyncCategory></AsyncCategory>
    </template>
    <template #fallback>
      <Loading></Loading>
    </template>
  </Suspense>
</template>

<script setup>
import Home from "./Home.vue";
// import AsyncCategory from "./AsyncCategory.vue";
import Loading from "./Loading.vue";
import { defineAsyncComponent } from "vue";
const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));
</script>
<style scoped></style>
