<template>
  <div class="post">

    <!-- [mobile only code for full-width image] -->

    <div class="buffer"></div>
    <div class="mobile-image-mod">
      <div class="container">
        <h5><router-link :to="'/blog/' + post.category">{{post.categoryText}}</router-link></h5>
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
            <h5><router-link :to="'/blog/' + post.category">{{post.categoryText}}</router-link></h5>
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
              <router-link :to="'/blog/' + latestPost.category + '/' + latestPost.postUrl">
                <div class="title">{{latestPost.title}}</div>
                <img :src="latestPost.imageUrl">
              </router-link>
            </div>
            <div class="mini-mini-post-preview">
              <router-link :to="'/blog/' + latestCategoryPost.category + '/' + latestCategoryPost.postUrl">
                <div class="title">{{latestCategoryPost.title}}</div>
                <img :src="latestCategoryPost.imageUrl">
              </router-link>
            </div>
          </div>

          <div id="mini-posts-mobile">
            <router-link :to="'/blog/' + latestPost.category + '/' + latestPost.postUrl">
              <div class="title">{{latestPost.title}}</div>
              <img :src="latestPost.imageUrl">
            </router-link>

            <router-link :to="'/blog/' + latestCategoryPost.category + '/' + latestCategoryPost.postUrl">
              <div class="title">{{latestCategoryPost.title}}</div>
              <img :src="latestCategoryPost.imageUrl">
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
    latestPost: function () {
      var latestPost = this.$store.state.posts[0]
      //extra control switch after && to ensure that both refs are unique (don't latest post == latest category post)
      if (this.post.title != latestPost.title && this.latestCategoryPost.title != latestPost.title){
        return latestPost
      }else{
        return this.$store.state.posts[1]
      }
    },
    latestCategoryPost: function() {
      var category = this.post.category
      var posts = []
      for (var i = 0; i<this.$store.state.posts.length; i++){
        if (this.$store.state.posts[i].category === category){
          posts.push(this.$store.state.posts[i])
        }
      }

      if (this.post.title === "Seven Ways We Put Sustainability into Action"){
        return posts[2]
      }

      //if the current post is the same as the most recent post
      if (this.post.title === posts[0].title){
        //return the second most recent
        return posts[1]
      } else {
        //if not, return the most recent
        return posts[0]
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

<style>
  .eight.columns ul{

      font-family: 'Lora', serif;
      font-weight: 400;
      /*font-size: .84em;*/
      font-size: 16px;
      color: #2f2f2f;
      letter-spacing: .01em;
      margin-top: 10px;
      margin-bottom: 10px;
      list-style-type: disc;
    }
  .eight.columns li{
      margin-left: 20px;

    }


</style>
