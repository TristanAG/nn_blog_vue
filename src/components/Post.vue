<template>
  <div class="post">
    <h1>{{$route.params.postId}}</h1>
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
    }
  },
  methods: {
    fetchData(){
      var id = this.$route.params.postId
      this.$http.get('http://localhost:3000/posts/' + id)
        .then(function(response){
          console.log(response.data);
          this.post = response.data;
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

h1, h2 {
  font-weight: normal;
  margin-bottom: 4px;
  margin-top: -8px;
  color: #064880;

}
hr{
  margin-top: 12px;

}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.post-content{
  margin-top: 0px;
}
a {
  color: #42b983;
}
</style>
