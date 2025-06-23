<script lang="ts">
  import { automationProducts } from "$lib/data/products";
  import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<svelte:head>
  <title>Trading Automation - Signal Lynx</title>
  <meta name="description" content="Own the machine, own the trade. Local-first webhook tools for traders." />
</svelte:head>

<!-- Hero Section -->
<div class="text-center py-16 md:py-24 px-4 bg-base-200">
  <h1 class="text-4xl md:text-6xl font-bold text-primary">Own the machine. Own the trade.</h1>
  <p class="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-base-content/80">
    Skip mystery clouds—run our tools on a laptop or budget VPS you already control. Your API keys never leave the building, and you’ll be off to the races before your energy drink loses its fizz.
  </p>
</div>

<!-- Product Cards Section -->
<div class="py-16 px-4 bg-base-100">
  <div class="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto place-content-center items-stretch">
    {#each automationProducts as product}
      <ProductCard {product} />
    {/each}
  </div>
</div>

<!-- Deep Dive Accordion Section -->
<div class="py-16 px-4 bg-base-200">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">The Nitty-Gritty Details</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="deep-dive-accordion" checked={true} /> 
        <div class="collapse-title text-xl font-medium">
          Will this run on my old laptop?
        </div>
        <div class="collapse-content"> 
          <p>Yes. Tested on Windows 10/11 and Windows Server 2016+. Requires at least 2 vCPU and 2 GB of RAM, which even most budget hardware from the last decade can handle.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="deep-dive-accordion" />
        <div class="collapse-title text-xl font-medium">
          What does the Setup Script actually do?
        </div>
        <div class="collapse-content"> 
          <p>It programmatically installs and configures NGINX as a reverse proxy, requests a Let's Encrypt SSL certificate via win-acme, sets up a scheduled task for auto-renewal, and writes Windows Firewall rules to whitelist only traffic from major charting providers on ports 80 and 443.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="deep-dive-accordion" /> 
        <div class="collapse-title text-xl font-medium">
          What happens if my VPS reboots?
        </div>
        <div class="collapse-content"> 
          <p>Both the Setup Script and the Trade Pilot engine are configured to run as persistent Windows services, so they will restart automatically on boot. No manual intervention is needed.</p>
        </div>
      </div>
       <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-accordion" /> 
        <div class="collapse-title text-xl font-medium">
          How secure is "secure"?
        </div>
        <div class="collapse-content"> 
          <p>Our philosophy is "zero trust." The Setup Script uses an industry-standard SSL provider (Let's Encrypt), hardens firewall rules, and your API keys never leave your machine. The engine communicates directly with the exchanges, not our servers. All local secrets are encrypted at rest with AES-256 and passwords are cryptographically hashed using Argon2id.</p>
        </div>
      </div>
    </div>
  </div>
</div>