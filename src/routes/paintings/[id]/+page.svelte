<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  let {id, category, filename, title, description} = data.painting;
</script>

<div class="flex flex-col lg:flex-row items-center
			min-h-[calc(100vh-theme(space.28)-theme(space.10)-theme(space.4)-theme(space.7))]
			lg:h-[calc(100vh-theme(space.28)-theme(space.10)+theme(space.8)-theme(space.4))]
			lg:space-x-28 mx-2 lg:mx-24 lg:-mt-8 text-primary my-10">
  <div class="order-2 lg:order-1 flex flex-col space-y-12 lg:space-y-14 items-start mx-4 w-full">
    <h1 class="text-4xl lg:text-6xl flex items-center lg:w-max mt-7 max-h-10 lg:max-h-full">
	  <a class="text-4xl lg:text-5xl mr-4 lg:mr-10 hover:text-5xl lg:hover:text-6xl transition-all" href="/{category}" data-sveltekit-prefetch>←</a>
	  {title}
	</h1>
    <p class="text-2xl -mt-4 lg:mt-0">{description}</p>
	<a class="text-2xl border-2 border-primary rounded-full px-3 py-1 mt-2 transition-all duration-200 hover:text-white hover:bg-primary" href="/contacts" data-sveltekit-prefetch>Order now</a>
  </div>
  <div class="order-1 lg:order-2 flex items-start w-full justify-center mb-5 lg:mb-0">
    <img class="rounded-md lg:max-h-[40rem]" src={new URL(`/src/lib/assets/${category}/${filename}`, import.meta.url).href} alt="{title}">
  </div>
</div>
