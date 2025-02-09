<template>
  <h1>Hello {{ userName }}</h1>
  <div class="register">
    <table align="center">
      <tbody>
        <tr>
          <td><h3>Add Restaurent</h3></td>
        </tr>
        <tr>
          <td><input type="text" v-model="name" placeholder="Enter Name" /></td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="year" placeholder="Enter Year" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="color" placeholder="Enter Color" />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              v-model="pantone_value"
              placeholder="Enter Pantone"
            />
          </td>
        </tr>
        <tr>
          <td><button v-on:click="addRestaurent">Add Restaurent</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddR",
  data() {
    return {
      userName: "",
      name: "",
      year: "",
      color: "",
      pantone_value: "",
    };
  },
  methods: {
    async addRestaurent() {
      console.log(this.name, this.year, this.color, this.pantone_value);
      let result = await axios.post("https://reqres.in/api/unknown", {
        name: this.name,
        year: this.year,
        color: this.color,
        pantone_value: this.pantone_value,
      });
      console.log(result);
      if (result.status == 201) {
        alert("Restaurent Added");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    console.log(user);
    if (!user) {
      this.$router.push({ name: "SignUp" });
    } else {
      this.userName = JSON.parse(user);
    }
  },
};
</script>
