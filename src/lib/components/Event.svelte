<script lang="ts">
  import type { EventBlog } from "src/types/EventBlog";
  import EventFooter from "./EventFooter.svelte";

  export let event: EventBlog;
</script>

<a data-sveltekit-prefetch href="/events/{event.id}" class="flex flex-col items-center max-w-[20rem] max-h-96 text-primary bg-softgray rounded-md transition-all hover:scale-105"> <!-- box-shadow-[10px_10px_10px_rgba(255,0,0,0.25)] -->
  <img class="rounded-t-xl w-[20rem]" src={new URL(`/src/lib/assets/events/${event.id}.png`, import.meta.url).href} alt="The event">
  <h1 class="my-[0.6rem] text-center font-heading text-2xl leading-7">{event.title}</h1>
  <p class="text-xl text-softprimary text-ellipsis align-bottom self-end overflow-hidden leading-tight mx-5">{event.description}</p>
  <div class="flex items-end justify-between w-[calc(100%-theme(space.10))] m-2">
	<EventFooter date={new Date(event.date)} textLength={event.content.length}/>
  </div>
</a>
