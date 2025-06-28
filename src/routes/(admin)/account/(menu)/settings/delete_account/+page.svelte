<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()
  let { session } = data
</script>

<svelte:head>
  <title>Delete Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Danger Zone</h1>

<SettingsModule
  title="Delete Account"
  editable={true}
  dangerous={true}
  message="Warning: This action is irreversible. All your data, subscriptions, and access will be permanently destroyed. You are logged in as '{session
    ?.user?.email}'"
  saveButtonTitle="Delete This Account"
  successTitle="Account Deletion Initiated"
  successBody="Your account and all associated data are being permanently purged from our systems."
  formTarget="/account/api?/deleteAccount"
  fields={[
    {
      id: "currentPassword",
      label: "Confirm Current Password",
      initialValue: "",
      inputType: "password",
    },
  ]}
/>