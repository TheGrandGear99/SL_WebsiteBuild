<script lang="ts">
  import { licenseHubProduct } from "$lib/data/products";
</script>

<svelte:head>
  <title>License Hub - Signal Lynx</title>
  <meta name="description" content="Self-hosted license manager for SaaS builders." />
</svelte:head>

<div class="py-12 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-primary">License Hub</h1>
    <p class="mt-4 text-xl">Ship software, not headaches.</p>
  </div>

  <div class="flex justify-center mt-12">
    <!-- License Hub Product Card -->
    <div class="card bg-base-100 w-full max-w-md flex-none shadow-xl border-2 border-accent">
      <div class="card-body p-8 flex flex-col">
        <h3 class="card-title text-2xl text-primary">{licenseHubProduct.title}</h3>
        <p class="text-base-content/80 flex-grow">{licenseHubProduct.tagline}</p>
        
        <ul class="my-4 space-y-2 text-left">
          {#each licenseHubProduct.features as feature}
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-success shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="currentColor"/></svg>
              <span>{feature}</span>
            </li>
          {/each}
        </ul>

        <div class="mt-auto pt-4">
          <p class="text-4xl font-bold text-center">{licenseHubProduct.price}</p>
          <div class="card-actions justify-center mt-4">
            <a href="/account" class="btn btn-primary btn-wide">{licenseHubProduct.ctaLabel}</a>
          </div>
          <p class="text-center text-xs text-base-content/50 mt-2">{licenseHubProduct.footnote}</p>
        </div>
      </div>
    </div>
  </div>
</div>