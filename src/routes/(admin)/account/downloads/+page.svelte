<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  let adminSection: Writable<string> = getContext('adminSection');
  adminSection.set('downloads');

  let { data } = $props();
  const { entitlements } = data;

  // Define product info here to keep the template clean
  const products = {
    setupScript: {
      name: "Signal Shield",
      subtitle: "The One-Button Bodyguard",
      description: "Your one-click script to harden and prepare any Windows machine for secure, 24/7 automated trading.",
      readme: "/documents/Setup-Script-README.pdf"
    },
    webhookEngine: {
      name: "Lynx-Relay",
      subtitle: "The Automated Trading Executor",
      description: "The core engine that turns your TradingView alerts into real-money trades. Signal Shield is included.",
      readme: "/documents/Webhook-Engine-README.pdf"
    },
    licenseHub: {
      name: "Key Commander",
      subtitle: "The Self-Hosted License Hub",
      description: "Your self-hosted command center for software licensing, subscription management, and automated key delivery.",
      readme: "/documents/License-Hub-README.pdf"
    }
  };
</script>

<svelte:head>
  <title>Your Arsenal - Signal Lynx</title>
</svelte:head>

<h1 class="text-3xl font-bold text-primary">Your Arsenal</h1>
<p class="mt-2 text-lg">Download your licensed software and review the mission briefs (READMEs) here.</p>

<div class="mt-8 space-y-6">

  <!-- Setup Script Download -->
  {#if entitlements.setupScript}
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="card-title text-2xl text-secondary">{products.setupScript.name}</h2>
          <p class="font-semibold text-accent -mt-1">{products.setupScript.subtitle}</p>
          <p class="mt-2 text-base-content/80 max-w-lg">{products.setupScript.description}</p>
        </div>
        <div class="card-actions justify-start md:justify-end mt-4 md:mt-0 md:pl-4">
          <a href={products.setupScript.readme} target="_blank" class="btn btn-ghost">View README</a>
          <button class="btn btn-primary btn-gradient-electric" disabled>Download v1.0</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- Webhook Engine Download -->
  {#if entitlements.webhookEngine}
    <div class="card bg-base-200 shadow-xl">
       <div class="card-body md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="card-title text-2xl text-secondary">{products.webhookEngine.name}</h2>
          <p class="font-semibold text-accent -mt-1">{products.webhookEngine.subtitle}</p>
          <p class="mt-2 text-base-content/80 max-w-lg">{products.webhookEngine.description}</p>
        </div>
        <div class="card-actions justify-start md:justify-end mt-4 md:mt-0 md:pl-4">
          <a href={products.webhookEngine.readme} target="_blank" class="btn btn-ghost">View README</a>
          <button class="btn btn-primary btn-gradient-electric" disabled>Download v1.0</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- License Hub Download -->
  {#if entitlements.licenseHub}
    <div class="card bg-base-200 shadow-xl">
       <div class="card-body md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="card-title text-2xl text-secondary">{products.licenseHub.name}</h2>
          <p class="font-semibold text-accent -mt-1">{products.licenseHub.subtitle}</p>
          <p class="mt-2 text-base-content/80 max-w-lg">{products.licenseHub.description}</p>
        </div>
        <div class="card-actions justify-start md:justify-end mt-4 md:mt-0 md:pl-4">
          <a href={products.licenseHub.readme} target="_blank" class="btn btn-ghost">View README</a>
          <button class="btn btn-primary btn-gradient-electric" disabled>Download v1.0</button>
        </div>
      </div>
    </div>
  {/if}

  <!-- Empty State -->
  {#if !entitlements.webhookEngine && !entitlements.licenseHub && !entitlements.setupScript}
    <div class="text-center p-10 border-2 border-dashed border-base-300 rounded-lg">
        <h2 class="text-2xl font-bold">Your Arsenal is Empty</h2>
        <p class="mt-2">You do not have any active subscriptions. Deploy a plan to access your tools.</p>
        <a href="/account/billing" class="btn btn-primary btn-gradient-electric mt-4">Choose Your Arsenal</a>
    </div>
  {/if}
</div>