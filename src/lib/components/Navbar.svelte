<script lang="ts">
  let active: boolean = false;
</script>

<!-- HIEGHT OF NAVBAR: theme(space.28) -->
<nav class="flex justify-evenly items-center text-primary h-28">
  <div class="bg-softgray w-[300px] h-[310px] rounded-full scale-x-125 absolute -z-10 top-[-180px]"></div>
  <ul class="flex justify-evenly w-full items-center">
    <li data-sveltekit-prefetch><a href="/visual">Visual Da'wah</a></li>
    <li data-sveltekit-prefetch><a href="/calligraphy">Calligraphy</a></li>
    <li data-sveltekit-prefetch><a href="/canonical">Canonical</a></li>
  </ul>
  <a href="/" class="w-[45rem]"><img src="/logo-small.png" alt="Logo"></a>
  <ul class="flex justify-evenly w-full items-center">
	<li data-sveltekit-prefetch><a href="/events">Events</a></li>
	<li data-sveltekit-prefetch><a href="/contacts">Contact Me</a></li>
  </ul>
  <button class="hamburger mr-4 flex flex-col space-y-1"
		  class:active
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
  .bar {
	@apply w-7 h-[.3rem] bg-primary rounded-xl transition-all ease-in-out
  }
  .active .bar {
	/* Spacing = 0.25rem, Thickness = 0.3rem, Correction = 0.5px */
	@apply even:opacity-0 first:-rotate-45 last:rotate-45
		   first:translate-y-[calc(0.3rem+0.25rem-.5px)] last:translate-y-[calc(-0.3rem-0.25rem)]
  }
</style>
