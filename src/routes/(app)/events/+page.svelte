<script lang="ts">
  import type { PageData } from "./$types";
  import type { Event } from "$mytypes/Event";
  import Event from "$components/Event.svelte";
  import EventFooter from "$components/EventFooter.svelte";

  let { data }: { data: PageData } = $props();
  const events: Event[] = data.events;
  let firstEvent: Event;
  if (events?.length > 0){
    firstEvent = data.events[0];
  }
</script>

<title>Tasneem Zahida: Events</title>
{#if events?.length > 0}
  <div class="min-h-[calc(100vh-theme(space.28)-theme(space.7))]
			  lg:min-h-[calc(100vh-theme(space.28)-theme(space.28)-theme(space.28)-theme(space.10))]
			  mb-10 lg:my-28 mx-4 lg:mx-60">
    <h1 class="text-5xl md:mb-8 lg:text-hxl text-primary w-full invisible md:visible">Events</h1>
	<!-- First Event -->
    <a data-sveltekit-prefetch class="transition-all duration-300 fixed lg:relative invisible lg:visible" href="/events/{firstEvent.id}">
	  <div class="before:content-[''] before:absolute before:h-1/2 before:w-full before:bg-gradient-to-b before:top-3/4 before:from-transparent before:to-[rgb(0,0,0,0.7)] before:transition-all before:duration-300
				  relative my-10 transition-all overflow-hidden rounded-lg">
	    <img id="firstImg" class="max-h-96 w-full object-cover" src={new URL(`/src/lib/assets/events/${firstEvent.picture}`, import.meta.url).href} alt={firstEvent.title}>
	    <div id="firstDescription" class="absolute -bottom-[calc(theme(space.20)+theme(space.4))] m-4 transition-all duration-300">
		  <h1 class="text-softgray text-4xl mb-2">
		    {firstEvent.title}
		    <span class="text-xl">• <EventFooter date={new Date(firstEvent.date)} textLength={firstEvent.content.length}/></span>
		  </h1>
		  <p class="text-softgray text-xl text-ellipsis overflow-hidden h-20">{firstEvent.description}</p>
	    </div>
	  </div>
    </a>
    <div class="grid lg:grid-cols-3 md:grid-cols-3 gap-10 justify-center">
      <h1 class="text-5xl lg:text-hxl text-primary w-full md:invisible md:fixed">Events</h1>
	  <!-- Mobile first Event -->
	  <div class="visible lg:invisible lg:fixed">
	    <Event event={firstEvent} />
	  </div>
	  <!-- Rest of the Events -->
      {#each events.slice(1) as event}
	     <Event {event}/>
      {/each}
    </div>
  </div>
{:else}
  <div class="min-h-[calc(100vh-theme(space.28)-theme(space.14))] w-full flex items-center justify-center mb-10 -my-10">
    <h1 class="text-5xl text-primary">No Events...</h1>
  </div>
{/if}


<style>
  #firstImg {
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
  }
  a:hover #firstDescription {
	@apply bottom-0
  }
  a:hover > div {
	@apply before:top-0 before:h-full
  }
</style>
