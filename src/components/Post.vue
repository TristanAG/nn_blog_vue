<template>
  <div class="post">
    <!-- [mobile only code for full-width image] -->
    <div class="buffer"></div>
    <div class="mobile-image-mod">
      <div class="container">
        <h5>{{post.categoryText}}</h5>
        <hr />
        <h1>{{post.title}}</h1>
      </div>
      <img :src="post.imageUrl">
      <p class="author-link">By <router-link to="/blog/contributors">{{post.author}}</router-link></p>
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
            <p class="author-link">By <router-link to="/blog/contributors">{{post.author}}</router-link></p>
          </div>
          <div class="post-content" v-html="post.content"></div>

          <div class="social-sharing">
            <b>Share this post</b>
            <a v-bind:href="facebookShare"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a v-bind:href="twitterShare"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a v-bind:href="mailShare"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </div>

          <h5 style="margin-top: 62px;">YOU MAY ALSO LIKE</h5>
          <hr />

          <div id="mini-posts-full">
            <div class="mini-mini-post-preview" style="margin-right: 5.8%">
              <router-link :to="'/blog/' + post.ref1category + '/' + post.ref1url">
                <div class="title">{{post.ref1title}}</div>
                <img :src="post.ref1img">
              </router-link>
            </div>
            <div class="mini-mini-post-preview">
              <router-link :to="'/blog/' + post.ref2category + '/' + post.ref2url">
                <div class="title">{{post.ref2title}}</div>
                <img :src="post.ref2img">
              </router-link>
            </div>
          </div>

          <div id="mini-posts-mobile">
            <router-link :to="'/blog/' + post.ref1category + '/' + post.ref1url">
              <div class="title">{{post.ref1title}}</div>
              <img :src="post.ref1img">
            </router-link>

            <router-link :to="'/blog/' + post.ref2category + '/' + post.ref2url">
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
  data: function () {
    return {
      postRef: {}
    }
  },
  created: function() {
    window.document.title = this.post.title + ' | Naturally Speaking'
  },
  computed: {
  	post: function () {
      //method grabs post based on the current active url in $route
      var activePostUrl = this.$route.path.split('/')[3]
      // console.log(activePostUrl)
      for (var i = 0; i<this.$store.state.posts.length; i++){
        var post = this.$store.state.posts[i]
        if(activePostUrl === post.postUrl)
          return post
      }
    },
    facebookShare: function () {
      return 'https://www.facebook.com/sharer/sharer.php?u=http://nordicnaturals.com/blog/' + this.post.category + '/' + this.post.postUrl
    },
    twitterShare: function () {
      return 'https://twitter.com/intent/tweet?text=http://nordicnaturals.com/blog/' + this.post.category + '/' + this.post.postUrl
    },
    mailShare: function () {
      return 'mailto:?subject=' + this.postRef.title + '&body=http://www.nordicnaturals.com/blog/' + this.post.category + '/' + this.post.postUrl
    }
  },
  watch: {
    '$route' () {
        window.document.title = this.post.title + ' | Naturally Speaking'
    }
  }
}
</script>
