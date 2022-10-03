<script lang="ts">
  import Category from "$lib/components/Category.svelte"
  import type { PageData } from "./$types"

  export let data: PageData;
</script>

<Category categoryName="All Paintings" paintings={data.paintings}/>
