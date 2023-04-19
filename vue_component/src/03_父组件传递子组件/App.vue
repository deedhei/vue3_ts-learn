<!-- -->
<template>
  <div class="">
    <ShowMessageVue class="why11" title="123" content="哈哈哈"></ShowMessageVue>
    <ShowMessageVue :title="title" :content="content"></ShowMessageVue>
    <ShowMessageVue :="msg"></ShowMessageVue>

    <MultiRootElement id="why111"></MultiRootElement>
  </div>
</template>

<script setup>
import ShowMessageVue from "./ShowMessage.vue";
import MultiRootElement from "./MultiRootElement.vue";
import { ref } from "vue";
let title = ref("标题");
let content = ref("标题");
let msg = ref({
  title: "标题3",
  content: "内容3",
});
</script>
<style lang="" scoped></style>
