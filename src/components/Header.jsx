import React from 'react';
import { ArrowRight, Briefcase, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium">
            <Briefcase className="h-4 w-4" /> Business Development • Logistics Strategy
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Building predictable growth and resilient supply chains for modern brands.
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            I help B2B and D2C companies unlock revenue through structured go‑to‑market motions
            and optimize end‑to‑end logistics — from sourcing to last‑mile delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-emerald-700 transition-colors"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium border border-slate-200 text-slate-800 hover:bg-slate-50"
            >
              Explore services
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-emerald-600" /> Global freight & 3PL network</div>
            <div className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-emerald-600" /> Sales playbooks that convert</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 via-white to-emerald-50 border border-emerald-200/60 p-1">
            <div className="h-full w-full rounded-[1rem] bg-white/60 backdrop-blur flex items-center justify-center">
              <div className="text-center px-6">
                <div className="mx-auto h-28 w-28 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg mb-6">
                  <span className="text-3xl font-bold">BD</span>
                </div>
                <h2 className="text-2xl font-semibold">Alex Carter</h2>
                <p className="text-slate-600">Business Development & Logistics Specialist</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600/10 text-emerald-700 px-3 py-1 text-xs font-medium">
                  Available for fractional and project-based engagements
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
