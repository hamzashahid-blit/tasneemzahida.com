<script lang="ts">
  import type { ParsedEvent } from "src/types/ParsedEvent";
  import type { PageData } from "./$types";

  export let data: PageData;
  let event: ParsedEvent = data.event;
  let { blog, text } = event;
</script>

<h1 class="text-primary">{blog.title}</h1>
<img src={new URL(`/src/lib/assets/events/${blog.imgFilename}`, import.meta.url).href} alt="About the event">
<div class="text-primary text-2xl">{@html text}</div>

