<script lang="ts">
  import Category from "$lib/components/Category.svelte"
  import type { PageData } from "./$types"

  export let data: PageData;
</script>

<title>Tasneem Zahida: Visual Da'wah</title>
<Category categoryName="Visual Da'wah" paintings={data.paintings}/>
