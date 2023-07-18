<template>
  <div id="app">
    <h1>Демонстрация чек-бокса</h1>
    <CheckboxComponent
      v-for="option in options"
      :key="option.text"
      :options="option"
      @onChange="(newValue) => option.value = newValue"
    >

    </CheckboxComponent>
  </div>
</template>

<script>
import CheckboxComponent from "./components/checkbox/CheckboxComponent.vue";

export default {
  name: "App",
  components: {
    CheckboxComponent,
  },
  data() {
    return {
      options:[ 
        {text:'Яблоко',   disabled:false, value:false}, 
        {text:'Апельсин', disabled:false, value:false}, 
        {text:'Груша',    disabled:false, value:true}, 
        {text:'Томат?',   disabled:true,  value:false}, 
        {text:'Не фрукт?',   disabled:true,  value:true},
      ]
    };
  },
};
</script>


<style>
  @import "./assets/css/main.css";
</style>
