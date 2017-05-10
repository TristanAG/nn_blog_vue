<template>
  <div id="app">
    <header-menu></header-menu>
    <div id="fader">

      <router-view></router-view>
      <footer-block></footer-block>
    </div>
  </div>
</template>

<script>

import '../static/css/normalize.css'
import '../static/css/skeleton.css'
import '../static/css/style.css'


window.$ = window.jQuery = require("jquery");

export default {
  name: 'app'
}
</script>
