import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@alexcarter.co?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's work together</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">Tell me about your goals — growth targets, partner strategy, or logistics challenges. I'll respond within one business day.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Jane Doe" className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@company.com" className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">How can I help?</label>
              <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Share context, timelines, and success criteria." className="w-full rounded-lg border-slate-200 focus:border-emerald-500 focus:ring-emerald-500" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-700">
              Send message
            </button>
          </div>
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-slate-600">Prefer a quick intro? Reach out directly.</p>
            </div>
            <div className="flex flex-col gap-3 text-slate-700">
              <a href="mailto:hello@alexcarter.co" className="inline-flex items-center gap-2 hover:text-emerald-700"><Mail className="h-4 w-4" /> hello@alexcarter.co</a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 hover:text-emerald-700"><Phone className="h-4 w-4" /> +1 (234) 567-890</a>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-medium uppercase tracking-wider text-slate-500">Typical engagements</h4>
              <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
                <li>Fractional Head of Business Development</li>
                <li>Market entry and channel partner strategy</li>
                <li>3PL selection and logistics optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
