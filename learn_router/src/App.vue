<template>
  <nav>
    <router-link to="/home" v-slot="props">
      <!-- <h2>Home</h2> -->
      title:{{ props }}
      <NavBar title="home"></NavBar>
    </router-link>
    | <router-link to="/about">About</router-link> |
    <router-link to="/user/kobe">User</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import { ref, onMounted } from "vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
