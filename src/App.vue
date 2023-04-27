<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <el-button @click="changeName">按钮</el-button>
    <el-button @click="changeCount">按钮</el-button>
    <el-button @click="store.increment()">按钮</el-button>
    <el-input></el-input>
    <about-view></about-view>
    <h2>{{ name }}</h2>
    <h2>{{ count }}</h2>
    <h2>{{ store.doubleCount }}</h2>
  </nav>
  <router-view />
</template>

<!--<style lang="less">-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav {-->
<!--  padding: 30px;-->

<!--  a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->

<!--    &.router-link-exact-active {-->
<!--      color: #42b983;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
<script setup lang="ts">
import AboutView from "@/views/AboutView.vue";
import { useCounterStore } from "@/store";
import { storeToRefs } from "pinia";

const store = useCounterStore();

const { name, count } = storeToRefs(store);

const changeName = () => {
  name.value = "lkc";
};
const changeCount = () => {
  count.value = 2;
};

// store.$patch({
//   name: "likaicheng",
//   count: 2,
// });
</script>
