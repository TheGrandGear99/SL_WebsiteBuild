<script lang="ts">
  import { licenseHubProduct } from "$lib/data/products";
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';

  let imageModal: HTMLDialogElement;
  let selectedImageUrl = $state<string | null>(null);

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
  <title>Key Commander License Manager - Signal Lynx</title>
  <meta name="description" content="Stop building licensing servers. Start building your business. The self-hosted, enterprise-grade licensing engine that puts you in control." />
</svelte:head>

<!-- HERO -->
<section class="py-16 md:py-24 px-4 bg-base-200 overflow-hidden">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center md:text-left" in:fly={{ y: 20, duration: 600, delay: 200 }}>
            <h1 class="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Stop Building Licensing Servers.
            </h1>
            <p class="mt-4 text-2xl lg:text-3xl font-semibold text-secondary">
                Start Building Your Business.
            </p>
            <p class="mt-6 text-xl max-w-lg mx-auto md:mx-0 text-base-content/80">
              Tired of LaaS bills that punish your growth? Key Commander is the self-hosted, flat-rate licensing engine that puts you back in control of your data, your revenue, and your time.
            </p>
            <div class="mt-8">
                <a href="#product-card" class="btn btn-primary btn-lg btn-gradient-electric">Get Key Commander</a>
            </div>
        </div>

        <!-- Image Content -->
        <div class="flex justify-center" in:fly={{ y: 20, duration: 600, delay: 400 }}>
            <button
                type="button"
                onclick={() => showImage('/images/kc-main-gui.png')}
                class="block w-full transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
                aria-label="Enlarge image of Key Commander Mission Control"
            >
                <img 
                    src="/images/kc-main-gui.png" 
                    alt="Screenshot of the Key Commander Mission Control dashboard" 
                    class="rounded-lg shadow-lg max-w-full border-4 border-accent" 
                />
            </button>
        </div>
    </div>
</section>

<!-- Why Self-Host? -->
<section class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold text-secondary mb-8">Why Self-Host? Simple: Control.</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">Your Data, Your Fortress</h4>
                <p class="mt-2 text-base-content/80">Your customer data and license keys live on your server, not ours. Hackers can’t steal what we never have.</p>
            </div>
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">Flat, Predictable Cost</h4>
                <p class="mt-2 text-base-content/80">One flat fee. No surprise 'pro-plus-turbo' tier that holds your success hostage next year.</p>
            </div>
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">Offline-Ready Tokens</h4>
                <p class="mt-2 text-base-content/80">Your app still works when your user's internet doesn't. That's how you earn customer loyalty.</p>
            </div>
        </div>
    </div>
</section>

<!-- PRODUCT CARD -->
<section id="product-card" class="py-16 px-4 bg-base-200">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 justify-center items-stretch">
       <div class="card bg-base-100 shadow-xl flex-1 flex flex-col min-w-[280px] max-w-[400px] border-4 border-transparent transition-all duration-300 hover:border-accent">
            <div class="card-body p-8 flex flex-col">
                <div class="text-center">
                    <h2 class="card-title justify-center text-2xl font-bold text-secondary">{licenseHubProduct.name}</h2>
                    <h3 class="mt-1 text-lg font-normal text-accent">{licenseHubProduct.title}</h3>
                </div>
                <p class="text-base-content/80 mt-4">{licenseHubProduct.tagline}</p>
                
                <ul class="my-6 space-y-3 text-left flex-grow">
                {#each licenseHubProduct.features as feature}
                    <li class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-success shrink-0 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="currentColor"/></svg>
                    <span>{feature}</span>
                    </li>
                {/each}
                </ul>

                <div class="mt-auto pt-4">
                    <p class="text-5xl font-bold text-center">{licenseHubProduct.price}</p>
                    <div class="card-actions justify-center mt-6">
                        <a href={licenseHubProduct.stripe_price_id ? `/account/subscribe/${licenseHubProduct.stripe_price_id}` : '/login'} class="btn btn-primary btn-wide btn-gradient-electric">{licenseHubProduct.ctaLabel}</a>
                    </div>
                    <p class="text-center text-xs text-base-content/50 mt-2">{licenseHubProduct.footnote}</p>
                </div>
            </div>
        </div>
  </div>
</section>

<!-- Supported Providers Banner -->
<section class="bg-base-100 py-10">
  <div class="max-w-5xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold text-secondary">
      Deep Integration with Stripe
    </h3>
    <p class="mt-2 opacity-70">
      Automate everything from one-time purchases and trials to recurring subscriptions and cancellations.
    </p>
    <div class="mt-6 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
      <img src="/logos/stripe.png" alt="Stripe logo" class="h-40" />
    </div>
  </div>
</section>

<!-- How It Works in 4 Steps -->
<section class="bg-base-200 py-10">
  <div class="max-w-6xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold">
      Your 4-Step Launch Sequence
    </h3>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">1</div>
        <h4 class="mt-2 font-semibold">Deploy the Server</h4>
        <p class="opacity-70 mt-1">
          Run our Docker container on any VPS or local machine with a single command.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">2</div>
        <h4 class="mt-2 font-semibold">Configure Your Keys</h4>
        <p class="opacity-70 mt-1">
          Use the secure GUI to enter your Stripe and email details and map your products. No config files.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">3</div>
        <h4 class="mt-2 font-semibold">Integrate Your App</h4>
        <p class="opacity-70 mt-1">
          Use our README and code examples to connect your application to your new licensing endpoint.
        </p>
      </div>
       <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">4</div>
        <h4 class="mt-2 font-semibold">Go Live</h4>
        <p class="opacity-70 mt-1">
          Start selling your software with fully automated license delivery and validation.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Your Command Deck -->
<div class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Your Command Deck</h2>
            <p class="mt-4 text-lg text-base-content/80">
                Manage your entire licensing operation from a single, intuitive desktop GUI. No command lines, no config files. Just pure control.
            </p>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Intuitive Navigation:</b> Jump between licenses, metrics, and logs with a single click.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Focused Workspace:</b> A dynamic interface that gives you the tools you need for the task at hand.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Modern & Responsive:</b> A smooth, desktop-grade GUI that feels like a native application.</span></li>
            </ul>
        </div>
        <div class="flex justify-center">
            <button
                type="button"
                onclick={() => showImage('/images/kc-main-gui.png')}
                class="block w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
                aria-label="Enlarge image of Key Commander dashboard"
            >
                <img src="/images/kc-main-gui.png" alt="Screenshot of the Key Commander main dashboard" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
            </button>
        </div>
    </div>
</div>

<!-- The Automated Engine -->
<section class="py-16 bg-base-200">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="flex justify-center md:order-2">
      <button
        type="button"
        onclick={() => showImage('/images/kc-tier-map.png')}
        class="block w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
        aria-label="Enlarge image of automated license engine"
      >
        <img
          src="/images/kc-tier-map.png"
          alt="Screenshot showing automated license engine in action"
          class="rounded-lg shadow-lg max-w-full border-4 border-accent"
        />
      </button>
    </div>
    <div class="text-left md:order-1">
      <h2 class="text-3xl font-bold text-primary">The Set-It-and-Forget-It Engine</h2>
      <p class="mt-4 text-lg text-base-content/80">
        Point Key Commander at your Stripe products, pour another energy drink, and get back to building. The engine handles everything from new purchases to renewals and cancellations automatically.
      </p>
      <ul class="mt-6 space-y-3 text-lg text-base-content/80">
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Auto-Issuing:</b> New Stripe orders trigger instant license generation and email delivery.</span></li>
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>24/7 Validation:</b> Every client-side check-in is validated against the live database. No stale keys.</span></li>
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Continuous Sync:</b> Regular checks with Stripe keep statuses, quantities, and trials in lock-step.</span></li>
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Total Product Support:</b> Fully supports one-time buys, recurring subscriptions, and limited-time trials out of the box.</span></li>
      </ul>
    </div>
  </div>
</section>


<!-- Master Control Panel -->
<div class="py-16 bg-base-100">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Master Operations Panel</h2>
      <p class="mt-4 text-lg text-base-content/80">
        This is your command center for ops, security, and disaster recovery. All managed from a clean, secure interface.
      </p>
      <ul class="mt-4 space-y-3 text-lg text-base-content/80">
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Centralized Secret Management:</b> Securely store and manage encrypted API keys for Stripe and your email provider.</span></li>
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Automated Emailing:</b> Configure SMTP, Brevo, or SES to automatically deliver license keys and welcome new customers.</span></li>
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Automated Backups:</b> Schedule daily, weekly, or monthly database backups with custom retention policies. Never lose your data.</span></li>
      </ul>
    </div>
    <div class="flex justify-center">
      <button
        type="button"
        onclick={() => showImage('/images/kc-config.gif')}
        class="block w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
        aria-label="Enlarge image of master control panel"
      >
        <img
          src="/images/kc-config.gif"
          alt="Animated GIF showing master control panel overview"
          class="rounded-lg shadow-lg max-w-full border-4 border-accent"
        />
      </button>
    </div>
  </div>
</div>

<!-- Ops Automation -->
<section class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold text-primary mb-8">Core Operations, Automated</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">🔄 Stripe Reconciliation</h4>
                <p class="mt-2 text-base-content/80">A robotic accountant that fixes Stripe data mismatches before your customers even notice.</p>
            </div>
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">🗄️ Automated Backups & Health Checks</h4>
                <p class="mt-2 text-base-content/80">Daily `pg_dumps` and integrity checks, because ‘Oops, I dropped prod’ shouldn’t be a career-ending event.</p>
            </div>
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">📈 Live Metrics</h4>
                <p class="mt-2 text-base-content/80">Know your MRR, churn, and who’s trying to pirate your software, all on one neon-lit gauge.</p>
            </div>
        </div>
    </div>
</section>

<!-- Offline Validation -->
<section class="py-16 bg-base-100">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Stay Green-Lit, Even Offline</h2>
      <p class="mt-4 text-lg text-base-content/80">
        Key Commander signs a tiny, secure Ed25519 token; your desktop app validates it locally for days or weeks. No internet? No problem—your users keep working, you keep getting paid.
      </p>
    </div>
    <div class="flex justify-center">
      <img
        src="/images/kc-offline-validation.png"
        alt="Diagram showing offline license validation"
        class="rounded-lg shadow-lg w-60 border-4 border-accent"
      />
    </div>
  </div>
</section>

<!-- Admin Controls -->
<div class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
         <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">Take Full Command</h2>
             <p class="mt-4 text-lg text-base-content/80">
                You have ultimate authority. The GUI gives you the power to manage every aspect of your licensing operation, from manual overrides to full data audits.
            </p>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Manual Overrides:</b> Directly edit, suspend, or delete any license from the master dashboard.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Comprehensive Audit Log:</b> Get a complete, immutable record of every critical system and admin action.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Data I/O:</b> Easily import existing keys from a CSV or export your entire license database for analysis.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center">
            <button
                type="button"
                onclick={() => showImage('/images/kc-audit-log.png')}
                class="block w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
                aria-label="Enlarge image of admin controls"
            >
                <img 
                    src="/images/kc-audit-log.png" 
                    alt="Screenshot of the license management tab in Key Commander" 
                    class="rounded-lg shadow-lg max-w-full border-4 border-accent"
                />
            </button>
        </div>
    </div>
</div>

<!-- Anti-Piracy -->
<div class="py-16 bg-base-100">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Stop Piracy in its Tracks</h2>
       <p class="mt-4 text-lg text-base-content/80">
        Protect your hard work with built-in tools designed to prevent license sharing and trial abuse, keeping your revenue stream secure.
      </p>
      <ul class="mt-4 space-y-3 text-lg text-base-content/80">
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Machine ID Locking:</b> Tie each license to a unique machine fingerprint to prevent key sharing across multiple devices.</span></li>
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Self-Serve Resets:</b> Provide a secure, time-limited pathway for legitimate users to reset their machine activation if they get a new computer.</span></li>
        <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Burn Trial Abusers:</b> Prevent the same machine from activating multiple free trials for the same product.</span></li>
      </ul>
    </div>
    <div class="flex justify-center">
      <img
        src="/images/piracy_SignalLynx.png"
        alt="Iconography representing anti-piracy measures"
        class="rounded-lg shadow-lg w-60 border-4 border-accent"
      />
    </div>
  </div>
</div>


<!-- Audit Log Section -->
<div class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">The System's Black Box Recorder</h2>
             <p class="mt-4 text-lg text-base-content/80">
                When something goes wrong—or right—you'll know exactly what happened and when. Our audit log is your source of truth.
            </p>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Complete Transparency:</b> Get a detailed, timestamped record of every significant system action.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Track Admin Changes:</b> See every license modification, deletion, or creation for full accountability.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Monitor Security Events:</b> Review failed validation attempts, webhook processing, and system unlocks.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center">
            <button
                type="button"
                onclick={() => showImage('/images/kc-audit-log.png')}
                class="block w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
                aria-label="Enlarge audit log screenshot"
            >
                <img src="/images/kc-audit-log.png" alt="Screenshot of the Audit Log tab in Key Commander" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
            </button>
        </div>
    </div>
</div>

<!-- Metrics Tracker and Automated Health Checks Section -->
<div class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Keep Your Finger on the Pulse</h2>
             <p class="mt-4 text-lg text-base-content/80">
                Data-driven decisions start here. Track your growth, monitor system health, and sleep well knowing your data is safe.
            </p>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Track Business Metrics:</b> View a dashboard of key metrics like total licenses, active vs. trial counts, and conversion trends.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Automated Health Checks:</b> A scheduled service monitors for data integrity issues like duplicate keys or invalid activations.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Automated Backups:</b> Robust, automated daily, weekly, or monthly database backups with custom retention policies.</span></li>
            </ul>
        </div>
        <div class="flex justify-center">
            <button
                type="button"
                onclick={() => showImage('/images/kc-metrics.png')}
                class="block w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
                aria-label="Enlarge metrics dashboard screenshot"
            >
                <img src="/images/kc-metrics.png" alt="Screenshot of the Metrics dashboard in Key Commander" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
            </button>
        </div>
    </div>
</div>

<!-- Licensing Admin Rights Section -->
<div class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">Wield Total License Control</h2>
            <p class="mt-4 text-lg text-base-content/80">
                Handle any customer request or business need on the fly. You have the final say on every key in your system.
            </p>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Create Custom Licenses:</b> Generate developer, promotional, or special-use keys instantly for any use case.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Modify On-Demand:</b> Directly edit any license to change its status, expiration, or activation count.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Revoke with a Click:</b> Instantly delete or suspend a license to manage access for refunds or TOS violations.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center">
            <button
                type="button"
                onclick={() => showImage('/images/kc-licenses.png')}
                class="block w-full transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent rounded-lg"
                aria-label="Enlarge license management screenshot"
            >
                <img src="/images/kc-licenses.png" alt="Screenshot of the license management tab showing admin controls" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
            </button>
        </div>
    </div>
</div>

<!-- System Requirements -->
<section class="py-16 bg-base-100">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="md:order-2 text-left">
      <h2 class="text-3xl font-bold text-primary">Deploy on a Dime</h2>
       <p class="mt-4 text-lg text-base-content/80">
        Key Commander is a lightweight powerhouse. It flies on tiny, low-cost VPS boxes, and our Docker-first approach means you can deploy with a single line of code.
      </p>
      <ul class="mt-6 space-y-3 text-lg text-base-content/80">
        <li>📦 <b>Minimal Specs:</b> 2 vCPUs, 8 GB of RAM, and 100 GB of storage is plenty.</li>
        <li>🐳 <b>Docker with GUI Setup:</b> No root access. No `.env` files. No drama.</li>
        <li>🔑 <b>TLS 1.3 by default:</b> Locks down every admin session, end-to-end.</li>
      </ul>
    </div>
    <div class="md:order-1 flex justify-center">
      <pre class="bg-base-200 text-base-content p-4 rounded-lg text-left text-sm overflow-auto w-full"><code>docker run -e MASTER_PASS=SuperSecret \
  -p 8000:8000 ghcr.io/signallynx/key-commander:latest</code></pre>
    </div>
  </div>
</section>

<!-- RBAC -->
<section class="py-16 bg-base-200">
  <div class="max-w-6xl mx-auto text-center px-4">
    <h2 class="text-3xl font-bold text-primary">Role-Based Access, Zero "Oops"</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
      <div class="p-6 rounded-lg">
        <h4 class="font-semibold text-accent text-xl">👑 Owner</h4>
        <p class="mt-2 text-base-content/70">All the buttons, all the power. Full system control.</p>
      </div>
      <div class="p-6 rounded-lg">
        <h4 class="font-semibold text-accent text-xl">🛠️ Support</h4>
        <p class="mt-2 text-base-content/70">Reset activations and view logs. No "oops, I deleted the database" permissions here.</p>
      </div>
      <div class="p-6 rounded-lg">
        <h4 class="font-semibold text-accent text-xl">🔍 Auditor</h4>
        <p class="mt-2 text-base-content/70">Read-only access for your compliance team or nosey investors.</p>
      </div>
    </div>
  </div>
</section>

<!-- HA & Replica -->
<section class="py-16 bg-base-100">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Built to Survive a Face-Plant</h2>
      <p class="mt-4 text-lg text-base-content/80">
        Point Key Commander at a hot-standby Postgres read replica—tokens keep flowing and validations keep working even if your primary server melts.
      </p>
      <ul class="mt-4 space-y-3 text-lg text-base-content/80">
        <li>🟢 Primary handles all writes and reads.</li>
        <li>🔵 Replica serves read-only validation requests.</li>
        <li>🛠️ One environment variable to switch over in a disaster.</li>
      </ul>
    </div>
    <div class="flex justify-center">
      <img src="/images/kc-ha-diagram.png" alt="Primary-replica diagram" class="rounded-lg shadow-lg border-4 border-accent max-w-full" />
    </div>
  </div>
</section>



<!-- Roadmap -->
<section class="py-16 bg-base-200">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h2 class="text-3xl font-bold text-primary">Your Wish is Our Command</h2>
    <p class="mt-4 text-lg text-base-content/80">
      Our roadmap is built by the community. Top-voted features from users like you get built next. Let us know what you need to be successful.
    </p>
  </div>
</section>


<!-- Mini-FAQ -->
<section class="py-16 bg-base-100">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold">Fast Answers</h3>
    <ul class="mt-6 space-y-4 max-w-3xl mx-auto text-left text-base-content/80">
      <li class="p-4 bg-base-200 rounded-lg"><b>Is setup hard?</b> Nah—<code>docker run -e MASTER_PASS=**** kc-image</code> and you’re live. ✔️</li>
      <li class="p-4 bg-base-200 rounded-lg"><b>Can I import old keys?</b> Yep. Drop a CSV from Gumroad or wherever, click “Import,” and you're done. 🔄</li>
    </ul>
  </div>
</section>

<!-- TECH SPECS ACCORDION -->
<section class="bg-base-200 py-12">
  <div class="max-w-4xl mx-auto px-4">
    <div class="collapse collapse-arrow bg-base-100 mb-4">
      <input type="radio" name="tech-accordion" checked />
      <div class="collapse-title text-xl font-bold">What's the tech stack?</div>
      <div class="collapse-content">
        <p class="opacity-80">
          A high-performance FastAPI backend with a PostgreSQL database. The admin dashboard is a modern desktop GUI built with Flet/Flutter. It's fast, reliable, and production-grade.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-100 mb-4">
      <input type="radio" name="tech-accordion" />
      <div class="collapse-title text-xl font-bold">How does offline validation work?</div>
      <div class="collapse-content">
        <p class="opacity-80">
          The server uses the Ed25519 digital signature algorithm to issue secure, digitally signed tokens to your client software. These tokens can be validated offline by your application for their entire duration, ensuring your users can always get their work done.
        </p>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-100">
       <input type="radio" name="tech-accordion" />
      <div class="collapse-title text-xl font-bold">How does it prevent piracy?</div>
       <div class="collapse-content">
        <p class="opacity-80">
          Each license key is tied to a specific number of machine activations (which you control). Our validation endpoint tracks these unique machine IDs to prevent overuse. We also "burn" machine IDs from expired trials to stop users from repeatedly signing up on the same computer.
        </p>
      </div>
    </div>
     <p class="mt-4 text-center">
      Need more answers? <a href="/faq" class="link link-primary">Check out the full FAQ →</a>
    </p>
  </div>
</section>

<!-- FINAL CTA -->
<section class="bg-base-100 py-16 text-center px-4">
  <h2 class="text-3xl md:text-5xl font-bold text-primary">Ready to Take Command?</h2>
  <p class="mt-4 text-xl max-w-2xl mx-auto">
    Get the Signal Lynx Key Commander and unlock your business's true potential.
  </p>
  <a href="#product-card"><button class="btn btn-primary btn-lg mt-6 px-12 btn-gradient-electric">Start 7-Day Trial</button></a>
</section>