'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { sendContactForm, ContactFormState } from '@/app/actions';
import { useActionState } from 'react';
import { useState } from 'react';

const CONTACT_INFO = {
  email: 'petertoss2004@gmail.com',
  linkedin: 'linkedin.com/in/petertoss',
  github: 'github.com/petertoss',
};

export default function Contact() {
  const initialState: ContactFormState = {
    error: {
      name: undefined,
      email: undefined,
      message: undefined,
    },
  };

  const [state, formAction] = useActionState(sendContactForm, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 to-gray-950/90 px-4 md:px-6 py-12 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(1.875rem, 6vw, 2.25rem)' }}
          >
            Get In Touch
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-linear-to-r from-emerald-500 to-cyan-500 mx-auto mt-4"></div>
          <p className="space-y-10 text-gray-400  mt-6 max-w-4xl mx-auto text-lg">
            Have a project in mind? Feel free to reach out — I’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Mail className="text-emerald-400" size={28} />
              Contact Info
            </h3>

            <div className="space-y-10">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: CONTACT_INFO.email,
                  color: 'text-emerald-400',
                  bg: 'bg-emerald-500/10',
                  href: `mailto:${CONTACT_INFO.email}`
                },
                {
                  icon: Linkedin,
                  title: 'LinkedIn',
                  value: CONTACT_INFO.linkedin,
                  color: 'text-cyan-400',
                  bg: 'bg-cyan-500/10',
                  href: `https://${CONTACT_INFO.linkedin}`
                },
                {
                  icon: Github,
                  title: 'GitHub',
                  value: CONTACT_INFO.github,
                  color: 'text-purple-400',
                  bg: 'bg-purple-500/10',
                  href: `https://${CONTACT_INFO.github}`
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.title === 'Email' ? '_self' : '_blank'}
                    rel={item.title === 'Email' ? undefined : 'noopener noreferrer'}
                    className="block group"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-5 p-4 rounded-2xl bg-gray-700/20 hover:bg-gray-700/30 transition-all duration-300 border border-transparent hover:border-emerald-500/30">
                      <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`${item.color}`} size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 group-hover:text-cyan-300 transition-colors text-lg break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Mail className="text-cyan-400" size={28} />
              Send a Message
            </h3>

            <form
              action={async (formData) => {
                setIsSubmitting(true);
                await formAction(formData);
                setIsSubmitting(false);
              }}
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className=" space-y-10 block text-base font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="w-full bg-gray-800 border-2 border-white rounded-xl px-5 py-4 text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                {state.error &&
                  typeof state.error !== 'string' &&
                  state.error.name?.[0] && (
                    <p className="mt-2 text-base text-red-400 flex items-center gap-1">
                      <span>⚠️</span> {state.error.name[0]}
                    </p>
                  )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full bg-gray-800 border-2 border-white rounded-xl px-5 py-4 text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                {state.error &&
                  typeof state.error !== 'string' &&
                  state.error.email?.[0] && (
                    <p className="mt-2 text-base text-red-400 flex items-center gap-1">
                      <span>⚠️</span> {state.error.email[0]}
                    </p>
                  )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full bg-gray-800 border-2 border-white rounded-xl px-5 py-4 text-white placeholder:text-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                {state.error &&
                  typeof state.error !== 'string' &&
                  state.error.message?.[0] && (
                    <p className="mt-2 text-base text-red-400 flex items-center gap-1">
                      <span>⚠️</span> {state.error.message[0]}
                    </p>
                  )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-white text-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success/Error Messages */}
              {state.success && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center font-bold text-base">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {typeof state.error === 'string' && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center font-bold text-base">
                  ❌ {state.error}
                </div>
              )}
            </form>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
