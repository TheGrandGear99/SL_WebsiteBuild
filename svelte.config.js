import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // allow up to 150kb of style to be inlined with the HTML
    // Faster FCP (First Contentful Paint) by reducing the number of requests
    inlineStyleThreshold: 150000,
    // --- SECURITY HARDENING: CSRF PROTECTION ---
    // This enables SvelteKit's built-in CSRF protection.
    // It will automatically reject any form submissions that do not
    // originate from our own domain.
    csrf: {
      checkOrigin: true,
    }
  },
  preprocess: vitePreprocess(),
}

export default config