import React from 'react';
import { BarChart3, Users, Truck, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Go-to-Market & Revenue Ops',
    points: [
      'ICP definition, segmentation, and targeting',
      'Outbound playbooks and enablement assets',
      'Pipeline design, KPIs, and forecasting',
    ],
  },
  {
    icon: Users,
    title: 'Partnerships & Business Development',
    points: [
      'Channel partner identification and onboarding',
      'Co-selling and co-marketing motions',
      'Deal desk and negotiation support',
    ],
  },
  {
    icon: Truck,
    title: 'Logistics Strategy & Execution',
    points: [
      'Global sourcing and freight optimization',
      '3PL selection, SLAs, and SOPs',
      'Inventory, S&OP, and last‑mile performance',
    ],
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">Engagements tailored to your growth stage — from early traction to scale-up. Available on fractional or project basis.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, points }) => (
          <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow mb-4">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <ul className="space-y-2 text-slate-600">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
