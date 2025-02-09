<template>
    <h1>Hello {{name}}, Welcome on Update Restaurent Page</h1>
</template>

<script>
export default {
    name: 'UpdateR',
    data(){
        return {
            name: ''
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        console.log(user);
        if(!user){
            this.$router.push({name: "SignUp"});
        } else {
            this.name = JSON.parse(user);
        }
    },
}
</script>