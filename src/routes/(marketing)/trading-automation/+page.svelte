<script lang="ts">
  import { automationProducts } from "$lib/data/products";
</script>

<svelte:head>
  <title>Trading Automation - Signal Lynx</title>
  <meta name="description" content="Automate Your Alerts. Own Your Keys. Local-first automation tools for hands-free trading." />
</svelte:head>

<!-- HERO -->
<section class="text-center py-16 md:py-24 px-4 bg-base-200">
    <div class="max-w-4xl mx-auto flex flex-col items-center">
        <h1 class="text-4xl md:text-6xl font-bold text-primary whitespace-nowrap">
            Signal Lynx Automated Trading Arsenal
        </h1>
        <p class="mt-4 text-2xl md:text-3xl font-semibold text-secondary whitespace-nowrap">
            Fully Automated - 24/7 Trading
        </p>
        <p class="mt-6 text-xl max-w-3xl mx-auto text-base-content/80">
          Heard the saying "Not Your Keys, Not Your Coins"? We take it seriously. <br/>
          Your Keys live on your machine, and never see the cloud. Period.
        </p>
    </div>
  <div class="mt-8">
    <a href="#cards" class="btn btn-primary btn-wide">See the Toolkit</a>
  </div>
</section>

<!-- SECURITY BANNER -->
<section class="bg-base-100 py-8">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold text-secondary">Signal Lynx Easily Enables Automated algorithmic Trading</h3>
    <p class="opacity-70 mt-2">
      Easy Set Up & Easy to Understand <br/>
      Always Connected, Always Secure, Always Private.
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
                        <a href={product.stripe_price_id ? `/account/subscribe/${product.stripe_price_id}` : '/login'} class="btn btn-primary btn-wide">{product.ctaLabel}</a>
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
      Works with Your Favorite Spot Exchanges
    </h3>
    <div class="mt-6 flex justify-center items-center gap-8">
      <!-- NOTE: You will need to add these logo files to /static/logos/ -->
      <img src="/logos/kraken.png" alt="Kraken logo" class="h-40" />
      <img src="/logos/binanceus.png" alt="Binance US logo" class="h-40" />
      <img src="/logos/gemini.png" alt="Gemini logo" class="h-40" />
    </div>
    <p class="mt-4 opacity-70">
      Spot trading on Kraken, Binance US & Gemini. Zero surprises, zero middlemen.
    </p>
  </div>
</section>

<!-- How It Works in 3 Steps -->
<section class="bg-base-200 py-10">
  <div class="max-w-4xl mx-auto text-center px-4">
    <h3 class="text-2xl font-bold">
      Get Started in 3 Easy Steps
    </h3>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Step 1 -->
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">1</div>
        <h4 class="mt-2 font-semibold">Install Signal Shield</h4>
        <p class="opacity-70 mt-1">
          One-click setup that fortifies and primes your PC.
        </p>
      </div>
      <!-- Step 2 -->
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">2</div>
        <h4 class="mt-2 font-semibold">Configure Lynx-Relay</h4>
        <p class="opacity-70 mt-1">
          Drop in your exchange API keys and prep for action.
        </p>
      </div>
      <!-- Step 3 -->
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-secondary">3</div>
        <h4 class="mt-2 font-semibold">Go Live</h4>
        <p class="opacity-70 mt-1">
          Watch your alerts turn into hands-off trades in real time.
        </p>
      </div>
    </div>
  </div>
</section>


<!-- Setup Script Details -->
<section class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-secondary">Signal Shield Installer</h2>
            <h3 class="text-2xl font-bold text-primary mt-2">The One-Button Bodyguard</h3>
            <p class="mt-4 text-lg text-base-content/80">
                Signal Shield is your one-click fortress—instantly locking down and optimizing any Windows PC for rock-solid webhook reception and automated trading readiness. In moments, it configures your system for reliable, hands-off strategy execution without you lifting a finger.
            </p>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Fortify in Minutes:</b> Get your PC ready for automated alerts—no tech skills needed.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Block All but Your Alerts:</b> Only your trading signals reach the engine.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Always-On Service:</b> Ensures Trade Services Auto-start on boot and stay synced for 24/7 reliability.</span></li>
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
    <h2 class="text-4xl font-bold text-secondary">Lynx-Relay</h2>
    <p class="mt-4 text-xl text-base-content/80">
        Okay, your server's bodyguard is on duty. Now for the fun part. Lynx-Relay is your private, self-hosted command center where TradingView alerts become real-money trades. No cloud detours, no shared servers, just a direct line from your strategy to the exchange. This is where you watch the machine work.
    </p>
  </div>
</section>

<!-- LYNX-RELAY WORKFLOW -->
<section class="py-16 bg-base-100">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-primary mb-12 text-center">The Signal Lynx Workflow: Direct & Secure</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Image on the left -->
      <div class="flex items-center justify-center">
        <img 
          src="/images/LynxRelay_FlowChart.png" 
          alt="Flowchart showing TradingView alerts sent to Signal Lynx, which communicates with exchanges and sends notifications to Telegram"
          class="rounded-lg shadow-2xl border-4 border-accent"
        />
      </div>

      <!-- Bulleted List on the right -->
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">1</div>
          <div>
            <h4 class="font-bold text-lg">Signal Sent</h4>
            <p class="opacity-80">Your strategy on TradingView fires an alert to your secure webhook URL.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">2</div>
          <div>
            <h4 class="font-bold text-lg">Secure Reception</h4>
            <p class="opacity-80">Lynx-Relay validates the alert on your local machine.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">3</div>
          <div>
            <h4 class="font-bold text-lg">Local Execution</h4>
            <p class="opacity-80">Lynx-Relay communicates directly with the exchange using your private, local API keys to place and monitor the trade. This is a two-way street—it checks for fills and updates.</p>
          </div>
        </div>
         <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-bold">4</div>
          <div>
            <h4 class="font-bold text-lg">Instant Notification</h4>
            <p class="opacity-80">Real time notifications go out to Telegram as Lynx Relay is working your orders - No Delays.</p>
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
            <h2 class="text-3xl font-bold text-primary">Run Your Command Center</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>See Your Live Status:</b> A synthwave-inspired GUI with a single green light for "go."</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Navigate with Ease:</b> One-click access to your vault, trade history, and connectivity hub.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Monitor Your License:</b> No surprise expirations. See your subscription status in real time.</span></li>
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
            <h2 class="text-3xl font-bold text-primary">Lock Down Your Keys</h2>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Lock every key with military-grade encryption</b>—only your master pass opens the vault.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Use Your Master Password:</b> The entire application remains locked until you provide your unique password.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Organize Your Arsenal:</b> Separate tabs for your Telegram bot and exchange accounts.</span></li>
            </ul>
        </div>
        <div class="md:order-1 flex justify-center items-center space-x-4">
            <img src="/images/ta-setup-1.png" alt="Screenshot of the Lynx-Relay setup screen" class="rounded-lg shadow-lg flex-1 min-w-0 object-contain border-4 border-accent max-h-[600px]" />
             <img src="/images/ta-setup-2.png" alt="Screenshot of the Lynx-Relay API key setup screen" class="rounded-lg shadow-lg flex-1 min-w-0 object-contain border-4 border-accent max-h-[600px] hidden lg:block" />
        </div>
    </div>
</section>

<!-- Insights -->
<section class="py-16 bg-base-200">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="text-left">
            <h2 class="text-3xl font-bold text-primary">Get Actionable Insights</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Audit Every Signal:</b> Get a timestamped log of every alert received and its final outcome.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Track Live PnL:</b> See your open positions and review the profitability of every closed trade.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Unify Your History:</b> Consolidate trade data from all your connected exchanges into a single view.</span></li>
            </ul>
        </div>
        <div class="flex justify-center items-center space-x-4">
            <img src="/images/ta-alert-history.png" alt="Screenshot of the Alert History tab in the Lynx-Relay" class="rounded-lg shadow-lg flex-1 min-w-0 object-contain border-4 border-accent max-h-[600px]" />
             <img src="/images/ta-history.png" alt="Screenshot of the History tab in the Lynx-Relay" class="rounded-lg shadow-lg flex-1 min-w-0 object-contain border-4 border-accent max-h-[600px] hidden lg:block" />
        </div>
    </div>
</section>

<!-- Connectivity Hub -->
<section class="py-16 bg-base-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div class="md:order-2 text-left">
            <h2 class="text-3xl font-bold text-primary">Check Your Connectivity</h2>
            <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Instant Health Check:</b> A simple, color-coded API Status column lets you know the health of each connection.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Eliminate Guesswork:</b> Quickly identify and resolve API key or connectivity issues.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Proactive Diagnostics:</b> Click "Test Connections" to run a live test of all exchange links.</span></li>
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
            <h2 class="text-3xl font-bold text-primary">Ping Your Phone, Not Your Nerves</h2>
             <ul class="mt-4 space-y-3 text-lg text-base-content/80">
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Get 24/7 Updates:</b> Instant push notifications for every key action your bot takes.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Know It All:</b> Receive detailed alerts for new order requests, successful placements, and final fills.</span></li>
                <li class="flex items-start gap-3"><span class="text-success mt-1">✓</span><span><b>Algo Overwatch:</b> Protect your funds - always know where the trades are.</span></li>
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
    <details class="collapse bg-base-200 mb-4">
      <summary class="collapse-title text-xl font-bold">How does the Signal Shield Installer harden my PC?</summary>
      <div class="collapse-content">
        <p class="opacity-80">
          It installs NGINX as a reverse proxy, pulls a free Let’s Encrypt TLS certificate for HTTPS, and writes multiple firewall rules to only allow traffic from major charting providers. This is in addition to configuring your machine to to a realiable algorythmic trading center.
        </p>
      </div>
    </details>
    <details class="collapse bg-base-200 mb-4">
      <summary class="collapse-title text-xl font-bold">What’s protecting the Key Vault?</summary>
      <div class="collapse-content">
        <p class="opacity-80">
          Your license key, webhook secret, Telegram token, and each exchange API key are encrypted on your local disk using advanced encryption algorithms. The vault can only be unlocked with your master password.
        </p>
      </div>
    </details>
    <details class="collapse bg-base-200 mb-4">
      <summary class="collapse-title text-xl font-bold">How does Lynx-Relay know what to do?</summary>
      <div class="collapse-content">
        <p class="opacity-80">
          Lynx-Relay listens for TradingView alerts sent to your webhook URL. When an alert is received, it checks the alert message for specific commands and parameters, then executes trades on your behalf using the configured exchange API keys. <br/>
          Trade details are fully customize within each alert via an easy to configure JSON package, allowing you to set parameters like order type, quantity, any stop loss or take profit levels, and more. <br/>
          You can also set up multiple alert types for different strategies and exchanges, all managed from the same Lynx-Relay interface.
        </p>
      </div>
    </details>
    <details class="collapse bg-base-200 mb-4">
      <summary class="collapse-title text-xl font-bold">Does Lynx-Relay ensure my order is placed?</summary>
       <div class="collapse-content">
        <p class="opacity-80">
          Yes! Lynx-Relay monitors your order with exchanges, and ensure it's filled with advanced mitigation routines. Giving you the confidence to place limit orders, even with scalp trades!
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
  <h2 class="text-3xl md:text-5xl font-bold text-primary">Ready to automate the smart way?</h2>
  <p class="mt-4 text-xl max-w-2xl mx-auto">
    Start a zero-risk 7-day trial <br/>
    Keep the $1 Signal Shield Installer forever, even if you cancel.
  </p>
  <a href="#cards"><button class="btn btn-primary btn-lg mt-6 px-12">Start 7-Day Trial</button></a>
</section>