// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

import AllAboutScience from './components/AllAboutScience'
import BigPicture from './components/BigPicture'
import Kultur from './components/Kultur'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  base: __dirname,
  routes: [
    {path: 'all-about-science', component: AllAboutScience},
    {path: 'big-picture', component: BigPicture},
    {path: 'kultur', component: Kultur},
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
