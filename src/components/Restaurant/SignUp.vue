<template>
  <div class="register">
    <table align="center">
      <tbody>
        <tr>
          <td><h3>Sign Up</h3></td>
        </tr>
        <tr>
          <td>
            <img
              src="https://cdn-icons-png.freepik.com/256/6643/6643359.png"
              width="100"
            />
          </td>
        </tr>
        <tr>
          <td><input type="text" v-model="name" placeholder="Enter Name" /></td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="email" placeholder="Enter Email" />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              v-model="password"
              placeholder="Enter Password"
            />
          </td>
        </tr>
        <tr>
          <td><button v-on:click="signUp">Sign Up</button></td>
        </tr>
        <tr>
          <td><router-link to="/login">Login</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.log("signUp", this.name, this.email, this.password);
      let result = await axios.post("https://reqres.in/api/register", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        alert("Sign Up Done");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
</style>
