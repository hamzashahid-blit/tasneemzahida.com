<script lang="ts">
  import Event from "./Event.svelte";
  import type { EventBlog } from "src/types/EventBlog";

  export let events: EventBlog[];
</script>

<div class="flex flex-col justify-center h-[120vh]">
  <!-- <h1 class="text-hxl text-primary text-center mb-20">Events Coming Soon...</h1> -->
  <div class="flex items-center justify-center space-x-[4%]">
	{#each events as event}
		<Event {event}/>
	{/each}
  </div>
  <a class="text-primary text-2xl border-2 border-primary rounded-full px-4 py-1 mb-8 mt-20 transition-all duration-200 hover:text-white hover:bg-primary self-center" href="/events" data-sveltekit-prefetch>All Events</a>
</div>
