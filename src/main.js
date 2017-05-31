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
import CategoryPage from './components/CategoryPage'
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

    {path: '/blog/big-picture', component: CategoryPage},
    {path: '/blog/big-picture/:postUrl', component: Post},

    {path: '/blog/all-about-science', component: CategoryPage},
    {path: '/blog/all-about-science/:postUrl', component: Post},

    {path: '/blog/kultur', component: CategoryPage},
    {path: '/blog/kultur/:postUrl', component: Post},

    {path: '/blog/home-life', component: CategoryPage},
    {path: '/blog/home-life/:postUrl', component: Post}
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach(function(to, from, next) {






    $('#fader').css('opacity', '0').fadeTo( 270, 1 );
    next();
})

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
