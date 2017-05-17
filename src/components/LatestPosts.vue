<template>
  <div class="latest-posts">
    <div class="hero-image">
      <img src="http://www.nordicnaturals.com/dev/blog-assets/images/nn-hp-no-text-compressor.jpg" id="hero-image-mobile">
      <img src="http://www.nordicnaturals.com/dev/blog-assets/images/nn-hp-compressor.jpg" id="hero-image-full">
    </div>

    <div class="container" id="main-container">
      <div class="row">
        <div class="eight columns">


          <h5>LATEST POSTS</h5>
          <hr />

          <!-- main post -->
          <div class="post-preview">
            <router-link :to="'/dev/' + mainPost.category + '/' + mainPost.postUrl">
              <div class="category">{{mainPost.categoryText}}</div>
              <div class="title" style="font-size: 1.33em;">{{mainPost.title}}</div>
              <img :src="mainPost.imageUrl" >
              <p v-html="mainPost.contentPreview"></p>
              <div class="read-more"><p>read more</p></div>
            </router-link>
          </div>

          <!--full view post previews -->
          <div id="full-view-mini-post">
            <!-- version 1 has margin-right -->
            <div
              v-for="(post, index) in recentPosts"
              v-if="index % 2 === 0"
              class="mini-post-preview"
              style="margin-right: 5.8%">
              <div class="post-preview">
                <router-link :to="'/dev/' + post.category + '/' + post.postUrl">
                  <div class="category">{{post.categoryText}}</div>
                  <div class="title">{{post.title}}</div>
                  <img :src="post.imageUrl" >
                  <p v-html="post.contentPreview"></p>
                  <div class="read-more"><p>read more</p></div>
                </router-link>
              </div>
            </div>
            <!-- version 2 has no margin-right -->
            <div
              v-else-if="index % 2 === 1"
              class="mini-post-preview">
              <div class="post-preview">
                <router-link :to="'/dev/' + post.category + '/' + post.postUrl">
                  <div class="category">{{post.categoryText}}</div>
                  <div class="title">{{post.title}}</div>
                  <img :src="post.imageUrl" >
                  <p v-html="post.contentPreview"></p>
                  <div class="read-more"><p>read more</p></div>
                </router-link>
              </div>
            </div>
          </div>

          <!--small view post previews (only appear in mobile view) -->
          <div id="small-view-mini-posts">
            <div
              v-for="(post, index) in recentPosts"
              class="past-post-preview">
              <div class="post-preview">
                <div class="category">{{post.categoryText}}</div>
                <div class="title">{{post.title}}</div>
                <router-link :to="'/dev/' + post.category + '/' + post.postUrl">
                  <img :src="post.imageUrl" >
                  <p v-html="post.contentPreview"></p>
                  <div class="read-more"><p>read more</p></div>
                </router-link>
              </div>
            </div>
          </div>

          <h5>PAST POSTS</h5>
          <hr>

          <!-- ALL PAST POSTS LISTED BELOW -->

          <div v-for="post in pastPosts" class="past-post-preview">
            <router-link :to="'/dev/' + post.category + '/' + post.postUrl">
              <img :src="post.imageUrl" class="past-post-image">
              <!-- <img src="" class="past-post-image"/> -->
              <!-- <span class="post-preview"> -->
                <div class="category">{{post.categoryText}}</div>
                <div class="title">{{post.title}}</div>
                <!-- <div class="tagline">10 Things We Can All Do to Clean Up Our Oceans</div> -->
                <p v-html="post.contentPreview"></p>
                <!-- </span> -->
                <div class="read-more"><p>read more</p></div>
            </router-link>
                <!-- <div class="author-image-wrapper">
                  <img src="images/author.png" class="author-pic-mini"/>
                </div>
                <div class="author-text-wrapper">
                  <div class="author-by">By</div> <div class="author-name">SARA YORK</div>
                </div> -->
              <!-- </span> -->
          </div>

        <!-- <h5>PAST POSTS</h5>
        <hr /> -->

        <!-- <div class="past-post-preview">
          <a href="#">
            <img src="images/sample2.jpg" class="past-post-image"/>
            <span class="post-preview">
              <div class="category">Big Picture</div>
              <div class="title">REFUSE, REDUCE, REUSE:</div>
              <div class="tagline">10 Things We Can All Do to Clean Up Our Oceans</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, cursus quis accumsan vitae,
                finibus tincidunt tellus. Praesent non ...
              </p>
          </a>
              <div class="author-image-wrapper">
                <img src="images/author.png" class="author-pic-mini"/>
              </div>
              <div class="author-text-wrapper">
                <div class="author-by">By</div> <div class="author-name">SARA YORK</div>
              </div>
            </span>
        </div> -->

        <!-- <div class="past-post-preview">
          <a href="#">
            <img src="images/sample2.jpg" class="past-post-image"/>
            <span class="post-preview">
              <div class="category">Big Picture</div>
              <div class="title">REFUSE, REDUCE, REUSE:</div>
              <div class="tagline">10 Things We Can All Do to Clean Up Our Oceans</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, cursus quis accumsan vitae,
                finibus tincidunt tellus. Praesent non ...
              </p>
          </a>
              <div class="author-image-wrapper">
                <img src="images/author.png" class="author-pic-mini"/>
              </div>
              <div class="author-text-wrapper">
                <div class="author-by">By</div> <div class="author-name">SARA YORK</div>
              </div>
            </span>
        </div> -->

        <!-- <div class="past-post-preview">
          <a href="#">
            <img src="images/sample2.jpg" class="past-post-image"/>
            <span class="post-preview">
              <div class="category">Big Picture</div>
              <div class="title">REFUSE, REDUCE, REUSE:</div>
              <div class="tagline">10 Things We Can All Do to Clean Up Our Oceans</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est sem, cursus quis accumsan vitae,
                finibus tincidunt tellus. Praesent non ...
              </p>
          </a>
              <div class="author-image-wrapper">
                <img src="images/author.png" class="author-pic-mini"/>
              </div>
              <div class="author-text-wrapper">
                <div class="author-by">By</div> <div class="author-name">SARA YORK</div>
              </div>
            </span>
        </div> -->

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
  name: 'latest-posts',
  computed: {
    mainPost: function () {
      return this.$store.state.posts[0]
    },
  	recentPosts: function () {
    	return this.$store.state.posts.slice(1, 3)
    },
    pastPosts: function () {
      return this.$store.state.posts.slice(3)
    }
  }
}
</script>
