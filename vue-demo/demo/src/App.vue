<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import buttonCount from './components/buttonCount'
import buttonIn from './components/buttonIn'
export default {
  name: 'App',
  components: {
    'btn': buttonCount,
    'buttonIn': buttonIn
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
