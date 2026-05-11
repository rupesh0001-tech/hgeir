"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-8 py-20 text-center text-paper shadow-2xl lg:px-16 lg:py-24"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, var(--color-green) 0%, transparent 70%)' }}></div>
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, var(--color-green) 0%, transparent 40%)' }}></div>
        
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-8 inline-flex items-center rounded-full border border-paper/10 bg-paper/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-bright">
            Limited Partnership Slots
          </div>
          
          <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            The future is <span className="text-green-bright italic">cleaner.</span><br/>
            And it begins in Haryana.
          </h2>
          
          <p className="mx-auto mb-10 max-w-xl text-base font-medium text-paper/60 sm:text-lg">
            HGER 2026 begins this March. With only 20 sponsor slots and a 3-month window, the conversation starts now.
          </p>
  
          <div className="flex flex-col items-center gap-8">
            <a
              href="mailto:partnerships@hger.in"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-green px-8 py-4 text-lg font-bold text-paper transition-all hover:bg-green-bright hover:text-ink hover:shadow-[0_0_40px_rgba(44,201,133,0.4)] hover:-translate-y-1 active:translate-y-0"
            >
              Enquire for Partnership
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper/40">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-green-bright"></span>
                partnerships@hger.in
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-green-bright"></span>
                +91 999 123 4567
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
