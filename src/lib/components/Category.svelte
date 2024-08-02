<script lang="ts">
  import type { Painting } from "src/types/Painting";

  export let categoryName: string;
  export let paintings: Painting[];
  paintings.map((p) => (console.log(p.title)))
</script>

<div class="min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.14))]
			lg:min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.28)-theme(space.6))] my-20 lg:my-28 mx-10 lg:mx-60">
  <h1 class="text-6xl lg:text-hxl text-primary mb-7 lg:mb-10">{categoryName}</h1>
  <div class="grid-col gap-8 lg:columns-3 md:columns-2 sm:columns-1">
	{#each paintings as {id, category, filename, title, description}}
	  <a data-sveltekit-prefetch href="/paintings/{id}">
	    <div class="brick before:content-[''] before:absolute before:w-full before:h-1/2 lg:before:top-full before:left-0 before:bg-gradient-to-b before:from-transparent before:to-[rgb(0,0,0,0.4)] before:transition-all before:duration-300 before:top-1/2 order-last place-self-start
				    relative mb-8 transition-all overflow-hidden rounded-sm">
		  <img class="w-full" src={new URL(`/src/lib/assets/${category}/${filename}`, import.meta.url).href} alt={title}>
		  <h2 class="absolute bottom-3 left-5 pr-7 text-white text-2xl lg:text-3xl text-heading w-full text-left transition-all">{title}</h2>
	    </div>
	  </a>
	{/each}
  </div>
</div>

<style>
  img {
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
  }
  .brick:hover::before {
	@apply top-1/2
  }
  .brick h2, .brick p {
    opacity: 1;
	@apply lg:-bottom-16
  }
  .brick:hover h2, .brick:hover p {
    opacity: 1;
	@apply bottom-3
  }
</style>
