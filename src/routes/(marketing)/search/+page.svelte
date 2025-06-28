<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/environment"
  import { onMount } from "svelte"
  import Fuse from "fuse.js"
  import { goto } from "$app/navigation"
  import { dev } from "$app/environment"

  const fuseOptions = {
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
      { name: "body", weight: 1 },
    ],
    ignoreLocation: true,
    threshold: 0.3,
  }

  let fuse: Fuse<Result> | undefined = $state()

  let loading = $state(true)
  let error = $state(false)
  onMount(async () => {
    try {
      const response = await fetch("/search/api.json")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const searchData = await response.json()
      if (searchData && searchData.index && searchData.indexData) {
        const index = Fuse.parseIndex(searchData.index)
        fuse = new Fuse<Result>(searchData.indexData, fuseOptions, index)
      }
    } catch (e) {
      console.error("Failed to load search data", e)
      error = true
    } finally {
      loading = false;
      // Use a timeout to ensure the element is in the DOM after the loading state changes
      setTimeout(() => document.getElementById("search-input")?.focus(), 0);
    }
  })

  type Result = {
    item: {
      title: string
      description: string
      body: string
      path: string
    }
  }
  let results: Result[] = $state([])

  let searchQuery = $state(decodeURIComponent($page.url.hash.slice(1) ?? ""))
  $effect(() => {
    if (fuse) {
      results = fuse.search(searchQuery)
    }
  })

  $effect(() => {
    if (browser && window.location.hash.slice(1) !== searchQuery) {
      goto("#" + searchQuery, { keepFocus: true, replaceState: true })
    }
  })

  let focusItem = $state(0)
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      searchQuery = ""
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      focusItem += event.key === "ArrowDown" ? 1 : -1
      if (focusItem < 0) {
        focusItem = 0
      } else if (focusItem > results.length) {
        focusItem = results.length
      }
      if (focusItem === 0) {
        document.getElementById("search-input")?.focus()
      } else {
        document.getElementById(`search-result-${focusItem}`)?.focus()
      }
    }
  }
</script>

<svelte:window onkeydown={onKeyDown} />

<svelte:head>
  <title>Search Terminal - Signal Lynx</title>
  <meta name="description" content="Query the Signal Lynx databanks." />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-2xl mx-auto">
  <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-primary">Intel Terminal</h1>
      <p class="mt-2 text-lg">Query the databanks. Find what you need.</p>
  </div>
  
  <div class="relative mt-10 mb-5 w-full">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-base-content/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </div>
    <input
      id="search-input"
      type="text"
      class="input input-bordered w-full pl-10 text-lg"
      placeholder="Search..."
      bind:value={searchQuery}
      onfocus={() => (focusItem = 0)}
      aria-label="Search input"
    />
  </div>


  {#if loading && searchQuery.length > 0}
    <div class="text-center mt-10 text-accent text-xl">Querying Databanks...</div>
  {/if}

  {#if error}
    <div class="text-center mt-10 text-error text-xl">
      Error: Connection to intel terminal failed. Please try again later.
    </div>
  {/if}

  {#if !loading && searchQuery.length > 0 && results.length === 0 && !error}
    <div class="text-center mt-10 text-accent text-xl">No Signal Found for "{searchQuery}"</div>
    {#if dev}
      <div class="text-center mt-4 font-mono text-base-content/50">
        (Dev Mode: Missing content? Rebuild your local search index with `npm run build`)
      </div>
    {/if}
  {/if}

  <div class="mt-8 space-y-6">
    {#each results as result, i}
      <a
        href={result.item.path || "/"}
        id="search-result-{i + 1}"
        class="card bg-base-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-accent border-2 border-transparent focus:border-accent focus:outline-none"
      >
        <div class="card-body">
          <h2 class="card-title text-2xl text-secondary">{result.item.title}</h2>
          <div class="text-sm text-accent font-mono">
            PATH: {result.item.path}
          </div>
          <p class="text-base-content/80 mt-2">{result.item.description}</p>
        </div>
      </a>
    {/each}
  </div>
</div>