import React from 'react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    company: 'Atlas Home Goods',
    summary: 'Scaled B2B pipeline and stabilized fulfillment across 3 regions.',
    metrics: [
      { label: 'Pipeline', value: '+230%' },
      { label: 'CAC', value: '-28%' },
      { label: 'OTIF', value: '97.8%' },
    ],
  },
  {
    company: 'Nimbus Electronics',
    summary: 'Designed EU go-to-market and onboarded two strategic distributors.',
    metrics: [
      { label: 'New Markets', value: '5' },
      { label: 'Avg Deal', value: '+42%' },
      { label: 'Partners', value: '2' },
    ],
  },
  {
    company: 'Terra Foods',
    summary: 'Optimized freight lanes and 3PL SLAs, reducing stockouts.',
    metrics: [
      { label: 'Freight Cost', value: '-19%' },
      { label: 'Stockouts', value: '-63%' },
      { label: 'Lead Time', value: '-22%' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Case Studies</h2>
          <p className="text-slate-600 mt-2 max-w-2xl">Outcome-focused work across consumer, retail, and hardware — blending revenue operations with supply chain execution.</p>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800">
          Discuss your goals <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c) => (
          <article key={c.company} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{c.company}</h3>
              <span className="inline-flex items-center rounded-full bg-emerald-600/10 text-emerald-700 px-2.5 py-1 text-xs font-medium">Confidential</span>
            </div>
            <p className="text-slate-600 mt-3">{c.summary}</p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {c.metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-slate-50 border border-slate-200 p-3 text-center">
                  <div className="text-base font-semibold">{m.value}</div>
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">{m.label}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
