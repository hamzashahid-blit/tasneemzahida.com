<script lang="ts">
  import Category from "$lib/components/Category.svelte";
  import type { PageData } from "./$types"

  export let data: PageData;
</script>

<title>Tasneem Zahida: Canonical</title>
<Category categoryName="Canonical" paintings={data.paintings}/>
