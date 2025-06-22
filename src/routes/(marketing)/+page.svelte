<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"
  import PricingModule from "./pricing/pricing_module.svelte";

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  // This section is repurposed as the "Problem -> Solution" band
  const features = [
    {
      name: "Your Weekend? Saved.",
      description:
        "Manual server hardening can swallow a whole Saturday. Run our script, crack open a can of neon fuel, and you’re production-ready in two minutes.",
      link: "/products/script", // Link to the setup script product page
      linkText: "Learn More",
    },
    {
      name: "Security First",
      description:
        "Your keys, your server, your rules. Signal Lynx runs on your own hardware, so your API keys and strategies never leave your control.",
      link: "/products", // Link to all products
      linkText: "Our Tools",
    },
    {
      name: "Wallet Friendly",
      description:
        "Priced for the front-line trader, not Wall Street. Save your cash for bigger bets and better hardware, not bloated SaaS fees.",
      link: "/pricing",
      linkText: "See Pricing",
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}: Control the Flow, Keep the Dough.</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[70vh] bg-synth-grid bg-repeat">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <h1
        class="text-4xl md:text-6xl font-bold text-primary px-2"
        style="line-height: 1.2;"
      >
        Control the Flow, Keep the Dough.
      </h1>
      <h2 class="mt-6 md:mt-10 text-lg md:text-2xl">
        Security-first automation priced lower than a neon energy drink.
      </h2>
      <div
        class="mt-8 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="/pricing">
          <button class="btn btn-primary px-8">Start Free Trial</button>
        </a>
        <a href="#demo">
          <button class="btn btn-outline btn-secondary px-8">Watch 60-sec Demo</button>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="min-h-[60vh] bg-base-200">
  <div class="pt-20 pb-16 px-7">
    <div
      class="flex gap-6 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div class="card bg-base-100 w-[320px] min-h-[280px] flex-none shadow-xl">
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <h2 class="card-title text-2xl text-primary">
              {feature.name}
            </h2>
            <p class="text-base-content/70">
              {feature.description}
            </p>
            {#if feature.link}
              <a href={feature.link} class="mt-4">
                <button
                  class="btn btn-sm btn-outline rounded-full btn-accent min-w-[120px]"
                  >{feature.linkText}</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div id="pricing" class="py-16 bg-base-100">
  <div class="max-w-lg mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold text-primary pb-2">
        Pick Your Poison
      </h2>
      <p class="mt-4 text-xl">
        No hidden fees. No enterprise sales calls. Just tools that work.
      </p>
  </div>
  <PricingModule callToAction="Get Started" highlightedPlanId="pro" />
</div>

<div id="demo" class="hero min-h-[60vh] mt-12 bg-base-300">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold text-primary mt-4 pb-2"
      >
        See How It Works
      </div>
       <div class="mt-4 text-xl">
         (Your awesome 60-second demo video goes here)
       </div>
        <div class="mt-6 rounded-lg bg-black aspect-video w-full max-w-lg flex items-center justify-center">
            <p class="text-base-content/50">Demo video coming soon...</p>
        </div>
    </div>
  </div>
</div>