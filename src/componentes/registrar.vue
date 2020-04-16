<template>

<div>
    <center><h1 id='reg'> REGISTRAR</h1></center>
    <input type="text"></input>
     <b-button variant="danger">Button</b-button>
     <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">
        <h1>Value: {{ text }}</h1></div>
    
</div>

</template>

<script>
export default {
    created(){
        setTimeout(
      () => (this.text = "Fontecha"),
      5000
      )
    },
    data()
    {
        return{
            text: "Quiroga",
            ciudades: ""
        }
    },
    methods(){

    },
    filters(){

    },
};
</script>

<style scoped>

#reg{
    height: 40px;
    width: 251px;
    font-size: 37px;
    background-color: brown;
}

#huella{
    position: absolute;
    width: 266px;
    height: 241px;
    left: 50px;
    top: 117px;
}
@media (max-width: 1000px) {
    #reg{
    background-color: blue;
    }
}
@media (max-width: 600px) {
    #reg{
    background-color: green;
    }
}
</style>