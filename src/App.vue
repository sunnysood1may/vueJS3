<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <h1>Welcome to Your Vue.js Maersk</h1>
  <!--<HelloWorld msg="Welcome to Your Vue.js Maersk" />-->
  <!--<HomeC />-->
  <!--<TutC />-->
  <!--<CheckC />-->
  <!--<ForC />-->
  <!--<ChildC name="sunny shilpa" />-->

  <router-link to="/">Home</router-link>&nbsp;
  <router-link to="/login">Login</router-link>&nbsp;
  <router-link to="/profile/sunny">Sunny</router-link>&nbsp;
  <router-link to="/profile/shilpa">Shilpa</router-link>&nbsp;
  <router-link to="/profile/shobhit">Shobhit</router-link>&nbsp;
  <router-link to="/binding">Binding</router-link>&nbsp;

  <router-view></router-view>

</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import HomeC from './components/Home.vue';
//import TutC from './components/Tut.vue';
//import CheckC from './components/Checkbox.vue';
//import ForC from './components/For.vue';
//import ChildC from './components/Child.vue';
export default {
  name: "App",
  components: {
    //HelloWorld,
    //HomeC,
    //TutC,
    //CheckC,
    //ForC,
    //ChildC
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
