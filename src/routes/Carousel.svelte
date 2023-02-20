<script lang="ts">
  import type { Painting } from "src/types/Painting";
  export let paintings: Painting[]
</script>

<ul class="flex overflow-x-auto gap-6 items-center snap-x snap-mandatory before:w-6 after:w-6">
  {#each paintings as painting}
	<li class="shrink-0 snap-center snap-always w-[80vw]">
	  <a data-sveltekit-prefetch href="/paintings/{painting.id}">
        <img class="rounded-md" src={`/src/lib/assets/${painting.category}/${painting.filename}`} alt="{painting.title}">
	  </a>
	</li>
  {/each}
</ul>
