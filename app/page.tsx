"use client";

import React from "react";
import Hero from "@/components/sections/hero";
import RouteSection from "@/components/sections/route-section";
import SchemesSection from "@/components/sections/schemes-section";
import AudienceSection from "@/components/sections/audience-section";
import ExclusivitySection from "@/components/sections/exclusivity-section";
import SummitSection from "@/components/sections/summit-section";
import SponsorshipSection from "@/components/sections/sponsorship-section";
import CityDetailsSection from "@/components/sections/city-details";
import CityAlternate from "@/components/sections/city-alternate";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg">
      {/* Navbar */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 bg-bg/80 backdrop-blur-xl border-b border-line">
        <div className="flex items-center gap-3">
          <div className="logo-mark"></div>
          <span className="font-fraunces text-xl font-semibold tracking-tight text-ink">
            HGER<sup className="ml-1 text-[10px] text-green">2026</sup>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-9">
          <li><a href="#cities" className="nav-link font-manrope text-xs font-bold uppercase tracking-widest text-ink hover:text-green transition-colors">The Route</a></li>
          <li><a href="#schemes" className="nav-link font-manrope text-xs font-bold uppercase tracking-widest text-ink hover:text-green transition-colors">Govt. Schemes</a></li>
          <li><a href="#exclusive" className="nav-link font-manrope text-xs font-bold uppercase tracking-widest text-ink hover:text-green transition-colors">20 Slots</a></li>
          <li><a href="#summit" className="nav-link font-manrope text-xs font-bold uppercase tracking-widest text-ink hover:text-green transition-colors">Summit</a></li>
          <li><a href="#sponsors" className="nav-link font-manrope text-xs font-bold uppercase tracking-widest text-ink hover:text-green transition-colors">Sponsorship</a></li>
          <li><a href="#audience" className="nav-link font-manrope text-xs font-bold uppercase tracking-widest text-ink hover:text-green transition-colors">Audience</a></li>
          <li><a href="#contact" className="nav-link font-manrope text-xs font-bold uppercase tracking-widest text-ink hover:text-green transition-colors">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-ink px-5 py-2.5 font-manrope text-[10px] font-black uppercase tracking-widest text-bg transition-all hover:bg-green hover:-translate-y-0.5 shadow-lg shadow-ink/10">
            Reserve a Slot
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-ink" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-16">
        <Hero />
        <RouteSection />
        <CityDetailsSection />
        <CityAlternate />
        <SchemesSection />
        <AudienceSection />
        <ExclusivitySection />
        <SummitSection />
        <SponsorshipSection />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
