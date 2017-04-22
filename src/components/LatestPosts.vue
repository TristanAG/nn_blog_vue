<template>
  <div class="latest-posts">
    <ul v-for="post in posts">
      <li>
        <p><b>{{post.category}}</b></p>
        <h2>{{post.title}}</h2>
        <p>By: {{post.author}}</p>
        <div class="post-content" v-html="post.content"></div>
        <hr />
      </li>
    </ul>
    <!-- <h1>Post(s)</h1>
      <hr />
    <h2>{{ post.title }}</h2>
    <div v-html="post.body"></div> -->
  </div>
</template>

<script>
export default {
  name: 'latest-posts',
  data () {
    return {
      posts: [

      ]
    }
  },
  methods: {

  },
  created: function(){
    this.$http.get('http://localhost:3000/posts')
      .then(function(response){
        console.log(response.data);
        this.posts = response.data;
      });
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
