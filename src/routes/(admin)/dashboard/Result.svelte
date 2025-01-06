<script lang="ts">
  import type { Painting } from '$mytypes/Painting';
  import type { Event } from '$mytypes/Event';
  
  let { result, onclick, selected }: {
    result: Painting | Event,
    onclick: Function,
    selected: boolean,
  } = $props();

  const url = `/src/lib/assets/${Object.hasOwn(result, 'content')
                                   ? `events/${result.picture}`
                                   : `${result.category}/${result.filename}`}`;
</script>

<div class={{selected}}>
  <button class={['outline', {selected}]} {onclick}>
    <img src={new URL(url, import.meta.url).href} alt={result.title}>
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
