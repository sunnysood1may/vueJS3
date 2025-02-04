<template>
  <h1>Home component</h1>
  <ChildC name="sunny shilpa" :user="user" :setData="setData" />

  <ul>
    <li v-for="item in users" :key="item">
      <UserC :data="item" :getData="getData" />
      {{ item.name }}
      {{ item.email }}
    </li>
  </ul>
</template>
<script>
import ChildC from "./Child.vue";
import UserC from "./User.vue";
export default {
  name: "HomeC",
  components: {
    ChildC,
    UserC,
  },
  data() {
    return {
      user: { name: "shilpa", email: "shilpa@test.com" },
      users: [
        { name: "sunny", email: "sunny@test" },
        { name: "shilpa", email: "shilpa@test" },
        { name: "shobhit", email: "shobhit@test" },
      ],
    };
  },
  methods: {
    setData() {
      console.log("parent function called");
    },

    getData(e) {
      alert(e + " clicked");
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>