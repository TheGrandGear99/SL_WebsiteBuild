<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"
  import PricingModule from "$lib/components/pricing_module.svelte";

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const featureShowcase = [
    {
      title: "Security First",
      description: "Your keys, your server, your rules. Signal Lynx runs on your hardware so your API keys never leave your control.",
      details: ["Industry-leading encryption", "Bank-grade TLS configuration", "Rock-solid HTTPS everywhere"]
    },
    {
      title: "Trade Monitoring with PnL",
      description: "Track your trade history with details on entry, exit, and Profit-and-Loss to optimize your strategies.",
      details: ["Real-time fill tracking", "Automated PnL calculation", "Historical performance review"]
    },
    {
      title: "Stay Informed, On the Go",
      description: "Get real-time notifications on your trades and alerts, even when you're away from your desk.",
      details: ["Instant Telegram notifications", "Handle multiple accounts", "Monitor multiple exchanges"]
    },
    {
      title: "Fast and Secure Installation",
      description: "Streamline your webhook setup on any Windows machine or VPS with our one-click configuration tool.",
      details: ["15-minute setup", "Automated NGINX & SSL config", "Hardened firewall rules"]
    },
     {
      title: "Self-Hosted License Hub",
      description: "For SaaS builders who need a robust, affordable, and self-hosted licensing solution.",
      details: ["Automated key generation", "Stripe & PayPal integration", "Nightly database backups"]
    }
  ];

  let scrollContainer: HTMLElement;
  let scrollInterval: ReturnType<typeof setInterval>;

  function scroll(direction: 'left' | 'right') {
    if (!scrollContainer) return;
    const scrollAmount = scrollContainer.clientWidth * 0.8; // Scroll 80% of the container width
    scrollContainer.scrollBy({ 
      left: direction === 'right' ? scrollAmount : -scrollAmount, 
      behavior: 'smooth' 
    });
  }

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      // If we've scrolled to the end, loop back to the start
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scroll('right');
      }
    }, 5000); // Auto-scroll every 5 seconds
  }

  onMount(() => {
    startAutoScroll();
    scrollContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    scrollContainer.addEventListener('mouseleave', startAutoScroll);
  });

  onDestroy(() => {
    clearInterval(scrollInterval);
  });

</script>

<svelte:head>
  <title>{WebsiteName}: Control the Flow, Keep the Dough.</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[70vh] bg-synth-grid bg-repeat">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <h1
        class="text-4xl md:text-6xl font-bold text-primary px-2"
        style="line-height: 1.2;"
      >
        Control the Flow, Keep the Dough.
      </h1>
      <h2 class="mt-6 md:mt-10 text-lg md:text-2xl">
        Security-first automation priced lower than a neon energy drink.
      </h2>
      <div
        class="mt-8 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="#pricing">
          <button class="btn btn-primary px-8">Start Free Trial</button>
        </a>
        <a href="#demo">
          <button class="btn btn-outline btn-secondary px-8">Watch 60-sec Demo</button>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Feature Showcase Section -->
<div class="py-16 bg-base-200 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4">
    <!-- Left Arrow -->
    <button on:click={() => scroll('left')} class="btn btn-circle btn-ghost absolute left-2 top-1/2 -translate-y-1/2 z-10">❮</button>
    
    <div bind:this={scrollContainer} class="flex space-x-8 overflow-x-auto pb-4 hide-scrollbar">
      {#each featureShowcase as feature}
        <div class="card bg-base-100 w-80 md:w-96 flex-none shadow-xl flex flex-col">
          <div class="card-body">
            <h3 class="card-title text-2xl text-accent">{feature.title}</h3>
            <p class="text-base-content/70 mt-2 flex-grow">{feature.description}</p>
            <ul class="mt-4 space-y-2">
              {#each feature.details as detail}
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-success shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="currentColor"/></svg>
                  <span>{detail}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>

    <!-- Right Arrow -->
    <button on:click={() => scroll('right')} class="btn btn-circle btn-ghost absolute right-2 top-1/2 -translate-y-1/2 z-10">❯</button>
  </div>
</div>


<div id="pricing" class="py-16 bg-base-100">
  <div class="max-w-lg mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold text-primary pb-2">
        Pick Your Poison
      </h2>
      <p class="mt-4 text-xl">
        No hidden fees. No enterprise sales calls. Just tools that work.
      </p>
  </div>
  <PricingModule callToAction="Get Started" highlightedPlanId="engine" />
</div>

<div id="demo" class="hero min-h-[60vh] mt-12 bg-base-300">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold text-primary mt-4 pb-2"
      >
        See How It Works
      </div>
       <div class="mt-4 text-xl">
         (Your awesome 60-second demo video goes here)
       </div>
        <div class="mt-6 rounded-lg bg-black aspect-video w-full max-w-lg flex items-center justify-center">
            <p class="text-base-content/50">Demo video coming soon...</p>
        </div>
    </div>
  </div>
</div>

<style>
  .hide-scrollbar {
    scrollbar-width: none; /* For Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
</style>