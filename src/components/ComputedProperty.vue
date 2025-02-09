<template>
  <h2>Computed Property</h2>
  <h1>{{(dollars*rupeeVal)-10}}</h1>
  <h3>{{getResult}}</h3>
  <h3>{{getData()}}</h3>
</template>

<script>
export default {
  name: "ComputedProperty",
  data(){
    return {
        dollars: 100,
        rupeeVal: 70,
        discount: 10,
    }
  },
  methods: {
        getData() {
            return (this.dollors * this.rupeeVal) - this.discount

        }
    },
  computed:{
    getResult(){
        return (this.dollars*this.rupeeVal)-this.discount;
    }
  }
}
</script>

<style scoped>
h2 {
  color: #42b0d5;
}
</style>

