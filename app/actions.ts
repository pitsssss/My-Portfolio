// src/app/actions.ts
'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

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
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.MY_EMAIL!,
      subject: `New message from ${name}`,
      replyTo: email, // ✅ CORRECT: camelCase 'replyTo'
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Resend error:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}