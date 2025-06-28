<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  let { data } = $props()
  let { profile } = data
  let unsubscribed = profile?.unsubscribed
</script>

<svelte:head>
  <title>Change Email Subscription</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Email Subscription</h1>

<SettingsModule
  editable={true}
  title="Communications"
  message={unsubscribed
    ? "You are currently UNSUBSCRIBED from marketing and product update emails."
    : "You are currently SUBSCRIBED to marketing and product update emails."}
  saveButtonTitle={unsubscribed ? "Re-subscribe" : "Unsubscribe"}
  successTitle={unsubscribed ? "Subscription Reactivated" : "Unsubscribed"}
  successBody={unsubscribed
    ? "You will now receive our communications."
    : "You have been successfully unsubscribed from future emails."}
  formTarget="/account/api?/toggleEmailSubscription"
  saveButtonClass="btn-gradient-electric"
  fields={[]}
/>