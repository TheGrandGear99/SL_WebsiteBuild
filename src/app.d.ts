import { Session, SupabaseClient, type AMREntry, type User } from "@supabase/supabase-js"
import { Database } from "./DatabaseDefinitions"

// --- HARDENING UPGRADE ---
// Define a concrete type for the return value of our custom session function.
// This provides full type safety and autocompletion throughout the app.
type SafeSession = {
  session: Session | null
  user: User | null
  amr: AMREntry[] | null
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>
      supabaseServiceRole: SupabaseClient<Database>
      safeGetSession: () => Promise<SafeSession> // Use our new, explicit type here
      session: Session | null
      user: User | null
    }
    interface PageData {
      session: Session | null
    }
    // interface Error {}
    // interface Platform {}
  }
}

export {}