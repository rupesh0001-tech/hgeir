"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ink py-20 text-paper border-t border-paper/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 pb-16 border-b border-paper/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-fraunces text-2xl font-black tracking-tighter mb-6">
              <div className="h-4 w-4 bg-green rounded-sm" />
              HGER<sup className="text-[10px] text-green-bright ml-0.5">2026</sup>
            </div>
            <p className="max-w-md font-manrope text-sm font-medium leading-relaxed text-paper/50">
              Haryana Green Energy Roadshow — a 10-city, 3-month journey to bring renewable energy solutions across solar, wind, EV, biofuels, and clean-tech to institutions and businesses across Haryana. In partnership with the Government of Haryana.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper/30">The Tour</h4>
            <ul className="space-y-4 font-manrope text-sm font-bold text-paper/70">
              <li><a href="#cities" className="hover:text-green-bright transition-colors">Route & Cities</a></li>
              <li><a href="#schemes" className="hover:text-green-bright transition-colors">Govt. Schemes</a></li>
              <li><a href="#audience" className="hover:text-green-bright transition-colors">Audience</a></li>
              <li><a href="#sponsors" className="hover:text-green-bright transition-colors">Sponsorship</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper/30">Get in Touch</h4>
            <ul className="space-y-4 font-manrope text-sm font-bold text-paper/70">
              <li><a href="mailto:partnerships@hger.in" className="hover:text-green-bright transition-colors">partnerships@hger.in</a></li>
              <li><a href="mailto:media@hger.in" className="hover:text-green-bright transition-colors">media@hger.in</a></li>
              <li className="text-paper/40">Chandigarh, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row font-mono text-[10px] font-bold uppercase tracking-widest text-paper/30">
          <div>© HGER 2026 · ALL RIGHTS RESERVED</div>
          <div>EDITION I · MARCH–MAY 2026</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
