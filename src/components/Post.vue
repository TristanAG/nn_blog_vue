<template>
  <div class="post">
    <p><b>{{post.category}}</b></p>
    <h2>{{post.title}}</h2>
    <p>By: {{post.author}}</p>
    <div class="post-content" v-html="post.content"></div>
    <hr />
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
