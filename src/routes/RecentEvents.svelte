<script>
  import Event from "./Event.svelte";
</script>

<div class="flex flex-col justify-center h-[120vh]">
  <h1 class="text-hxl text-primary text-center mb-20">Recent Events</h1>
  <div class="flex items-center justify-center space-x-[4%]">
    <Event/>
    <Event/>
    <Event/>
    <Event/>
  </div>
  <a class="text-primary text-2xl border-2 border-primary rounded-full px-4 py-1 mb-8 mt-20 transition-all duration-200 hover:text-white hover:bg-primary self-center" href="/events" data-sveltekit-prefetch>All Events</a>
</div>
