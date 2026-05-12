"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";

const cities = [
  { id: "01", name: "Palwal", tagline: "Industrial Gateway", description: "The strategic entry point to Haryana's industrial belt, perfect for massive solar manufacturing and EV charging hubs.", image: "/cities/industrial.png" },
  { id: "02", name: "Rewari", tagline: "Logistics Hub", description: "A historical junction now serving as a critical node for large-scale electric fleet transitions and renewable warehouses.", image: "/cities/industrial.png" },
  { id: "03", name: "Charkhi Dadri", tagline: "Emerging Frontier", description: "Vast open spaces perfect for hybrid wind-solar farms, representing the next wave of green infrastructure.", image: "/cities/agricultural.png" },
  { id: "04", name: "Hisar", tagline: "Knowledge Center", description: "The academic and steel heart of the state, leading the transition with campus-wide solar grids and clean-tech.", image: "/cities/modern.png" },
  { id: "05", name: "Sirsa", tagline: "Green Belt", description: "Haryana's agricultural pride, revolutionizing the way the state farms and fuels through biomass and solar irrigation.", image: "/cities/agricultural.png" },
  { id: "06", name: "Rohtak", tagline: "Administrative Core", description: "A lighthouse city for government-led sustainability initiatives and integrated smart public infrastructure.", image: "/cities/modern.png" },
  { id: "07", name: "Sonipat", tagline: "Industrial Giant", description: "Transforming factory skylines with renewable grids. The largest potential producers of green energy in the state.", image: "/cities/industrial.png" },
  { id: "08", name: "Karnal", tagline: "Smart City Vision", description: "Setting national benchmarks in smart urban planning with decentralized solar and integrated energy management.", image: "/cities/modern.png" },
  { id: "09", name: "Yamunanagar", tagline: "Industrial Forge", description: "Where heavy timber and sugar industries meet biomass power, creating a pioneer circular energy economy.", image: "/cities/industrial.png" },
  { id: "10", name: "Chandigarh", tagline: "The Final Vision", description: "The destination for the HGER 2026 Summit, uniting all stakeholders for a sustainable future in India's greenest city.", image: "/cities/modern.png" },
];

const CityAlternate = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const HGER_GREEN = "#1a8a5e"; 

  return (
    <section id="city-mosaic-explorer" className="relative bg-bg py-8 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-paper px-4 py-1.5 font-mono text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line">
              Design B · Mosaic Trail
            </div>
            <h2 className="font-fraunces text-4xl font-normal text-ink sm:text-6xl lg:text-6xl leading-[1.0]" style={{ letterSpacing: '-0.04em' }}>
              Roadshow <span className="text-green italic">Dashboard.</span>
            </h2>
          </div>
          <p className="max-w-md font-manrope text-sm font-medium text-ink-soft leading-relaxed">
            Select a city stop from the list to explore the local green energy vision and roadshow activation details.
          </p>
        </div>

        {/* The Explorer Layout - Reduced Height */}
        <LayoutGroup>
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
            
            {/* LEFT: Main Featured Card (Reduced height to 480px) */}
            <motion.div
              layout
              layoutId="featured-card"
              className="w-full lg:w-[62%] min-h-[400px] lg:h-[480px] relative overflow-hidden rounded-[2.5rem] bg-ink shadow-xl border border-line"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={cities[featuredIndex].image}
                    alt={cities[featuredIndex].name}
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Featured Content - More compact */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featuredIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="max-w-lg"
                  >
                    <span 
                      className="inline-block px-3 py-1 mb-4 text-[9px] font-black uppercase tracking-widest text-white rounded-full"
                      style={{ backgroundColor: HGER_GREEN }}
                    >
                      Stop {cities[featuredIndex].id}
                    </span>
                    <h3 className="font-fraunces text-5xl font-bold text-white mb-3 leading-none sm:text-6xl">
                      {cities[featuredIndex].name}
                    </h3>
                    <p className="font-mono text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-4">
                      {cities[featuredIndex].tagline}
                    </p>
                    <p className="font-manrope text-base font-medium leading-relaxed text-white/80">
                      {cities[featuredIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT: The 10 Tiles Grid - More compact tiles */}
            <div className="w-full lg:w-[38%] grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-2 gap-3">
              {cities.map((city, index) => (
                <motion.div
                  key={city.id}
                  layout
                  onClick={() => setFeaturedIndex(index)}
                  className={`relative cursor-pointer overflow-hidden rounded-[1.5rem] border p-4 flex flex-col items-center justify-center text-center transition-all group ${
                    featuredIndex === index 
                      ? "border-transparent ring-2 ring-white z-10" 
                      : "bg-paper border-line hover:bg-bg"
                  }`}
                  style={{ 
                    backgroundColor: featuredIndex === index ? HGER_GREEN : undefined 
                  }}
                >
                  <span className={`font-mono text-[8px] font-black mb-1 transition-colors ${
                    featuredIndex === index ? "text-white/60" : "text-ink/20 group-hover:text-green"
                  }`}>
                    {city.id}
                  </span>
                  <span className={`font-fraunces text-base font-bold leading-tight transition-all ${
                    featuredIndex === index ? "text-white" : "text-ink/80 group-hover:text-ink"
                  }`}>
                    {city.name}
                  </span>
                  
                  {/* Active Indicator (Dot) */}
                  {featuredIndex === index && (
                    <motion.div 
                      layoutId="active-dot-compact"
                      className="absolute top-2 right-3 h-1 w-1 rounded-full bg-white shadow-sm" 
                    />
                  )}
                </motion.div>
              ))}
            </div>

          </div>
        </LayoutGroup>

        {/* Minimal Footer */}
        <div className="mt-8 flex items-center justify-between px-4 border-t border-line pt-6">
           <div className="flex items-center gap-4">
             <div className="font-mono text-[9px] font-black text-ink/20 uppercase tracking-widest">Active Stop</div>
             <div className="font-fraunces text-xl font-bold text-green">{cities[featuredIndex].name}</div>
           </div>
           <div className="font-mono text-[9px] font-black text-ink/20 uppercase tracking-widest">HGER 2026 Trail</div>
        </div>
      </div>
    </section>
  );
};

export default CityAlternate;
