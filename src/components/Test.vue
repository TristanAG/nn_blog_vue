<template>
  <div class="test">
    <!-- {{post.title}} | {{post.content}} -->
    <h1>fill in</h1>
    <h1>fill in</h1>



    count: {{count}}
  </div>
</template>

<script>

export default {
  name: 'test',
  computed: {
    count () {
      return this.$store.getters.getPostCount
    },
  }



  // computed: {
  //   post() {
  //     console.log(this.$route.path)
  //     return this.post = this.$store.state.posts[2]
  //   },
  //   getPostByRoute() {
  //     return this.post = this.$store.state.posts[1]
  //   }
  // },
  // methods: {
  //   getPostByRoute() {
  //     // return this.post = this.$store.state.posts[1]
  //   }
  // }
}
</script>
