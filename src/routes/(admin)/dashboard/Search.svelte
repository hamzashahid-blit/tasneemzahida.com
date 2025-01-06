<script lang="ts">
  import type { Painting } from '$mytypes/Painting';
  import type { Event } from '$mytypes/Event';
  import fuzzysort from 'fuzzysort';
  import Result from './Result.svelte';
  
  let { items, selected = $bindable(null), placeholder, form }: {
    items: Painting[] | Event[],
    selected: Painting | Event | null,
    placeholder: string,
    form: FormData,
  } = $props();
  let searchQuery: string = $state('');
  let results: Painting[] | Event[] = $derived(
    fuzzysort.go(searchQuery, items, {
      keys: Object.hasOwn(items[0], 'content')
        ? ['title', 'description']
        : ['title', 'description', 'date', 'content'],
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
    aria-invalid={form ? (form.errors?.search ? "true" : "false") : null}
    aria-describedby="search-helper"/>
  <small id="search-helper">{form?.errors?.search}</small>
</label>
{#if !selected}
  <section>
    {#each results as result (result.id)}
      <Result {result} onclick={() => selected = result} />
    {/each}
  </section>
{:else}
  <Result result={selected}
          onclick={() => selected = null}
          selected={true} /> <!-- TODO: can we just remove the `={true}`? -->
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
