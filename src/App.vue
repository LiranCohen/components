<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Signup/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Signup from './components/user/Signup.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Signup,
  },
  data: () => {
    return {
      title: 'Signup Form',
    };
  },
});
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
