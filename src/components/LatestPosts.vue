<template>
  <div class="latest-posts">
    <div class="hero-image">
      <img src="http://www.nordicnaturals.com/dev/blog-assets/images/nn-hp-no-text-compressor.jpg" id="hero-image-mobile">
      <img src="http://www.nordicnaturals.com/dev/blog-assets/images/nn-hp-compressor.jpg" id="hero-image-full">
    </div>

    <div class="container" id="main-container">
      <div class="row">
        <div class="eight columns">
          <h5>LATEST POSTS</h5>
          <hr />
          <!-- main post -->
          <div class="post-preview">
            <router-link :to="'/blog/' + mainPost.category" class="latest-link"><div class="category">{{mainPost.categoryText}}</div></router-link>
            <router-link :to="'/blog/' + mainPost.category + '/' + mainPost.postUrl">
              <div class="title" style="font-size: 1.33em;">{{mainPost.title}}</div>
              <img :src="mainPost.imageUrl" >
              <p v-html="mainPost.contentPreview"></p>
              <div class="read-more"><p>read more</p></div>
            </router-link>
          </div>

          <!--full view post previews -->
          <div id="full-view-mini-post">
            <!-- version 1 has margin-right -->
            <div
              v-for="(post, index) in recentPosts"
              v-if="index % 2 === 0"
              class="mini-post-preview"
              style="margin-right: 5.8%">
              <div class="post-preview">
                <router-link :to="'/blog/' + post.category" class="latest-link"><div class="category">{{post.categoryText}}</div></router-link>
                <router-link :to="'/blog/' + post.category + '/' + post.postUrl">
                  <div class="title">{{post.title}}</div>
                  <img :src="post.imageUrl" >
                  <p v-html="post.contentPreview"></p>
                  <div class="read-more"><p>read more</p></div>
                </router-link>
              </div>
            </div>
            <!-- version 2 has no margin-right -->
            <div
              v-else-if="index % 2 === 1"
              class="mini-post-preview">
              <div class="post-preview">
                <router-link :to="'/blog/' + post.category" class="latest-link"><div class="category">{{post.categoryText}}</div></router-link>
                <router-link :to="'/blog/' + post.category + '/' + post.postUrl">
                  <div class="title">{{post.title}}</div>
                  <img :src="post.imageUrl" >
                  <p v-html="post.contentPreview"></p>
                  <div class="read-more"><p>read more</p></div>
                </router-link>
              </div>
            </div>
          </div>

          <!--small view post previews (only appear in mobile view) -->
          <div id="small-view-mini-posts">
            <div
              v-for="(post, index) in recentPosts"
              class="past-post-preview">
              <div class="post-preview">
                <router-link :to="'/blog/' + post.category" class="latest-link"><div class="category">{{post.categoryText}}</div></router-link>
                <div class="title">{{post.title}}</div>
                <router-link :to="'/blog/' + post.category + '/' + post.postUrl">
                  <img :src="post.imageUrl" >
                  <p v-html="post.contentPreview"></p>
                  <div class="read-more"><p>read more</p></div>
                </router-link>
              </div>
            </div>
          </div>

          <h5>PAST POSTS</h5>
          <hr>

          <!-- ALL PAST POSTS LISTED BELOW -->

          <div v-for="post in pastPosts" class="past-post-preview">
            <router-link :to="'/blog/' + post.category + '/' + post.postUrl">
              <img :src="post.imageUrl" class="past-post-image">
                <router-link :to="'/blog/' + post.category" class="latest-link"><div class="category">{{post.categoryText}}</div></router-link>
                <div class="title">{{post.title}}</div>
                <p v-html="post.contentPreview"></p>
                <div class="read-more"><p>read more</p></div>
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
  name: 'latest-posts',
  created: function() {
    window.document.title = "Naturally Speaking"
  },
  computed: {
    mainPost: function () {
      return this.$store.state.posts[0]
    },
  	recentPosts: function () {
    	return this.$store.state.posts.slice(1, 3)
    },
    pastPosts: function () {
      return this.$store.state.posts.slice(3)
    }
  }
}
</script>

<style scoped>
  .latest-link{
    color: inheret;
    text-decoration: underline;
  }
</style>
