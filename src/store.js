import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        category: "big-picture",
        categoryText: "Big Picture",
        author: "CLAUDIA BURGIN",
        postUrl: "refuse-reduce-reuse-10-things-to-clean-up-our-oceans",
        title: "Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/refuse-reduce-reuse-compressor.jpg",
        contentPreview: "content preview goes here",
        content: "<p>content is here</p>",
        ref1title: "Why Natural-Form Fish Oils are Better for Your Body—and Your Wallet",
        ref1category: "all-about-science",
        ref1url: "why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet",
        ref1img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/capsules-and-fish.jpg",
        ref2title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        ref2category: "kultur",
        ref2url: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/jonna-compressor.jpg"
      },
      {
        id: 2,
        category: "all-about-science",
        categoryText: "All About Science",
        author: "NICHOLAS NOLOBOFF",
        postUrl: "why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet",
        title: "Why Natural-Form Fish Oils are Better for Your Body—and Your Wallet",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/capsules-and-fish.jpg",
        contentPreview: "content preview goes here",
        content: "<p>content is here</p>",
        ref1title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        ref1category: "kultur",
        ref1url: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        ref1img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/jonna-compressor.jpg",
        ref2title: "Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans",
        ref2category: "big-picture",
        ref2url: "refuse-reduce-reuse-10-things-to-clean-up-our-oceans",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/refuse-reduce-reuse-compressor.jpg"
      },
      {
        id: 3,
        category: "kultur",
        categoryText: "Kultur",
        author: "NORDIC NATURALS STAFF",
        postUrl: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/jonna-compressor.jpg",
        contentPreview: "content preview goes here",
        content: "<p>content is here</p>",
        ref1title: "Why Natural-Form Fish Oils are Better for Your Body—and Your Wallet",
        ref1category: "all-about-science",
        ref1url: "why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet",
        ref1img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/capsules-and-fish.jpg",
        ref2title: "Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans",
        ref2category: "big-picture",
        ref2url: "refuse-reduce-reuse-10-things-to-clean-up-our-oceans",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/refuse-reduce-reuse-compressor.jpg"
      }
    ]
  }
})
