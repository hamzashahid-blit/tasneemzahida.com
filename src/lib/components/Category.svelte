<script lang="ts">
  import type { Painting } from "src/types/Painting";

  export let categoryName: string;
  export let paintings: Painting[];
</script>

<div class="min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.28)-theme(space.10))] my-28 mx-60">
  <h1 class="text-hxl text-primary mb-10">{categoryName}</h1>
  <div class="gap-8 lg:columns-3 md:columns-3 sm:columns-1">
	{#each paintings as {id, category, filename, title, description}}
	  <a data-sveltekit-prefetch href="/paintings/{id}">
	    <div class="brick before:content-[''] before:absolute before:w-full before:h-1/2 before:top-full before:left-0 before:bg-gradient-to-b before:from-transparent before:to-[rgb(0,0,0,0.4)] before:transition-all before:duration-300
				    relative mb-8 transition-all overflow-hidden rounded-sm">
		  <img class="bg-red-200 w-full" src={new URL(`/src/lib/assets/${category}/${filename}`, import.meta.url).href} alt={title}>
		  <h2 class="absolute bottom-3 left-5 text-white text-3xl text-heading w-full text-left transition-all">{title}</h2>
		  <!-- <h2 class="absolute top-[68%] left-[5%] right-[5%] text-white text-4xl">{title}</h2> -->
		  <!-- <p class="absolute top-[82%] left-[5%] right-[5%] text-white text-xl leading-5 line-clamp-2">{description}</p> -->
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
	top: 50%;
  }
  .brick h2, .brick p {
    opacity: 1;
	@apply -bottom-10
  }
  .brick:hover h2, .brick:hover p {
    opacity: 1;
	@apply bottom-3
  }
</style>
