<script lang="ts">
  import { Auth } from '@supabase/auth-ui-svelte';
  import { sharedAppearance, oauthProviders } from './login_config';

  type AuthView = 'sign_in' | 'sign_up' | 'forgotten_password';

  interface Props {
    view: AuthView;
    data: any; // The page data containing supabase and url
  }

  let { view, data }: Props = $props();

  const titles = {
    sign_in: 'Sign In',
    sign_up: 'Sign Up',
    forgotten_password: 'Forgot Password'
  };

  const title = titles[view];

  const redirectTo = view === 'forgotten_password'
    ? `${data.url}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`
    : `${data.url}/auth/callback`;
</script>

<svelte:head>
  <title>{title} - Signal Lynx</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">{title}</h1>
<Auth
  supabaseClient={data.supabase}
  {view}
  {redirectTo}
  providers={oauthProviders}
  socialLayout="horizontal"
  showLinks={false}
  appearance={sharedAppearance}
  additionalData={undefined}
/>

{#if view === 'sign_in'}
  <div class="text-l mt-4">
    <a class="link" href="/login/forgot_password">Forgot password?</a>
  </div>
  <div class="text-l mt-3">
    Don't have an account? <a class="link" href="/login/sign_up">Sign up</a>.
  </div>
{:else if view === 'sign_up'}
  <div class="text-l mt-4 mb-2">
    Have an account? <a class="link" href="/login/sign_in">Sign in</a>.
  </div>
{:else if view === 'forgotten_password'}
  <div class="text-l text-slate-800 mt-4">
    Remember your password? <a class="underline" href="/login/sign_in">Sign in</a>.
  </div>
{/if}