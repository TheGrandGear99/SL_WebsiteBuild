<script lang="ts">
  import { automationProducts } from "$lib/data/products";
</script>

<svelte:head>
  <title>Trading Automation Tools - Signal Lynx</title>
  <meta name="description" content="Webhook setup scripts and signal routing engines for traders." />
</svelte:head>

<div class="py-12 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-primary">Trading Automation</h1>
    <p class="mt-4 text-xl">Tools for traders who value control and low cost.</p>
  </div>

  <div class="flex flex-col lg:flex-row gap-8 mt-12 max-w-5xl mx-auto place-content-center items-stretch">
    <!-- Automation Products -->
    {#each automationProducts as product}
      <div class="card bg-base-100 w-full lg:w-1/2 flex-none shadow-xl border-2 {product.id === 'engine' ? 'border-secondary' : 'border-transparent'}">
        <div class="card-body p-8 flex flex-col">
          <h3 class="card-title text-2xl text-primary">{product.title}</h3>
          <p class="text-base-content/80 flex-grow">{product.tagline}</p>
          
          <ul class="my-4 space-y-2 text-left">
            {#each product.features as feature}
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-success shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="currentColor"/></svg>
                <span>{feature}</span>
              </li>
            {/each}
          </ul>

          <div class="mt-auto pt-4">
            <p class="text-4xl font-bold text-center">{product.price}</p>
            <div class="card-actions justify-center mt-4">
              <a href="/account" class="btn btn-primary btn-wide">{product.ctaLabel}</a>
            </div>
            <p class="text-center text-xs text-base-content/50 mt-2">{product.footnote}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>