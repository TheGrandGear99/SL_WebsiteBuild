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
      title: "The Unhackable Fortress",
      description: "We built our tools on a simple premise: your keys, your server, your rules. Signal Lynx runs on your hardware, so your API keys never get caught in the crossfire of someone else's data breach.",
      details: ["End-to-end TLS encryption", "Hardened firewall rules on setup", "Local-first key management"]
    },
    {
      title: "Know Your PnL. Down to the Penny.",
      description: "Stop guessing. Start knowing. Our dashboard gives you a crystal-clear view of your trade history, tracking every entry, exit, and the glorious (or painful) P&L.",
      details: ["Real-time trade and fill tracking", "Automated P&L calculation per trade", "Consolidated history across exchanges"]
    },
    {
      title: "Built for the Night-Shift Nation",
      description: "For the side-hustlers, the after-hours builders, and the traders watching charts when the rest of the world is asleep. We build robust, affordable tools that respect your time and your budget.",
      details: ["Fair, flat-rate pricing for solo operators", "Tools that just work, no babysitting required", "Direct access to the devs who build it"]
    },
    {
      title: "Never Miss a Fill. Ever.",
      description: "Get real-time Telegram notifications the second your bot makes a move. Monitor trades and alerts from anywhere, even when you're pretending to work.",
      details: ["Instant push notifications", "Monitor multiple accounts & exchanges", "Full trade lifecycle alerts"]
    },
    {
      title: "One-Click Deployment",
      description: "Our Signal Shield installer streamlines your webhook setup on any Windows machine or VPS. Go from zero to a fully hardened, trade-ready server in under 15 minutes.",
      details: ["Automated NGINX & SSL config", "Secure firewall rules by default", "Built for operators, not IT admins"]
    },
    {
      title: "No-Nonsense, No-Surprise Pricing",
      description: "Tired of predatory pricing tiers and success taxes? So are we. Our model is simple: one flat fee for everything. We don't punish you for growing.",
      details: ["One flat, predictable fee", "All features included, always", "Cancel anytime, no questions asked"]
    },
    {
      title: "Works When the Internet Doesn't",
      description: "With Key Commander's offline validation, your users' software stays running even when their connection drops. Deliver a rock-solid experience your customers can rely on.",
      details: ["Secure offline session tokens (Ed25519)", "Zero interruptions for your end-users", "Full control over token lifespan"]
    },
    {
      title: "Ship Software, Not Headaches",
      description: "Our self-hosted Key Commander is for builders who are sick of paying a tax on their own success. Manage keys, subs, and trials from a GUI that actually makes sense.",
      details: ["Automated key generation & delivery", "Full Stripe integration", "Scheduled, automated database backups"]
    }
  ];

  // --- NEW, MORE ROBUST SCROLLING LOGIC ---
  let scrollContainer: HTMLElement;
  let cards: HTMLElement[] = [];
  let currentCardIndex = 0;
  let scrollInterval: ReturnType<typeof setInterval>;

  function scrollToCard(index: number) {
    if (!scrollContainer || !cards.length) return;
    const card = cards[index];
    const firstCard = cards[0];
    if (!card || !firstCard) return;

    // Calculate the precise scroll position relative to the container,
    // which prevents the main page from scrolling.
    // This accounts for any padding within the scroll container.
    const targetScrollLeft = card.offsetLeft - firstCard.offsetLeft;

    scrollContainer.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
    });
    currentCardIndex = index;
  }

  function advanceCarousel(direction: 'forward' | 'backward') {
    let nextIndex = currentCardIndex;
    if (direction === 'forward') {
      // If we are at the last card, loop back to the start, otherwise advance
      nextIndex = (currentCardIndex + 1) % cards.length;
    } else {
      // If we are at the first card, loop to the end, otherwise go back
      nextIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    }
    scrollToCard(nextIndex);
  }

  function handleManualScroll(direction: 'forward' | 'backward') {
    clearInterval(scrollInterval);
    advanceCarousel(direction);
    startAutoScroll();
  }

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      advanceCarousel('forward');
    }, 5000); // Auto-scroll every 5 seconds
  }

  onMount(() => {
    if (scrollContainer) {
      cards = Array.from(scrollContainer.querySelectorAll('.feature-card'));
    }
    startAutoScroll();
    scrollContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    scrollContainer.addEventListener('mouseleave', startAutoScroll);
  });

  onDestroy(() => {
    clearInterval(scrollInterval);
  });

</script>

<svelte:head>
  <title>{WebsiteName}: Automate Everything. Own Everything.</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<!-- Banner Image Section -->
<div class="w-full bg-base-200 flex justify-center">
  <img src="/images/SignalLynxHomePageBanner.png" alt="Signal Lynx synthwave and retro electronics collage" class="w-full max-w-7xl object-contain max-h-[50vh]"/>
</div>

<!-- Hero Text Section -->
<div class="hero min-h-[50vh] bg-base-200">
  <div class="hero-content text-center py-12">
    <div class="max-w-2xl flex flex-col items-center">
      <h1
        class="text-4xl md:text-6xl font-bold text-primary px-2"
        style="line-height: 1.2;"
      >
        Automate Everything. Own Everything.
      </h1>
      <h2 class="mt-6 md:mt-10 text-lg md:text-2xl max-w-xl">
        Local-first automation tools for traders and builders who'd rather spend their money on a second monitor than on someone else's cloud.
      </h2>
      <div
        class="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="#pricing">
          <button class="btn btn-primary btn-lg px-8 btn-gradient-electric">Start Free Trial</button>
        </a>
        <a href="/trading-automation">
          <button class="btn btn-outline btn-lg px-8">Explore the Arsenal</button>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Trust Bar -->
<div class="bg-base-100 py-12">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h4 class="font-bold mt-2 text-xl">Your Keys, Your Fortress</h4>
            <p class="text-base-content/70">Your API keys live on your machine, encrypted and untouchable. We never see them. Period.</p>
        </div>
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4v-1m-4-1v1H7a1 1 0 01-1-1V7a1 1 0 011-1h4v1m0 0h-4" />
            </svg>
            <h4 class="font-bold mt-2 text-xl">Predictable & Flat-Rate</h4>
            <p class="text-base-content/70">One fair price. No surprise tiers. We don't believe in taxing you for your own success.</p>
        </div>
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 class="font-bold mt-2 text-xl">Live Before the Caffeine Hits</h4>
            <p class="text-base-content/70">Go from zero to a fully-hardened, automated setup in less time than it takes to brew a pot of coffee.</p>
        </div>
    </div>
</div>

<!-- About Us / Manifesto Section -->
<div class="py-16 bg-base-200">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-primary mb-12">Forged in Late-Night Code & Early-Morning Markets</h2>
    <div class="space-y-8 text-lg text-base-content/80 text-left">
      <div>
        <h3 class="font-bold text-2xl text-accent">We Believe in Owning Your Stack.</h3>
        <p class="mt-2">
          Signal Lynx was born out of pure frustration. We were a handful of engineers and traders tired of "cloud-based" tools that leaked API keys like a sieve and automation platforms that missed trades while we were grabbing a snack. So we built our own neon-fueled arsenal. No VC yachts, no endless upsells, just battle-tested code we run on our own rigs.
        </p>
      </div>
       <div>
        <h3 class="font-bold text-2xl text-accent">We Believe Automation Should Be Easy.</h3>
        <p class="mt-2">
          We think automation should be as simple as pressing "go." Every feature—from our one-click setup wizard to our self-hosted license hub—was crafted with beginners in mind. No obscure configs, no hidden menus, just intuitive workflows that get you trading or shipping software in minutes.
        </p>
      </div>
      <div>
        <h3 class="font-bold text-2xl text-accent">We Believe in Fair Pricing.</h3>
        <p class="mt-2">
          Forged in 2 AM coding sprints and powered by way too many energy drinks, Signal Lynx is built by folks who still punch a time clock by day. We refuse to slap Fortune 500 prices on software you host yourself. Others call it disruptive; we just call it fair.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Feature Showcase Section -->
<div class="py-16 bg-base-100 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4">
    <div class="relative">
        <!-- Left Arrow -->
        <button on:click={() => handleManualScroll('backward')} class="btn btn-circle btn-ghost absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex">❮</button>

        <div bind:this={scrollContainer} class="flex space-x-8 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
        {#each featureShowcase as feature}
            <!-- Add a class for selection and snap alignment -->
            <div class="feature-card card bg-base-200 w-80 md:w-96 flex-none shadow-xl flex flex-col snap-start">
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
        <button on:click={() => handleManualScroll('forward')} class="btn btn-circle btn-ghost absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 hidden md:flex">❯</button>
    </div>
  </div>
</div>

<div id="pricing" class="py-16 bg-base-200">
  <div class="max-w-4xl mx-auto text-center mb-12 px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-primary pb-2">
        Meet the Arsenal
      </h2>
      <p class="mt-4 text-xl">
        No surprise tiers. No enterprise sales calls. Just gear that gets the job done.
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
                        <a href={product.stripe_price_id ? `/account/subscribe/${product.stripe_price_id}` : '/login'} class="btn btn-primary btn-wide btn-gradient-electric">{product.ctaLabel}</a>
                    </div>
                    <p class="text-center text-xs text-base-content/50 mt-2">{product.footnote}</p>
                </div>
            </div>
        </div>
    {/each}
  </div>
</div>

<!-- Integrations & Getting Started Section -->
<div class="py-16 bg-base-100">
  <div class="max-w-5xl mx-auto text-center px-4">

    <!-- Part 1: The Arsenal (Integrations) -->
    <h2 class="text-4xl md:text-5xl font-bold text-primary pb-2">
      Works With Your Setup
    </h2>
    <p class="mt-4 text-xl max-w-2xl mx-auto">
      Signal Lynx integrates with the tools you already use. No weird workarounds, no proprietary nonsense. Just a seamless link to your existing workflow.
    </p>

    <div class="mt-12">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
        <div class="flex justify-center" title="TradingView">
          <img src="/logos/tradingview.png" alt="TradingView Logo" class="h-20 sm:h-24" />
        </div>
        <div class="flex justify-center" title="Stripe">
          <img src="/logos/stripe.png" alt="Stripe Logo" class="h-20 sm:h-24" />
        </div>
        <div class="flex justify-center" title="Kraken">
          <img src="/logos/kraken.png" alt="Kraken Logo" class="h-20 sm:h-24" />
        </div>
        <div class="flex justify-center" title="Binance.US">
          <img src="/logos/binanceus.png" alt="Binance.US Logo" class="h-20 sm:h-24" />
        </div>
        <div class="flex justify-center" title="Gemini">
          <img src="/logos/gemini.png" alt="Gemini Logo" class="h-20 sm:h-24" />
        </div>
        <div class="flex justify-center" title="Docker">
           <img src="/logos/docker.png" alt="Docker Logo" class="h-20 sm:h-24" />
        </div>
        <div class="flex justify-center" title="Telegram">
           <img src="/logos/telegram.png" alt="Telegram Logo" class="h-20 sm:h-24" />
        </div>
         <div class="flex justify-center" title="Windows">
           <img src="/logos/windows.png" alt="Windows Logo" class="h-20 sm:h-24" />
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="divider my-16"></div>

    <!-- Part 2: The On-Ramp (Getting Started) -->
    <h2 class="text-4xl md:text-5xl font-bold text-primary pb-2">
      The Operator's On-Ramp
    </h2>
    <p class="mt-4 text-xl max-w-2xl mx-auto">
      We believe getting started shouldn't require a degree in DevOps. Our entire process is built on simplicity and speed, regardless of which tool you're deploying.
    </p>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <!-- Step 1 - The Philosophy of Easy Deployment -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <div class="font-bold text-secondary text-4xl mb-2">1.</div>
          <h3 class="card-title text-2xl text-accent">Simplified Deployment</h3>
          <p>Whether you're running our one-click installer for trading tools or deploying Key Commander with a single Docker command, we handle the complex server setup for you.</p>
        </div>
      </div>

      <!-- Step 2 - The Philosophy of Guided Setup -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
           <div class="font-bold text-secondary text-4xl mb-2">2.</div>
          <h3 class="card-title text-2xl text-accent">Guided GUI Configuration</h3>
          <p>Forget messing with config files or terminals. Our intuitive GUIs for both Lynx-Relay and Key Commander walk you through every step, from loading API keys to setting up email alerts.</p>
        </div>
      </div>

      <!-- Step 3 - The Philosophy of Speed to Value -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
           <div class="font-bold text-secondary text-4xl mb-2">3.</div>
          <h3 class="card-title text-2xl text-accent">Go Live in Minutes</h3>
          <p>Our entire philosophy is built around getting you from zero to fully operational as fast as humanly possible. Your time is valuable—spend it on your strategies, not on setup.</p>
        </div>
      </div>
    </div>
     <div class="mt-12">
      <a href="/docs" class="btn btn-primary btn-lg">Dive into the Docs</a>
    </div>
  </div>
</div>

<style>
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, and Opera */
  }
</style>