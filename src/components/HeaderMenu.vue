<template>

  <div class="header-menu">
    <div id="post-header">
    <div class="container">
      <div class="row" id="menu-display">
        <div id="header-left">
          <a href="index.html"><h5>nn_blog</h5></a>
        </div>

        <div id="header-right">
          <h5><a id="menu-display"><i class="fa fa-bars" aria-hidden="true" style="margin-left: 0px"></i></a></h5>

        </div>
      </div>
    </div>
    <div id="mobile-menu">
    <div class="container">
      <div class="row">
          <a href="index.html"><h5>LATEST POSTS</h5></a>
          <ul>
            <li class="category-sidebar">
              <a href="big-picture/refuse-reduce-reuse.html" >Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans</a>
            </li>

            <li class="category-sidebar">
              <a href="all-about-science/why-natural-form-fish-oils-are-better.html">Why Natural-Form Fish Oils are Better for Your
                Body—and Your Wallet</a>
            </li>

            <li class="category-sidebar">
              <a href="the-nordic-way/meet-jonna.html">Inside Nordic Naturals: Meet Jonna, Customer Service Rep
                Extraordinaire</a>
            </li>


          </ul>
          <a href="contributors.html"><h5>CONTRIBUTORS</h5></a>
          <br>
          <br>
          <div class="social-icons">
          <h5>
            <a href="https://www.facebook.com/nordicnaturals/" target="_none"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://twitter.com/nordicnaturals" target="_none"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/nordicnaturals/" target="_none"><i class="fa fa-instagram" aria-hidden="true" style="margin-right: 0px"></i></a>
          </h5>
          <br>
          $ $ $ T E M P $ $ $
          <router-link to='/dev'>Home</router-link>
          <br>
          categories:
          <router-link to='/dev/kultur'>Kultur</router-link>
          <router-link to='/dev/big-picture'>Big Picture</router-link>
          <router-link to='/dev/all-about-science'>All About Science</router-link>
          <br>
          posts:
          <router-link to='/dev/big-picture/refuse-reduce-reuse-10-things-to-clean-up-our-oceans'>Big Picture post 1</router-link>
          <router-link to='/dev/all-about-science/why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet'>All about science post 1</router-link>
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
  data () {
    return {
      posts: []
    }
  }
}

$( document ).ready( function() {
  var visible = false
  $( '#mobile-menu' ).hide()
  $( '#menu-display' ).click(function () {
    if( !visible ){
      visible = true
      $( '#mobile-menu' ).slideDown( '.4' )
      $( '.columns' ).fadeTo( "slow", 0.2 )
    } else {
      visible = false
      $( '#mobile-menu' ).slideUp( 'fast' )
      $( '.columns' ).fadeTo( "slow", 1 )
    }
  })

  $( '#mobile-menu' ).click(function () {
    if( visible ){
      visible = false
      $( '#mobile-menu' ).slideUp( '.4' )
      $( '.columns' ).fadeTo( "slow", 1 )
    }
  })
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
