<script lang="ts">
  import { licenseHubProduct } from "$lib/data/products";
  import ProductCard from '$lib/components/ProductCard.svelte';
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
    <ProductCard product={licenseHubProduct} />
  </div>
</div>

<!-- Quick Details Section -->
<div class="py-16 px-4 bg-base-200">
  <div class="max-w-4xl mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
        <!-- Details can be hardcoded here or moved to data file if needed -->
        <div class="flex items-start gap-4">
          <div class="text-4xl">🚀</div>
          <div>
            <h4 class="font-bold text-lg">Launch Speed</h4>
            <p class="text-base-content/70">docker compose up -d → GUI live in ≈10 min</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="text-4xl">💾</div>
          <div>
            <h4 class="font-bold text-lg">Backups</h4>
            <p class="text-base-content/70">Automatic nightly pg_dump to local disk or S3-compatible bucket</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="text-4xl">🔐</div>
          <div>
            <h4 class="font-bold text-lg">Hashing</h4>
            <p class="text-base-content/70">Argon2id (OWASP-approved) @ ≥19 MiB RAM, 2 iters</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="text-4xl">📨</div>
          <div>
            <h4 class="font-bold text-lg">Customer Touch</h4>
            <p class="text-base-content/70">Auto-emails on Stripe & PayPal payment events</p>
          </div>
        </div>
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