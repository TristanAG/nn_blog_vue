<template>
  <div class="category-page">

    <div class="hero-image">

        <img v-bind:src="this.categoryImage" id="hero-image">

    </div>

    <div class="container">
      <div class="row">
        <div class="eight columns">
          <h5>{{this.category.split('-').join(' ').toUpperCase()}}</h5>
          <hr>
          <div v-for="post in posts" class="past-post-preview">
            <router-link :to="'/blog/' + post.category + '/' + post.postUrl">
              <img :src="post.imageUrl" class="past-post-image">
                <div class="category">{{post.categoryText}}</div>
                <div class="title">{{post.title}}</div>
                <p v-html="post.contentPreview"></p>
                <div class="read-more"><p>read more</p></div>
            </router-link>
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
  name: 'category-page',
  data: function () {
    return {
      category: String,
      categoryImage: String
    }
  },
  created: function() {
    this.reLoad()
  },
  computed: {
    posts: function () {
      var categoryPosts = []
      for(var i = 0; i < this.$store.state.posts.length; i++){
        if(this.$store.state.posts[i].category === this.category){
          categoryPosts.push(this.$store.state.posts[i])
        }
      }
      return categoryPosts
    }
  },
  watch: {
    '$route' () {
      this.reLoad()
      this.doSomething()
    }
  },
  methods: {
    reLoad: function() {
      this.category = this.$route.path.split('/')[2]
      if(this.category === "all-about-science"){
        this.categoryImage = "http://www.nordicnaturals.com/dev/blog-assets/images/science-compressor.jpg"
      }else if (this.category === "big-picture"){
        this.categoryImage = "http://www.nordicnaturals.com/dev/blog-assets/images/big-picture-compressor.jpg"
      }else if (this.category === "home-life"){
        this.categoryImage = "http://www.nordicnaturals.com/dev/blog-assets/images/home-life-1-compressor.jpg"
      }else if (this.category === "kultur"){
        this.categoryImage = "http://www.nordicnaturals.com/dev/blog-assets/images/nordic-Way-1-compressor.jpg"
      }

      //refresh the title in DOM
      var words = this.category.split('-')
      var sanitizedTitle = []
      for (var i = 0; i < words.length; i++){
        sanitizedTitle.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
      }
      window.document.title = sanitizedTitle.join(' ') + ' | Naturally Speaking'
    },
    doSomething: function() {
      // $('#hero-image').hide();
      $('#fader').css('opacity', '0').fadeTo( "fast", 1 );
    }
  }
}
</script>
