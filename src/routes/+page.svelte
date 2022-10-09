<script lang="ts">
  import AboutMe from "./AboutMe.svelte";
  import Categories from "./Categories.svelte";
  import RecentEvents from "./RecentEvents.svelte";

  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<AboutMe/>
<Categories/>
<RecentEvents events={data.events}/>
