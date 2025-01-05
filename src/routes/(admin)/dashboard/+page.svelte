<script lang="ts">
  import type { PageData, ActionData } from './$types';
  import { enhance, applyAction } from '$app/forms';
  import Tab from './Tab.svelte';
  import Search from './Search.svelte';
  
  let { data, form }: { data: PageData, form: ActionData } = $props();
  const isVowel = chr => (/[aeiou]/i).test(chr);
  const Mode = {
    Painting: "Painting",
    Event: "Event",
  };
  const Crud = {
    Add: "Add",
    Update: "Update",
    Remove: "Remove",
  };
  const modeTabNames: string[] = Object.values(Mode);
  const crudTabNames: string[] = Object.values(Crud);
  let currMode: string = $state(Mode.Painting);
  let currCrud: string = $state(Crud.Add);
  let aOrAn: string = $derived(isVowel(currMode[0]) ? 'an' : 'a');
  let selectedPainting: Painting = $state(null);
  const formEnhance = async ({ formData }) => {
    formData.append('selectedPaintingId', selectedPainting?.id ?? '');
  }
</script>

<header>
  <Tab tabNames={modeTabNames} bind:currTab={currMode} bind:form />
  <Tab tabNames={crudTabNames} bind:currTab={currCrud} bind:form />
</header>

<article>
  <h1>{currCrud} {aOrAn} {currMode}</h1>
  <!-- TODO: Figure out why use:enhance is doing full-page reloads -->
  <form method="POST" enctype="multipart/form-data" use:enhance={formEnhance}>
    <fieldset>
      {#if currCrud === Crud.Update || currCrud === Crud.Remove}
        <Search paintings={data.paintings}
                bind:selectedPainting
                placeholder={`Search for ${aOrAn} ${currMode} to ${currCrud}`}
                {form} />
      {/if}
      {#if currCrud === Crud.Add || currCrud === Crud.Update}
        <label>
          Title
          <input
            type="text"
            name="title"
            value={selectedPainting?.title}
            placeholder={`Title of the ${currMode} to ${currCrud}`}
            aria-label={`Title of the ${currMode} to ${currCrud}`}
            aria-invalid={form ? (form.errors?.title ? "true" : "false") : null}
            aria-describedby="title-helper">
          <small id="title-helper">{form?.errors?.title}</small>
        </label>
      {/if}
      {#if currCrud === Crud.Add }
        <label>
          Category
          <select name="category"
                  aria-label="Select painting category..."
                  aria-invalid={form ? (form.errors?.category ? "true" : "false") : null}
                  aria-describedby="category-helper">
            <option selected disabled value="">Select painting category...</option>
            <option value="main">Main</option>
            <option value="calligraphy">Calligraphy</option>
            <option value="other">Other Artwork</option>
          </select>
          <small id="category-helper">{form?.errors?.category}</small>
        </label>
      {:else if currCrud === Crud.Update }
        <label>
          Category
          <select name="category"
                  aria-label="Select painting category..."
                  aria-invalid={form ? (form.errors?.category ? "true" : "false") : null}
                  aria-describedby="category-helper">
            <option selected={!selectedPainting} disabled value="">Select painting category...</option>
            <option selected={selectedPainting?.category?.toLowerCase() === "main"}
                    value="main"
                    >Main</option>
            <option selected={selectedPainting?.category?.toLowerCase() === "calligraphy"}
                    value="calligraphy"
                    >Calligraphy</option>
            <option selected={selectedPainting?.category?.toLowerCase() === "other"}
                    value="other"
                    >Other Artwork</option>
          </select>
          <small id="category-helper">{form?.errors?.category}</small>
        </label>
      {/if}
      {#if currCrud === Crud.Add || currCrud === Crud.Update}
        <!-- TODO: FIX Label/input moves to the right when invalid -->
        <label id="picture-label">
          Picture
          <input
            type="file"
            name="picture"
            aria-invalid={form ? (form.errors?.picture ? "true" : "false") : null}
            aria-describedby="picture-helper">
          <small id="picture-helper">{form?.errors?.picture}</small>
        </label>
        <label>
          Description
          <textarea
            name="description"
            placeholder={`Describe your ${currMode}`}
            aria-label={`Describe your ${currMode}`}
            aria-invalid={form ? (form.errors?.description ? "true" : "false") : null}
            aria-describedby="description-helper"
            >{(currCrud === Crud.Update && selectedPainting)
            ? selectedPainting.description
            : ''}</textarea>
          <small id="description-helper">{form?.errors?.description}</small>
        </label>
      {/if}
    </fieldset>
    <button formaction={`?/${currCrud.toLowerCase()}${currMode}`}
            name="submit"
            aria-invalid={form ? (form.errors?.description ? "true" : "false") : null}
            aria-describedby="submit-helper"
            >{currCrud}</button>
    <small id="submit-helper">{form?.errors?.submit}</small>
  </form>
</article>

<style>
  header {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 20vw 0rem 20vw;
  }
  article {
    margin: 1rem 10vw;
  }
  textarea {
    height: 10rem;
  }
  button {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    header {
      flex-direction: column;
      margin: 1.5rem 5vw 0rem 5vw;
    }
    article {
      margin: 1rem 5vw;
    }
  }

  @media only screen and (max-width: 450px) {
    h1 {
      font-size: 1.5rem;
    }
  }
</style>
