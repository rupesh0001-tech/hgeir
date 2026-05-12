"use client";

import React from "react";
import { motion } from "framer-motion";

const segments = [
  {
    id: 1,
    title: "Schools & Colleges",
    pct: "28% of footfall",
    description: "1,200+ schools and 80+ colleges across Haryana looking for rooftop solar, energy education programs, and clean-tech partnerships under the PM Surya Ghar scheme.",
    color: "var(--color-green)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Hospitals & Healthcare",
    pct: "22% of footfall",
    description: "Government hospitals, private clinics, and PHCs seeking 24×7 solar backup, oxygen plant power, and reliable clean-energy systems for critical care infrastructure.",
    color: "var(--color-blue)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Govt. Bodies & Panchayats",
    pct: "26% of footfall",
    description: "Block offices, municipal bodies, and 6,000+ Gram Panchayats with mandated procurement for solar streetlights, EV fleets, water pumps, and public-building retrofits.",
    color: "var(--color-teal)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Hotels & Commercial",
    pct: "24% of footfall",
    description: "Hotels, resorts, malls, and large commercial buildings under ESG compliance pressure — high-ticket buyers for solar, energy storage, EV charging, and efficiency retrofits.",
    color: "var(--color-green-bright)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21V8l9-5 9 5v13M3 21h18"/>
        <rect x="7" y="11" width="3" height="3"/>
        <rect x="14" y="11" width="3" height="3"/>
        <rect x="7" y="16" width="3" height="3"/>
        <rect x="14" y="16" width="3" height="3"/>
      </svg>
    )
  }
];

const AudienceSection = () => {
  return (
    <section id="audience" className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center rounded-full bg-paper px-4 py-1.5 font-mono text-sm font-semibold tracking-wide text-blue shadow-sm ring-1 ring-inset ring-line"
        >
          Who Walks In
        </motion.div>
        <h2 className="font-fraunces text-4xl font-normal text-ink sm:text-6xl lg:text-6xl leading-[1.0] mb-8" style={{ letterSpacing: '-0.04em' }}>
          Institutional buyers <span className="text-blue italic">with budgets,</span> not browsers.
        </h2>
        <p className="font-manrope text-sm font-medium text-ink-soft sm:text-lg max-w-3xl">
          We've designed HGER to attract decision-makers from four high-impact institutional segments — every one of them sitting on procurement budgets and ESG mandates this fiscal year.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2.5rem] border border-line bg-line shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
        {segments.map((segment, idx) => (
          <motion.div
            key={segment.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-paper p-8 transition-all hover:bg-bg lg:p-10"
          >
            {/* Top accent line */}
            <div 
              className="absolute top-0 left-0 h-1 w-full opacity-0 transition-opacity group-hover:opacity-100"
              style={{ backgroundColor: segment.color }}
            />
            
            <div className="mb-8 h-12 w-12" style={{ color: segment.color }}>
              {segment.icon}
            </div>
            
            <div 
              className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: segment.color }}
            >
              {segment.pct}
            </div>
            
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-ink">
              {segment.title}
            </h3>
            
            <p className="font-manrope text-sm font-medium leading-relaxed text-ink-soft">
              {segment.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AudienceSection;
