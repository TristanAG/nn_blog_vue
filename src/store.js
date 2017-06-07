import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    postRefs: [
      {
        title: "Inside Nordic Naturals: Meet Derek, International Music Maker",
        category: "kultur",
        url: "inside-nordic-naturals-meet-derek-international-music-maker",
        img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/derek.png"
      },
      {
        title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        category: "kultur",
        url: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/jonna-compressor.jpg"
      }
    ],
    posts: [
      {
        id: 6,
        category: "kultur",
        categoryText: "KULTUR",
        author: "Nordic Naturals Staff",
        postUrl: "inside-nordic-naturals-meet-derek-international-music-maker",
        title: "Inside Nordic Naturals: Meet Derek, International Music Maker",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/derek.png",
        contentPreview: `
          If you buy Nordic Naturals products from one of our overseas distributors, you might have indirectly crossed paths with our very own Derek Bodkin. Read our interview with Derek here, and watch him whistling on stage at the 2016 Redwood Ramble music festival.
        `,
        content: `
        <p><i>If you buy Nordic Naturals products from one of our overseas distributors, you might have indirectly crossed paths with our very own Derek Bodkin. Read our interview with Derek here, and <a href="#vid">watch him whistling on stage at the 2016 Redwood Ramble music festival</a>.</i></p>
      <p><b>Name:</b> Derek Bodkin<br>
<b>Role:</b> International Sales Account Coordinator<br>
<b>Years with Nordic Naturals:</b> 5.5</p>

<p>
<b>What do you do at Nordic Naturals, and what do you like best about your job?</b>
I work with our distributors to get Nordic Naturals products overseas. This is not my first role at Nordic Naturals, and it’s really a different mindset from what I was doing before. What I like about it is seeing how things operate on a global scale, and also seeing things from a different cultural perspective. It’s a job that has strengthened my desire to see more of the world.
</p>
<p>
<b>Where did you grow up, and how has that place influenced you?</b>
I was born in Boston, but I grew up mostly in southern California. Being a musician and living in close proximity to L.A., I eventually found myself in Hollywood, doing post-production sound editing and music editing. I also did some work as a voice-over actor. But I wasn’t really playing music, which has always been my passion. It was when I moved to Santa Cruz that I started playing dive bars and then that evolved into bigger shows that grew into touring on my days off.
</p>
<p>
<b>What personal accomplishment are you most proud of?</b>
Recording and producing an entire album. I played most of the instruments myself, wrote most of the songs, and paid my other musicians for their time and their talents. Other friends offered to help me with it here and there, but it was really important to me to do it on my own. The album is called <a href="http://www.cdbaby.com/cd/derekbodkin" target="_none">“True Story.”</a>
</p>
<p>
<b>What is something about you that few people know? Do you have any hidden talents?</b>
Most people here know that I’m a musician, and that I’m in a band and I have this whole other life outside of work.  But not a lot of people know that I’m a <a href="#vid">professional whistler</a> (laughs).  And that I’m a multi-instrumentalist.  I have a degree in music composition and conducting, with my major instrument being percussion. I’ve played banjo, guitar, harmonica, and piano since I was a child.
</p>
<p>
<b>What Nordic Naturals products do you take? Any observations you’d like to share?</b>
I’ve never been a supplements guy, mostly because I can never remember to take them. But I always remember to take my <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1428" target="_none">Ultimate Omega</a>, everyday. I think it keeps me from feeling dried out on the inside. I also take <a href="http://www.nordicnaturals.com/en/General_Public/Vitamin_D3_formulas/365" target="_none">vitamin D</a> on my doctor’s orders.
</p>
<p>
<b>What does “living healthfully” mean to you?</b>
Finding balance. It’s hard not to take work home with you, but if you can do that, great. I also think it’s important to govern yourself with integrity. Stay away from gossip. Be honest, even when it’s uncomfortable.
</p>
<p>
<div class="video-container" id="vid"><iframe width="560" height="315" src="https://www.youtube.com/embed/A85AqiJQdC4" frameborder="0" allowfullscreen></iframe></div>
</p>
        `,
        ref1title: "Dear Cosmo: Why You Really Should Take Your Fish Oil",
        ref1category: "big-picture",
        ref1url: "dear-cosmo-why-you-really-should-take-your-fish-oil",
        ref1img: "http://www.nordicnaturals.com/dev/blog-images/cosmo-post-main-image.jpg",
        ref2title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        ref2category: "kultur",
        ref2url: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/jonna-compressor.jpg"
      },
      {
        id: 5,
        category: "home-life",
        categoryText: "HOME LIFE",
        author: "Claudia Burgin",
        postUrl: "getting-little-ones-to-eat-well-8-great-tips",
        title: "Getting Little Ones to Eat Well: 8 Great Tips",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/little-ones-main-image.jpg",
        contentPreview: `
          Few things can be more frustrating than getting a child to eat what we parents consider healthy foods. Years of mealtime anxiety motivated me to come up with a few creative strategies to coax my picky eater to broaden his eating choices. Here’s what worked for me:
        `,
        content: `
          <p>Few things can be more frustrating than getting a child to eat what we parents consider healthy foods. My biggest “mommy fail” moments seem to revolve around the dinner table when I see my 3-year-old refuse to eat anything that doesn’t involve pasta, bread, or rice.</p><p>Yet as our pediatrician often reminds me, it’s actually <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3474391/" target="_none">developmentally appropriate for preschoolers to refuse foods</a> we give them. And it’s wise to look at what kids eat over the course of a week rather than a single day before worrying about their eating habits.</p><p>That said, the food struggles at our house motivated me to come up with a few good tricks for tempting my picky eater to try new foods every now and then. Here’s what has (mostly) worked for me:</p><p><b>1. Have your child help you cook.</b> Stirring, measuring, cracking eggs, sprinkling spices—kids are curious creatures, and are often happy to get involved in meal prep. I’ve found that my preschooler is a whole lot more willing to eat something if he feels he’s had a hand in making it.</p><p><b>2. Start the meal with a healthy snack.</b> As a first course, I often give my child a whole baby carrot (I buy them with the tops still on so they look more interesting). I peel it and hand it to him while he’s waiting for me to prep the rest of his meal. Nine times out of ten, he eats it. He’s also been known to nosh on green (pitted) olives and cucumber wedges pre-dinnertime.</p><p><b>3. Disguise your protein.</b> Surprisingly, my child turns his nose up at popular kid favorites like meatballs and chicken strips. But I’ve mixed canned salmon in with mac ‘n cheese with some success. And I’ve learned to love Sloppy Joes (my son loves the soft texture), because it’s a good way to get him to eat grass-fed beef, along with some hidden grated zucchini.</p><p><b>3. Offer rejects regularly.</b> Apparently, kids need to be exposed to new foods repeatedly before they will decide to like them. Some experts say it takes 10 – 15 “tastes” before a kid will accept a new food into his repertoire. The key seems to be not to react if the food you serve gets rejected. Still working on this one…</p><div class="embedded-image left" style="width: 70%;"><img src="http://www.nordicnaturals.com/dev/blog-assets/post-images/little-ones-content-image.jpg" ></div><p><b>5. Get creative with it.</b> Kids love food that’s fun to eat. Whether it’s arranging food in colorful rainbows, or dressing up veggies to look like faces, your creative efforts might just pay off. Also, many moms have had success serving proteins and vegetables with healthy dips like hummus, pesto, or marinara sauce. This hasn’t yet worked at my house (unless you count ketchup as a healthy dip), but it hasn’t deterred me from trying.</p><p><b>6. Use peer pressure.</b> It’s true, kids are more likely to eat foods they see other kids eating and enjoying. If you know a mom whose kid loves a wide range of foods, invite that family over to dinner. Chances are your child will pay close attention to what the other kids are eating.</p><p><b>7. Grow with them.</b> Even if you don’t have a yard, you can grow cherry tomatoes, lettuces, and other edibles in a pot. Seeing food grow can help kids make the connection between the food we buy in the grocery store, and where that food actually comes from. And hopefully, seeing some of Mother Nature’s magic will be captivating enough to tempt your child to try a few new veggies.</p><p><b>8. Make supplements part of your daily routine.</b> You might be rolling your eyes at this point (here comes the pitch!) at this point. But honestly, I feel much better giving my kid a <a href="http://www.nordicnaturals.com/en/Products/Product_Details/98/?ProdID=1411" target="_none">good daily multivitamin</a> and a dose of <a href="http://www.nordicnaturals.com/en/General_Public/Children's_Omegas/473" target="_none">children’s omega-3s</a> in the morning to fill in the nutritional gaps. We also on occasion add a <a href="https://www.nordicnaturals.com/en/General_Public/Children's_Gummies/475" target="_none">vitamin D or vitamin C gummy</a>, depending on the time of year and whether or not I think he may be coming down with a cold, and a <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1747" target="_none">kid’s probiotic</a>. It’s easy to give him these as he’s eating breakfast, and now he actually asks for his vitamins every morning. A good lifelong habit in the making, I say.</p>
        `,
        ref1title: "Dear Cosmo: Why You Really Should Take Your Fish Oil",
        ref1category: "big-picture",
        ref1url: "dear-cosmo-why-you-really-should-take-your-fish-oil",
        ref1img: "http://www.nordicnaturals.com/dev/blog-images/cosmo-post-main-image.jpg",
        ref2title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        ref2category: "kultur",
        ref2url: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/jonna-compressor.jpg"
      },
      {
        id: 4,
        category: "big-picture",
        categoryText: "BIG PICTURE",
        author: "TERRA LYNN",
        postUrl: "dear-cosmo-why-you-really-should-take-your-fish-oil",
        title: "Dear Cosmo: Why You Really Should Take Your Fish Oil",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-images/cosmo-post-main-image.jpg",
        contentPreview: `
          When <i>Cosmopolitan</i> magazine published a story advising their readers to skip their omega-3 supplements, we felt we should share what we know about fish oil and its well-established safety and health benefits.
        `,
        content: `
          <p><i>Cosmopolitan</i> magazine recently published an article advising their readers which vitamins and supplements they should keep taking, and which ones they could probably skip.</p><div class=\"embedded-image right\"><img src=\"http://www.nordicnaturals.com/dev/blog-images/cosmo-cover-terra-post2.jpg\" ></div><p>While we were thrilled to see <i>Cosmo</i> raising awareness about the importance of nutritional supplements, we were disheartened to see that omega-3s and fish oil made their “definitely stop taking” list. We of course wanted to respond, and contribute some useful information about fish oil and its well-established safety and health benefits.</p><p>Here’s our response to each of the points the <i>Cosmo</i> <a href=\"http://www.cosmopolitan.com/health-fitness/a8349732/do-you-really-need-to-take-vitamins/\" target="_none">article</a> makes:</p><p><b>1. Omega-3 fish oil supplements “act as potentially dangerous blood thinners.”</b></p><p>First, it’s important to note that omega-3 fish oil will not prevent your blood from coagulating. Omega-3 fish oil has been shown to help inhibit blood platelet clumping, blood vessel constriction, and the production of blood-clotting proteins—all of which can be understood as blood-thinning actions. On the other hand, when we consider that a diet rich in processed foods promotes exactly the opposite effects—i.e., increased blood platelet clumping, constriction of blood vessels, and blood-clotting proteins—we can see that the actions of omega-3 fish oil are more accurately understood as restoring a healthy balance between blood-thinning and blood-clotting.</p><p>So does this make fish oil supplements potentially dangerous? The answer is no. For the overwhelming majority of people, the blood-thinning actions of omega-3 fish oil should be seen as potentially beneficial rather than potentially dangerous. If you currently take blood-thinning medications or if you anticipate surgery, we recommend consulting with your healthcare provider before taking any supplement.</p><p><b>2. Most omega-3 fish oil supplements “are high in vitamins A and D that you can’t eliminate easily, so they could build up and make you sick.”</b></p><p>Are omega-3 fish oil supplements high in vitamins A and D? The answer depends on what type of omega-3 fish oil you are talking about: Fish oil is extracted from the whole body of the fish and contains only trace amounts of vitamins A and D, which are generally lost during the purification process. For this reason, some manufacturers will add vitamins A and D to their fish oil products. So it’s always important to read supplement labels. Arctic cod liver oil, which is extracted from the livers of fish, does contain small amounts of naturally occurring vitamins A and D, even after purification.</p><p>We’ve always used only 100% Arctic cod livers in our cod liver oil products. Our <a href="https://www.nordicnaturals.com/en/General_Public/Arctic_Cod_Liver_Oil/378">Arctic Cod Liver Oils</a> have low, healthy levels of fat-soluble vitamin A typically averaging 650–1,500 IU of vitamin A per serving, which falls in the low range compared to other products. (<a href="https://www.nap.edu/read/10026/chapter/1" target="_none">The recommended daily allowance of vitamin A for adults</a> as established by the US Institute of Medicine of the National Academy of Science is 3,000 IU for men and 2,300 IU for women.)</p><p>When it comes to vitamin D, neither fish oil nor cod liver oil supplements naturally contain high levels. The real concern with vitamin D is getting enough. There’s an emerging consensus among the medical and scientific community that <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-d/#vitamin-d-deficiency-a-global-concern" target="_none">vitamin D deficiency</a> is an under-recognized epidemic. (It’s why we offer many of our <a href="https://www.nordicnaturals.com/en/General_Public/Vitamin_D3_formulas/365" target="none">products</a> with the option of added vitamin D.)</p><p>The American Academy of Pediatrics recently <a href="https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Vitamin-D-On-the-Double.aspx" target="_none">doubled its vitamin D recommendations</a> for infants, children, and adolescents, and a whole new generation of vitamin D research continues to show just how critical vitamin D is to every aspect of health. We use vitamin D3 (cholecalciferol) in our products because it’s the most easily absorbed form of vitamin D, and the form our bodies naturally make from sunlight.</p><p><b>3. “Eat fish and use olive oil instead” of taking omega-3 fish oil supplements.</b></p><p>While we wholeheartedly support <i>Cosmo’s</i> advice to get our nutrients from fresh foods instead of supplements whenever possible, we also recognize that often it simply isn’t possible to consume enough of the health-promoting nutrients we need from food alone. Omega-3s are a good example. To get 1,000 mg of the beneficial omega-3s EPA and DHA found in fish oil, you’d have to eat 2/3 of a can of sardines—every day! We don’t know about you, but two soft gels a day of our concentrated <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1428" target="_none">Ultimate Omega</a><sup>®</sup> omega-3 fish oil sure does seem a lot easier to swallow.</p>
        `,
        ref1title: "Why Natural-Form Fish Oils are Better for Your Body—and Your Wallet",
        ref1category: "all-about-science",
        ref1url: "why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet",
        ref1img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/capsules-and-fish.jpg",
        ref2title: "Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans",
        ref2category: "big-picture",
        ref2url: "refuse-reduce-reuse-10-things-to-clean-up-our-oceans",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/refuse-reduce-reuse-compressor.jpg"
      },
      {
        id: 3,
        category: "big-picture",
        categoryText: "BIG PICTURE",
        author: "CLAUDIA BURGIN",
        postUrl: "refuse-reduce-reuse-10-things-to-clean-up-our-oceans",
        title: "Refuse, Reduce, Reuse: 10 Things We Can All Do to Clean Up Our Oceans",
        imageUrl: "http://www.nordicnaturals.com/dev/blog-assets/post-images/refuse-reduce-reuse-compressor.jpg",
        contentPreview: "Ocean \"smog\" created from the disposable plastics we all throw away has become a huge concern. Right now, there are some 270,000 tons of trash swirling around the world's oceans in giant, tangled heaps.",
        content: `
          <p>Ocean \"smog\" created from the disposable plastics we all throw away has become a huge concern. Right now, there are some 270,000 tons of trash swirling around the world's oceans in giant, tangled heaps. Ocean waves break these plastics down into smaller and smaller pieces, endangering the surrounding marine life as fish and birds either digest the plastic debris, mistaking it for food, or become entangled in it. Some of the plastic toxins they digest even make it up the food chain into the fish many of us eat. That’s right—we’re eating the plastic trash, too. One study found that <a href=\"http://www.ecowatch.com/25-of-fish-sold-at-markets-contain-plastic-or-man-made-debris-1882105614.html\" target=\"_none\">one-quarter of all fish sold in California markets had microplastics and fibers in their guts</a>. </p><p> Cleaning up the trash with some sort of floating, supersized garbage truck may sound like an obvious fix, but these vast islands of plastic trash—water bottles, straws, caps, food wrappers, bags, chunks of old, unrecognizable gadgets and toys—can’t just be collected and taken away. The disintegrating plastics permeate our oceans just like smog permeates our air. We can’t really filter it out. We have to stop the ocean smog at its source—us.</p><p>Here are 10 things we can all do today to help clean up our oceans—courtesy of <a href=\"http://www.5gyres.org\" target=\"_none\">The 5 Gyres Institute</a>, a non-profit dedicated to empowering all of us to take action in response to this unhealthy scenario. We at Nordic Naturals are inspired, and proud to sponsor and support <a href=\"https://www.5gyres.org/\" target=\"_none\">5 Gyres</a> in spreading the word.</p><h5>How Can We Help?</h5><p><b>1.</b> Swear off plastic bags. Stash some reusable bags in your car, or carry a backpack or tote bag with you.</p><p><b>2.</b> Carry a reusable water bottle. Don’t buy bottled water—<a href=\"http://www.treehugger.com/clean-water/save-1400-a-year-by-drinking-tap-water.html\" target=\"_none\">you can save $1400 a year by just drinking tap.</a></p><p><b>3.</b> Say no to straws, or only use paper straws. When you order a drink, say “No straw, please.”</p><p><b>4.</b> Use non-plastic utensils and bring your own mug to the coffee shop. Get in the habit of carrying these with you when you’re out and about.</p><p><b>5.</b> <a href=\"https://www.5gyres.org/styrofoam/\" target=\"_none\">Avoid all things Styrofoam.</a> The chemicals used to create Styrofoam cups and food containers are toxic and possibly carcinogenic. Bad for you, bad for the oceans.</p><p><b>6.</b> Buy items with minimal packaging, and buy in bulk whenever possible. Choose non-plastic beverage containers.</p><p><b>7.</b> Minimize your electronic footprint by repairing, upgrading, or recycling old phones, TVs, computers, and peripherals.</p><div class=\"embedded-image left\"><img src=\"http://www.nordicnaturals.com/dev/blog-images/5Gyres3.jpeg\"/><span style=\"padding-left: 28px; padding-right: 28px; display: inline-block\">Photo by Ryan Martin for 5 Gyres</span></div><p><b>8.</b> Buy clothes made from natural materials. Synthetic clothing items shed microfibers every time they’re washed, and these fibers wind up in the ocean.</p><p><b>9.</b> Don’t buy face cleansers and scrubs that contain microbeads (they’ll be phased out soon anyway, thanks to the <a href=\"https://www.fda.gov/Cosmetics/GuidanceRegulation/LawsRegulations/ucm531849.htm\" target=\"_none\">Microbead-Free Waters Act</a>).</p><p><b>10.</b> Pledge to go <a href=\"https://www.5gyres.org/newsletter-sign-up\" target=\"_none\">#plasticfree</a> for a day, a week, a year—or forever. Start by refusing the top five sources of single use plastic: plastic bags, water bottles, to-go containers, takeaway cups, and straws.</p><p>Cleaning up our oceans isn’t going to happen overnight. But we can all make a difference—one piece of plastic trash at a time.</p>
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
        categoryText: "ALL ABOUT SCIENCE",
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
        categoryText: "KULTUR",
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
