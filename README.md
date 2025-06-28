<p align="center">
  <img src="https://raw.githubusercontent.com/TheGrandGear99/Signal-Lynx/main/static/images/signal-lynx-logo-text-light.png" alt="Signal Lynx Logo" width="420">
</p>

<p align="center">
  <a href="https://github.com/TheGrandGear99/Signal-Lynx/actions/workflows/build.yml" target="_blank"><img src="https://github.com/TheGrandGear99/Signal-Lynx/actions/workflows/build.yml/badge.svg?branch=main" alt="Built Status"></a>
  <a href="https://github.com/TheGrandGear99/Signal-Lynx/actions/workflows/format.yml" target="_blank"><img src="https://github.com/TheGrandGear99/Signal-Lynx/actions/workflows/format.yml/badge.svg?branch=main" alt="Format Check"></a>
  <a href="https://github.com/TheGrandGear99/Signal-Lynx/actions/workflows/linting.yml" target="_blank"><img src="https://github.com/TheGrandGear99/Signal-Lynx/actions/workflows/linting.yml/badge.svg?branch=main" alt="Linting"></a>
  <a href="https://github.com/TheGrandGear99/Signal-Lynx/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-brightgreen?labelColor=32383f" alt="License"></a>
</p>

<p align="center">
  <a href="https://www.signallynx.com"><strong>Live Production Site</strong></a> •
  <a href="#developer-onboarding"><strong>Developer Onboarding</strong></a> • 
  <a href="https://github.com/TheGrandGear99/Signal-Lynx/issues"><strong>Report an Issue</strong></a>
</p>

<br/>

# Signal Lynx: Source Code & Mission Briefing

This repository contains the full source code for the **Signal Lynx** platform, a suite of local-first, security-focused automation tools for traders and software developers.

## Core Features

- **Robust User Authentication:** Secure sign-up, sign-in, password recovery, and email verification powered by Supabase Auth.
- **Branded Marketing Website:** A full suite of public-facing pages (Home, Product Pages, FAQ, Docs, Contact) with a cohesive, high-energy brand identity.
- **Dedicated Product Pages:** In-depth pages for the **Trading Automation** suite (Signal Shield & Lynx-Relay) and the **Key Commander** licensing hub.
- **User Command Center:** A private, authenticated area for users to manage their accounts.
    - **Personalized Dashboard:** A dynamic dashboard showing account status and guiding users to key actions.
    - **Subscription & Billing Management:** Full integration with Stripe Checkout and the Stripe Customer Portal for self-serve billing management.
    - **The Arsenal (Downloads):** A dedicated page for users to download their licensed software.
    - **Secure Settings Management:** Users can update their profile, change their email, and reset their password.
- **Transactional Emails:** On-brand, automated welcome emails and other communications.
- **Integrated Site Search:** A fast, client-side search engine that indexes all marketing content.

## Tech Stack

- **Web Framework:** SvelteKit 5
- **Styling:** TailwindCSS with the DaisyUI component library
- **Backend & Database:** Supabase (PostgreSQL, Auth)
- **Payments:** Stripe Checkout & Customer Portal
- **Deployment:** Cloudflare Pages

## Developer Onboarding

This guide is for new developers joining the Signal Lynx project to get their local environment running.

### 1. Local Environment Setup
```bash
# Clone the repository
git clone https://github.com/TheGrandGear99/Signal-Lynx.git

# Navigate into the project directory
cd Signal-Lynx

# Install dependencies
npm install

# Create the local environment file from the example
cp .env.example .env.local

# Run the local development server
npm run dev -- --open