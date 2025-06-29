<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<svelte:head>
  <title>Get Started - Signal Lynx</title>
</svelte:head>

<div>
  <h1 class="text-xl font-bold">Get Started</h1>
  <form on:submit|preventDefault={() => goto('/login/sign_up')} style="display: contents;">
    <button type="submit" class="btn btn-primary mt-3 btn-wide btn-gradient-electric">Sign Up</button>
  </form>

  <h1 class="text-xl mt-6">Already have an account?</h1>
  <form on:submit|preventDefault={() => goto('/login/sign_in')} style="display: contents;">
    <button type="submit" class="btn btn-outline btn-primary mt-3 btn-wide">Sign In</button>
  </form>
</div>