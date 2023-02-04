<script lang="ts">
  import type { EventBlog } from "src/types/EventBlog";
  import EventFooter from "$lib/components/EventFooter.svelte";

  export let event: EventBlog;
</script>

<!-- <h1>Coming Soon...</h1> -->

<a data-sveltekit-prefetch href="/events/{event.id}" class="flex flex-col items-center max-w-[18rem] lg:max-w-[20rem] text-primary bg-softgray rounded-xl transition-all hover:scale-105 lg:hover:scale-110"> <!-- box-shadow-[10px_10px_10px_rgba(255,0,0,0.25)] -->
  <img class="rounded-t-xl w-[20rem]" src={new URL(`/src/lib/assets/events/${event.id}.png`, import.meta.url).href} alt="The event">
  <div class="p-5">
    <h1 class="mb-2 text-center font-heading text-2xl leading-7">{event.title}</h1>
    <p class="text-xl text-softprimary text-ellipsis leading-tight h-[15vh] lg:h-[25vh] overflow-hidden">{event.description}</p>
    <div class="flex items-center justify-between w-[100%] mt-4">
	  <EventFooter date={new Date(event.date)} textLength={event.description.length}/>
    </div>
  </div>
</a>
