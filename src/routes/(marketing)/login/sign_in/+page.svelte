<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from "$app/stores";
  import AuthWrapper from '$lib/components/login/AuthWrapper.svelte';

  let { data } = $props();

  onMount(() => {
    const { data: { subscription } } = data.supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        setTimeout(() => {
          goto("/account");
        }, 1);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

{#if $page.url.searchParams.get("verified") == "true"}
  <div role="alert" class="alert alert-success mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>Email verified! Please sign in.</span>
  </div>
{/if}

<AuthWrapper view="sign_in" {data} />