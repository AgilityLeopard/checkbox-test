<template>
    <div class="checkbox-form">
      <div class="custom-checkbox">
        <input
          type="checkbox"
          :id="options.text"
          v-model="checked"
          class="item"
          :disabled="options.disabled"
          :name="options.text"
          @change="onChange"
        />

        <label :for="options.text" class="item">
          <span class="checkmark" />
          <span> {{ options.text }} </span>
        </label>
      </div>
    </div>
</template>

<script >
export default {
  name: "checkbox-component",
  props: {
    options: {
      text: String,
      disabled: Boolean,
      value: Boolean,
    },
  },
  data() {
    return {
      checked: this.options.value,
    };
  },
  methods: {
    onChange() {
      this.$emit("onChange", this.checked);
    },
  },
};

</script>

<style>

.checkbox-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkbox-form .custom-checkbox {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
}

.checkbox-form label {
  margin-left: 1em;
  align-items: center;
}

.checkbox-form .item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  align-items: center;
  color: #92a4c8;
  height: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
}

.checkbox-form input:checked + label {
  color: #ffffff;
}

.checkbox-form input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Обычный чекбокс */
.checkbox-form .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  background-color: #151b29;
  outline: 1px solid #303f5f;
}

.checkbox-form .checkmark:hover {
  background-color: #0e121b;
}

.checkbox-form input:disabled + label .checkmark {
  outline: 1px solid #3e517a;
  color: #868f98;
  background-color: #212b41;
}

.checkbox-form input:disabled + label {
  color: #868f98;
}

.checkbox-form input:checked + label .checkmark:after {
  content: "";
  position: absolute;
}
/* .checkbox-form input:checked + label .checkmark {
  outline: 1px solid #4ab4ff;
} */

.checkbox-form input:disabled + label .checkmark {
  outline: 1px solid #3e517a;
}

.checkbox-form input:active + label .checkmark {
  outline: 1px solid #4ab4ff;
}

.checkbox-form input:focus + label .checkmark {
  /* outline: 1px solid #f9fbfc; */
  background-color: #0e121b;
}

/* Галочка */
.checkbox-form input:checked + label .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #4ab4ff;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox-form input:disabled + label .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #3e517a;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkbox-form input:checked ~ .checkmark:after {
  display: block;
}

</style>