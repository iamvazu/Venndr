<template>
  <div id="app">
    <v-app light>
      <navbar></navbar>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import navbar from './components/globals/navbar'
export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
