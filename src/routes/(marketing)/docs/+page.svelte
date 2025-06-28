<script lang="ts">
  // Array of documentation files for easy management
  const documents = [
    {
      title: "Signal Shield",
      subtitle: "The One-Button Bodyguard",
      description: "Your step-by-step mission brief for hardening any Windows machine. This guide covers the one-click installer, prerequisite checks, and what all those fancy automated steps are actually doing to make your rig a fortress.",
      href: "/documents/Setup-Script-README.pdf"
    },
    {
      title: "Lynx-Relay",
      subtitle: "The Automated Trading Executor",
      description: "The complete playbook for turning TradingView alerts into hands-off trades. Covers setup, exchange configuration, crafting perfect JSON alerts (with examples), and taming the Telegram bot for on-the-go updates.",
      href: "/documents/Webhook-Engine-README.pdf"
    },
    {
      title: "Key Commander",
      subtitle: "The Self-Hosted License Hub",
      description: "Your technical field guide to deploying and managing your own licensing empire. We're talking Docker deployment, Stripe webhook wrangling, and the disaster recovery plan for when your VPS inevitably face-plants.",
      href: "/documents/License-Hub-README.pdf"
    }
  ];
</script>

<svelte:head>
  <title>Documentation - Signal Lynx</title>
  <meta name="description" content="The Owner's Manuals. Downloadable READMEs, setup guides, and technical deep-dives for all Signal Lynx products." />
</svelte:head>

<div class="py-12 px-4 bg-base-100">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-bold text-primary">The Owner's Manuals</h1>
      <p class="mt-4 text-xl max-w-2xl mx-auto">
        Don't just wing it. Here are the secret scrolls, the forbidden texts, and... well, they're READMEs. Read 'em before you accidentally summon a demon or, worse, file a support ticket for something that's on page one.
      </p>
    </div>

    <div class="space-y-8">
      {#each documents as doc}
        <div class="card card-bordered bg-base-200 shadow-xl transition-all duration-300 hover:border-accent">
          <div class="card-body">
            <h2 class="card-title text-2xl text-secondary">{doc.title}</h2>
            <p class="font-semibold text-accent -mt-2">{doc.subtitle}</p>
            <p class="mt-4 text-base-content/80">{doc.description}</p>
            <div class="card-actions justify-end mt-4">
              <a href={doc.href} target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-gradient-electric">
                Read the Manual
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>