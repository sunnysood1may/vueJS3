<template>
  
  <div class="nav">
    <router-link to="/">Home</router-link>

    <router-link to="/add">Add Restaurent</router-link>
    <router-link to="/update">Update Restaurent</router-link>
    <router-link to="/List">Restaurent Listing</router-link>

    <router-link to="/SignUp">SignUp</router-link>
    <router-link to="/login">Login</router-link>

    <a v-on:click="logout" href="#">Logout</a>

    <router-link to="/profile/sunny">Sunny</router-link>
    <router-link to="/profile/shilpa">Shilpa</router-link>
    <router-link to="/profile/shobhit">Shobhit</router-link>
    <router-link to="/binding">Binding</router-link>
    <router-link to="/ref">Ref</router-link>
    <router-link to="/SimpleForm">SimpleForm</router-link>
    <router-link to="/FormModifier">FormModifiers</router-link>
    <router-link to="/NonProp">NonProp</router-link>
    <router-link to="/ComputedProperty">ComputedProperty</router-link>
    <router-link to="/Watchers">Watchers</router-link>
    <router-link to="/Slots">Slots</router-link>
    <router-link to="/DynamicComponent">DynamicComponent</router-link>
    <router-link to="/Teleport">TeleportComponent</router-link>
    <router-link to="/BeforeCreate">BeforeCreate</router-link>
    <router-link to="/GetApi">GetAPI</router-link>
    <router-link to="/PostApi">PostAPI</router-link>
  </div>
  <h2>Welcome to Your Vue.js </h2>
</template>
<script>
export default {
  name: "HeaDer",
  methods:{
    logout(){
        //alert("Logout");
        console.log("Logout");
        localStorage.clear();
        this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 16px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
}
.nav a:hover {
  background-color: #ddd;
  color: #222;
}
</style>
