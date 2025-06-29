import { PUBLIC_CREATE_PROFILE_STEP } from '$env/static/public';

export const WebsiteName: string = "Signal Lynx"
export const WebsiteBaseUrl: string = "https://www.signallynx.com" // Live production domain
export const WebsiteDescription: string =
  "Automation for the Night-Shift Nation. Webhook & licensing tools for traders and builders who value control and low cost."

// This feature flag is now controlled by your .env file.
export const CreateProfileStep: boolean = (PUBLIC_CREATE_PROFILE_STEP === 'true');