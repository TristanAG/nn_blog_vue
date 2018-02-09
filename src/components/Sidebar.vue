<template>
  <div class="sidebar">
    <h5>RECENT POSTS</h5>
    <hr />
    <ul>
      <li v-for="post in posts" class="category-sidebar">
        <router-link :to="'/blog/' + post.category + '/' + post.postUrl">{{post.title}}</router-link>
        <hr class="hr-category" />
      </li>
    </ul>
    <h5>CATEGORIES</h5>
    <hr />
    <ul>
      <li class="category-sidebar"><router-link :to="'/blog/all-about-science'">All About Science</router-link></li>
      <hr class="hr-category" />
      <li class="category-sidebar"><router-link :to="'/blog/big-picture'">Big Picture</router-link></li>
      <hr class="hr-category" />
      <li class="category-sidebar"><router-link :to="'/blog/the-nordic-way'">The Nordic Way</router-link></li>
      <hr class="hr-category" />
      <li class="category-sidebar"><router-link :to="'/blog/home-life'">Home Life</router-link></li>
    </ul>
    <h5>SUBSCRIBE</h5>
    <hr />
    <p>Get the latest posts delivered to your inbox.</p>

    <a href="#" onclick="window.open('http://www.nordicnaturals.com/blog/sign-up', 'ApplyRefer', 'width=420,height=420,resizable,scrollbars');event.returnValue=false;return false"><button>Sign Up</button></a>

    <!-- window.open('http://www.nordicnaturals.com/blog/sign-up', 'ApplyRefer', 'width=920,height=700,resizable,scrollbars');event.returnValue=false;return false -->

  </div>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
  	posts: function () {
    	return this.$store.state.posts.slice(0,5)
    }
  }
}
</script>



<style scoped>
  .sidebar li{
    padding-left: 0px;
  }
  button{
    width: 100%;
    border: 1px solid #00accd;
    letter-spacing: .1em;
    color: #00accd;

    transition: .3s;
  }

  button:hover{

      background-color: #00accd;

      color: white;

  }
</style>
