<script lang="ts">
  import type { EventBlog } from "$mytypes/EventBlog";
  import type { PageData } from "./$types";
  import EventFooter from "$components/EventFooter.svelte";

  let { data }: { data: PageData } = $props();
  let event: EventBlog = data.event;
</script>

<!-- {#await data.events} -->
<!--   <p>Loading...</p> -->
<!-- {:then} -->
<!--   <p>Here is the link: {data.events}</p> -->
<!-- {/await} -->

<title>Event: {event.title}</title>
<div class="text-primary flex flex-col justify-center mx-4 lg:mx-60 my-12 lg:my-28">
  <h1 class="text-4xl md:text-5xl lg:text-hxl mb-1">{event.title}</h1>
  <span class="md:text-xl"><EventFooter date={new Date(event.date)} textLength={event.content.length} /></span>
  <img class="rounded-[0.3rem] md:rounded-md mt-5 mb-10" src={new URL(`/src/lib/assets/events/${event.picture}`, import.meta.url).href} alt="About the event">
  <div id="md">{@html event.content}</div>
</div>

<style>
  #md :global(h1) {
	@apply text-4xl lg:text-5xl
  }
  #md :global(h2) {
	@apply text-3xl lg:text-4xl
  }
  #md :global(h3) {
	@apply text-2xl lg:text-3xl
  }
  #md :global(h4) {
	@apply text-xl lg:text-2xl
  }
  #md :global(h5) {
	@apply text-[1.6em] lg:text-xl
  }
  #md :global(p) {
	@apply text-2xl
  }
</style>
