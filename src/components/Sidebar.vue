<template>
  <div class="sidebar">
    <h5>ARCHIVES</h5>
    <hr />
    <ul>
      <li v-for="post in posts" class="category-sidebar">
        <router-link :to="'/dev/' + post.category + '/' + post.postUrl">{{post.title}}</router-link>
        <hr class="hr-category" />
      </li>
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
