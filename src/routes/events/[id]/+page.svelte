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

<h1 class="text-primary">{event.title}</h1>
<img src={new URL(`/src/lib/assets/events/${event.id}.png`, import.meta.url).href} alt="About the event">
<div class="text-primary text-2xl">{@html event.content}</div>
