<template>
  <h1>For Loop in Vue Js</h1>
  <ul>
    <li v-for="item in technology" :key="item">
      {{ item }}
    </li>
  </ul>
  <ul>
    <li v-for="item in user" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ForC",
  data() {
    return {
      technology: ["vue", "angular", "react"],
      user: [
        {
          name: "sunny",
          email: "sunny@test.com",
        },
        {
          name: "shilpa",
          email: "shilpa@test.com",
        },
        {
          name: "shobhit",
          email: "shobhit@test.com",
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  color: gold;
}
</style>
