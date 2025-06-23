<script lang="ts">
// No script logic needed for this static content page.
</script>

<svelte:head>
  <title>FAQ - Signal Lynx</title>
  <meta name="description" content="Frequently asked questions about Signal Lynx products, billing, security, and setup." />
</svelte:head>

<div class="py-12 px-4 bg-base-100">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl md:text-6xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h1>

    <!-- Universal Questions -->
    <h2 class="text-3xl font-bold text-secondary mb-6">Universal Questions</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" checked />
        <div class="collapse-title text-xl font-medium">How do you bill me?</div>
        <div class="collapse-content">
          <p>Monthly or yearly subscription—no surprise “pro-plus-turbo” tiers. The price you subscribe at is locked for life. No bait-and-switch.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Is there a real free trial?</div>
        <div class="collapse-content">
          <p>Yep! Seven days, fully unlocked. We do require a card, but if you cancel before the 168-hour mark, you won't get charged a cent.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Refunds?</div>
        <div class="collapse-content">
          <p>Digital code can’t be un-downloaded, so all sales are final. Cancelling only stops future renewals. Please use the free trial to make sure our tools fit your needs.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">What hardware do I need?</div>
        <div class="collapse-content">
          <p>Any 64-bit Windows 10/11 or Server 2016+ box with at least 2 vCPU, 2 GB RAM, and a stable ±1 Mbps internet connection. If it runs Minecraft, you’re good.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Laptop or VPS?</div>
        <div class="collapse-content">
          <p>Your gaming PC works, but a $5/month VPS gives you 24/7 uptime and spares your home power bill.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Can I hide behind a VPN?</div>
        <div class="collapse-content">
          <p>Only if your VPN gives you a static IP. If the IP changes or rotates, TradingView webhooks will stop working.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">How do I open ports safely?</div>
        <div class="collapse-content">
          <p>Our setup script creates Windows Firewall rules (netsh advfirewall) for ports 80 & 443, blocking everything else. You can audit or change the rules anytime.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Where’s my public IP?</div>
        <div class="collapse-content">
          <p>Go to any “what is my IP” website. That’s the address TradingView should call in your webhook URL.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">How safe are my passwords & keys?</div>
        <div class="collapse-content">
          <p>All secrets are encrypted on your local disk using AES-256-GCM. Passwords and license tokens are hashed with Argon2id (19 MiB RAM, 2 iterations)—as recommended by OWASP.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Do you back up anything?</div>
        <div class="collapse-content">
          <p>License-Hub runs a nightly <code>pg_dump</code>, keeps the last 30 compressed snapshots, and can optionally ship them to S3-style buckets.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">How do I scream for help?</div>
        <div class="collapse-content">
          <p>Telegram DM or X (Twitter) mention—no email, no snail mail, no carrier pigeons.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">What’s on the roadmap?</div>
        <div class="collapse-content">
          <p>Coinbase & Bybit support, GitHub-OAuth admin login, purple-neon dark-mode themes. Vote or roast us on Telegram!</p>
        </div>
      </div>
    </div>

    <!-- Setup Script FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Setup Script FAQs</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" checked />
        <div class="collapse-title text-xl font-medium">What exactly gets installed?</div>
        <div class="collapse-content">
          <p>NGINX (native Windows build) as a reverse proxy, win-acme for Let’s Encrypt SSL (auto-renewal scheduled), and an optional Memurai cache for Redis-style ultra-low-latency storage.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Does it touch the registry?</div>
        <div class="collapse-content">
          <p>Yep—just enough to register NGINX as a service and schedule SSL renewals. Everything is logged to <code>setup.log</code>.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">What if Let’s Encrypt fails?</div>
        <div class="collapse-content">
          <p>The script retries twice, then falls back to a self-signed certificate, so you're never offline.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Can I undo everything?</div>
        <div class="collapse-content">
          <p>Yes! Just run <code>SignalLynx_Uninstall.ps1</code>—it stops services, deletes rules, and purges SSL certs. Clean uninstall.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Does this work on Linux?</div>
        <div class="collapse-content">
          <p>Not yet. Use a reverse-proxy VPS for now, or wait for our bash port (on the roadmap).</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Will it auto-update?</div>
        <div class="collapse-content">
          <p>We ship quarterly patchers—just re-run the latest installer and it upgrades in place. No reconfig required.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">What about dynamic DNS?</div>
        <div class="collapse-content">
          <p>Supports DuckDNS & No-IP. The script writes your hostname into the NGINX conf automatically for you.</p>
        </div>
      </div>
    </div>

    <!-- Webhook Engine FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Webhook Engine FAQs</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" checked />
        <div class="collapse-title text-xl font-medium">Which exchanges today?</div>
        <div class="collapse-content">
          <p>Kraken (<code>/AddOrder</code>), Binance US (<code>/api/v3/order</code>), Gemini (<code>/v1/order/new</code>)—spot only, no margin rodeo (yet).</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How fast can I start trading?</div>
        <div class="collapse-content">
          <p>Average time from first run to live order: about 15 minutes (timed with a microwave burrito).</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How many alerts per second?</div>
        <div class="collapse-content">
          <p>Up to 10 alerts/second per endpoint. TradingView caps at 30 requests/second per IP, so you're safe.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What does the dashboard show?</div>
        <div class="collapse-content">
          <p>Green “Sent” and blue “Filled” badges, PnL totals, last 1,000 events, and a rolling JSON log. It’s all color-coded for sanity—proven to beat wall-of-text console spam.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Mobile alerts?</div>
        <div class="collapse-content">
          <p>Yes—Telegram bot instantly sends a message when a fill hits. Never miss an execution.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Is my API key safe?</div>
        <div class="collapse-content">
          <p>API key files are AES-256-GCM encrypted (using libsodium); your password never leaves your PC—period.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Offline mode?</div>
        <div class="collapse-content">
          <p>If your PC goes offline, alerts won’t queue—webhooks are real-time only by design.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Can I pause trading?</div>
        <div class="collapse-content">
          <p>Yes! Toggle “Maintenance Mode” in the dashboard; the engine will ignore all inbound alerts until you flip it back.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Password reset?</div>
        <div class="collapse-content">
          <p>Delete <code>multikeys.encrypted.json</code>, restart, and re-enter your keys—same as forgetting your gym lock combo.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Future features?</div>
        <div class="collapse-content">
          <p>Order-book PnL sync, Coinbase spot, themable skins—ETA depends on caffeine intake.</p>
        </div>
      </div>
    </div>

    <!-- License-Hub FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">License Hub FAQs</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" checked />
        <div class="collapse-title text-xl font-medium">Docker in plain English?</div>
        <div class="collapse-content">
          <p>Copy your <code>.env</code>, run <code>docker compose up -d</code>, and you’ll have a working GUI on port 3200 in under a minute.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Which Postgres?</div>
        <div class="collapse-content">
          <p>Ships with 16-alpine, but any Postgres 13+ server will work—just point <code>DATABASE_URL</code> in your config.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Stripe & PayPal—how?</div>
        <div class="collapse-content">
          <p>Copy the auto-generated HTTPS endpoint into Stripe’s webhook page (events: <code>invoice.paid</code>, <code>customer.subscription.deleted</code>) and PayPal’s Webhook console (<code>PAYMENT.SALE.COMPLETED</code>).</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How do backups work?</div>
        <div class="collapse-content">
          <p>A sidecar container cron-runs <code>pg_dump</code> nightly, gzips the file, keeps 30 days, and can ship backups to any S3-style storage bucket.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Machine resets?</div>
        <div class="collapse-content">
          <p>End-users can move a license to a new machine once per month via the portal—the counter resets every 30 days. No support ticket needed.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Offline grace tokens?</div>
        <div class="collapse-content">
          <p>Generate a 7-day signed JSON token—app validates locally and gently nags you for internet after expiry.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Argon2 settings?</div>
        <div class="collapse-content">
          <p>19 MiB RAM, 2 iterations, parallelism 1—straight from the OWASP cheat sheet for max security.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Can I issue dev keys?</div>
        <div class="collapse-content">
          <p>Yes—generate time-boxed or feature-flagged promo keys for testers, influencers, or limited trials.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Multi-tenant?</div>
        <div class="collapse-content">
          <p>On the roadmap! Today, each server = one SaaS product. True multi-tenant is coming.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Restore after disaster?</div>
        <div class="collapse-content">
          <p>Spin up a new VPS, restore the last <code>pg_dump</code> with <code>pg_restore</code>, update DNS—15 min RTO, tested and proven in live drills.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Email templates?</div>
        <div class="collapse-content">
          <p> Editable HTML with placeholders for <code>&#123;name&#125;</code>, <code>&#123;key&#125;</code>, <code>&#123;expiry&#125;</code>. Add your own synthwave GIF for extra vibes.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Compliance badges?</div>
        <div class="collapse-content">
          <p>Coming soon—SOC2 and other badges will appear once our paperwork is done. Until then, hold our energy drink.</p>
        </div>
      </div>
    </div>

    <!-- Final CTA -->
    <div class="text-center mt-16">
      <h2 class="text-2xl font-bold">Need more?</h2>
      <p class="mt-2">Hit us on Telegram. If your question makes us face-palm twice, it goes right into this FAQ—no gatekeeping.</p>
    </div>
  </div>
</div>
