<template>
  <div class="input-form">
    <label for="">{{$props.text}}</label>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  props: {
    text: {
      default: 'Default text'
    }
  }
}
</script>

<style lang="scss">

  @import url('../../styles/input_form.scss');
</style>