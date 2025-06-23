<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  let adminSection: Writable<string> = getContext('adminSection');
  adminSection.set('downloads'); // Sets the active item in the sidebar

  let { data } = $props();
  const { entitlements } = data;
</script>

<svelte:head>
  <title>Your Downloads - Signal Lynx</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Your Downloads</h1>

<div class="space-y-8">
  <!-- Setup Script Download -->
  {#if entitlements.setupScript}
    <div class="card bg-base-200 shadow-md">
      <div class="card-body">
        <h2 class="card-title">🛡️ One-Button Setup Script</h2>
        <p>Your lifetime license for our one-click server hardening script for Windows.</p>
        <div class="card-actions justify-end">
          <a href="/documents/Setup-Script-README.pdf" target="_blank" class="btn btn-ghost">View README</a>
          <button class="btn btn-primary" disabled>Download v1.0</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- Webhook Engine Download -->
  {#if entitlements.webhookEngine}
    <div class="card bg-base-200 shadow-md">
      <div class="card-body">
        <h2 class="card-title">🎛️ Trade Pilot Dashboard (Webhook Engine)</h2>
        <p>Your subscription includes access to the Trade Pilot Dashboard. The Setup Script is also included.</p>
        <div class="card-actions justify-end">
          <a href="/documents/Webhook-Engine-README.pdf" target="_blank" class="btn btn-ghost">View README</a>
          <button class="btn btn-primary" disabled>Download v1.0</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- License Hub Download -->
  {#if entitlements.licenseHub}
    <div class="card bg-base-200 shadow-md">
      <div class="card-body">
        <h2 class="card-title">🔑 License-Hub Dashboard</h2>
        <p>Your subscription includes access to the self-hosted License Hub.</p>
        <div class="card-actions justify-end">
          <a href="/documents/License-Hub-README.pdf" target="_blank" class="btn btn-ghost">View README</a>
          <button class="btn btn-primary" disabled>Download v1.0</button>
        </div>
      </div>
    </div>
  {/if}

  {#if !entitlements.webhookEngine && !entitlements.licenseHub}
    <div class="text-center p-8 border-2 border-dashed border-base-300 rounded-lg">
        <p>You do not have any active subscriptions.</p>
        <a href="/blog" class="btn btn-primary mt-4">View Products</a>
    </div>
  {/if}
</div>