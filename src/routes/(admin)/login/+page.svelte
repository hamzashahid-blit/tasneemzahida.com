<script lang="ts">
  import { enhance } from '$app/forms';
  import PasswordInput from './PasswordInput.svelte'
  let { form }: { form: ActionData } = $props();
</script>

<article class="pico">
  <form method="POST" action="?/login" use:enhance>
    <fieldset>
      <label>
        Username
        <input
          name="username"
          type="text"
          aria-label="Username"
          aria-invalid={form ? (form?.errors?.username ? 'true' : 'false') : null}
          aria-describedby="username-helper">
        <small id="username-helper">{form?.errors?.username}</small>
      </label>
      <PasswordInput {form} />
      <button
        name="login"
        aria-describedby="login-helper"
        >Login</button>
      <small id="login-helper">{form?.errors?.login}</small>
    </fieldset>
  </form>
</article>

<style>
  article {
    width: 90vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 100%;
  }
</style>
