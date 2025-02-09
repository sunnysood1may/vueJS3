<template>
  <h1>POST Method API</h1>
  <input type="text" name="year" v-model="year" /><br /><br />
  <input type="text" name="price" v-model="price" /><br /><br />
  <button v-on:click="addUser()">Add User</button>
</template>

<script>
import axios from "axios";
export default {
  name: "PostApi",
  data() {
    return {
      year: "",
      price: "",
    };
  },
  methods: {
    async addUser() {
      console.log("hello", this.year, this.price);
      //let result =  await axios.post("http://localhost:3000/user",{
      let result = await axios.post("https://api.restful-api.dev/objects", {
        //email: this.email,
        //password: this.password
        name: "Apple MacBook Pro 16",
        data: {
          year: this.year, //2019,
          price: this.price, //1849.99,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      });
      console.log("result", result);
    },
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
