<svelte:head>
  <title>Authentication Failure - Signal Lynx</title>
</svelte:head>

<div class="text-center">
    <div class="text-6xl text-error mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
    </div>
    <h1 class="text-2xl font-bold text-primary mb-4">Authentication Failure</h1>
    <p class="text-base-content/80">
        For your security, an incorrect password was detected during an account modification attempt, and your session has been terminated.
    </p>
    <div class="mt-6 space-y-2">
        <p>If you remember your password, please <a href="/login/sign_in" class="link link-secondary">sign in</a> and try again.</p>
        <p>If you've forgotten your password, you can <a href="/login/forgot_password" class="link link-secondary">reset it here</a>.</p>
    </div>
</div>