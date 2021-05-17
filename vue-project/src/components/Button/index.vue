<template>
  <Button>{{ $props.text }}</Button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      default : 'default text'
    }
  }
}
</script>

<style>

</style>