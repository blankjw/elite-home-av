'use client';

import { useState, FormEvent } from 'react';
import { Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const PHONE_HREF = 'tel:4097907889';
const PHONE = '(409) 790-7889';
const FORMSPREE = 'https://formspree.io/f/myknwglq';

const services = [
  'Home Audio',
  'Home Theater',
  'Lighting',
  'Surveillance & Access Control',
  'Automation',
  'Networking & Integration',
  'Commercial Technology',
  'Design Consultation',
  'Multiple Services',
  'Not Sure Yet',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Field = 'name' | 'phone' | 'email' | 'service' | 'message';
type Errors = Partial<Record<Field, string>>;

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

function validate(data: typeof emptyForm): Errors {
  const errors: Errors = {};
  if (data.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }
  const digits = data.phone.replace(/\D/g, '');
  if (digits.length < 10) {
    errors.phone = 'Enter a 10-digit phone number.';
  }
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Enter a valid email, or leave this blank.';
  }
  if (!data.service) {
    errors.service = 'Select a service.';
  }
  if (data.message.trim().length < 10) {
    errors.message = 'Tell us a bit more about the project (at least a sentence).';
  }
  return errors;
}

const fieldClass =
  'w-full bg-[#0A0A0A] border text-white placeholder-[#6B7280] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#E8521A] transition-colors';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [errorDetail, setErrorDetail] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      const first = Object.keys(nextErrors)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setStatus('submitting');
    setErrorDetail('');

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData(emptyForm);
        setErrors({});
        return;
      }
      let detail = 'Please try again or call us directly.';
      try {
        const data = (await res.json()) as { errors?: { message?: string }[]; error?: string };
        detail = data.errors?.[0]?.message || data.error || detail;
      } catch {
        /* keep default */
      }
      setErrorDetail(detail);
      setStatus('error');
    } catch {
      setErrorDetail('Network error. Check your connection or call us directly.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card-dark p-8 text-center flex flex-col items-center gap-6" role="status" aria-live="polite">
        <div className="w-16 h-16 bg-[#E8521A]/10 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-[#E8521A]" />
        </div>
        <div>
          <h3 className="font-bebas text-3xl tracking-wide text-white mb-2">Message Sent</h3>
          <p className="text-[#D1D5DB] mb-2">
            Thanks — we received your note and will follow up.
          </p>
          <p className="text-[#A3A3A3] text-sm">
            For the fastest response, call or text {PHONE}.
          </p>
        </div>
        <a href={PHONE_HREF} className="btn-primary text-lg px-8 py-4">
          <Phone className="w-5 h-5" />
          Call {PHONE}
        </a>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-[#A3A3A3] text-sm hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="card-dark p-6 md:p-8">
      <h2 className="font-bebas text-3xl tracking-wide text-white mb-2">Send Us a Message</h2>
      <p className="text-[#D1D5DB] text-sm mb-8">
        Fill out the form below and we&rsquo;ll get back to you. Or just call:{' '}
        <a href={PHONE_HREF} className="text-[#E8521A] font-bold hover:underline">
          {PHONE}
        </a>
      </p>

      {status === 'error' && (
        <div
          className="flex items-start gap-3 bg-red-900/20 border border-red-800/40 rounded-sm p-4 mb-6"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-300 font-bold text-sm">Something went wrong.</p>
            <p className="text-red-200 text-xs mt-1">
              {errorDetail} You can also call{' '}
              <a href={PHONE_HREF} className="underline">
                {PHONE}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
              Your Name <span className="text-[#E8521A]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'name-error' : undefined}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`${fieldClass} ${errors.name ? 'border-red-500' : 'border-[#333333]'}`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
              Phone Number <span className="text-[#E8521A]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              required
              inputMode="tel"
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              value={formData.phone}
              onChange={handleChange}
              placeholder="(409) 790-7889"
              className={`${fieldClass} ${errors.phone ? 'border-red-500' : 'border-[#333333]'}`}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-400">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Email Address <span className="text-[#A3A3A3] font-normal">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`${fieldClass} ${errors.email ? 'border-red-500' : 'border-[#333333]'}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-white text-sm font-bold mb-2">
            Service Needed <span className="text-[#E8521A]">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? 'service-error' : undefined}
            value={formData.service}
            onChange={handleChange}
            className={`${fieldClass} appearance-none cursor-pointer ${errors.service ? 'border-red-500' : 'border-[#333333]'}`}
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
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-xs text-red-400">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Tell Us About Your Project <span className="text-[#E8521A]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? 'message-error' : undefined}
            value={formData.message}
            onChange={handleChange}
            placeholder="What are you trying to build or accomplish? The more detail, the better."
            className={`${fieldClass} resize-none ${errors.message ? 'border-red-500' : 'border-[#333333]'}`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full btn-primary text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        <p className="text-[#A3A3A3] text-xs text-center">
          Required fields are marked with an orange asterisk. Or call{' '}
          <a href={PHONE_HREF} className="text-[#E8521A] font-bold hover:underline">
            {PHONE}
          </a>{' '}
          for an immediate response.
        </p>
      </form>
    </div>
  );
}
