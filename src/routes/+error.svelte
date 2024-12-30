<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="min-h-[calc(100vh-theme(space.28)-theme(space.14))] w-full flex items-center justify-center mb-10 -my-10">
  <h2 class="text-5xl text-primary">
	<span class="text-gray-500">[{$page.status}]</span>
	{$page.error.message}
  </h2>
</div>
