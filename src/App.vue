<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <!--<h1>Welcome to Your Vue.js</h1>-->
  <!--<HelloWorld msg="Welcome to Your Vue.js" />-->
  <!--<HomeC />-->
  <!--<TutC />-->
  <!--<CheckC />-->
  <!--<ForC />-->
  <!--<ChildC name="sunny shilpa" />-->
  <HeaDer />
  <router-view></router-view>
  <teleport to="#footer">
    <FooTer />
  </teleport>
</template>

<script>
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
//import HelloWorld from "./components/HelloWorld.vue";
//import HomeC from './components/Home.vue';
//import TutC from './components/Tut.vue';
//import CheckC from './components/Checkbox.vue';
//import ForC from './components/For.vue';
//import ChildC from './components/Child.vue';
import HeaDer from './components/Header.vue';
import FooTer from './components/Footer.vue';
export default {
  name: "App",
  components: {
    //HelloWorld,
    //HomeC,
    //TutC,
    //CheckC,
    //ForC,
    //ChildC
    HeaDer,
    FooTer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
body {
  padding: 0;
  margin: 0;
}
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  bottom: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  bottom: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>
