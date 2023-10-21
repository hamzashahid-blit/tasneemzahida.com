<script lang="ts">
  import Category from "$lib/components/Category.svelte";
  import { onMount } from 'svelte'
  import { calligraphyScrollPos } from "../../stores.ts"
  import type { PageData } from "./$types"

  export let data: PageData;

  onMount(() => {
	// For some reason it won't work without the setTimeout :/ JS is lame...
	setTimeout(() => {window.scrollTo({top: $calligraphyScrollPos})})
	return () => {
	  console.log(window);
	  $calligraphyScrollPos = window.scrollY
	}
  })
</script>


<title>Tasneem Zahida: Calligraphy</title>
<Category categoryName="Calligraphy" paintings={data.paintings}/>
