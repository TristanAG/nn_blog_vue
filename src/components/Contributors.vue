<template>
  <div class="contributors">
    <div class="container" id="main-container" style="padding-top: 40px;">
      <div class="row">
        <div class="eight columns">

          <h5>CONTRIBUTORS</h5>
          <hr />

          <div v-for="(author, index) in authors" class="author-component">
            <div class="author-component-left-pane">
              <img :src="author.picture" class="author-image">
            </div>
            <div class="author-component-right-pane">
              <div class="title">{{author.name}}</div>
              <p>{{author.bio}}</p>
              <hr v-if="index != 3" class="hr-category" style="margin-top: 26px;">
            </div>
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
  name: 'contributors',
  created: function() {
    window.document.title = "Contributors | Naturally Speaking"
  },
  data () {
    return {
      authors: [
        {
          name: "Nick Noloboff",
          picture: "http://www.nordicnaturals.com/dev/blog-images/nicholas-noloboff-sq-compressor.jpg",
          bio: "Nick is a Senior Writer at Nordic Naturals and an Adjunct Instructor in the Humanities at Flagler College. He has studied psychology, writing, and the humanities for over twenty years, and combines these interests to educate individuals on trends and new research in the areas of natural health and wellness."
        },
        {
          name: "Terra Lynn",
          picture: "http://www.nordicnaturals.com/dev/blog-images/terra-sq-compressor.jpg",
          bio: "Terra is a regular contributor to the Naturally Speaking blog, and a former marketing writer at Nordic Naturals. She has been writing for the natural products industry for nearly a decade, and revels in providing resources to help people make informed decisions about health, nutrition, and sustainable living. In her former life, Terra was a university instructor and academic researcher. Her daily passions include tending her native plant garden, reading, and hanging out with her dogs."
        },
        {
          name: "Jackie Hansmann",
          picture: "http://www.nordicnaturals.com/dev/blog-images/jackie-sq-compressor.jpg",
          bio: "Jackie is the outreach coordinator at Nordic Naturals. Her passion for helping others and cultivating meaningful relationships is reflected in her work managing cause partnerships and advocating for corporate social responsibility. A camping and adventuring enthusiast in her off hours, Jackie is always encouragingothers to think globally and act locally."
        },
        {
          name: "Claudia Burgin",
          picture: "http://www.nordicnaturals.com/dev/blog-images/claudia2-sq-compressor.jpg",
          bio: "Claudia is a marketing writer at Nordic Naturals. A former journalist, she has been writing for the science and technology communities for the past 20 years. Her natural curiosity for how things work and her lifelong tendency to choose natural remedies over pharmaceuticals led her to join the natural products industry in 2016. In her spare time, Claudia can be found spending time outdoors with her family."
        }
      ]
    }
  }
}
</script>
