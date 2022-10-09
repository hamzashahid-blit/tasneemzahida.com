<script lang="ts">
  import type { ParsedEvent } from "src/types/ParsedEvent";
  import type { PageData } from "./$types";

  export let data: PageData;
  let event: ParsedEvent = data.event;
  let { blog, text } = event;
</script>

<h1>{blog.title}</h1>
<img src="/src/lib/assets/events/{blog.imgFilename}" alt="About the event">
<p>{@html text}</p>
