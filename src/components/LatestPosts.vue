<template>
  <div class="latest-posts">

    <h5>LATEST POSTS</h5>
    <hr />

    <ul v-for="(post, index) in posts">
      <li v-if="index === 0">
        <div class="post-preview">
          <router-link :to="'/dev/' + post.category + '/' + post.url">
            <div class="category">{{post.category}}</div>
            <div class="title" style="font-size: 1.33em;">{{post.title}}</div>
            <img :src="post.imageUrl" >
            <p>{{post.contentPreview}}</p>
            <div class="read-more"><p>read more</p></div>
          </router-link>
        </div>
      </li>
      <li v-else="index > 0">
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
