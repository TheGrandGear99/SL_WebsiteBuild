import { fail } from '@sveltejs/kit';
import { PRIVATE_LICENSE_MANAGER_URL } from '$env/static/private';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request, locals: { safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (!session) {
      return fail(401, { error: 'Authentication required. Please log in.' });
    }

    const formData = await request.formData();
    const licenseKey = formData.get('licenseKey') as string;
    const email = formData.get('email') as string;

    if (!licenseKey || !email) {
      return fail(400, { error: 'Email and License Key are required.', licenseKey, email });
    }
    
    if (email.toLowerCase() !== session.user.email?.toLowerCase()) {
        return fail(403, { error: 'Forbidden: You can only reset licenses associated with your own account email.', licenseKey, email });
    }

    try {
      const response = await fetch(PRIVATE_LICENSE_MANAGER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          license_key: licenseKey,
          email: email,
        }),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        return fail(response.status, { error: responseBody.detail || 'An unknown error occurred.', licenseKey, email });
      }

      return { success: true, message: responseBody.message };

    } catch (error) {
      console.error('Machine ID Reset Server Error:', error);
      return fail(500, { error: 'Could not connect to the license server. Please try again later.', licenseKey, email });
    }
  },
};