<template>
  <h2>User component</h2>
  <div class="user">
    <h2>{{ data }}</h2>
    <button v-on:click="getData(data.name)">Alert User Name</button>
  </div>
</template>

<script>
export default {
  name: "UserC",
  props: {
    data: Object,
    getData: Function
  },
  /*methods: {
    getData() {
      alert("hello");
    },
  },*/
};
</script>

<style scoped>
.user {
  background-color: skyblue;
  padding: 10px;
  border-bottom: 1px solid;
  margin-bottom: 20px;
}
</style>
