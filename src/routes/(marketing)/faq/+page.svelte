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
          <p>We offer simple monthly or yearly subscriptions. No surprise “pro-plus-turbo” tiers or sneaky in-app purchases. We accept all major credit cards.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Is there a real free trial?</div>
        <div class="collapse-content">
          <p>Yep! Seven days, fully unlocked. We do require a card, but if you cancel before the seven-day mark, you won't be charged a cent.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Can I get a refund?</div>
        <div class="collapse-content">
          <p>Since our software is a digital download, we can't exactly "un-download" it. Therefore, all sales are final. Canceling your subscription simply prevents future renewals. Please use the free trial to make sure our tools are the right fit for your needs.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">What hardware do I need?</div>
        <div class="collapse-content">
          <p>The Signal Lynx applications require minimal processing power. Our tools are lightweight, but please check the specific product page for detailed requirements.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Should I use a laptop or a VPS?</div>
        <div class="collapse-content">
          <p>Your laptop, desktop, or gaming PC works great, but a Virtual Private Server (VPS) gives you 24/7 uptime and spares your home power bill.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Can I hide behind a VPN?</div>
        <div class="collapse-content">
          <p>Only if your VPN provides a static IP address. If the IP changes or rotates, TradingView webhooks won't be able to find your computer or our webhook engine.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Webhooks? Am I safe from internet baddies?</div>
        <div class="collapse-content">
          <p>Absolutely. The Signal Lynx Installer creates a secure tunnel for webhooks, using industry-standard practices to keep you and your data safe from internet baddies.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">How safe are my passwords & API keys?</div>
        <div class="collapse-content">
          <p>We use leading encryption routines to protect your secure data, and it's all stored right on your local disk. Our security practices meet or exceed the stringent Open Worldwide Application Security Project (OWASP) guidelines.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">How do I scream for help?</div>
        <div class="collapse-content">
          <p>Our DMs are always open on Telegram and X (formerly Twitter). We're here to help.</p>
        </div>
      </div>
<div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Who is Signal Lynx?</div>
        <div class="collapse-content">
          <p>We’re probably a lot like you - a small team of engineers and traders with day jobs. Signal Lynx is what happens when you get tired of tools that are either too expensive or just plain don't work.</p>
          <p class="mt-2">Fueled by late nights and questionably large amounts of caffeine, we decided to build our own solutions. Now, we're sharing them with the community.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">Why are your prices so low?</div>
        <div class="collapse-content">
          <p>Simple: We're not a giant, venture-capital-funded corporation with a yacht to pay for. Our tools were born out of personal need, and we believe in putting powerful, reliable software in the hands of individuals.</p>
          <p class="mt-2">We couldn't, in good conscience, charge thousands for something we built for ourselves and our community. We call it a disruptive price - you can call it a fair one.</p>
          <p class="mt-2">Use the money you're saving to grow your capabilities. Get that first VPS, upgrade your setup, or buy another case of your favorite energy drink. We get it.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-universal" />
        <div class="collapse-title text-xl font-medium">What’s on the roadmap?</div>
        <div class="collapse-content">
          <p>We're a small, passionate team that's always building. We might not move at the speed of a time-jumping DeLorean, because we have day jobs just like you. <br/>
          We want to hear your opinions on what to build next! Vote for features or roast us on Telegram or X (formerly Twitter)!</p>
        </div>
      </div>
    </div>

    <!-- Signal Lynx Webhook Engine Installer: FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Signal Lynx Webhook Engine Installer: FAQ's</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" checked />
        <div class="collapse-title text-xl font-medium">What exactly gets installed?</div>
        <div class="collapse-content">
          <p>Only what's needed to protect your computer and ensure reliable trading. The installer sets up a reverse proxy (NGINX), time synchronization (NetTime), an in-memory database for stability (Memurai), and the NSSM service manager. It also performs full SSL encryption to secure your connection.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Does it touch the Windows Registry?</div>
        <div class="collapse-content">
          <p>Yep—just enough to ensure robust performance of the Webhook Engine. All changes are completely reversible.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">What if the installer fails?</div>
        <div class="collapse-content">
          <p>In the unlikely event the setup installer fails, the configuration can be done manually. Just follow the instructions in the Webhook Engine's `README` file for details.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">Can I undo everything?</div>
        <div class="collapse-content">
          <p>Yes! Everything the installer does can be quickly and cleanly uninstalled.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-setup" />
        <div class="collapse-title text-xl font-medium">What operating systems are supported?</div>
        <div class="collapse-content">
          <p>Currently, we only support Windows10/11 and Server 2016+. Support for Linux and macOS is on the roadmap.</p>
        </div>
      </div>
    </div>

    <!-- Signal Lynx Webhook Engine: FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Signal Lynx Webhook Engine: FAQ's</h2>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" checked />
        <div class="collapse-title text-xl font-medium">Which exchanges are supported?</div>
        <div class="collapse-content">
          <p>Kraken, Gemini, and Binance.US are currently supported. Additional exchanges are forthcoming—let us know which ones you want to see next!</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What computer operating systems are supported?</div>
        <div class="collapse-content">
          <p>Same as the installer: We currently support Windows 10/11 and Server 2016+, with Linux and macOS on the way.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How fast can I start trading?</div>
        <div class="collapse-content">
          <p>The host computer and Webhook Engine can be configured in less than 15 minutes, including generating your new exchange API keys.</p>
          <p class="font-semibold mt-4">Key Setup Steps:</p>
          <ol class="list-decimal list-inside pl-4 space-y-1">
            <li>Run the Installer.</li>
            <li>Launch the Webhook Engine.</li>
            <li>Enter your Master Password.</li>
            <li>Enter your Webhook Passphrase (a second-tier password for extra security).</li>
            <li>Enter your License Key (sent to your email after signup).</li>
            <li>Configure your Telegram Bot Token and Chat ID (for mobile alerts).</li>
            <li>Configure Exchanges and enter their API Keys.</li>
          </ol>
          <p class="mt-2">That's it! The Webhook Engine is up and running, as visually confirmed by the connectivity status in the upper right. All that's left is to configure your TradingView alerts with the appropriate order details.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What order types are supported?</div>
        <div class="collapse-content">
          <p>We support Spot Only trading for Kraken, Gemini, and Binance.US.</p>
          <ul class="list-disc list-inside pl-4 space-y-2 mt-2">
            <li><b>Kraken:</b> Limit, Advanced Limit, Market, Take Profit, and Stop Loss orders. <br/>
               (Note: Kraken Stock Trading is not supported.)</li>
            <li><b>Gemini:</b> Limit, Advanced Limit, Take Profit, and Stop Loss orders. <br/>
               (Note: The Gemini API doesn't allow market orders, so our Advanced Limit order type cleverly emulates one for you.)</li>
            <li><b>Binance.US:</b> Limit, Advanced Limit, Market, Take Profit, and Stop Loss orders.</li>
          </ul>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How does the engine know what to trade?</div>
        <div class="collapse-content">
          <p>The engine takes its instructions from a webhook, typically generated by TradingView.<br/> In TradingView, you set up your alert conditions, assign the webhook URL, and then define the order details in the message box using the JSON format.<br/>
          (Think of JSON as a simple, universal language for giving instructions to the engine.)</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Where do I find my public IP address?</div>
        <div class="collapse-content">
          <p>Go to any "what is my IP" website. That's the address you'll enter into the TradingView webhook URL (e.g., https://123.456.78.90/webhook).</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">How many alerts per second can it handle?</div>
        <div class="collapse-content">
          <p>It safely operates with up to 10 alerts per second.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What does the dashboard show?</div>
        <div class="collapse-content">
          <p>The dashboard shows the engine's operational status, allowing you to see when alerts arrive, how they are processed, and if they are successfully filled by the exchange. <br/>It also shows application and exchange connectivity, subscription status, an audit log of orders, and provides Profit and Loss (PNL) tracking, in addition to error logging for your peace of mind.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Are there mobile alerts?</div>
        <div class="collapse-content">
          <p>Yes! Telegram integration allows you to see what alerts and orders are being triggered and monitor order fills while you're away from your computer. Never miss an execution.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Is my API key safe?</div>
        <div class="collapse-content">
          <p>API keys and passwords are fully encrypted and stored on your host computer. No cloud services are involved, meaning you are in control of your keys, reducing the risk of third-party breaches.<br/>Signal Lynx does not store or see your passwords or keys—ever. We will never ask for them.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Is there an offline mode?</div>
        <div class="collapse-content">
          <p>Afraid not. The Webhook Engine must be running for it to work. If your PC shuts down or loses internet connectivity, webhooks will not be processed.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Does the engine auto-update?</div>
        <div class="collapse-content">
          <p>No automatic updates here. New versions will be available in the downloads section of your account.<br/>Updates are easy: just download the new `.exe` from our website, place it in your application folder, and delete or archive the old one. You're done. No other setup or configuration is required.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">Can I pause trading?</div>
        <div class="collapse-content">
          <p>Yes! There are multiple ways to do this, but the easiest is to simply shut down the Webhook Engine for a universal pause. Pausing individual alerts on TradingView is the recommended and most strategic approach.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What if I forget my password?</div>
        <div class="collapse-content">
          <p>For enhanced security, there is no "forgot password" feature. You can change your password anytime within the "Update Keys" tab.<br/>If you do forget it, the application can be reinitialized in less than 10 minutes. Deleting the `SignalLynx_Vault.encrypted` file will reinitialize the engine. Once deleted, restart the `.exe` file, enter a new master password, re-enter your keys, and you're back up and running.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-engine" />
        <div class="collapse-title text-xl font-medium">What are some future features?</div>
        <div class="collapse-content">
          <p>We're focused on adding support for more exchanges and rolling out even more useful dashboard widgets.</p>
        </div>
      </div>
    </div>

    <!-- Signal Lynx License-Hub: FAQs -->
    <h2 class="text-3xl font-bold text-secondary mt-16 mb-6">Signal Lynx License-Hub: FAQ's</h2>
    <div class="join join-vertical w-full">
    <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" checked />
        <div class="collapse-title text-xl font-medium">How hard is the License Hub to learn?</div>
        <div class="collapse-content">
          <p>It's easy! The Signal Lynx License Hub is designed to be easy to learn and set up.<br/>It features 100% graphical interfaces: no `.env` files and no command-line routines required.<br/>The Administrator Portal provides all the features necessary to set up and manage your customer database.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What capabilities does License Hub have?</div>
        <div class="collapse-content">
          <p>License Hub is a full-featured License-as-a-Service (LaaS) solution. It handles key generation, customer management, payment processing, license delivery, revocation, re-issuance, and more.<br/>It also includes a complete Administrator Portal, allowing you to manage your customers and license keys with ease.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Is everything included for one flat rate?</div>
        <div class="collapse-content">
          <p class="font-semibold">Yes. One price, all features. No hidden fees, "pro" tiers, or surprise add-ons.</p>
          <p class="mt-2">We were just as irritated with the confusing and expensive tiers on other license managers. It’s frustrating how quickly the price can skyrocket, especially for indie developers and small businesses.</p>
          <p class="mt-2">License Hub is a non-throttled, all-inclusive application. Bring as many products and customers as you need to support your goals—we don't penalize your growth.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What do I need to run License Hub?</div>
        <div class="collapse-content">
          <p>An inexpensive, low-power VPS configured with Docker is the recommended approach. This provides a low-cost, dedicated, and professionally managed hardware option to run License Hub.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How do I set up and configure License Hub?</div>
        <div class="collapse-content">
          <p>License Hub is provided as a Docker container and will run on any system that supports Docker.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How does the Key Commander Software Work?</div>
        <div class="collapse-content">
          <p>Key Commander is actually two (2) software applications - a Frontend Admin Portal, and a Backend server. <br/>
          The fully GUI Admin Portal allows the System Administrator to configure the server, manage the customer database, create and manage products, etc. <br/>
          The Backend server manages license generation, validation and the customer database. <br/>
          On initial setup, the Frontend and Backend will cryptographically Pair - After this initial binding, only the correct Password will unlock the backend. <br/>
          Once the Server has been initialized, the Frontend (Admin portal) does not need to be connected for the server to function. Restarts of the server will require unlock from the Frontend.
        </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How does the Admin  Portal Connect to the Server?</div>
        <div class="collapse-content">
          <p>License Hub is designed to be fully functionally via a Admin GUI Portal. No Command Prompts, no .env files, and no PostgreSQL calls. <br/>
          The Admin GUI Portal can be deployed on the VPS with the server back end, or remotely located on your Laptop/Desktop and call into your Backend VPS. The decision is yours</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What are the system requirements?</div>
        <div class="collapse-content">
          <p>Minimal system requirements are needed: 2 vCPUs, 8 GB of RAM, and 100 GB of storage should be sufficient. A Docker installation is required.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What payment providers are supported?</div>
        <div class="collapse-content">
          <p>Currently, only Stripe is supported by License Hub.<br/>Additional payment providers will be included in future upgrades. Please let us know what you want to see!</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What product types are supported?</div>
        <div class="collapse-content">
          <p>Both one-time purchases and recurring subscription orders are supported by License Hub.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Does License Hub have software-sharing protections?</div>
        <div class="collapse-content">
          <p>Yes! Each license key is paired to a machine ID during initial verification. Post-initialization, only that initial machine ID will be authorized to use the license.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What if my user gets a new computer?</div>
        <div class="collapse-content">
          <p>Machine ID resets are easy! License Hub has hooks for you to create an account-based automated reset using only the user's license key.<br/>To prevent malicious use, automatic resets are limited to once per month, but this allows for a user-driven update. Admins can perform additional machine resets at any time.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Does it support offline use?</div>
        <div class="collapse-content">
          <p>Yes! Admins can enable Offline Session Tokens. An initial online connection is required to generate the token, after which the token permits offline use until the next subscription renewal date.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">What's the security like?</div>
        <div class="collapse-content">
          <p>Our security practices meet or exceed the stringent Open Worldwide Application Security Project (OWASP) guidelines.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Can I issue developer or custom keys?</div>
        <div class="collapse-content">
          <p>Yes! Admins can generate developer and custom keys for testers, influencers, or promotional giveaways.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Can I manage multiple products and tiers?</div>
        <div class="collapse-content">
          <p>Absolutely! There are no product limitations, and it features fully configurable tier mapping.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Does License Hub back up the database?</div>
        <div class="collapse-content">
          <p>Yes! License Hub supports both manual and automatic backups of the customer and payment database.<br/>In addition, it runs reconciliation against the payment provider's database, ensuring no customers are missed and that your database stays current.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Can it recover from a disaster?</div>
        <div class="collapse-content">
          <p>Yes! License Hub is intelligently designed to restore itself after a disaster, even without performing a restoration from a backup.<br/>Reconciliation runs will repopulate your customer database from your payment provider and re-generate the same license keys, maintaining continuity for your paying subscribers!<br/>(Note: Developer keys can only be recovered from a backup, so always keep a copy of your backups!)</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">Is license key generation and delivery automatic?</div>
        <div class="collapse-content">
          <p>Yes! License Hub will automatically generate and send license keys to new users via email.<br/>Email automation is configurable and preloaded with multiple providers (SMTP, Brevo, and Amazon SES).</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-license" />
        <div class="collapse-title text-xl font-medium">How do I code my software to integrate with License-Hub?</div>
        <div class="collapse-content">
          <p>Please see the License-Hub ReadMe file for full details and suggested code examples to facilitate integration. <br/>
          Additionally please reach out to us on Telegram or X/Twitter if you need additional help with your application. </p>
        </div>
      </div>
    </div>

    <!-- We want to hear from you! -->
    <div class="text-center mt-16">
      <h2 class="text-2xl font-bold">Need more?</h2>
      <p class="mt-2">Hit us up on Telegram or X (formerly Twitter). <br/>
      If your question makes us double face-palm, it goes right into this FAQ.</p>
    </div>
  </div>
</div>