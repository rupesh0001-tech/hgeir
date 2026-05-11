"use client";

import React from "react";

const RouteSection = () => {
  return (
    <section id="cities" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mb-16">
        <div className="mb-6 inline-flex items-center rounded-full bg-paper px-4 py-1.5 text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line">
          The Route · 2026
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-4xl leading-[1.2] mb-6">
          From Palwal to Chandigarh — <span className="text-green italic">a 1,200 km journey</span> through India's most underserved clean-energy market.
        </h2>
        <p className="text-sm font-medium text-ink-soft sm:text-lg">
          Each city stop is a 3-day ground activation: branded stalls, live demos, government enrolment desks, institutional B2B meets, and Haryanvi-language outreach. The journey ends with a flagship summit in Chandigarh.
        </p>
      </div>

      {/* Route Map Visual */}
      <div className="relative mb-20 rounded-3xl bg-paper p-4 sm:p-8 ring-1 ring-line shadow-sm overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-ink) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <svg className="w-full h-auto relative z-10" viewBox="0 0 1600 850" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
              <feOffset dx="0" dy="10" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.08" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="card-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-ink)" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="var(--color-ink)" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="var(--color-ink)" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* Road Path Visual */}
          <g opacity="0.8">
            {/* Main Road Base */}
            <path id="roadPath" d="M 108 69 C 200 80, 300 200, 398 254 S 600 100, 698 154 S 1000 150, 1058 174 S 1250 200, 1328 274 S 1150 450, 1068 504 S 850 550, 728 534 S 350 500, 218 574 S 500 700, 658 734 S 1000 750, 1158 714 S 1350 650, 1400 500"
                  fill="none" stroke="#333" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Road Inner Line */}
            <path d="M 108 69 C 200 80, 300 200, 398 254 S 600 100, 698 154 S 1000 150, 1058 174 S 1250 200, 1328 274 S 1150 450, 1068 504 S 850 550, 728 534 S 350 500, 218 574 S 500 700, 658 734 S 1000 750, 1158 714 S 1350 650, 1400 500"
                  fill="none" stroke="#444" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Road Markings */}
            <path d="M 108 69 C 200 80, 300 200, 398 254 S 600 100, 698 154 S 1000 150, 1058 174 S 1250 200, 1328 274 S 1150 450, 1068 504 S 850 550, 728 534 S 350 500, 218 574 S 500 700, 658 734 S 1000 750, 1158 714 S 1350 650, 1400 500"
                  fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 15" strokeLinecap="round" opacity="0.6"/>
          </g>

          {/* ===================== FRONT VIEW CAR ===================== */}
          <g>
            {/* Rotating the car 90deg so it travels nose-first with rotate="auto" */}
            <g transform="rotate(90) scale(0.6)">
              {/* Car Body */}
              <rect x="-24" y="-55" width="48" height="110" rx="18" fill="#ff3b30"/>
              {/* Hood */}
              <rect x="-20" y="-52" width="40" height="24" rx="10" fill="#ff5a4f"/>
              {/* Windshield */}
              <rect x="-18" y="-18" width="36" height="22" rx="8" fill="#b3e5fc"/>
              {/* Roof */}
              <rect x="-20" y="8" width="40" height="26" rx="10" fill="#d32f2f"/>
              {/* Rear Glass */}
              <rect x="-16" y="38" width="32" height="14" rx="6" fill="#b3e5fc"/>
              {/* Headlights */}
              <circle cx="-14" cy="-48" r="4" fill="#fff59d"/>
              <circle cx="14" cy="-48" r="4" fill="#fff59d"/>
              {/* Grill */}
              <rect x="-10" y="-38" width="20" height="5" rx="2" fill="#222"/>
              {/* Wheels */}
              <rect x="-30" y="-28" width="7" height="22" rx="4" fill="#111"/>
              <rect x="23" y="-28" width="7" height="22" rx="4" fill="#111"/>
              <rect x="-30" y="18" width="7" height="22" rx="4" fill="#111"/>
              <rect x="23" y="18" width="7" height="22" rx="4" fill="#111"/>
            </g>

            <animateMotion dur="24s" repeatCount="indefinite" rotate="auto">
              <mpath href="#roadPath"/>
            </animateMotion>
          </g>

          {/* City Markers and Interactive Cards */}
          {[
            { id: "01", name: "Palwal", date: "Mar 2026", x: 108, y: 69, color: "#f44336", width: 220, time: 0 },
            { id: "02", name: "Rewari", date: "Mar 2026", x: 398, y: 254, color: "#ff9800", width: 240, time: 2.1 },
            { id: "03", name: "Charkhi Dadri", date: "Mar 2026", x: 698, y: 154, color: "#1565c0", width: 200, time: 4.1 },
            { id: "04", name: "Hisar", date: "Mar 2026", x: 1058, y: 174, color: "#2e7d32", width: 220, time: 6.4 },
            { id: "05", name: "Sirsa", date: "Mar 2026", x: 1328, y: 274, color: "#8e24aa", width: 200, time: 8.2 },
            { id: "06", name: "Rohtak", date: "Apr 2026", x: 1068, y: 504, color: "#e91e63", width: 200, time: 10.4 },
            { id: "07", name: "Sonipat", date: "Apr 2026", x: 728, y: 534, color: "#009688", width: 220, time: 12.6 },
            { id: "08", name: "Karnal", date: "Apr 2026", x: 218, y: 574, color: "#1565c0", width: 220, time: 15.8 },
            { id: "09", name: "Yamunanagar", date: "Apr 2026", x: 658, y: 734, color: "#ef6c00", width: 220, time: 18.8 },
          ].map((city) => {
            const revealStart = (city.time / 24);
            const revealEnd = ((city.time + 2.5) / 24);
            const fadeOutEnd = ((city.time + 3.5) / 24);
            
            return (
              <g key={city.id} transform={`translate(${city.x} ${city.y})`}>
                {/* Static Marker Circle */}
                <circle cx="0" cy="0" r="28" fill="white" stroke={city.color} strokeWidth="2.5" />
                <circle cx="0" cy="0" r="22" fill={city.color} />
                <text x="0" y="7" font-size="18" fill="white" font-weight="bold" text-anchor="middle">{city.id}</text>

                {/* Animated Info Card */}
                <g opacity="0">
                  <animate 
                    attributeName="opacity" 
                    values="0;0;1;1;0;0" 
                    keyTimes={`0; ${Math.max(0, revealStart - 0.02)}; ${revealStart}; ${revealEnd}; ${fadeOutEnd}; 1`}
                    dur="24s" 
                    repeatCount="indefinite" 
                  />
                  <g transform="translate(40 -40)">
                    <rect width={city.width} height="80" rx="18" fill="white" stroke="url(#card-border-grad)" strokeWidth="1" />
                    <text x="20" y="34" font-size="24" font-weight="bold" fill={city.color}>{city.name}</text>
                    <text x="20" y="60" font-size="14" font-weight="medium" fill="var(--color-ink-soft)" opacity="0.6">{city.date}</text>
                  </g>
                </g>
              </g>
            );
          })}

          {/* Chandigarh Finale */}
          <g transform="translate(1400 500)">
            <circle cx="0" cy="0" r="32" fill="white" stroke="#2cc985" strokeWidth="3" />
            <circle cx="0" cy="0" r="26" fill="#2cc985" />
            <text x="0" y="8" font-size="22" fill="white" font-weight="bold" text-anchor="middle">★</text>

            {/* Animated Info Card */}
            <g opacity="0">
              <animate 
                attributeName="opacity" 
                values="0;0;1;1" 
                keyTimes="0; 0.95; 0.98; 1"
                dur="24s" 
                repeatCount="indefinite" 
              />
              <g transform="translate(45 -45)">
                <rect width="280" height="90" rx="20" fill="white" stroke="url(#card-border-grad)" strokeWidth="2" />
                <text x="20" y="38" font-size="24" font-weight="bold" fill="#2cc985">Chandigarh</text>
                <text x="20" y="64" font-size="14" font-weight="medium" fill="var(--color-ink-soft)" opacity="0.6">Grand Finale Summit</text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default RouteSection;
