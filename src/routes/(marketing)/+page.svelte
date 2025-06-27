<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"
  import { allProducts } from "$lib/data/products";

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

<!-- New Banner Image Section -->
<div class="w-full bg-base-200 flex justify-center">
  <img src="/images/SignalLynxHomePageBanner.png" alt="Signal Lynx synthwave and retro electronics collage" class="w-full max-w-7xl object-contain max-h-[50vh]"/>
</div>

<!-- New Hero Text Section -->
<div class="hero min-h-[50vh] bg-base-200">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl flex flex-col items-center">
      <h1
        class="text-4xl md:text-6xl font-bold text-primary px-2 whitespace-nowrap"
        style="line-height: 1.2;"
      >
        Control the Flow, Keep the Dough.
      </h1>
      <h2 class="mt-6 md:mt-10 text-lg md:text-2xl whitespace-nowrap">
        Security-first automation priced lower than a neon energy drink.
      </h2>
      <div
        class="mt-8 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="#pricing">
          <button class="btn btn-primary px-8">Start Free Trial</button>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Trust Bar -->
<div class="bg-base-100 py-8">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h4 class="font-bold mt-2">Keys Stay Local</h4>
            <p class="text-sm text-base-content/70">Your API keys never touch our servers. Period.</p>
        </div>
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4v-1m-4-1v1H7a1 1 0 01-1-1V7a1 1 0 011-1h4v1m0 0h-4" />
            </svg>
            <h4 class="font-bold mt-2">No Surprise Bills</h4>
            <p class="text-sm text-base-content/70">One flat, fair price. We don't tax your success.</p>
        </div>
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 class="font-bold mt-2">Setup in Minutes</h4>
            <p class="text-sm text-base-content/70">Live before you can finish an energy drink.</p>
        </div>
    </div>
</div>

<!-- About Us Section -->
<div class="py-16 bg-base-200">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-primary mb-8">About Us</h2>
    <div class="space-y-6 text-lg text-base-content/80 text-left">
      <p>
        Signal Lynx got its start when a handful of engineers and traders—just like you—said “enough” to automation tools that cost more than rent, miss trades while you’re grabbing snacks, and scatter your API keys across the internet after every big-name breach. So we built our own neon-fueled stack and now we’re sharing it—no VC yachts, no endless upsells, no usage-based fees—just battle-tested code we run on our own rigs.
      </p>
      <p>
        We believe automation should be as simple as pressing “go.” Every feature—from our one-click setup wizard to our self-hosted license hub—was crafted with beginners in mind. No obscure configs, no hidden menus, just intuitive workflows that get you trading or shipping software in minutes.
      </p>
      <p>
        Forged in 2 AM coding sprints and powered by way too many energy drinks, Signal Lynx is built by folks who punch a time clock by day. We refuse to slap Fortune 500 prices on software you host yourself. Others call it disruptive pricing; we call it fair.
      </p>
      <p>
        Our roadmap is yours to shape. Tell us what features or products you need next on Telegram or X—we really do read every message, probably while sipping our third energy drink of the day.
      </p>
    </div>
  </div>
</div>

<!-- Feature Showcase Section -->
<div class="py-16 bg-base-100 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4">
    <div class="relative">
        <!-- Left Arrow -->
        <button on:click={() => scroll('left')} class="btn btn-circle btn-ghost absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex">❮</button>
        
        <div bind:this={scrollContainer} class="flex space-x-8 overflow-x-auto pb-4 hide-scrollbar">
        {#each featureShowcase as feature}
            <div class="card bg-base-200 w-80 md:w-96 flex-none shadow-xl flex flex-col">
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
        <button on:click={() => scroll('right')} class="btn btn-circle btn-ghost absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex">❯</button>
    </div>
  </div>
</div>

<div id="pricing" class="py-16 bg-base-200">
  <div class="max-w-4xl mx-auto text-center mb-12 px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-primary pb-2">
        Meet the Arsenal
      </h2>
      <p class="mt-4 text-xl whitespace-nowrap">
        No hidden fees. No enterprise sales calls. Just tools that work.
      </p>
  </div>
  
  <!-- Powered Up Product Cards -->
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 justify-center items-stretch">
    {#each allProducts as product (product.id)}
       <div class="card bg-base-100 shadow-xl flex-1 flex flex-col min-w-[280px] max-w-[400px] border-4 border-transparent transition-all duration-300 hover:border-accent">
            <div class="card-body p-8 flex flex-col">
                <div class="text-center">
                    <h2 class="card-title justify-center text-2xl font-bold text-secondary">{product.name}</h2>
                    <h3 class="mt-1 text-lg font-normal text-accent">{product.title}</h3>
                </div>
                <p class="text-base-content/80 mt-4">{product.tagline}</p>
                
                <ul class="my-6 space-y-3 text-left flex-grow">
                {#each product.features as feature}
                    <li class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-success shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="currentColor"/></svg>
                    <span>{feature}</span>
                    </li>
                {/each}
                </ul>

                <div class="mt-auto pt-4">
                    <p class="text-5xl font-bold text-center">{product.price}</p>
                    <div class="card-actions justify-center mt-6">
                        <a href={product.stripe_price_id ? `/account/subscribe/${product.stripe_price_id}` : '/login'} class="btn btn-primary btn-wide">{product.ctaLabel}</a>
                    </div>
                    <p class="text-center text-xs text-base-content/50 mt-2">{product.footnote}</p>
                </div>
            </div>
        </div>
    {/each}
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