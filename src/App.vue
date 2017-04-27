<template>
  <div id="app">
    <span style="float:left">
      <img src="./assets/nn-logo.png" class="logo">
    </span>
    <center>
      <router-link to='/dev'>Home</router-link>
      <br>
      <router-link to='/dev/kultur'>Kultur</router-link>
      <router-link to='/dev/big-picture'>Big Picture</router-link>
      <router-link to='/dev/all-about-science'>All About Science</router-link>
      <br>
      <router-link to='/dev/big-picture/1'>Big Picture post 1</router-link>
      <router-link to='/dev/big-picture/2'>Big Picture post 2</router-link>
      <p><b>//note</b> watch what happens when you bounce back between post 1 and post 2. while the data gets refreshed, it doesn't quite refresh the whole thing. this needs to be resolved tomorrow. It should be an easy fix because Vue just needs to watch for changes... and I know that I can do this, because i just did it with the different categories.</p>
    </center>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>

// import '../static/css/normalize.css'
// import '../static/css/skeleton.css'

export default {
  name: 'app'
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
a{
  font-size: .9em;
  color: #064880;
  margin-right: 4px;
  margin-left: 4px;
}
a:visited{
  color: #064880;
}
a:hover{
  background-color: #064880;
  color: #fff;
}

h1{
  display: inline;

  margin-left: 15px;

}

.logo{
  width: 88px;
  margin-bottom: 0px;
}

.pokemon-image{
  width: 120px;
}
</style>
