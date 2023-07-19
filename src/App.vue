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

    <span> Выбранные опции: {{outputChecked}}  </span>
  </div>
</template>

<script>
import CheckboxComponent from "./components/checkbox/CheckboxComponent.vue";

export default {
  name: "App",
  components: {
    CheckboxComponent,
  },
  computed: {
    checkedOptions() {
      return this.options.filter((e) => e.value === true);
    },
    outputChecked(){
      return this.checkedOptions.map((e) => e.text).join(", ");
    }
  },
  data() {
    return {
      options:[ 
        {text:'Яблоко',     disabled:false, value:false}, 
        {text:'Апельсин',   disabled:false, value:false}, 
        {text:'Груша',      disabled:false, value:true}, 
        {text:'Томат?',     disabled:true,  value:false}, 
        {text:'Не фрукт?',  disabled:true,  value:true},
      ],
    }
  },
};
</script>


<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    margin-top: 60px;
    background-color: #000000;
  }
</style>
