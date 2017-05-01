<template>
  <div class="category">
    <ul v-for="post in posts">
      <li>
        <p><b>{{post.category}}</b></p>
        <h2>{{post.title}}</h2>
        <p>By: {{post.author}}</p>
        <div class="post-content" v-html="post.content"></div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'category',
  data () {
    return {
      posts: []
    }
  },
  props: {
    categoryName: {
      type: String,
      default: null
    }
  },
  methods: {
    fetchData(){
      var category = this.categoryName
      this.$http.get('http://localhost:3000/posts?category=' + category)
        .then(function(response){
          this.posts = response.data;
        });
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created: function(){
    this.fetchData()
  }
}
</script>
