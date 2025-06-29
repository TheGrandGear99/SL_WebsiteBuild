<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import type { SubmitFunction } from '@sveltejs/kit';

  const fieldError = (liveForm: FormAccountUpdateResult, name: string) => {
    let errors = liveForm?.errorFields ?? [];
    return errors.includes(name);
  };

  // --- UX UPGRADE: DYNAMIC BUTTON STATE ---
  type ButtonState = 'idle' | 'loading' | 'success';
  let buttonState = $state<ButtonState>('idle');

  type Field = {
    inputType?: string;
    id: string;
    label?: string;
    initialValue: string | boolean;
    placeholder?: string;
    maxlength?: number;
  };

  interface Props {
    editable?: boolean;
    dangerous?: boolean;
    title?: string;
    message?: string;
    fields: Field[];
    formTarget?: string;
    editButtonTitle?: string | null;
    editLink?: string | null;
    saveButtonTitle?: string;
    saveButtonClass?: string;
    editButtonClass?: string;
  }

  let {
    editable = false,
    dangerous = false,
    title = '',
    message = '',
    fields,
    formTarget = '',
    editButtonTitle = null,
    editLink = null,
    saveButtonTitle = 'Save',
    saveButtonClass = '',
    editButtonClass = ''
  }: Props = $props();

  const handleSubmit: SubmitFunction = () => {
    buttonState = 'loading';
    return async ({ result, update }) => {
      await update(); // This applies form actions and updates data
      if (result.type === 'success') {
        buttonState = 'success';
        // Revert button to idle state after 2 seconds
        setTimeout(() => {
          buttonState = 'idle';
        }, 2000);
      } else {
        // If there's a failure or error, revert immediately
        buttonState = 'idle';
      }
    };
  };
</script>

<div class="card p-6 pb-7 mt-8 max-w-xl flex flex-col md:flex-row shadow-sm">
  {#if title}
    <div class="text-xl font-bold mb-3 w-48 md:pr-8 flex-none">{title}</div>
  {/if}

  <div class="w-full min-w-48">
    {#if message}
      <div class="mb-6 {dangerous ? 'alert alert-warning' : ''}">
        {#if dangerous}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            /></svg
          >
        {/if}
        <span>{message}</span>
      </div>
    {/if}
    <form
      class="form-widget flex flex-col"
      method="POST"
      action={formTarget}
      use:enhance={handleSubmit}
    >
      {#each fields as field}
        {#if field.label}
          <label for={field.id} class="label">
            <span class="label-text">{field.label}</span>
          </label>
        {/if}
        {#if editable}
          <input
            id={field.id}
            name={field.id}
            type={field.inputType ?? 'text'}
            disabled={!editable || buttonState === 'loading'}
            placeholder={field.placeholder ?? field.label ?? ''}
            class="input input-bordered w-full max-w-xs {fieldError($page?.form, field.id) ? 'input-error' : ''}"
            value={$page.form ? $page.form[field.id] : field.initialValue}
            maxlength={field.maxlength ?? undefined}
          />
        {:else}
          <div class="text-lg mb-3">{field.initialValue}</div>
        {/if}
      {/each}

      {#if $page?.form?.errorMessage}
        <p class="text-error text-sm font-bold mt-1">
          {$page?.form?.errorMessage}
        </p>
      {/if}

      {#if editable}
        <div class="self-end mt-4">
          <button
            type="submit"
            class="btn min-w-[145px] {dangerous ? 'btn-error' : 'btn-primary'} {saveButtonClass} {buttonState === 'success' ? 'btn-success' : ''}"
            disabled={buttonState === 'loading'}
          >
            {#if buttonState === 'loading'}
              <span class="loading loading-spinner"></span>
              Saving...
            {:else if buttonState === 'success'}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              Saved!
            {:else}
              {saveButtonTitle}
            {/if}
          </button>
        </div>
      {:else if editButtonTitle && editLink}
        <!-- !editable -->
        <a href={editLink} class="self-end mt-1">
          <button
            class="btn btn-sm {dangerous ? 'btn-error' : 'btn-primary'} {editButtonClass} min-w-[145px]"
          >
            {editButtonTitle}
          </button>
        </a>
      {/if}
    </form>
  </div>
</div>