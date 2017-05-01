<template>
  <div class="latest-posts">
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
  name: 'latest-posts',
  data () {
    return {
      posts: []
    }
  },
  created: function(){
    this.$http.get('http://localhost:3000/posts')
      .then(function(response){
        console.log(response.data);
        this.posts = response.data;
      });
  }
}
</script>
