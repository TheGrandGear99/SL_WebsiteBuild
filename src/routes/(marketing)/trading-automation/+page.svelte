<script lang="ts">
  import { automationProducts } from "$lib/data/products";
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
  import { WebsiteBaseUrl } from "../../../config";

  let imageModal: HTMLDialogElement;
  let selectedImageUrl = $state<string | null>(null);
  
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Signal Lynx Trading Automation Suite",
    "operatingSystem": "Windows",
    "applicationCategory": "FinanceApplication",
    "offers": [
      {
        "@type": "Offer",
        "price": "1.00",
        "priceCurrency": "USD",
        "name": "Signal Shield"
      },
      {
        "@type": "Offer",
        "price": "5.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "billingIncrement": "Month"
        },
        "name": "Lynx-Relay"
      }
    ],
    "description": "A suite of self-hosted tools to automate TradingView alerts into real-money trades on major exchanges like Kraken, Binance.US, and Gemini.",
    "url": `${WebsiteBaseUrl}/trading-automation`
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  function showImage(imageUrl: string) {
    selectedImageUrl = imageUrl;
    if (imageModal) {
      imageModal.showModal();
    }
  }

  // Close modal when clicking anywhere
  function handleClick(e: MouseEvent) {
    imageModal.close();
  }

  // Close modal with Escape key
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      imageModal.close();
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
</script>

<!-- Image Modal -->
<dialog 
  id="image_modal" 
  class="modal cursor-pointer bg-transparent p-0"
  bind:this={imageModal}
  onclick={handleClick}
>
  <div class="flex items-center justify-center w-full h-full">
    {#if selectedImageUrl}
      <img
        src={selectedImageUrl}
        alt="Enlarged view of feature"
        class="max-w-[75vw] max-h-[75vh] object-contain rounded-lg shadow-2xl border-4 border-accent"
      />
    {/if}
  </div>
</dialog>


<svelte:head>
  <title>TradingView Webhook Automation | Signal Lynx</title>
  <meta name="description" content="Turn TradingView alerts into hands-free trades. Our self-hosted webhook engine gives you full control and security for automated trading on Kraken, Binance, and Gemini." />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>


<!-- HERO -->
<section class="py-16 md:py-24 px-4 bg-base-200 overflow-hidden">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center md:text-left" in:fly={{ y: 20, duration: 600, delay: 200 }}>
            <h1 class="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Your Edge is Automation.
            </h1>
            <p class="mt-4 text-2xl lg:text-3xl font-semibold text-secondary">
                Our Edge is Security.
            </p>
            <p class="mt-6 text-xl max-w-lg mx-auto md:mx-0 text-base-content/80">
              You've heard "Not Your Keys, Not Your Coins." We built our entire company on that principle. Our tools run on your hardware, so your API keys never see the cloud. Period.
            </p>
            <div class="mt-8">
                <a href="#cards" class="btn btn-primary btn-lg btn-gradient-electric">Deploy the Arsenal</a>
            </div>
        </div>

        <!-- Image Content (Non-Interactive) -->
        <div class="flex justify-center transition-all duration-300 ease-in-out hover:scale-105" in:fly={{ y: 20, duration: 600, delay: 400 }}>
            <img 
                src="/images/ta-main-gui.png" 
                alt="Screenshot of the Lynx-Relay Mission Control dashboard" 
                class="rounded-lg shadow-lg max-w-full border-4 border-accent" 
            />
        </div>
    </div>
</section>

<!-- SECURITY BANNER -->
<section class="bg-base-100 py-8">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold text-secondary">Algorithmic Trading Without Compromise</h3>
    <p class="opacity-70 mt-2">
      Easy to deploy. Radically secure. Utterly private.
    </p>
  </div>
</section>

<!-- PRODUCT CARDS -->
<section id="cards" class="py-16 px-4 bg-base-200">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 justify-center items-stretch">
    {#each automationProducts as product (product.id)}
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
</section>

<!-- Supported Exchanges -->
<section class="bg-base-100 py-10">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold text-secondary">
      Deploy on Your Favorite Spot Exchanges
    </h3>
    <div class="mt-6 flex justify-center items-center gap-8">
      <img src="/logos/kraken.png" alt="Kraken logo" class="h-40" />
      <img src="/logos/binanceus.png" alt="Binance US logo" class="h-40" />
      <img src="/logos/gemini.png" alt="Gemini logo" class="h-40" />
    </div>
    <p class="mt-4 opacity-70">
      Direct API connections to Kraken, Binance.US, and Gemini. Zero middlemen, zero compromises.
    </p>
  </div>
</section>

<!-- How It Works in 3 Steps -->
<section class="bg-base-200 py-10">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold">
      Your 3-Step Deployment
    </h3>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">1</div>
        <h4 class="mt-2 font-semibold">Fortify Your Rig</h4>
        <p class="opacity-70 mt-1">
          Run the one-click Signal Shield installer to harden and prime your PC for automation.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">2</div>
        <h4 class="mt-2 font-semibold">Arm the Relay</h4>
        <p class="opacity-70 mt-1">
          Launch Lynx-Relay and load your encrypted exchange keys into the vault.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">3</div>
        <h4 class="mt-2 font-semibold">Go Weapons-Hot</h4>
        <p class="opacity-70 mt-1">
          Point your TradingView alerts to your webhook. Watch signals become trades.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Signal Shield Details -->
<section class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-secondary">Signal Shield Installer</h2>
            <h3 class="text-2xl font-bold text-primary mt-2">Your One-Button Bodyguard</h3>
            <p class="mt-4 text-lg text-base-content/80">
                Signal Shield is your one-click fortress. It instantly locks down and optimizes any Windows PC, turning it into a rock-solid webhook receiver ready for 24/7 automated trading. It handles the complex server config so you don't have to.
            </p>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Fortress Mode: Activated.</b> Get your PC trade-ready in minutes, no IT degree required.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>VIP-Only Access:</b> Creates a secure tunnel that only accepts signals from trusted sources like TradingView.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Always-On Reliability:</b> Configures core services to auto-start and stay synced, because the market never sleeps.</span></li>
            </ul>
        </div>
        <div class="flex justify-center">
            <img src="/images/ta-setup-script.png" alt="Screenshot of the Signal Lynx setup script running in a PowerShell terminal" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
        </div>
    </div>
</section>

<!-- Lynx-Relay Banner -->
<section class="py-16 bg-base-200 text-center">
  <div class="max-w-3xl mx-auto px-4">
    <h2 class="text-4xl font-bold text-secondary">Lynx-Relay Engine</h2>
    <p class="mt-4 text-xl text-base-content/80">
        With your rig fortified, it's time to deploy the real weapon. Lynx-Relay is your private, self-hosted command center where TradingView alerts become real-money trades. No cloud detours, no shared servers, just a direct, encrypted line from your strategy to the exchange.
    </p>
  </div>
</section>

<!-- LYNX-RELAY WORKFLOW -->
<section class="py-16 bg-base-100">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-primary mb-12 text-center">The Workflow: Direct, Secure, and All Yours</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="flex items-center justify-center">
        <img 
          src="/images/LynxRelay_FlowChart.png" 
          alt="Flowchart showing TradingView alerts sent to Signal Lynx, which communicates with exchanges and sends notifications to Telegram"
          class="rounded-lg shadow-2xl border-4 border-accent"
        />
      </div>
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">1</div>
          <div>
            <h4 class="font-bold text-lg">Signal Fired</h4>
            <p class="opacity-80">Your TradingView strategy identifies an opportunity and fires a webhook to your unique, secure URL.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">2</div>
          <div>
            <h4 class="font-bold text-lg">Secure Reception</h4>
            <p class="opacity-80">Signal Shield validates the alert on your local machine, rejecting all other traffic.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">3</div>
          <div>
            <h4 class="font-bold text-lg">Local Execution</h4>
            <p class="opacity-80">Lynx-Relay uses your local API keys to communicate directly with the exchange, place the order, and monitor for fills.</p>
          </div>
        </div>
         <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">4</div>
          <div>
            <h4 class="font-bold text-lg">Instant Confirmation</h4>
            <p class="opacity-80">You get real-time Telegram notifications as your orders are placed and filled. No delays, no second-guessing.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Main GUI Screen -->
<section class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Mission Control: Online</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Total Situational Awareness:</b> A single green light for "go." No guessing if your system is live.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Effortless Navigation:</b> One-click access to your vault, trade history, and connectivity hub.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>License Status, Front & Center:</b> No surprise expirations. See your subscription status in real time.</span></li>
            </ul>
        </div>
        <div class="flex justify-center">
            <img src="/images/ta-main-gui.png" alt="Screenshot of the Lynx-Relay main screen" class="rounded-lg shadow-lg max-w-full max-h-[600px] object-contain border-4 border-accent" />
        </div>
    </div>
</section>

<!-- Key Vault -->
<section class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">The Vault: Fort Knox for Your API Keys</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Military-Grade Encryption:</b> Every key is encrypted on your local disk. Only your master password opens the vault.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Master Password Protection:</b> The entire application remains inert and locked until you provide your unique password.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Organized & Secure:</b> Separate, encrypted tabs for your Telegram bot and each exchange account.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center items-center space-x-4">
            <button
                type="button"
                onclick={() => showImage('/images/ta-setup-1.png')}
                class="w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg flex-1 min-w-0"
                aria-label="Enlarge Lynx-Relay setup screen"
            >
                <img 
                    src="/images/ta-setup-1.png" 
                    alt="Screenshot of the Lynx-Relay setup screen" 
                    class="rounded-lg shadow-lg object-contain border-4 border-accent max-h-[600px]"
                />
            </button>
            <button
                type="button"
                onclick={() => showImage('/images/ta-setup-2.png')}
                class="w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg flex-1 min-w-0 hidden lg:block"
                aria-label="Enlarge Lynx-Relay API key setup screen"
            >
                <img 
                    src="/images/ta-setup-2.png" 
                    alt="Screenshot of the Lynx-Relay API key setup screen" 
                    class="rounded-lg shadow-lg object-contain border-4 border-accent max-h-[600px]"
                />
            </button>
        </div>
    </div>
</section>

<!-- Insights -->
<section class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Get Actionable Intel</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Complete Signal Audit:</b> Get a timestamped log of every alert received and its final outcome. No more black boxes.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Live P&L Tracking:</b> See your open positions and review the profitability of every closed trade to sharpen your strategies.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Unified Trade History:</b> Consolidate trade data from all your connected exchanges into a single, clean interface.</span></li>
            </ul>
        </div>
        <div class="flex justify-center items-center space-x-4">
            <button
                type="button"
                onclick={() => showImage('/images/ta-alert-history.png')}
                class="w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg flex-1 min-w-0"
                aria-label="Enlarge Alert History screenshot"
            >
                <img 
                    src="/images/ta-alert-history.png" 
                    alt="Screenshot of the Alert History tab in the Lynx-Relay" 
                    class="rounded-lg shadow-lg object-contain border-4 border-accent max-h-[600px]"
                />
            </button>
            <button
                type="button"
                onclick={() => showImage('/images/ta-history.png')}
                class="w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg flex-1 min-w-0 hidden lg:block"
                aria-label="Enlarge History tab screenshot"
            >
                <img 
                    src="/images/ta-history.png" 
                    alt="Screenshot of the History tab in the Lynx-Relay" 
                    class="rounded-lg shadow-lg object-contain border-4 border-accent max-h-[600px]"
                />
            </button>
        </div>
    </div>
</section>

<!-- Connectivity Hub -->
<section class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">Run Your Comms Check</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Instant Health Status:</b> A simple, color-coded API status gives you an immediate 'go' or 'no-go' on every connection.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Eliminate the Guesswork:</b> Quickly identify and resolve API key or connectivity issues without digging through logs.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Proactive Diagnostics:</b> Click "Test Connections" to run a live test of all exchange links and confirm your keys are valid.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center">
            <img src="/images/ta-exchanges.png" alt="Screenshot of the Exchanges tab in the Lynx-Relay" class="rounded-lg shadow-lg max-w-full max-h-[600px] object-contain border-4 border-accent" />
        </div>
    </div>
</section>

<!-- Telegram Notifications -->
<section class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Get Eyes-On, Anywhere</h2>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>24/7 Field Updates:</b> Instant push notifications to your phone for every key action your bot takes.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Full Action Log:</b> Receive detailed alerts for new order requests, successful placements, and final fills.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Stay in Command:</b> Keep a constant pulse on your automated strategies and protect your funds, even on the go.</span></li>
            </ul>
        </div>
        <div class="flex justify-center">
            <img src="/images/ta-telegram.png" alt="Screenshot of Signal Lynx notifications in the Telegram app on a phone" class="max-h-[600px] rounded-lg shadow-lg border-4 border-accent" />
        </div>
    </div>
</section>

<!-- TECH SPECS ACCORDION -->
<section class="bg-base-100 py-12">
  <div class="max-w-4xl mx-auto px-4">
    <div class="collapse collapse-arrow bg-base-200 mb-4">
      <input type="radio" name="tech-accordion" checked /> 
      <div class="collapse-title text-xl font-bold">How does Signal Shield harden my PC, exactly?</div>
      <div class="collapse-content">
        <p class="opacity-80">
          It deploys NGINX as a reverse proxy, fetches a free Let’s Encrypt TLS certificate for bank-grade encryption, and writes multiple firewall rules to only allow traffic from major charting providers. It's a full security overhaul in one click.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200 mb-4">
      <input type="radio" name="tech-accordion" />
      <div class="collapse-title text-xl font-bold">What’s actually protecting the Key Vault?</div>
      <div class="collapse-content">
        <p class="opacity-80">
          Your license key, webhook secret, Telegram token, and every exchange API key are individually encrypted on your local disk using advanced, industry-standard algorithms. The only thing that can decrypt them is your master password.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200 mb-4">
      <input type="radio" name="tech-accordion" />
      <div class="collapse-title text-xl font-bold">How does Lynx-Relay know what my alert means?</div>
      <div class="collapse-content">
        <p class="opacity-80">
          You tell it exactly what to do via a simple JSON package in your TradingView alert message. You can define the exchange, pair, order type, quantity, stop loss, take profit, and more. It's a command, not a suggestion. We provide full JSON examples in the docs.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="tech-accordion" />
      <div class="collapse-title text-xl font-bold">Does Lynx-Relay just "fire and forget" my orders?</div>
       <div class="collapse-content">
        <p class="opacity-80">
          Absolutely not. It actively monitors your orders with the exchange and uses advanced mitigation routines to ensure they get filled. It's especially useful for scalpers who need confidence that their limit orders won't be left hanging.
        </p>
      </div>
    </div>
     <p class="mt-4 text-center">
      Need more answers? <a href="/faq" class="link link-primary">Check out the full FAQ →</a>
    </p>
  </div>
</section>

<!-- FINAL CTA -->
<section class="bg-base-200 py-16 text-center px-4">
  <h2 class="text-3xl md:text-5xl font-bold text-primary">Ready to Automate the Smart Way?</h2>
  <p class="mt-4 text-xl max-w-2xl mx-auto">
    Start a zero-risk 7-day trial. You'll keep the $1 Signal Shield installer forever, even if you cancel.
  </p>
  <a href="#cards"><button class="btn btn-primary btn-lg mt-6 px-12 btn-gradient-electric">Start 7-Day Trial</button></a>
</section>