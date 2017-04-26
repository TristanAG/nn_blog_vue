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

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/dev', component: LatestPosts},
    {path: '/dev/post', component: Post, props: { postId: 1 }}, /* <-this works */
    {path: '/dev/all-about-science', component: Category, props: { categoryName: 'all-about-science' }},
    {path: '/dev/big-picture', component: Category, props: { categoryName: 'big-picture' }},
    {path: '/dev/kultur', component: Category, props: { categoryName: 'kultur' }}
  ]
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
