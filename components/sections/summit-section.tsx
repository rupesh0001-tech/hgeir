"use client";

import React from "react";
import { motion } from "framer-motion";

const SummitSection = () => {
  const highlights = [
    { 
      title: "Industry Leadership Summit", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "var(--color-green)"
    },
    { 
      title: "Renewable Energy Innovation Showcase", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "var(--color-sun)"
    },
    { 
      title: "Networking with Policymakers & Investors", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "var(--color-blue)"
    },
    { 
      title: "Recognition & Awards Ceremony", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      ),
      color: "var(--color-green-bright)"
    },
    { 
      title: "Business Collaboration Opportunities", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "var(--color-teal)"
    },
    { 
      title: "Future of Clean Energy Discussions", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "var(--color-blue-bright)"
    },
  ];

  const experience = [
    "Premium networking environment",
    "Live presentations & panel discussions",
    "Awards gala and recognition ceremony",
    "Media & branding exposure",
    "High-value industry connections",
    "Exclusive participation opportunities",
  ];

  const exhibitorAwards = [
    "Best Solar Innovation",
    "Best EV Technology Showcase",
    "Best Renewable Energy Startup",
    "Most Impactful Green Solution",
    "Best Sustainable Product Display",
    "Excellence in Clean Energy Manufacturing",
  ];

  const communityAwards = [
    "Green Community Champion",
    "Sustainability Leadership Award",
    "Best Institutional Green Initiative",
    "Outstanding Renewable Energy Adoption",
    "Eco-Friendly Business Excellence",
    "Youth Climate Leadership Recognition",
  ];

  return (
    <section id="summit" className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 bg-bg overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-sun blur-[120px]" />
        <div className="absolute top-1/2 -left-24 h-[500px] w-[500px] rounded-full bg-green blur-[120px]" />
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center rounded-full bg-paper px-4 py-1.5 font-mono text-sm font-semibold tracking-wide text-ink shadow-sm ring-1 ring-inset ring-line"
        >
          Exclusive Leadership & Recognition Evening
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-fraunces text-4xl font-normal text-ink sm:text-6xl lg:text-7xl leading-[1.0] mb-8" style={{ letterSpacing: '-0.04em' }}
        >
          The HGER <span className="text-green italic">Summit</span> <br className="hidden sm:block" />
          <span className="text-sun">&</span> Awards Night
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto font-manrope text-lg sm:text-xl font-medium text-ink-soft/80 leading-relaxed"
        >
          An exclusive summit and awards evening bringing together renewable energy leaders, innovators, policymakers, investors, exhibitors, and clean-tech pioneers under one platform.
        </motion.p>
      </div>

      {/* Chief Guest & Overview Grid */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-32 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-paper p-10 sm:p-14 ring-1 ring-line shadow-xl flex flex-col justify-center border-b-[6px] border-green/20"
        >
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-ink flex items-center gap-4">
              <span className="h-10 w-1.5 bg-green rounded-full" />
              Event Overview
            </h3>
            <p className="font-manrope text-ink-soft text-xl leading-relaxed font-medium">
              The event celebrates impactful contributions toward a greener Haryana while creating opportunities for collaboration, networking, recognition, and business growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
              {experience.map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-manrope text-sm font-bold text-ink-soft/60">
                  <div className="h-5 w-5 rounded-full bg-green/10 flex items-center justify-center text-green shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-[3rem] bg-ink p-10 sm:p-14 text-paper shadow-2xl relative overflow-hidden group border-b-[6px] border-sun/30"
        >
          <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-sun mb-6">
                Chief Guest Protocol
              </div>
              <h3 className="text-4xl sm:text-5xl font-fraunces font-medium leading-[1.1]">
                Distinguished <br /> <span className="text-sun italic">Government</span> & <br /> Industry Leaders
              </h3>
              <p className="mt-8 font-manrope text-paper/50 text-lg leading-relaxed font-medium">
                Special participation from senior cabinet officials, renewable energy pioneers, and clean-tech visionaries from across the nation.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-paper/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-sun/10 flex items-center justify-center text-sun ring-1 ring-sun/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-3.14a9 9 0 018.662-10.77a9 9 0 019.039 9.04m-9.039 0h.01M9.172 9.172L15 15M12 12V3" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-sm font-black uppercase tracking-widest text-paper">Summit Edition I</div>
                  <div className="font-mono text-xs font-bold text-paper/40">VIP DELEGATE PASS REQUIRED</div>
                </div>
              </div>
              <div className="hidden sm:block h-10 w-10 opacity-20">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Highlights Grid */}
      <div className="mb-40">
        <div className="flex items-center gap-6 mb-16 px-4">
          <h3 className="text-4xl font-fraunces text-ink whitespace-nowrap">Event Highlights</h3>
          <div className="h-px w-full bg-line" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 rounded-[2.5rem] bg-paper ring-1 ring-line shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative"
            >
              <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <div className="scale-[3]">
                  {item.icon}
                </div>
              </div>
              
              <div className="mb-8 p-4 rounded-2xl bg-bg inline-block group-hover:scale-110 transition-transform duration-500" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-ink leading-tight group-hover:text-green transition-colors duration-300">
                {item.title}
              </h4>
              <div className="mt-4 h-1 w-0 bg-green group-hover:w-12 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="space-y-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-green/5 blur-[120px] -z-10 rounded-full" />
        
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-green mb-4 block">Recognition Excellence</span>
          <h3 className="text-5xl sm:text-6xl font-fraunces text-ink leading-tight">Award Categories</h3>
          <p className="mt-6 font-mono text-ink-soft/60 font-bold uppercase tracking-widest text-xs">Celebrating Impact across two distinct tracks</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Exhibitor Awards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between px-6 border-b border-line pb-6">
              <h4 className="text-2xl font-bold text-ink">Exhibitor Track</h4>
              <span className="font-mono text-[10px] font-black bg-sun/10 text-sun px-4 py-1.5 rounded-full ring-1 ring-sun/20 uppercase tracking-[0.2em]">Track 01</span>
            </div>
            <div className="grid gap-4">
              {exhibitorAwards.map((award, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 12 }}
                  className="flex items-center gap-6 p-6 rounded-[2rem] bg-paper ring-1 ring-line shadow-sm hover:ring-sun/30 hover:bg-ink group transition-all duration-300"
                >
                  <div className="text-3xl font-fraunces font-medium italic text-sun/30 group-hover:text-sun transition-colors shrink-0 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className="font-manrope text-[17px] font-bold text-ink-soft group-hover:text-paper transition-colors">
                    {award}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visitor Awards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between px-6 border-b border-line pb-6">
              <h4 className="text-2xl font-bold text-ink">Community Track</h4>
              <span className="font-mono text-[10px] font-black bg-green/10 text-green px-4 py-1.5 rounded-full ring-1 ring-green/20 uppercase tracking-[0.2em]">Track 02</span>
            </div>
            <div className="grid gap-4">
              {communityAwards.map((award, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: -12 }}
                  className="flex items-center gap-6 p-6 rounded-[2rem] bg-paper ring-1 ring-line shadow-sm hover:ring-green/30 hover:bg-ink group transition-all duration-300"
                >
                  <span className="font-manrope text-[17px] font-bold text-ink-soft group-hover:text-paper transition-colors flex-1 text-right">
                    {award}
                  </span>
                  <div className="text-3xl font-fraunces font-medium italic text-green/30 group-hover:text-green transition-colors shrink-0 w-10 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default SummitSection;
