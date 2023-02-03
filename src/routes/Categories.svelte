<!-- TODO: Fix dropshadow so that it is not only covering the bottom but all around -->

<div id="categories" class="my-22 flex flex-col items-center justify-center">
  <div id="visual" alt="A Painting showing Visual Da'wah">
	<h1>Visual Da'wah</h1>
	<p>Main artwork. Illustration of a calligraphic verse. I have around 50 million paintings here. Okay good job just see the thingamjig. Nice human.</p>
	<a href="/visual" data-sveltekit-prefetch>View more</a>
  </div>
  <div id="calligraphy" alt="A Painting showing Calligraphy">
	<h1>Calligraphy</h1>
	<p>Second artwork. Just my calligraphy and verse. I have around 10 million paintings here. Okay good job just see the thingamjig. Nice human.</p>
	<a href="/calligraphy" data-sveltekit-prefetch>View more</a>
  </div>
  <div id="canonical" alt="A Painting showing Other art">
	<h1>Canonical</h1>
	<p>Other artwork. Random artwork. I have around 80 million paintings here. Okay good job just see the thingamjig. Nice human.</p>
	<a href="/canonical" data-sveltekit-prefetch>View more</a>
  </div>
</div>
 <!-- linear-gradient(to left, rgba(245, 246, 252, 0.2), rgb(100, 20, 200, 0.83)), -->
 <!-- rgb(238, 237, 249, 0.83)  -->
<!-- #dbc5f7 -->
<!-- rgb(219, 197, 247, 0.83)  -->
<style>
  #categories > div {
    /* @apply w-[98%] h-96 bg-cover bg-center flex flex-row items-center justify-evenly transition-all duration-300m-3 rounded-xl drop-shadow-2xl  /\*hover:bg-[length:150%]*\/  */
    @apply grid grid-rows-3 md:grid-rows-none md:grid-cols-3 items-center justify-items-center h-[50vh] md:h-[31vh] bg-cover bg-center transition-all duration-300 mx-4 my-2 rounded-xl drop-shadow-lg text-white text-center px-2 py-1
  }
  #visual { /* rgba(245, 246, 252, 0.2) */
    background-image:
	  linear-gradient(to left, rgba(50, 50, 50, 0.5),rgb(86, 69, 125, 0.93)),
	  url("/visual.png");
  }
  #calligraphy {
    background-image:
	  linear-gradient(to left, rgba(50, 50, 50, 0.5),rgb(86, 69, 125, 0.93)),
	  url("/calligraphy.png");
  }
  #canonical {
    background-image:
	  linear-gradient(to left, rgba(50, 50, 50, 0.5),rgb(86, 69, 125, 0.93)),
	  url("/canonical.png");
  }
  h1 {
	@apply text-5xl lg:text-6xl mb-2
  }
  p {
    @apply text-xl lg:text-2xl
  }
  a {
    @apply text-white text-lg md:text-2xl border-2 border-white rounded-full px-4 py-1 mt-2 transition-all duration-200 hover:text-primary hover:bg-white
  }
  /*#calligraphy {
    background-image:
	  linear-gradient(to left, rgba(255, 255, 255, 0.2), rgb(234, 149, 18, 0.83)),
	  url("/about-me.jpg");
  }
  #canonical {
    background-image:
	  linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(117, 19, 93, 0.83)),
	  url("/about-me.jpg");
  }*/
</style>
