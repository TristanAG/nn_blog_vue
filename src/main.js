// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'


import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import { store } from './store'

//components
import LatestPosts from './components/LatestPosts'
import Post from './components/Post'
import Category from './components/Category'
import Contributors from './components/Contributors'
import Test from './components/Test'


import Sidebar from './components/Sidebar'
Vue.component('sidebar', Sidebar)

import HeaderMenu from './components/HeaderMenu'
Vue.component('header-menu', HeaderMenu)

import FooterBlock from './components/FooterBlock'
Vue.component('footer-block', FooterBlock)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/blog', component: LatestPosts},
    {path: '/blog/contributors', component: Contributors},
    //so i think i was using categoryName as a param to pass in the actual route to make the correct REST call for the category list
    {path: '/blog/big-picture', component: Category, props: { categoryName: 'big-picture' }, redirect: '/blog'},
    {path: '/blog/big-picture/:postUrl', component: Post, props: { postCategory: 'big-picture'}}, //same with this one down here, this is to query the individual post with REST

    {path: '/blog/all-about-science', component: Category, props: { categoryName: 'all-about-science' }, redirect: '/blog'},
    {path: '/blog/all-about-science/:postUrl', component: Post, props: { postCategory: 'all-about-science'}},

    {path: '/blog/kultur', component: Category, props: { categoryName: 'kultur' }, redirect: '/blog'},
    {path: '/blog/kultur/:postUrl', component: Post, props: { postCategory: 'kultur'}}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  store,
  router,
  template: `

    <div id="app">
      <header-menu></header-menu>
      <div id="fader">

        <router-view></router-view>
        <footer-block></footer-block>
      </div>
    </div>

  `,
  // components: { App },
}).$mount('#app')
