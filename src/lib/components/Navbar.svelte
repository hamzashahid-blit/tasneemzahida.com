<script lang="ts">
  let active: boolean = false;
</script>

<!-- TODO: PLZ MOVE LINKS TOGETHER --> <!-- ??? In mobile??? what is this comment about? -->
<!-- TODO: Add box shadow -->
<!-- HEIGHT OF NAVBAR: theme(space.28) -->
<nav class="flex justify-evenly items-center text-primary mb-8 transition-all duration-300 ease-in-out z-20" class:active>
  <a href="/" class="lg:order-2 max-w-[18em] w-[63vw] mx-5 z-20
					 translate-x-[calc(50vw-50%-theme(space.5))] lg:translate-x-0">
	<img src="/logo-small.png" alt="Logo">
  </a>
  <ul id="paintings" class="lg:order-1 z-30">
    <li data-sveltekit-prefetch><a href="/main">Main Gallery</a></li>
    <li data-sveltekit-prefetch><a href="/calligraphy">Calligraphy</a></li>
  </ul>
  <ul id="others" class="lg:order-3 z-30">
	<!-- <li data-sveltekit-prefetch><a href="/events">Events</a></li> -->
    <li data-sveltekit-prefetch><a href="/other">Other Art</a></li>
	<li data-sveltekit-prefetch><a href="/contacts">Contact Me</a></li>
  </ul>
  <button class="lg:absolute lg:invisible order-2 lg:order-last ml-auto mr-4 flex flex-col space-y-1 antialiased no_highlights z-20"
		  on:click="{() => active = !active}">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </button>
  <div id="nav-bg" class="h-[32rem] lg:h-[1rem] w-full absolute z-10"></div>
</nav>

<style>
  li {
	@apply text-2xl lg:text-[1.2em]
  }
  ul {
	@apply flex flex-col lg:flex-row justify-evenly w-full items-center absolute lg:relative
		   -translate-y-[75%] lg:translate-y-0 transition-all ease-in-out duration-200 py-1 opacity-0 lg:opacity-100
  }
  .bar {
	@apply w-7 h-[.26rem] bg-primary rounded-xl transition-all ease-in-out antialiased duration-300
  }
  .active .bar {
	/* Spacing = 0.25rem, Thickness = 0.26rem, Correction = 0.1px */
	@apply even:opacity-0 first:-rotate-45 last:rotate-45
		   first:translate-y-[calc(0.26rem+0.25rem-.1px)] last:translate-y-[calc(-0.26rem-0.25rem)]
  }
  .active #paintings {
	@apply opacity-100 translate-y-[6rem]
  }
  .active #others {
	@apply opacity-100 translate-y-[12.25rem] /* mb-[100px]*/
  }
  .active #nav-bg {
    @apply bg-softgray
  }
</style>
