<script lang="ts">
  import { applyAction, enhance } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import { WebsiteName } from "../../../../config"

  interface User {
    email: string
  }

  interface Profile {
    full_name?: string
    company_name?: string
    website?: string
  }

  interface Props {
    data: { user: User; profile: Profile }
    form: FormAccountUpdateResult
  }

  let { data, form }: Props = $props()

  let { user, profile } = data

  let loading = $state(false)
  let fullName: string = profile?.full_name ?? ""
  let companyName: string = profile?.company_name ?? ""
  let website: string = profile?.website ?? ""

  const fieldError = (liveForm: FormAccountUpdateResult, name: string) => {
    let errors = liveForm?.errorFields ?? []
    return errors.includes(name)
  }

  const handleSubmit: SubmitFunction = () => {
    loading = true
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
    }
  }
</script>

<svelte:head>
  <title>Create Your Profile - {WebsiteName}</title>
</svelte:head>

<div
  class="min-h-screen flex items-center justify-center bg-base-100 p-4"
>
  <div class="card w-full max-w-md bg-base-200 shadow-xl">
    <div class="card-body">
      <h1 class="card-title text-3xl text-primary mb-2">Complete Your Operator Profile</h1>
      <p class="text-base-content/80 mb-6">
        Welcome to the command center. We just need a few more details to get your account fully operational.
      </p>

      <form
        class="form-widget space-y-4"
        method="POST"
        action="/account/api?/updateProfile"
        use:enhance={handleSubmit}
      >
        <div>
          <label for="fullName" class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Jane 'Glitch' Doe"
            class="input input-bordered w-full {fieldError(form, 'fullName') ? 'input-error' : ''}"
            value={form?.fullName ?? fullName}
            maxlength="50"
          />
        </div>

        <div>
          <label for="companyName" class="label">
            <span class="label-text">Company / Organization</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="e.g. Cyberdyne Systems"
            class="input input-bordered w-full {fieldError(form, 'companyName') ? 'input-error' : ''}"
            value={form?.companyName ?? companyName}
            maxlength="50"
          />
        </div>

        <div>
          <label for="website" class="label">
            <span class="label-text">Company Website</span>
          </label>
          <input
            id="website"
            name="website"
            type="text"
            placeholder="e.g. https://example.com"
            class="input input-bordered w-full {fieldError(form, 'website') ? 'input-error' : ''}"
            value={form?.website ?? website}
            maxlength="50"
          />
        </div>

        {#if form?.errorMessage}
          <div role="alert" class="alert alert-error text-sm">
            <span>{form?.errorMessage}</span>
          </div>
        {/if}
        
        <div class="card-actions justify-end pt-4">
          <button
            type="submit"
            class="btn btn-primary w-full btn-gradient-electric"
            disabled={loading}
          >
            {#if loading}
              <span class="loading loading-spinner"></span>
              <span>Saving...</span>
            {:else}
              Create Profile & Proceed
            {/if}
          </button>
        </div>
      </form>

      <div class="text-xs text-base-content/60 mt-6 text-center">
        <p>Logged in as: {user?.email}</p>
        <a class="link link-hover" href="/account/sign_out">Not you? Sign out.</a>
      </div>
    </div>
  </div>
</div>