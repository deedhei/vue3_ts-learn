<!-- -->
<template>
  <div class="">
    <!-- <ChildCpn>
      <button>哈哈哈哈</button>
    </ChildCpn> -->

    <ShowNames :names="names">
      <template v-slot="slotProps">
        <button>
          {{ slotProps.item }} -- {{ slotProps.index }}-- {{ slotProps.why }}
        </button>
      </template>
    </ShowNames>

    <ShowNames :names="names">
      <template v-slot:why="slotProps">
        <strong
          >{{ slotProps.item }} -- {{ slotProps.index }} --
          {{ slotProps.why }}</strong
        >
      </template>
    </ShowNames>
  </div>
</template>

<script setup>
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";
import { ref } from "vue";
let names = ref(["why", "abc"]);
</script>
<style lang="scss" scoped></style>
