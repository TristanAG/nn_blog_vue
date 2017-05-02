<template>
  <div class="sidebar">
    <h5>ARCHIVES</h5>
    <hr />
    <ul>
      <li v-for="post in posts" class="category-sidebar">
        <router-link :to="'/dev/' + post.category + '/' + post.url">{{post.title}}</router-link>
        <hr class="hr-category" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      posts: []
    }
  },
  created: function(){
    this.$http.get('http://localhost:3000/posts')
      .then(function(response){
        this.posts = response.data;
      });
  }
}
</script>
