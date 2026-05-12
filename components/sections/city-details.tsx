"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cities = [
  { id: "01", name: "Palwal", tagline: "Industrial Gateway", description: "The strategic entry point to Haryana's industrial belt, perfect for massive solar manufacturing and EV charging hubs.", image: "/cities/industrial.png", color: "bg-blue-500" },
  { id: "02", name: "Rewari", tagline: "Logistics Hub", description: "A historical junction now serving as a critical node for large-scale electric fleet transitions and renewable warehouses.", image: "/cities/industrial.png", color: "bg-orange-500" },
  { id: "03", name: "Charkhi Dadri", tagline: "Emerging Frontier", description: "Vast open spaces perfect for hybrid wind-solar farms, representing the next wave of green infrastructure.", image: "/cities/agricultural.png", color: "bg-green-500" },
  { id: "04", name: "Hisar", tagline: "Knowledge Center", description: "The academic and steel heart of the state, leading the transition with campus-wide solar grids and clean-tech.", image: "/cities/modern.png", color: "bg-indigo-500" },
  { id: "05", name: "Sirsa", tagline: "Green Belt", description: "Haryana's agricultural pride, revolutionizing the way the state farms and fuels through biomass and solar irrigation.", image: "/cities/agricultural.png", color: "bg-emerald-500" },
  { id: "06", name: "Rohtak", tagline: "Administrative Core", description: "A lighthouse city for government-led sustainability initiatives and integrated smart public infrastructure.", image: "/cities/modern.png", color: "bg-rose-500" },
  { id: "07", name: "Sonipat", tagline: "Industrial Giant", description: "Transforming factory skylines with renewable grids. The largest potential producers of green energy in the state.", image: "/cities/industrial.png", color: "bg-cyan-500" },
  { id: "08", name: "Karnal", tagline: "Smart City Vision", description: "Setting national benchmarks in smart urban planning with decentralized solar and integrated energy management.", image: "/cities/modern.png", color: "bg-blue-600" },
  { id: "09", name: "Yamunanagar", tagline: "Industrial Forge", description: "Where heavy timber and sugar industries meet biomass power, creating a pioneer circular energy economy.", image: "/cities/industrial.png", color: "bg-amber-600" },
  { id: "10", name: "Chandigarh", tagline: "The Final Vision", description: "The destination for the HGER 2026 Summit, uniting all stakeholders for a sustainable future in India's greenest city.", image: "/cities/modern.png", color: "bg-green-600" },
];

const CityDetailsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="city-horizontal-accordion" className="relative min-h-[500px] w-full overflow-hidden bg-bg py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 mb-10 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-paper px-4 py-1.5 font-mono text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line">
              The Roadshow Trail · 10 Cities
            </div>
            <h2 className="font-fraunces text-4xl font-normal text-ink sm:text-6xl lg:text-6xl leading-[1.0]" style={{ letterSpacing: '-0.04em' }}>
              Cities <span className="text-green italic">Unfolded.</span>
            </h2>
          </div>
          <p className="max-w-md font-manrope text-sm font-medium text-ink-soft sm:text-lg leading-relaxed">
            Hover over each slice to reveal the vision. Discover how each city stop contributes to Haryana's green transformation.
          </p>
        </div>
      </div>

      {/* Horizontal Accordion Container - Reduced Height */}
      <div className="relative flex h-[480px] w-full flex-row overflow-hidden border-y border-line bg-paper shadow-xl">
        {cities.map((city, index) => (
          <motion.div
            key={city.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              width: hoveredIndex === null ? "10%" : hoveredIndex === index ? "45%" : "6.11%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 35,
              mass: 1,
            }}
            className="relative h-full overflow-hidden border-r border-line last:border-r-0 cursor-pointer group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={city.image}
                alt={city.name}
                fill
                className={`object-cover transition-all duration-1000 ${hoveredIndex === index ? "scale-105 opacity-90 blur-0" : "scale-110 opacity-15 grayscale blur-[2px]"}`}
              />
              <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredIndex === index ? "bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" : "bg-paper/85"}`} />
            </div>

            {/* Content Container - More compact padding */}
            <div className="relative z-10 flex h-full w-full flex-col p-6">
              {/* Vertical Title (Visible when closed) */}
              <AnimatePresence mode="wait">
                {hoveredIndex !== index ? (
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                  >
                    <span className="font-mono text-[10px] font-black text-ink mb-4">{city.id}</span>
                    <span className="font-fraunces text-2xl font-bold text-ink [writing-mode:vertical-lr] rotate-180 tracking-widest whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
                      {city.name}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex h-full flex-col justify-end"
                  >
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white rounded-full shadow-lg ${city.color}`}>
                        Stop {city.id}
                      </span>
                    </div>
                    
                    <h3 className="font-fraunces text-4xl font-bold text-white mb-2 leading-none drop-shadow-lg sm:text-5xl">
                      {city.name}
                    </h3>
                    
                    <p className="font-mono text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4 opacity-80">
                      {city.tagline}
                    </p>
                    
                    <p className="font-manrope text-base font-semibold leading-relaxed text-white max-w-[280px] drop-shadow-lg">
                      {city.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-4">
                      <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                          className={`h-full ${city.color} shadow-[0_0_15px_rgba(255,255,255,0.4)]`} 
                        />
                      </div>
                      <span className="font-mono text-[8px] font-black text-white uppercase tracking-widest whitespace-nowrap">Explore</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Glow Indicator */}
            <motion.div 
              className={`absolute bottom-0 left-0 h-1 w-full ${city.color} shadow-[0_-8px_20px_rgba(0,0,0,0.4)]`}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Minimal Global Track */}
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="font-mono text-[9px] font-black text-ink/10 uppercase tracking-[0.4em] mb-3">1,200 KM TRAIL</div>
        <div className="flex gap-1.5">
           {cities.map((_, i) => (
             <div key={i} className={`h-0.5 w-8 rounded-full transition-all duration-700 ${hoveredIndex === i ? "bg-green scale-x-110" : "bg-line"}`} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default CityDetailsSection;
