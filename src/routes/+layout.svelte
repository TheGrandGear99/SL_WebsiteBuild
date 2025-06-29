<script module lang="ts">
  // By declaring gtag in the module context, we make TypeScript aware of the global function
  // that will be loaded by the Google Analytics script in the <head>.
  // This script block runs once per module, not once per component instance.
  declare const gtag: (
    command: 'config',
    targetId: string,
    config?: { page_path: string }
  ) => void;
</script>

<script lang="ts">
  import "../app.css"
  import { navigating, page } from "$app/stores"
  import { expoOut } from "svelte/easing"
  import { slide } from "svelte/transition"
  import { browser } from '$app/environment';
  
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  // --- Google Analytics Integration ---
  
  // IMPORTANT: Replace this with your actual Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = 'G-YOUR_MEASUREMENT_ID_HERE';

  // The $effect rune will re-run automatically whenever $page.url changes.
  $effect(() => {
    if (browser && typeof gtag !== 'undefined') {
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: $page.url.pathname,
      });
    }
  });
</script>

<svelte:head>
  <!-- Google Analytics Global Site Tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={GA_MEASUREMENT_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  </script>
</svelte:head>


{#if $navigating}
  <!-- Loading animation -->
  <div
    class="fixed w-full top-0 right-0 left-0 h-1 z-50 bg-primary"
    in:slide={{ delay: 100, duration: 12000, axis: "x", easing: expoOut }}
  ></div>
{/if}
{@render children?.()}