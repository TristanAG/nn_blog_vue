<template>
  <div class="post">
    <!-- [mobile only code for full-width image] -->
    <div class="buffer"></div>
    <div class="mobile-image-mod">
      <div class="container" >
        <h5>BIG PICTURE</h5>
        <hr />
        <h1>Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans</h1>
      </div>
      <img :src="post.imageUrl">
      <p class="author-link">By <router-link to="/dev/contributors">{{post.author}}</router-link></p>
    </div>
    <!-- [/mobile only code for full-width image] -->

    <div class="container" id="main-container">
      <div class="row">
        <div class="eight columns">
          <div class="desktop-image-mod">
            <h5>{{post.categoryText}}</h5>
            <hr />
            <h1>{{post.title}}</h1>
            <img :src="post.imageUrl">
            <p class="author-link">By <router-link to="/dev/contributors">{{post.author}}</router-link></p>
          </div>
          <div class="post-content" v-html="post.content"></div>

          <div class="social-sharing">
            <b>Share this post</b>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http://nordicnaturals.com/dev/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://twitter.com/intent/tweet?text=http://nordicnaturals.com"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="mailto:?subject=post.title&body=body"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </div>

          <h5 style="margin-top: 62px;">YOU MAY ALSO LIKE</h5>
          <hr />

          <div id="mini-posts-full">
            <div class="mini-mini-post-preview" style="margin-right: 5.8%">
              <router-link :to="'/dev/' + post.ref1category + '/' + post.ref1url">
                <div class="title">{{post.ref1title}}</div>
                <img :src="post.ref1img">
              </router-link>
            </div>
            <div class="mini-mini-post-preview">
              <router-link :to="'/dev/' + post.ref2category + '/' + post.ref2url">
                <div class="title">{{post.ref2title}}</div>
                <img :src="post.ref2img">
              </router-link>
            </div>
          </div>

          <div id="mini-posts-mobile">
            <router-link :to="'/dev/' + post.ref1category + '/' + post.ref1url">
              <div class="title">{{post.ref1title}}</div>
              <img :src="post.ref1img">
            </router-link>

            <router-link :to="'/dev/' + post.ref2category + '/' + post.ref2url">
              <div class="title">{{post.ref2title}}</div>
              <img :src="post.ref2img">
            </router-link>
          </div>
        </div>

        <div class="four columns">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
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
          console.log(response.data)
          this.post = response.data[0]
      });
    }
  },
  watch: {
    '$route': 'fetchData',
  },
  created: function(){
    this.fetchData();
  }
}
</script>
