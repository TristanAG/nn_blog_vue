import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 4,
        category: "new-category",
        categoryText: "New Category",
        author: "SOME AUTHOR",
        postUrl: "the-new-post-is-here",
        title: "New Category and a Newwwww post",
        imageUrl: "http://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/05/06/c7/top-10-southern-california-beaches-newport-beach.rend.hgtvcom.1280.720.jpeg",
        contentPreview: "we got a new post here in a new category.",
        content: `
          <p>I like turtles</p>
        `,
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
        id: 3,
        category: "big-picture",
        categoryText: "Big Picture",
        author: "CLAUDIA BURGIN",
        postUrl: "refuse-reduce-reuse-10-things-to-clean-up-our-oceans",
        title: "Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/refuse-reduce-reuse-compressor.jpg",
        contentPreview: "Ocean \"smog\" created from the disposable plastics we all throw away has become a huge concern. Right now, there are some 270,000 tons of trash swirling around the world's oceans in giant, tangled heaps.",
        content: `
          <p>Ocean \"smog\" created from the disposable plastics we all throw away has become a huge concern. Right now, there are some 270,000 tons of trash swirling around the world's oceans in giant, tangled heaps. Ocean waves break these plastics down into smaller and smaller pieces, endangering the surrounding marine life as fish and birds either digest the plastic debris, mistaking it for food, or become entangled in it. Some of the plastic toxins they digest even make it up the food chain into the fish many of us eat. That’s right—we’re eating the plastic trash, too. One study found that <a href=\"http://www.ecowatch.com/25-of-fish-sold-at-markets-contain-plastic-or-man-made-debris-1882105614.html\" target=\"_none\">one-quarter of all fish sold in California markets had microplastics and fibers in their guts</a>. </p><div class=\"embedded-image left\"><img src=\"http://www.nordicnaturals.com/dev/blog-images/5Gyres2.jpg\"/><span style=\"padding-left: 28px; padding-right: 28px; display: inline-block\">Photo by 5 Gyres</span></div><p> Cleaning up the trash with some sort of floating, supersized garbage truck may sound like an obvious fix, but these vast islands of plastic trash—water bottles, straws, caps, food wrappers, bags, chunks of old, unrecognizable gadgets and toys—can’t just be collected and taken away. The disintegrating plastics permeate our oceans just like smog permeates our air. We can’t really filter it out. We have to stop the ocean smog at its source—us.</p><p>Here are 10 things we can all do today to help clean up our oceans—courtesy of <a href=\"http://www.5gyres.org\" target=\"_none\">The 5 Gyres Institute</a>, a non-profit dedicated to empowering all of us to take action in response to this unhealthy scenario. We at Nordic Naturals are inspired, and proud to sponsor and support <a href=\"https://www.5gyres.org/\" target=\"_none\">5 Gyres</a> in spreading the word.</p><h5>How Can We Help?</h5><p><b>1.</b> Swear off plastic bags. Stash some reusable bags in your car, or carry a backpack or tote bag with you.</p><p><b>2.</b> Carry a reusable water bottle. Don’t buy bottled water—<a href=\"http://www.treehugger.com/clean-water/save-1400-a-year-by-drinking-tap-water.html\" target=\"_none\">you can save $1400 a year by just drinking tap.</a></p><p><b>3.</b> Say no to straws, or only use paper straws. When you order a drink, say “No straw, please.”</p><p><b>4.</b> Use non-plastic utensils and bring your own mug to the coffee shop. Get in the habit of carrying these with you when you’re out and about.</p><p><b>5.</b> <a href=\"https://www.5gyres.org/styrofoam/\" target=\"_none\">Avoid all things Styrofoam.</a> The chemicals used to create Styrofoam cups and food containers are toxic and possibly carcinogenic. Bad for you, bad for the oceans.</p><p><b>6.</b> Buy items with minimal packaging, and buy in bulk whenever possible. Choose non-plastic beverage containers.</p><p><b>7.</b> Minimize your electronic footprint by repairing, upgrading, or recycling old phones, TVs, computers, and peripherals.</p><div class=\"embedded-image left\"><img src=\"http://www.nordicnaturals.com/dev/blog-images/5Gyres3.jpeg\"/><span style=\"padding-left: 28px; padding-right: 28px; display: inline-block\">Photo by Ryan Martin for 5 Gyres</span></div><p><b>8.</b> Buy clothes made from natural materials. Synthetic clothing items shed microfibers every time they’re washed, and these fibers wind up in the ocean.</p><p><b>9.</b> Don’t buy face cleansers and scrubs that contain microbeads (they’ll be phased out soon anyway, thanks to the <a href=\"https://www.fda.gov/Cosmetics/GuidanceRegulation/LawsRegulations/ucm531849.htm\" target=\"_none\">Microbead-Free Waters Act</a>).</p><p><b>10.</b> Pledge to go <a href=\"https://www.5gyres.org/newsletter-sign-up\" target=\"_none\">#plasticfree</a> for a day, a week, a year—or forever. Start by refusing the top five sources of single use plastic: plastic bags, water bottles, to-go containers, takeaway cups, and straws.</p><p>Cleaning up our oceans isn’t going to happen overnight. But we can all make a difference—one piece of plastic trash at a time.</p>
        `,
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
        contentPreview: "“Triglycerides” may sound intimidating, but all you really need to know is that they’re the form of omega-3 fats that your body ...",
        content: `
          <p>“Triglycerides” are something we talk about a lot at Nordic Naturals. They sound intimidating, but all you really need to know is that they’re the form of omega-3 fats that your body prefers. And, many fish oils on the market today are not triglyceride form. Let me explain.</p><p>Triglycerides are a form of molecule. You may hear that “high triglycerides” are bad for the heart, but I’m talking about a different kind that is really important for overall health. That’s because dietary fats are really important for us, and 98% of all fats we eat are triglycerides. None of this would matter beyond the lab if all companies produced fish oil the right way—as natural omega-3s. Sadly, they don’t. But if you know to look for triglyceride form omega-3s—the natural form—it’s easy to find great fish oil.</p><p>Natural-form fish oil is better for a handful of reasons. Freshness, effectiveness, and value topthe list. You’d expect this since triglyceride-form fats abound in nature. But what about the alternative?</p><p><b>Natural Form = Fresh</b></p><p>Most fish oils are made of ethyl ester molecules, which are the result of concentrating omega-3s to make a more potent product, and then skipping a final step that recreates the natural molecular form. No big surprise, skipping this step is cheaper for fish oil manufacturers, but the cost-savings don’t translate to you. Ethyl ester fish oils are fragile, so the molecules have a hard time holding together, and are more susceptible to damage by oxygen. That means a lot of spoiled, stinky fish oil—and more free radicals.</p><p><b>Natural Form = Effective</b></p><div class=\"embedded-image right\"><img src=\"http://www.nordicnaturals.com/dev/blog-images/tg-form-graph-compressor.jpg\" ></div><p>Natural-form fish oil is also more effective than ethyl ester fish oil. A number of studies have documented the body’s improved ability to absorb and use natural form omega-3s. Up to 70% better absorption than ethyl esters.<sup>1</sup> This means that the more natural form omega-3s there are in your bottle of fish oil, the greater chance they have to make it where they should—your cells.</p><p>The cell membrane is where omega-3s really have the chance to make a difference, influencing heart health, vision, brain development, and the wide-ranging functions of the immune system that benefit so many aspects of everyday health. Of course, poorly absorbed fish oil means fewer omega-3s in the bloodstream, fewer getting to cells, and limited benefits overall. You get the idea.</p><p><b>Natural Form = Value</b></p><p>All this adds up to one big advantage: value. Why spend money on fish oil that spoils quickly, and that doesn’t deliver the benefits you expect? The big picture sometimes gets lost when customers choose products solely on lowest price.</p><p>I’m happy to tell you that Nordic Naturals has always had the big picture in mind. From the very beginning we’ve produced our fish oils in their natural form. Every bottle contains at least 90% natural-form omega-3s, and they often reach up to 98%. It takes longer to make triglyceride-form products. And, it costs more. But at the end of the day, it’s the value of our products that matters most.</p><p><small><sup>1</sup><i>Dyerberg J, et al. <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/20638827\" target=\"_none\">Bioavailability of marine n-3 fatty acid formulations. Prostaglandins Leukot Essent Fatty Acids</a> 2010 Sep;83(3):137–141.</i></small></p><p><small>*These statements have not been evaluated by the Food and Drug Administration.These products are not intended to diagnose, treat, cure, or prevent any disease.</small></p>
        `,
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
        id: 1,
        category: "kultur",
        categoryText: "Kultur",
        author: "NORDIC NATURALS STAFF",
        postUrl: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/jonna-compressor.jpg",
        contentPreview: "If you happen to call Nordic Naturals to place an order or ask a product question, there’s a good chance you’ll find yourself chatting ...",
        content: `
          <p><i>If you happen to call Nordic Naturals to place an order or ask a product question, there’s a good chance you’ll find yourself chatting with the unforgettable Jonna Paiss. We asked Jonna to be the subject of our first employee spotlight, and she graciously accepted. Read our interview with Jonna here, and <a href=\"#embed-container\">watch her answer our parting question on video</a>.</i></p><p><b>Name:</b> Jonna Paiss<br /><b>Role:</b> Consumer Sales and Education Representative<br /><b>Years with Nordic Naturals:</b> 5</p><p><b>What do you do at Nordic Naturals, and what do you like best about your job?</b></p><p>I work in customer service, so I answer questions about our products all day long. I’ve always been interested in nutrition and biology, and I like helping people find the right supplement for them. I used to work in the healthcare industry, and for me working in the natural products industry is much more satisfying.</p><p>One reason I like talking about our products is because I have so much confidence in them. I try everything we make so I can get a firsthand experience with each product. I keep a spice rack in my bathroom filled with all my Nordic Naturals supplements.</p><p><b>What’s the strangest customer question you’ve ever received?</b></p><p>I certainly get some very specific questions from customers, everything from whether or not our products are kosher to what kinds of glue we use on our product labels. It’s part of the fun, you know, going and hunting down the answers to the more unusual questions.</p><p>I guess the strangest question I ever got was from a woman who called to ask about the tiny illustrated trolls on our Nordic Berries multivitamin label. She wanted to know if they were associated with the occult. I told her the trolls were common in Norwegian fairy tales, nothing more than a fanciful reference to Scandinavian folklore.</p><p><b>Where did you grow up?</b></p><p>I was born and raised in a small town in Denmark, and I immigrated to the US when I was in my twenties. I practically grew up in a library... I spent most of my teenage years with my head in a book, and I’m still a voracious reader today.</p><p><b>Since you’ve been here for 5 years, I gather you’ve been taking fish oil for a while. Any observations you’d like to share?</b></p><p>Probably the biggest thing I noticed when I first started working here was the high product quality. I’ve always trusted the science behind the nutrition, so I never questioned things I experienced in the past with other products, like fishy aftertaste or unpleasant burps. I just figured those things were to be tolerated, the way you tolerate other things that might be good for you—like onions.</p><p><b>What Nordic Naturals products do you take?</b></p><p>I currently take <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1746\" target=\"_none\">Omega Curcumin</a>, <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1414\" target=\"_none\">EPA</a> with concentrated <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1647\" target=\"_none\">GLA</a>, <a href=\"http://www.nordicnaturals.com/en/General_Public/Vitamin_D3_formulas/365\" target=\"_none\">vitamin D3</a>, and <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1699\" target=\"_none\">Nordic Flora Probiotic Daily</a>. Over the years I’ve tried a lot of different formulations, but in general I try to take 2000 milligrams EPA and DHA daily. In the winter especially, I take vitamin D3 regularly. And I supplement with other products, like Omega Curcumin and <a href=\"http://www.nordicnaturals.com/en/General_Public/Eye_Health/1231\" target=\"_none\">Omega Vision</a>, depending on whatever issue I may be trying to address. When I first tried our Nordic Flora probiotics, I was like, oh my God! Because I felt an immediate difference. (laughs)</p><p><b>What is something about you that few people know? Do you have a hidden talent?</b></p><p>I have nothing BUT hidden talents. All my talents are really hard to find! One advantage of talking to new people all day is that my jokes never get old. I try to be light about things, because I enjoy making people laugh.</p><p><b>I happen to know that you’re really good at crafting.</b></p><p>Yes, I do like to sew and knit and do crafty things. I’m really into making costumes right now. And a lot of people don’t know this, but I’m actually a good cook. I developed some pretty good cooking skills in college—whisking and stirring, those are my hidden talents. And talking and enjoying good food with friends.</p><p><b>We talk a lot about health here at Nordic Naturals. What does “living healthfully” mean to you?</b></p><p>To me “living healthfully” is a state of mind. It’s about striving for harmony and balance in your life. We have a saying in Denmark: “Everything in moderation, including moderation.” I think it’s important to pick your battles in life, and focus on what gives you enjoyment. Otherwise it’s really easy to get frustrated and feel powerless. I guess you could say I try not to sweat the small stuff.<p><p><b>Video Question: You’re from Denmark. Explain “hygge” to us.</b><div id=\"embed-container\"><iframe src=\"https://player.vimeo.com/video/212996319\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></p>
        `,
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
