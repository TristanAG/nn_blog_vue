<template>
  <div class="latest-posts">

    <h5>LATEST POSTS</h5>
    <hr />

    <!-- main post -->
    <div class="post-preview">
      <router-link :to="'/dev/' + mainPost.category + '/' + mainPost.url">
        <div class="category">{{mainPost.categoryText}}</div>
        <div class="title" style="font-size: 1.33em;">{{mainPost.title}}</div>
        <img :src="mainPost.imageUrl" >
        <p>{{mainPost.contentPreview}}</p>
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
          <router-link :to="'/dev/' + post.category + '/' + post.url">
            <div class="category">{{post.category}}</div>
            <div class="title">{{post.title}}</div>
            <img :src="post.imageUrl" >
            <p>{{post.contentPreview}}</p>
            <div class="read-more"><p>read more</p></div>
          </router-link>
        </div>
      </div>
      <!-- version 2 has no margin-right -->
      <div
        v-else-if="index % 2 === 1"
        class="mini-post-preview">
        <div class="post-preview">
          <router-link :to="'/dev/' + post.category + '/' + post.url">
            <div class="category">{{post.category}}</div>
            <div class="title">{{post.title}}</div>
            <img :src="post.imageUrl" >
            <p>{{post.contentPreview}}</p>
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
          <div class="category">{{post.category}}</div>
          <div class="title">{{post.title}}</div>
          <router-link :to="'/dev/' + post.category + '/' + post.url">
            <img :src="post.imageUrl" >
            <p>{{post.contentPreview}}</p>
            <div class="read-more"><p>read more</p></div>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'latest-posts',
  data () {
    return {
      posts: [],
      mainPost: {},
      recentPosts: []
      /* consider creating recentPosts[] for the two special cases */
    }
  },
  created: function(){
    this.$http.get('http://localhost:3000/posts')
      .then(function(response){
        console.log(response.data);
        this.posts = response.data;
        this.mainPost = this.posts[0];
        this.recentPosts = this.posts.slice(1,3);
      });
  }
}
</script>
