<script lang="ts">
  import { getContext } from 'svelte';
  import { enhance } from '$app/forms';
  import type { Writable } from 'svelte/store';

  let adminSection: Writable<string> = getContext('adminSection');
  adminSection.set('reset-machine-id');

  let { data, form } = $props();
  
  // By declaring isLoading with $state, we make it reactive.
  let isLoading = $state(false);
</script>

<svelte:head>
  <title>Reset Machine ID - Signal Lynx</title>
</svelte:head>

<h1 class="text-3xl font-bold text-primary mb-2">Machine ID Reset</h1>
<p class="text-base-content/80">
  Use this tool to clear all existing machine activations from your license key. This allows you to activate your software on a new computer.
</p>
<p class="text-base-content/80 mt-1">
  Please note: This action can only be performed **once every 30 days** per license key.
</p>

<div class="card w-full max-w-lg bg-base-200 shadow-xl mt-8">
  <div class="card-body">
    <form 
      method="POST" 
      use:enhance={() => {
        isLoading = true;
        return async ({ update }) => {
          await update();
          isLoading = false;
        };
      }}
      class="space-y-4"
    >
      <div>
        <label for="email" class="label">
          <span class="label-text">Your Account Email</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your account email"
          class="input input-bordered w-full"
          value={data.user?.email ?? ''}
          readonly
        />
        <div class="label">
          <span class="label-text-alt">This is locked to your logged-in account for security.</span>
        </div>
      </div>

      <div>
        <label for="licenseKey" class="label">
          <span class="label-text">Your License Key</span>
        </label>
        <input
          id="licenseKey"
          name="licenseKey"
          type="text"
          placeholder="LM-ABCD-1234-EFGH-5678-IJKL"
          class="input input-bordered w-full"
          value={form?.licenseKey ?? ''}
          required
        />
      </div>
      
      {#if form?.success}
        <div role="alert" class="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{form.message}</span>
        </div>
      {/if}

      {#if form?.error}
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{form.error}</span>
        </div>
      {/if}

      <div class="card-actions justify-end pt-4">
        <button type="submit" class="btn btn-primary btn-gradient-electric" disabled={isLoading}>
          {#if isLoading}
            <span class="loading loading-spinner"></span>
            Processing...
          {:else}
            Reset Activations
          {/if}
        </button>
      </div>
    </form>
  </div>
</div>