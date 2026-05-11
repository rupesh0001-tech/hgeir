"use client";

import React from "react";
import { motion } from "framer-motion";

const tiers = [
  {
    id: 1,
    meta: "Tier III · Associate",
    name: "Hamsafar",
    slots: "12 slots — co-traveller status",
    features: [
      "Branded stall in all 10 cities",
      "Logo on collateral & banners",
      "Lead capture at every stop",
      "Closing summit invitation",
      "Institutional buyer introductions",
    ],
    cta: "Enquire →",
    color: "var(--color-ink-soft)",
  },
  {
    id: 2,
    meta: "Tier II · Co-Title",
    name: "Saarthi",
    slots: "7 slots — strategic partner",
    featured: true,
    features: [
      "Premium stall + product showcase zone",
      "Stage time at every city event",
      "Co-branded press releases",
      "Dedicated PR + media coverage",
      "Government MoU signing photo-ops",
      "Closing summit awards stage",
    ],
    cta: "Enquire →",
    color: "var(--color-green)",
  },
  {
    id: 3,
    meta: "Tier I · Title",
    name: "Pradhaan",
    slots: "1 slot — title sponsor",
    features: [
      "\"Presented by\" naming rights",
      "HGER becomes \"[Brand] HGER 2026\"",
      "Inaugural ribbon-cut at every city",
      "Headline closing summit speaker",
      "Year-long brand association",
      "First right of refusal for HGER 2027",
    ],
    cta: "Enquire →",
    color: "var(--color-blue)",
  },
];

const SponsorshipSection = () => {
  return (
    <section id="sponsors" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center rounded-full bg-paper px-4 py-1.5 text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line"
        >
          Sponsorship Tiers
        </motion.div>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-4xl leading-[1.2] mb-6">
          Three tiers. <span className="text-green italic">Twenty seats.</span> One unforgettable journey.
        </h2>
        <p className="text-sm font-medium text-ink-soft sm:text-lg">
          Every tier is built around one promise — your brand, in front of the right buyer, in every city we visit.
        </p>
      </div>

      {/* Premium Bento Stack */}
      <div className="relative overflow-hidden rounded-[3rem] bg-ink shadow-2xl">
        {/* Decorative background aura */}
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-green/10 blur-[120px]" />
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-blue/10 blur-[120px]" />

        <div className="grid grid-cols-1 divide-y divide-paper/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-10 lg:p-14 ${
                tier.featured ? "bg-green text-paper" : "text-paper"
              }`}
            >
              {/* Massive background number */}
              <div className={`absolute right-4 top-4 select-none font-black text-8xl lg:text-9xl opacity-10 ${
                tier.featured ? "text-paper" : "text-paper/20"
              }`}>
                0{tier.id}
              </div>

              <div className="relative z-10 flex flex-1 flex-col">
                <div className={`mb-2 text-[10px] font-black uppercase tracking-[0.3em] ${
                  tier.featured ? "text-paper/60" : "text-paper/40"
                }`}>
                  {tier.meta}
                </div>
                <h3 className="mb-2 text-4xl font-bold tracking-tighter sm:text-5xl">
                  {tier.name}
                </h3>
                <div className={`mb-12 text-xs font-bold ${
                  tier.featured ? "text-ink" : "text-green"
                }`}>
                  {tier.slots}
                </div>

                <ul className="mb-12 flex-1 space-y-5">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm font-medium leading-tight">
                      <svg 
                        width="18" height="18" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokeWidth="3" 
                        className={`mt-0.5 shrink-0 ${tier.featured ? "text-ink" : "text-green"}`}
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className={tier.featured ? "text-paper" : "text-paper/70"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center rounded-2xl px-8 py-5 text-sm font-black uppercase tracking-widest transition-all ${
                    tier.featured 
                    ? "bg-ink text-paper hover:bg-white hover:text-ink hover:shadow-2xl" 
                    : "bg-paper text-ink hover:bg-green hover:text-paper"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
