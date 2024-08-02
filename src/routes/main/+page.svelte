<script lang="ts">
  import type { PageData } from "./$types"
  import { onMount } from 'svelte'
  import { mainScrollPos } from '../../stores.ts'
  import Category from "$lib/components/Category.svelte"

  export let data: PageData;

  onMount(() => {
	// For some reason it won't work without the setTimeout :/ JS is lame...
	setTimeout(() => {window.scrollTo({top: $mainScrollPos})})
	return () => {
	  console.log(window);
	  $mainScrollPos = window.scrollY
	}
  })
</script>

<title>Tasneem Zahida: Main Gallery</title>
<Category categoryName="Main Gallery" paintings={data.paintings}/>
