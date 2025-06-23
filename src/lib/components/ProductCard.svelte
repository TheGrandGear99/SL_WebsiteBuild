<script lang="ts">
  import type { Product } from '$lib/data/products';

  let { product }: { product: Product } = $props();
</script>

<div class="card bg-base-200 w-full lg:w-1/2 flex-none shadow-xl border-2 {product.id === 'engine' || product.id === 'license-hub' ? 'border-secondary' : 'border-transparent'}">
  <div class="card-body p-8 flex flex-col">
    <h3 class="card-title text-2xl text-primary">{product.title}</h3>
    <p class="text-base-content/80 flex-grow mt-4">{product.tagline}</p>
    
    {#if product.features}
    <ul class="my-6 space-y-3 text-left">
      {#each product.features as feature}
        <li class="flex items-start gap-3">
          <svg class="w-6 h-6 text-success shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="currentColor"/></svg>
          <span>{feature}</span>
        </li>
      {/each}
    </ul>
    {/if}

    <div class="mt-auto pt-4">
      <p class="text-4xl font-bold text-center">{product.price}</p>
      <div class="card-actions justify-center mt-4">
        <a href={product.stripe_price_id ? `/account/subscribe/${product.stripe_price_id}` : '/login'} class="btn btn-primary btn-wide">{product.ctaLabel}</a>
      </div>
      <p class="text-center text-xs text-base-content/50 mt-2">{product.footnote}</p>
    </div>
  </div>
</div>