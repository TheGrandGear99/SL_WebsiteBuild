<script lang="ts">
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Error {$page.status} - Signal Lynx</title>
</svelte:head>

<div class="hero min-h-screen bg-base-100">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-8xl font-bold text-secondary">{$page.status}</h1>
      <p class="py-4 text-3xl font-bold text-primary">
        Houston, We Have a Glitch.
      </p>
      <p class="text-lg text-base-content/80">
        Looks like you've navigated to a dead signal or our system had a momentary lapse in judgement. These things happen. Here's the diagnostic:
      </p>

      {#if $page.error?.message}
        <div class="my-6 p-4 bg-base-200 rounded-lg text-left">
          <code class="text-accent">
            ERROR: {$page.error.message}
          </code>
        </div>
      {/if}

      <div>
        <a href="/" class="btn btn-primary btn-lg btn-gradient-electric">Return to Command Center</a>
      </div>
    </div>
  </div>
</div>