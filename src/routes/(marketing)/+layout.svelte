<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">
      <img src="/images/signal-lynx-logo.png" alt="Signal Lynx Logo" class="h-10 w-auto mr-2" />
      {WebsiteName}
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
      <li class="dropdown dropdown-hover md:mx-2">
        <div tabindex="0" role="button">Products</div>
        <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/trading-automation">Trading Automation</a></li>
          <li><a href="/license-hub">Key Commander</a></li>
        </ul>
      </li>
      <li class="md:mx-2"><a href="/docs">Docs</a></li>
      <li class="md:mx-2"><a href="/faq">FAQ</a></li>
      <li class="md:mx-2"><a href="/contact_us">Contact</a></li>
      <li class="md:mx-2"><a href="/account">Account</a></li>
      <li class="md:mx-0">
        <a href="/search" aria-label="Search">
          <svg
            fill="currentColor"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
              fill="currentColor"
            /></svg
          >
        </a>
      </li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <button type="button" class="btn btn-ghost btn-circle" aria-label="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </button>
      <ul
        class="menu menu-lg dropdown-content mt-3 z-1 p-2 shadow-sm bg-base-100 rounded-box w-52 font-bold"
      >
        <li>
          <span>Products</span>
          <ul class="p-2">
            <li><a href="/trading-automation">Trading Automation</a></li>
            <li><a href="/license-hub">Key Commander</a></li>
          </ul>
        </li>
        <li><a href="/docs">Docs</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contact_us">Contact Us</a></li>
        <li><a href="/account">Account</a></li>
        <li><a href="/search">Search</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  {@render children?.()}
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="footer md:footer-horizontal p-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 place-content-center text-base"
  >
    <nav>
      <span class="footer-title opacity-80">Products</span>
      <a class="link link-hover mb-1" href="/trading-automation">Trading Automation</a>
      <a class="link link-hover my-1" href="/license-hub">Key Commander</a>
    </nav>
    <nav>
        <span class="footer-title opacity-80">Company</span>
        <a class="link link-hover my-1" href="/docs">Docs</a>
        <a class="link link-hover my-1" href="/faq">FAQ</a>
        <a class="link link-hover my-1" href="/contact_us">Contact Us</a>
    </nav>
    <nav>
        <span class="footer-title opacity-80">Community</span>
        <a href="https://t.me/SignalLynx" class="link link-hover mb-1">Telegram</a>
        <a href="https://twitter.com/SignalLynx" class="link link-hover my-1">X / Twitter</a>
      </nav>
  </footer>
</div>