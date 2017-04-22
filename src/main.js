// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

import LatestPosts from './components/LatestPosts'
import AllAboutScience from './components/AllAboutScience'
import BigPicture from './components/BigPicture'
import Kultur from './components/Kultur'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: LatestPosts},
    {path: '/all-about-science', component: AllAboutScience},
    {path: '/big-picture', component: BigPicture},
    {path: '/kultur', component: Kultur}
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  router,
  template: `
    <div id="app">
    <span style="float:left">
    <img src="../../assets/nn-logo.png" class="logo">
    </span>
    <center>
      <router-link to='/'>Home</router-link>
      <br>
      <router-link to='/kultur'>Kultur</router-link>
      <router-link to='/big-picture'>Big Picture</router-link>
      <router-link to='/all-about-science'>All About Science</router-link>
    </center>
      <router-view></router-view>
    </div>
  `,
}).$mount('#app')

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
