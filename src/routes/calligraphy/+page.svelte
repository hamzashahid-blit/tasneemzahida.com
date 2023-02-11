<script lang="ts">
  import Category from "$lib/components/Category.svelte";
  import type { PageData } from "./$types"

  export let data: PageData;
</script>

<title>Tasneem Zahida: Calligraphy</title>
<Category categoryName="Calligraphy" paintings={data.paintings}/>
