<script lang="ts">
  import type { EventBlog } from "$mytypes/EventBlog";
  import Event from "./Event.svelte";

  export let events: EventBlog[];
</script>

<div class="flex flex-col justify-center h-max mx-10 lg:h-[120vh] mt-32 lg:mt-0">
  <!-- <h1 class="text-hxl text-primary text-center mb-20">Events Coming Soon...</h1> -->
  <div class="flex flex-col lg:flex-row items-center justify-center lg:space-x-[4%] space-y-10 lg:space-y-0">
	{#each events as event}
	  <Event {event}/>
	{/each}
  </div>
  <a class="text-primary text-2xl border-2 border-primary rounded-full px-4 py-1 mb-20 mt-12 lg:mb-8 lg:mt-20 transition-all duration-200 hover:text-white hover:bg-primary self-center" href="/events" data-sveltekit-prefetch>All Events</a>
</div>
