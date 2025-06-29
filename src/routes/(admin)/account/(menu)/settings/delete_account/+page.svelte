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

<h1 class="text-2xl font-bold mb-6">Danger Zone: Self-Destruct</h1>

<SettingsModule
  title="Delete Account"
  editable={true}
  dangerous={true}
  message="Warning: This is the big red button. This action is irreversible. All your data, subscriptions, and access will be permanently purged from our systems. There is no undo."
  saveButtonTitle="Initiate Self-Destruct"
  successTitle="Account Deletion In Progress"
  successBody="Signal received. Your account and all associated data are being permanently wiped."
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