<template>
  <div>
    <div class="checkbox-form">
      <div class="answers">
        <!--  -->
        <input
          type="checkbox"
          :id="options.text"
          v-model="checked"
          class="item"
          :disabled="options.disabled"
          name="checkbox-component"
          @change="onChange"
        />

        <label :for="options.text" class="item">
          <span class="checkmark" />
          <span> {{ options.text }} </span>
        </label>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script src="./checkbox-component.js">


</script>