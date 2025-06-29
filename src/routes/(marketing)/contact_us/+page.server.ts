import { fail } from "@sveltejs/kit"
import { sendAdminEmail } from "$lib/mailer.js"

// Industry-standard regex for basic email format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @type {import('./$types').Actions} */
export const actions = {
  submitContactUs: async ({ request, locals: { supabaseServiceRole } }) => {
    const formData = await request.formData()
    const errors: { [fieldName: string]: string } = {}

    const firstName = formData.get("first_name")?.toString() ?? ""
    if (firstName.length < 2) {
      errors["first_name"] = "First name is required"
    }
    if (firstName.length > 500) {
      errors["first_name"] = "First name too long"
    }

    const lastName = formData.get("last_name")?.toString() ?? ""
    if (lastName.length < 2) {
      errors["last_name"] = "Last name is required"
    }
    if (lastName.length > 500) {
      errors["last_name"] = "Last name too long"
    }

    const email = formData.get("email")?.toString() ?? ""
    if (email.length < 6) {
      errors["email"] = "Email is required"
    } else if (email.length > 500) {
      errors["email"] = "Email too long"
    } else if (!emailRegex.test(email)) { // --- HARDENING UPGRADE ---
      errors["email"] = "Invalid email format"
    }

    const company = formData.get("company")?.toString() ?? ""
    if (company.length > 500) {
      errors["company"] = "Company too long"
    }

    const phone = formData.get("phone")?.toString() ?? ""
    if (phone.length > 100) {
      errors["phone"] = "Phone number too long"
    }

    const message = formData.get("message")?.toString() ?? ""
    if (message.length > 2000) {
      errors["message"] = "Message too long (" + message.length + " of 2000)"
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors })
    }

    // Save to database
    const { error: insertError } = await supabaseServiceRole
      .from("contact_requests")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        company_name: company,
        phone,
        message_body: message,
        updated_at: new Date(),
      })

    if (insertError) {
      console.error("Error saving contact request", insertError)
      return fail(500, { errors: { _: "Error saving contact request." } })
    }

    // Send email to admin
    await sendAdminEmail({
      subject: "New contact request",
      body: `New contact request from ${firstName} ${lastName}.\n\nEmail: ${email}\n\nPhone: ${phone}\n\nCompany: ${company}\n\nMessage: ${message}`,
    })

    // Return a success state for the form
    return { success: true };
  },
}