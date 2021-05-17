<template>
  <div>
    <Connexion msg="Conexion" />
    <!-- <Button /> -->
  </div>
</template>

<script>
  import { Connexion } from './components'
  export default {
    name: 'App',
    components: {
      Connexion,
      // Button
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
