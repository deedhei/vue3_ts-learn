<!-- -->
<template>
  <div class="">{{ fullName }}</div>
  <button @click="changeName">修改firstName</button>
  <input v-model="firstName" />
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup(props) {
    const firstName = ref("Kobe");
    const lastName = ref("Bryant");

    // 1、 用法一：传入一个getter函数
    // computed 的返回值是一个ref对象
    // const fullName = computed(() => {
    //   return firstName.value + lastName.value;
    // });
    // 2、用法二：传入一个对象，包含getter/setter
    const fullName = computed({
      get: () => firstName.value + lastName.value,
      set: (newValue) => {
        const names = newValue.split(" ");
        console.log("names", names);
        firstName.value = names[0];
        lastName.value = names[1];
        console.log("newValue", newValue);
      },
    });
    const changeName = () => {
      fullName.value = "alai koy";
    };
    return {
      fullName,
      firstName,
      changeName,
    };
  },
};
</script>
<style lang="scss" scoped></style>
