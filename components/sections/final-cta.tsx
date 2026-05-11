"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 text-center text-paper lg:py-48">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-green) 0%, transparent 60%)' }}></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, var(--color-ink) 25%, transparent 25%, transparent 50%, var(--color-ink) 50%, var(--color-ink) 75%, transparent 75%, transparent)', backgroundSize: '4px 4px' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-4xl px-6"
      >
        <h2 className="text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl leading-[0.95] mb-10">
          The future is <span className="text-green-bright italic font-light">cleaner.</span><br/>
          And it begins in Haryana.
        </h2>
        
        <p className="mx-auto mb-12 max-w-lg text-lg font-medium text-paper/60 sm:text-xl">
          HGER 2026 begins this March. With only 20 sponsor slots and a 3-month window, the conversation starts now.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:partnerships@hger.in"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-green-bright px-10 py-5 text-xl font-bold text-ink transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(44,201,133,0.3)] hover:-translate-y-1"
          >
            Enquire
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
          
          <div className="mt-4 font-mono text-sm font-bold uppercase tracking-widest text-paper/40">
            partnerships@hger.in &nbsp;·&nbsp; +91 XXX XXX XXXX
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
