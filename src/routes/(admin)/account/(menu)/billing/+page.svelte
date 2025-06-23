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
  <title>Billing</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-2">
  {data.isActiveCustomer ? "Billing" : "Select a Plan"}
</h1>
<div>
  View our <a href="/trading-automation" target="_blank" class="link">product pages</a> for details.
</div>

{#if !data.isActiveCustomer}
  <div class="mt-8">
    <PricingModule {currentPlanId} callToAction="Select Plan" center={false} />
  </div>

  {#if data.hasEverHadSubscription}
    <div class="mt-10">
      <a href="/account/billing/manage" class="link">View past invoices</a>
    </div>
  {/if}
{:else}
  <SettingsModule
    title="Subscription"
    editable={false}
    fields={[
      {
        id: "plan",
        label: "Current Plan",
        initialValue: currentPlanName || "",
      },
    ]}
    editButtonTitle="Manage Subscription"
    editLink="/account/billing/manage"
  />
{/if}