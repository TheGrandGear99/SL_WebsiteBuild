<script lang="ts">
  // Array of documentation files for easy management
  const documents = [
    {
      title: "🛡️ One-Button Setup Script",
      description: "A complete guide to the one-click hardening script for Windows servers, including prerequisites and an explanation of all automated steps.",
      href: "/documents/Setup-Script-README.pdf"
    },
    {
      title: "🎛️ Trade Pilot Dashboard (Webhook Engine)",
      description: "Full documentation for the webhook engine, including setup, exchange configuration, creating TradingView alerts with JSON examples, and using the Telegram bot.",
      href: "/documents/Webhook-Engine-README.pdf"
    },
    {
      title: "🔑 License-Hub Dashboard",
      description: "Technical documentation for the self-hosted license manager, covering Docker deployment, payment provider webhook setup, and disaster recovery procedures.",
      href: "/documents/License-Hub-README.pdf"
    }
  ];
</script>

<svelte:head>
  <title>Documentation - Signal Lynx</title>
  <meta name="description" content="Downloadable READMEs and setup guides for Signal Lynx products." />
</svelte:head>

<div class="py-12 px-4 bg-base-100">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-bold text-primary">Documentation</h1>
      <p class="mt-4 text-xl">Downloadable READMEs and setup guides for our products.</p>
    </div>

    <div class="space-y-6">
      {#each documents as doc}
        <div class="card card-bordered bg-base-200 shadow-md">
          <div class="card-body">
            <h2 class="card-title text-2xl">{doc.title}</h2>
            <p>{doc.description}</p>
            <div class="card-actions justify-end mt-4">
              <a href={doc.href} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Open PDF
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</div>