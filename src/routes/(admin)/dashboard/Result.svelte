<script lang="ts">
  import type { Painting } from '$mytypes/Painting';
  import type { Event } from '$mytypes/Event';
  
  let { result, onclick, selected }: {
    result: Painting | Event,
    onclick: Function,
    selected: boolean,
  } = $props();

  // console.log(paintingUrl, eventUrl, Object.hasOwn(result, 'content'), `events/${result.picture}`, `${result.category}/${result.filename}`, result, new URL(`/src/lib/assets/${paintingUrl}`, import.meta.url), new URL(`/src/lib/assets/${eventUrl}`, import.meta.url));
</script>

<div class={{selected}}>
  <button class={['outline', {selected}]} {onclick}>
    {#if !result}
    {:else if Object.hasOwn(result, 'content')}
      <img src={new URL(`/src/lib/assets/events/${result.picture}`, import.meta.url).href} alt={result.title}>
    {:else}
      <img src={new URL(`/src/lib/assets/${result.category}/${result.filename}`, import.meta.url).href} alt={result.title}>
    {/if}
    <h3>{result.title}</h3>
  </button>
  {#if selected}
    <small>Click again to de-select</small>
  {/if}
</div>

<style>
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  img {
    border-radius: 0.2rem;
    margin-bottom: 1rem;
  }

  div .selected {
    width: 100%;
  }

  .selected > img {
    width: 25%;
  }

  @media only screen and (max-width: 768px) {
    .selected > img {
      width: 50%;
    }
  }

  @media only screen and (max-width: 450px) {
    .selected > img {
      width: 80%;
    }
  }
</style>
