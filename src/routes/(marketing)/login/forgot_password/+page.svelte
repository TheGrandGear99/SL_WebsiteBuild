<script lang="ts">
  import AuthWrapper from '$lib/components/login/AuthWrapper.svelte';

  let { data } = $props();
</script>

<AuthWrapper view="forgotten_password" {data} />