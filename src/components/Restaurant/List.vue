<template>
  <h1>Hello {{ name }}, Welcome on Add Restaurent Page</h1>
  <h2>Restaurent Listing</h2>
  <ul class="item">
    <li>ID</li>
    <li>Name</li>
    <li>Year</li>
    <li>Color</li>
    <li>PantoneValue</li>
    <li>Action</li>
  </ul>
  <ul class="item" v-for="item in restaurent" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.name }}</li>
    <li>{{ item.year }}</li>
    <li>{{ item.color }}</li>
    <li>{{ item.pantone_value }}</li>
    <li>
      <router-link :to="'/update/' + item.id"> Update</router-link>
      <button v-on:click="deleteRestaurent(item.id)">Delete</button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "ListR",
  data() {
    return {
      name: "",
      restaurent: [],
    };
  },
  methods: {
    async deleteRestaurent(id) {
      console.log(id);
      let result = await axios.delete("https://reqres.in/api/users/" + id);
      console.log(result);
      if (result.status == 200) {
        alert("1");
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      console.log(user);
      if (!user) {
        this.$router.push({ name: "SignUp" });
      } else {
        this.name = JSON.parse(user);
      }
      let result = await axios.get("https://reqres.in/api/unknown");
      console.log(result.data.data);
      this.restaurent = result.data.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
h1 {
  color: #42b0d5;
}
.item {
  display: flex;
}
.item img {
  width: 50px;
}
.item li {
  display: inline-block;
  border: 1px solid;
  width: 180px;
  text-align: center;
  padding: 5px;
}
</style>
