<template>
  <div id="app">
    <header-menu></header-menu>
    <div id="fader">
      <div class="hero-image" v-if="$route.path === '/dev'">
        <img src="./assets/images/nn-hp-no-text-compressor.jpg" id="hero-image-mobile">
        <img src="./assets/images/nn-hp-compressor.jpg" id="hero-image-full">
      </div>

      <router-view></router-view>
      <footer-block></footer-block>
    </div>
  </div>
</template>

<script>

import '../static/css/normalize.css'
import '../static/css/skeleton.css'
import '../static/css/style.css'
import '../node_modules/font-awesome/css/font-awesome.css';

window.$ = window.jQuery = require("jquery");

export default {
  name: 'app'
}
</script>
