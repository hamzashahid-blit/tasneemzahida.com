<script lang="ts">
  import type { Painting } from '$mytypes/Painting';
  import fuzzysort from 'fuzzysort';
  import Result from './Result.svelte';
  
  let { paintings, selectedPainting = $bindable(null), placeholder, form }: {
    paintings: Painting[],
    selectedPainting: Painting,
    placeholder: string,
    form: FormData,
  } = $props();
  let searchQuery: string = $state('');
  let resultPaintings: Painting[] = $derived(
    fuzzysort.go(searchQuery, paintings, {
      keys: ['title', 'description'],
    }).map(r => r.obj)
  );
</script>

<label>
  Select
  <input
    type="search"
    name="search"
    {placeholder}
    aria-label={placeholder}
    bind:value={searchQuery}
    aria-invalid={form ? (form?.errors?.search ? "true" : "false") : null}
    aria-describedby="search-helper"/>
  <small id="search-helper">{form?.errors?.search}</small>
</label>
{#if !selectedPainting}
  <section>
    {#each resultPaintings as painting (painting.id)}
      <Result {painting} onclick={() => selectedPainting = painting} />
    {/each}
  </section>
{:else}
  <Result painting={selectedPainting} onclick={() => selectedPainting = null} selected={true} />
{/if}

<style>
  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }

  @media only screen and (max-width: 1600px) {
    section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (max-width: 1200px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 600px) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
