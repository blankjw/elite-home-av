'use client';

import { useState, FormEvent } from 'react';
import { Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const PHONE_HREF = 'tel:4097907889';
const PHONE = '(409) 790-7889';

const services = [
  'Home Audio',
  'Home Video / Theater',
  'Home Automation',
  'Networking',
  'Surveillance Cameras',
  'Security System',
  'Electrical',
  'Plumbing',
  'Construction & Remodel',
  'Design Consultation',
  'Multiple Services',
  'Not Sure Yet',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    // Form submission — hook up to Formspree, Netlify Forms, or your own API
    // For Vercel: use a /api/contact route or Formspree (free tier)
    // Example with Formspree: change action to your Formspree endpoint
    try {
      const res = await fetch('https://formspree.io/f/myknwglq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card-dark p-8 text-center flex flex-col items-center gap-6">
        <div className="w-16 h-16 bg-[#E8521A]/10 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-[#E8521A]" />
        </div>
        <div>
          <h3 className="text-white font-black text-2xl mb-2">Message Sent!</h3>
          <p className="text-gray-400 mb-6">
            We&rsquo;ll be in touch shortly. For the fastest response, call us directly.
          </p>
        </div>
        <a href={PHONE_HREF} className="btn-primary text-lg px-8 py-4">
          <Phone className="w-5 h-5" />
          Call {PHONE}
        </a>
        <button
          onClick={() => setStatus('idle')}
          className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="card-dark p-6 md:p-8">
      <h2 className="text-white font-black text-2xl mb-2">Send Us a Message</h2>
      <p className="text-gray-400 text-sm mb-8">
        Fill out the form below and we&rsquo;ll get back to you. Or just call:{' '}
        <a href={PHONE_HREF} className="text-[#E8521A] font-bold hover:underline">
          {PHONE}
        </a>
      </p>

      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-900/20 border border-red-800/40 rounded-sm p-4 mb-6">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-300 font-bold text-sm">Something went wrong.</p>
            <p className="text-red-400 text-xs mt-1">
              Please try again or call us at{' '}
              <a href={PHONE_HREF} className="underline">
                {PHONE}
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
              Your Name <span className="text-[#E8521A]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full bg-[#0A0A0A] border border-[#333333] text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#E8521A] transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
              Phone Number <span className="text-[#E8521A]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(409) 555-1234"
              className="w-full bg-[#0A0A0A] border border-[#333333] text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#E8521A] transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-[#0A0A0A] border border-[#333333] text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#E8521A] transition-colors"
          />
        </div>

        {/* Service Needed */}
        <div>
          <label htmlFor="service" className="block text-white text-sm font-bold mb-2">
            Service Needed <span className="text-[#E8521A]">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#333333] text-white rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#E8521A] transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-gray-600">
              Select a service...
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Tell Us About Your Project <span className="text-[#E8521A]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="What are you trying to build or accomplish? The more detail, the better."
            className="w-full bg-[#0A0A0A] border border-[#333333] text-white placeholder-gray-600 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#E8521A] transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-primary text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        <p className="text-gray-500 text-xs text-center">
          Or call us directly at{' '}
          <a href={PHONE_HREF} className="text-[#E8521A] font-bold hover:underline">
            {PHONE}
          </a>{' '}
          for an immediate response.
        </p>
      </form>
    </div>
  );
}
