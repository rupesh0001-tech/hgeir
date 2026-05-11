"use client";

import React from "react";
import { motion } from "framer-motion";

const schemes = [
  {
    id: 1,
    type: "Central · Active",
    title: "PM Surya Ghar Muft Bijli Yojana",
    tagline: "Free electricity up to 300 units/month for 1 crore households across India.",
    subsidy: "Up to ₹78,000",
    savings: "₹1,800–4,500",
    bestFor: "Homes, RWAs, schools",
    barWidth: "78%",
    barText: "Saves ~78% on annual electricity bill",
    color: "#2cc985", // Green
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V10l7-5 7 5v11" />
        <rect x="9" y="13" width="6" height="8" fill="currentColor" fillOpacity="0.1" />
        <circle cx="18" cy="6" r="2.5" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    id: 2,
    type: "Most Subsidised",
    title: "PM-KUSUM (Kisan Urja Suraksha)",
    tagline: "Solar agricultural pumps and grid-connected solar plants for farmers — central + state subsidy stacked.",
    subsidy: "Up to 90%",
    savings: "10% Farmer Share",
    bestFor: "Farmers, FPOs, agri-pumps",
    barWidth: "90%",
    barText: "90% government-funded for eligible farmers",
    color: "#1a8a5e", // Deep Green
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M5 5l3 3M2 12h4M5 19l3-3M19 5l-3 3M22 12h-4M19 19l-3-3" />
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
        <path d="M9 22h6M12 18v4" />
      </svg>
    ),
  },
  {
    id: 3,
    type: "State · Haryana",
    title: "Haryana Solar Policy 2024",
    tagline: "Additional state subsidy for rooftop solar, net metering benefits, and time-bound DISCOM approvals.",
    subsidy: "Extra ₹20,000+",
    savings: "Sell back to grid",
    bestFor: "All Haryana residents",
    barWidth: "65%",
    barText: "Payback period reduced to 4–5 years",
    color: "#4a9fdc", // Blue
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 14h2M11 14h6" />
        <circle cx="12" cy="3" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 4,
    type: "EV · Mobility",
    title: "FAME-II + Haryana EV Policy",
    tagline: "Subsidies on electric 2/3 wheelers + waiver on registration fees and road tax in Haryana.",
    subsidy: "₹15,000+ off",
    savings: "100% Tax Waiver",
    bestFor: "Fleet, individual, commercial",
    barWidth: "70%",
    barText: "Up to 70% cheaper running cost vs petrol",
    color: "#0fa3a3", // Teal
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8M3 16h18M5 16v2a1 1 0 001 1h2a1 1 0 001-1v-2M15 16v2a1 1 0 001 1h2a1 1 0 001-1v-2" />
        <path d="M7 10l2 2-2 2M11 14h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    type: "Industrial · 2030",
    title: "National Green Hydrogen Mission",
    tagline: "₹19,744 crore outlay for green hydrogen production, electrolyzers, and pilot projects.",
    subsidy: "₹19,744 Cr Outlay",
    savings: "5 MMT Target",
    bestFor: "SMEs, refineries, fertilizer cos",
    barWidth: "85%",
    barText: "Future of industrial decarbonisation",
    color: "#0a1f1c", // Dark
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 12c0 5 3.5 9 8 9s8-4 8-9L12 2z" fill="currentColor" fillOpacity="0.15" />
        <path d="M12 2L4 12c0 5 3.5 9 8 9s8-4 8-9L12 2z" />
        <text x="12" y="16" textAnchor="middle" fontSize="6" fontWeight="700" fill="currentColor">H₂</text>
      </svg>
    ),
  },
  {
    id: 6,
    type: "HAREDA · State Nodal",
    title: "HAREDA Outreach Programs",
    tagline: "Awareness drives, vendor empanelment, and direct citizen support for clean energy.",
    subsidy: "Direct to Bank",
    savings: "300+ Empanelled",
    bestFor: "All Haryana citizens",
    barWidth: "60%",
    barText: "Live enrolment desks at every HGER city stop",
    color: "#1e6fb8", // Blue
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" fillOpacity="0.15" />
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
];

const SchemesSection = () => {
  return (
    <section id="schemes" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center rounded-full bg-paper px-4 py-1.5 text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line"
        >
          Government Schemes · Live Subsidies
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-4xl leading-[1.2] mb-6"
        >
          Real money saved. <span className="text-green italic">Real schemes</span> we'll help visitors enrol in.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium text-ink-soft sm:text-lg"
        >
          HGER isn't just a brand event — we'll set up live government enrolment desks at every stop, helping visitors apply for subsidies on the spot. Your sponsor stall sits next to the people who'll actually buy.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {schemes.map((scheme, idx) => (
          <motion.div
            key={scheme.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className={`group relative flex flex-col overflow-hidden rounded-[2rem] border p-8 transition-all ${
              scheme.featured 
              ? "bg-ink text-paper border-ink shadow-2xl scale-105 z-10" 
              : "bg-paper text-ink border-line hover:border-green/30 hover:shadow-xl"
            }`}
          >
            {/* Background Glow */}
            <div 
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] opacity-20 transition-opacity group-hover:opacity-30"
              style={{ backgroundColor: scheme.color }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className={`mb-6 inline-block self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                scheme.featured ? "bg-green text-paper" : "bg-bg text-ink-soft border border-line"
              }`}>
                {scheme.type}
              </div>

              <div className={`mb-6 h-12 w-12 shrink-0 ${scheme.featured ? "text-green-bright" : "text-green"}`}>
                {scheme.icon}
              </div>

              <h3 className={`mb-3 text-2xl font-bold leading-tight tracking-tight ${scheme.featured ? "text-paper" : "text-ink"}`}>
                {scheme.title}
              </h3>
              
              <p className={`mb-8 text-sm font-medium leading-relaxed ${scheme.featured ? "text-paper/70" : "text-ink-soft"}`}>
                {scheme.tagline}
              </p>

              <div className="mt-auto space-y-4">
                <div className={`flex items-center justify-between border-b pb-3 ${scheme.featured ? "border-paper/10" : "border-line-soft"}`}>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${scheme.featured ? "text-paper/40" : "text-ink-soft/60"}`}>Subsidy</span>
                  <span className={`font-bold ${scheme.featured ? "text-green-bright" : "text-green"}`}>{scheme.subsidy}</span>
                </div>
                <div className={`flex items-center justify-between border-b pb-3 ${scheme.featured ? "border-paper/10" : "border-line-soft"}`}>
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${scheme.featured ? "text-paper/40" : "text-ink-soft/60"}`}>Savings</span>
                  <span className="font-bold">{scheme.savings}</span>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${scheme.featured ? "text-paper/40" : "text-ink-soft/60"}`}>Target</span>
                  <span className="text-xs font-semibold">{scheme.bestFor}</span>
                </div>

                {/* Progress Bar Visual */}
                <div className="pt-4">
                  <div className={`h-1.5 w-full overflow-hidden rounded-full ${scheme.featured ? "bg-paper/10" : "bg-bg"}`}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: scheme.barWidth }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: scheme.featured ? "var(--color-green-bright)" : scheme.color }}
                    />
                  </div>
                  <p className={`mt-3 text-[10px] font-semibold italic ${scheme.featured ? "text-paper/50" : "text-ink-soft/60"}`}>
                    {scheme.barText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern Glass Pill Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative mt-24 flex flex-col items-center justify-between gap-8 rounded-full bg-gradient-to-r from-green/5 to-paper p-4 pl-12 pr-12 ring-1 ring-green/20 lg:flex-row lg:py-6"
      >
        <div className="flex items-center gap-8">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green text-paper shadow-lg shadow-green/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-green/60">Estimated Yearly Savings</div>
            <div className="text-4xl font-black tracking-tight text-ink">₹52,000</div>
          </div>
        </div>

        <div className="hidden h-10 w-px bg-green/10 lg:block" />

        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm font-bold leading-relaxed text-ink-soft sm:text-base">
            <span className="text-ink">Average Haryana Household impact</span> by adopting <br className="hidden xl:block"/>
            the right mix of solar & EV subsidies available today.
          </p>
        </div>

        <div className="rounded-full bg-green/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-green">
          Live Enrolment Desks
        </div>
      </motion.div>
    </section>
  );
};

export default SchemesSection;
