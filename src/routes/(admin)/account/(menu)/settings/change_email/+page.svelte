<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()

  let { user } = data
</script>

<svelte:head>
  <title>Change Email</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Update Email Address</h1>

<SettingsModule
  title="Change Login Email"
  editable={true}
  saveButtonTitle="Update Email"
  successTitle="Email Update Initiated"
  successBody="Check both your old and new inboxes. You must click the confirmation link in both emails to finalize the change."
  formTarget="/account/api?/updateEmail"
  saveButtonClass="btn-gradient-electric"
  fields={[
    {
      id: "email",
      label: "New Email",
      initialValue: user?.email ?? "",
      placeholder: "Email address",
    },
  ]}
/>