<script lang="ts">
  import type { PageData } from "./$types"
  import { onMount } from 'svelte'
  import { canonicalScrollPos } from "../../stores.ts"
  import Category from "$lib/components/Category.svelte";

  export let data: PageData;

  onMount(() => {
	// For some reason it won't work without the setTimeout :/ JS is lame...
	setTimeout(() => {window.scrollTo({top: $canonicalScrollPos})})
	return () => {
	  console.log(window);
	  $canonicalScrollPos = window.scrollY
	}
  })
</script>

<title>Tasneem Zahida: Canonical</title>
<Category categoryName="Canonical" paintings={data.paintings}/>
