<script lang="ts">
  import type { PageData } from "./$types"
  import { onMount } from 'svelte'
  import { visualScrollPos } from '../../stores.ts'
  import Category from "$lib/components/Category.svelte"

  export let data: PageData;

  onMount(() => {
	// For some reason it won't work without the setTimeout :/ JS is lame...
	setTimeout(() => {window.scrollTo({top: $visualScrollPos})})
	return () => {
	  console.log(window);
	  $visualScrollPos = window.scrollY
	}
  })
</script>

<title>Tasneem Zahida: Visual Da'wah</title>
<Category categoryName="Visual Da'wah" paintings={data.paintings}/>
