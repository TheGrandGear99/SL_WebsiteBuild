<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import type { FullAutoFill } from "svelte/elements"

  let errors: { [fieldName: string]: string } = $state({})
  let loading = $state(false)
  let showSuccess = $state(false)

  interface FormField {
    id: string
    label: string
    inputType: string
    autocomplete: FullAutoFill
  }

  const formFields: FormField[] = [
    {
      id: "first_name",
      label: "First Name *",
      inputType: "text",
      autocomplete: "given-name",
    },
    {
      id: "last_name",
      label: "Last Name *",
      inputType: "text",
      autocomplete: "family-name",
    },
    {
      id: "email",
      label: "Email *",
      inputType: "email",
      autocomplete: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      inputType: "tel",
      autocomplete: "tel",
    },
    {
      id: "company",
      label: "Company Name",
      inputType: "text",
      autocomplete: "organization",
    },
    {
      id: "message",
      label: "Message",
      inputType: "textarea",
      autocomplete: "off",
    },
  ]

  const handleSubmit: SubmitFunction = () => {
    loading = true
    errors = {}
    return async ({ result }) => {
      // The enhance function automatically handles form submission and result application.
      // We just need to manage our component's state based on the result.
      loading = false
      if (result.type === 'success' && result.status === 200) {
        showSuccess = true
      } else if (result.type === 'failure') {
        errors = result.data?.errors ?? {}
      } else if (result.type === 'error') {
        errors = { _: "An unexpected error occurred. Please try again." }
      }
    }
  }
</script>

<svelte:head>
  <title>Contact Us - Signal Lynx</title>
  <meta name="description" content="Open a channel to the Signal Lynx team. Get in touch on X, Telegram, or via our secure contact form." />
</svelte:head>

<div class="py-12 px-4 bg-base-100">
  <div class="max-w-3xl mx-auto text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-primary">Open a Channel</h1>
    <p class="mt-4 text-xl max-w-2xl mx-auto">
      Got a burning question? A genius feature idea? Or maybe you just want to tell us our synthwave theme is fire? We're all ears. The fastest way to get our attention is to slide into our DMs or join the community chatter.
    </p>

    <div class="my-12">
      <h2 class="text-3xl font-bold text-secondary mb-6">The Fast Lane: X & Telegram</h2>
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="https://t.me/SignalLynx" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg flex-1 btn-gradient-electric">
          <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-1.37.2-1.64l16.4-5.99c.75-.29 1.44.24 1.2 1.18l-2.82 13.24c-.21.99-1.01 1.23-1.81.73l-5.35-3.95l-2.55 2.45c-.28.28-.56.42-1.01.42z"/></svg>
          Join the Command Center
        </a>
        <a href="https://twitter.com/SignalLynx" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg flex-1 btn-gradient-electric">
           <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          Follow the Signal on X
        </a>
      </div>
    </div>

    <div class="divider text-xl font-bold my-12">OR</div>

    <div id="form-section">
      {#if showSuccess}
        <div class="card card-bordered shadow-lg bg-base-200 py-10 px-6 mx-auto max-w-lg">
          <h2 class="text-3xl font-bold text-success mb-4">Signal Received!</h2>
          <p class="text-lg">
            We've got your transmission. Our team of highly-trained cyber-lynx will decipher it and get back to you shortly. Keep an eye on your inbox.
          </p>
        </div>
      {:else}
        <div class="max-w-lg mx-auto">
          <h2 class="text-3xl font-bold text-secondary mb-2">The Formal Route</h2>
          <p class="mb-8">
            For partnership inquiries, custom quotes, or messages that require a bit more... gravitas. Fill this out, and a signal will be dispatched directly to our secure inbox.
          </p>
          <div class="card card-bordered shadow-lg bg-base-200 p-6">
            <form
              method="POST"
              action="?/submitContactUs"
              use:enhance={handleSubmit}
            >
              {#each formFields as field}
                <div class="form-control w-full">
                  <label for={field.id} class="label">
                    <span class="label-text font-bold">{field.label}</span>
                    {#if errors[field.id]}
                      <span class="label-text-alt text-error">{errors[field.id]}</span>
                    {/if}
                  </label>
                  {#if field.inputType === "textarea"}
                    <textarea
                      id={field.id}
                      name={field.id}
                      autocomplete={field.autocomplete}
                      rows={4}
                      class="textarea textarea-bordered h-24 {errors[field.id] ? 'textarea-error' : ''}"
                    ></textarea>
                  {:else}
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.inputType}
                      autocomplete={field.autocomplete}
                      class="input input-bordered w-full {errors[field.id] ? 'input-error' : ''}"
                    />
                  {/if}
                </div>
              {/each}

              {#if errors._}
                <div role="alert" class="alert alert-error text-sm mt-4">
                  <span>{errors._}</span>
                </div>
              {/if}

              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary btn-gradient-electric" disabled={loading}>
                  {#if loading}
                    <span class="loading loading-spinner"></span>
                    Transmitting...
                  {:else}
                    Send Secure Message
                  {/if}
                </button>
              </div>
            </form>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>