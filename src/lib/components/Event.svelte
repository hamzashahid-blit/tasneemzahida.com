<script lang="ts">
  import type { ParsedEvent } from "src/types/ParsedEvent";
  import EventFooter from "./EventFooter.svelte";

  export let event: ParsedEvent;
  let { blog, text } = event;
</script>

<a data-sveltekit-prefetch href="/events/{blog.id}" class="flex flex-col items-center max-w-[20rem] max-h-96 text-primary bg-softgray rounded-md transition-all hover:scale-105"> <!-- box-shadow-[10px_10px_10px_rgba(255,0,0,0.25)] -->
  <img class="rounded-t-xl w-[20rem]" src="/src/lib/assets/events/{blog.imgFilename}" alt="The event">
  <h1 class="my-[0.6rem] text-center font-heading text-2xl leading-7">{blog.title}</h1>
  <p class="text-xl text-softprimary text-ellipsis align-bottom self-end overflow-hidden leading-tight mx-5">{blog.description}</p>
  <div class="flex items-end justify-between w-[calc(100%-theme(space.10))] m-2">
	<EventFooter date={new Date(blog.date)} textLength={text.length}/>
  </div>
</a>
