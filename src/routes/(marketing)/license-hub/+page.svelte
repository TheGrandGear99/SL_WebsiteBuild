<script lang="ts">
  import { licenseHubProduct } from "$lib/data/products";
</script>

<svelte:head>
  <title>Key Commander License Manager - Signal Lynx</title>
  <meta name="description" content="Stop building licensing servers. Start building your business. The self-hosted, enterprise-grade licensing engine that puts you in control." />
</svelte:head>

<!-- HERO -->
<section class="text-center py-16 md:py-24 px-4 bg-base-200">
    <div class="max-w-4xl mx-auto flex flex-col items-center">
        <h1 class="text-4xl md:text-6xl font-bold text-primary whitespace-nowrap">
            Signal Lynx Key Commander
        </h1>
        <p class="mt-4 text-2xl md:text-3xl font-semibold text-secondary whitespace-nowrap">
            License Your Ideas
        </p>
        <p class="mt-6 text-xl max-w-3xl mx-auto text-base-content/80">
          Tired of License as a Service bills ballooning as you grow? With Key Commander you pay one flat fee, run it where you like, and keep every customer record locked down in your own database—no surprises, no sky-high tier jumps.
        </p>
    </div>
  <div class="mt-8">
    <a href="#product-card" class="btn btn-primary btn-wide">Get Key Commander</a>
  </div>
</section>

<!-- SECURITY BANNER -->
<section class="bg-base-100 py-8">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold text-secondary">Your Data, Your Fortress.</h3>
    <p class="opacity-70 mt-2">
      Key Commander is a self-hosted asset you own and run on your infrastructure. Your customer data and API keys are never held hostage on our servers.
    </p>
  </div>
</section>

<!-- Why Self-Host? -->
<section class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold text-primary mb-8">Why Self-Host Your Licensing?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">Data Sovereignty</h4>
                <p class="mt-2 text-base-content/80">Your license keys stay in your lair, not our cloud. Hackers can’t steal what we never see.</p>
            </div>
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">Flat, Predictable Cost</h4>
                <p class="mt-2 text-base-content/80">Flat fee. No surprise ‘pro-plus-turbo’ tier next year.</p>
            </div>
            <div class="p-6 rounded-lg">
                <h4 class="font-bold text-xl text-accent">Offline-Friendly Tokens</h4>
                <p class="mt-2 text-base-content/80">Your app still runs when Starbucks Wi-Fi dies—boom, customer love.</p>
            </div>
        </div>
    </div>
</section>

<!-- PRODUCT CARD -->
<section id="product-card" class="py-16 px-4 bg-base-100">
  <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 justify-center items-stretch">
       <div class="card bg-base-200 shadow-xl flex-1 flex flex-col min-w-[280px] max-w-[400px] border-4 border-transparent transition-all duration-300 hover:border-accent">
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
                        <a href={licenseHubProduct.stripe_price_id ? `/account/subscribe/${licenseHubProduct.stripe_price_id}` : '/login'} class="btn btn-primary btn-wide">{licenseHubProduct.ctaLabel}</a>
                    </div>
                    <p class="text-center text-xs text-base-content/50 mt-2">{licenseHubProduct.footnote}</p>
                </div>
            </div>
        </div>
  </div>
</section>

<!-- Supported Providers Banner -->
<section class="bg-base-200 py-10">
  <div class="max-w-5xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold text-secondary">
      Deep Integration with Stripe
    </h3>
    <p class="mt-2 opacity-70">
      Handle purchases, subscriptions, and cancellations automatically.
    </p>
    <div class="mt-6 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
      <img src="/logos/stripe.png" alt="Stripe logo" class="h-40" />
    </div>
  </div>
</section>

<!-- How It Works in 4 Steps -->
<section class="bg-base-100 py-10">
  <div class="max-w-6xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold">
      Get Started in 4 Easy Steps
    </h3>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">1</div>
        <h4 class="mt-2 font-semibold">Deploy the Server</h4>
        <p class="opacity-70 mt-1">
          Run our Docker container on any VPS or local machine.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">2</div>
        <h4 class="mt-2 font-semibold">Configure Key Commander</h4>
        <p class="opacity-70 mt-1">
          Use the secure GUI to enter your Stripe and email details, and select your business options.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">3</div>
        <h4 class="mt-2 font-semibold">Integrate with Your App</h4>
        <p class="opacity-70 mt-1">
          Use our README and example code to connect your application to the license manager.
        </p>
      </div>
       <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">4</div>
        <h4 class="mt-2 font-semibold">Go Live</h4>
        <p class="opacity-70 mt-1">
          Start selling your software with automated license delivery and validation.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Your Mission Control -->
<div class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Your Mission Control</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Intuitive Navigation:</b> Jump between licenses, metrics, and logs with a single click.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Focused Workspace:</b> A dynamic interface that gives you the tools you need for the task at hand.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Modern & Responsive:</b> A smooth, desktop-grade GUI for managing your business.</span></li>
            </ul>
        </div>
        <div class="flex justify-center">
            <img src="/images/kc-main-gui.png" alt="Screenshot of the Key Commander main dashboard" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
        </div>
    </div>
</div>

<!-- Fully-Automated Engine -->
<section class="py-16 bg-base-100">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <!-- IMAGE LEFT ON DESKTOP -->
    <div class="flex justify-center md:order-1">
      <img
        src="/images/kc-tier-map.png"
        alt="Screenshot showing automated license engine in action"
        class="rounded-lg shadow-lg max-w-full border-4 border-accent"
      />
    </div>
    <!-- TEXT RIGHT ON DESKTOP -->
    <div class="text-left md:order-2">
      <h2 class="text-3xl font-bold text-primary">Set-It-and-Forget-It Automation</h2>
      <p class="mt-4 text-lg text-base-content/80">
        Point Key Commander at your Stripe products, pour another energy drink, and walk away—the
        engine handles everything from purchase to day-30 renewal.
      </p>
      <ul class="mt-6 space-y-3 text-lg text-base-content/80">
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Auto-Issuing:</b> New Stripe orders trigger instant license generation and email delivery.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>24/7 Verification:</b> Every client ping is validated against the live database—no stale keys.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Continuous Re-Sync:</b> Regular checks with Stripe keep statuses, quantities, and trials in lock-step.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>One-Time, Subscription, Trial:</b> Fully supports buy-once keys, recurring plans, and limited-time trials out of the box.</span>
        </li>
      </ul>
    </div>
  </div>
</section>


<!-- Master Control Panel -->
<div class="py-16 bg-base-200">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="md:order-1 text-left">
      <h2 class="text-3xl font-bold text-primary">Your Master Control Panel</h2>
      <ul class="mt-4 space-y-3 text-lg text-base-content/80">
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Centralized Secret Management:</b> Securely store and manage encrypted API keys for Stripe.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Automated Emailing:</b> Configure SMTP, Brevo, or SES to automatically deliver license keys.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Automated Backups:</b> Schedule daily, weekly, or monthly database backups with retention policies.</span>
        </li>
      </ul>
    </div>

    <div class="md:order-1 flex justify-center">
      <img
        src="/images/kc-config.gif"
        alt="Animated GIF showing master control panel overview"
        class="rounded-lg shadow-lg max-w-full border-4 border-accent"
      />
    </div>
  </div>
</div>

<!-- Ops Automation -->
<section class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto text-center px-4">
        <h2 class="text-3xl font-bold text-primary mb-8">Automated Operations</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card bg-base-100 p-6">
                <h4 class="font-bold text-xl text-accent">🔄 Stripe Reconciliation</h4>
                <p class="mt-2 text-base-content/80">Robot accountant fixes Stripe mismatches before angry emails hit.</p>
            </div>
            <div class="card bg-base-100 p-6">
                <h4 class="font-bold text-xl text-accent">🗄️ Automated Backups & Health Checks</h4>
                <p class="mt-2 text-base-content/80">Daily pg_dumps and integrity checks—because ‘Oops, I dropped prod’ shouldn’t end careers.</p>
            </div>
            <div class="card bg-base-100 p-6">
                <h4 class="font-bold text-xl text-accent">📈 Live Metrics</h4>
                <p class="mt-2 text-base-content/80">Know your MRR, churn, and who’s trying to pirate—all on one neon gauge.</p>
            </div>
        </div>
    </div>
</section>

<!-- Offline Validation -->
<section class="py-16 bg-base-200">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Offline? Still Green-Lit.</h2>
      <p class="mt-4 text-lg text-base-content/80">
        Key Commander signs a tiny Ed25519 token; your desktop app validates it locally for days (or weeks). No internet? No problem—your users keep working, you keep getting paid.
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
<div class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
         <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">Take Full Admin Control</h2>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Manual Overrides:</b> Directly edit, suspend, or delete any license from the master dashboard.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Comprehensive Audit Log:</b> Get a complete, immutable record of every critical system and admin action.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Data I/O:</b> Easily import existing keys from a CSV or export your entire license database for analysis.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center">
            <img src="/images/kc-audit-log.png" alt="Screenshot of the license management tab in Key Commander" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
        </div>
    </div>
</div>

<!-- Anti-Piracy -->
<div class="py-16 bg-base-200">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Stop Piracy in its Tracks</h2>
      <ul class="mt-4 space-y-3 text-lg text-base-content/80">
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Machine ID Locking:</b> Tie each license to a unique machine fingerprint to prevent key sharing.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Automated Resets:</b> Provide a secure, time-limited pathway for legitimate users to reset their machine activation.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-success mt-1">✓</span>
          <span><b>Burn Trial Abusers:</b> Prevent the same machine from activating multiple free trials.</span>
        </li>
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
<div class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">Your System's Black Box</h2>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Complete Transparency:</b> Get a detailed, timestamped record of every significant system action.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Track Admin Changes:</b> See every license modification, deletion, or creation for full accountability.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Monitor Security Events:</b> Review failed validation attempts, webhook processing, and system unlocks.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center">
            <img src="/images/kc-audit-log.png" alt="Screenshot of the Audit Log tab in Key Commander" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
        </div>
    </div>
</div>

<!-- Metrics Tracker and Automated Health Checks Section -->
<div class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Keep Your Finger on the Pulse</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Track Business Metrics:</b> View a dashboard of key metrics like total licenses, active vs. trial counts, and conversion trends.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Automated Health Checks:</b> A scheduled service monitors for data integrity issues like duplicate keys or invalid activations.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Automated Backups:</b> Robust, automated daily, weekly, or monthly database backups with retention policies.</span></li>
            </ul>
        </div>
        <div class="flex justify-center">
            <img src="/images/kc-metrics.png" alt="Screenshot of the Metrics dashboard in Key Commander" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
        </div>
    </div>
</div>

<!-- Licensing Admin Rights Section -->
<div class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
         <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">Total License Control</h2>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Create Custom Licenses:</b> Generate developer, promotional, or special-use keys on the fly.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Modify On-Demand:</b> Directly edit any license to change its status, expiration, or activation count.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Revoke with a Click:</b> Instantly delete or suspend a license to manage access.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center">
            <img src="/images/kc-licenses.png" alt="Screenshot of the license management tab showing admin controls" class="rounded-lg shadow-lg max-w-full border-4 border-accent" />
        </div>
    </div>
</div>

<!-- System Requirements -->
<section class="py-16 bg-base-200">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Deploy on a Low Cost, Managed VPS</h2>
      <ul class="mt-4 space-y-3 text-lg text-base-content/80">
        <li>📦 <b>2 vCPUs, 8 GB of RAM, and 100 GB</b> – FastAPI + Postgres fly on tiny boxes </li>
        <li>🐳 <b>Docker with GUI Setup</b> – No root - no .env - No drama</li>
        <li>🔑 <b>TLS 1.3 by default</b> – Locks every admin session end-to-end</li>
      </ul>
    </div>
    <div class="flex justify-center">
      <pre class="bg-base-200 p-4 rounded-lg text-left text-sm overflow-auto">
docker run -e MASTER_PASS=SuperSecret \
  -p 8000:8000 ghcr.io/signallynx/key-commander:latest
      </pre>
    </div>
  </div>
</section>

<!-- RBAC -->
<section class="py-16 bg-base-100">
  <div class="max-w-6xl mx-auto text-center px-4">
    <h2 class="text-3xl font-bold text-primary">Role-Based Access, Zero Oopsies</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
      <div class="bg-base-100 p-6 rounded-lg">
        <h4 class="font-semibold text-accent">👑 Owner</h4>
        <p class="mt-2">All the buttons, all the power.</p>
      </div>
      <div class="bg-base-100 p-6 rounded-lg">
        <h4 class="font-semibold text-accent">🛠️ Support</h4>
        <p class="mt-2">Reset activations, view logs—no drop-tables here.</p>
      </div>
      <div class="bg-base-100 p-6 rounded-lg">
        <h4 class="font-semibold text-accent">🔍 Auditor</h4>
        <p class="mt-2">Read-only access for the compliance gremlins.</p>
      </div>
    </div>
  </div>
</section>

<!-- HA & Replica -->
<section class="py-16 bg-base-200">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
    <div class="text-left">
      <h2 class="text-3xl font-bold text-primary">Built to Survive VPS Face-Plants</h2>
      <p class="mt-4 text-lg text-base-content/80">
        Point Key Commander at a hot-standby Postgres read replica—tokens keep flowing even if your primary melts.
      </p>
      <ul class="mt-4 space-y-3 text-lg text-base-content/80">
        <li>🟢 Primary writes + reads</li>
        <li>🔵 Replica serves read-only <code>/validate</code></li>
        <li>🛠️ One env var switch to fail over</li>
      </ul>
    </div>
    <div class="flex justify-center">
      <img src="/images/kc-ha-diagram.png" alt="Primary-replica diagram" class="rounded-lg shadow-lg border-4 border-accent max-w-full" />
    </div>
  </div>
</section>



<!-- Roadmap -->
<section class="py-16 bg-base-100">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h2 class="text-3xl font-bold text-primary">We listen to you, the community</h2>
    <p class="mt-4 text-lg text-base-content/80">
      Continous upgrades and new features, let us know what you need to be succesful! Top-voted items hit the roadmap next.
    </p>
  </div>
</section>


<!-- Mini-FAQ -->
<section class="py-16 bg-base-200">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold">Fast Answers</h3>
    <ul class="mt-6 space-y-4 max-w-3xl mx-auto text-left text-base-content/80">
      <li class="p-4 bg-base-100 rounded-lg"><b>Is setup hard?</b> Nah—<code>docker run -e MASTER_PASS=**** kc-image</code> and you’re live. ✔️</li>
      <li class="p-4 bg-base-100 rounded-lg"><b>Can I import old keys?</b> Yep. Drop a CSV from Gumroad, click “Import,” done. 🔄</li>
    </ul>
  </div>
</section>

<!-- TECH SPECS ACCORDION -->
<section class="bg-base-100 py-12">
  <div class="max-w-4xl mx-auto px-4">
    <details class="collapse bg-base-200 mb-4">
      <summary class="collapse-title text-xl font-bold">What's the tech stack?</summary>
      <div class="collapse-content">
        <p class="opacity-80">
          A high-performance FastAPI backend with a PostgreSQL database. The admin dashboard is a modern desktop GUI built with Flet/Flutter. It's fast, reliable, and production-grade.
        </p>
      </div>
    </details>
    <details class="collapse bg-base-200 mb-4">
      <summary class="collapse-title text-xl font-bold">How does offline validation work?</summary>
      <div class="collapse-content">
        <p class="opacity-80">
          The server uses the Ed25519 digital signature algorithm to issue secure, digitally signed tokens to your client software. These tokens can be validated offline for their entire duration, ensuring your users can always access their software, even without an internet connection.
        </p>
      </div>
    </details>
    <details class="collapse bg-base-200">
      <summary class="collapse-title text-xl font-bold">How does it prevent piracy?</summary>
       <div class="collapse-content">
        <p class="opacity-80">
          Each license key is tied to a specific number of machine activations. Our validation endpoint tracks these machine IDs to prevent overuse. We also "burn" machine IDs from expired trials to stop users from repeatedly signing up for new trials on the same computer.
        </p>
      </div>
    </details>
     <p class="mt-4 text-center">
      Need more answers? <a href="/faq" class="link link-primary">Check out the full FAQ →</a>
    </p>
  </div>
</section>

<!-- FINAL CTA -->
<section class="bg-base-200 py-16 text-center px-4">
  <h2 class="text-3xl md:text-5xl font-bold text-primary">Ready to take command of your business?</h2>
  <p class="mt-4 text-xl max-w-2xl mx-auto">
    Get the Signal Lynx Key Commander and unlock your business's true potential.
  </p>
  <a href="#product-card"><button class="btn btn-primary btn-lg mt-6 px-12">Start 7-Day Trial</button></a>
</section>