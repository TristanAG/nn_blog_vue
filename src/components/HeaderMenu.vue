<template>
  <div class="header-menu">
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MW6XPR" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="post-header">
      <div class="container">
        <div class="row">
          <div id="header-left">
            <router-link to="/blog"><img src="http://nordicnaturals.com/dev/blog-assets/images/nn-naturallyspeaking_horizontal.png" id="logo"></router-link>
          </div>

          <div id="header-right">
            <h5><a id="menu-display"><i class="fa fa-bars" aria-hidden="true" style="margin-left: 0px"></i></a></h5>
          </div>
        </div>
      </div>

      <div id="mobile-menu">
        <div class="container">
          <div class="row">
            <router-link to="/blog"><h5>LATEST POSTS</h5></router-link>

            <ul>
              <li v-for="post in archives" class="category-sidebar">
                <router-link :to="'/blog/' + post.category + '/' + post.postUrl">{{post.title}}</router-link>
                <!-- <hr class="hr-category" /> -->
              </li>
            </ul>

            <h5>CATEGORIES</h5>
            <ul>
              <li class="category-sidebar"><router-link :to="'/blog/all-about-science'">All About Science</router-link></li>
              <li class="category-sidebar"><router-link :to="'/blog/big-picture'">Big Picture</router-link></li>
              <li class="category-sidebar"><router-link :to="'/blog/kultur'">Kultur</router-link></li>
              <li class="category-sidebar"><router-link :to="'/blog/home-life'">Home Life</router-link></li>
            </ul>

            <router-link to="/blog/contributors"><h5>CONTRIBUTORS</h5></router-link>

            <div class="social-icons">
              <h5>
                <a href="https://www.facebook.com/nordicnaturals/" target="_none"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com/nordicnaturals" target="_none"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/nordicnaturals/" target="_none"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-menu',
  computed: {
    archives: function () {
      return this.$store.state.posts.slice(0,3)
    }
  }
}
//menu toggle script with fade effects
$( document ).ready( function() {
  var visible = false
  $( '#menu-display' ).click(function () {
    if( !visible ){
      visible = true
      $( '#mobile-menu' ).slideDown( '.4' )
      $( '#fader' ).fadeTo( 270, 0.6)
    } else {
      visible = false
      $( '#mobile-menu' ).slideUp( '.4' )
      $( '#fader' ).fadeTo( 270, 1 )
    }
  })
  $( '#mobile-menu' ).click(function () {
    if( visible ){
      visible = false
      $( '#mobile-menu' ).slideUp( '.4' )
      $( '#fader' ).fadeTo( 270, 1 )
    }
  })
})

</script>
