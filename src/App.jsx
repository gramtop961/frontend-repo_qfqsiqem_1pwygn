import React from 'react';
import Header from './components/Header.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
            BD&Logistics
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
            <a href="#cases" className="hover:text-emerald-600 transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-700 transition-colors">Let's Talk</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <section id="home">
          <Header />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="cases">
          <CaseStudies />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BD & Logistics — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#cases" className="hover:text-slate-700">Case Studies</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
