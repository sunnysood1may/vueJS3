<template>
  <h2>Watchers</h2>
  <h1>{{count}}</h1>
  <button v-on:click="count=count+1">+</button>
  <button v-on:click="count=count-1">-</button>
</template>

<script>
export default {
  name: "WatcherS",
  data(){
    return {
        count: 0
    }
  },
  watch:{
    count(val,prev){
        //alert(prev);
        if(val>5 && val>prev){
            alert("stop counting");
        }
    }
  }
}
</script>

<style scoped>
h2 {
  color: orange;
}
</style>

