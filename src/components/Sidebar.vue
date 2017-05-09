<template>
  <div class="sidebar">
    <h5>ARCHIVES</h5>
    <hr />
    <ul>
      <li v-for="post in posts" class="category-sidebar">
        <router-link :to="'/dev/' + post.category + '/' + post.postUrl">{{post.title}}</router-link>
        <hr class="hr-category" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
  	posts: function () {
      // return this.$store.state.posts[0]
      // console.log(this.$route.params.postUrl)
    	return this.$store.state.posts
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
