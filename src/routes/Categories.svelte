<div id="categories" class="flex flex-col items-center justify-center">
  <div id="main" alt="A painting showing main gallery">
	<h1>Main Gallery</h1>
	<a href="/main" data-sveltekit-prefetch>View more</a>
  </div>
  <div id="calligraphy" alt="A painting showing calligraphy">
	<h1>Calligraphy</h1>
	<a href="/calligraphy" data-sveltekit-prefetch>View more</a>
  </div>
  <div id="other" alt="A painting showing other art">
	<h1>Other Art</h1>
	<a href="/other" data-sveltekit-prefetch>View more</a>
  </div>
</div>
<style>
  #categories > div {
    /* @apply grid grid-rows-3 md:grid-rows-none md:grid-cols-3 items-center justify-items-center h-[50vh] md:h-[31vh] bg-cover bg-center transition-all duration-300 mx-4 my-2 rounded-xl drop-shadow-lg text-white text-center px-2 py-1 */
	@apply flex flex-col items-center justify-center text-white text-center h-[50vh] md:h-[31vh] w-[98vw] bg-cover bg-center transition-all duration-300 mx-10 my-2 rounded-xl drop-shadow-lg px-2 py-1
  }
  #main {
    background-image:
	  linear-gradient(to left, rgba(50, 50, 50, 0.5),rgb(86, 69, 125, 0.93)),
	  url("/main.png");
  }
  #calligraphy {
    background-image:
	  linear-gradient(to left, rgba(50, 50, 50, 0.5),rgb(86, 69, 125, 0.93)),
	  url("/calligraphy.png");
  }
  #other {
    background-image:
	  linear-gradient(to left, rgba(50, 50, 50, 0.5),rgb(86, 69, 125, 0.93)),
	  url("/other.png");
  }
  h1 {
	@apply text-5xl lg:text-6xl mb-2
  }
  a {
    @apply text-white text-lg md:text-2xl border-2 border-white rounded-full px-4 py-1 mt-2 transition-all duration-200 hover:text-primary hover:bg-white
  }
</style>
