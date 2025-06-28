<script lang="ts">
  import { allProducts } from "$lib/data/products"
  import type { Product } from "$lib/data/products";

  interface Props {
    // Module context
    callToAction?: string
    highlightedPlanId?: string
    currentPlanId?: string
    center?: boolean
    ctaClass?: string // New property for custom button classes
  }

  let {
    callToAction = "",
    highlightedPlanId = "",
    currentPlanId = "",
    center = true,
    ctaClass = ""
  }: Props = $props()
</script>

<div
  class="flex flex-col lg:flex-row gap-10 {center
    ? 'place-content-center'
    : ''} flex-wrap"
>
  {#each allProducts as plan: Product}
    <div
      class="card shadow-xl flex-1 min-w-[260px] max-w-[310px] p-6 border-4 border-transparent transition-all duration-300 hover:border-accent"
    >
      <div class="flex flex-col h-full">
        <div class="text-xl font-bold">{plan.title}</div>
        <p class="mt-2 text-sm text-base-content/70 flex-grow">
          {plan.tagline}
        </p>
        <div class="mt-auto pt-4 text-sm text-base-content/80">
          Plan Includes:
          <ul class="list-disc list-inside mt-2 space-y-1">
            {#each plan.features as feature}
              <li class="">{feature}</li>
            {/each}
          </ul>
        </div>
        <div class="pt-8">
          <span class="text-4xl font-bold">{plan.price}</span>
          <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
            {#if plan.id === currentPlanId}
              <div
                class="btn btn-outline btn-success no-animation w-[80%] mx-auto cursor-default"
              >
                Current Plan
              </div>
            {:else}
              <a
                href={plan.stripe_price_id ? `/account/subscribe/${plan.stripe_price_id}` : '/login'}
                class="btn btn-primary w-[80%] mx-auto {ctaClass}"
              >
                {callToAction || plan.ctaLabel}
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>