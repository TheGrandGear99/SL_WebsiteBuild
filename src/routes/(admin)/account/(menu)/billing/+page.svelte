<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings/settings_module.svelte"
  import PricingModule from "$lib/components/pricing_module.svelte"
  import { allProducts, defaultPlanId } from "$lib/data/products"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("billing")

  let { data } = $props()

  let currentPlanId = data.currentPlanId ?? defaultPlanId
  let currentPlanName = allProducts.find(
    (x) => x.id === data.currentPlanId,
  )?.title
</script>

<svelte:head>
  <title>Billing Command</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-2">
  Billing Command
</h1>

{#if !data.isActiveCustomer}
  <div>
    <p>Your arsenal is empty. Choose a plan to deploy your tools and go live.</p>
    <p class="text-sm mt-1">For more details, see the full <a href="/trading-automation" target="_blank" class="link">product pages</a>.</p>
  </div>
  <div class="mt-8">
    <PricingModule {currentPlanId} callToAction="Deploy Plan" center={false} ctaClass="btn-gradient-electric" />
  </div>

  {#if data.hasEverHadSubscription}
    <div class="mt-10">
      <a href="/account/billing/manage" class="link">Review past invoices</a>
    </div>
  {/if}
{:else}
  <div>
    <p>Manage your active subscription, payment methods, and review past invoices.</p>
  </div>
  <SettingsModule
    title="Active Subscription"
    editable={false}
    fields={[
      {
        id: "plan",
        label: "Current Arsenal",
        initialValue: currentPlanName || "N/A",
      },
    ]}
    editButtonTitle="Manage Subscription"
    editLink="/account/billing/manage"
    editButtonClass="btn-gradient-electric"
  />
{/if}