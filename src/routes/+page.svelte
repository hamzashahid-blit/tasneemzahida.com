<script lang="ts">
  import Carousel from "./Carousel.svelte";
  import AboutMe from "./AboutMe.svelte";
  import Categories from "./Categories.svelte";
  import RecentEvents from "./RecentEvents.svelte";

  import type { PageData } from "./$types";
  export let data: PageData;
  let events = data.events;
  let paintings = data.paintings;
</script>

<title>Tasneem Zahida</title>
<!-- <Carousel {paintings}/> -->
<AboutMe/>
<Categories/>
<RecentEvents {events}/>
<!-- <div class="flex flex-col justify-center h-[100vh]"> -->
<!--   <h1 class="text-5xl md:text-hxl text-primary text-center mb-20 mx-8 leading-none">Events Coming Soon...</h1> -->
<!-- </div> -->
