<template>
  <h1>Hello {{ userName }}</h1>
  <div class="register">
    <table align="center">
      <tbody>
        <tr>
          <td><h3>Update Restaurent</h3></td>
        </tr>
        <tr>
          <td><input type="text" v-model="restaurent.name" placeholder="Enter Name" /></td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="restaurent.year" placeholder="Enter Year" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="restaurent.color" placeholder="Enter Color" />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              v-model="restaurent.pantone_value"
              placeholder="Enter Pantone"
            />
          </td>
        </tr>
        <tr>
          <td><button v-on:click="updateRestaurent">Update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateR",
  data() {
    return {
      userName: "",
      restaurent: {
        name: "",
        year: "",
        color: "",
        pantone_value: "",
      },
    };
  },
   methods: {
    async updateRestaurent() {
      console.log(this.restaurent);
      let result = await axios.put("https://reqres.in/api/unknown/"+this.$route.params.id, {
        name: this.name,
        year: this.year,
        color: this.color,
        pantone_value: this.pantone_value,
      });
      console.log(result);
      if (result.status == 200) {
        alert("Restaurent Updated");
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    //console.log(user);
    if (!user) {
      this.$router.push({ name: "SignUp" });
    } else {
      this.userName = JSON.parse(user);
    }
    console.log(this.$route.params.id);
    let result = await axios.get(
      "https://reqres.in/api/unknown/"+this.$route.params.id
    );
    console.log(result.data.data);
    this.restaurent = result.data.data;
  },
};
</script>
