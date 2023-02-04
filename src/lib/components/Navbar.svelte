<script lang="ts">
  let active: boolean = false;
</script>

<!-- HIEGHT OF NAVBAR: theme(space.28) -->
<nav class="flex justify-evenly items-center text-primary mb-8 transition-all duration-300 ease-in-out" class:active>
  <!-- <div class="bg-softgray w-[300px] h-[310px] lg:w-[300px] lg:h-[310px] rounded-full scale-x-125 absolute -z-10 top-[calc(-22vh+3vw)] sm:top-[calc(-22vh)]"></div> -->
  <!-- <div class="bg-softgray w-[70vw] h-[55vw] rounded-full absolute -z-10 -top-[calc(55vw)/2]"></div> -->
  <!--  translate-x-[calc(50vw-50%)] lg:translate-x-0 -->
  <a href="/" class="lg:order-2 max-w-[18em] w-[63vw] mx-5
					 translate-x-[calc(50vw-50%-theme(space.5))] lg:translate-x-0">
	<img src="/logo-small.png" alt="Logo">
  </a>
  <ul id="paintings" class="lg:order-1">
    <li data-sveltekit-prefetch><a href="/visual">Visual Da'wah</a></li>
    <li data-sveltekit-prefetch><a href="/calligraphy">Calligraphy</a></li>
    <li data-sveltekit-prefetch><a href="/canonical">Canonical</a></li>
  </ul>
  <ul id="others" class="lg:order-3">
	<li data-sveltekit-prefetch><a href="/events">Events</a></li>
	<li data-sveltekit-prefetch><a href="/contacts">Contact Me</a></li>
  </ul>
  <button class="lg:absolute lg:invisible order-2 lg:order-last ml-auto mr-4 flex flex-col space-y-1 antialiased"
		  on:click="{() => active = !active}">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </button>
</nav>

<style>
  li {
    font-size: 1.2em;
  }
  ul {
	@apply flex flex-col lg:flex-row justify-evenly w-full items-center absolute lg:relative
		   -top-[75%] lg:top-0 transition-all ease-in-out duration-200 py-1
  }
  .bar {
	@apply w-7 h-[.26rem] bg-primary rounded-xl transition-all ease-in-out antialiased
  }
  .active .bar {
	/* Spacing = 0.25rem, Thickness = 0.26rem, Correction = 0.1px */
	@apply even:opacity-0 first:-rotate-45 last:rotate-45
		   first:translate-y-[calc(0.26rem+0.25rem-.1px)] last:translate-y-[calc(-0.26rem-0.25rem)]
  }
  .active #paintings {
	@apply top-[7rem] border-softprimary border-t-2 mt-1
  }
  .active #others {
	@apply top-[13rem] border-softprimary border-b-2 mt-1 mb-[100px]
  }
  .active { /* Style nav when .active */
	@apply mb-[15rem]
  }
  .active img {
    /*@apply opacity-0 transition-all ease-in-out */
  }
</style>
