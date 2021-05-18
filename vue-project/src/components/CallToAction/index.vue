<template>
  <button @click='onButtonClick' :style="[backgroundColor, textColor, borderRadius]"
    id="call-to-action">{{ $props.text }}</button>
</template>

<script>
  export default {
    name: 'CallToAction',
    computed: {
      backgroundColor() {
        return {
          backgroundColor: this.$props.is_disabled ? `#${this.$props.primary_color}` : `#${this.$props.disabled_button}`
        };
      },
      textColor() {
        return {
          color: `#${this.$props.main_text_color}`
        };
      },
      borderRadius() {
        return {
          borderRadius: `${this.$props.border_radius}px`
        };
      },

    },
    props: {
      text: {
        default: 'Default text'
      },
      primary_color: {
        default: '7646D6'
      },
      disabled_button: {
        default: 'C4B6E1'
      },
      main_text_color: {
        default: 'FFFFFF'
      },
      border_radius: {
        default: '20'
      },
      is_disabled: {
        default: false
      },
    },


  }
</script>

<style lang="scss">
  #call-to-action {
    border: none;
    width: 120px;
    height: 32px;
  }
</style>