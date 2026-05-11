"use client";

import React from "react";
import TypewriterText from "@/components/ui/smoothui/typewriter-text";

const Hero = () => {
  return (
    <header className="relative z-10 mx-auto max-w-7xl px-6 mt-10 pt-12 pb-24 sm:pt-20 lg:px-8">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-x-12">
        {/* Content Left */}
        <div className="max-w-[95%] lg:max-w-none">
          <div className="mb-8 inline-flex items-center rounded-full bg-paper px-4 py-1.5 text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line">
            <div className="relative flex size-3.5 items-center justify-center mr-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
            </div>
            Haryana Green Energy Roadshow · Edition I · 2026
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-6xl lg:text-6xl leading-[1.2]">
            <span className="block sm:inline sm:whitespace-nowrap">
              10 Cities,{" "}
              <span className="relative inline-block">
                <span className="text-green italic">One Vision:</span>
                <svg className="absolute -bottom-2.5 left-0 w-full h-4" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path
                    d="M 0 6 L 100 6"
                    stroke="#1a8a5e"
                    strokeWidth="10"
                    fill="transparent"
                    strokeLinecap="round"
                    className="animate-draw-underline"
                    pathLength="100"
                  />
                </svg>
              </span>
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline sm:whitespace-nowrap mt-2 sm:mt-0">
              A Greener <span className="text-blue">Haryana.</span>
            </span>
          </h1>

          <p className="mt-6 text-sm font-medium text-ink-soft sm:text-lg">
            A 3-month, 10-city journey across Haryana — bringing solar, wind, EV, biofuels, and clean-tech directly to the people, institutions, and businesses ready to adopt them.
          </p>

          <p className="mt-4 text-sm font-medium text-ink-soft sm:text-lg min-h-[4rem]">
            <TypewriterText speed={30}>
              From Palwal to Chandigarh, HGER puts every leader in renewable energy face-to-face with 50,000+ buyers — schools, hospitals, government bodies, and commercial enterprises across rural and semi-urban Haryana.
            </TypewriterText>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#exclusive"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-green px-8 py-4 text-lg font-bold text-paper transition-all hover:bg-green-deep hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Become a Founding Sponsor
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#cities"
              className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-bold text-ink transition-all hover:bg-ink/5 ring-2 ring-line"
            >
              Enquire
            </a>
          </div>
        </div>

        {/* Visual Right */}
        <div className="relative lg:ml-auto lg:scale-[1.45] lg:-translate-x-16">
          <div className="relative animate-float mx-auto max-w-[400px] lg:max-w-none">
            {/* SVG Illustration */}
            <svg className="w-full h-auto drop-shadow-2xl rounded-3xl overflow-hidden" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sky-new" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#87CEEB"/>
                  <stop offset="100%" stopColor="#E6FFF5"/>
                </linearGradient>

                <linearGradient id="ground-new" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#34D399"/>
                  <stop offset="100%" stopColor="#16A34A"/>
                </linearGradient>

                <linearGradient id="solar-new" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1E3A8A"/>
                  <stop offset="100%" stopColor="#60A5FA"/>
                </linearGradient>

                <filter id="glow-new">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* SKY */}
              <rect width="1400" height="800" fill="url(#sky-new)"/>

              {/* SUN */}
              <g transform="translate(1100 140)">
                <circle cx="0" cy="0" r="70" fill="#FFD93D" filter="url(#glow-new)">
                  <animate attributeName="r" values="70;76;70" dur="4s" repeatCount="indefinite"/>
                </circle>

                {/* Sun Rays */}
                <g stroke="#FFD93D" strokeWidth="6" strokeLinecap="round">
                  <line x1="-110" y1="0" x2="-150" y2="0"/>
                  <line x1="110" y1="0" x2="150" y2="0"/>
                  <line x1="0" y1="-110" x2="0" y2="-150"/>
                  <line x1="0" y1="110" x2="0" y2="150"/>

                  <line x1="-78" y1="-78" x2="-110" y2="-110"/>
                  <line x1="78" y1="-78" x2="110" y2="-110"/>
                  <line x1="-78" y1="78" x2="-110" y2="110"/>
                  <line x1="78" y1="78" x2="110" y2="110"/>

                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="18s"
                    repeatCount="indefinite"/>
                </g>
              </g>

              {/* CLOUDS */}
              <g opacity="0.8">
                <g transform="translate(100 100)">
                  <ellipse cx="0" cy="0" rx="60" ry="35" fill="white"/>
                  <ellipse cx="50" cy="-10" rx="50" ry="30" fill="white"/>
                  <ellipse cx="90" cy="0" rx="55" ry="35" fill="white"/>

                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="100 100; 1300 100; 100 100"
                    dur="40s"
                    repeatCount="indefinite"/>
                </g>
              </g>

              {/* GROUND */}
              <path d="M0 560 Q350 500 700 560 T1400 560 V800 H0 Z" fill="url(#ground-new)"/>

              {/* HILLS */}
              <path d="M0 600 Q250 350 500 600 T1000 600 T1400 600 V800 H0 Z"
                    fill="#22C55E"
                    opacity="0.8"/>

              {/* SOLAR PANELS */}
              <g transform="translate(220 500)">
                <polygon points="0 0 180 -40 260 20 80 60"
                         fill="url(#solar-new)"
                         stroke="#0F172A"
                         strokeWidth="4"/>

                {/* Solar grid */}
                <g stroke="#93C5FD" strokeWidth="2">
                  <line x1="40" y1="-10" x2="120" y2="40"/>
                  <line x1="80" y1="-20" x2="160" y2="30"/>
                  <line x1="120" y1="-30" x2="200" y2="20"/>

                  <line x1="20" y1="15" x2="200" y2="-25"/>
                  <line x1="40" y1="40" x2="220" y2="0"/>
                </g>

                {/* Reflection animation */}
                <rect x="-20" y="-60" width="40" height="120"
                      fill="rgba(255,255,255,0.4)"
                      transform="rotate(20)">
                  <animate attributeName="x"
                           values="-60;280"
                           dur="3s"
                           repeatCount="indefinite"/>
                </rect>
              </g>

              {/* WIND TURBINE 1 */}
              <g transform="translate(700 260)">
                <rect x="-8" y="120" width="16" height="240" fill="#E5E7EB"/>

                <g>
                  <circle cx="0" cy="120" r="14" fill="#CBD5E1"/>

                  <g fill="#F8FAFC">
                    <path d="M0 120 L18 -10 Q45 20 20 40 Z"/>
                    <path d="M0 120 L18 -10 Q45 20 20 40 Z"
                          transform="rotate(120 0 120)"/>
                    <path d="M0 120 L18 -10 Q45 20 20 40 Z"
                          transform="rotate(240 0 120)"/>
                  </g>

                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 120"
                    to="360 0 120"
                    dur="5s"
                    repeatCount="indefinite"/>
                </g>
              </g>

              {/* WIND TURBINE 2 */}
              <g transform="translate(980 320) scale(0.8)">
                <rect x="-8" y="120" width="16" height="240" fill="#E5E7EB"/>

                <g>
                  <circle cx="0" cy="120" r="14" fill="#CBD5E1"/>

                  <g fill="#F8FAFC">
                    <path d="M0 120 L18 -10 Q45 20 20 40 Z"/>
                    <path d="M0 120 L18 -10 Q45 20 20 40 Z"
                          transform="rotate(120 0 120)"/>
                    <path d="M0 120 L18 -10 Q45 20 20 40 Z"
                          transform="rotate(240 0 120)"/>
                  </g>

                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 0 120"
                    to="0 0 120"
                    dur="4s"
                    repeatCount="indefinite"/>
                </g>
              </g>

              {/* ELECTRICITY TOWER */}
              <g transform="translate(1180 360)">
                <path d="M0 0 L-40 220 H40 Z"
                      fill="none"
                      stroke="#475569"
                      strokeWidth="5"/>

                <line x1="-28" y1="60" x2="28" y2="60" stroke="#475569" strokeWidth="4"/>
                <line x1="-22" y1="110" x2="22" y2="110" stroke="#475569" strokeWidth="4"/>
                <line x1="-14" y1="160" x2="14" y2="160" stroke="#475569" strokeWidth="4"/>

                {/* Electric pulse */}
                <path d="M40 60 C120 20 200 100 280 60"
                      stroke="#FACC15"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="12 12">
                  <animate attributeName="stroke-dashoffset"
                           values="0;-48"
                           dur="1s"
                           repeatCount="indefinite"/>
                </path>
              </g>

              {/* BATTERY */}
              <g transform="translate(1020 560)">
                <rect x="0" y="0" width="120" height="60" rx="10"
                      fill="#0F172A"
                      stroke="#22C55E"
                      strokeWidth="4"/>

                <rect x="120" y="18" width="10" height="24" rx="3"
                      fill="#22C55E"/>

                <rect x="10" y="10" width="90" height="40"
                      rx="6"
                      fill="#22C55E">
                  <animate attributeName="width"
                           values="20;90;20"
                           dur="5s"
                           repeatCount="indefinite"/>
                </rect>

                <text x="60" y="38"
                      textAnchor="middle"
                      fill="white"
                      fontSize="18"
                      fontFamily="Arial"
                      fontWeight="bold">
                  ENERGY
                </text>
              </g>

              {/* LEAVES FLOATING */}
              <g fill="#16A34A">
                <path d="M0 0 Q10 -20 20 0 Q10 20 0 0Z">
                  <animateMotion
                    path="M100 700 Q500 400 900 650 T1400 500"
                    dur="12s"
                    repeatCount="indefinite"/>
                </path>

                <path d="M0 0 Q10 -20 20 0 Q10 20 0 0Z">
                  <animateMotion
                    path="M-100 650 Q300 300 1200 550"
                    dur="16s"
                    repeatCount="indefinite"/>
                </path>
              </g>
            </svg>

            {/* Floating Stat Badges */}
            <div className="absolute -left-4 sm:-left-10 top-1/4 bg-paper p-2 sm:p-2.5 rounded-xl shadow-lg ring-1 ring-line animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-base sm:text-lg font-bold text-ink">10</div>
              <div className="text-[8px] sm:text-[10px] font-semibold text-ink-soft uppercase tracking-wider">Cities</div>
            </div>
            <div className="absolute right-0 sm:-right-2 -top-4 sm:-top-2 bg-paper p-2 sm:p-2.5 rounded-xl shadow-lg ring-1 ring-line animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-base sm:text-lg font-bold text-ink">3</div>
              <div className="text-[8px] sm:text-[10px] font-semibold text-ink-soft uppercase tracking-wider">Months</div>
            </div>
            <div className="absolute -right-4 bottom-4 sm:bottom-1 bg-paper p-2 sm:p-2.5 rounded-xl shadow-lg ring-1 ring-line animate-float" style={{ animationDelay: '3.5s' }}>
              <div className="text-base sm:text-lg font-bold text-ink">₹100<span className="text-xs">Cr</span></div>
              <div className="text-[8px] sm:text-[10px] font-semibold text-ink-soft uppercase tracking-wider">Pipeline</div>
            </div>
            <div className="absolute left-0 sm:left-1 -bottom-4 sm:-bottom-8 bg-paper p-2 sm:p-2.5 rounded-xl shadow-lg ring-1 ring-line animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-base sm:text-lg font-bold text-ink">50K<span className="text-green-bright">+</span></div>
              <div className="text-[8px] sm:text-[10px] font-semibold text-ink-soft uppercase tracking-wider">Visitors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-24 grid grid-cols-2 gap-8 rounded-3xl bg-ink p-8 text-paper sm:grid-cols-4 lg:p-12">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold sm:text-4xl">09</div>
          <div className="text-sm font-medium text-paper/60">Tier 2/3 Cities</div>
        </div>
        <div className="flex flex-col gap-2 border-l border-paper/10 pl-8">
          <div className="text-3xl font-bold sm:text-4xl">50K<span className="text-green-bright">+</span></div>
          <div className="text-sm font-medium text-paper/60">Expected Visitors</div>
        </div>
        <div className="flex flex-col gap-2 border-l-0 pl-0 sm:border-l sm:border-paper/10 sm:pl-8">
          <div className="text-3xl font-bold sm:text-4xl">03</div>
          <div className="text-sm font-medium text-paper/60">Months · 1 Closing Summit</div>
        </div>
        <div className="flex flex-col gap-2 border-l border-paper/10 pl-8">
          <div className="text-3xl font-bold sm:text-4xl">20</div>
          <div className="text-sm font-medium text-paper/60">Sponsor Slots Only</div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
