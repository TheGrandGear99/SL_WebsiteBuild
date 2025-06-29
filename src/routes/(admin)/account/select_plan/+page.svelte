<script lang="ts">
  import PricingModule from "$lib/components/pricing_module.svelte";
  import { WebsiteName } from "../../../../config";
</script>

<svelte:head>
  <title>Choose Your Arsenal - {WebsiteName}</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-100 p-4">
  <div class="card w-full max-w-4xl bg-base-200 shadow-xl">
    <div class="card-body items-center text-center">
      <h1 class="card-title text-4xl font-bold text-primary mb-2">Choose Your Arsenal</h1>
      <p class="text-lg text-base-content/80 max-w-2xl">
        Your account is ready. Select a plan below to deploy your tools and go live. For full details, you can review the public 
        <a href="/trading-automation" target="_blank" class="link link-accent">product pages</a>.
      </p>
      <div class="mt-8 w-full">
        <PricingModule 
          callToAction="Deploy Plan" 
          center={true} 
          ctaClass="btn-gradient-electric" 
        />
      </div>
    </div>
  </div>
</div>