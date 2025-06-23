<script lang="ts">
  // No script needed for this static content page, but block is kept for future use
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
  <div class="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto place-content-center items-stretch">
    <!-- One-Button Setup Script Card -->
    <div class="card bg-base-200 w-full lg:w-1/2 flex-none shadow-xl">
      <div class="card-body p-8 flex flex-col">
        <h3 class="card-title text-2xl text-primary">🛡️ One-Button Setup Script</h3>
        <p class="text-4xl font-bold mt-2">$1 <span class="text-lg font-normal">one-time</span></p>
        <p class="text-base-content/80 flex-grow mt-4">Zero-click hardening. Installs a secure web gateway, locks Windows Firewall, and grabs a real SSL cert—no copy-paste marathons.</p>
        
        <ul class="my-6 space-y-3 text-left">
          <li class="flex items-start gap-3"><strong>Door Policy for Charts Only:</strong> Only IPs used by major charting apps can knock; everything else stays outside.</li>
          <li class="flex items-start gap-3"><strong>Paper Trail Included:</strong> We print a human-readable log so you (or your paranoid friend) can audit later.</li>
          <li class="flex items-start gap-3"><strong>Pay Once, Done Forever:</strong> License sticks to this machine; reinstall anytime on that box.</li>
        </ul>

        <div class="mt-auto pt-4">
          <div class="card-actions justify-center">
            <a href="/account" class="btn btn-accent btn-wide">Download for $1</a>
          </div>
          <p class="text-center text-xs text-base-content/50 mt-2">Digital product · no refunds</p>
        </div>
      </div>
    </div>
    
    <!-- Trade Pilot Dashboard Card -->
    <div class="card bg-base-200 w-full lg:w-1/2 flex-none shadow-xl border-2 border-secondary">
      <div class="card-body p-8 flex flex-col">
        <h3 class="card-title text-2xl text-primary">🎛️ Trade Pilot Dashboard</h3>
        <p class="text-4xl font-bold mt-2">$5 / month <span class="text-lg font-normal">or $50 / year</span></p>
        <p class="text-base-content/80 flex-grow mt-4">Color-coded dashboard shows what fired and what filled. Pings your phone via Telegram when you're on the go.</p>

        <ul class="my-6 space-y-3 text-left">
          <li class="flex items-start gap-3"><strong>15-Minute Liftoff:</strong> Launch script, enter trial key, paste JSON sample into TradingView, and you're trading.</li>
          <li class="flex items-start gap-3"><strong>Launch Exchanges:</strong> Works with Kraken, Gemini, and Binance US for spot trades. No margin drama.</li>
          <li class="flex items-start gap-3"><strong>Keys Stay Home:</strong> Secrets live on your drive, matching "self-custody first" security best practices.</li>
          <li class="flex items-start gap-3"><strong>Setup Script Included:</strong> Bundled for free, because friends don’t let friends copy-paste firewall rules.</li>
        </ul>

        <div class="mt-auto pt-4">
          <div class="card-actions justify-center">
            <a href="/account" class="btn btn-primary btn-wide">Start 7-Day Free Trial</a>
          </div>
          <p class="text-center text-xs text-base-content/50 mt-2">Cancel before day 7 to skip billing.</p>
        </div>
      </div>
    </div>
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
        <input type="radio" name="deep-dive-accordion" /> 
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