<script lang="ts">
  import type { Painting } from '$mytypes/Painting';
  
  let { painting, onclick, selected }: {
    painting: Painting,
    onclick: Function,
    selected: boolean,
  } = $props();
  let { id, category, filename, title, description } = painting;
</script>

<div class={selected ? 'selected' : ''}>
  <button class={selected ? 'selected outline' : 'outline'} {onclick}>
    <img src={new URL(`/src/lib/assets/${category}/${filename}`, import.meta.url).href} alt={title}>
    <h3>{title}</h3>
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
