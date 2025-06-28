<script lang="ts">
// No script logic needed for this static content page.
</script>

<svelte:head>
  <title>FAQ – Signal Lynx</title>
  <meta
    name="description"
    content="Your Pre-Flight Checklist: All your burning questions about Signal Shield, Lynx-Relay, and Key Commander answered with our signature, surprisingly honest style."
  />
</svelte:head>

<div class="py-12 px-4 bg-base-100">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-6xl font-bold text-primary">Your Pre-Flight Checklist</h1>
      <p class="mt-4 text-xl max-w-2xl mx-auto">
        We get it, you've got questions. Here are our surprisingly honest answers. Read this before you try to use a toaster as a VPS or ask us something that's covered on line one.
      </p>
    </div>

    <!-- Universal Questions -->
    <h2 class="text-3xl font-bold text-secondary mb-6">General Intel: The Big Picture</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" checked />
        <div class="collapse-title text-xl font-medium">What's the damage to my wallet?</div>
        <div class="collapse-content">
          <p>
            Zero smoke, zero mirrors. You pay a flat monthly or yearly rate. We don’t do hidden fees, sneaky in-app purchases, or surprise "pro-plus-turbo" tiers designed to punish you for succeeding.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Is the free trial actually... free?</div>
        <div class="collapse-content">
          <p>
            You bet. You get seven days of the full, unlocked experience. We need a card to get you started (to keep out the bots and time-wasters), but if you cancel before day eight, your bank account remains untouched.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Can I get my money back if I cry?</div>
        <div class="collapse-content">
          <p>
            Sorry, operator. Since you get the full software instantly, all sales are final. The free trial is your time to kick the tires, light the fires, and make sure our gear is right for your mission. Canceling just stops future payments.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">What kind of rig do I need?</div>
        <div class="collapse-content">
          <p>
            Our software is lean and mean. It'll run on just about anything without bogging it down. Check the specific product pages for the nitty-gritty specs.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Laptop, Desktop, or That Glowing Box in the Cloud (VPS)?</div>
        <div class="collapse-content">
          <p>
            Your call. Run it on your daily driver, a dedicated desktop, or your gaming beast. If you want 24/7 uptime without your electric bill screaming in terror, a Virtual Private Server (VPS) is your best bet.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Will my fancy VPN break things?</div>
        <div class="collapse-content">
          <p>
            Only if it plays musical chairs with your IP address. You need a static (unchanging) IP for TradingView's webhooks to find their target. If your IP changes, the signal gets lost in the ether.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Are these webhooks going to get me hacked?</div>
        <div class="collapse-content">
          <p>
            Not on our watch. Signal Shield builds a fortified, encrypted tunnel just for your webhooks. It's like a VIP entrance with a bouncer that only lets TradingView in.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">How safe are my API keys and passwords?</div>
        <div class="collapse-content">
          <p>
            Safer than a dragon's hoard. We use top-shelf encryption to lock down your secrets on your local machine. We never see them, we never store them, and our security practices are tough enough to make a cryptographer nod in approval.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Who do I yell at when something breaks?</div>
        <div class="collapse-content">
          <p>
            Yell at us! We're live on Telegram and X. We’re always ready to help a fellow operator out of a jam.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Seriously, who are you people?</div>
        <div class="collapse-content">
          <p>
            We're the renegades. A small squad of engineers and traders who got sick of automation tools that were overpriced, unreliable, or both.
          </p>
          <p class="mt-2">
            Fueled by late nights and questionable amounts of caffeine, we built the gear we wanted to use. Now we’re sharing it with you.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Why are you so cheap? What's the catch?</div>
        <div class="collapse-content">
          <p>
            The catch is there's no catch. We're not bankrolled by VCs and we don't have yachts to pay for. We built these tools for ourselves and priced them for people like us.
          </p>
          <p class="mt-2">
            Go use the money you save to buy a better graphics card or another case of energy drinks. You've earned it.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">What's next on the roadmap?</div>
        <div class="collapse-content">
          <p>
            Our roadmap is basically a community wishlist. We build what you ask for. Hit us up on Telegram or X with your genius ideas. The most-wanted features get built next.
          </p>
        </div>
      </div>
    </div>

    <!-- Signal Shield: FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Dossier: Signal Shield</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" checked />
        <div class="collapse-title text-xl font-medium">What black magic does the installer actually perform?</div>
        <div class="collapse-content">
          <p>
            It’s not magic, it’s just efficient engineering. It installs the whole security stack: NGINX for reverse proxy, NetTime for perfect clock sync, Memurai for an in-memory database, and NSSM to make sure services stay running. Plus, it wraps everything in a shiny SSL certificate.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Does it mess with the Windows Registry?</div>
        <div class="collapse-content">
          <p>It does, but only gently. Just a few tweaks to optimize performance. And yes, it knows how to clean up after itself if you decide to uninstall.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">What if the installer throws a tantrum?</div>
        <div class="collapse-content">
          <p>
            While rare, it can happen. If it does, you can go old-school and configure Lynx-Relay manually. The README has the full, step-by-step instructions for a manual override.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Can I completely erase it from my system?</div>
        <div class="collapse-content">
          <p>Absolutely. The uninstaller is as thorough as the installer. It leaves no trace behind.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">What operating systems does it play nice with?</div>
        <div class="collapse-content">
          <p>Windows 10/11 and Server 2016+ are our bread and butter. Linux and macOS versions are brewing in the lab.</p>
        </div>
      </div>
    </div>

    <!-- Lynx-Relay: FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Dossier: Lynx-Relay</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" checked />
        <div class="collapse-title text-xl font-medium">Which exchanges can I command?</div>
        <div class="collapse-content">
          <p>
            Currently, you can deploy trades on Kraken, Gemini, and Binance.US. Yell at us on social media to tell us which exchange to conquer next.
          </p>
        </div>
      </div>
       <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What OS do I need for this?</div>
        <div class="collapse-content">
          <p>Same as Signal Shield: Windows 10/11 and Server 2016+. Linux/macOS support is on the horizon.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Time from zero to "holy crap, it's trading for me"?</div>
        <div class="collapse-content">
          <p>Less than 15 minutes. Seriously.</p>
          <p class="font-semibold mt-4">Your Mission, Should You Choose to Accept It:</p>
          <ol class="list-decimal list-inside pl-4 space-y-1">
            <li>Run Signal Shield (the 1-click part).</li>
            <li>Fire up Lynx-Relay.</li>
            <li>Punch in your master password and webhook passphrase.</li>
            <li>Slap in your license key.</li>
            <li>Feed it your Telegram Bot Token and Chat ID.</li>
            <li>Plug in your exchange API keys.</li>
          </ol>
          <p class="mt-2">Point TradingView to your webhook URL. Go live. Done.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What kind of orders can I place?</div>
        <div class="collapse-content">
          <p>We support a whole arsenal for spot trading:</p>
          <ul class="list-disc list-inside pl-4 space-y-2 mt-2">
            <li><strong>Kraken:</strong> Limit, Advanced Limit, Market, Take Profit, Stop Loss.</li>
            <li>
              <strong>Gemini:</strong> Limit, Advanced Limit, Take Profit, Stop Loss. (We cleverly emulate market orders since they don't offer them directly).
            </li>
            <li><strong>Binance.US:</strong> Limit, Advanced Limit, Market, Take Profit, Stop Loss.</li>
          </ul>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How does it know what to do? Magic?</div>
        <div class="collapse-content">
          <p>
            Close. It's JSON. You craft a JSON payload in your TradingView alert message. Lynx-Relay receives it, deciphers your commands (buy, sell, quantity, etc.), and executes the trade. It's your strategy, spoken in the language of machines.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How do I find my public IP?</div>
        <div class="collapse-content">
          <p>
            Go to a "what is my IP" site. Copy that address. Paste it into your TradingView webhook URL like this: <code>https://YOUR.PUBLIC.IP.ADDRESS/webhook</code>. Boom.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How many alerts can I fire at it?</div>
        <div class="collapse-content">
          <p>It can handle up to 10 alerts per second without breaking a sweat. If you're sending more than that, you're either a god-tier HFT or you've made a terrible mistake in your script.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What does the dashboard show me?</div>
        <div class="collapse-content">
          <p>
            Your entire operation at a glance: system status, incoming alerts, trade results, connection health, a full audit log, and P&L tracking. Total transparency.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Can I get alerts on my phone while I'm "working"?</div>
        <div class="collapse-content">
          <p>Yep. The Telegram integration means you get real-time pings for every move your bot makes, so you can look busy while secretly monitoring your trading empire.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Are you SURE my API keys are safe?</div>
        <div class="collapse-content">
          <p>Positive. They're encrypted and stored on your machine. We couldn't see them even if we wanted to (and we don't).</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What happens if my internet dies?</div>
        <div class="collapse-content">
          <p>If the signal can't get through, trading pauses. Lynx-Relay needs a live connection to receive webhooks and execute trades.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Does this thing update itself?</div>
        <div class="collapse-content">
          <p>
            Nope. We don't believe in forcing updates on you. When a new version drops, you'll grab it from your account and just replace the old executable. No re-setup needed.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How do I hit the pause button?</div>
        <div class="collapse-content">
          <p>
            Two ways: for a total system halt, just stop the Lynx-Relay service. For a more surgical approach, pause individual alerts inside TradingView.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">I forgot my master password. Am I screwed?</div>
        <div class="collapse-content">
          <p>
            Not totally, but you'll have to perform a "scorched earth" reset. For security, there's no recovery. You'll need to delete the <code>SignalLynx_Vault.encrypted</code> file, restart Lynx-Relay, and re-enter your keys. It’s a pain, but it's secure. You'll be back online in 10 minutes.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What's coming next for Lynx-Relay?</div>
        <div class="collapse-content">
          <p>More exchanges, more dashboard widgets, more power. Tell us what you want, and we'll probably build it.</p>
        </div>
      </div>
    </div>

    <!-- Key Commander: FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Dossier: Key Commander</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" checked />
        <div class="collapse-title text-xl font-medium">Is this thing hard to use? I hate terminals.</div>
        <div class="collapse-content">
          <p>
            We hate terminals too (for this kind of stuff). Key Commander is 100% GUI-driven. If you can click a mouse, you can manage a licensing empire. No command line, no editing weird <code>.env</code> files.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What exactly does it DO?</div>
        <div class="collapse-content">
          <p>
            Everything. Generates keys, manages customers, processes payments, delivers licenses, handles revocations, reissues... all from a slick Admin Portal. It's your entire back-office in a box.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Is it really one price for everything?</div>
        <div class="collapse-content">
          <p><strong>Yes.</strong> One flat rate. All the features. No add-ons, no tiers, no "call for pricing" nonsense. Scale to a million users; we don't care. Your success is yours, not ours.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What are the system requirements?</div>
        <div class="collapse-content">
          <p>A cheap VPS with Docker is perfect. Give it at least 2 vCPUs, 8 GB RAM, and 100 GB of storage. It's surprisingly lightweight.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How do I install this beast?</div>
        <div class="collapse-content">
          <p>You deploy one Docker container. That's it. The Admin Portal then holds your hand through the rest of the setup.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How does it work, architecturally?</div>
        <div class="collapse-content">
          <p>
            It’s a two-part system: a headless server that does all the heavy lifting, and the GUI Admin Portal you use to command it. Once you set it up and lock it with your master password, the server runs completely on its own.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How does the Admin Portal connect?</div>
        <div class="collapse-content">
          <p>
            You can run the portal on the same VPS or on your local machine. It connects to the server securely. No need to ever touch a config file or a database shell.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Which payment providers can I use?</div>
        <div class="collapse-content">
          <p>Right now, it's deeply integrated with Stripe. We're adding more. Let us know who you want to see next!</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What kinds of products can I sell?</div>
        <div class="collapse-content">
          <p>One-time purchases, recurring subscriptions, and time-limited trials. It handles all three right out of the box.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Does this stop people from sharing my software?</div>
        <div class="collapse-content">
          <p>
            Yep. Each license key gets chained to a unique machine ID upon activation. No more one-to-many license sharing.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What if a legit user gets a new computer?</div>
        <div class="collapse-content">
          <p>
            They can self-serve a machine ID reset once a month. For special cases, you, the admin, can grant more resets with a click of a button.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Does my app have to be online all the time?</div>
        <div class="collapse-content">
          <p>
            Nope. You can enable offline session tokens. The user's app checks in once, gets a token, and can then work offline until the next renewal period.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How secure is this, really?</div>
        <div class="collapse-content">
          <p>OWASP-compliant, industry-standard, built-like-a-bunker secure. We take this stuff very seriously.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Can I create keys for my dev team or for promos?</div>
        <div class="collapse-content">
          <p>Of course. As the admin, you can mint custom keys on the fly for whatever purpose you need.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Can I manage multiple products or tiers?</div>
        <div class="collapse-content">
          <p>Unlimited products, unlimited tiers. Go wild.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Does it back up my data?</div>
        <div class="collapse-content">
          <p>Yep. It has manual and automated backups. It also constantly cross-references with Stripe to keep your data pristine.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Can it survive a server apocalypse?</div>
        <div class="collapse-content">
          <p>
            It can. Restore from a backup, run a reconciliation with Stripe, and all your customer data and licenses are back from the dead. (Dev keys need a backup to be restored, though).
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Is key delivery automatic?</div>
        <div class="collapse-content">
          <p>
            100%. After a purchase, keys are generated and emailed instantly. We support SMTP, Brevo, and Amazon SES.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How do I hook this into my own software?</div>
        <div class="collapse-content">
          <p>
            The Key Commander README is packed with code examples. If you get stuck, hit us up on Telegram or X. We'll get you sorted.
          </p>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="text-center mt-16">
      <h2 class="text-2xl font-bold">Still Stumped?</h2>
      <p class="mt-2 max-w-xl mx-auto">
        If your question wasn't answered here, it's probably weird enough that we want to hear about it. Hit us up on Telegram or X.
      </p>
    </div>
  </div>
</div>