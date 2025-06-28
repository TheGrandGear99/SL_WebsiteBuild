<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")

  let { data } = $props()
  const { user, profile, isActiveCustomer, currentPlanName, planStatus } = data;

  // A helper to make the Stripe status more human-readable
  function formatStatus(status: string | undefined) {
    if (!status) return 'Inactive';
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
</script>

<svelte:head>
  <title>Operator Dashboard</title>
</svelte:head>

<div class="mb-8">
  <h1 class="text-4xl font-bold text-primary">Operator Dashboard</h1>
  <p class="text-xl mt-2">Welcome back, {profile?.full_name || user?.email || 'Operator'}.</p>
</div>

{#if isActiveCustomer}
  <!-- ========== VIEW FOR ACTIVE SUBSCRIBERS ========== -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    <!-- Subscription Status Card -->
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl text-secondary">Subscription Status</h2>
        <p class="text-lg">Your Plan: <span class="font-bold">{currentPlanName || 'N/A'}</span></p>
        <div class="badge badge-success badge-lg my-2">{formatStatus(planStatus)}</div>
        <div class="card-actions justify-start mt-4">
          <a href="/account/billing/manage" class="btn btn-primary btn-gradient-electric">Manage Billing & Invoices</a>
        </div>
      </div>
    </div>

    <!-- Your Arsenal Card -->
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-2xl text-secondary">Your Arsenal</h2>
        <p>Access your licensed software, tools, and setup guides here. All systems are go.</p>
        <div class="card-actions justify-start mt-4">
          <a href="/account/downloads" class="btn btn-primary btn-gradient-electric">Access Your Downloads</a>
        </div>
      </div>
    </div>

    <!-- Mission-Critical Links -->
    <div class="card bg-base-200 shadow-xl lg:col-span-2">
       <div class="card-body">
        <h2 class="card-title text-2xl text-secondary">Mission-Critical Links</h2>
        <p>Quick access to manage your profile or get support from the community.</p>
        <div class="card-actions justify-start mt-4 gap-4">
          <a href="/account/settings" class="btn btn-outline">Adjust Operator Profile</a>
           <a href="/docs" class="btn btn-outline">Read the Docs</a>
          <a href="https://t.me/SignalLynx" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Join Command on Telegram</a>
        </div>
      </div>
    </div>

  </div>
{:else}
  <!-- ========== VIEW FOR NEW USERS (NO ACTIVE PLAN) ========== -->
  <div class="card bg-base-200 shadow-xl border-2 border-accent">
    <div class="card-body text-center items-center">
      <h2 class="card-title text-3xl text-secondary">Welcome to the Command Center</h2>
      <p class="max-w-md my-4">
        Your account is active, but you haven't deployed an arsenal yet. Select a plan to unlock your tools and go live.
      </p>
      <div class="card-actions">
        <a href="/account/billing" class="btn btn-primary btn-lg btn-gradient-electric">Choose Your Arsenal</a>
      </div>
    </div>
  </div>

  <div class="mt-8 text-center">
    <p>Need to adjust your basic profile or password? <a href="/account/settings" class="link">Go to Settings</a>.</p>
  </div>
{/if}