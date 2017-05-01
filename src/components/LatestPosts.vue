<template>
  <div class="latest-posts">




    <ul v-for="(post, index) in posts">
      <li>
        {{index}}


        <div class="post-preview">
          <router-link v-bind:to="'/dev/' + post.category + '/' + post.url">
            <div class="category">{{post.category}}</div>
            <div class="title" style="font-size: 1.33em;">{{post.title}}</div>
            <img src="images/refuse-reduce-reuse-compressor.jpg" >

            <p>
              Ocean "smog" created from the disposable plastics we all throw away has become a huge concern. Right now, there are some 270,000 tons of trash swirling around the world's oceans in giant, tangled heaps.
            </p>
            <div class="read-more"><p>read more</p></div>
          </router-link>

        </div>


        <p><b>{{post.category}}</b></p>
        <h2>{{post.title}}</h2>
        <p>By: {{post.author}}</p>
        <div class="post-content" v-html="post.content"></div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'latest-posts',
  data () {
    return {
      posts: []
    }
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
