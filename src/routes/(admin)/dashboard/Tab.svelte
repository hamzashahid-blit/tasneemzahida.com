<script lang="ts">
  let { tabNames, currTab = $bindable(), form = $bindable() }: {
    tabNames: string[],
    currTab: string,
    form: FormData,
  } = $props();
</script>

<div role="group">
  {#each tabNames as tabName}
    <button aria-current={currTab === tabName}
            onclick={() => {currTab = tabName; form = undefined;}}>
      {tabName}
    </button>
  {/each}
</div>

<style>
  @media only screen and (max-width: 450px) {
    div[role="group"] {
      display: flex;
      flex-direction: column;
    }
    button {
      border-radius: 0rem;
    }
  }
</style>
