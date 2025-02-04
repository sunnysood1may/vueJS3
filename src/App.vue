<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <h1>Welcome to Your Vue.js Maersk</h1>
  <!--<HelloWorld msg="Welcome to Your Vue.js Maersk" />-->
  <HomeC />
  <TutC />
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import HomeC from './components/Home.vue';
import TutC from './components/Tut.vue';
export default {
  name: "App",
  components: {
    //HelloWorld,
    HomeC,
    TutC
  },
};
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
