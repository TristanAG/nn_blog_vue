<template>
  <div class="latest-posts">

    <div class="container" id="main-container">
      <div class="row">
        <div class="eight columns">


          <h5>LATEST POSTS</h5>
          <hr />

          <!-- main post -->
          <div class="post-preview">
            <router-link :to="'/dev/' + mainPost.category + '/' + mainPost.postUrl">
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
                <router-link :to="'/dev/' + post.category + '/' + post.postUrl">
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
                <router-link :to="'/dev/' + post.category + '/' + post.postUrl">
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
                <router-link :to="'/dev/' + post.category + '/' + post.postUrl">
                  <img :src="post.imageUrl" >
                  <p>{{post.contentPreview}}</p>
                  <div class="read-more"><p>read more</p></div>
                </router-link>
              </div>
            </div>
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
  // data () {
  //   return {
  //     posts: [],
  //     mainPost: {},
  //     recentPosts: []
  //     /* consider creating recentPosts[] for the two special cases */
  //   }
  // },
  // created: function(){
  //   // this.$http.get('https://blog-post-data-74d5d.firebaseio.com/posts.json')
  //
  //   this.$http.get('https://blog-post-data-74d5d.firebaseio.com/category.json')
  //     .then(function(response){
  //       console.log(response.data);
  //       this.posts = response.data;
  //       // this.mainPost = this.posts[0];
  //       // this.recentPosts = this.posts.slice(1,3);
  //     });
  // }
  computed: {
    mainPost: function () {
      return this.$store.state.posts[0]
    },
  	recentPosts: function () {
      // return this.$store.state.posts[0]
      // console.log(this.$route.params.postUrl)

    	return this.$store.state.posts.slice(1)
      // .find((post) => {
        //this is basically saying to return true of the object has been found

        // if (post.postUrl == this.$route.params.postUrl){
        //   return post.postUrl
        // }


      	// return post.postUrl === this.$route.params.postUrl
      // })
    }
  }
}
</script>
