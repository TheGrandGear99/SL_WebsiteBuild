import { buildSearchIndex } from "$lib/build_index";
import { json } from "@sveltejs/kit";

export const prerender = true;

export async function GET({ setHeaders }) {
  const searchData = await buildSearchIndex();
  
  // --- PERFORMANCE UPGRADE ---
  // Cache this response in the user's browser for 1 hour (3600 seconds)
  // and on public caches (like CDNs) for the same duration.
  setHeaders({
    'Cache-Control': 'public, max-age=3600'
  });

  return json(searchData);
}