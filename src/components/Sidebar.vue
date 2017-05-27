<template>
  <div class="sidebar">
    <h5>ARCHIVES</h5>
    <hr />
    <ul>
      <li v-for="post in posts" class="category-sidebar">
        <router-link :to="'/blog/' + post.category + '/' + post.postUrl">{{post.title}}</router-link>
        <hr class="hr-category" />
      </li>
    </ul>
    <h5>CATEGORIES</h5>
    <hr />
    <ul>
      <li class="category-sidebar"><router-link :to="'/blog/all-about-science'">All About Science</router-link></li>
      <hr class="hr-category" />
      <li class="category-sidebar"><router-link :to="'/blog/big-picture'">Big Picture</router-link></li>
      <hr class="hr-category" />
      <li class="category-sidebar"><router-link :to="'/blog/kultur'">Kultur</router-link></li>
      <hr class="hr-category" />
      <li class="category-sidebar"><router-link :to="'/blog/home-life'">Home Life</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
  	posts: function () {
    	return this.$store.state.posts
    }
  }
}
</script>
