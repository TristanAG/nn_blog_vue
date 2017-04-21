<template>
  <div class="test">
    <ul v-for="post in posts">
      <li>
        <!-- <h2>{{post.title}}</h2> -->
        <h2 v-html="post.title"></h2>

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
  name: 'test',
  data () {
    return {
      posts: [

      ]
    }
  },
  methods: {

  },
  created: function(){
    this.$http.get('http://localhost:3000/posts?category=pokemon')
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
