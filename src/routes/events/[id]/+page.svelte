<script lang="ts">
  import type { EventBlog } from "src/types/EventBlog";
  import type { PageData } from "./$types";

  export let data: PageData;
  let event: EventBlog = data.event;
</script>

<!-- {#await data.events} -->
<!--   <p>Loading...</p> -->
<!-- {:then} -->
<!--   <p>Here is the link: {data.events}</p> -->
<!-- {/await} -->

<div class="flex flex-col justify-center mx-60 my-28">
  <h1 class="text-hxl text-primary">{event.title}</h1>
  <img class="rounded-md mt-5 mb-10" src={new URL(`/src/lib/assets/events/${event.id}.png`, import.meta.url).href} alt="About the event">
  <div id="md" class="text-primary">{@html event.content}</div>
</div>

<style>
  #md :global(h1) {
	@apply text-5xl
  }
  #md :global(h2) {
	@apply text-4xl
  }
  #md :global(h3) {
	@apply text-3xl
  }
  #md :global(h4) {
	@apply text-2xl
  }
  #md :global(h5) {
	@apply text-xl
  }
  #md :global(p) {
	@apply text-2xl
  }
</style>
