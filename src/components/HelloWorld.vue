<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ "Hello".length }}</h1>
    <h1>Name: {{ getName("sunny") }}</h1>
    <h1>Email: {{ email }}</h1>
    <h1>Mobile: {{ mobile == 700 }}</h1>
    <h1>Name2: {{ getName("Shila S") }}</h1>
    <h1>Data: {{ getData() }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "sunny1may@gmail.com",
      mobile: "700",
      getName: function (a) {
        return "sunny sood " + a;
      },
    };
  },
  methods: {
    getName2(a) {
      return "Shilpa Sood" + a;
    },
    getData() {
      return {
        name: 'shilpa',
        email: this.email
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
