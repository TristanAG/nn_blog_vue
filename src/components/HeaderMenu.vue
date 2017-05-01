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
            <router-link to="/dev"><h5>LATEST POSTS</h5></router-link>
            <ul>
              <li class="category-sidebar">
                <router-link to='/dev/big-picture/refuse-reduce-reuse-10-things-to-clean-up-our-oceans'>Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans</router-link>
              </li>

              <li class="category-sidebar">
                <router-link to='/dev/all-about-science/why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet'>Why Natural-Form Fish Oils are Better for Your
                  Body—and Your Wallet</router-link>
              </li>

              <li class="category-sidebar">
                <router-link to="/dev/kultur/inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire">Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire</router-link>
              </li>
            </ul>
            <router-link to="/dev/contributors"><h5>CONTRIBUTORS</h5></router-link>

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
  name: 'header-menu'
}
//menu toggle script with fade effects
$( document ).ready( function() {
  var visible = false
  $( '#mobile-menu' ).hide()
  $( '#menu-display' ).click(function () {
    if( !visible ){
      visible = true
      $( '#mobile-menu' ).slideDown( '.4' )
      $( '.columns' ).fadeTo( "slow", 0.4 )
      $( '.hero-image' ).fadeTo( "slow", 0.4 )
    } else {
      visible = false
      $( '#mobile-menu' ).slideUp( 'fast' )
      $( '.columns' ).fadeTo( "slow", 1 )
      $( '.hero-image' ).fadeTo( "slow", 1 )
    }
  })

  $( '#mobile-menu' ).click(function () {
    if( visible ){
      visible = false
      $( '#mobile-menu' ).slideUp( '.4' )
      $( '.columns' ).fadeTo( "slow", 1 )
      $( '.hero-image' ).fadeTo( "slow", 1 )
    }
  })
})

</script>
