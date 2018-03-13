import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [
      {
        id: 39,
        category: "all-about-science",
        categoryText: "ALL ABOUT SCIENCE",
        author: "TERRA LYNN",
        postUrl: "five-myths-and-facts-about-vitamin-d",
        title: "Five Myths and Facts About Vitamin D",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1520874391/web/blog-assets/vitamin-d-myth.jpg",
        contentPreview: "The full truth about vitamin D may surprise you. Read up on new guidelines and common misconceptions, and get ready to share—and act on—your newfound knowledge.",
        content: `
        <p>What’s known to be true about vitamin D has changed a lot in recent years. An impressive body of research over the past couple of decades has shed new light on the roles vitamin D plays in human health and wellness. Here are some common misconceptions and important facts to know about a vital nutrient that virtually every cell in your body needs.
</p>
<h2>MYTH: You can get enough vitamin D from food.</h2>
      <p>This is simply not true, unfortunately. Only a few foods contain vitamin D, and those only contain very small amounts, making it all but impossible to get enough vitamin D from food alone. Dietary sources of vitamin D include oily/fatty fish (salmon, tuna, herring, sardines, and mackerel), egg yolks, beef liver, mushrooms, and foods fortified with vitamin D, such as milk, orange juice, cereals, and infant formula. Even these foods generally contain only small amounts of vitamin D3—<a href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/" target="_none">less than 150 IU</a> per serving. To get enough vitamin D, you need to consistently expose your bare skin to sunlight, or take vitamin D3 supplements.</p>
      <h2>MYTH: If you live where it’s sunny, you’re probably getting enough vitamin D.</h2>
      <p>Our bodies make vitamin D when we expose our bare skin to sunlight. But how much vitamin D we can make depends on a multitude of factors: time of day, seasonal time of year, your geographic location, altitude and cloud cover (or smog), your skin’s pigmentation, your age, and whether or not you wear sunscreen. Even if you do live in a sunny place, it’s possible, and even likely, that you’re still not absorbing enough vitamin D from the sun for optimal health. </p>
      <p>During the winter months, the UVB portion of the sun’s rays is low-to-nonexistent in northern latitudes—not enough to produce vitamin D. The further north you live from the equator, the less UVB there is available. North of Atlanta, there isn’t enough UVB to produce vitamin D from about November to February; north of New York City, the same is true from about October through March.</p>
      <p>How can you know if there’s enough UVB available from sunlight for your body to make vitamin D? There’s an easy and fun way. Just check the length of your shadow, <a href="https://www.vitamindcouncil.org/about-vitamin-d/how-do-i-get-the-vitamin-d-my-body-needs/" target="_none">recommends</a> the Vitamin D Council. If your shadow is longer than you are tall, then you aren’t able to make enough vitamin D (due to the oblique angle of the sun), and you should consider boosting your vitamin D supply with a <a href="https://nordicnaturals.com/en/consumers/vitamin-d3-formulas/365" target="_none">daily D3 supplement</a>. There are also smartphone <a href="http://dminder.ontometrics.com/" target="_none">apps</a> you can download that calculate how much vitamin D you’re able to get in your location.</p>
      <h2>FACT: Vitamin D is actually a hormone, not a vitamin.</h2>
      <p>One of the things that makes vitamin D unique compared to other vitamins is that it’s not a vitamin at all! Often termed “activated vitamin D” or <a href="http://www.vivo.colostate.edu/hbooks/pathphys/endocrine/otherendo/vitamind.html" target="_none">calcitriol</a>, vitamin D <a href="https://www.ncbi.nlm.nih.gov/pubmed/18689389" target="_none">behaves like a hormone</a> in our bodies, carrying out essential biological functions through endocrine, paracrine, and intracrine mechanisms. This helps explain why and how vitamin D regulates so many more physiological functions than previously thought. Vitamin D receptors have been found in nearly every tissue and cell in the body. In recent decades, this has led to an impressive and growing body of research into vitamin D’s previously unknown roles in optimizing a wide range of bodily processes.</p>
      <h2>FACT: Vitamin D does more than just help build strong bones.</h2>
      <p>Vitamin D has long been known for its role in bone health, helping to regulate the way our bodies absorb calcium and phosphorus.* But the more recent discovery that nearly all tissues in the human body are responsive to vitamin D has led to new areas of research investigating other roles that this vital nutrient plays—many more roles than were known even just a couple of decades ago. These <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-d/#vitamin-d-and-immune-function" target="_none">promising areas of research</a> include vitamin D’s roles in muscular strength, cardiovascular health, cellular health, longevity, immune health and function, and immune-related health issues.* <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3972415/" target="_none">One recent review</a> of existing studies found that vitamin D has been explored in relation to 137 different health outcomes, spanning a broad range of bodily systems. This new generation of research suggests that vitamin D is much more than a “bone health” nutrient, and that sufficient vitamin D is required for achieving optimal human health overall.* </p>
      <h2>FACT: The FDA recently doubled the percent daily values for vitamin D.</h2>
      <p>The blood test that measures your vitamin D status is called a 25(OH)D serum test. In light of more recent vitamin D research, there is a <a href="http://journals.sagepub.com/doi/abs/10.1177/1533210110392952" target="_none">growing consensus</a> that the optimal range for 25(OH)D levels is above 75–80 nmol/L for most people. </p>
      <p>Even as we learn more about vitamin D’s roles in nearly all aspects of health, however, data suggests that most of us don’t get enough vitamin D. National Health and Nutrition Examination Survey (NHANES) data <a href="https://www.ncbi.nlm.nih.gov/pubmed/19307527" target="_none">shows</a> that the number of persons with levels below 75 nmol/L nearly doubled from 1994 to 2004. Almost 80% of the 2004 survey population had levels below 75 nmol/L, while close to 75% had levels below 50 nmol/L.</p>
      <h2>Recommended Daily Intakes for Vitamin D</h2>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1520874388/web/blog-assets/vitamin-d-graphic.jpg">
      <center><p><small>Sources: <a href="https://www.vitamindcouncil.org/about-vitamin-d/how-do-i-get-the-vitamin-d-my-body-needs/" target="_none">Vitamin D Council</a>, <a href="https://www.gpo.gov/fdsys/pkg/FR-2016-05-27/pdf/2016-11867.pdf" target="_none">FDA 2016 Ruling</a>, <a href="http://press.endocrine.org/doi/10.1210/jc.2011-0385" target="_none">Endocrine Society</a></small></p></center>
      <p>To help people get more vitamin D, health organizations continue to raise their recommended intakes. Back in 2010, the U.S. Food and Drug Administration (FDA) doubled the daily values for vitamin D, which are based largely (but not exclusively) on <a href="http://www.nationalacademies.org/hmd/Home/Global/News%20Announcements/DRI" target="_none">daily reference intakes</a> from the Institute of Medicine of the National Academies. In 2016 the FDA <a href="https://www.gpo.gov/fdsys/pkg/FR-2016-05-27/pdf/2016-11867.pdf" target="_none">doubled</a> the daily values for vitamin D again—from 400 IU (10 mcg) to 800 IU (20 mcg) for adults and children over 4.
      <p>While these updates are a <a href="https://www.consumerlab.com/news/Updated-Daily-Values-Vitamins-Minerals/7_27_2016/" target="_none">big improvement</a>, many researchers and experts <a href="https://www.sciencedaily.com/releases/2015/03/150317122458.htm" target="_none">argue</a> that the current recommendations for vitamin D intake may still be low given that vitamin D deficiency is widespread across all age groups, regions, and seasons.  This is why it’s important to test your vitamin D levels to get an accurate, personal assessment, even if you don’t think you’re deficient.</p>
      <p>Adding a quality vitamin D3 supplement to your daily routine is a simple way to help ensure you’re getting enough of this all-important nutrient, rain or shine.
</p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1520874388/web/blog-assets/vitamin-d-products.jpg">
      <p><small><i>* These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</i></small></p>
        `
      },
      {
        id: 38,
        category: "home-life",
        categoryText: "HOME LIFE",
        author: "CLAUDIA BURGIN",
        postUrl: "how-to-read-a-supplement-label",
        title: "How to Read a Supplement Label",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1520013372/web/blog-assets/sup-label.jpg",
        contentPreview: "Reading the fine print on the back of a supplement label—and understanding it—can feel like a task that you’d rather skip. Don’t. Know what to look for instead.",
        content: `
        <p>You’re in the supplements aisle of your local natural foods store, and you’re shopping for a specific nutrient. When you find it, chances are you’ll encounter more than a few choices. So which supplement should you buy? Knowing what to look for on the label can help you make a quick, confusion-free decision.</p>
      <h2>Check the Facts</h2>
      <p>The Supplement Facts panel on the back of every supplement bottle or box looks a lot like the Nutrition Facts panel you see on the back of packaged food items. That’s because the FDA, which regulates the food industry, technically considers supplements to be food. </p>
      <p>Reading the Supplement Facts panel—and understanding it—can feel like a task that you’d rather skip. Don’t. The Supplement Facts panel contains valuable information about what you’re actually buying, and how much. Here’s a quick overview of the facts you’ll want to check before you buy.</p>
      <ul style="list-style-type: none">
        <li>
          <p><b>1. Serving size</b>—This is the number of soft gels, gummies, tablets, or teaspoons the manufacturer recommends you take to reach the nutrients levels stated on the label. Unless otherwise noted, the serving size is for adults and children ages 4 and up.</p>
          <p>Back when I was shopping for prenatal vitamins, I made the mistake of buying a supplement that had a serving size of four capsules—more than I wanted to take daily. The lesson? Check this first to make sure you’re okay with the serving size.</p>
        </li>
        <li>
          <p><b>2. Servings per container</b>—This is how much of a daily supply you’re actually buying. If you’re comparing prices, make sure you’re comparing supplements with the same number of servings per container to get an accurate read on how much each supplement costs. Sounds obvious, but I can’t tell you how many times I’ve reached for a less expensive brand only to find out that it contains fewer servings per container than another brand with a higher price. (Note: The FDA does not require manufacturers to include Servings per Container on the supplement facts panel, so you won't always find this information on every supplement you buy.)</p>
        </li>
        <li>
          <p><b>3. Amount per serving</b>—Here is where you’ll want to check the actual nutrient levels a particular supplement contains. If you’re shopping for a children’s multivitamin, for example, you’ll want to compare nutrient levels for each brand you’re considering to get the most value for your purchase.</p>
          <p>Nutrient levels are most commonly measured in units of weight: grams (g), milligrams (mg), and micrograms (mcg). Fat-soluble vitamins such as A, D, and E have traditionally been measured in international units (IU), which is a measurement of <a href="https://dietarysupplementdatabase.usda.nih.gov/ingredient_calculator/help.php#q9" target="_none">biologically active substances</a> that produce a particular effect. However, the FDA recently mandated that supplement manufacturers phase out the IU measurements and use milligrams (mg) and micrograms (mcg) instead. This <a href="https://www.fda.gov/downloads/Food/LabelingNutrition/UCM511646.pdf" target="_none">change</a>, which goes into effect beginning this year, should cut down on some of the confusion around these nutrient levels, and make label reading a little easier for us consumers.</p>
        </li>
        <li>
          <p><b>4. % Daily value</b>—These percentages reflect how much a particular nutrient contributes to your daily nutritional needs, based on a 2,000 calorie-per-day diet. The percentages, established by the Institute of Medicine of the National Academy of Sciences, are called <a href="https://ods.od.nih.gov/Health_Information/Dietary_Reference_Intakes.aspx" target="_none">Dietary Reference Intakes (DRIs)</a>. These DRIs are updated periodically based on scientific studies, and were most recently updated in 2015. An asterisk or dagger in place of a percentage means that no daily value has been assigned for that particular nutrient.</p>
          <p>If you’re already taking other supplements daily, you’ll want to read these values carefully to make sure you’re not getting too much of a good thing for some nutrients, or not enough of others. In other words, some math here might be required. When you go shopping for supplements to add to your daily routine, bring along a list of what you already take so you have this information at the ready.</p>
        </li>

        <li>
          <p><b>5. Ingredients</b>—Ingredients beyond those nutrients profiled in the supplement facts panel are listed at the bottom, in descending order by weight. Here you’ll find ingredients used to make the capsules that contain the nutrients, as well as the ingredients used to preserve your supplement’s contents. It’s an important list to read, especially if you know you have allergies or food intolerances.</p>
        </li>
        <li>
          <p><b>6. Expiration date & lot number</b>—While not required by FDA, reputable manufacturers will include this information on the label so that you know exactly when your supplement was made, down to the specific manufacturing lot or batch. This information is particularly useful if you’re concerned about the quality and freshness of the ingredients used to create your supplement.</p>
        </li>
      </ul>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1520028448/web/blog-assets/SF-view_blog-image_v2.png">
      <h2>Compare Notes</h2>
      <p>So, back to the supplement aisle at your natural foods store: How do you choose the supplement that’s right for you? </p>
      <p>Start with what you DO want. Look for the nutrient levels in the amount per serving. If you’re buying fish oil, for example, you’ll want to look closely at the levels of omega-3s EPA and DHA in each serving. Amounts can vary greatly, depending on whether you’re buying a <a a href="https://www.nordicnaturals.com/en/consumers/omega-3-concentrates/361" target="_none">concentrated</a> or <a href="https://www.nordicnaturals.com/en/consumers/omega-3-non-concentrates/362" target="_none">non-concentrated</a> fish oil, or the size of the soft gel. Think about your health goals and what level of nutrient support is best for you.</p>
      <p>Next, look for what you DON’T want. Read the ingredients list at the bottom of the supplement facts panel, paying close attention to common allergens such as milk, soy, eggs, or gluten. You may also want to look for mentions of any sweeteners, artificial colors, flavors, or preservatives. </p>
      <p>Then, take a look at serving size (usually 1–2), and also the size of the actual soft gel or capsule if swallowing larger-size capsules is an issue for you. Make a note of taste and anything else that might affect how easy it is for you to take your supplements regularly.</p>
      <p>Don’t forget to check the expiration date to be sure what you’re buying has plenty of shelf life. And finally, make sure you’re buying from a reputable brand. One that makes information readily available to you online about where the ingredients in its supplements come from, and how fresh and free of contaminants those ingredients are. (Nordic Naturals offers a free <a href="https://www.nordicnaturals.com/cofa/" target="_none">certificate of analysis</a>, which details the results of third-party testing for every product sold.) </p>
      <p>After all, you’re buying supplements to support your health. Why wouldn’t you want to know exactly what you’re putting in your body?</p>
        `
      },
      {
        id: 37,
        category: "the-nordic-way",
        categoryText: "THE NORDIC WAY",
        author: "NORDIC NATURALS STAFF",
        postUrl: "inside-nordic-naturals-meet-oscar-virtual-bouncer-and-all-around-fix-it-guy",
        title: "Inside Nordic Naturals: Meet Oscar, Virtual Bouncer and All-Around Fix-IT Guy",
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1519664358/web/blog-assets/oscar-new.jpg',
        contentPreview: `One of the first people you meet as a new employee at Nordic Naturals is Oscar. He’ll school you on safe computing, set you up with your new gear, and entertain you with stories from the company’s early days.`,
        content: `
        <p>
        <b>Name:</b> Oscar Alaniz<br/>
        <b>Role:</b> IT Coordinator<br/>
        <b>Years with Nordic Naturals:</b> 18
      </p>
      <h2>What do you do at Nordic Naturals, and what do you like best about your job?</h2>
      <p>I’m one of three IT technicians at Nordic Naturals. My role is technical support for the 200 or so employees we have here. I’m a problem solver. What I like best about my job is figuring out the quickest, easiest way to solve a technical problem someone is experiencing. I also spend a lot of time making sure our network doesn’t get compromised. I’m like the bouncer at our virtual front door, always thinking about security.</p>
      <h2>Where did you grow up, and how has that place influenced you?</h2>
      <p>I grew up right here in Watsonville. Born and raised. When I was younger I wanted to live in San Francisco for a while, but I quickly realized how expensive that would be. Watsonville just seemed like an all-around, laid-back, good place to live. Plus, all my family is here. And you can’t beat the weather.</p>
      <h2>What personal accomplishment are you most proud of?</h2>
      <p>I started out here in customer service. I ran our early warehouse. And then I pretty much taught myself IT support. I had always been interested in computers, I bought my first computer with my own money when I was 17. When the need came up here, I was fortunate enough to train with a couple of really great IT people, and the rest I learned myself. I’m getting my IT certification now, years after I’ve been doing the job. So I guess I see teaching myself without any formal job training as an accomplishment.</p>
      <h2>What is something about you that few people know? Do you have any hidden talents? </h2>
      <p>Two things. First, not many people know I volunteer with my daughter’s elementary school. I help them with a lot of their online communications needed for fundraising. Before doing this, which started out as a dare from my wife, I just assumed that being a public school they would have enough money. But the reality is that they are severely underfunded. They have to do fundraising just to keep up with basic school maintenance. Second, I collect comic book memorabilia. Superheros, die cast metal transformers from the 1980s, mini dioramas, and constructor sets. I was a kid in the ’80s, and comics and cartoons were my life. To me it’s a hobby that connects me back to my childhood.</p>
      <img src='http://res.cloudinary.com/nordic-naturals/image/upload/v1519664358/web/blog-assets/oscar-toys.jpg'/>
      <h2>What Nordic Naturals products do you take? Any observations you’d like to share?</h2>
      <p>I take <a href="https://www.nordicnaturals.com/en/consumers/ultimate-omega/514/?ProdID=1428" target="_none">Ultimate Omega</a> and <a href="https://www.nordicnaturals.com/en/consumers/epa/514/?ProdID=1414" target="_none">EPA</a> for overall health benefits. My wife also takes Ultimate Omega, and my daughter takes the <a href="https://www.nordicnaturals.com/en/consumers/nordic-berries/514/?ProdID=1759" target="_none">Nordic Berries</a> multivitamins and the <a href="https://www.nordicnaturals.com/en/consumers/nordic-omega-3-gummy-fish/514/?ProdID=1520" target="_none">Nordic Omega-3 Gummy Fish</a>. I think it keeps us all healthier in general.</p>
      <h2>What does living “healthfully” mean to you?</h2>
      <p>Having hobbies outside of work. I see my hobbies as a healthy distraction. Thinking about comics and action figures mellows me out. It’s a good stress reliever. Too many people don’t know how to turn off their work lives, and that causes problems. Also, not sweating the small stuff. Keeping things in perspective is an important life skill.</p>
        `
      },
      {
        id: 36,
        category: "big-picture",
        categoryText: "BIG PICTURE",
        author: "TERRA LYNN",
        postUrl: "why-shop-friend-of-the-sea-fos-certified",
        title: "Why Shop Friend of the Sea (FOS) Certified",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1519059600/web/blog-assets/FOS-cert_hero-img_1500x530.jpg",
        contentPreview: 'The ocean’s health is directly tied to human health. Learn what “certified sustainable” means to you as a customer, and why you should look for the FOS logo when shopping for products sourced from the sea.',
        content: `
        <p>When I buy fish at the grocery store, I pay close attention to how the fish was caught. I’m looking for the freshest, wild-caught fish sourced from the cleanest waters. But I’m also looking for fish that is caught in an ethical, sustainable way. So I rely on <a href="http://www.seafoodwatch.org/" target="_none">Seafood Watch</a> to help me choose the fish and seafood that’s the best choice for the health of our oceanic ecosystems.</p>
      <p>Buying omega-3 fish oil supplements should be no different. One way you can be sure you’re buying the most sustainable fish oil possible is to look for products with the Friend of the Sea (FOS) certification logo. Last November, FOS added new certification requirements to specifically address dolphin safety. It’s now the only global certification organization to evaluate products and fisheries for both sustainability and adherence to dolphin-safe standards—an important consideration for those of us who shop for products that support our values.</p>

      <center><img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1518827461/web/blog-assets/fos-body.jpg"></center>

      <h2>What is FOS?</h2>

      <p>FOS is a non-profit, non-governmental organization (NGO) whose mission is to conserve the global marine habitat. They’re concerned with protecting the environment as a whole, and preserving the livelihoods and economies that depend on healthy oceans. FOS was founded by Dr. Paulo Bray, the European director of the <a href="http://savedolphins.eii.org/campaigns/dsf/" target="_none">Earth Island Institute Dolphin-Safe Project</a>, an organization credited with saving millions of dolphins from tuna nets after the “Dolphin Safe” tuna program was established in 1990.
</p>
      <p>Since its founding in 2006, FOS has grown to become a leading international certification project for sustainable seafood and products sourced from sustainable fisheries and aquaculture. More than 500 companies, including <a href="https://www.nordicnaturals.com/en/retailers/friend-of-the-sea/1188" target="_none">Nordic Naturals</a>, from 60 countries rely on FOS to assess the sustainability of their products.
</p>
<center><b><i>FOS is the only certification program in the world that certifies both wild-caught and farmed seafood.</b></i></center>
</h2>
      <p>FOS works around the world with fisheries, companies, scientists, conservation groups, and the public to promote the best environmental choices and guarantee traceability back to a well-managed and sustainable source. It’s the only certification program in the world that certifies both wild-caught and farmed seafood, making it easy to identify all sustainable seafood products with the same FOS seal of approval.
</p>
<h2>Requirements for Certification</h2>
      <p>The FOS certification requirements follow the <a href="http://www.fao.org/docrep/012/i1119t/i1119t.pdf" target="_none">FAO Guidelines for the Eco-Labeling of Fish and Fishery Products</a>. In particular, this means that products can only be certified sustainable if they (or their ingredients) are sourced from fish stocks that are not overfished, and that are maintained at levels that ensure “availability for present and future generations.”</p>
      <p>Products and their sourcing are evaluated onsite by independent international certification bodies, and must meet FOS’s strict criteria for sustainability:</p>
      <p>
      <ul style="list-style-type: disc; padding-left: 18px;">
        <li>The target stock must not be overfished</li>
        <li>Discard of bycatch must not exceed 8%</li>
        <li>Zero bycatch of endangered species</li>
        <li>No impact on seabed</li>
        <li>A high level of social accountability, including health and safety standards for
    employees, and a ban on child labor or forced labor
</li>
        <li>Yearly carbon footprint reduction</li>
      </ul>
    </p>
      <h2>FOS and Fish Oil</h2>
      <p>Certification of fish oil, in particular, is crucially important to protecting the health of our oceans. As the demand for omega-3 fish oil has grown in recent decades, so has increased fishing of species like sardines and anchovies, which are rich sources of the omega-3s EPA and DHA we need for optimal health. The good news is that the majority of the fisheries certified by FOS focus on these smaller species, using selective gear with no harm to the seabed, helping to protect these species and their ecosystems. According to FOS’s <a href="http://www.friendofthesea.org/public/page/fos-foe_annual_report_2016_web.pdf" target="_none">most recent annual report</a>, 22% of all FOS-certified companies are in the fish oil industry.
</p>
      <p>Oceans cover over 70% of the earth’s surface, absorbing about 30% of the carbon dioxide produced by humans on earth. They serve as the main food source for over 2.5 billion people, and over three billion people depend on marine and coastal biodiversity for their livelihoods. Choosing sustainable fish oil supplements and other products sourced sustainably from the sea is essential to help protect this precious resource for future generations. Fortunately, looking for the FOS certification logo is a relatively easy and simple way for customers like us to help make a difference.
</p>
        `
      },
      {
        id: 35,
        category: "home-life",
        categoryText: "HOME LIFE",
        author: "LEE DEGRAW",
        postUrl: "how-relationships-affect-your-health",
        title: "How Relationships Affect Your Health",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1518204245/web/blog-assets/valentines-day-post.jpg",
        contentPreview: "Relationships—whether romantic or social—can have a profound, positive impact on our physical health and emotional well-being. Learn how those closest to you can actually help you live longer.",
        content: `
        <p>Relationships—whether romantic or social—play a key role in all our lives. How we relate to others, and the quality of our interactions, have a direct impact on our physical and mental well-being. Many research studies have shown that meaningful relationships can lead to better sleep, healthier eating choices, greater happiness, and even increased life expectancy. With Valentine’s Day just around the corner, there’s no better time to explore and celebrate the many ways relationships can positively affect our overall health.</p>
      <h2>1) Heart health</h2>
      <p>While meaningful relationships are good for the figurative heart, studies increasingly show that they’re also quite helpful in protecting this vital organ from real risk. Research conducted by the <a href="https://www.escardio.org/The-ESC/Press-Office/Press-releases/Marriage-reduces-the-risk-of-heart-attack-in-both-men-and-women-and-at-all-ages" target="_none">European Society of Cardiology</a> found that married individuals are less at risk for cardiovascular complications than their single peers. The study concluded that men and women in relationships are more likely to monitor their own health and the health of their significant other, reducing the potential of coronary-related conditions.
</p>
      <p>Simply being in a committed partnership, however, is not a surefire way to protect your heart. According to the <a href="https://www.psychologicalscience.org/news/releases/heart-disease-risk-linked-with-spouses-social-support.html" target="_none">Association for Psychological Science</a>, the quality of spousal support makes all the difference when it comes to overall cardiovascular health. The study found that when spouses viewed the support they received from one another as lacking in meaning, or even hurtful, each partner’s levels of coronary artery calcification were notably higher. By contrast, a (mostly) fulfilling relationship can help you adopt beneficial habits like a balanced diet and regular exercise, both of which are known to assist in reducing the potential for cardiovascular problems.</p>
      <h2>2) Less stress</h2>
      <p>Leading a stress-free life is more or less impossible in today’s world. <a href="https://www.youtube.com/watch?v=mun5nXXy6II" target="_none">Research shows</a> that <a href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-symptoms/art-20050987?pg=1" target="_none">chronic stress</a> over time can lead to headaches, insomnia, depression, high blood pressure, unhealthy weight gain, and much more. Interestingly, studies show that being involved in a positive relationship and maintaining strong social connections contribute to relieving stress and its symptoms. One analysis conducted by the <a href="https://news.uchicago.edu/article/2010/08/18/marriage-and-committed-relationships-reduce-production-stress-hormones" target="_none">University of Chicago</a> found that being in a long-term relationship can help reduce the body’s production of cortisol, known as the stress hormone.</p>
      <p>A particularly fun way to combat stress is puckering up to the one you love. Yes, research shows that kissing releases chemicals in the body that ease stress hormones. The longer you remain in a lip-lock, the more significantly the body’s levels of oxytocin and cortisol change.
</p>
<h2>3) Better sleep</h2>
      <p>Researchers have begun to delve into the sleep patterns of both married and single adults to determine whether being in a relationship can impact the quality of our rest. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2894440/pdf/aasm.33.7.973.pdf" target="_none">One study</a> from the University of Pittsburgh showed that women who were involved in stable, meaningful relationships, or who are just beginning a new one, slept more soundly and experienced less insomnia. Often, a relationship brings certain assurances to one’s life like a greater sense of safety, financial security, and emotional support, all of which help with sleep. The quality of our social relationships also has a profound connection to the quality of sleep we get. Engaging in activities with friends and regularly interacting with family improves our mood and leaves us feeling fulfilled.</p>
      <h2>4) Longer life</h2>
      <p>Perhaps one of the biggest health perks of meaningful relationships is a longer life. The connection between being in a relationship and longevity was critically explored in a <a href="http://www.health.com/health/article/0,,20466753,00.html" target="_none">2007 study</a> conducted among European adults over the age of 40. The research found that the death rate of unmarried men was double that of those who were married. It was also determined that being in a relationship can help prevent fatal accidents and even ward off violence.
</p>
<p>In a relationship, most of us tend to pick up on the habits (good or bad) of our partners. If one person is an avid exerciser, a healthy eater, visits the doctor regularly, or avoids harmful habits like smoking or excessive drinking, chances are the other will do the same. A loving relationship also encourages us to treat ourselves with more kindness and improves our mental outlook on life in general. </p>
<p>The more we participate in meaningful relationships, the less we experience the negative effects associated with stress, anger, and depression. Maybe John Lennon was right all along when he wrote, “All you need is love.” </p>
        `
      },
      {
        id: 34,
        category: 'all-about-science',
        categoryText: 'ALL ABOUT SCIENCE',
        author: 'CLAUDIA BURGIN',
        postUrl: 'coq10-and-omega-3s-a-heart-health-powerhouse',
        title: 'CoQ10 and Omega-3s: A Heart Health Powerhouse',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1517606203/heart-health-hero.jpg',
        contentPreview: 'Your heart is one hard-working organ. Here’s one powerful combination to help you keep the beat going strong for a lifetime.',
        content: `
        <p>A mom I know just had a heart transplant. Yes, you read that right. Transplant. Right now, she’s the only person I know who’s not taking this hard-working organ for granted. The rest of us go about our daily routines without giving a second thought to the fist-sized muscle in our chests that’s constantly pumping life-giving blood throughout our bodies. Beating <a href="https://wonderopolis.org/wonder/how-many-times-does-your-heart-beat-in-a-lifetime" target="_none">an average of 80 times per minute</a>, 115,200 times per day, more than 42 million times a year.</p>
      <p>Of course, we all know our bodies wouldn’t function if our hearts stopped working. But what we might not know is how critically important nutrition is to supporting healthy heart function.* There are two nutrients that  are particularly vital to heart health—Coenzyme Q10 (a.k.a. CoQ10) and omega-3 fatty acids.* You may already know a good deal about the importance of omega-3s, so let’s start with CoQ10.</p>
      <h2>What’s CoQ10?</h2>
      <p>CoQ10 is a vitamin-like nutrient that helps your cells generate energy—in a form known as adenosine triphosphate (ATP)—needed to carry out some of your body’s most critical functions.* If you think of your cells’ mitochondria as a tiny engine, you can think of CoQ10 as the fuel that powers them. CoQ10 is most highly concentrated in your heart, brain, kidneys, and liver—organs with high-energy requirements.<sup>1</sup> CoQ10 also acts as an <a href="https://www.umm.edu/health/medical/altmed/supplement/coenzyme-q10" target="_none">antioxidant</a>, helping to neutralize the free radicals that can damage cells.*</p>
      <p>Our bodies make CoQ10, which is a good thing because <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3178961/" target="_none">our cells couldn’t function</a> without it. However, as we get older our bodies make <a href="https://www.mayoclinic.org/drugs-supplements-coenzyme-q10/art-20362602" target="_none">less and less</a> of it. You can also get small amounts of CoQ10 from foods such as beef, fish, organ meats, olive oil, soybeans, broccoli, and avocados. But according to the <a href="https://nccih.nih.gov/health/supplements/coq10#hed1" target="_none">National Institutes of Health</a>, these food sources are not enough to significantly boost the CoQ10 levels in your body. For this reason, many people—particularly those concerned about heart health—decide to take <a href="https://www.nordicnaturals.com/en/consumers/heart-health/1228" target="_none">CoQ10 supplements</a>.</p>
      <p>As a supplement, CoQ10 comes in two forms: ubiquinol and ubiquinone. Both forms occur naturally in the body and are part of the same energy-making cycle inside your cells. Ubiquinone is the oxidized form of CoQ10, and when your cells use it to make energy, it is transformed into ubiquinol, the reduced form of CoQ10. Your body strives to maintain <a href="https://www.ncbi.nlm.nih.gov/pubmed/1637852" target="_none">a controlled balance</a> between the two forms, converting ubiquinone to ubiquinol as needed.<sup>2</sup> Some people—athletes and older adults, in particular—prefer supplementing with the (more expensive) ubiquinol form of CoQ10 because it needs no conversion once it is absorbed. Either form, however, will increase your body’s stores of this vital nutrient.*</p>
      <h2>Omega-3s and Your Heart</h2>
      <p>We could all probably do a better job of keeping our hearts healthy over the long term. One way to do that is to make sure we’re getting the right amount of healthy fats in our diet.</p>
      <p>Healthy fats are so important to heart health, the American Heart Association recommends eating at least two servings of fatty fish (rich in omega-3 fats EPA and DHA) each week. For people with a documented history of heart disease, the <a href="http://atvb.ahajournals.org/content/23/2/151" target="_none">American Heart Association recommends</a> consuming 1000 mg omega-3s EPA and DHA daily, and 2,000–4,000 mg omega-3s EPA and DHA for those with other known risk factors such as high triglyceride levels.*</p>
      <p>Why are omega-3s so important for heart health? To start with, structurally, the omega-3 fats EPA and DHA make up part of our cell membranes, playing a key role in helping each and every one of our cells remain flexible and fluid enough to effectively absorb nutrients and expel wastes.*<sup>4</sup></p>
      <p>The omega-3 fatty acids EPA and DHA have also been <a href="https://www.ncbi.nlm.nih.gov/pubmed/24610882" target="_none">clinically shown</a> to help modulate both systolic and diastolic (upper and lower numbers) blood pressure.*<sup>5</sup> Numerous other studies have found that omega-3s EPA and DHA help to lower triglyceride levels, and support healthy cell signaling (omega-3 fats make up 40% of fats in the central nervous system) and heart rhythms.*<sup>6</sup> The bottom line? Omega-3s EPA and DHA are essential for helping maintain optimal heart function. So make sure your diet contains enough of these healthy fats.</p>
      <h2>Feed Your Heart Well</h2>
      <p>Do your heart a favor and don’t take it for granted. Show it the care it deserves by eating a healthy, balanced diet, exercising regularly, maintaining a healthy weight, and supplementing with CoQ10 and omega-3s to fill in any nutritional gaps. Your heart will love you back for a lifetime.</p>
      <a href="https://www.nordicnaturals.com/en/consumers/heart-health/1228" target="_none"><img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1517606204/hearth-health-body.jpg"></a>
      <p><small>
        References <br>
        <i>


1 <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3178961/" target="_none">J Pharm Bioallied Sci.</a> 2011 Jul-Sep; 3(3): 466–467.<br>

2 <a href="https://www.ncbi.nlm.nih.gov/pubmed/1637852" target="_none">Biochim Biophys Acta.</a> 1992 Jun 26;1126(3):247-54.<br>

3 <a href="http://www.who.int/beat-ncds/take-action/policy-brief-drug-theraphy.pdf?ua=1" target="_none">“Global NCD Target: Prevent Heart Attacks and Strokes through Drug Therapy and Counseling,”</a> WHO Brief, Sept 2016.<br>

4 <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4153275/" target="_none">Tanaffos.</a> 2014; 13(1): 6–14.<br>

5 <a href="https://www.ncbi.nlm.nih.gov/pubmed/24610882" target="_none">Am J Hypertens.</a> 2014 Jul;27(7):885-96. doi: 10.1093/ajh/hpu024. Epub 2014 Mar 6.<br>

6 <a href="https://www.ncbi.nlm.nih.gov/pubmed/22264569" target="_none">J Clin Lipidol.</a> 2012 Jan-Feb;6(1):5-18. doi: 10.1016/j.jacl.2011.10.018. Epub 2011 Nov 3.<br><br>
*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.
<br><br>

The American Heart Association does not endorse Nordic Naturals products or brand.
</i></small>
        `
      },
      {
        id: 33,
        category: 'big-picture',
        categoryText: 'BIG PICTURE',
        author: 'JACKIE HANSMANN',
        postUrl: 'mentor-a-young-person-and-change-someones-life-for-the-better',
        title: 'Mentor a Young Person and Change Someone’s Life for the Better',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1516999801/be-the-change-hero.jpg',
        contentPreview: 'January is National Mentoring Month, and a good time to reassess how we all spend our most valuable resource—time. Spending time with a young person—also known as mentoring—can positively influence a person’s future, and even change the course of a life.',
        content: `
        <p>It’s been said that we’re all the sum of our experiences. From that perspective, it’s easy to see how important it is to surround ourselves with caring, positive adults while we’re growing up.</p>
      <p>My family moved multiple times during my childhood, and the transition to a new home, neighborhood, and school was never easy. The move during my teen years from California to Oregon was particularly tough. High school can be challenging enough without having to be the new kid, navigating a whole new set of peer groups to find where you fit in. My parents encouraged me to join a sports team as a way to meet friends and ease some of the angst I felt. And that’s how I met Joella, a volleyball coach who not only made me feel welcome in a strange town, but who also helped me build my self-confidence and form a new circle of friends. Joella was (and still is) physically strong, self-confident, and intelligent. I recognized and admired those qualities in her even then, and spending time with her helped me adopt a more positive outlook on my own life. Even now, when I think of Joella I silently thank her for unofficially mentoring me.</p>
      <p>My experience is one that science actually affirms. <a href="http://www.bbbs.org/impact-on-education/" target="_none">Studies show</a> that young people who have a mentor are more likely to attend school and become more engaged learners, and are more likely to finish high school and go on to college. They’re also more likely to develop positive social attitudes and relationships, which can be a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3150158/" target="_none">key factor in determining overall health</a>.</p>
      <p>Adolescent and teenage years are a particularly important time to have a mentor. In fact, teens who spend time with a caring adult are <a href="http://www.bbbs.org/research/" target="_none">much less likely to begin using</a> drugs and alcohol. Having a person to confide in and look up to positively impacts those who might otherwise turn to destructive behaviors. Spending time with a mentor can even <a href="http://ppv.issuelab.org/resource/making-a-difference-an-impact-study-of-big-brothers-big-sisters-re-issue-of-1995-study.html" target="_none">improve a young person’s relationships</a> with his or her own family. </p>
      <p>What’s really great is that mentorship is a two-way street, since mentors themselves benefit from these relationships, too. Adults who volunteer with <a href="http://www.bbbs.org/" target="_none">Big Brothers Big Sisters</a>, a national organization dedicated to matching young people with caring mentors, frequently find that being a mentor positively impacts their own sense of well-being, according to the organization.</p>

      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1516999801/be-the-change-body.jpg">

      <p>Big Brothers Big Sisters makes it easy to get involved. They carefully and thoughtfully match adult volunteers with youth enrolled in their program based on personal interests to ensure the relationship is rewarding and mutually beneficial. The requirement to become a “Big?” Commit to spending 8-12 hours a month with your “Little.” <a href="http://www.bbbs.org/research/" target="_none">The matches that researchers have observed</a> shared everyday activities: eating out, playing sports or attending sporting events, going to movies, sightseeing, and just hanging out together. What mattered most to the children were not the activities, but the fact that they had a caring adult in their lives.</p>

      <p>BBBS is one of the organizations Nordic Naturals supports as a corporate sponsor, and it’s through this relationship that I first learned about BBBS and the work they do. What is particularly exciting for me is how BBBS has been able to quantify the difference mentors actually make in children’s lives: </p>
      <p>
      <b>Self Confidence</b><br>
      90% agreed their “Big” made them feel better about themselves.
      <br>
      <br>
      <b>Social Behavior</b><br>
      86% said their relationship with their “Big” has helped them make better choices throughout their lives.
      <br>
      <br>
      <b>Education</b><br>
      65% agreed their “Big” helped them reach a higher level of education than they thought possible.
      </p>
      <p>If you’re looking for a new way to add meaning to your own life in 2018, consider becoming a mentor. A small investment of time can lead to big change for the youth of our communities.
Need a little inspiration? <a href="http://www.santacruzmentor.org/about-us/match-of-the-year-2017/" target="_none">Check out this story</a> about the “Match of the Year” from the local BBBS chapter near me in Santa Cruz County. Then go out and <a href="http://www.bbbs.org/" target="_none">be the difference</a> in someone else’s life. </p>
        `
      },
      {
        id: 32,
        category: 'the-nordic-way',
        categoryText: 'THE NORDIC WAY',
        author: 'NORDIC NATURALS STAFF',
        postUrl: 'do-you-really-need-omega-3s',
        title: 'Do You Really Need Omega-3s?',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1516407297/web/blog-assets/kate.jpg',
        contentPreview: 'A Q&A with registered dietitian and Nordic Naturals’ nutrition specialist, Kate Turner, M.A., R.D.',
        content: `

      <p><i>We’re pretty sure you’ve heard us say it a thousand times: Omega-3s are essential to health. But why do you really need them? It’s a fair question, and one our in-house, registered dietitian and nutrition expert (not to mention personal trainer) Kate Turner is happy to answer. With a smile.</i><p>

      <p><b>Q. As an educator, I’m sure you’ve been asked before: Do we really need omega-3s?</b></p>
      <p>A. The answer is 100% YES! Many people are aware that omega-3s are important for their health, but because they’re not sure exactly what omega-3s do for them physiologically, they question whether they really need them as part of their diet. </p>
      <p><b>Q. Can you break it down for us in simple terms here?</b></p>
      <p>A. Our health starts in our cells. Healthy cells are the basis for everything we do, from eating and sleeping, to walking and thinking. Omega-3 fatty acids play a major role in keeping our cells healthy and functioning at their best in that they help make up our cell membranes, giving them the fluidity and flexibility needed to let vital nutrients in and push cellular waste out.* Just think of all the important nutrients we absorb through food each day that may or may not actually make it into our cells if our cells are not able to function properly. </p>
      <p><b>Q. Where can we get these omegas? Do our bodies make them?</b></p>
      <p>A. Our bodies typically make most of the fats we need for optimal health. But <a href="https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/" target="_none">our bodies are only able to produce very small amounts of omega-3 fats</a>, which is why it’s essential that we get these fats from our diet. In contrast, most of us get far too many omega-6 fatty acids, another essential fat our cells need (in moderation) from processed foods and oils. And that can make it hard to achieve a healthy balance of essential fats, which is another key component to healthy cellular function.</p>
      <p><b>Q. Why is it that most people aren’t getting enough omega-3s?</b></p>
      <p>A. The hard truth is that about <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3992162/" target="_none">90% of Americans are deficient</a> in omega-3s, making it one of the top nutrient deficiencies in the U.S. At the same time, the omega-6 to omega-3 fatty acid ratio has increased to up to <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4808858/" target="_none">20:1 or even higher</a> in the past three decades. It should be a much more balanced ratio. The reason we find ourselves facing these drastic numbers is that our current diets are overloaded with omega-6 rich foods, and we aren’t consuming enough of the foods that contain essential omega-3 fats.</p>
      <p><b>Q. Can you explain a little bit more about this omega-6 overload?</b></p>
      <p>A. The current Western diet is flooded with foods high in omega-6 fats, including our processed foods like fast foods, a lot of our sweets, cheeses, and most of our cooking oils. Keep in mind, this also includes foods we may not think of as processed like our “healthy” granola bars or breakfast cereals. (A good tip to remember: If a food is not in its form found in nature, then it’s considered processed.) </p>
      <p>Now you may be saying, “I don’t eat any of these foods, so I don’t need to worry about an omega-6 overload.” But it’s not only our processed foods we have to think about when it comes to consuming excess omega-6 fats. Foods like avocados, eggs, chickpeas (e.g. hummus), brown rice, chicken, and walnuts are all high in omega-6 fatty acids. Yes, walnuts! Now this doesn’t mean we have to give up these foods, it just means that we have to increase our omega-3 intake to achieve a better omega balance and provide our cells with the fats they need. </p>
      <p><b>Q. So how do we know we’re consuming the right fats?</b></p>
      <p>A. To achieve a healthy balance of omega-3 and omega-6 fats, you have to get enough of the right omega-3s, EPA and DHA. EPA and DHA support our cell membranes and because of this they positively affect many processes and functions in our body. I like to think of DHA as the “neck up” omega-3, supporting our brain and eyes.* DHA is the most concentrated in our brain and eye tissue. It plays an integral part in keeping our brain and eyes functioning at their best, supporting a positive mood, learning, and memory in both children and adults.*
      </p>
      <p>
        EPA is our “neck down” omega-3, supporting heart health, joint health, immune function, mood health, and a healthy inflammatory response.* There are two main sources for these essential fats: marine sources, like cold-water, fatty fish and algae; and plant-based sources, like chia and flaxseeds. </p>
      <p>It’s important to note here that plant-based omega-3 sources offer far less omega-3 EPA and DHA per serving than marine sources. Plant-based sources of omega-3s contain the ALA form, which our bodies must convert to the EPA and DHA our cells need. Unfortunately, this conversion rate can be as low as 1–5%! To put this in perspective, you would have to consume a 10-ounce bag of flax or chia seeds just to get 1000 mg of EPA and DHA each day. Marine sources, however, do not need to go through this conversion process because they naturally contain EPA and DHA.</p>
      <p><b>Q. How much fish should you eat to get the omega-3s your body needs?</b></p>
      <p>A. Even if you planned to get all your omega-3s from EPA- and DHA-rich marine sources, you would have to consume 3–6 ounces of cold-water, fatty fish (e.g. mackerel, lake trout, herring, tuna, salmon, sardines, and anchovies) every day! Now, who can realistically-and safely-consume this amount every day with the rising cost of seafood and presence of heavy metals like mercury? As a nutritionist, I’m always one to push food first, but omega-3s are one of those essential nutrients our bodies need that are extremely unrealistic to get through diet alone, and the research is there to back it up. </p>
      <p>Adding a <a href="https://www.nordicnaturals.com/en/consumers/omega-3-concentrates/361" target="_none">fish oil supplement</a> to your daily routine can be a safe and easy way to meet your body’s daily need for omega-3 EPA and DHA. I’m a big believer in giving your cells the essential fats they need, whether it’s taking a high-quality fish oil or <a href="https://nordicnaturals.com/en/consumers/algae-omega/514/?ProdID=1654" target="_none">algae oil supplement</a>, or eating fresh, wild-caught fatty fish at least twice a week, or a combination of both. </p>

      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1516407300/web/blog-assets/omega-3s-to-try.jpg">

      <p><small><i>*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</i></small></p>
        `
      },
      {
        id: 31,
        category: 'home-life',
        categoryText: 'HOME LIFE',
        author: 'CLAUDIA BURGIN',
        postUrl: 'creating-healthy-habits-that-stick',
        title: 'Creating Healthy Habits That Stick',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1515783700/web/blog-assets/healthy-habits.jpg',
        contentPreview: `Don’t abandon those freshly made new year’s resolutions just yet. Learn a few simple tricks for turning your wellness goals into lifelong, healthy habits.`,
        content: `
        <p>With every new year comes <a href="https://patch.com/us/across-america/here-are-most-popular-new-years-resolutions-2018" target="_none">a new batch of resolutions</a>—many of them having to do with our health. Whether we want to exercise more, eat more greens, cut down on sugar or caffeine, or get to bed earlier, we often find ourselves making annual promises to ourselves that we don’t end up keeping past February.</p>

      <p>The path to health is a journey, and it’s different for each of us. Creating healthy habits that support our own individual needs is a process that can be started anytime, not just at the beginning of the year. All you need is a clear goal (let’s just ditch the word “resolution” altogether), and a plan for integrating healthy changes and new behaviors into your daily life. The hard part is continuing to choose those new behaviors even when they seem uncomfortable. (We’re all creatures of habit, after all). So with that said, here are a few suggestions for developing healthy habits that actually stick:</p>

      <h2>1) Focus on one goal at a time</h2>

      <p>New year resolutions often fail because we simply take on too much change all at once, according to productivity experts like <a href="http://charlesduhigg.com/" target="_none">Charles Duhigg</a> and <a href="https://jamesclear.com/master-one-thing" target="_none">James Clear</a>. Resist the urge to create a laundry list of health goals. Instead, focus on adopting one new healthy habit at a time. If your goal is to quit caffeine, for example, focus on just that goal for <a href="https://jamesclear.com/new-habit" target="_none">a minimum of two months</a>. Researchers in the UK found that <a href="http://onlinelibrary.wiley.com/doi/10.1002/ejsp.674/abstract" target="_none">it takes, on average, 66 days</a> for a new behavior to become a habit. Interestingly, the same study found that occasional slips in your new routine had no real effect on the long-term outcome. Which means that it’s okay to backslide now and then, as long as you keep returning to your desired behavior.</p>

      <h2>Top Resolutions for 2018</h2>

      <p>
        <ul style="list-style-type: disc; padding-left: 18px;">
          <li>Eat healthier
            <li>Exercise more</li>
            <li>Save money</li>
            <li>Improve self-care (e.g. get more sleep)</li>
            <li>Read more</li>
            <li>Learn a new skill</li>
            <li>Make new friends</li>
            <li>Find a new job</li>
            <li>Focus more on relationship</li>
            <li>Cut down on cigarettes/alcohol</li>
        </ul>
        <small>(Source: YouGov Dec 2017 online survey <a href="http://d25d2506sfb94s.cloudfront.net/cumulus_uploads/document/366cvmcg44/New%20Year%20Survey,%20December%208%2011,%202017.pdf" target="_none">report</a>)</small>
      </p>

      <h2>2) Make your goal specific—and write it down</h2>

      <p>Once you’ve chosen your goal, try making it more specific. Instead of setting the goal to “drink more water,” for example, decide <a href="https://www.healthline.com/nutrition/how-much-water-should-you-drink-per-day#section1" target="_none">how much water you want to drink</a> each day and set the goal to drink that specific amount daily. Want to get more sleep? Decide <a href="http://www.sleephealthjournal.org/article/S2352-7218%2815%2900015-7/fulltext" target="_none">how many hours a night you need</a> and make that your goal. Need to cut down on caffeine? Decide on your daily limit (i.e., one cup of coffee or tea in the morning) and make that your goal.</p>

      <p>Then, grab a pen. According to Dr. Gail Matthews, who led a <a href="https://www.dominican.edu/dominicannews/study-demonstrates-that-writing-goals-enhances-goal-achievement" target="_none">research study on goal setting</a> at Dominican University, just the act of writing down your goal can be a powerful indicator of whether or not you’re likely to reach your goal. In the study, those who sent weekly updates to friends on their goal progress accomplished significantly more than those who kept their goals to themselves.</p>

      <p>Tape your written goal to your bathroom mirror, your refrigerator door, or your computer monitor. Tell your spouse or best friend about it. Your written goal will serve as a daily reminder of what you really want, and will help you say “yes” to the behaviors that help you reach your goal, and “no” to those that don’t.</p>

      <h2>3) Develop a plan</h2>

      <p>Set yourself up for success. Make a list of simple steps you can take to help you make your health goal a habit. These should be actions you can integrate easily into your daily routine, right now. Is your goal to improve your diet? Going through your kitchen cupboards and eliminating tempting, sugary sweets from your kitchen might be one action to take. Researching new recipes and meal plans and revising your shopping list is another approach. Trying—and finding—new, healthier foods you enjoy might be one, too. Want to exercise more? Look at what you do now that counts as exercise, and see if you can expand your list. Find a workout partner, a class you enjoy, or schedule a daily walk with a friend. Take the stairs instead of the elevator. Walk or ride your bike to run errands. Use an app or a fitness tool that tracks your steps or miles. The idea is to look at your health goal as a lifestyle change, and not an isolated activity.</p>

      <h2>4) Cue and reward yourself</h2>

      <p>When it comes to habit formation, your brain is hard-wired to seek reward, <a href="http://news.mit.edu/2015/neurons-drive-habit-0819" target="_none">MIT research</a> shows. Many of the things we do daily and automatically—what we eat for breakfast, the route we take to work, the way we brush our teeth—become part of our neural circuitry because of an immediate (as opposed to long-term) perceived benefit. Our brains create a “habit loop” that associates a particular activity with reward, even after that reward is no longer present. What happens right before that activity is the cue that sets the habit loop in motion. So it makes sense to consciously set up your own habit loop for your goal by associating it with a cue, and a reward.</p>

      <p>An obvious cue is timing—associating a new activity with a particular time of day. A reward might be scheduling that activity with a friend, or in a particular place. Last year I decided I needed to start doing more weight-bearing exercise. I had always gravitated more toward cardio fitness activities, so the idea of lifting weights seemed foreign and unappealing to me at first. Then I found a fitness class that took place first thing in the morning (cue), on the beach and in the company of other women (reward). The workouts were challenging, but adding one a week to my schedule gradually became routine. And even though waking up early was never my favorite part, seeing the sunrise never got old.</p>
        `
      },
      {
        id: 30,
        category: 'home-life',
        categoryText: 'HOME LIFE',
        author: 'TERRA LYNN',
        postUrl: 'five-ways-to-keep-your-spirits-bright-after-the-holidays-end',
        title: 'Five Ways to Keep Your Spirits Bright after the Holidays End',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1515432501/web/blog-assets/mood-main-image.jpg',
        contentPreview: `The transition from holiday season to a brand new year can sometimes feel a little… abrupt. Here are some simple ways to support a healthy mood and stay upbeat after the lights and decorations come down, from checking your shadow to making time for human connection.`,
        content: `
        <p>The holiday season often comes with long to-do lists, packed social calendars, vacation travel, and annual gatherings with family and friends. Then comes January, when the holiday lights come down, the decorations get packed away, the parties, family time, and vacations end, and the winter weather starts to really set in. It’s a scenario that can make it hard to stay cheery and bright. Fortunately, there are some simple things you can do to keep your mood up and avoid the post-holiday slump. Here are five we think are beneficial:</p>

      <h2>1) Get Plenty of Omega-3 EPA</h2>

      <p>Omega-3s are some of the most researched nutrients ever, with more than 16,000 studies published to date. Omega-3 fish oil is also one of the first supplements you should reach for to support a healthy mood.* Why? Because scientific evidence shows that the omega-3 essential fats in fish oil—EPA and DHA—support healthy brain and cognitive function throughout every stage of life.*  Your brain depends on these fats to build healthy cell membranes.* In fact, they are the most common fatty acids in the brain. Research suggests that <a href="https://www.ncbi.nlm.nih.gov/pubmed/18072818" target="_none">EPA</a>, in particular, can support healthy nervous system function.* <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1414" target="_none">A concentrated EPA fish oil</a> supplement can be an easy way to get a healthy serving of this important nutrient for brain health.* </p>

      <h2>2) Get Outside and Get More Vitamin D</h2>

      <p>Spending time outdoors—and in nature or green space, specifically—is one of the best things you can do to beat the winter blues. Spending time outdoors has been linked to mood and mental health benefits, <a href="https://www.ncbi.nlm.nih.gov/pubmed/27320702" target="_none">research shows</a>. In fact, spending time outdoors in nature has been <a href="https://www.ncbi.nlm.nih.gov/pubmed/24852391" target="_none">found to be beneficial to all body systems</a>. In Japan, it’s an established health care routine which roughly translates to <a href="https://www.npr.org/sections/health-shots/2017/07/17/536676954/forest-bathing-a-retreat-to-nature-can-boost-immunity-and-mood">“forest bathing,”</a> and it’s catching on here in the U.S. You don’t need to spend hours outside, either. Researchers have found that as little as <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4917833/" target="_none">30 minutes</a> in nature over the course of a week can significantly help maintain a healthy mood.</p>

      <p>Spending time outdoors is also a good opportunity to absorb some vitamin D, an essential nutrient virtually every cell in your body needs.* But this time of year, when the days are shorter and we see less of the sun, it makes sense to supplement your vitamin D supply.</p>

      <p>During the winter months, the UVB portion of the sun’s rays is low to nonexistent in northern latitudes—not enough to produce vitamin D. The farther north you live from the equator, the less UVB there is available. North of Atlanta, there isn’t enough UVB to produce vitamin D from about November to February; north of New York City, the same is true from  about October through March.</p>

      <p>How can you know if there’s enough UVB available from sunlight in your area to make vitamin D? The <a href="https://www.vitamindcouncil.org/about-vitamin-d/how-do-i-get-the-vitamin-d-my-body-needs/" target="_none">Vitamin D Council recommends</a> a quick and easy way: Check the length of your shadow. If your shadow is longer than you are tall, then you aren’t able to make enough vitamin D (due to the oblique angle of the sun), and you should consider taking a high-quality <a href="https://nordicnaturals.com/en/consumers/vitamin-d3-formulas/365" target="_none">daily D3 supplement</a> instead.</p>

      <p style="padding-top: 30px; padding-bottom: 30px; padding-left: 25px; padding-right: 25px; font-size: 20px; color: #00467f"><strong>Being physically active during the day is key to getting a good night’s sleep and maintaining a healthy mood.</strong></p>

      <h2>3) Make Time for Sleep and Exercise</h2>

      <p>Getting adequate sleep on a consistent basis is <a href="https://www.ncbi.nlm.nih.gov/pubmed/24721040" target="_none">critical</a> for mental health and mood support. Sleep difficulties can often contribute to mood challenges, and feeling blue can often disrupt our sleep—which can lead to a vicious cycle that’s hard to break. So this time of year, be extra mindful of your sleep habits. Keep to a consistent bedtime, minimize caffeine and sugar intake late in the day, and avoid exposure to blue light, especially in the evening.</p>

      <p>The part of our brain that regulates our circadian rhythms (called the suprachiasmatic nucleus, or SCN) is located at the intersection of our optic nerves, where light and darkness signal the processes that wake us up and make us sleepy. Without darkness, our brains aren’t signaled to produce the melatonin that helps us fall asleep. That’s why avoiding evening light is often the most important thing we can do to sleep well. Be extra careful with digital devices—smartphones, tablets, and TVs all emit blue light, which is precisely the kind of light that is most disruptive to our circadian rhythms.</p>

      <p>Being physically active during the day is also key to getting a good night’s sleep and maintaining a healthy mood. In addition to its many other health benefits for your entire body, regular exercise has been shown to support a range of biological processes involved in maintaining a healthy mood, including releasing “feel-good” endorphins in the brain.</p>

      <h2>4) Spend Quality Time with Friends</h2>

      <p>Even though the holidays ending may mean fewer social gatherings, it’s important to continue to make time for your relationships with loved ones. Positive, supportive relationships with family, friends, romantic partners—even furry friends—have been established to benefit our general health, and help maintain our mental health. <a href="https://www.forbes.com/sites/alicegwalton/2017/06/30/a-run-down-of-social-medias-effects-on-our-mental-health/#5374951e2e5a" target="_none">Social media doesn’t count</a>—it can make you feel more isolated, according to <a href="http://www.ajpmonline.org/article/S0749-3797(17)30016-8/fulltext" target="_none">one research study</a>. So make some time to connect offline with those to whom you are closest. Better yet, treat yourselves to a walk outside together on a regular basis, and combine quality time with exercise and outdoor time.</p>

      <h2>5) Help Others</h2>

      <p>It turns out that one of the best ways to make yourself feel good is actually to help others or the world around you. Simple acts of kindness like picking up litter, buying a friend a cup of coffee, or helping a family member cook dinner <a href="https://www.ncbi.nlm.nih.gov/pubmed/27100366" target="_none">have been shown</a> to do more to help support mood, mental health, and well-being than doing things for yourself. Research also <a href="https://www.ncbi.nlm.nih.gov/pubmed/15901215" target="_none">shows</a> that helping others is associated with greater longevity.</p>

      <p>Why does this work? Biologically, helping others or the world around you activates regions in the brain associated with pleasure, and triggers the release of natural chemicals like dopamine and serotonin, which generate a feel-good effect often termed “<a href="https://health.clevelandclinic.org/2016/11/why-giving-is-good-for-your-health/" target="_none">helper’s high.</a>” That’s why even the simplest acts of volunteering your time, money, or kindness doesn’t just help make the world a better place—it also helps you feel good and maintain a healthy mood, and your overall well-being. </p>

      <p>The holiday season may be over, but there’s plenty to feel happy about with a new year just beginning. Getting enough of what your body needs—omega-3s, vitamin D, outdoor time, sleep, exercise, and human connection—can help you keep your spirits bright no matter what the winter brings your way.</p>

      <p><small><i>*These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</i></small></p>

      <p>
        <small>
          References<br>
            <i>Altern Med Rev.</i> 2007 Sep;12(3):207-27.<br>
            <i>J Nutr Health Aging.</i> 2004;8(3):163-74.<br>
            <i>Curr Pharm Des.</i> 2009;15(36):4165-72.<br>
            <i>J Clin Psychopharmacol.</i> 2012 Feb;32(1):61-4.<br>
            <i>Am J Prev Med.</i> 2016 Sep;51(3):281-90.<br>
            <i>Int J Environ Res Public Health.</i> 2014 May 19;11(5):5445-61.<br>
            <i>Sci Rep.</i> 2016; 6: 28551.<br>
            <i>BMC Psychiatry.</i> 2014 Apr 10;14:107.<br>
            <i>Emotion.</i> 2016 Sep;16(6):850-61.<br>
            <i>Int J Behav Med.</i> 2005;12(2):66-77.
        </small>
      </p>
        `
      },
      {
        id: 29,
        category: 'big-picture',
        categoryText: 'BIG PICTURE',
        author: 'JACKIE HANSMANN',
        postUrl: 'fighting-hunger-in-america-a-year-round-battle',
        title: 'Fighting Hunger in America: A Year-Round Battle',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1513720418/hunger-in-america-main.jpg',
        contentPreview: `
          Food is a basic human necessity, and one that many of us take for granted. But the sad reality is that far too many people in America (and globally) go hungry, and putting enough food on the table to feed their kids is a daily struggle for many families. The holidays are a great time to get in the habit of helping others—and for remembering that help is needed year-round to feed those among us who just don’t have enough.
        `,
        content: `

      <p>
        Imagine not knowing where your next meal is coming from. Or running out of money for groceries just a few days short of your next paycheck. Or having to choose between paying rent and buying healthy food because you don’t have enough money for both. Unfortunately, that’s the daily reality for millions of people across the U.S., the majority of whom are living at, or below, the poverty level.
      </p>

      <p>
        An astonishing 1 in 8 Americans struggles with hunger, according to <a href="http://www.feedingamerica.org/" target="_none">Feeding America</a>, the nation’s largest domestic hunger-relief organization, and more than 46 million—including 12 million children and 7 million seniors—turn to food banks for support during the year.

      </p>

      <p>
        Food insecurity touches nearly every community in our country, including, undoubtedly, your own. And while the holidays are an ideal time for nonprofits like Feeding America to raise money to meet the needs of those who depend on food banks, the reality is that <a href="http://www.feedingamerica.org/take-action/" target="_none">donations to feed the hungry</a> are needed year-round.
      </p>

      <div class="video-container" id="vid"><iframe width="560" height="315" src="https://www.youtube.com/embed/JT8WSVezFiA" frameborder="0" allowfullscreen=""></iframe></div>

      <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/JT8WSVezFiA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe> -->


        <p style="margin-top: -12px; margin-bottom: 18px;"><small><i><a href="https://www.youtube.com/watch?v=JT8WSVezFiA" target="_none">Watch this short video</a> to learn how the Feeding America network operates, stretching donations to feed 46 million people every year.</i></small></p>


      <h2>How Food Insecurity Affects Kids</h2>

      <p>
        For families utilizing food bank services, food insecurity is just one of the many problems they may face. Financial insecurity is another. Based on annual income, 72% of the families served by the Feeding America network live at or below the federal poverty level. Children who experience hunger are at a higher risk for behavioral and social difficulties. You know those unpleasant hunger pangs you feel when you skip breakfast, or wait too long to go on your lunch break? Imagine trying to study, or build positive social skills, under such circumstances.

      </p>

      <p>
        Over time, kids dealing with chronic hunger and food insecurity experience <a href="http://www.feedingamerica.org/assets/pdfs/fact-sheets/child-hunger-fact-sheet.pdf" target="_none">behavioral problems</a> like fighting, hyperactivity, aggression, anxiety, mood swings, and bullying. Hungry children simply can’t thrive, and hungry children struggle even to get the minimum level of essential nutrients we’d want our own kids to have to become healthy, happy, self-confident adults.

      </p>

      <p>
        So, how can we help kids and families in our own communities facing hunger? That’s where Feeding America (an organization Nordic Naturals supports yearly) and their network of food banks across the country can help. Feeding America administers multiple programs throughout the year to ensure that nutritious food gets into the hands of those who need it most. And, they have the unique ability—through partnerships with food suppliers and economies of scale—to turn $1 into as many as 10 meals. Just think about what an impact it would make if each person in your community donated even a few dollars—the cost of a latte—every month. That would take a healthy slice out of these hunger statistics!
      </p>

      <h2>Hunger beyond the Holidays</h2>

      <p>
        The holidays are a particularly tough time for kids and families without enough to eat. Fortunately, most people are inspired to give a little back during this time of year. Companies frequently match donations from their employees. Neighbors volunteer at local food banks. The media spreads awareness around the issue of hunger in America. People step up to help, and lots of wonderful things happen. But often, the giving stops after December 31st.

      </p>

      <p>
        Let’s shift how we collectively think and act about hunger, and recognize that it’s a year-long battle we all need to be aware of and face. Here’s how you can support food banks all year long, and provide lasting help to those in need:
      </p>

      <ul style="list-style-type: disc; padding-left: 18px;">
        <li><a href="https://secure.feedingamerica.org/site/Donation2?idb=191619297&DONATION_LEVEL_ID_SELECTED=1&df_id=25431&mfc_pref=T&25431.donation=form1&idb=%5B%5BS76:idb%5D%5D" target="_none">Give today.</a> Search for and donate directly to your local food bank.</li>
        <li><a href="https://secure.feedingamerica.org/site/Donation2?df_id=25374&25374.donation=form1&s_src=WXXX1MTMG&s_subsrc=http%3A%2F%2Fwww.feedingamerica.org%2F&_ga=2.172378016.2088907586.1513185261-900393748.1510101703" target="_none">Give monthly.</a> Sign up to make giving a monthly habit, and help provide meals to families facing hunger year-round.</li>
        <li><a href="http://www.feedingamerica.org/take-action/campaigns/volunteer/" target="_none">Volunteer with your local food bank.</a> Donate your time to help the soup kitchens, food pantries, and meal programs that rely almost entirely on volunteers.</li>
      </ul>

      <p>
        Once you realize how truly close to home hunger hits, the thought of giving a little all year long makes sense. You can even get creative with how you help. Challenge neighbors, friends, or coworkers to come up with <a href="http://www.feedingamerica.org/ways-to-give/set-the-table/" target="_none">fundraising ideas</a>, or to plan fun, volunteer days to spend meaningful time together.
      </p>

      <p>
        You’ve got the power to make a real difference in the lives of people facing hunger in your own community. Spreading the word about the widespread problem of food insecurity; donating throughout the year to <a href="http://www.feedingamerica.org/find-your-local-foodbank/" target="_none">support your local food banks</a>; and volunteering your time are great ways to make that difference now and throughout the new year. We can’t think of a healthier habit to cultivate.

      </p>
        `
      },
      {
        id: 28,
        category: 'all-about-science',
        categoryText: 'ALL ABOUT SCIENCE',
        author: 'TERRA LYNN',
        postUrl: 'why-fish-oil-is-a-better-source-of-omega-3s-than-krill-oil',
        title: 'Why Fish Oil is a Better Source of Omega-3s than Krill Oil',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1513029355/image1.jpg',
        contentPreview: `Known as a primary food source for blue whales and other marine life, krill are tiny crustaceans that contain two essential omega-3 fats, EPA and DHA. But when it comes to buying omega-3 supplements, there are good reasons to choose fish oil made from Arctic cod, sardines, and anchovies, over krill oil. Here’s what you need to know.`,
        content: `

      <p>
        There’s a long-standing debate over which is a better for you, fish oil or krill oil. Like any good debate, there are points to be made on both sides. But if you’re looking to get the most omega-3 EPA and DHA per serving, in the form that’s easiest for your body to absorb, fish oil supplements made from Arctic cod, sardines, and anchovies are your best bet. There are some good reasons why this is true, which we’d like to explain here.
      </p>

      <h2>The Deep Dive on Krill</h2>

      <p>
        First, the key differences: Fish oil is extracted from fatty fish such as Arctic cod, sardines, and anchovies, whereas krill oil is extracted from krill, shrimp-like marine invertebrates that live in large schools called swarms throughout the world’s oceans. Although tiny—measuring only about two inches in length and weighing about a gram when fully grown—krill play a big role in the health of marine ecosystems. Penguins, seals, fish, and even the largest animal on earth, the blue whale, depend on krill as their primary food source (Check out this <a href="https://www.youtube.com/watch?v=YARe1etnNZE" target="_none">rare video footage</a> of a blue whale feeding on krill.). Without krill, the food webs that sustain all oceanic life would collapse.
      </p>

      <p>
        Krill oil naturally contains astaxanthin, a carotenoid antioxidant that gives salmon and shrimp their reddish color. Astaxanthin has also been shown to have a <a href="https://www.ncbi.nlm.nih.gov/pubmed/22214255" target="_none">diverse range of potential health benefits</a>, including potent antioxidant activity.* It’s important to realize, however, that the studies on which those potential benefits are based use much higher doses of astaxanthin than those typically provided by krill oil supplements. The dosages of astaxanthin used in the majority of clinical trials have been in the <a href="http://www.altmedrev.com/publications/16/4/355.pdf" target="_none">6-12 mg a day</a> range, whereas leading krill oil supplements provide a fraction of that, with some delivering just micrograms of astaxanthin per serving. We recommend reading the “Supplement Facts” on the product labels to find out exactly how much astaxanthin a krill oil supplement contains. If you’re looking for the benefits of astaxanthin, you’re likely better off taking a separate astaxanthin supplement that provides a research-backed amount.
      </p>

      <p>
        Krill oil also contains phosphatidylcholine, a phospholipid found abundantly in human cells. Phosphatidylcholine is an essential structural component of cell membranes, and <a href="https://www.ncbi.nlm.nih.gov/pubmed/26306852" target="_none">recent research</a> has investigated its other possible roles in human health. Phosphatidylcholine can be found in eggs, cow’s milk, seeds, soybeans, fish, and meats. The human body also naturally produces phospholipids.
      </p>

      <h2>Absorption Compared</h2>

      <p>
        Krill oil makers contend that krill oil is better absorbed than fish oil because the EPA and DHA in krill oil are in phospholipid form (versus the triglyceride form in fish oil). But only 8% of fatty acid molecules in krill are bound to phospholipids. In fact,  98.5% of all fatty acids found in nature are in the triglyceride-bound form, while hardly any natural fats are found as phospholipids. This is one reason why <a href="https://www.nordicnaturals.com/blog/all-about-science/why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet/" target="_none">triglyceride form fish oils</a> have been shown to be so well absorbed—the body is used to getting them.
      </p>

      <p>
        <a href="https://www.ncbi.nlm.nih.gov/pubmed/24952576" target="_none">One recent clinical trial</a> of healthy volunteers compared omega-3 supplements from different sources (fish oil, salmon oil, and krill oil) by looking at the blood level increases in the omega-3 fats EPA and DHA after consuming the different supplements; the results found that fish oil was 227% more effective than salmon oil and 382% more effective than krill oil at increasing blood levels of EPA and DHA.
      </p>

      <p>
        Even if phospholipid-form EPA and DHA are what you’re looking for, there are better, more potent alternatives than krill oil. <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1723" target="_none">Herring roe oil</a>, for example, has a higher amount of phospholipid-bound DHA than krill oil, gram for gram. It also offers a broader spectrum of phospholipids than krill oil.
      </p>

      <p style="padding-top: 30px; padding-bottom: 10px; padding-left: 25px; padding-right: 25px; font-size: 20px; color: #00467f">
        <strong>
          "If we had seen just one independent study where krill outperformed fish oil, we would have added krill oil to our product line years ago.”
        </strong>
      </p>

      <p style=" padding-bottom: 30px; padding-left: 25px; padding-right: 25px; font-size: 25px; font-size: 15px; font-weight: italic;">
        <i style="color: #00467f">–Joar Opheim, Nordic Naturals Founder and CEO</i>
      </p>


      <h2>Less Potent and More Costly</h2>

      <p>
        Aside from purity, the single most important consideration for any omega-3 supplement is the amount of omega-3 EPA and DHA it gives you per serving. After all, getting enough EPA and DHA is why most of us take omega-3 supplements in the first place. Experts and organizations worldwide recommend a minimum of 500 mg/day of EPA and DHA.<sup>1-3</sup> Virtually all krill oil supplements provide significantly less than that per serving.

      </p>

      <p>
        Research shows that the benefits of EPA and DHA can increase with higher intakes.<sup>4</sup> And for those of us with existing health challenges, scientific evidence supports the need for high intakes of EPA and DHA.<sup>5-8</sup> Krill oil isn’t potent enough to deliver these higher doses in a reasonable serving size, because it can’t be concentrated the way fish oil can. Krill oil is too molecularly unstable to undergo the processing required to concentrate more EPA and DHA per serving. For this reason, krill oil manufacturers often add fish oil to their formulas to increase their EPA and DHA content.
      </p>

      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1513106761/EFAsourcesRetail0216.jpg" />
      <small><i>You would need 14 soft gels from a leading krill oil manufacturer to get the same amount of omega-3 EPA and DHA found in one <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1739" target="_none">Ultimate Omega® 2X</a> soft gel.</i></small>
      <p>
        Adding fish oil to krill oil can increase a krill supplier’s manufacturing costs, and those costs are inevitably passed along to consumers. As a raw material, krill is much  more expensive than sardines, cod, or anchovies. That’s because krill, which decompose quickly, must be kept alive in water tanks or frozen immediately after harvesting. This increases the cost of getting fresh raw material to shore for processing into omega-3 supplements—another cost which is generally passed along to consumers. <a href="https://www.consumerlab.com/answers/is-krill-oil-better-than-fish-oil/fish_oil_vs_krill_oil/" target="_none">Cost comparisons</a> have shown krill oil to be three to four times higher than the cost of high-quality fish oil, based on 500 mg EPA and DHA per serving.
      </p>

      <h2>More Science Backs Fish Oil</h2>

      <p>
        Fish oil remains among the most researched supplements ever, with more than 16,000 studies published to date. There are only a small number of published scientific studies investigating krill oil’s health benefits, many of them sponsored by the manufacturers themselves.
      </p>

      <p>
        “If we had seen just one independent study where krill outperformed fish oil we would have added krill oil [to our product line] years ago,” says Joar Opheim, Nordic Naturals’ Founder and CEO. “The research is not there,”  Joar said. Krill has a long way to go to catch up with the thousands of scientific studies published on fish oil.
      </p>

      <p>
        The bottom line: while both krill oil and fish oil are sources of the omega-3s EPA and DHA that we all need for optimal health, a high-quality fish oil product offers many times more EPA and DHA per serving, at a significantly lower cost, with the scientific backing of decades of clinical research. Fish oil is just a better choice for getting your omega-3s, doing more for your health and your wallet.
      </p>

      <p>
        <small><i>
        *These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.
        </i></small>
      </p>

      <p>
        References<br>
        <small>
          1. AHA Scientific Statement: Fish Consumption, Fish Oil, Omega-3 Fatty Acids and Cardiovascular Disease, #71-0241. Circulation 2002;106: 2747–2757.<br>
2. American Dietetic Association and Dietitians of Canada. Position of the American Dietetic Association and Dietitians of Canada: Dietary Fatty Acids. Journal of the American Dietetic Association 2007;1599–1611.
<br>
3. World Health Organization. Diet, Nutrition and the Prevention of Chronic Diseases. Technical report series 916.
<br>
4. Winwood RJ, Cope MB, Rice HB. Reduction in Chronic Disease biomarkers and very high intake of EPA and DHA omega-3 fatty acids. Advances in EPA & DHA Research vol 03;(02), 2010.
<br>
5. Sublette ME, Ellis SP, Geant AL, Mann JJ. The Journal of clinical psychiatry 2011, 72:1577-1584.
<br>
6. Ballantyne CM, Braeckman RA, Soni PN. Expert opinion on pharmacotherapy 2013, 14:1409-1416.
<br>
7. Bloch MH, Qawasmi A. Journal of the American Academy of Child and Adolescent Psychiatry 2011, 50:991-1000.
<br>
8. Martins JG. Journal of the American College of Nutrition 2009, 28:525-542.
        </small>
      </p>
        `
      },
      {
        id: 27,
        category: "the-nordic-way",
        categoryText: 'THE NORDIC WAY',
        author: 'NORDIC NATURALS STAFF',
        postUrl: 'inside-nordic-naturals-meet-jamie-retail-trade-show-ringleader',
        title: 'Inside Nordic Naturals: Meet Jamie, Retail Trade Show Ringleader',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1512158634/jamie.jpg',
        contentPreview: `If you ever find yourself at Natural Products Expo or another one of the big events for the health and wellness industry, you might run into our very own Jamie Johnson at the Nordic Naturals booth. She’s the gal with the easygoing smile and a whole lot of gummies for you to sample. But take note, her superpowers are trade show logistics and Harry Potter trivia.`,
        content: `
        <p>
        <b>Name:</b> Jamie Johnson <br>
        <b>Role:</b> Retail Trade Show Coordinator <br>
        <b>Years with Nordic Naturals:</b> 10<br>
      </p>

      <h2>What do you do at Nordic Naturals, and what do you like best about your job?</h2>

      <p>
        I’m in charge of coordinating our presence at industry events—shows where people come by to sample our products and talk to us about what we do. I basically take care of all the logistics involved—travel, booth setup and break down, shipping the necessary products and supplies, that kind of thing. The title I put on my event badge sometimes is Trade Show Ringleader, because these large events can definitely feel like a circus.
      </p>

      <p>
        What I like best about my job is hearing directly from the people who take our products every day. I can’t tell you how many times people have told me personally how much they appreciate our supplements. To me, that is very rewarding.
      </p>

      <h2>Where did you grow up, and how has that place influenced you?</h2>

      <p>
        I was born and raised right here in Watsonville. Because I’ve always lived here, I’m not sure how it has influenced me. But I do see that Watsonville, which is really a multicultural environment, has allowed me to experience other cultures without stepping out of my comfort zone. I have a lot of family here, and that’s ultimately what keeps me around. I travel a lot for work, so that’s a nice balance.
      </p>

      <h2>What personal accomplishment are you most proud of? </h2>

      <p>
        I don’t really think about raising kids as an accomplishment, but I guess it is. I have four, and as long as they grow up to be good, strong, independent thinkers, then my mission is complete. If they’re capable of taking care of themselves and don’t have to rely on anyone else, then I’ve done what I needed to do. I take things one day at a time. As long as I’m where I’m supposed to be, then I’m doing alright.
      </p>

      <h2>What is something about you that few people know? </h2>

      <p>
        I’m a huge Harry Potter nerd. Not the movies, just the books. And I’m a huge audio books fan. If you see me with my headphones on, more than likely I’m listening to a book. I’m really into futuristic stories with strong warrior characters. And anything with magic. I’m such a nerd!
      </p>

      <h2>What Nordic Naturals products do you take? Any favorites you’d like to share?</h2>

      <p>
        I take quite a few—our <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1699" target="_none">Nordic Flora Probiotic Daily</a>, <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1739" target="_none">Ultimate Omega 2X</a>, <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1746" target="_none">Omega Curcumin</a>, and a product from our professional line that combines fish oil with with <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1647" target="_none">GLA</a>. When I was pregnant, I took our <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1743" target="_none">Prenatal DHA</a>, and I thought that made a huge difference.
      </p>

      <h2>What does living “healthfully” mean to you? </h2>

      <p>
        To me, it means enjoying what you do each day, and the people you work with. Because you spend so much of your time at work! If I’m having a bad day, I try to not take it home with me. I leave it where it needs to be. If I have a book I’m listening to, I take the long way home and try to get lost in the story. That helps me get out of my own head. If I’m at work, I try to step away from my desk and go do something physical to help relieve the tension—go for a walk, go to the gym… whatever I need to do to get that physical relief.
      </p>

      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1512509542/Fam_Bam.jpg">
      <p><small>Posing with the family: (bottom left to right) Kea, Helena, Gabriel, and Kyra; (top) Jamie and Brian.</small></p>
        `
      },
      {
        id: 26,
        category: "big-picture",
        categoryText: "BIG PICTURE",
        author: "JACKIE HANSMANN",
        postUrl: "why-business-transparency-should-be-the-first-item-on-your-shopping-list",
        title: "Why business transparency should be the first item on your shopping list",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1510860012/web/blog-assets/business-transparency-main.png",
        contentPreview: "Most of us care deeply about what goes into the supplements we buy. But how much do we know about the companies that make and sell these products? Here’s how to support your values and your well-being by becoming a more conscious consumer.",
        content: `
        <p>
        How did this food get to my table? Where did the ingredients in this product I’m buying come from? Is the company I’m supporting with my purchase socially responsible? The answers to these questions affect my own purchasing decisions every day. And I suspect they affect many of yours, as well.
      </p>

      <p>
        The days when milk was commonly delivered to your door, most vegetables were grown and sold in your community, and the letters GMO didn’t stand for modifying our food, are mostly gone. But that doesn’t mean we no longer have any control over where our food comes from or how it’s made.
      </p>

      <p>
        The Internet has made it possible to learn more than ever before about the companies who provide food for you and your family. And as it turns out, that kind of transparency has become something people like me (not just millennials) are <a href="https://www.labelinsight.com/Transparency-ROI-Study" target="_none">willing to pay more for</a>.
      </p>

      <h2>Shopping for Transparency</h2>
      <br>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1510860012/web/blog-assets/business-transparency-body-1.jpg">


      <p>
        <small><i>Shopping at my local farmer’s market in Santa Cruz allows me to meet and support the people and businesses that sell food in my community. Photo credit: Jackie Hansmann</i></small>
      </p>

      <p>
        Farm-to-table, family-owned and operated, organically grown, sustainably-sourced, fair trade certified, non-GMO—these and other hallmarks of business transparency and social responsibility are becoming valuable differentiators for premium brands. Because in the end, who really wants to buy from companies that mistreat the environment or make products using questionable chemicals or processes?
      </p>

      <p>
        I’ve discovered many companies and e-commerce sites dedicated to providing socially responsible and transparent shopping experiences. One of my personal favorites is <a href="https://thrivemarket.com/?page=hp&ccode=FIRST3" target="_none">Thrive Market</a>, a subscription-based online store full of healthy foods and natural products at wholesale prices. By subscribing, I’m also sponsoring a free membership for a low-income family—a shopping “perk” that has value to me.
      </p>

      <p>
        A favorite non-food company of mine that practices social responsibility and business transparency is <a href="http://www.rainbowsandals.com/" target="_none">Rainbow Sandals</a>. The company designs their products to last, and when the sandals have reached their “end” I can send them back to be repaired and subsequently donated to people who are homeless, orphaned, or victims of natural disasters. Now that’s a corporate philosophy I can get behind.
      </p>

      <p>
        I’m also a true fan (and an employee) of Nordic Naturals—not the least of which is because the company continually strives to be both transparent and socially responsible. Case in point: Nordic Naturals offers a free <a href="https://www.nordicnaturals.com/cofa/" target="_none">certificate of analysis</a> for every product sold. This certificate of analysis details the results of the third-party testing we use to verify the potency and purity of every supplement we make.
      </p>

      <p>
        For me this is important, because I want to know that what I’m buying is exactly what the label describes. To me it’s not just about transparency, but also about trust.
      </p>

      <a href="http://www.nordicnaturals.com/cofa" target="_none"><img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1510860012/web/blog-assets/business-transparency-body-2.jpg"></a>
      <p>
        <small><i>Nordic Naturals offers a free certificate of analysis for every product, giving customers transparent access to the results of our third-party testing to verify product purity and potency.</i></small>
      </p>

      <p>
        With all of the countless options out there, how do I decide which companies to buy from? I know it sounds simple, but browsing a company’s website will reveal a lot of great insights about how a company operates. I guarantee that the most transparent companies will have pages detailing their sustainable and/or regenerative practices, social responsibility, mission, and values statements.
      </p>
      <p>
        Reading the packaging and labels of the products you intend to purchase is another great way to be a more conscious consumer. The more often you do this, the more you’ll begin to understand what you’re looking for in a product (and what you don’t want to find). I was always intimidated by the amount of detail on most packaging and labels, but once I determined my own standards for buying, I felt empowered. This knowledge allows me to use my purchasing power to support the companies that are doing things right, whatever the cost may be.
      </p>
      `
      },
      {
        id: 25,
        category: "all-about-science",
        categoryText: "ALL ABOUT SCIENCE",
        author: "DEBBIE DRECKSEL",
        postUrl: "why-your-best-friend-needs-omega-3s-too",
        title: "Why Your Best Friend Needs Omega-3s, Too",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1510275516/web/pet-health-main.jpg",
        contentPreview: "Our pets add joy to our lives, lift our spirits, and even contribute to our own physical well-being. What we feed our pets matters just as much as what we feed ourselves… and just like humans, dogs and cats need omega-3 essential fats, too.",
        content: `
        <p>
        I’m a big dog lover. In fact, my friends may wonder if I ever talk about anything other than my three-year-old golden retriever, Birmingham. I’m hardly the only person I know who loves their pet obsessively. Roughly 80 million U.S. households have cats and dogs (most have two or more pets), and more than 63% of pet owners <a href="http://www.humanesociety.org/issues/pet_overpopulation/facts/pet_ownership_statistics.html" target="_none">view their pets as family members.</a>

      </p>

      <p>
        What makes us so crazy about our pets? They add joy to our lives, lift our spirits, and even contribute to our own physical well-being. Pet ownership is associated with a reduced risk of heart disease, according to <a href="http://www.heart.org/HEARTORG/HealthyLiving/Owning-a-Pet-May-Protect-You-from-Heart-Disease_UCM_453586_Article.jsp#.WgT8MBNSxds" target="_none">The American Heart Association</a>. And pets can be legally recognized as service or support animals for people with certain health issues.
      </p>

      <p>
        Of course, we all want our pets to live long, happy lives. And that’s why what we feed our pets is so important. Unless you live on a farm and your dog or cat is “living off the land,” so to speak, your pet is dependent on you for 100% of its nutritional needs. Many of us (myself included) spend the extra money to buy premium pet food brands that say they use the highest quality ingredients. But the reality is that cooked or processed pet foods don’t always contain the full spectrum of nutrients your pet needs. Omega-3 fatty acids, for example, are essential nutrients that play an important role in maintaining overall cellular health.* But these essential fats are easily compromised when exposed to high heat (used commonly in cooked dog food) and oxygen, which can diminish their nutritional value.*
      </p>

      <h2>Your Pet is What He Eats</h2>

      <p>
        If you know any one thing about me, you know I’m concerned about my diet. In fact, I often get accused of having too many “rules” about what I eat, and that tends to hold true for what I feed my dog as well. Birmingham is a happy, loyal dog with a loving disposition. But I’m convinced his disposition has more to do with his healthy diet than with his particular breed—especially when I compare him to other dogs whose diets may not be as complete as his.
      </p>

      <center><img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1510275519/web/pet-health-body.png"></center>
      <p><small><i>Birmingham showing off his sunny disposition. Photo credit: Debbie Drecksel</i></small></p>

      <p>
        Cats and dogs each require different levels and sources of the nutrients they need to maintain optimal health. So it’s important that your pet is eating food designed to meet its specific nutritional needs.
      </p>

      <p>
         Just like humans, dogs and cats both have a fundamental dietary need for omega-3 fatty acids. Dogs have a limited ability to convert plant-based omega-3s, known as alpha-linolenic acids (ALA), to the much-needed, long-chain omega-3s EPA and DHA found abundantly in fatty fish. And cats have even less ability to convert ALA to omega-3 EPA and DHA.*
      </p>

      <p>
        Dietary fats provide a concentrated source of energy for pets, although the need for fatty acids varies. For example, arachidonic acid (AA) is an omega-6 fat that helps support the body’s inflammatory response and is necessary for proper blood-clotting, skin health, and reproductive and gastrointestinal function.* But while dogs can make AA, cats cannot. So it’s much more important for cats to get this nutrient from their food.

      </p>

      <p>
        Most pet owners probably think their pets are consuming enough essential fats in their diet, but the truth is they’re probably consuming way too many omega-6 fats and not enough omega-3s. Both of these fats are necessary, but because they each help regulate immune system functions, they need to be in healthy balance.*
      </p>

      <p>
        Commercial pet foods are often overloaded with grains, vegetable oils, and meat products, and as a result, contain an overabundance of omega-6 fats. Those commercial pet foods that do contain fish (usually a good source of omega-3 fats) often contain farmed fish. And unfortunately, farmed fish—because of the grains, antibiotics, and animal byproducts these fish are typically fed—do not have the same nutritional value as wild-caught fish.
      </p>

      <h2>Give a Dog a Fish</h2>

      <p>
        <a href="http://www.dog-swim.com/files/en/user/cms/JAVMA_fish_oil_2011.pdf" target="_none">Research consistently shows</a> omega-3 EPA and DHA positively affect our pets’ overall health at the cellular level, supporting*:
        <ul style="list-style-type: disc; padding-left: 18px;">
          <li>Immune system health</li>
          <li>Skin and coat</li>
          <li>Joints</li>
          <li>Heart and kidneys</li>
          <li>Gastrointestinal health</li>
          <li>Brain and eye function</li>
        </ul>
      </p>

      <p>
        When selecting an omega-3 fish oil for your pet, look for a reputable company that maintains the highest quality standards, including using human-grade ingredients and manufacturing processes; one that uses third-party testing to guarantee purity, potency, and freshness for all its products. As a pet lover, you’ll probably also want to look for a company that values sustainability and uses sourcing methods that protect the environment. And, you’ll want to avoid products that include added ingredients that could be harmful to your pet. For this reason, it’s best to look for omega-3 fish oil that is <a href="https://www.nordicnaturals.com/en/General_Public/Products_for_Dogs_&_Cats/469" target="_none">made specifically for cats or dogs</a>.
      </p>

      <p>
        Birmingham’s nutritional needs would not be fully met if I didn’t provide him with the essential omega-3 fatty acids that help give him complete, balanced nutrition. I’m thankful his superior golden retriever’s nose is adept at detecting high quality, fresh fish oil that meets his daily dietary needs. “Bone” appetit to you and your pet!
      </p>

      <p>
        <small>
          References:<br>
American Pet Products Association, 2015-2016 report.<br>
Pet Ownership & Cardiovascular Risk, A Scientific Statement from the American Heart Association, June 2013.<br>
Dunbar BL, Bauer JE., Conversion of essential fatty acids by Delta-6 desaturase in dog liver microsomes. J. Nutr 2002 Jun; 132(6 Suppl 2):1701s-3S;<br>
Bauer JE. Fatty acid metabolism in domestic cats (Felis catus) and cheetahs (Acinonyx jubatas).  Proc Nutr Soc 1997 Nov; 56(3):1013-24.)<br>
Vaughn D, Reinhart G, Swain S, et al., Evaluation of dietary n-6 to n-3 fatty acid ratios on leukotriene B Synthesis in dog skin and neutrophils, Vet Dermatol 1994, 5 (4): 163-173.<br>
Bauer JE. Responses of dogs to dietary omega-3 fatty acids; J. Amer. Vet Med Association 2007; 11: 1657-1661.<br>
Stephen J. Mehler, et al., A prospective, randomized, double blind, placebo-controlled evaluation of the effects of eicosapentaenoic acid and docosahexaenoic acid on the clinical signs and erythrocyte membrane polyunsaturated fatty acid concentrations in dogs with osteoarthritis; Elsevier ltd., Journ Prostaglandins, Leukotrienes and Essential Fatty Acids.<br>
Rivers JP, Sinclair AJ, CCrawford MA; Inability of the Cat to desaturate essential fatty acids. Nature 1975; 258: 171-173.<br>
Corbee RJ, et al., The effect of dietary long-chain omega-3 fatty acid supplementation on owner’s perception of behavior and locomotion in cats with naturally occurring osteoarthritis, J Anim Physio Anim Nutr (Berl), 2013 Oct.<br>

        </small>
      </p>

      <p>
        <small><i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i></small>
      </p>
        `
      },
      {
        id: 24,
        category: "home-life",
        categoryText: "HOME LIFE",
        author: "TERRA LYNN",
        postUrl: "five-healthy-essentials-to-pack-for-your-holiday-travels",
        title: "Five Healthy Essentials to Pack for Your Holiday Travels",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1509988471/web/holiday-travel-main.jpg",
        contentPreview: "The fall and winter holidays are almost here, and that means crowded trains, planes, and automobiles for many of us. Packing these five healthy travel essentials can help keep you and your family feeling ready for anything when you’re away from home and on the go this holiday season.",
        content: `
        <p>
          Traveling to see family and friends over the holidays can bring us closer to the people and places we love, and create wonderful lasting memories. But traveling can also leave us feeling rundown and out of sorts, and nothing derails a trip faster than someone not feeling well—especially if you’re traveling with kids.
        </p>

        <p>
          Eating a nutrient-rich diet, getting plenty of sleep, and managing stress levels—whether through exercise, meditation, or some other way—are all important lifestyle habits for maintaining a healthy equilibrium, especially when we’re out of our normal daily routine. There are also several nutrients known to play a big part in helping us stay well when our immune systems are stressed. Here are a few that many of us here never leave home without.
        </p>

        <h2>1. Probiotics</h2>

        <p>
          When we travel, we’re often exposed to new foods and lots of new bacteria, which can compromise both our digestion and immunity. Probiotics are our #1 healthy travel essential because they can support both of these key aspects of wellness. (Check out our <a href="https://www.youtube.com/watch?v=lodkKQI1YEg" target="_none">educational video on probiotics</a> to learn exactly how probiotics work.)
        </p>

        <p>
          Probiotics are beneficial microorganisms that live in our digestive tracts. A healthy balance of probiotics promotes a <a href="http://nordicnaturals.com/blog/all-about-science/fermented-foods-and-probiotics-your-ticket-to-a-healthy-microbiome/" target="_none">thriving microbiome</a> that benefits our entire body, helping us digest our food, absorb essential nutrients, and keep our immune systems functioning properly.*
        </p>

        <p>
          Probiotics are especially helpful while traveling because they can help alleviate digestive issues and food sensitivities that can be common when we’re away from home and eating foods we didn’t prepare ourselves. At the same time, probiotics also support our natural immune defenses.* In fact, research shows that <a href="https://www.sciencedaily.com/releases/2013/09/130916122214.htm" target="_none">our intestines contain more immune cells</a> than what are present in the rest of our body.
        </p>

        <p>
          Supplemental probiotics offer a range of different probiotic strains, many of which have unique benefits. That’s why the type of probiotic you choose is important. <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1767" target="_none">Broad-spectrum probiotics</a>, containing many different strains, offer the most support for digestion and immunity while traveling, while other strains offer more targeted health benefits, such as supporting urinary tract health, for example.*
        </p>

        <p>
          When you’re shopping for probiotics, be sure to look for a product that is shelf-stable and requires no refrigeration. This is essential if you think you might encounter unpredictable schedules when you travel, and because it’s not always realistic to travel with an icepack to keep your probiotics cool.
        </p>

        <h2>2. Vitamin C</h2>

        <p>
          Travel, especially over long distances, can be taxing and stressful on the body. That’s why we always pack vitamin C—our healthy travel essential #2.
        </p>

        <p>
          Vitamin C is an important antioxidant that our bodies can’t make, and that we must get from food or supplements. In fact, vitamin C is the <a href="http://lpi.oregonstate.edu/mic/vitamins/vitamin-C" target="_none">primary water-soluble antioxidant in our plasma and tissues</a>, protecting our bodies against internal damage.* Our bodies can’t store this essential nutrient because it’s water-soluble, and quickly excreted. So we need to consume vitamin C regularly for optimal health—especially while traveling, when the stresses and exposures that come with it increase our need for antioxidant protection and immune support.*
        </p>

        <p>
          When we’re traveling, we often don’t have consistent access to the fresh fruits and vegetables that are the richest sources of vitamin C. For this reason, it’s a good idea to bring a few pieces of fruit along with you if you can. <a href="https://www.nordicnaturals.com/en/General_Public/Children's_Gummies/475" target="_none">Gummies</a> are another favorite travel-friendly way to get vitamin C while on the road.
        </p>

        <h2>3. Omega-3s</h2>

        <p>
          The omega-3 essential fatty acids EPA and DHA, found in cold-water fish and fish oil, are considered essential because we need them for proper health but we can’t make them on our own (much like vitamin C). The only way to get these important fats is through diet or supplementation.*
        </p>

        <p>
          When we consume enough omega-3 essential fats, they make their way into virtually every cell in our bodies. These essential fats become critical components of our cell membranes, helping our cells absorb nutrients and expel waste.* The prevalence of omega-3s in our cell membranes directly impacts the health of our immune response.* A significant amount of research shows that consuming omega-3 fish oil helps us naturally regulate the immune response and support the internal systems that operate in response to stress.* That’s why omega-3s are our healthy travel essential #3.
        </p>

        <p>
          When traveling, space for packing is often limited, so consider efficiency when choosing an omega-3 fish oil. <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1739" target="_none">High amounts of EPA+DHA</a> per serving can mean just one soft gel per day (rather than two) to get the necessary omega-3s you need while travelling.
        </p>

        <h2>4. Vitamin D </h2>

        <p>
          Vitamin D3 is best known for its role in building strong bones, but it’s also linked to many other key functions for optimal health, including regulating our immune systems.* Vitamin D3 deficiency is increasingly recognized as a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3068797/" target="_none">worldwide epidemic</a>. It’s a nutrient that’s difficult to get enough of naturally during the colder months when we tend to spend more time indoors, and for that reason vitamin D3 (the form of vitamin D your body makes naturally) is our healthy travel essential #4. Nowadays, it’s common to find D3 added to other nutritional supplements; we especially like these <a href="http://www.nordicnaturals.com/en/General_Public/Vitamin_D3_formulas/365" target="_none">fish oil + D3 supplements</a> for their two-in-one convenience.
        </p>

        <h2>5. Don’t Forget Water</h2>

        <p>
          One of the easiest things we can do to stay healthy and comfortable while traveling is to always remember to drink more water. Staying hydrated is crucially important, since our cells are made up of approximately 70% water. If you don’t drink enough water, your cells can’t function optimally to keep you healthy.
        </p>

        <p>
          When traveling, drink more water than you do at home to make sure your body has the hydration it needs so you can enjoy new activities and stay well in different environments. The Food and Nutrition Board of the U.S. National Academy of Sciences sets <a href="http://www.nationalacademies.org/hmd/Reports/2004/Dietary-Reference-Intakes-Water-Potassium-Sodium-Chloride-and-Sulfate.aspx" target="_none">general recommendations</a> of 91 ounces of total water each day (from all beverages and foods) for women, and 125 ounces of total water each day for men. Needless to say, H2O is our healthy travel essential #5.
        </p>

        <p>
          Whether you’re visiting family over the holidays, or getting in some holiday vacation time, keeping these five healthy travel essentials close at hand can help you be well wherever your journey takes you.
        </p>

        <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1509988069/web/holiday-bottles.jpg">

        <p>
          <small><i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i></small>
        </p>
        `
      },
      {
        id: 23,
        category: "the-nordic-way",
        categoryText: "THE NORDIC WAY",
        author: "CAROLINE OLSEN",
        postUrl: "surviving-life-s-setbacks-and-coming-back-strong",
        title: "Surviving Life’s Setbacks and Coming Back Strong",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1509125790/web/blog-assets/caroline-first-image.jpg",
        contentPreview: "Norwegian road racer and Nordic Naturals Brand Ambassador Caroline Olsen shares her personal story of strength and resilience.",
        content: `
        <p><small><i>Photo credit:  William Hauser Photography</i></small></p>

        <p>
          <i>We all "fall" in life. Sometimes, we fall spectacularly, and it takes more than a weekend of self-care to recover our physical and emotional wellbeing. But how we frame life's setbacks—the way we think about what has happened—can have a big impact on how quickly we rebound. Take Caroline Olsen, professional motorcycle racer and Nordic Naturals brand ambassador. Caroline recently landed in the hospital following a particularly brutal racing crash. Her outlook on both the accident and the way forward is inspiring to any of us who've ever suffered serious setbacks of our own.</i>
        </p>

        <br>

        <p>
          I’m a professional motorcycle racer competing in America’s national road racing series against some of the fastest guys and girls in the country. <a href="http://www.motoamerica.com/" target="_none">MotoAmerica</a> is a mix of up-and-coming young racers, world-class athletes, and foreign dreamers like myself. I had raced motorcycles for 5 years and just turned 23 when I packed my belongings and left my home in Norway to compete in the U.S.  I was adventurous, hungry, eager to learn, and ready to chase my American dream.

        </p>

        <p>
          I’m extremely fortunate to race motorcycles and do what I love for a living, but it doesn’t come without a price. I’ve been involved in two big accidents since coming to America. In 2013, I got hit from behind during a mass crash off the line at the AMA race at Road America and crushed my right shoulder. It cost me two major surgeries and more than two years of recovery, but by 2016 I was back racing.
        </p>

        <p>
          Then, in September 2017, I crashed again during the 9th round of the MotoAmerica championship at the New Jersey Motorsport Park. This time, it was a situation where I suddenly found myself with no brakes. I was coming down the front straightaway, flat out in 6th gear, when I reached for the brakes and nothing happened. My lever went to the bar, and my bike kept going. I don’t remember anything after that.

        </p>
        <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1509125791/web/blog-assets/caroline-third-image.jpg">
        <p><small><i>Photo credit: Brian J. Nelson</i></small></p>
        <h2>Falling with Style</h2>

        <p>
          I’ve seen riders lose their brakes, and the thought had crossed my mind—how would I react if that ever happened to me? Would I even have time to react? I realized after my accident that I had done everything right. In that critical moment, I knew I had to crash the bike to scrub off speed. So I hooked a left onto the grass so my bike would crash before we both hit the tire wall.

        </p>

        <p>
          I woke up late Monday morning in Atlantic City Regional Medical Center. I had tubes down my throat and I quickly realized a machine was helping me breathe. Tears began rolling down my face; I was so scared yet so happy to see my coach, Jason Pridmore, and two of my good friends sitting next to my bed watching over me.

        </p>

        <p>
          My lungs were bruised, and I had broken my collarbone, two vertebrae, and my fibula just below the knee. But I felt fortunate that I had escaped without any serious long-term injuries. It was crucial to have good people on scene, and I feel very grateful for the fire and ambulance first responders, the workers and medical staff at New Jersey Motorsport Park, and the medical center’s trauma staff, who took such great care of me.

        </p>

        <p>
          Even with my family being on the other side of the globe I never felt alone. I have some amazing people in my life, and I couldn’t ask for a better support network. My coach Jason, who is as solid as they come; my friends Liz and Nick, who put their lives on hold to support me in every way they could; Benny Solis, Senior, and the whole H35 team, who visited me at the hospital every day. The support and well-wishes from family, friends, sponsors, and fans has been a tremendous help getting through this experience. I’m no longer recovering only for myself, but for everyone who has stood by and cheered me on.

        </p>

        <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1509125791/web/blog-assets/caroline-second-image.jpg">
        <h2>Recovering Boldly</h2>
        <p>
          Crashing is almost inevitable when you race. We always want to improve, and we always want to go faster. We are so close to our physical limits that at some point we’re likely to go over that limit. But that’s ok; you learn from it and get better.

        </p>

        <p>
          Facing and overcoming adversity has not only shaped me as a rider, but as a person. The inner drive to not give up, the stubbornness to not let injuries decide when I should quit racing, and the love for the sport has kept me going. What would happen if everyone gave up as soon as things got rough?

        </p>

        <p>
          After four years, I’m still chasing the same dream. It’s not in my blood to give up, and I’ve been through too much to stop now. I still have goals I want to accomplish. While my body is healing, my mind is already focused on the 2018 season. I have no doubt I’m going to race motorcycles again. For me, it’s not down and out, but onwards and upwards.

        </p>
        `
      },
      {
        id: 22,
        category: "all-about-science",
        categoryText: "ALL ABOUT SCIENCE",
        author: "NORDIC NATURALS STAFF",
        postUrl: "omega-3s-and-curcumin-contributors-to-a-healthy-immune-response",
        title: "Omega-3s & Curcumin: Contributors to a Healthy Immune Response",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1508453656/web/blog-assets/curcumin-main-image.jpg",
        contentPreview: `
        As the first step in our body’s immune response, inflammation is literally a lifesaver. But keeping our inflammatory response in a state of balance—enough to do the job when needed, but not too much—can be a real challenge. Here’s how omega-3s and curcumin can help.*
        `,
        content: `
        <p>
          Think of the last time you scraped your knee. It’s sometimes surprising that such a tiny injury can cause so much pain. But that inflammatory pain is actually a good thing—it’s the first step to healing.
        </p>

        <p>Inflammation signals your body to quickly stop any bleeding, and send white blood cells to the injured area to protect against infection. Inflammation is an essential first-step in the immune system’s healing response. It’s literally a lifesaver, the first line of defense against harmful bacteria, pollutants, and viruses.
</p>

        <p>So why does inflammation so often get a bad rap? Inflammation becomes a problem when it can’t be resolved once its job is done. This has become all too common, unfortunately. For too many of us, our inflammatory response has become hyper-reactive, and chronically triggered. We find ourselves living with pain and shrugging it off as just the way it is. But does it have to be?
</p>

        <p>Inside our bodies, the signals that help trigger and resolve the body’s inflammatory response are called eicosanoids, and they are metabolized from a surprising source—dietary fats. That means that the type of dietary fats we consume can influence the function of our inflammatory response.
</p>

        <h2>Dietary Fats and the Healing Process</h2>
        <p>The human body is capable of producing an astonishing spectrum of fats from dietary sources, with the exception of two groups: omega-3s and omega-6s. These essential fats must be obtained from either diet or supplementation. Omega-6s are the source of the eicosanoid signals that largely initiate our inflammatory response, while omega-3s help resolve it.*
</p>

        <p>Between these two, the predominant fat in our diets is unquestionably omega-6. Omega-6s come from many sources, but mostly from “vegetable” oils like soybean, sunflower, and safflower oil. Once omega-6s accumulate in the body, they have the unfortunate consequence of ramping up the inflammatory immune response to unnecessary levels.*
</p>

        <p>The key to ensuring an appropriate inflammatory response is maintaining an adequate intake of omega-3s, which are found mostly in wild-caught, fatty fish. But many of us don’t get enough of these dietary fats—specifically, EPA and DHA. For that reason, <a href="https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/#h2" target="_none">the National Institutes of Health (NIH) recommends</a> daily servings of omega-3s EPA and DHA, whether through food sources or supplementation. This serves the dual purpose of both correcting pervasive omega-3 deficits and combating abnormally large intakes of omega-6s.* </p>

        <p>In addition to omega-3s, other nutrients also offer benefits for managing the body’s inflammatory response. And since our environment is loaded with more triggers than ever (e.g. pollutants), nutritional backup is welcome. Curcumin has long been recognized as a homeopathic solution to help manage inflammation, and it’s increasingly recognized by science as beneficial.*
</p>

      <h2>What is Curcumin?</h2>

        <p>Curcumin is the most active component of turmeric, a tropical plant and spice in the ginger family. Curcumin is what gives turmeric its bright yellow-orange color. It has a wide range of <a href="https://www.ncbi.nlm.nih.gov/pubmed/17569205" target="_none">beneficial properties</a>, including anti-inflammatory and antioxidant functions.* </p>

        <p>In Southern Asia, where turmeric grows natively, curcumin has been used both as a spice and a medicine for thousands of years, especially for inflammation.* It is also used extensively in India’s Ayurveda system of herbal medicine. Western science first isolated curcumin in 1815, and curcumin is currently the subject of human clinical trials for a wide range of health issues linked to unchecked inflammation.
</p>

        <p>What makes curcumin such a powerful nutrient is that it works by influencing not just a single inflammatory pathway, but multiple pathways to promote a healthy, balanced inflammatory response.* <a href="https://www.ncbi.nlm.nih.gov/pubmed/20955148" target="_none">In technical terms</a>, curcumin regulates various transcription factors (such as NF-kB), inflammatory cytokines (such as interleukin 1 and interleukin 6), protein kinases (such as Akt), and other enzymes (such as COX-2 and 5-LOX).* Curcumin also has potent antioxidant activity, neutralizing the chain reaction of free radical formation, offering further support for a healthy immune and inflammatory response.*
</p>

<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1508442887/web/blog-assets/curcumin-body-image.png">

<h2>Bioavailability is Key</h2>

        <p>Unfortunately, getting curcumin in your body isn't as easy as just eating more delicious South Asian delicacies. Curcumin is known to be poorly absorbed by the human body, and this has always been seen as limiting its nutritional potential. </p>

        <p>Newer innovations in supplemental curcumin formulation, however, have made it possible to produce curcumin in a form that is readily absorbable and utilized by the body. In clinical studies, “optimized curcumin” has been shown to be <a href="http://www.vshealthcare.com/uploads/6/6/9/7/66973013/longvidabioavailability-cmaxauc-refgota-ver2.pdf?utm_source=Pro&utm_campaign=9e32986cfc-Pro+-+May+Nordic+News_2017_05_16&utm_medium=email&utm_term=0_42a910a15a-9e32986cfc-151931773" target="_none">65 times more bioavailable</a> than standard curcumin extract.*</p>

        <p>Optimized curcumin, especially when <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1746" target="_none">combined with omega-3s EPA and DHA</a>, delivers a potent one-two nutritional punch that supports an ideal inflammatory response*
</p>

        <p><small><i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i></small></p>
        `
      },
      {
        id: 21,
        category: "big-picture",
        categoryText: "BIG PICTURE",
        author: "CLAUDIA BURGIN",
        postUrl: "ocean-health-lessons-in-personal-impact",
        title: "Ocean Health: Lessons in Personal Impact",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1507834854/web/blog-assets/5-gyres-main.jpg",
        contentPreview: "It’s true—plastics pollution in our oceans is a huge concern, affecting the health of our entire marine ecosystem as well as our collective health as humans. That fact alone can seem pretty overwhelming, until you consider the simple fix: Stop using disposable plastics.",
        content: `
        <p>
      It’s true—plastics pollution in our oceans is a huge concern, affecting the health of our entire marine ecosystem as well as our collective health as humans. That fact alone can seem pretty overwhelming, until you consider the simple fix: Stop using disposable plastics.
    </p>

    <p>
      This is the lesson in personal impact that I had the pleasure of learning while out on the bay in Newport Beach with <a href="https://www.5gyres.org/" target="_none">The 5 Gyres Institute</a>. It’s the whole idea behind taking groups of school kids out on the water to show them firsthand how plastic trash—bags, balloons, water bottles, toys, straws, and cups—winds up in the ocean, and how easy it is for animals to nibble on the plastic or become entangled in it.
    </p>

    <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1507834854/web/blog-assets/5-gyres-body-3.jpg">
    <p>
      <small><i>Dolphins sightings while out on the bay with The 5 Gyres Institute. Photo credit: Georgia Schofield/Starboard</i></small>
    </p>
    <p>
      In just under half an hour we were all treated to life-affirming sightings of dolphins playing and seals lounging, while we dragged a net behind the boat to capture floating plastic debris. As we trawled for trash, Marcus Eriksen, Co-Founder and Research Director of The 5 Gyres Institute, explained how plastic really doesn’t ever disintegrate; it just breaks down into finer and finer particles known as microplastic. Birds, fish, and sea life ingest the plastic, and that microplastic makes its way up the food chain to us.
    </p>

    <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1507834854/web/blog-assets/5-gyres-body-1.jpg">

    <p>
      <small><i>High school students from Sunburst Youth Academy, along with pro surfer and 5 Gyres ambassador Zane Schweitzer, take a look at plastic trash pulled from the ocean. Photo credit: Georgia Schofield/Starboard</i></small>
    </p>

    <p>
      The sad part is, so many fish and mammals die as a result of plastic pollution—more than 1,200 species are affected. Marcus even shared with us a frizzled, unappetizing tangle of plastic rope and bottle caps plucked from the decomposing remains of a camel in the desert to illustrate how widespread the problem is.
    </p>

    <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1507834853/web/blog-assets/5-gyres-body-2.jpg">

    <p>
      <small><i>5 Gyres Research Director Marcus Eriksen explains how this tangle of plastic rope and netting found its way into the belly of a camel. Photo credit: Jeff Davis</i></small>
    </p>

    <p>
      Seemingly simple, everyday choices—what to grab as you’re leaving the house, or keep stashed in your car or backpack—can make a big difference when it comes to keeping plastics out of our landfills, where they can easily make their way to our waterways and oceans.
    </p>

    <p>
      Plastic bags, straws, lids, utensils, bottles, cups, and other single-use items are the most common plastic pollutants, and are relatively easy to eliminate from your daily life. <a href="http://nordicnaturals.com/blog/big-picture/refuse-reduce-reuse-10-things-to-clean-up-our-oceans/" target="none">Saying “no thanks” to disposable plastic items</a> is an easy way to be the sea change we all need.
    </p>

    <h2>Refuse, Reduce, Reuse </h2>
    <!-- <p>
      <ul style="list-style-type: disc; margin-left: 22px;">
      <li>Bring your own water bottle, mug, utensils, and reusable bag with you.</li>
      <li>Say no to straws, styrofoam, and plastic lids when dining out.</li>
      <li>Use glass containers instead of plastic wrap or ziplock bags to store food.</li>
      <li>Pick up five pieces of plastic trash if you see litter when you’re out.</li>
      <li>Help your family, friends, and co-workers understand that little changes to our daily routines can make a big difference in ocean health.</li>
      <ul>
    </p> -->
    <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1507925399/web/blog-assets/5-gyres-body-infograph.png">


        `
      },
      {
        id: 20,
        category: "all-about-science",
        categoryText: "ALL ABOUT SCIENCE",
        author: "JERILYN SWINDLE",
        postUrl: 'omega-3-dha-and-vitamin-d-why-theyre-so-important-during-pregnancy',
        title: 'Omega-3 DHA and Vitamin D: Why They’re So Important During Pregnancy',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1507139163/web/pregnancy-post-1.jpg',
        contentPreview: `
        Childhood nutrition can be a constant challenge, but there’s one time during a child’s life when we have complete control: pregnancy. It’s a critical time for development that impacts your child’s life well into adulthood. Here are two nutrition essentials you’ll want to make sure you’re getting enough of during your child’s earliest months.
        `,
        content: `
        <p>
        Being a parent is one of life’s most rewarding roles, as well as one of its toughest.  Often, we have to think 10 minutes and 10 years ahead, at the same time.  We find ourselves poring over names for a child, researching local schools, and agonizing over what our children eat.  We often start with so many perfect plans about how we’ll raise our children, and then we learn what every new parent ultimately learns: choose your battles wisely.  As parents, we only have so much energy, and we need to spend it on the things that will actually make a difference in our kids’ lives. Nutrition is one battle truly worth fighting.
      </p>

      <p>
        As a professional in the natural health industry, I sometimes know more than I’d like to about the health challenges facing children today. I’ve read the research and know how much early nutrition impacts lifelong health. Until children are adults, their nutrition is our job—and it’s a big job, considering that most children wouldn’t mind eating cereal, pizza, chicken tenders, and macaroni and cheese at every meal!

      </p>

      <h2>Healthy Nutrition Starts In the Womb</h2>

      <p>
        Even though childhood nutrition can be a constant challenge, there’s one time during a child’s life that we have complete control: pregnancy. When we are carrying our child, our nutrition is their nutrition. For better or worse, we have total control over their nutrient intake. And while pregnancy’s early developmental window is brief, it’s a crucial time for development that carries on into your child’s life as an adult. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3890560/" target="_none">Research shows</a> that under-nutrition during pregnancy results in physiological changes that can permanently shape a developing child’s anatomy, physiology, and metabolism in ways that can manifest decades later in adulthood. Early in the game of life is the best time to create a strong and stable foundation.

      </p>

      <p>
        Many nutrients are important for proper prenatal development. That’s why pregnant women are reminded to eat a healthy, balanced diet and take a daily prenatal multivitamin. But some specific nutrients are difficult to find in adequate amounts, even in a healthy diet. One of those nutrients is <a href="https://www.nordicnaturals.com/en/General_Public/Prenatal_Health/1234" target="_none">omega-3 DHA</a>. This essential fatty acid is a long-chain omega-3 fat that's abundant in many species of fish, especially cold-water fish. This tiny fatty acid packs <a href="https://www.youtube.com/watch?v=-nkWnO9TbTI" target="_none">powerful support for proper development</a> of a child’s brain, eyes, and nervous system.*
      </p>

      <p>
        The <a href="https://www.karger.com/Article/FullText/448262" target="_none">human brain</a> is almost 60% fat, and 20% of the essential fat in the brain’s cerebral cortex is DHA alone. Our eyes have even higher concentrations of this essential fat. The brain, eyes, and nervous system are central to a child’s cognitive, social, and behavioral development. These systems are the command centers for speech, vision, and hearing. And all are part of healthy neurodevelopment, which is foundational to a child’s future. Proper neurodevelopment contributes to success in school, family, workplace, and society at large, throughout a person’s life.

      </p>

      <p>
        DHA is also crucial for a pregnant mother. During the third trimester, when rapid fetal brain development begins, the mother’s DHA stores can drop if she isn’t consuming enough.* In fact, DHA is so essential to a healthy mom and baby that the <a href="http://americanpregnancy.org/first-year-of-life/omega-3-supplements-baby/" target="_none">American Pregnancy Association</a> recommends it for pregnant women.* But they also caution pregnant women from eating too much fish due to contaminants like heavy metals. This is why fresh, pure fish oil can be a safe alternative source of DHA.

      </p>

      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1507237098/web/blog-assets/pregnancy-post-3.jpg">

      <h2>Vitamin D for Mom and Baby</h2>

      <p>
        Another nutrient important to a healthy pregnancy is vitamin D. Many pregnant women in the United States don’t get enough vitamin D, and several factors can contribute to deficiency, including:
        <ul style="list-style-type: disc; padding-left: 22px;">
          <li>Excess weight</li>
          <li>Extended time indoors</li>
          <li>Reduced exposure to the sun</li>
          <li>Darker skin</li>
        </ul>
      </p>

      <p>
        <a href="https://www.vitamindcouncil.org/vitamin-d-during-pregnancy-and-breastfeeding/" target="_none">Research</a> quoted by the Vitamin D Council found that women who consumed adequate amounts of vitamin D every day during pregnancy were more likely to give birth without complications.* A mom’s daily intake of vitamin D also ensures that her baby is born with a good supply of this essential nutrient. Vitamin D has been <a href="https://www.rcog.org.uk/globalassets/documents/guidelines/scientific-impact-papers/vitamin_d_sip43_june14.pdf" target="_none">recognized</a> as supporting crucial actions such as:
        <ul style="list-style-type: disc; padding-left: 22px;">
          <li>Healthy insulin levels*</li>
          <li>Healthy immune function*</li>
          <li>Healthy lung development*</li>
        </ul>
      </p>

      <p>
        These functions not only support the body systems directly listed here, but they support multiple other facets of fetal development as well. When metabolism, immunity and lung development are optimal, they create support for a variety of other developing systems. It’s easy to see why <a href="https://www.nordicnaturals.com/en/General_Public/Vitamin_D3_formulas/365" target="_none">vitamin D</a> is also essential to a strong foundation and a healthy future.*
      </p>

      <p>
        But vitamin D isn’t just for babies. <a href="https://cds.psych.ucla.edu/documents/2015Accorttetal-LowerprenatalvitaminDstatus....pdf" target="_noen">Research</a> has shown that it supports a healthy mood in new moms.*  Intake of vitamin D during pregnancy helps a new mom avoid a deficiency during the crucial months after birth, when mood can play a major role in her own well-being.*  Vitamin D also supports a healthy inflammatory response.* When a woman has given birth, her body has a lot of repair work to do and it can use all the help it can get.
      </p>

      <p>
        Being a pregnant woman or a new mom is challenging and we often feel pressure to do everything just right.  Luckily, perfection is not required. But understanding the crucial role that nutrition plays in childhood—and beyond—is so important. We’ve all heard the saying, “you are what you eat.” During pregnancy, you are, in fact, what your mother eats.
      </p>

      <p>
        A fetus has the monumental task of transforming from a single cell to a fully formed infant in just a matter of months. It’s our job to support our developing babies with the very best nutrients available. And while we’re at it, let’s support ourselves with those nutrients, too. Our babies need us to be ready to choose those childhood battles wisely!
      </p>

      <p><small><i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i></small></p>
        `
      },
      {
        id: 19,
        category: 'home-life',
        categoryText: 'HOME LIFE',
        author: 'AMANDA WATSON (brand ambassador)',
        postUrl: "why-your-body-doesnt-want-you-to-sit-all-day",
        title: "Why Your Body Doesn't Want You to Sit All Day",
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1506366027/web/blog-assets/post-images/dangers-of-sitting-main.jpg',
        contentPreview: 'Why does sitting wear on us so much? And what can we do to support our backs—and our health—while we’re at work, where many of us sit for 7+ hours a day, five days a week? Turns out, there are simple changes you can make to your daily routine to minimize the negative health effects of sitting, and show your body some workplace respect.',
        content: `
        <p>
        We’ve all heard that sitting is bad for you. It’s the reason why many of your co-workers are getting standing desks, and why sitting for long periods of time may actually leave you feeling more tired than when you first sat down (If you’ve ever crossed an ocean in an airplane, you know the feeling well.).
      </p>

      <p>
        Why does sitting wear on us so much? And what can we do to support our backs—and our health—while we’re at work, where many of us sit for 7+ hours a day, five days a week? Turns out, there are simple changes you can make to your daily routine to minimize the negative health effects of sitting, and show your body some workplace respect.
      </p>

      <p>
        According to the <a href="https://news.heart.org/sitting-too-much-may-raise-heart-disease-risk/" target="_none">American Heart Association</a>, even people who exercise regularly aren’t immune to the dangers of sitting. Sedentary time—which includes working at a computer, driving, watching TV, reading, and sitting down for meals—increases your risk for cardiovascular disease and diabetes. Yet the average American adult with a desk job spends <a href="https://www.washingtonpost.com/news/wonk/wp/2015/06/02/medical-researchers-have-figured-out-how-much-time-is-okay-to-spend-sitting-each-day/?utm_term=.4aee41d215ef" target="_none">eight to ten hours a day sitting</a>. This seemingly benign activity is not only bad for your heart and blood vessels, it’s also bad for your musculoskeletal system, and your ability to maintain a healthy weight. Why is this the case? Let’s look at what happens physically in your body when you sit for more than 30 minutes at a stretch.
      </p>

      <h2>What Happens When You Sit</h2>

      <p>
        <b>Your glutes lengthen and hamstrings shorten.</b> When you sit, two main things are happening at the hip joint: Your hamstrings are in a shortened position, and the more you sit, the tighter your hamstrings get. Tight hammies are <a href="https://www.ncbi.nlm.nih.gov/pubmed/27040059" target="_none">the number one cause of low back pain!</a> Second, when sitting, your gluteal muscles are lengthened to their full range of motion. Being in a lengthened position for long periods of time makes those butt muscles weak.
      </p>

      <p>
        What’s the big deal about glute muscles? They aid in balance, gait, and hip stability. With weak glute muscles comes valgus knees (knees that cave in when bending), which can cause a cascade of negative effects on your gait, lower body strength, and <a href="http://nordicnaturals.com/en/General_Public/Joint_&_Bone_Health/1232" target="_none">joint health</a>. Weak glutes can also lead to a general lack of stability and balance, which increases your risk of falling. Plus, glutes (with the help of our quadriceps), are responsible for stepping up and decelerating yourself down steps. Think stairs, hiking, walking uphill, etc. A very important movement!
      </p>

      <p>
        <b>Your body pulls forward.</b> When you sit down and reach out to something in front of you (i.e., keyboard, mouse, book, coffee mug), your shoulders protract forward, taking the whole upper body with them and rounding out your upper back.
      </p>

      <p>
        <b>Neck muscles get overstressed.</b> The action above usually leads you to tilt your head forward, taking the weight of your head away from the supportive framework of your shoulders and spine. So your neck muscles start working overtime to keep your head from falling off your shoulders. Picture a rope attached to a tall building and you are leaning back, pulling on this rope to keep this building from falling over. Now do this for hours. That’s what your neck muscles are doing while your head is tilted forward.
      </p>

      <p>
        <b>Shoulders and back muscles work overtime.</b> Your upper back muscles are in a constant state of lengthening as you are working, reaching and looking forward in your seated position. This makes them very weak! In addition, your muscles surrounding your shoulder blades are constantly “on,” working to stabilize your shoulders and arms as you work at your computer. Constantly stabilizing and holding your arms out in front of you fatigues those upper back muscles and can lead to aches and pains.
      </p>

      <p>
        <b>Core muscles become weak.</b> When we sit with bad posture the spine is tiling forward and the abdominal muscles are de-activated. Sitting requires little effort from the majority of abdominal muscles; the act of sitting leaves them lax and underused.
      </p>

      <p>
        <b>Circulation decreases.</b> When you minimize your movement, especially with a sitting position, your blood circulation decreases which causes blood to pool in the legs. This can lead to swollen ankles, varicose veins, and even blood clots in the legs. Slowing circulation also means less blood to the brain.
      </p>

      <p>
        <b>Productivity and alertness decline.</b> When blood flow, which carries much-needed oxygen to the brain, is restricted, your thoughts can become foggy, you’ll feel sluggish, and you can be more easily distracted. If you get up, move for a few minutes and stretch, most likely you’ll return to your desk with a new perspective, new ideas, and a fresh start to your work!
      </p>

      <p>
      <b>Likelihood of weight gain increases.</b> Lastly, sitting all day decreases the number of calories you burn and therefore is a big factor in weight gain. There are many associations with sitting and weight gain, obesity, and risk of disease. To make this idea more tangible, picture this: If you stand instead of sit, you’ll burn between 30-50 extra calories per hour depending on your size. That might not sound significant, but in an 8-hour work day that is an extra 240-400 calories burned! In a week that’s 1,200-2,000 extra calories being used for standing! It takes a 3,500 calorie deficit to lose a pound of fat. So in just a few weeks you can lose a pound of fat simply from standing. Imagine the progress you’d see after a year!
      </p>

      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1506369406/web/blog-assets/post-images/Tips.png" target="_none">

      <p>
        All this being said, we still have to work, right? So, what can you do to help your body? The best thing you can do is use a standing desk as much as possible. Your body will thank you so much for getting out of that sitting position. But if you can’t stand while you work (and even if you can) try to incorporate these basics into your day:
      </p>



      <p><b>1. Get up and stretch.</b> Walk from meeting to meeting, get up and get a water or snack, and get a few twists and stretches in every 20-30 mins at your desk. Remember to stretch out your hamstrings in particular. As I mentioned, tight hamstrings are the number one cause of low back pain in the workplace. Try yoga, or better yet, just spend 10 minutes a day stretching those hammies out.</p>
      <p><b>2. Strengthen your upper back.</b> Any sort of upper body pulling motion will do wonders on your back. TRX rows, planking rows, pull ups, spri band pulls… anything where your arms are out in front of you (or overhead) and you are pulling back or down towards the armpits is perfect!</p>
      <p><b>3. Increase your daily activity.</b> Schedule walking meetings and phone calls, take the stairs rather than the elevator, exercise at lunch, or try biking to work. Set alarms on your phone to remind yourself to get up and stretch. Get up and go ask people questions in person rather than sending an email. At the very least, start becoming more aware of how much time you actually spend sitting each day.</p>
      <p><b>4. Avoid sitting outside work.</b> Once you’re home for the day, get some exercise! Go for a walk with your family, play with the kids, stand up and cook an awesome meal in the kitchen, or substitute hobbies for TV time. Just try and be active—your body will thank you!</p>



      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1506366030/web/blog-assets/post-images/dangers-of-sitting-body.jpg">

      <p>
        <i>Amanda Watson, ACE CPT, Orthopedic Exercise Specialist, is the
          founder of <a href="https://www.happilyforeverfit.com/" target="_none">Happily Forever Fit</a>, a Santa Cruz personal training and boot camp program, and a proud brand ambassador for Nordic Naturals. With 8+ years experience personally training individuals and small groups, Amanda loves helping people achieve their fitness and nutrition goals.</i>
      </p>

        `
      },
      {
        id: 18,
        category: 'the-nordic-way',
        categoryText: 'THE NORDIC WAY',
        author: 'CLAUDIA BURGIN',
        postUrl: 'giving-children-more-of-what-they-need-to-stay-healthy-introducing-five-new-products-for-kids-and-teens',
        title: 'Giving Children More of What They Need to Stay Healthy: Introducing Five New Products For Kids and Teens',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1505424800/web/new-prods-main-new.jpg',
        contentPreview: `Childhood is when good nutrition really counts. Yet many kids don’t receive enough of the nutrients they need for healthy development. Get the 411 on our newest products, all made with kids’ healthy development—and parents’ top nutritional concerns—in mind.`,
        content: `
        <p>
        Kids’ health gets a lot of media attention during back-to-school season—ads, discounts, blog posts! But for most parents, thinking about their child’s health isn’t a seasonal thing. We think about our kids pretty much every day—what they eat, whether they’re getting the nutrients they need, how we can support their ongoing physical and mental development.
      </p>

      <p>
        All this obsessing over what our kids eat, and more importantly what they don’t eat, isn’t groundless. Research shows us time and again that <a href="https://www.nap.edu/read/11899/chapter/4#40" target="_none">childhood is when good nutrition really counts</a>, yet most kids—whether because they’re picky about the foods they eat, or because the most nutritious foods aren’t always available to them—simply don’t get the nutrition they need for healthy development through their teen years.
      </p>

      <p>
        We know, for example, that omega-3 DHA, an essential nutrient that can only be obtained from diet, is critical for healthy brain development.* We also know that the <a href="https://www.fda.gov/Food/ResourcesForYou/Consumers/ucm536514.htm" target="_none">FDA recommends</a> that pregnant and lactating women, along with children ages 2 and up, eat between 1-3 servings of fish every week. But less than 10% of people across all age groups consume adequate amounts of fish on a regular basis, according to the <a href="https://health.gov/dietaryguidelines/2015-scientific-report/pdfs/scientific-report-of-the-2015-dietary-guidelines-advisory-committee.pdf" target="_none">USDA’s 2015 Scientific Report on Dietary Guidelines.</a>

      </p>

      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1505369177/web/kids-new-second.jpg" style="width: 900px">

      <p>
        The deficit in omega-3 consumption is a big reason why Nordic Naturals is introducing <a href="http://nordicnaturals.com/children/" target="_none">five new children’s products</a>. (We're also introducing a new look with easier-to-read labels for some of our other children’s product favorites).
      </p>

      <p>
        We want to make sure that every parent has access to high-quality, research-supported, and age-appropriate nutritional supplements to meet their child’s individual nutritional needs. And, we want to make sure that kids actually enjoy taking the supplements their parents give them. I know from my own experiments with getting my three-year-old to take fish oil daily that taste—and delivery format—really, truly matters.

      </p>

      <p>
        In short, we’re on a mission to educate parents all over the world that every child needs omega-3s as part of a healthy foundation. So with that said, here’s a look at the new Nordic Naturals children’s products, available in stores and online this month:

      </p>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1505424524/web/new-products-two-bottles.jpg">
      <p>
        <h2>1) Children’s DHA™ Xtra (<a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1783" target="_none">liquid</a> and <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1784" target="_noen">soft gels</a>)</h2>
      </p>

      <p>
        With so few kids getting adequate amounts of omega-3s from their food, we thought it was important to offer a formula that increases support for this critical nutrient. Found in high concentrations in our brains and eyes, omega-3 DHA is a key nutrient for healthy cognitive and nervous system development.* Both omega-3 EPA and DHA are found in virtually all our cell membranes, making them equally important for overall health.* Children’s DHA Xtra effectively doubles the amounts of DHA in our popular <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1442" target="_none">Children’s DHA™</a> product, giving kids ages 1 to 6 even greater support for healthy development.*

      </p>

      <p>
        Our liquid formula is recommended for ages 1-3, while our soft gels are recommended for ages 3-6. Both have a new, natural berry punch flavor.

      </p>

      <center>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1505369178/web/omega-focus-jr.png" style="width: 340px"/>
      </center>

      <h2>2) <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1786" target="_none">Omega Focus Junior</a></h2>

      <p>
        Helping children focus and stay on task academically is a concern for just about every parent today. We decided it was time to lend kids (and parents) some nutritional support on this front. Our new Omega Focus Junior blends concentrated, DHA-rich fish oil with phosphatidylcholine (sourced from herring roe, not soy), L-carnosine, magnesium, and zinc. In combination, these nutrients help support attention, focus, calm, and learning in children ages 6-18.*

      </p>

      <p>
        Something I learned in talking to our product development team about this one-of-a-kind product: the magnesium and zinc in this formula are chelated glycinates, meaning they are are attached to glycine, an amino acid, to help make the minerals easy to absorb.

      </p>

      <center>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1505369178/web/ultimate-omega-2x-teen.png" style="width: 340px"/>
      </center>
      <h2>3) <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1785" target="_none">Ultimate Omega® 2X Teen</a></h2>
      <p>
        Just because your child reaches adolescence doesn’t mean his or her brain has stopped growing. In fact, your child’s brain will likely continue to grow well into his or her early 20s. This means that omega-3s EPA and DHA still play critical roles in your teen’s healthy cognitive development.* The problem is, teens are busy people prone to skipping meals and snacking on whatever’s at hand rather than seeking out nutritious fare. Our new Ultimate Omega 2X Teen gives teens a way to get those all-important omega-3s without too much effort (or excuses). Each strawberry-flavored, mini-sized soft gel packs a teen-sized serving of our highest concentration fish oil.
      </p>
      <center>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1505369179/web/probiotic-pixies.png" style="width: 340px" />
      </center>
      <p>
        <h2>4) <a href="https://nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1787" target="_none">Kids Nordic Flora Probiotic Pixies</a></h2>
      </p>

      <p>
        Probiotics seem to be everywhere these days, and for good reason. Research is continually linking digestive health to immune health and overall wellness.* Given the frequency with which my child typically gets sick in the winter, this new probiotic formula definitely caught my attention. It’s a healthy twist on the pixie sticks you probably remember from your own childhood—a delicious powder that melts on your tongue. Only this powder is actually nutritious, as well as being fun to eat. Our new Kids Nordic Flora Probiotic Pixies contains 3 billion CFU of two powerful, research-backed probiotic strains shown to support kids’ immune and respiratory health.* If that means fewer seasonal bugs at our house, then I’m already a fan.
      </p>

      <p>
        Like all our probiotic formulas, this one is shelf stable (meaning it doesn’t need refrigeration), with strains that are proven to survive passage through the harsh environment of the digestive tract. And, like every product we make at Nordic Naturals, it’s also non-GMO and third-party tested for potency and purity.

      </p>

      <p>
        Our <a href="http://www.nordicnaturals.com/children" target="_none">five new products</a> (counting DHA Xtra twice, since it comes in both liquid and soft gels) will start to be available beginning this week. Go check them out!
      </p>

      <p>
        <small>
          <i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i>
        </small>
      </p>
        `
      },
      {
        id: 17,
        category: 'all-about-science',
        categoryText: 'ALL ABOUT SCIENCE',
        author: 'TERRA LYNN',
        postUrl: 'skin-health-from-the-inside-out',
        title: 'Skin Health from the Inside Out',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1504210714/web/blog-assets/skin-health-main.jpg',
        contentPreview: 'There’s a lot going on beneath the surface of our skin. Here’s what you can do—beyond applying lotions and sunscreens—to nourish and care for this critical organ.',
        content: `
        <p>
          Skin is your body's largest organ, accounting for as much as <a href="https://www.livescience.com/32939-how-much-does-skin-weigh.html" target="_none">16% of your body weight</a>. Inch by inch, your skin adds up to an impressive 22 square feet. What you might not realize about this hard-working organ is that it is also constantly renewing itself—at a rate of about 30,000-40,000 cells per minute. And it does this for decades.
        </p>

        <p>
          More than just a flexible covering for our muscles, organs, and bones, our skin shields us from harmful bacteria and alerts our immune system when bacteria breaches that shield. Our skin helps keep us warm, signals our bodies to sweat when we get overheated, and is responsible for our keen sense of touch.
        </p>

        <p>
          What can you do to take care of your skin, beyond moisturizing and protecting it with sunscreens and lotions? As it turns out, there are some important ways to take care of your skin from the inside. Understanding how your skin works is the first step in knowing how to give it the nourishment it needs.

        </p>
        <h2>How Your Skin Works</h2>
        <p>
          Skin is composed of two main layers, the epidermis and the dermis. The epidermis is the outer layer of skin that you can see and feel—it serves as your body’s first barrier of protection from harmful bacteria, viruses, and pollutants. Your epidermis contains specialized immune cells that identify harmful microbes and prevent them from entering your body. The epidermis also contains melanin, the pigmentation that gives skin its color, and helps prevent the absorption of UV rays.
        </p>
        <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1504219143/web/blog-assets/skin-anatomy-2.jpg">
        <p>
          The much thicker dermis is the inner layer of skin, just beneath the epidermis. Made up of collagen, elastin, and fibrillin (a component of connective tissue), the dermis provides nutritional and structural support for the epidermis. It is where the blood vessels, hair follicles, oil glands, and sweat glands in our skin are located.
        </p>

        <p>
          The dermis helps regulate your body temperature, and contains the sensitive nerve endings that allow you to interpret and interact with the world around you. It’s here, in the dermis, that new cells are constantly produced to replace old cells in the epidermis as they are sloughed off at the surface. The hard-to-reach dermis is where nourishment from the inside really matters.
        </p>
          <h2>Feeding Your Skin</h2>
        <p>
          Eating a balanced, nutrient-rich diet, getting a good night’s sleep, and managing your stress levels are all important lifestyle habits for taking care of your skin, and your body in general. But there are several nutrients known to play a big part in skin health—here are just a few your skin will thank you for:
        </p>
          <h2>Water</h2>
        <p>
          Your skin is made up of cells, and your cells are <a href="https://www.ncbi.nlm.nih.gov/books/NBK9879/" target="_none">made up of approximately 70% water</a>. Adequate water intake helps maintain your body’s homeostasis, and helps your body remove and excrete metabolic wastes. Without adequate water intake, your skin can’t function at its best. How much is enough?  The Food and Nutrition Board of the National Academy of Sciences sets <a href="http://www.nationalacademies.org/hmd/Reports/2004/Dietary-Reference-Intakes-Water-Potassium-Sodium-Chloride-and-Sulfate.aspx" target="_none">general recommendations</a> of 91 ounces of total water each day—from all beverages and foods—for women, and 125 ounces of total water each day for men.
        </p>
          <h2>Probiotics</h2>
        <p>
          Over the past decade, scientists and researchers have made great progress in understanding <a href="http://nordicnaturals.com/blog/all-about-science/fermented-foods-and-probiotics-your-ticket-to-a-healthy-microbiome/" target="_none">the role of probiotics</a> in human health. Many of us know that probiotics are good for our gut, but research increasingly shows that the health benefits of probiotics can extend far beyond the gut to other parts of our bodies. Recent studies suggest that <a href="https://www.ncbi.nlm.nih.gov/pubmed/24583611" target="_none">probiotics in the gut have the potential to influence the health of the skin</a>, and that probiotics have the capacity to optimize, maintain, and restore the microbiota of the skin in a variety of different ways.*
        </p>
          <h2>Essential Fats EPA, DHA, & GLA</h2>
        <p>
          Omega-3s EPA and DHA, along with omega-6 GLA, are essential fats that play such an important role in skin health that <a href="http://lpi.oregonstate.edu/mic/health-disease/skin-health/essential-fatty-acids" target="_none">deficiency in these nutrients is often first visible in the skin.</a>* That’s because our skin can synthesize some fatty acids, such as saturated fatty acids and monounsaturated fatty acids, but can’t synthesize the long-chain essential fatty acids EPA, DHA, and GLA. We must get these essential fats from foods or supplements.

        </p>

        <p>
          EPA, DHA, and GLA are found in the cell membranes that surround skin cells—really, all the body’s cells—where they help carry important nutrients into our cells, and carry waste out.* These essential fats also help our skin retain its moisture, and evenly distribute melanin that protects against age-related free radical and oxidative damage. And, they assist in healthy skin cell turnover.*

        </p>

        <p>
          Supplementing with <a href="http://www.nordicnaturals.com/en/General_Public/Omega-3,6,9_combinations/363" target="_none">EPA and DHA from fish oil and GLA from borage oil</a> can benefit all skin types and help support healthy skin function.* These fats are best taken together, since the benefits of GLA increase when it is taken with EPA and DHA.
        </p>

        <p>
          Keeping your skin healthy on the inside goes a long way toward staying healthy overall. And that’s a beautiful thing.

        </p>

        <p>
          <small>
            <i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i>
          </small>
        </p>

        <p>
          <small>
            References:<br>
Clin Dermatol. 2010 Jul-Aug;28(4):440-51. <br>
J Oleo Sci. 2011;60(12):597-607.<br>
Am J Clin Nutr. 2000 Jan;71(1 Suppl):361S-6S.<br>
Lipids. 1994 Dec;29(12):825-9.<br>
J Nutr. 2000 Aug; 130(8): 1925-31.<br>
<a href="https://www.ncbi.nlm.nih.gov/pubmed/28631091" target="_none">Arch Dermatol Res.</a> 2017 Aug;309(6):411-421.<br>
<a href="https://www.ncbi.nlm.nih.gov/pubmed/24583611" target="_none">Benef Microbes.</a> 2014 Jun 1;5(2):99-107.

          </small>
        </p>
        `
      },
      {
        id: 16,
        category: 'home-life',
        categoryText: 'HOME LIFE',
        author: 'NICK NOLOBOFF',
        postUrl: 'reading-writing-and-omega-3s',
        title: 'Reading, Writing, and Omega-3s',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1503443522/web/blog-assets/post-images/reading-writing-omega-main.jpg',
        contentPreview: `One way to support your kids as they head off to school is to make sure they’re getting enough essential nutrients like omega-3 fats. Here’s how omega-3s can affect your  child’s success with both social and academic tasks.*`,
        content: `
        <p>
          After a long summer, there’s nothing quite like heading back to school. The anticipation. The shopping. That secret guilt you feel because junior is <i>finally</i> off your hands again. It’s okay. We’ve all been there.

        </p>

        <p>
          Kidding aside, with all that the new school year brings, it’s important not to overlook your child’s health. If there’s any time that kids are susceptible to stress, this is it.  Changes in environment, playmates, and daily routines add fresh challenges to young immune and nervous systems.

        </p>

        <p>
          One way to support your kids as they head off to learn is to make sure they’re getting adequate amounts of nutrients like omega-3s. Omega-3 fatty acids are critical to help each of us keep up good health, and they can have a significant impact on children’s success with both social and academic tasks.*
        </p>

        <p>
          A bit of background: Omega-3s are called “essential” fatty acids because they are needed for optimal health but our bodies can’t make them.* The only way to get enough is through diet. Ideally, this means routine consumption of omega-rich foods like cold-water fish, and taking a <a href="http://www.nordicnaturals.com/en/General_Public/Children's_Omegas/473" target="none">daily fish oil</a> (or algae oil) supplement.

        </p>
        <h2>Omega-3s for childhood development </h2>
        <p>
          Childhood is a period of rapid growth, especially brain growth. From birth to age two kids’ brains double in size. Spurts of development also occur around ages 7, 8, and 9, and then again during mid-adolescence. And when it comes to brain health, science has pointed for a while now in a pretty clear direction toward the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3738999/" target="_none">benefits of omega-3s across childhood</a>.* These nutrients—particularly the major omega-3 fats EPA and DHA—are important to both the brain’s structure (DHA is a major component of the cerebral cortex) and its function (DHA and EPA are linked to mood and cognition).* Young eyes and developing nervous systems are also big beneficiaries of these essential fats.*

        </p>

        <p>
          Recent research has focused on omega-3 status and children’s concentration, reading ability, behavior, intellectual development, and general academic performance. It’s probably safe to say that omega-3s influence kids’ ability to think and learn from conception right through adolescence.* And on top of the potential cognitive and neurological benefits, let’s not overlook the significance of academic success to a child’s self-esteem, motivation to learn, and overall social well-being. Any one of these is an excellent reason to prioritize good nutrition throughout the school year.

        </p>

        <p>
          <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1503357603/web/blog-assets/post-images/reading-writing-omega-body.jpg">
        </p>
        <h2>Important fats in short supply</h2>
        <p>
          Unfortunately (but not surprisingly) most children do not eat enough oily, cold-water fish to get optimal amounts of omega-3s. This can be due to the limited availability of fresh fish in many places, or simply because of its cost. Even for families fortunate enough to make fish a common feature at mealtime, anyone with kids knows they can be pretty picky eaters.

        </p>
        <p>
          On a societal level, the industrial food chain also puts omega-3s out of kids’ reach. The generally balanced intake of omega-3 and omega-6 fats that people got from foods of the past has been radically changed by factory farming and industrialization, which offers us processed foods and grain-fed meats that contain huge amounts of omega-6. This matters because omegas 3 and 6 compete for limited space in cells. When omega intake is imbalanced, the fat in shortest supply loses out.

        </p>

        <p>
          All this adds up to a solid conclusion: <a href="http://jn.nutrition.org/content/139/3/528.full" target="_none">Schoolchildren simply don’t get adequate omega-3s on a regular basis</a>.

        </p>
        <h2>Nutritional wisdom for your scholastic superstar</h2>

        <p>
          This information should help you feel a bit more confident tackling your own child’s nutrition. But don’t be too confident—kids are still opportunists. Give them the choice between sweets and salmon and it’s no contest. Children have to learn how to make good food choices, and this starts at home. Here are a few things to try:

        </p>

        <p>
          <b>1)</b>	If possible, offer cold-water fish like salmon, cod, or halibut a few times a week. Kids often have to try a food many times before it takes. Packed lunches are another opportunity to try these in fish sandwich form (e.g. salmon can stand in for tuna salad).

        </p>

        <p>
          <b>2)</b> First impressions really matter, so choose a top-quality fish oil product that tastes good to kids. I can tell you from experience, it is possible. Some kids like to bite into soft gels. Others like flavored liquids. For those who like neither, great-tasting alternatives exist in gummy and emulsion forms.
        </p>

        <p>
          <b>3)</b> Make it a routine. Kids like consistency, and you can easily make a daily supplement part of that. If children see mom or dad taking a supplement, it’ll feel less burdensome (same goes for eating fish).

        </p>

        <p>
          Every bit of good nutrition adds up, so even if you skip fish one week, or forget the omega-3s on busy days, feel good about the times you do give your kids these added nutrients. These small steps will help them make this school year one to remember.

        </p>

        <p>
          <small>
            <i>
              *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </i>
          </small>
        </p>
        `
      },
      {
        id: 15,
        category: 'all-about-science',
        categoryText: 'ALL ABOUT SCIENCE',
        author: 'TERRA LYNN',
        postUrl:'eclipse-inspired-tips-for-lifelong-healthy-vision',
        title: 'Eclipse-Inspired Tips for Lifelong Healthy Vision',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1502491768/solar-eclipse-main.jpg',
        contentPreview: `Get ready for a once-in-a-lifetime total eclipse of the sun. The spectacle reminds us how important healthy habits are for eye health, and how to protect eyes from other potentially damaging sources of light.
        `,
        content: `<p>
          On Monday, August 21st, beginning just after 10:15 a.m. PDT, it will get dark enough that city lights will turn on, the temperature will cool slightly, and some nocturnal creatures will start to stir. It’s a total eclipse of the sun, the first anyone has seen in 99 years.
        </p>

        <p>
          This once-in-a-lifetime event will be visible within a 70-mile-wide path across the country, stretching from the Oregon coast to the beaches of South Carolina. Even those of us who are not within the path of totality (<a href="https://eclipse.gsfc.nasa.gov/SEmono/TSE2017/TSE2017.html" target="_none">check the geographic map on NASA’s website</a>) will still get an impressive show, as over 80% of the sun will be eclipsed by the moon.
        </p>

        <p>
          A total solar eclipse is one of nature’s most awe-inspiring sights, one that ancient civilizations regarded as a heavenly sign. It’s also an event that comes with a warning—don’t look directly at the sun as it is eclipsed, as this could damage your eyesight. These warnings have me thinking more about my eyes, and how we need to protect them for a lifetime.

        </p>

        <p>
          Nowadays, one of the first things we can do to maintain healthy vision is to be aware of our exposure to blue light. Blue light has become an increasingly important topic over the last several years as our collective use of digital devices has steadily increased. It’s a fact of modern living—many of us spend a good portion of our days (and nights) looking at digital screens. And that means our eyes are more exposed than ever to blue light.


        </p>



        <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1502491768/solar-eclipse-body.jpg" />

        <p>
          <h2>When Your Eyes Get the Blues</h2>
        </p>

        <p>

About 30% of sunlight is blue light—light rays spanning a spectrum of colors make up the rest. Each color along the spectrum is associated with a particular wavelength. Longer wavelengths are less energetic, while shorter wavelengths are more energetic. Blue light’s shorter wavelengths and higher energy rays scatter more easily in the atmosphere than other visible light rays, which is why the sky looks blue on clear days. It’s also why we get eyestrain when looking at computer screens that emit a lot of blue light. These shorter, more energetic wavelengths can cause a flickering effect that makes it harder to focus, which can be exhausting for the eyes.
  </p>
  <p>
Some blue light exposure is actually beneficial, as blue light plays important roles in regulating our circadian rhythms that support a healthy sleep cycle. Too much exposure too late at night, however, can have the opposite effect. Blue light is often used in light therapy to support alertness and mood.
</p>
<p>
The eye’s cornea and lens naturally block harmful UV light. But blue light passes right through these initial guardians and reaches the light-sensitive retina, where overexposure can be harmful. Sources of blue light are now everywhere, from energy-efficient bulbs and compact fluorescent lights (CFLs) that illuminate our homes to the light-emitting diodes (LEDs) that illuminate our smart phones, tablets, laptops, computers, e-readers, and television screens. This increased exposure to blue light has many <a href="http://2014.thevisioncouncil.org/content/blue-light-exposure-and-digital-eye-strain/adults" target="_none">researchers concerned about the short-term and long-term effects of blue light on eye health</a>.
        </p>

        <p>
          <h2>Ways to Limit Blue Light Exposure</h2>
        </p>

        <p><b>1. Use filters for screens and devices</b></p>

        <p>
        A number of products for your phone/device can help block blue light. Physical screen protectors that attach to the screen of your phone or device screen and filter out blue light are one option. Digital apps that, once installed on your phone/device, tint your screen to neutralize blue light are another option. Many of these apps also automatically adjust the light emitted by your screen according to the time of day, your geographical location, and the seasonal position of the sun.
      </p>

      <p>
        <b>2. Wear computer glasses and special lenses</b>
      </p>

      <p>
        “Computer glasses” are available that have yellow-tinted lenses, which help block blue light from entering your eyes. Glasses with special anti-reflective lenses are a related option; they reduce glare, increase contrast, and limit blue light while using computers and other digital devices.
      </p>

      <p>
        <b>3. Get plenty of lutein, zeaxanthin, and omega-3s</b>
      </p>
      <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1502747452/solar-eclipse-body-2.jpg">
      <p>
        Lutein and zeaxanthin are dietary carotenoids. When we consume them, they’re deposited in the retina of our eyes, where they help filter out blue light. While the typical diet provides 1-2 mg lutein, research suggests that we need 10 mg of lutein and 2 mg of zeaxanthin each day for optimal health.* Omega-3s are essential fatty acids. The omega-3 DHA is especially important for the eyes, and is more concentrated in eye tissue than in any other part of our bodies. Our bodies don’t make lutein, zeaxanthin, or omega-3s, so these eye-friendly nutrients must be consumed through diet or <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1495" target="_none">supplementation</a>.
      </p>

      <p>
        A lot has changed in the world since the last coast-to-coast total solar eclipse 99 years ago. Among those changes is the kind of light our eyes are exposed to now, which is quite different than it was in previous eras. Being mindful of our exposure to blue light is one simple thing we can all do to proactively support our eye health.
      </p>



        <p>
          <small><i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i></small>
        </p>

        <p>
          <small>
          References<br>
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/26900325" target="_none">Mol Vis.</a> 2016 Jan 24;22:61-72.<br>
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/20355006" target="_none">J Sci Food Agric.</a> 2010 Jan 15;90(1):2-12. doi: 10.1002/jsfa.3785.<br>
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/15555528" target="_none">Prog Retin Eye Res.</a> 2005 Jan;24(1):87-138.
          </small>
        </p>
        `
      },
      {
        id: 14,
        category: 'the-nordic-way',
        categoryText: 'THE NORDIC WAY',
        author: 'NORDIC NATURALS STAFF',
        postUrl: 'inside-nordic-naturals-meet-kerry-pro-sports-line-mvp',
        title: 'Inside Nordic Naturals: Meet Kerry, Pro Sports Line MVP',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1501868760/web/blog-assets/post-images/kerry-main.jpg',
        contentPreview: `If you love football, then you and our Sports and Fitness Product Category Manager, Kerry Gobei, already have something in common. Read her perspective on working behind the scenes in the pro sports world, and hear how she takes time out to recharge.`,
        content: `<p>
          <i>
          If you love football, then you and our Sports and Fitness Product Category Manager, Kerry Gobei, already have something in common. Read her perspective on working behind the scenes in the pro sports world, and <a href="#embed-container">hear how she takes time out</a> to recharge.
        </i>
        </p>

        <p>
          <b>Name:</b> Kerry Gobei<br>
          <b>Role:</b> Sports and Fitness Product Category Manager<br>
          <b>Years with Nordic Naturals:</b> 6
        </p>

        <p>
          <b>What do you do at Nordic Naturals, and what do you like best about your job?</b>
        </p>

        <p>
          I work with just about every department here at Nordic Naturals to make our <a href="http://www.nordicnaturals.com/en/General_Public/NSF_Sport_Products/1194" target="_none">NSF Certified Sport</a> product line available to professional athletes, collegiate teams, major league baseball, and elite military. I spend a lot of time building relationships with coaches and dieticians, helping them educate the people in their organizations on the science behind omega-3s and recognize nutrition as a component of performance.
        </p>

        <p>
          We have a lot of championship team customers, and I take a lot of pride in helping the athletes do their jobs. Because professional sports may look glamorous and entertaining, but it’s really grueling. Just to be able to offer something to help them is pretty rewarding.
        </p>

        <p>
          <b>Where did you grow up, and how has that place influenced you?</b>
        </p>

        <p>
          A lot of college athletes get scholarships to go to school, and they come from low income areas and environments that may have been unstable. Their talent gives them opportunity that they wouldn’t have otherwise. And I can relate to that. I grew up outside of Detroit, during a time of real violence and conflict. Being an athlete helped keep me focused and disciplined, and being part of a team helped me feel safer.  I think I got my work ethic from Detroit, too, because everybody there works really hard. Detroit is also a place that teaches you resilience. You learn how to pick up, brush off, and keep going.
        </p>

        <p>
          <b>What personal accomplishment are you most proud of?</b>
        </p>

        <p>
          I would say raising my kids is my biggest accomplishment. I have three kids, and my oldest is now 28. He’s a Sargeant in the Marines, getting ready to deploy on his third tour in Afghanistan.
        </p>

        <p>
          <b>What is something about you that few people know? Do you have a hidden talent?</b>
        </p>

        <p>
          I’m a serious gardener. That’s what I do in my free time. I’ll do a hardscape and drop posts in and do shrubbery to create really big privacy screens. It’s not like I’ll just go out and plant a few flowers! I pretty much designed and built my backyard. To me it’s a living space—literally.
        </p>

        <p>
          <b>What Nordic Naturals products do you take? Any observations you’d like to share?</b>
        </p>

        <p>
          I take the <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1656" target="_none">Ultimate Omega-3-D3 Sport</a>, <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1734" target="_none">Nordic CoQ10 Ubiquinol Sport</a>, <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1724" target="_none">Vitamin D3 5000</a>, and <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1767" target="_none">Nordic Flora Probiotic Comfort</a>. And I take <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1413" target="_none">DHA</a>. That’s my daily regimen. I think my supplementation is part of why I’m a very healthy person. When I get stressed I really feel it in my gut, especially when I travel. I definitely think the probiotics help with that.
        </p>
        <p>
          <b>Video Question: What does living “healthfully” mean to you?</b>
        </p>
        <p>
          <div id="embed-container"><iframe src="https://player.vimeo.com/video/228726103" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div>
        </p>`
      },
      {
        id: 13,
        category:'home-life',
        categoryText: 'HOME LIFE',
        author: 'NICK NOLOBOFF',
        postUrl: 'time-to-get-a-move-on-joint-health',
        title: 'Time to Get a Move on Joint Health',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1501788656/web/blog-assets/post-images/joint-health-main.jpg',
        contentPreview: `
        We all feel the effects of time in different ways. Your joints, especially, can make you feel your age. Here’s how to handle the news that you’re not as young as you used to be—and keep on moving on.
        `,
        content: `
        <p>
  It’s an unspoken secret of middle age: Nobody admits they feel differently than they used to, though everyone does. When you can’t fool yourself any longer, you must grudgingly acknowledge body parts. You notice your back because it’s now sore after a day of yard work. You discover your knees while jogging. You didn't even know your groin had muscles, until you pulled one. You get the idea.
</p>
<p>
  So, what to do when this begins to happen? First, realize that even if you think you’re still 20, your body doesn’t. After that, you can pretty much get back to business, with a better mindset toward maintaining long-term health. Second, make sure you’re getting enough omega-3s.

</p>
<h2>Why Omega-3s for Healthy Joints</h2>
<p>
There’s a lot of evidence that omega-3 fats are great for joints, even though most people think heart health when they hear “omega-3s.”  Marine-based omega-3s (not omega-3s from flaxseed, for example) are masters at helping the body respond to inflammation, right down to the cellular level.* This is ideal for your body’s more than 300 joints, where repetitive movement introduces friction that can cause gradual wear and tear.
</p>
<p>
  As you probably know, inflammation is a protective mechanism that keeps the clusters of bones, muscles, and connective tissues insulated against further movement, and potential harm. Of course, too much inflammation can be a problem. That’s why it’s so important for your body to be able to address acute inflammation after exercising.

</p>
<h2>Bodies in Motion</h2>
<p>
Each year around this time, Nordic Naturals sponsors the <a href="http://www.seascapesportsclub.com/challenger" target="_none">Challenger Tournament</a> in Aptos, California, where spectators are treated to some serious tennis (Andy Murray was the singles champ years ago). With tennis being the talk of the town, I contacted former pro and coach Brad Weston to get his take on training and nutrition.
</p>
<div class="embedded-image left">
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788656/web/blog-assets/post-images/joint-health-body.jpg">
<p><small><i>Brad Weston, tennis coach and former pro player, working the court at Seascape Sports club, where the annual Challenger Tournament is held. </i></small></p>
</div>

<p>
“Professional athletes simply wear out their joints from thousands of repetitive movements,” Weston told me. “When they experience too much pain and inflammation it can have a devastating effect on performance.”
</p>
<p>
I asked about the rest of us. Should we really be concerned by a little tennis elbow?
</p>
<p>
  “When people feel discomfort, they start to overcompensate and put their bodies in unnatural positions,” he explained. “This greatly increases the chance of injury. From one painful area, it can create another.”

</p>
<p>
  My takeaway: Athlete or not, it’s important to keep joints working well, as even small injuries can compound into larger problems.

</p>

<h2>First-Hand Experience Meets First-Rate Research</h2>
<p>
You could say that Nordic Naturals itself is the result of one man’s passion for pain-free movement. Company’s founder and CEO Joar Opheim is a native of Norway, and a former gymnast. When he moved to the U.S. he lost access to the fresh Norwegian cod liver oil he was raised on, and quickly noticed how his daily omega-3 regimen had been benefiting his hard-working joints.* Like many of us, he only began to notice body parts when they weren’t working like they used to.
</p>
<p>
Science generally confirms Joar’s experience. The benefits of increased consumption of omega-3s are documented by numerous clinical studies. It’s worth noting that many of these studies use higher amounts than what’s found in a typical serving of fish oil. For joint health, 2,000–3,000 milligrams (2–3 grams) daily is not uncommon.* For customers, this typically means looking for products with highly concentrated amounts of EPA and DHA, the most beneficial omega-3 fats.*
</p>
<p>
  A whole lifetime of joint movement is impossible to quantify, but it’s safe to say that at some point you’ll start to notice your joints. Now is as good a time as ever to make the right moves to keep your body working well.

</p>
<p>
<small>
  <i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i>
  <br><br>
  Proudman SM, Cleland LG, James MJ. Dietary omega-3 fats for treatment of inflammatory joint disease: efficacy and utility. Rheum Dis Clin North Am. 2008;34(2):469-79.
<br><br>
  Goldberg RJ, Katz J. A meta-analysis of the analgesic effects of omega-3 polyunsaturated fatty acid supplementation for inflammatory joint pain. Pain 2007;129:210–223.
<br><br>
  Calder PC. n-3 Polyunsaturated fatty acids, inflammation, and inflammatory diseases. Am J Clin Nutr 2006;83:S1505–1519S.
<br><br>
  Maroon JC, Bost JW. Omega-3 Fatty acids (fish oil) as an anti- inflammatory: an alternative to nonsteroidal anti-inflammatory drugs for discogenic pain. Surgical Neurology 2006;65:326–331.
<br><br>
  Curtis CL, Harwood JL, Dent CM, et al. Biological basis for the benefit of nutraceutical supplementation in arthritis. Drug Discov Today. 2004;9(4):165-72.


</small>
</p>
        `
      },
      {
        id: 12,
        category: 'all-about-science',
        categoryText: 'ALL ABOUT SCIENCE',
        author: 'JERILYN SWINDLE',
        postUrl: 'fermented-foods-and-probiotics-your-ticket-to-a-healthy-microbiome',
        title: 'Fermented Foods and Probiotics: Your Ticket to a Healthy Microbiome',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1501788901/web/blog-assets/post-images/probiotic-main.jpg',
        contentPreview: `
        People have been eating fermented foods as far back as 6,000 BC. There’s a reason for that—fermented foods naturally contain the friendly bacteria our bodies needs to thrive.* What exactly do these little bugs do for us, and why are fermented foods and probiotics so essential?
        `,
        content: `
        <p>
  Societies around the world have been preparing and eating fermented foods as far back as 6,000 BC. They knew that fermenting made food last longer, and helped them digest their meals. But what they didn’t know is that fermented foods naturally contain friendly bacteria our bodies need to thrive.* What started as a way to preserve food has turned out to be much, much more.
</p>

<p>
I’ve been an avid home-fermenter for almost a decade. I regularly make all kinds of ferments: flavored water kefirs, goat milk kefir, fermented vegetables, and even condiments like catsup and chutney. My son loves the lightly sweet-and-tangy water kefir soda I make with black cherry juice. He calls it “good bug drink,” and I’m thrilled that this flavorful “soda” is his drink of choice.
</p>

<p>

  I first became interested in probiotics twenty years ago after my own health issues started demanding my attention. I had practically grown up on antibiotics, so when my immune system began to go haywire, I thought perhaps the place to start supporting my immune system was in my gut.* I also knew that the very best way to support my gut was with the right kind of friendly bacteria. Probiotic foods and supplements became the single most transformative thing I’ve ever done for my body. Eventually, I became curious about their history and why they are so good for us.
</p>
<p><img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788897/web/blog-assets/post-images/probiotic-body.jpg" /></p>
<p>
Nearly every civilization includes fermented food in their culinary heritage. Almost any food can be fermented, and some prominent examples include Korean kimchi, Indian chutney, European sauerkraut, and Middle Eastern yogurt and cheese. Asian cultures ferment soybeans, seafood, black beans, sauces, and side dishes. This natural fermentation process began as a means of food preservation, allowing people to store food for weeks, months, and sometimes years. It also removed natural toxins from foods like cassava, making them safe to consume.
</p>

<p><h2>Probiotic Powerhouses</h2></p>

<p>
The beneficial yeasts and bacteria, abundant in fermented foods, protected people against foodborne illness which was prevalent due to the lack of proper food hygiene. Prior to the invention of the microscope, people didn’t know why fermented foods seemed to be good for them. But they may have suspected that fermenting—in addition to keeping foods from spoiling—actually imparted some noticeable health benefits. In fact, the recognized link between fermented foods and vibrant health started back in ancient Rome and China. The benefits of fermented food remain of great interest in modern science as well, although the message around probiotics has changed quite a bit.
</p>

<p>
  Twenty years ago, the message was simple: Yogurt is good for you. Eat it!
</p>
<p>
  Later, the question arose: Why is yogurt so good for me?
</p>
<p>
  Today science replies: Good microbes are essential to health.*
</p>

<p>
Today, we know that eating fermented foods and supplementing with <a href="http://www.nordicnaturals.com/en/General_Public/Probiotics/1318" target="_none">probiotics</a> are great ways to support a healthy microbiome (the abundance of friendly bacteria that lives in your digestive tract and other parts of your body). And, we have some strong scientific evidence to back up why that’s important.*
</p>

<p>
Ideally, we would get these friendly microbes with our food and drink. They would provide small, daily doses of probiotics along with prebiotics, natural fibers that promote gut health and survival of good bacteria. If we consumed a great variety of foods (including probiotic foods), they would provide a diversity of microbes.
</p>

<p>
Different species of microbes exist in different locations throughout our bodies—on our skin, in our mouths, in our urinary tracts, and in our small and large intestines, for example. A healthy diversity provides a variety of needed species as well as a vibrant microbial balance.* This is the way nature intended. Unfortunately, most of us don’t eat this way. Even a healthy modern diet rarely includes an abundance of, or a variety of, fermented foods. To make matters worse, the colonies of beneficial microbes we do have are greatly affected by everyday things like:
<ul>
  <li>Antibiotics</li>
  <li>Stress</li>
  <li>Aging</li>
  <li>Alcohol</li>
  <li>Excess caffeine</li>
  <li>Processed foods</li>
</ul>

<p>
  Fortunately, there’s plenty we can do to support our beneficial microbes and build a healthy, diverse microbiome. Science helps us dig deeper and understand why a healthy microbiome is so important.
</p>

<p>
  <b>Bacteria with Benefits</b>
</p>

<p>
  Beneficial bacteria help us by pre-digesting food that it ferments, which transforms the nutrients we get from foods into highly bioavailable (readily useful) forms.* These little powerhouses can even manufacture nutrients like B-vitamins (helpful with stress and energy production) and <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1775" target="_none">vitamin K2</a> (crucial to bone health).* They also reduce the amount of sugar in foods by consuming some of that sugar during the fermentation process. And, they help us absorb vital nutrients from the foods we eat.* But as impressive as these benefits are, the role that good bacteria play in our health is even larger. Here are just a few examples:
</p>

<p>
  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4367209/" target="_none">Brain Function and Mood</a>
</p>

<p>
  Research clearly shows a connection between our gut and brain via the complex central nervous system. Not only does the brain influence the type of bacteria that thrives in our gut, but that bacteria, in turn, influences the function of the brain.* This relationship is reflected in research showing an association between dysbiosis (microbial imbalance) and mood-related behaviors.* It’s a truly mutual relationship that benefits from a strong microbial landscape in our digestive system.*
</p>

<p>
  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3276397/" target="_none">Immune Health</a>
</p>

<p>
  Along with the close relationship between the brain and the gut, these bacteria also influence our immune system. Essentially, the bacteria in our gut communicate with very specialized immune cells in our gut lining.* These cells promote the production of active immune cells throughout our body.* Balance is crucial to this system because imbalance can result in an over- or under-active immune response.* Neither of these responses is ideal. We want our immune system to be well informed and functioning just right for every situation. Our microbiome plays a crucial role in that balance.*
</p>

<p>
  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3263193/" target="_none">Healthy Weight</a>
</p>

<p>
  A healthy microbial balance promotes other healthy states related to our weight. It helps us feel full after eating meals, promotes the production of Conjugated Linoleic Acids (CLAs are helpful in maintaining ideal fat-to-lean ratios), supports a healthy lining in our digestive tract, and contributes to healthy abdominal fat distribution.* All of these things play an essential role in our quest to maintain a healthy weight and body.
</p>

<p>
In the last few decades, it has become clear to me that probiotics and probiotic foods are truly essential components of a healthy diet. Whether we’re talking about the nutrients in our food or supplements, it’s not enough to just ingest them. To reap the benefits of any nutrient, we must properly digest and absorb it through the gut wall.
</p>

<p>
Once you realize how crucial good bacteria are to that very process, and so many others, there’s no turning back. I know I couldn’t turn back, and I hope you can’t either.
</p>
<p>
  <small>
    <i>
*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
    </i>
  </small>
</p>
<p>
<small>
  References:<br>
  Ann Gastroenterol. 2015 Apr-Jun; 28(2): 203–209<br>
 Mol Med. 2012; 18(1): 95–110<br>
 Indian J Endocrinol Metab. 2012 Jan-Feb; 16(1): 20–27
</small>
</p>
        `
      },
      {
        id: 11,
        category: 'home-life',
        categoryText: 'HOME LIFE',
        author: 'NICK NOLOBOFF',
        postUrl: 'how-to-marie-kondo-your-medicine-cabinet',
        title: 'How to Marie Kondo Your Medicine Cabinet',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1501788657/web/blog-assets/post-images/medicine-cabinet.jpg',
        contentPreview: `
        Our medicines take on lives of their own because it’s hard to imagine we might not need them again some day. But not all medicines—or supplements—are worth saving. Here’s how to decide what makes the cut, and spark some Marie Kondo joy in your cabinet.
        `,
        content: `
        <p>
If the standard for saving something is, as tidying guru <a href="http://www.konmari.com/" target="_none">Marie Kondo</a> advises, “what brings you joy,” then my medicine cabinet is an epic fail.
</p>
<p>
I don’t know about you, but I’ve got an impressive collection of outdated meds. A small sampling brings back some not-so-happy memories. I once might have pawned my wedding ring for a little sleep, courtesy of that bottle of very expired grape NyQuil. Or for a chalky dribble of Calamine Plus that momentarily saved me from the agony of poison oak. Ditto for my son’s Children’s Pain & Fever, with cough suppressant. No price would’ve been too high to soothe a sick toddler.
</p>
<p>
Our medicines take on lives of their own because it’s hard to imagine we might not need them again some day. But not all medicines are worth saving—trust me, four-year-old NyQuil is pretty nasty stuff! As for supplements, it’s also worth asking yourself which ones you really need. Truth is, most people can pare down to the essentials.
</p>
<p>
Yes, each one of us has our own nutritional needs that change with time, and that sometimes require an atypical array of nutrients. But most of us can benefit from just a handful of daily supplements: a good multivitamin, high-quality omega-3 fish oil, probiotics. And for folks who don’t get enough sun exposure—sounds crazy, I know—vitamin D.  Now, you may recall that these are all nutrients that Nordic Naturals sells, so at the risk of seeming shamelessly biased, give me a chance to explain why they’re KonMari keepers.
</p>
<p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788654/web/blog-assets/post-images/palm-tree-min.png" />
</p>
<p>

<h2>Vitamin D</h2>
</p>
<p>
Until recently, I had no idea that <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4018438/" target="_none">vitamin D deficiency is a major problem throughout the world</a>. For those of us living in the Sunshine State, it’s not the first thing we think of in the morning. But many places north and south of the equator get only a fraction of the sunlight that Floridians enjoy year round. Geography, combined with poor diet, long hours working indoors, sunscreen use (still a good idea), and for many women, breastfeeding (another good idea), has meant that vitamin D deficiency has slipped under the radar in many societies. Fortunately, it’s easily solved with supplementation. For most people, <a href="https://medlineplus.gov/magazine/issues/winter11/articles/winter11pg12.html" target="_none">400–800 IU daily does the trick</a>.
</p>
<p>
<h2>Omega-3 fish oil</h2>
</p>
<p>
With omega-3s it’s hard to know where to begin. Omega-3s are known as essential fatty acids. They’re "good" fats. Fats considered essential for optimal health. Unfortunately, people can’t synthesize omega-3s the way they can vitamin D. So, we must obtain them through diet or supplementation. Fish and algae oils abound in the long-chain omega-3s EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid), which are the best ones.
</p>
<p>
It’s impossible to sum up the benefits documented in 8000+ clinical studies on omega-3s, but the shortlist includes: cardiovascular health, cognition and mood, joint mobility, immune system function, vision, brain and nervous system development, healthy pregnancy, and more.* As I’ve written elsewhere, a weekly diet of cold-water fish plus a daily serving of <a href="http://www.nordicnaturals.com/en/General_Public/Omega-3_concentrates/361" target="_none">high-quality fish oil</a> is the way to go. Keep this supplement front and center in your medicine cabinet.
</p>
<p>
<h2>Probiotics</h2>
</p>
<p>
For a long time, probiotics were the dark horse of supplements. Kinda fringe. Questionably beneficial (It’s bacteria, after all).  But fermented foods have been around for millennia, and some of the healthiest people in the world have been eating them for that long—just ask Koreans (e.g. kimchi) and Japanese (e.g. miso, natto). Apart from the proactive benefits of fermented foods, the need for supplemental probiotics has tracked alongside our ballooning use of antibiotics, which tend to decimate all life in our digestive tracts while they treat the germs they’re prescribed for. <a href="http://www.nordicnaturals.com/en/General_Public/Probiotics/1318" target="_none">Probiotics</a> help repopulate colonies of digestive flora that are lost to this process, and that help support not only healthy digestion but also normal immune function.*
</p>
<p>
<h2>Multivitamins</h2>
</p>
<p>
Okay, objectivity aside, one reason you should take a multivitamin is because our <a href="http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1759" target="_none">Nordic Berries</a><sup>™</sup> are so darn good. But beyond that, a good multivitamin can help fill in nutritional gaps in your diet. It’s a great nutritional catch-all for people who don’t get what they should through diet. And it’s amazing how hard it is to consistently hit the nutritional mark due to busy schedules, travel, choosiness, etc. (It’s not just kids who have food preferences, you know). Consider that guidelines recommend up to 10 servings of fresh fruits and veggies daily. A good multivitamin ensures that nothing essential falls through the cracks.
</p>
<p>
So, bottom line: Even if you live by the KonMari method of ruthlessly excising anything from your life that does not bring you joy, these handful of supplements should still make the cut. After all, what’s more joyful than staying healthy?
</p>
<p>
<small><i>
*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
</i></small>
</p>
        `
      },
      {
        id: 10,
        category: 'the-nordic-way',
        categoryText: 'THE NORDIC WAY',
        author: 'TERRA LYNN',
        postUrl: 'seven-ways-we-put-sustainability-into-action',
        title: 'Seven Ways We Put Sustainability into Action',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1501788655/web/blog-assets/post-images/stacked-stones.jpg',
        contentPreview: `
          Almost every company these days is talking about sustainability—and that’s a good thing. Here’s how Nordic Naturals makes sure our own business practices reflect our passion for health.
        `,
        content: `
        <p>
  Almost every company these days is talking about sustainability—and that’s a good thing. Because just as each of us has an impact on the environment and the world around us, so does every company.  The difference is really whether we as individuals and companies care about the impact we have, and as a result, choose to do things a little differently.
</p>
<p>
  We talk a lot about sustainability here at Nordic Naturals, and how we can continue to make the very best products available while also continuing to lessen our environmental impact. So what, exactly, does that look like in action? Here are seven ways we prioritize sustainability, every day.

</p>
<p>
<h2>1. We use only non-endangered, wild-caught fish</h2>
</p>
<div class="video-container" id="vid" style="margin-bottom: -26px"><iframe width="560" height="315" src="https://www.youtube.com/embed/Ujc3bLUwqbo" frameborder="0" allowfullscreen></iframe></div>
<p>
  Because we source so many of our products from the sea, we’ve always been concerned with protecting the health of our oceans. That’s why we select only those species that are not at risk of being overfished (Arctic cod, anchovies, and sardines), and why we use only wild-caught, as opposed to farm-raised, fish.

</p>
<p>

<h2>2. We source exclusively from certified sustainable fisheries</h2>
</p>
<center><img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788654/web/blog-assets/post-images/friend-of-the-sea.jpg" /></center>
<p>
  We only work with fisheries that are certified sustainable by <a href="http://www.friendofthesea.org/" target="_none">Friend of the Sea</a>, an internationally recognized, non-profit organization whose mission is to conserve the global marine habitat. This means that all of our fish comes from waters that are certified sustainable, and all of our products are FOS-certified sustainable. And, it means all of the fisheries we work with meet the following requirements:
</p>
<p>
  <ul>
<li>Fish is sourced from stocks that are not overexploited</li>
<li>Fishing practices prevent bycatch of endangered species</li>
<li>Fishing practices prevent seafloor damage and reduce ecosystem impact</li>
<li>Manufacturing reflects energy efficiencies to conserve resources and minimize
    pollution</li>
<li>Company upholds high standards for waste management and social accountability</li>
</ul>
</p>

<p>

<h2>3. We run our green manufacturing facility in Norway on biofuel</h2>
</p>
<p>
  <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788653/web/blog-assets/post-images/nordic-pharma-2.jpg" />
</p>
<p>
We built our state-of-the-art manufacturing facility in Norway using recycled materials, incorporating structures from an old shrimp processing plant in our original design to conserve resources and minimize our impact on the immediate environment and community. Located right on the harbor in Tromsø, our 60,000-square-foot manufacturing facility runs completely on biofuel we make ourselves using leftover fats from our fish oil processing. This recycled biofuel not only minimizes our carbon footprint, it helps power other local businesses in Tromsø as well.
</p>
<p>

<p>
<h2>4. We built our headquarters to be LEED<sup>®</sup> Gold-certified </h2>
</p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788656/web/blog-assets/post-images/sustainability-main.jpg" />
</p>
<p>
It’s not just our manufacturing facility in Arctic Norway that’s green—our company headquarters in Watsonville, California is, too. It earned Gold certification from the U.S. Green Building Council’s LEED<sup>®</sup> (Leadership in Energy and Environmental Design) Rating System, which promotes a whole-building approach to sustainability, recognizing performance in both human and environmental health. Built in 2011, our 87,000-square-foot headquarters includes skylights, radiant heating, recycled building materials, flexible lighting controls, water purification systems, and water conservation measures that reduce our water use by nearly 50 percent.
</p>
<p>
<h2>5. We use only non-GMO verified ingredients</h2>
</p>
<p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788654/web/blog-assets/post-images/product-shot.jpg" style="width: 100%"/>
</p>
<p>
  We’ve always been committed to using only non-GMO ingredients, and to maintaining full transparency about how the ingredients in our products are made. We work with Eurofins, a globally recognized leader in GMO testing, to rigorously test <i>all</i> ingredients across our entire product line for the absence of GMOs. Eurofins has been a pioneer in the field of molecular biological analyses for more
than 20 years, and adheres to strict European standards to ensure the absence of GMOs.
</p>
<p>
<h2>6. All of our product containers and packaging are recyclable</h2>
</p>
<p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788654/web/blog-assets/post-images/recycle-bin.jpg" />
</p>
<p>
  We bottle our liquid formulas in glass, and our soft gels in #2 plastic containers—both of which are commonly picked up by most curbside recycling programs. We also use recyclable packaging wherever possible in shipping our products. And, we recently added more box sizes in our warehouse so that we can ship our products in appropriately sized boxes with minimal packaging.
</p>
<p>
We know that this is a big area where we can improve our sustainability, so we’re looking into ways to incorporate biodegradable plastics and post-consumer waste into our bottling and shipping. We’ve also made the switch to offering more eco-friendly promotional items, like our branded lip balms packaged in cardboard, bamboo utensils, and reusable cloth sandwich bags.
</p>
<p>
<h2>7. We support organizations that do good</h2>
</p>
<p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788653/web/blog-assets/post-images/nordic-group-shot.jpg" />

</p>
<p>
  As a company that makes  omega-3 fish oil, among other nutrients essential to health, we know that our presence is felt in the oceans where we source our fish, and in the communities where we make and distribute our products. We see it as our responsibility to do right by the people and the places that are part of our success, and one of the ways we do that is by supporting nonprofits that practice good environmental and social stewardship. Among the organizations we currently sponsor are <a href="https://www.5gyres.org/" target="_none">The 5 Gyres Institute</a> (a global nonprofit dedicated to keeping single-use plastics out of our oceans), <a href="http://www.bbbs.org/" target="_none">Big Brothers Big Sisters</a>, and <a href="http://www.thefoodbank.org/" target="_none">The Second Harvest Food Bank</a>.
</p>
<p>
We recognize that sustainability is a journey, and that prioritizing sustainability is a choice we all make, each day. With this in mind, we do our best to make sure our daily business practices reflect our passion for health.
</p>
<p>
  Have ideas on how we can do better? Let us know! Email your suggestions to <a href="mailto:blog@nordicnaturals.com">blog@nordicnaturals.com</a>.

</p>
<p>
<i>Nordic Naturals staff contributed to writing this post.</i>
</p>
        `
      },
      {
        id: 9,
        category: 'the-nordic-way',
        categoryText: 'THE NORDIC WAY',
        author: 'TERRA LYNN',
        postUrl: 'midnight-sun-and-white-nights-what-summer-in-arctic-norway-can-teach-us-about-sleep',
        title: 'Midnight Sun and White Nights: What Summer in Arctic Norway Can Teach Us about Sleep',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1501788653/web/blog-assets/post-images/midnight-sun-main.jpg',
        contentPreview: `
          The constant light of Arctic summer and the irresistible pull of longer, activity-filled days can make getting enough sleep challenging. Turns out, Norwegians can teach us a thing or two about avoiding sleepless nights here in our corner of the world.
        `,
        content: `
        <p>
  Some of the best things about summer are the longer, activity-filled days. And nowhere are the days of summer longer than in Arctic Norway—a place near and dear to our hearts here at Nordic Naturals.

</p>
<p>
In fact, this time of year the sun never sets at all for many Norwegians. In Nordkapp, one of the northernmost points in Europe, the sun doesn’t set for 75 days each summer. In the endless daylight off the Lofoten Islands, you can watch the sun “set” just above the horizon before watching it start to rise in the sky again—a phenomenon known as “midnight sun.”
</p>
<p>
Even below the Arctic Circle, summer nights in Norway aren’t all that dark.  At the relatively southern latitude of Oslo, twilight is as dark as it gets from May to July. For Oslo residents—and many Norwegians—summer is the season of “white nights.” Although the sun does set below the horizon there, it never gets quite low enough to turn the sky black.
</p>
<p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788658/web/blog-assets/post-images/midnight-sun-body-1.jpg" /><br>
<i style="font-size: .8em">A glimpse of the midnight sun rising at 2:00 AM in Krystad, Lofoten. Photo credit: Joar Opheim</i>
</p>
<p>
The constant light of the Arctic summer certainly inspires increased activity and energy, especially after a long, dark winter in which Norwegians don’t see the sun much, if at all. But it can also make getting sleep and adequate rest more challenging, since light is the strongest external cue that affects our bodies’ internal clocks/circadian rhythms.
</p>
<p>
This can be a health issue, as there are few things more essential to mind/body health than restorative sleep, and few things more essential to sleep than darkness. Without darkness, our sleep-inducing bodily processes simply don’t get signaled.
</p>
<p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788657/web/blog-assets/post-images/midnight-sun-body-2.jpg" /><br>
<i style="font-size: .8em">Night swimming in the West Norwegian fjords in Krystad, Lofoten. In the summertime, bedtime can be as late as 5:00 AM for founder Joar Opheim and his family.  Photo credit: Joar Opheim</i>
</p>
<p>
So how do Norwegians manage to get enough sleep during the summer months near the Arctic Circle? What could we learn from them, even if we don’t live at the top of the world? We increasingly spend more time on gadgets, which means we get less sleep ourselves, and less darkness. Here are a few strategies we can all use to help establish and maintain healthy sleep habits, even if we don’t personally experience the midnight sun and white nights of summer in Arctic Norway.
</p>
<p>
<h2>1. Simulate night</h2>
</p>
<p>
Since darkness doesn’t naturally occur during the Arctic summer, many Norwegians create it themselves—with eye masks, covered window glass, blackout curtains, and the like. They know that avoiding exposure to evening light is the most important key to being able to sleep well. That’s because the part of our brain that regulates our circadian rhythms (called the suprachiasmatic nucleus or SCN) is located at the intersection of our optic nerves, where light and darkness signal the processes that wake us up and make us sleepy. Without darkness, our brains aren’t signaled to produce the melatonin that makes us sleepy and keeps us asleep. By simulating darkness, we can prompt these natural processes and encourage better sleep.
</p>

<p>
<h2>2. Keep to a consistent sleep schedule</h2>
</p>
<p>
Many Norwegians also make an effort to stay on a consistent sleep schedule despite the constant light during the summer months—especially waking up at, or close to, the same time everyday. When we are forced into a schedule, as anyone with children knows, it's easier to ensure we are getting enough sleep. Waking up at a consistent, relatively early time each morning is especially important, as it will naturally discourage you from staying up too late. As people in Arctic Norway can attest, just because you can go hiking at 1 AM doesn’t necessarily mean you should!
</p>
<p>
<h2>3. Ban gadgets from the bedroom</h2>
</p>
<p>
Smart phones, laptops, tablets, and TV all emit blue light, which is precisely the kind of light that is most disruptive to our circadian rhythms at night. Since avoiding exposure to evening light (and especially blue light) is the single most important thing we can do to promote better sleep, banning these devices from the bedroom, or at least shutting them off at a scheduled time a couple of hours before bed, can go a long way towards ensuring that we get the restful sleep that’s so essential to health.
</p>
<p>
<h2>4. Exercise and eat well</h2>
</p>
<p>
Getting regular exercise and eating a healthy diet can also help sleep cycles. Exercising as early in the day as possible can make it easier to unwind in the evening. Minimizing caffeine and sugar intake, especially within several hours of bedtime, can help too. Also try to avoid alcohol; while it may help you fall asleep initially, it can cause you to wake during the night and make it difficult to fall back asleep. Taking supplements (including fish oil) is a good idea, since our bodies require adequate levels of many nutrients in order to produce the melatonin, other hormones, and neurotransmitters that regulate our circadian rhythms. Taking your supplements early in the day can help make sure they don’t disrupt your sleep at night.
</p>
<p>
<h2>5. Relax</h2>
</p>
<p>
When we’re having a hard time sleeping, it often causes us to worry and spend a lot of time thinking about it, which then increases our stress and makes it even harder to sleep, leading to a seemingly never-ending cycle that can be hard to break. But,  while stress may be inevitable, how we deal with it does not have to be. Work towards learning to deal with stress in more healthy ways to unwind and get a good night’s sleep.
</p>
<p>
Adapting to the circumstances of life near the Arctic circle is nothing unusual in Norway. Whether they face endless daylight in summer, or endless darkness in winter, people living at high latitudes embrace these extremes as opportunities to thrive. We can all learn something from their approach, adapting to the stressors and extremes of our own lives in ways that don’t keep us up at night, no matter where we live.
</p>
        `
      },
      {
        id: 8,
        category: 'home-life',
        categoryText: 'HOME LIFE',
        author: 'NICHOLAS NOLOBOFF',
        postUrl: 'omega-3s-why-theyre-especially-important-for-mens-health',
        title: 'Omega-3s: Why They’re Especially Important for Men’s Health',
        imageUrl: 'http://res.cloudinary.com/nordic-naturals/image/upload/v1501788657/web/blog-assets/post-images/mens-health-main-image.jpg',
        contentPreview: `
          No one likes a trip to the doctor—the sniffly, germy waiting rooms, nurses with clipboards, those emasculating gowns. Men especially hate going. Kinda like how your dog hates going to the vet. Here’s my strategy: I try really hard not to go.
        `,
        content: `
        <p>
  No one likes a trip to the doctor—the sniffly, germy waiting rooms, nurses with clipboards, those emasculating gowns. Men especially hate going. Kinda like how your dog hates going to the vet. Here’s my strategy: I try really hard not to go.
</p>
<p>
  If you also dislike doctor’s visits, you’ve got good reason to start taking omega-3s (a.k.a. essential fatty acids). Rarely do you find a nutrient as broadly beneficial as omega-3s.* Why? Because these essential fats make up the 60-100 trillion cell membranes found throughout your body, from toes to nose. Plus they’ve been shown by countless studies (actually, 8000+ clinical studies) to help maintain many aspects of health, from immune and metabolic health, to cognitive, joint, and even eye health.* But for men, especially, the big one is the heart.

</p>
<p>
  As most people know, cardiovascular disease is the leading cause of death among Americans, but men face this health risk earlier in life than women do. According to <a href="http://www.health.harvard.edu/heart-health/heart-attack-and-stroke-men-vs-women" target="_none">Harvard Medical School</a>, men are, on average, seven years younger than women when they suffer their first heart attack.  Which means there’s less time for men to put off heart-healthy lifestyle changes. The time to act is now.
</p>
<p>
  <h2>Health Food for Your Heart</h2>
</p>
<p>
  Eat well and exercise, right? You’ve heard it before. We all need to be more active and cut way down on the nachos and fried foods—that’s a given. But one valuable, easy-to-follow suggestion on the diet-side is to consume more heart-healthy omega-3 fats.
</p>
<p>
  Here’s a little trade secret to convince you: The FDA is pretty strict about what omega-3 brands can claim about their products. Supplements are not drugs, they tell us. They’re not cures for disease. They’re nutrients—food, essentially. But the one area where the FDA gives us more room to talk about our fish oils is in relation to heart disease. That’s because there’s so much evidence that omega-3s can benefit the heart that it would be a detriment to public health to keep people in the dark.
</p>
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788655/web/blog-assets/post-images/salmon.jpg">
<p>


  <a href="http://atvb.ahajournals.org/content/23/2/151" target="_none">The American Heart Association agrees</a>. They recommend 1,000 mg of omega-3 EPA+DHA per day for people with documented coronary heart disease. For folks with high triglycerides they recommend far more: 2,000–4,000 mg per day. What percentage of people do you think actually follow these recommendations? I have no idea either, but given that <a href="https://health.gov/dietaryguidelines/2015-scientific-report/pdfs/scientific-report-of-the-2015-dietary-guidelines-advisory-committee.pdf" target="_none">90% of Americans are deficient in omega-3s</a>, it’s probably pretty small.

</p>
<p>
  <h2>Easy Insurance</h2>
</p>
<p>
  The upshot is this: If men hope to avoid those silly hospital gowns, a good first step is to stay healthy by consuming a lot more omega-3s. We should all eat wild-caught, oily fish like salmon, sardines, cod, mackerel, and anchovies each week. But really, how many of us do this with any regularity? Omega-3s must be constantly replenished because they are always used by cell membranes. For this reason, it’s important to supplement daily with high-quality fish oil to fill in any nutritional gaps and to make sure you’re getting a steady source of omega-3 fats.
</p>
<p>
  There’s no way to completely avoid trips to the doctor, but a daily serving of fish oil is a pretty easy insurance policy.



</p>
<p>
  <small>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</small>

</p>
        `,
        ref1title: "Inside Nordic Naturals: Meet Derek, International Music Maker",
        ref1category: "kultur",
        ref1url: "inside-nordic-naturals-meet-derek-international-music-maker",
        ref1img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/derek.png",
        ref2title: "Why Natural-Form Fish Oils are Better for Your Body—and Your Wallet",
        ref2category: "all-about-science",
        ref2url: "why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/capsules-and-fish.jpg"
      },
      {
        id: 7,
        category: 'all-about-science',
        categoryText: 'ALL ABOUT SCIENCE',
        author: 'CLAUDIA BURGIN',
        postUrl: 'vitamins-d3-k2-a-dynamic-bone-building-plaque-fighting-duo',
        title: 'Vitamins D3+K2: A Dynamic Bone-Building, Plaque-Fighting Duo',
        imageUrl: 'http://www.nordicnaturals.com/dev/blog-assets/post-images/vitamin-d3-k2.jpg',
        contentPreview: `
          While almost everyone has heard of vitamin D3, not many people know about the bone-building and cardiovascular benefits of vitamin K2. We thought we would break it down for you as best we could.
        `,
        content: `
        <p>
Our new <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1775" target="_none">Vitamin D3+K2 Gummies</a> for adults combines two essential nutrients for supporting bone health in a single, tasty gummy.* But while almost everyone has heard of vitamin D3, not many people know about the bone-building and cardiovascular benefits of vitamin K2. So we thought we would break it down as best we could.
</p>
<p>
<h2>From doorman to foreman</h2>
</p>
<p>
Vitamin D3, among other important functions, helps your body absorb calcium and phosphorous—vital bone-building minerals—from the foods you eat. It “pulls” calcium and phosphorous from your gut and your kidneys into your bloodstream, where it can be ushered to other parts of the body (namely, your bones). Think of vitamin D3 as the doorman for your body’s calcium intake.
</p>
<p>
Vitamin K2, also known as menaquinone-7, helps direct the calcium in your blood away from your arteries (where it can hang out and cause problems) to your bones, where it’s needed for the never-ending work that is constructing new bone tissue. Think of vitamin K2 as the foreman for your body’s building site.
</p>
<p>
It’s how these two nutrients work together that’s so compelling. The doorman lets the calcium in, and the foreman puts it to good use building bones. And, in directing calcium away from your arteries where it can accumulate and contribute to plaque, vitamin K2 can actually support heart health in addition to bone health.*
</p>
<p>
Something you might not know about your bones—they’re constantly being rebuilt over time. This process is called remodeling, and it occurs in response to mechanical and hormonal signals. During childhood, bone metabolism is at peak production; but by the time you hit your early twenties, your bones are no longer actually growing. They are, however, constantly changing. And that’s because bone itself is dynamic, living tissue.
</p>
<p>
<h2>About your bones</h2>
</p>
<p>
The skeletal system, made up of 206 bones, is literally the foundation of health. Made mostly of collagen and calcium phosphate, bones hold and protect your organs, and serve as attachment points for muscles. Your bones also produce red and white blood cells and act as a reservoir for important minerals.
</p>
<div class="embedded-image left" style="width: 68%">
<img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788654/web/blog-assets/post-images/bone-graphic.png">
<span style="padding-left: 28px; padding-right: 28px; display: inline-block">In a healthy body, osteoclasts and osteoblasts work together to maintain the balance between bone loss and bone formation.</span>
</div>
<p>
Bone cells called osteoblasts are responsible for building bones—they secrete the collagen that is needed to form the matrix, or structural frame, for building new bone. Conversely, osteoclasts are bone cells that are responsible for breaking down old or injured bone; they secrete an enzyme that dissolves the collagen matrix that osteoblasts create. The idea is that this constant process of remodeling results in a completely new skeleton for you every 7 to 10 years.
</p>
<p>
The catch is, as we get older our bodies produce fewer osteoblasts—which means we have fewer cells to build new bone. By age 40, we’ve already started <a href="http://orthoinfo.aaos.org/topic.cfm?topic=a00127" target="_none">losing bone mass</a>. This is why fractures may take longer to heal, and why we’re more prone to fractures in the first place. It’s also why eating a healthy diet and getting regular exercise (<a href="https://www.nichd.nih.gov/health/topics/bonehealth/conditioninfo/Pages/activity.aspx" target="_none">weight-bearing exercise causes new bone to form</a>) become particularly important lifestyle choices as we age.
</p>
<p>
<h2>Putting calcium to good use</h2>
</p>
<p>
Your body needs calcium to build bone, and vitamin D3 helps your body absorb calcium. So even if you’re getting enough calcium in your diet, it might be going to waste if you’re not also getting enough vitamin D. The American Academy of Orthopaedic Surgeons recommends that adults over the age of 50 get at least 1,000 mg calcium daily, and 1000 IU vitamin D daily.
</p>
<p>
Phosphorous, magnesium, and vitamins A, C, and K are also important nutrients for bone health. <a href="https://www.ncbi.nlm.nih.gov/pubmed/11684396" target="_none">Vitamin K</a>, best known for its role in helping blood to clot, has been gaining more attention in the scientific community for its role in binding newly absorbed calcium to the mineral matrix in bone—as well as directing calcium away from our arteries and soft tissues, where it definitely isn’t wanted.
</p>
<p>

  <img src="http://res.cloudinary.com/nordic-naturals/image/upload/v1501788654/web/blog-assets/post-images/calcium-deposits.jpg">
</p>
<p>


These <a href="http://www.health.harvard.edu/womens-health/calcium-beyond-the-bones" target="_none">unwanted calcium deposits</a> (shown microscopically in the above image) can damage our hearts by contributing to plaque in the walls of our arteries. This plaque, made up of fat, cholesterol, and calcium, can harden over time and eventually restrict blood flow. Not a healthy scenario by any measure. Best to help this wayward calcium find it’s way out of your bloodstream, and into your bones where it belongs.
</p>
<p>
And that’s where our new <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1775" target="_none">Vitamin D3+K2</a> Gummies come in handy. Let’s face it, this dynamic, bone-building, plaque-fighting  vitamin duo is pretty easy to love.
</p>

 <p>
<i>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</i>
</p>
        `,
        ref1title: "Inside Nordic Naturals: Meet Derek, International Music Maker",
        ref1category: "kultur",
        ref1url: "inside-nordic-naturals-meet-derek-international-music-maker",
        ref1img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/derek.png",
        ref2title: "Why Natural-Form Fish Oils are Better for Your Body—and Your Wallet",
        ref2category: "all-about-science",
        ref2url: "why-natural-form-fish-oils-are-better-for-your-body-and-your-wallet",
        ref2img: "http://www.nordicnaturals.com/dev/blog-assets/post-images/capsules-and-fish.jpg"
      },
      {
        id: 6,
        category: "the-nordic-way",
        categoryText: "THE NORDIC WAY",
        author: "Nordic Naturals Staff",
        postUrl: "inside-nordic-naturals-meet-derek-international-music-maker",
        title: "Inside Nordic Naturals: Meet Derek, International Music Maker",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1501788655/web/blog-assets/post-images/derek.png",
        contentPreview: `
          If you buy Nordic Naturals products from one of our overseas distributors, you might have indirectly crossed paths with our very own Derek Bodkin. Read our interview with Derek here, and watch him whistling on stage at the 2016 Redwood Ramble music festival.
        `,
        content: `
        <p><i>If you buy Nordic Naturals products from one of our overseas distributors, you might have indirectly crossed paths with our very own Derek Bodkin. Read our interview with Derek here, and <a href="#vid">watch him whistling on stage at the 2016 Redwood Ramble music festival</a>.</i></p>
      <p><b>Name:</b> Derek Bodkin</p>
<p><b>Role:</b> International Sales Account Coordinator</p>
<p><b>Years with Nordic Naturals:</b> 5.5</p>

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
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1501788656/web/blog-assets/post-images/little-ones-main-image.jpg",
        contentPreview: `
          Few things can be more frustrating than getting a child to eat what we parents consider healthy foods. Years of mealtime anxiety motivated me to come up with a few creative strategies to coax my picky eater to broaden his eating choices. Here’s what worked for me:
        `,
        content: `
          <p>Few things can be more frustrating than getting a child to eat what we parents consider healthy foods. My biggest “mommy fail” moments seem to revolve around the dinner table when I see my 3-year-old refuse to eat anything that doesn’t involve pasta, bread, or rice.</p><p>Yet as our pediatrician often reminds me, it’s actually <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3474391/" target="_none">developmentally appropriate for preschoolers to refuse foods</a> we give them. And it’s wise to look at what kids eat over the course of a week rather than a single day before worrying about their eating habits.</p><p>That said, the food struggles at our house motivated me to come up with a few good tricks for tempting my picky eater to try new foods every now and then. Here’s what has (mostly) worked for me:</p><p><h2>1. Have your child help you cook.</h2> Stirring, measuring, cracking eggs, sprinkling spices—kids are curious creatures, and are often happy to get involved in meal prep. I’ve found that my preschooler is a whole lot more willing to eat something if he feels he’s had a hand in making it.</p><p><h2>2. Start the meal with a healthy snack.</h2> As a first course, I often give my child a whole baby carrot (I buy them with the tops still on so they look more interesting). I peel it and hand it to him while he’s waiting for me to prep the rest of his meal. Nine times out of ten, he eats it. He’s also been known to nosh on green (pitted) olives and cucumber wedges pre-dinnertime.</p><p><h2>3. Disguise your protein.</h2> Surprisingly, my child turns his nose up at popular kid favorites like meatballs and chicken strips. But I’ve mixed canned salmon in with mac ‘n cheese with some success. And I’ve learned to love Sloppy Joes (my son loves the soft texture), because it’s a good way to get him to eat grass-fed beef, along with some hidden grated zucchini.</p><p><h2>3. Offer rejects regularly.</h2> Apparently, kids need to be exposed to new foods repeatedly before they will decide to like them. Some experts say it takes 10 – 15 “tastes” before a kid will accept a new food into his repertoire. The key seems to be not to react if the food you serve gets rejected. Still working on this one…</p><div class="embedded-image left" style="width: 70%;"><img src="http://www.nordicnaturals.com/dev/blog-assets/post-images/little-ones-content-image.jpg" ></div><p><h2>5. Get creative with it.</h2> Kids love food that’s fun to eat. Whether it’s arranging food in colorful rainbows, or dressing up veggies to look like faces, your creative efforts might just pay off. Also, many moms have had success serving proteins and vegetables with healthy dips like hummus, pesto, or marinara sauce. This hasn’t yet worked at my house (unless you count ketchup as a healthy dip), but it hasn’t deterred me from trying.</p><p><h2>6. Use peer pressure.</h2> It’s true, kids are more likely to eat foods they see other kids eating and enjoying. If you know a mom whose kid loves a wide range of foods, invite that family over to dinner. Chances are your child will pay close attention to what the other kids are eating.</p><p><h2>7. Grow with them.</h2> Even if you don’t have a yard, you can grow cherry tomatoes, lettuces, and other edibles in a pot. Seeing food grow can help kids make the connection between the food we buy in the grocery store, and where that food actually comes from. And hopefully, seeing some of Mother Nature’s magic will be captivating enough to tempt your child to try a few new veggies.</p><p><h2>8. Make supplements part of your daily routine.</h2> You might be rolling your eyes at this point (here comes the pitch!) at this point. But honestly, I feel much better giving my kid a <a href="http://www.nordicnaturals.com/en/Products/Product_Details/98/?ProdID=1411" target="_none">good daily multivitamin</a> and a dose of <a href="http://www.nordicnaturals.com/en/General_Public/Children's_Omegas/473" target="_none">children’s omega-3s</a> in the morning to fill in the nutritional gaps. We also on occasion add a <a href="https://www.nordicnaturals.com/en/General_Public/Children's_Gummies/475" target="_none">vitamin D or vitamin C gummy</a>, depending on the time of year and whether or not I think he may be coming down with a cold, and a <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1747" target="_none">kid’s probiotic</a>. It’s easy to give him these as he’s eating breakfast, and now he actually asks for his vitamins every morning. A good lifelong habit in the making, I say.</p>
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
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1501789704/web/blog-assets/post-images/cosmo-post-main-image.jpg",
        contentPreview: `
          When <i>Cosmopolitan</i> magazine published a story advising their readers to skip their omega-3 supplements, we felt we should share what we know about fish oil and its well-established safety and health benefits.
        `,
        content: `
          <p><i>Cosmopolitan</i> magazine recently published an article advising their readers which vitamins and supplements they should keep taking, and which ones they could probably skip.</p><div class=\"embedded-image right\"><img src=\"http://res.cloudinary.com/nordic-naturals/image/upload/v1501789691/web/blog-assets/post-images/cosmo-cover-terra-post2.jpg\" ></div><p>While we were thrilled to see <i>Cosmo</i> raising awareness about the importance of nutritional supplements, we were disheartened to see that omega-3s and fish oil made their “definitely stop taking” list. We of course wanted to respond, and contribute some useful information about fish oil and its well-established safety and health benefits.</p><p>Here’s our response to each of the points the <i>Cosmo</i> <a href=\"http://www.cosmopolitan.com/health-fitness/a8349732/do-you-really-need-to-take-vitamins/\" target="_none">article</a> makes:</p><p><h2>1. Omega-3 fish oil supplements “act as potentially dangerous blood thinners.”</h2></p><p>First, it’s important to note that omega-3 fish oil will not prevent your blood from coagulating. Omega-3 fish oil has been shown to help inhibit blood platelet clumping, blood vessel constriction, and the production of blood-clotting proteins—all of which can be understood as blood-thinning actions. On the other hand, when we consider that a diet rich in processed foods promotes exactly the opposite effects—i.e., increased blood platelet clumping, constriction of blood vessels, and blood-clotting proteins—we can see that the actions of omega-3 fish oil are more accurately understood as restoring a healthy balance between blood-thinning and blood-clotting.</p><p>So does this make fish oil supplements potentially dangerous? The answer is no. For the overwhelming majority of people, the blood-thinning actions of omega-3 fish oil should be seen as potentially beneficial rather than potentially dangerous. If you currently take blood-thinning medications or if you anticipate surgery, we recommend consulting with your healthcare provider before taking any supplement.</p><p><h2>2. Most omega-3 fish oil supplements “are high in vitamins A and D that you can’t eliminate easily, so they could build up and make you sick.”</h2></p><p>Are omega-3 fish oil supplements high in vitamins A and D? The answer depends on what type of omega-3 fish oil you are talking about: Fish oil is extracted from the whole body of the fish and contains only trace amounts of vitamins A and D, which are generally lost during the purification process. For this reason, some manufacturers will add vitamins A and D to their fish oil products. So it’s always important to read supplement labels. Arctic cod liver oil, which is extracted from the livers of fish, does contain small amounts of naturally occurring vitamins A and D, even after purification.</p><p>We’ve always used only 100% Arctic cod livers in our cod liver oil products. Our <a href="https://www.nordicnaturals.com/en/General_Public/Arctic_Cod_Liver_Oil/378">Arctic Cod Liver Oils</a> have low, healthy levels of fat-soluble vitamin A typically averaging 650–1,500 IU of vitamin A per serving, which falls in the low range compared to other products. (<a href="https://www.nap.edu/read/10026/chapter/1" target="_none">The recommended daily allowance of vitamin A for adults</a> as established by the US Institute of Medicine of the National Academy of Science is 3,000 IU for men and 2,300 IU for women.)</p><p>When it comes to vitamin D, neither fish oil nor cod liver oil supplements naturally contain high levels. The real concern with vitamin D is getting enough. There’s an emerging consensus among the medical and scientific community that <a href="https://www.hsph.harvard.edu/nutritionsource/vitamin-d/#vitamin-d-deficiency-a-global-concern" target="_none">vitamin D deficiency</a> is an under-recognized epidemic. (It’s why we offer many of our <a href="https://www.nordicnaturals.com/en/General_Public/Vitamin_D3_formulas/365" target="none">products</a> with the option of added vitamin D.)</p><p>The American Academy of Pediatrics recently <a href="https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Vitamin-D-On-the-Double.aspx" target="_none">doubled its vitamin D recommendations</a> for infants, children, and adolescents, and a whole new generation of vitamin D research continues to show just how critical vitamin D is to every aspect of health. We use vitamin D3 (cholecalciferol) in our products because it’s the most easily absorbed form of vitamin D, and the form our bodies naturally make from sunlight.</p><p><h2>3. “Eat fish and use olive oil instead” of taking omega-3 fish oil supplements.</h2></p><p>While we wholeheartedly support <i>Cosmo’s</i> advice to get our nutrients from fresh foods instead of supplements whenever possible, we also recognize that often it simply isn’t possible to consume enough of the health-promoting nutrients we need from food alone. Omega-3s are a good example. To get 1,000 mg of the beneficial omega-3s EPA and DHA found in fish oil, you’d have to eat 2/3 of a can of sardines—every day! We don’t know about you, but two soft gels a day of our concentrated <a href="https://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1428" target="_none">Ultimate Omega</a><sup>®</sup> omega-3 fish oil sure does seem a lot easier to swallow.</p>
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
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1501788655/web/blog-assets/post-images/refuse-reduce-reuse-compressor.jpg",
        contentPreview: "Ocean \"smog\" created from the disposable plastics we all throw away has become a huge concern. Right now, there are some 270,000 tons of trash swirling around the world's oceans in giant, tangled heaps.",
        content: `
          <p>Ocean \"smog\" created from the disposable plastics we all throw away has become a huge concern. Right now, there are some 270,000 tons of trash swirling around the world's oceans in giant, tangled heaps. Ocean waves break these plastics down into smaller and smaller pieces, endangering the surrounding marine life as fish and birds either digest the plastic debris, mistaking it for food, or become entangled in it. Some of the plastic toxins they digest even make it up the food chain into the fish many of us eat. That’s right—we’re eating the plastic trash, too. One study found that <a href=\"http://www.ecowatch.com/25-of-fish-sold-at-markets-contain-plastic-or-man-made-debris-1882105614.html\" target=\"_none\">one-quarter of all fish sold in California markets had microplastics and fibers in their guts</a>. </p><p> Cleaning up the trash with some sort of floating, supersized garbage truck may sound like an obvious fix, but these vast islands of plastic trash—water bottles, straws, caps, food wrappers, bags, chunks of old, unrecognizable gadgets and toys—can’t just be collected and taken away. The disintegrating plastics permeate our oceans just like smog permeates our air. We can’t really filter it out. We have to stop the ocean smog at its source—us.</p><p>Here are 10 things we can all do today to help clean up our oceans—courtesy of <a href=\"http://www.5gyres.org\" target=\"_none\">The 5 Gyres Institute</a>, a non-profit dedicated to empowering all of us to take action in response to this unhealthy scenario. We at Nordic Naturals are inspired, and proud to sponsor and support <a href=\"https://www.5gyres.org/\" target=\"_none\">5 Gyres</a> in spreading the word.</p><h5>How Can We Help?</h5><p><h2>1.</h2> Swear off plastic bags. Stash some reusable bags in your car, or carry a backpack or tote bag with you.</p><p><h2>2.</h2> Carry a reusable water bottle. Don’t buy bottled water—<a href=\"http://www.treehugger.com/clean-water/save-1400-a-year-by-drinking-tap-water.html\" target=\"_none\">you can save $1400 a year by just drinking tap.</a></p><p><h2>3.</h2> Say no to straws, or only use paper straws. When you order a drink, say “No straw, please.”</p><p><h2>4.</h2> Use non-plastic utensils and bring your own mug to the coffee shop. Get in the habit of carrying these with you when you’re out and about.</p><p><h2>5.</h2> <a href=\"https://www.5gyres.org/styrofoam/\" target=\"_none\">Avoid all things Styrofoam.</a> The chemicals used to create Styrofoam cups and food containers are toxic and possibly carcinogenic. Bad for you, bad for the oceans.</p><p><h2>6.</h2> Buy items with minimal packaging, and buy in bulk whenever possible. Choose non-plastic beverage containers.</p><p><h2>7.</h2> Minimize your electronic footprint by repairing, upgrading, or recycling old phones, TVs, computers, and peripherals.</p><div class=\"embedded-image left\"><img src=\"http://res.cloudinary.com/nordic-naturals/image/upload/v1501788652/web/blog-assets/post-images/5Gyres3.jpg\"/><span style=\"padding-left: 28px; padding-right: 28px; display: inline-block\">Photo by Ryan Martin for 5 Gyres</span></div><p><h2>8.</h2> Buy clothes made from natural materials. Synthetic clothing items shed microfibers every time they’re washed, and these fibers wind up in the ocean.</p><p><h2>9.</h2> Don’t buy face cleansers and scrubs that contain microbeads (they’ll be phased out soon anyway, thanks to the <a href=\"https://www.fda.gov/Cosmetics/GuidanceRegulation/LawsRegulations/ucm531849.htm\" target=\"_none\">Microbead-Free Waters Act</a>).</p><p><h2>10.</h2> Pledge to go <a href=\"https://www.5gyres.org/newsletter-sign-up\" target=\"_none\">#plasticfree</a> for a day, a week, a year—or forever. Start by refusing the top five sources of single use plastic: plastic bags, water bottles, to-go containers, takeaway cups, and straws.</p><p>Cleaning up our oceans isn’t going to happen overnight. But we can all make a difference—one piece of plastic trash at a time.</p>
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
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1501788654/web/blog-assets/post-images/capsules-and-fish.jpg",
        contentPreview: "“Triglycerides” may sound intimidating, but all you really need to know is that they’re the form of omega-3 fats that your body ...",
        content: `
          <p>“Triglycerides” are something we talk about a lot at Nordic Naturals. They sound intimidating, but all you really need to know is that they’re the form of omega-3 fats that your body prefers. And, many fish oils on the market today are not triglyceride form. Let me explain.</p><p>Triglycerides are a form of molecule. You may hear that “high triglycerides” are bad for the heart, but I’m talking about a different kind that is really important for overall health. That’s because dietary fats are really important for us, and 98% of all fats we eat are triglycerides. None of this would matter beyond the lab if all companies produced fish oil the right way—as natural omega-3s. Sadly, they don’t. But if you know to look for triglyceride form omega-3s—the natural form—it’s easy to find great fish oil.</p><p>Natural-form fish oil is better for a handful of reasons. Freshness, effectiveness, and value topthe list. You’d expect this since triglyceride-form fats abound in nature. But what about the alternative?</p><p><h2>Natural Form = Fresh</h2></p><p>Most fish oils are made of ethyl ester molecules, which are the result of concentrating omega-3s to make a more potent product, and then skipping a final step that recreates the natural molecular form. No big surprise, skipping this step is cheaper for fish oil manufacturers, but the cost-savings don’t translate to you. Ethyl ester fish oils are fragile, so the molecules have a hard time holding together, and are more susceptible to damage by oxygen. That means a lot of spoiled, stinky fish oil—and more free radicals.</p><p><h2>Natural Form = Effective</h2></p><div class=\"embedded-image right\"><img src=\"http://res.cloudinary.com/nordic-naturals/image/upload/v1501788657/web/blog-assets/post-images/tg-form-graph-compressor.jpg\" ></div><p>Natural-form fish oil is also more effective than ethyl ester fish oil. A number of studies have documented the body’s improved ability to absorb and use natural form omega-3s. Up to 70% better absorption than ethyl esters.<sup>1</sup> This means that the more natural form omega-3s there are in your bottle of fish oil, the greater chance they have to make it where they should—your cells.</p><p>The cell membrane is where omega-3s really have the chance to make a difference, influencing heart health, vision, brain development, and the wide-ranging functions of the immune system that benefit so many aspects of everyday health. Of course, poorly absorbed fish oil means fewer omega-3s in the bloodstream, fewer getting to cells, and limited benefits overall. You get the idea.</p><p><h2>Natural Form = Value</h2></p><p>All this adds up to one big advantage: value. Why spend money on fish oil that spoils quickly, and that doesn’t deliver the benefits you expect? The big picture sometimes gets lost when customers choose products solely on lowest price.</p><p>I’m happy to tell you that Nordic Naturals has always had the big picture in mind. From the very beginning we’ve produced our fish oils in their natural form. Every bottle contains at least 90% natural-form omega-3s, and they often reach up to 98%. It takes longer to make triglyceride-form products. And, it costs more. But at the end of the day, it’s the value of our products that matters most.</p><p><small><sup>1</sup><i>Dyerberg J, et al. <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/20638827\" target=\"_none\">Bioavailability of marine n-3 fatty acid formulations. Prostaglandins Leukot Essent Fatty Acids</a> 2010 Sep;83(3):137–141.</i></small></p><p><small>*These statements have not been evaluated by the Food and Drug Administration.These products are not intended to diagnose, treat, cure, or prevent any disease.</small></p>
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
        category: "the-nordic-way",
        categoryText: "THE NORDIC WAY",
        author: "NORDIC NATURALS STAFF",
        postUrl: "inside-nordic-naturals-meet-jonna-customer-service-rep-extraordinaire",
        title: "Inside Nordic Naturals: Meet Jonna, Customer Service Rep Extraordinaire",
        imageUrl: "http://res.cloudinary.com/nordic-naturals/image/upload/v1501788656/web/blog-assets/post-images/jonna-compressor.jpg",
        contentPreview: "If you happen to call Nordic Naturals to place an order or ask a product question, there’s a good chance you’ll find yourself chatting ...",
        content: `
          <p><i>If you happen to call Nordic Naturals to place an order or ask a product question, there’s a good chance you’ll find yourself chatting with the unforgettable Jonna Paiss. We asked Jonna to be the subject of our first employee spotlight, and she graciously accepted. Read our interview with Jonna here, and <a href=\"#embed-container\">watch her answer our parting question on video</a>.</i></p><p><b>Name:</b> <p>Jonna Paiss</p><b>Role:</b> <p>Consumer Sales and Education Representative</p><b>Years with Nordic Naturals:</b> <p>5</p><p><b>What do you do at Nordic Naturals, and what do you like best about your job?</b></p><p>I work in customer service, so I answer questions about our products all day long. I’ve always been interested in nutrition and biology, and I like helping people find the right supplement for them. I used to work in the healthcare industry, and for me working in the natural products industry is much more satisfying.</p><p>One reason I like talking about our products is because I have so much confidence in them. I try everything we make so I can get a firsthand experience with each product. I keep a spice rack in my bathroom filled with all my Nordic Naturals supplements.</p><p><b>What’s the strangest customer question you’ve ever received?</b></p><p>I certainly get some very specific questions from customers, everything from whether or not our products are kosher to what kinds of glue we use on our product labels. It’s part of the fun, you know, going and hunting down the answers to the more unusual questions.</p><p>I guess the strangest question I ever got was from a woman who called to ask about the tiny illustrated trolls on our Nordic Berries multivitamin label. She wanted to know if they were associated with the occult. I told her the trolls were common in Norwegian fairy tales, nothing more than a fanciful reference to Scandinavian folklore.</p><p><b>Where did you grow up?</b></p><p>I was born and raised in a small town in Denmark, and I immigrated to the US when I was in my twenties. I practically grew up in a library... I spent most of my teenage years with my head in a book, and I’m still a voracious reader today.</p><p><b>Since you’ve been here for 5 years, I gather you’ve been taking fish oil for a while. Any observations you’d like to share?</b></p><p>Probably the biggest thing I noticed when I first started working here was the high product quality. I’ve always trusted the science behind the nutrition, so I never questioned things I experienced in the past with other products, like fishy aftertaste or unpleasant burps. I just figured those things were to be tolerated, the way you tolerate other things that might be good for you—like onions.</p><p><b>What Nordic Naturals products do you take?</b></p><p>I currently take <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1746\" target=\"_none\">Omega Curcumin</a>, <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1414\" target=\"_none\">EPA</a> with concentrated <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1647\" target=\"_none\">GLA</a>, <a href=\"http://www.nordicnaturals.com/en/General_Public/Vitamin_D3_formulas/365\" target=\"_none\">vitamin D3</a>, and <a href=\"http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1699\" target=\"_none\">Nordic Flora Probiotic Daily</a>. Over the years I’ve tried a lot of different formulations, but in general I try to take 2000 milligrams EPA and DHA daily. In the winter especially, I take vitamin D3 regularly. And I supplement with other products, like Omega Curcumin and <a href=\"http://www.nordicnaturals.com/en/General_Public/Eye_Health/1231\" target=\"_none\">Omega Vision</a>, depending on whatever issue I may be trying to address. When I first tried our Nordic Flora probiotics, I was like, oh my God! Because I felt an immediate difference. (laughs)</p><p><b>What is something about you that few people know? Do you have a hidden talent?</b></p><p>I have nothing BUT hidden talents. All my talents are really hard to find! One advantage of talking to new people all day is that my jokes never get old. I try to be light about things, because I enjoy making people laugh.</p><p><b>I happen to know that you’re really good at crafting.</b></p><p>Yes, I do like to sew and knit and do crafty things. I’m really into making costumes right now. And a lot of people don’t know this, but I’m actually a good cook. I developed some pretty good cooking skills in college—whisking and stirring, those are my hidden talents. And talking and enjoying good food with friends.</p><p><b>We talk a lot about health here at Nordic Naturals. What does “living healthfully” mean to you?</b></p><p>To me “living healthfully” is a state of mind. It’s about striving for harmony and balance in your life. We have a saying in Denmark: “Everything in moderation, including moderation.” I think it’s important to pick your battles in life, and focus on what gives you enjoyment. Otherwise it’s really easy to get frustrated and feel powerless. I guess you could say I try not to sweat the small stuff.<p><p><b>Video Question: You’re from Denmark. Explain “hygge” to us.</b><div id=\"embed-container\"><iframe src=\"https://player.vimeo.com/video/212996319\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></p>
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
