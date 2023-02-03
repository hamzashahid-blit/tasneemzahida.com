<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  let {id, category, filename, title, description} = data.painting;
</script>

<div class="flex items-center h-[calc(100vh-theme(space.28)-theme(space.10)+theme(space.8)-theme(space.4))] space-x-28 mx-24 -mt-8 text-primary">
  <div class="flex flex-col space-y-14 items-start">
    <h1 class="text-6xl flex items-center w-max">
	  <a class="text-5xl mr-10 hover:text-6xl transition-all" href="/{category}" data-sveltekit-prefetch>←</a>
	  {title}
	</h1>
    <p class="text-2xl">{description}</p>
	<a class="text-2xl border-2 border-primary rounded-full px-3 py-1 mt-2 transition-all duration-200 hover:text-white hover:bg-primary" href="/contacts" data-sveltekit-prefetch>Order now</a>
  </div>
  <div class="flex items-start w-full justify-center">
    <img class="rounded-md max-h-[40rem]" src={new URL(`/src/lib/assets/${category}/${filename}`, import.meta.url).href} alt="{title}">
  </div>
</div>
