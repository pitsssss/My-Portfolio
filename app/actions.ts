'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// ✅ Get environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MY_EMAIL = process.env.MY_EMAIL;

// ✅ Validate environment variables at startup
if (!RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}
if (!MY_EMAIL) {
  throw new Error('Missing MY_EMAIL environment variable');
}

// ✅ Type assertion to tell TypeScript this is definitely a string
const MY_EMAIL_SAFE = MY_EMAIL as string;

const resend = new Resend(RESEND_API_KEY);

// ✅ HTML escaping helper
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormState =
  | {
      success: true;
      error?: never;
    }
  | {
      success?: never;
      error: {
        name?: string[];
        email?: string[];
        message?: string[];
      } | string;
    };

export async function sendContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const validated = ContactFormSchema.safeParse({ name, email, message });

  if (!validated.success) {
    const errors = validated.error.flatten().fieldErrors;
    return {
      error: {
        name: errors.name,
        email: errors.email,
        message: errors.message,
      },
    };
  }

  try {
    await resend.emails.send({
      from: 'Peter Toss <contact@petertoss.resend.dev>',
      to: MY_EMAIL_SAFE, // ✅ Now TypeScript knows it's a string
      subject: `New message from ${escapeHtml(name)}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0f172a; color: #f1f5f9; border-radius: 8px;">
          <h2 style="color: #00f8b0; margin-top: 0;">New Contact Form Submission</h2>
          <div style="background: #1e293b; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p><strong style="color: #cbd5e1;">Name:</strong> ${escapeHtml(name)}</p>
            <p><strong style="color: #cbd5e1;">Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #60a5fa;">${escapeHtml(email)}</a></p>
          </div>
          <div style="background: #1e293b; padding: 16px; border-radius: 8px;">
            <p><strong style="color: #cbd5e1;">Message:</strong></p>
            <p style="white-space: pre-line; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Resend error:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}