<script lang="ts">
  import type { PageData } from "./$types"
  import Category from "$lib/components/Category.svelte"

  let { data }: { data: PageData } = $props();
</script>

<title>Tasneem Zahida: All Paintings</title>
<Category categoryName="All Paintings" paintings={data.paintings}/>
