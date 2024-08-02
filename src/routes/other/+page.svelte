<script lang="ts">
  import type { PageData } from "./$types"
  import { onMount } from 'svelte'
  import { otherScrollPos } from "../../stores.ts"
  import Category from "$lib/components/Category.svelte";

  export let data: PageData;

  onMount(() => {
	// For some reason it won't work without the setTimeout :/ JS is lame...
	setTimeout(() => {window.scrollTo({top: $otherScrollPos})})
	return () => {
	  console.log(window);
	  $otherScrollPos = window.scrollY
	}
  })
</script>

<title>Tasneem Zahida: Other Art</title>
<Category categoryName="Other Art" paintings={data.paintings}/>
