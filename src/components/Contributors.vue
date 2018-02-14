<template>
  <div class="contributors">
    <div class="container" style="padding-top: 40px;">
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
              <hr v-if="index != 6" class="hr-category" style="margin-top: 26px;">
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
          name: "Jerilyn Swindle",
          picture: "http://www.nordicnaturals.com/dev/blog-images/jerilyn-swindle.jpg",
          bio: "Jerilyn is an educator at Nordic Naturals and has been immersed in the natural health industry for more than 20 years.  She has a personal passion for locally sourced food and fermenting at home.  Her down time is spent with her young son, preferably out in nature."
        },
        {
          name: "Jackie Hansmann",
          picture: "http://res.cloudinary.com/nordic-naturals/image/upload/v1511284915/web/blog-assets/jackie-bio-photo.jpg",
          bio: "Jackie is the outreach coordinator at Nordic Naturals. Her passion for helping others and cultivating meaningful relationships is reflected in her work managing cause partnerships and advocating for corporate social responsibility. A camping and adventuring enthusiast in her off hours, Jackie is always encouragingothers to think globally and act locally."
        },
        {
          name: "Debbie Drecksel",
          picture: "http://res.cloudinary.com/nordic-naturals/image/upload/v1510603324/web/blog-assets/debbie-photo.jpg",
          bio: `Inspired by her childhood gardening roots, Debbie Drecksel is a passionate health and
          wellness educator. After studying nutrition and exercise physiology at the University of
          Utah, she worked as a physical therapist and then spent three years as a Whole Body
          Specialist for Whole Foods. Building on her passion for wellness, Debbie has participated
          for many years in the natural products industry, presenting seminars and trainings,
          conducting interviews, and appearing at tradeshow events.`
        },
        {
          name: "Lee DeGraw",
          picture: "http://res.cloudinary.com/nordic-naturals/image/upload/v1518471824/web/blog-assets/lee-degraw-1.jpg",
          bio: "Lee is a lifestyle writer with a passion for all things health and wellness. As the former Social Media Specialist for Nordic Naturals, her love for omega-3s and the natural products industry has only grown. When she’s not typing away at her computer, she is hiking in the mountains near her home, camping or traveling the globe on a tight budget."
        },
        {
          name: "Claudia Burgin",
          picture: "http://res.cloudinary.com/nordic-naturals/image/upload/v1511284915/web/blog-assets/Claudia-bio-photo.jpg",
          bio: "Claudia is a marketing writer at Nordic Naturals. A former journalist, she has been writing for the science and technology communities for the past 20 years. Her natural curiosity for how things work and her lifelong tendency to choose natural remedies over pharmaceuticals led her to join the natural products industry in 2016. In her spare time, Claudia can be found spending time outdoors with her family."
        }
      ]
    }
  }
}
</script>
<style scoped>
  .author-component-left-pane > img{
    /*border-radius: 50%;*/
  }
</style>
