

<template>
  <div id="app">

    <header-menu></header-menu>
    <hr />
    <router-view></router-view>
    <sidebar></sidebar>
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

<style>

</style>
