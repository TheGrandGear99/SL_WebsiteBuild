<script lang="ts">
  const quickDetails = [
    {
      icon: "🚀",
      title: "Launch Speed",
      description: "docker compose up -d → GUI live in ≈10 min"
    },
    {
      icon: "💾",
      title: "Backups",
      description: "Automatic nightly pg_dump to local disk or S3-compatible bucket"
    },
    {
      icon: "🔐",
      title: "Hashing",
      description: "Argon2id (OWASP-approved) @ ≥19 MiB RAM, 2 iters"
    },
    {
      icon: "📨",
      title: "Customer Touch",
      description: "Auto-emails on Stripe & PayPal payment events"
    }
  ];
</script>

<svelte:head>
  <title>License Hub - Signal Lynx</title>
  <meta name="description" content="Ship software, not headaches. Self-hosted license management for $5 a month." />
</svelte:head>

<!-- Hero Section -->
<div class="text-center py-16 md:py-24 px-4 bg-base-200">
  <h1 class="text-4xl md:text-6xl font-bold text-primary">Ship software, not headaches.</h1>
  <p class="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-base-content/80">
    Spin up your own license server on a $5 VPS, click a few buttons, and let the keys email themselves while you grab a fresh energy drink.
  </p>
</div>

<!-- Main Content Section with Product Card -->
<div class="py-16 px-4 bg-base-100">
  <div class="flex justify-center">
    <div class="card bg-base-200 w-full max-w-2xl flex-none shadow-xl border-2 border-accent">
      <div class="card-body p-8 flex flex-col">
        <h3 class="card-title text-2xl text-primary">🔑 License-Hub Dashboard</h3>
        <p class="text-4xl font-bold mt-2">$5 / mo <span class="text-lg font-normal">or $50 / yr</span></p>
        <p class="text-base-content/80 flex-grow mt-4">A point-and-click browser dashboard lets you create keys, watch activations, and nuke bad actors—no command lines to memorize.</p>
        
        <ul class="my-6 space-y-3 text-left">
          <li class="flex items-start gap-3"><strong>Webhook Magic:</strong> Stripe or PayPal fires an event; Hub instantly mails a branded key so customers get access before their receipt prints.</li>
          <li class="flex items-start gap-3"><strong>Rock-Solid Vault:</strong> Passwords and license secrets are hashed with Argon2id, the algorithm OWASP calls “state-of-the-art.”</li>
          <li class="flex items-start gap-3"><strong>7-Day Offline Tokens:</strong> Generate grace files so air-gapped workstations stay legal during audits.</li>
          <li class="flex items-start gap-3"><strong>Promo & Dev Keys:</strong> Issue time-boxed freebies for beta testers or flash sales straight from the dashboard.</li>
        </ul>

        <div class="mt-auto pt-4">
          <div class="card-actions justify-center">
            <a href="/account" class="btn btn-primary btn-wide">Start 7-Day Free Trial</a>
          </div>
          <p class="text-center text-xs text-base-content/50 mt-2">Digital good · no refunds</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Quick Details Section -->
<div class="py-16 px-4 bg-base-200">
  <div class="max-w-4xl mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
      {#each quickDetails as detail}
        <div class="flex items-start gap-4">
          <div class="text-4xl">{detail.icon}</div>
          <div>
            <h4 class="font-bold text-lg">{detail.title}</h4>
            <p class="text-base-content/70">{detail.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Deep Dive Accordion Section -->
<div class="py-16 px-4 bg-base-100">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">Technical Deep Dive</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="deep-dive-accordion" checked={true} /> 
        <div class="collapse-title text-xl font-medium">
          How does the 5-step install work?
        </div>
        <div class="collapse-content"> 
          <p>1. Clone the repository. <br/> 2. Edit the `.env` file with your secrets. <br/> 3. Run `docker compose up -d`. <br/> 4. Access the GUI and set your admin password. <br/> 5. Copy the generated webhook URL into your Stripe and/or PayPal dashboards. The server is now live.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="deep-dive-accordion" />
        <div class="collapse-title text-xl font-medium">
          What happens if my VPS dies?
        </div>
        <div class="collapse-content"> 
          <p>The system runs nightly `pg_dump` backups to a local volume. To recover, you can spin up a new VPS, import yesterday’s dump with a single `pg_restore` command, and point your DNS to the new IP. Total downtime is typically less than 5 minutes.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="deep-dive-accordion" /> 
        <div class="collapse-title text-xl font-medium">
          How secure are the keys?
        </div>
        <div class="collapse-content"> 
          <p>We use Argon2id hashing, which is designed to resist GPU cracking attacks far better than older algorithms like bcrypt. Furthermore, the entire Docker data volume can be encrypted at rest on your host machine, providing another layer of protection.</p>
        </div>
      </div>
    </div>
  </div>
</div>