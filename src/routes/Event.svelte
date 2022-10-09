<script lang="ts">
  import type { ParsedEvent } from "src/types/ParsedEvent";
  import EventFooter from "$lib/components/EventFooter.svelte";

  export let event: ParsedEvent;
  let { blog, text } = event;
</script>

<a data-sveltekit-prefetch href="/events/{blog.id}" class="flex flex-col items-center max-w-[20rem] text-primary bg-softgray rounded-xl transition-all hover:scale-110"> <!-- box-shadow-[10px_10px_10px_rgba(255,0,0,0.25)] -->
  <img class="rounded-t-xl w-[20rem]" src="/src/lib/assets/events/{blog.imgFilename}" alt="The event">
  <div class="p-5">
    <h1 class="mb-2 text-center font-heading text-2xl leading-7">{blog.title}</h1>
    <p class="text-xl text-softprimary text-ellipsis leading-tight h-[25vh] overflow-hidden">{blog.description}</p>
    <div class="flex items-center justify-between w-[100%] mt-4">
	  <EventFooter date={new Date(blog.date)} textLength={text.length}/>
    </div>
  </div>
</a>

    <!-- <p class="text-xl text-softprimary text-ellipsis leading-tight">It was amazing I didn't expect and wow like everyone was amazing read my blog please I don't want this post to go to waste.</p> -->
