<script lang="ts">
  //import Event from "$lib/components/Event.svelte";
  //import EventFooter from "$lib/components/EventFooter.svelte";
  //import type { PageData } from "./$types";

  //export let data: PageData;
</script>

<div class="min-h-[calc(100vh-theme(space.28)-theme(space.10))] w-full flex items-center justify-center mb-10 -my-10">
  <h1 class="text-5xl text-primary">Coming Soon...</h1>
</div>

<!-- <div class="min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.28)-theme(space.10))] my-28 mx-60"> -->
<!--   <h1 class="text-hxl text-primary w-full">Events</h1> -->
<!--   <a data-sveltekit-prefetch class="transition-all duration-300" href="/events/{data.first.blog.id}"> -->
<!-- 	<div class="before:content-[''] before:absolute before:h-1/2 before:w-full before:bg-gradient-to-b before:top-3/4 before:from-transparent before:to-[rgb(0,0,0,0.7)] before:transition-all before:duration-300 -->
<!-- 				relative my-10 transition-all overflow-hidden rounded-lg"> -->
<!-- 	  <img id="firstImg" class="max-h-96 w-full object-cover" src={new URL(`/src/lib/assets/events/${data.first.blog.imgFilename}`, import.meta.url).href} alt={data.first.blog.title}> -->
<!-- 	  <div id="firstDescription" class="absolute -bottom-[calc(theme(space.20)+theme(space.4))] m-4 transition-all duration-300"> -->
<!-- 		<h1 class="text-softgray text-4xl mb-2"> -->
<!-- 		  {data.first.blog.title} -->
<!-- 		  <span class="text-xl">• <EventFooter date={new Date(data.first.blog.date)} textLength={data.first.text.length}/></span> -->
<!-- 		</h1> -->
<!-- 		<p class="text-softgray text-xl text-ellipsis overflow-hidden h-20">{data.first.blog.description}</p> -->
<!-- 	  </div> -->
<!-- 	</div> -->
<!--   </a> -->
<!--   <div class="grid grid-cols-4 gap-10"> -->
<!--     {#each data.events.slice(1) as event} -->
<!-- 	  <Event {event}/> -->
<!--     {/each} -->
<!--   </div> -->
<!-- </div> -->


<!-- <style> -->
<!--   #firstImg { -->
<!-- 	backface-visibility: hidden; -->
<!-- 	-webkit-backface-visibility: hidden; -->
<!--   } -->
<!--   a:hover #firstDescription { -->
<!-- 	@apply bottom-0  -->
<!--   } -->
<!--   a:hover > div { -->
<!-- 	@apply before:top-0 before:h-full -->
<!--   } -->
<!-- </style> -->
