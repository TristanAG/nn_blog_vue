<template>
  <div id="app">

    <header-menu></header-menu>

    <div class="hero-image" v-if="$route.path === '/dev'">
      <img src="./assets/nn-hp-1A-compressor.jpg" id="hero-image" >
    </div>

    <div class="container">
      <div class="row">
        <div class="eight columns">

          <router-view></router-view>

        </div>
        <div class="four columns">
          <sidebar></sidebar>
        </div>
      </div>
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
