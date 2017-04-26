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
import Post from './components/Post'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/dev', component: LatestPosts},
    {path: '/dev/all-about-science', component: AllAboutScience},
    {path: '/dev/big-picture', component: BigPicture},
    {path: '/dev/kultur', component: Kultur},
    {path: '/dev/post', component: Post, props: { postId: 1 }}
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */

// new Vue({
//   router,
//   template: `
//     <div id="app">
//     <span style="float:left">
//     <img src="../../assets/nn-logo.png" class="logo">
//     </span>
//     <center>
//       <router-link to='/dev'>Home</router-link>
//       <br>
//       <router-link to='/dev/kultur'>Kultur</router-link>
//       <router-link to='/dev/big-picture'>Big Picture</router-link>
//       <router-link to='/dev/all-about-science'>All About Science</router-link>
//     </center>
//       <router-view></router-view>
//     </div>
//   `,
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
