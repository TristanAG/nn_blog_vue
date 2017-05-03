// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

//components
import LatestPosts from './components/LatestPosts'
import Post from './components/Post'
import Category from './components/Category'
import Contributors from './components/Contributors'

import Sidebar from './components/Sidebar'
Vue.component('sidebar', Sidebar)

import HeaderMenu from './components/HeaderMenu'
Vue.component('header-menu', HeaderMenu)

import FooterBlock from './components/FooterBlock'
Vue.component('footer-block', FooterBlock)

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/dev', component: LatestPosts},
    {path: '/dev/contributors', component: Contributors},
    {path: '/dev/big-picture', component: Category, props: { categoryName: 'big-picture' }},
    {path: '/dev/big-picture/:postUrl', component: Post}, /* <-this works */

    {path: '/dev/all-about-science', component: Category, props: { categoryName: 'all-about-science' }},
    {path: '/dev/all-about-science/:postUrl', component: Post},

    {path: '/dev/kultur', component: Category, props: { categoryName: 'kultur' }},
    {path: '/dev/kultur/:postUrl', component: Post}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
