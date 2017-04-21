<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo"><h1>posts</h1>
    <test></test>

  </div>
</template>

<script>
import Hello from './components/Hello'
import Test from './components/Test'

export default {
  name: 'app',
  components: {
    Hello,
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 40px;
  margin-right: 40px;
}
h1{
  display: inline;

  margin-left: 15px;

}

.logo{
  width: 33px;
}

.pokemon-image{
  width: 120px;
}
</style>
