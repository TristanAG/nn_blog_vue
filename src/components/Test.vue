<template>
  <div class="test">
    <!-- {{post.title}} | {{post.content}} -->
    <h1>fill in</h1>
    <h1>fill in</h1>

    <h2>{{post.title}} | {{post.content}}</h2>


  </div>
</template>

<script>

export default {
  name: 'test',
  computed: {
  	post: function () {
      // return this.$store.state.posts[0]
      console.log(this.$route.params.postUrl)
    	return this.$store.state.posts.find((post) => {
        //this is basically saying to return true of the object has been found

        if (post.postUrl == this.$route.params.postUrl){
          return post.postUrl
        }


      	// return post.postUrl === this.$route.params.postUrl
      })
    }
  }
}
</script>
