<template>
  <div class="post">

    <div class="desktop-image-mod">
      <h5>{{post.categoryText}}</h5>
      <hr />
      <h1>{{post.title}}</h1>
      <img :src="post.imageUrl">
      <p class="author-link">By <a href="../contributors.html">{{post.author}}</a></p>
    </div>
    <div class="post-content" v-html="post.content"></div>


    <div class="social-sharing">
      <b>Share this post</b>
      <a href="https://www.facebook.com/sharer/sharer.php?u=http://nordicnaturals.com/dev/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      <a href="https://twitter.com/intent/tweet?text=http://nordicnaturals.com"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
      <a href="mailto:?subject=post.title&body=body"><i class="fa fa-envelope" aria-hidden="true"></i></a>
    </div>

    <!-- <p><b>{{post.category}}</b></p>
    <h2>{{post.title}}</h2>
    <p>By: {{post.author}}</p>
    <div class="post-content" v-html="post.content"></div>
    <hr /> -->
  </div>
</template>

<script>
export default {
  name: 'post',
  data () {
    return {
      post: []
    }
  },
  props: {
    postId: {
      type: Number,
      default: 1
    },
    postUrl: {
      type: String,
      default: 'test'
    }
  },
  methods: {
    fetchData(){
      var url = this.$route.params.postUrl
      this.$http.get('http://localhost:3000/posts?url=' + url)
        .then(function(response){
          this.post = response.data[0];
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
