<template>
  <button>{{ $props.text}}</button>
</template>

<script>
export default {
  name: 'CallToAction',
  props: {
    text: {
      default: 'Default text',
    }
  }
}
</script>

<style>

</style>