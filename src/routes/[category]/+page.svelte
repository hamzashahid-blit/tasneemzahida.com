<script lang="ts">
  import type { PageData, Snapshot } from "./$types"
  import Category from "$components/Category.svelte"

  let { data }: { data: PageData } = $props();
  
  let scrollPos = $state(0);
  export const snapshot: Snapshot<number> = {
      capture: () => window.scrollY,
      restore: (value) => scrollPos = value
  };

  $effect(() => {
      setTimeout(() => {window.scrollTo({top: scrollPos})})
  });
</script>

<title>Tasneem Zahida: {data.categoryName}</title>
<Category categoryName={data.categoryName} paintings={data.paintings}/>
