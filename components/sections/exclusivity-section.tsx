"use client";

import React from "react";
import { motion } from "framer-motion";

const ExclusivitySection = () => {
  const slots = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    taken: i < 6, // Example: first 6 taken
  }));

  return (
    <section id="exclusive" className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center rounded-full bg-paper px-4 py-1.5 font-mono text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line"
          >
            Exclusivity Guaranteed
          </motion.div>
          <h2 className="font-fraunces text-4xl font-normal text-ink sm:text-6xl lg:text-6xl leading-[1.0] mb-8" style={{ letterSpacing: '-0.04em' }}>
            A <span className="text-green italic">limited</span> circle of partners.
          </h2>
          <p className="font-manrope text-sm font-medium text-ink-soft sm:text-lg max-w-xl">
            We are capping each sponsor category to ensure that every partner gets maximum visibility and zero competition within their niche. This isn't a crowded expo — it's an exclusive roadshow.
          </p>
          <div className="space-y-6 font-manrope text-sm font-medium leading-relaxed text-ink-soft sm:text-lg">
            <p>
              HGER is not a crowded expo with hundreds of competing booths. We intentionally cap participation at <span className="text-green font-bold">twenty companies</span> across all 10 cities.
            </p>
            <p>
              This guarantees every sponsor real visibility, real leads, and real ROI in front of every visitor that walks in. Once the 20 slots are filled, applications close. Period.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-green px-8 py-4 font-manrope text-lg font-bold text-paper transition-all hover:bg-green-deep hover:shadow-xl hover:-translate-y-0.5"
            >
              Claim a Slot
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 shadow-2xl lg:p-12"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-green) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10">
            <div className="mb-8 flex items-center justify-between border-b border-paper/10 pb-6">
              <div>
                <div className="font-mono text-[10px] font-black uppercase tracking-widest text-paper/40">Sponsor Slots · Live</div>
                <div className="mt-1 font-fraunces text-2xl font-bold text-paper">14 of 20 open</div>
              </div>
              <div className="rounded-full bg-green/20 px-4 py-1 font-mono text-xs font-bold text-green-bright animate-pulse">
                Live Status
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              {slots.map((slot) => (
                <div
                  key={slot.id}
                  className={`flex aspect-square items-center justify-center rounded-xl font-fraunces text-sm font-black transition-all ${
                    slot.taken 
                    ? "bg-green/10 text-green-bright ring-1 ring-green/20" 
                    : "bg-paper/5 text-paper/30 ring-1 ring-paper/10 hover:bg-paper/10 hover:text-paper"
                  }`}
                >
                  {slot.id.toString().padStart(2, '0')}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6 font-mono text-[10px] font-bold uppercase tracking-widest text-paper/40">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-bright"></div>
                In Conversation
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-paper/20"></div>
                Open Slot
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
