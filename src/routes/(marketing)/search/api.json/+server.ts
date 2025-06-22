import { buildSearchIndex } from "$lib/build_index";
import { json } from "@sveltejs/kit";

export const prerender = true;

export async function GET() {
  const searchData = await buildSearchIndex();
  return json(searchData);
}