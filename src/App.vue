<template>
  <div id="app">
    <img src="./assets/nn-logo.png" class="logo">
    <big-picture></big-picture>
    <all-about-science></all-about-science>
    <kultur></kultur>
  </div>
</template>

<script>


import Hello from './components/Hello'
import BigPicture from './components/BigPicture'
import AllAboutScience from './components/AllAboutScience'
import Kultur from './components/Kultur'

// import '../static/css/normalize.css'
// import '../static/css/skeleton.css'



export default {
  name: 'app',
  components: {
    Hello,
    BigPicture,
    AllAboutScience,
    Kultur
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
  width: 88px;
  margin-bottom: 0px;
}

.pokemon-image{
  width: 120px;
}
</style>
