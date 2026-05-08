"use client";

import React from "react";
import TypewriterText from "@/components/ui/smoothui/typewriter-text";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="nav-glass">
        <div className="flex items-center gap-3">
          <div className="logo-mark"></div>
          <span className="font-fraunces text-xl font-semibold tracking-tight text-ink">
            HGER<sup className="ml-1 text-[10px] text-green">2026</sup>
          </span>
        </div>

        <ul className="hidden lg:flex items-center gap-9">
          <li><a href="#cities" className="nav-link">The Route</a></li>
          <li><a href="#schemes" className="nav-link">Govt. Schemes</a></li>
          <li><a href="#exclusive" className="nav-link">20 Slots</a></li>
          <li><a href="#sponsors" className="nav-link">Sponsorship</a></li>
          <li><a href="#audience" className="nav-link">Audience</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-bg transition-all hover:bg-green hover:-translate-y-0.5">
          Reserve a Slot
        </a>
      </nav>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="eco-ring animate-spin-slow w-[800px] h-[800px] -top-96 -right-96 opacity-20 border-green" />
        <div className="eco-ring animate-spin-reverse w-[600px] h-[600px] top-1/2 -left-48 opacity-10 border-blue" />
      </div>

      {/* Hero Section */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 mt-10 pt-12 pb-24 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-x-12">

          {/* Content Left */}
          <div className="max-w-[95%] lg:max-w-none">
            <div className="mb-8 inline-flex items-center rounded-full bg-paper px-4 py-1.5 text-sm font-semibold tracking-wide text-green shadow-sm ring-1 ring-inset ring-line">
              <div className="relative flex size-3.5 items-center justify-center mr-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
              </div>
              Haryana Green Energy Roadshow · Edition I · 2026
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl leading-[1.1]">
              <span className="whitespace-nowrap">
                10 Cities,{" "}
                <span className="relative inline-block">
                  <span className="text-green italic">One Vision:</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path
                      d="M 0 5 Q 50 10, 100 5"
                      stroke="#1a8a5e"
                      strokeWidth="3"
                      fill="transparent"
                      strokeLinecap="round"
                      className="animate-draw-underline"
                      pathLength="100"
                    />
                  </svg>
                </span>
              </span>
              <br />
              <span className="whitespace-nowrap">A Greener <span className="text-blue">Haryana.</span></span>
            </h1>

            <p className="mt-8 text-lg font-medium text-ink-soft">
              A 3-month, 10-city journey across Haryana — bringing solar, wind, EV, biofuels, and clean-tech directly to the people, institutions, and businesses ready to adopt them.
            </p>
            
            <p className="mt-4 text-lg font-medium text-ink-soft min-h-[4rem]">
              <TypewriterText speed={30}>
                From Sirsa to Chandigarh, HGER puts every leader in renewable energy face-to-face with 50,000+ buyers — schools, hospitals, government bodies, and commercial enterprises across rural and semi-urban Haryana.
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
                Explore the Route
              </a>
            </div>
          </div>

          {/* Visual Right */}
          <div className="relative lg:ml-auto">
            <div className="relative animate-float">
              {/* SVG Illustration */}
              <svg className="w-full h-auto drop-shadow-2xl" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a9fdc" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#2cc985" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="land" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a8a5e" />
                    <stop offset="100%" stopColor="#0e5a3d" />
                  </linearGradient>
                  <linearGradient id="blade" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbfdfc" />
                    <stop offset="100%" stopColor="#e3eee9" />
                  </linearGradient>
                  <linearGradient id="solar" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e6fb8" />
                    <stop offset="100%" stopColor="#0d4a82" />
                  </linearGradient>
                  <radialGradient id="sun" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f4c430" />
                    <stop offset="70%" stopColor="#f4c430" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f4c430" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="250" cy="250" r="200" fill="url(#sky)" stroke="rgba(10,31,28,0.08)" strokeWidth="1" />

                <circle cx="370" cy="140" r="60" fill="url(#sun)" />
                <circle cx="370" cy="140" r="22" fill="#f4c430" className="animate-pulse-soft" />

                <g stroke="#f4c430" strokeWidth="2" strokeLinecap="round" opacity="0.7">
                  <line x1="370" y1="100" x2="370" y2="88" />
                  <line x1="370" y1="180" x2="370" y2="192" />
                  <line x1="330" y1="140" x2="318" y2="140" />
                  <line x1="410" y1="140" x2="422" y2="140" />
                </g>

                <g fill="#fbfdfc" opacity="0.8">
                  <ellipse cx="130" cy="120" rx="28" ry="10" />
                  <ellipse cx="148" cy="115" rx="22" ry="9" />
                  <ellipse cx="180" cy="180" rx="18" ry="7" />
                </g>

                <path d="M 50 380 Q 180 340, 250 360 T 450 380 L 450 450 L 50 450 Z" fill="url(#land)" />
                <path d="M 50 380 Q 180 340, 250 360 T 450 380" fill="none" stroke="#2cc985" strokeWidth="1.5" opacity="0.5" />

                <g transform="translate(110, 280)">
                  <line x1="0" y1="0" x2="0" y2="100" stroke="#fbfdfc" strokeWidth="3" strokeLinecap="round" />
                  <g className="turbine-spin-slow">
                    <circle cx="0" cy="0" r="4" fill="#0a1f1c" />
                    <path d="M 0 0 L -3 -32 L 3 -32 Z" fill="url(#blade)" stroke="#0a1f1c" strokeWidth="0.5" />
                    <path d="M 0 0 L 28 16 L 26 22 Z" fill="url(#blade)" stroke="#0a1f1c" strokeWidth="0.5" />
                    <path d="M 0 0 L -28 16 L -26 22 Z" fill="url(#blade)" stroke="#0a1f1c" strokeWidth="0.5" />
                  </g>
                </g>

                <g transform="translate(180, 240)">
                  <line x1="0" y1="0" x2="0" y2="140" stroke="#fbfdfc" strokeWidth="4" strokeLinecap="round" />
                  <g className="turbine-spin">
                    <circle cx="0" cy="0" r="6" fill="#0a1f1c" />
                    <path d="M 0 0 L -4 -45 L 4 -45 Z" fill="url(#blade)" stroke="#0a1f1c" strokeWidth="0.5" />
                    <path d="M 0 0 L 40 22 L 36 30 Z" fill="url(#blade)" stroke="#0a1f1c" strokeWidth="0.5" />
                    <path d="M 0 0 L -40 22 L -36 30 Z" fill="url(#blade)" stroke="#0a1f1c" strokeWidth="0.5" />
                  </g>
                </g>

                <g transform="translate(280, 320)">
                  <g transform="skewX(-18)">
                    <rect x="0" y="0" width="80" height="50" fill="url(#solar)" stroke="#0a1f1c" strokeWidth="1.5" rx="2" />
                    <line x1="20" y1="0" x2="20" y2="50" stroke="#4a9fdc" strokeWidth="0.5" opacity="0.6" />
                    <line x1="40" y1="0" x2="40" y2="50" stroke="#4a9fdc" strokeWidth="0.5" opacity="0.6" />
                    <line x1="60" y1="0" x2="60" y2="50" stroke="#4a9fdc" strokeWidth="0.5" opacity="0.6" />
                    <line x1="0" y1="25" x2="80" y2="25" stroke="#4a9fdc" strokeWidth="0.5" opacity="0.6" />
                  </g>
                  <line x1="35" y1="50" x2="35" y2="65" stroke="#0a1f1c" strokeWidth="2" />
                  <line x1="50" y1="50" x2="50" y2="65" stroke="#0a1f1c" strokeWidth="2" />
                </g>

                <g transform="translate(245, 405)">
                  <rect x="0" y="0" width="40" height="14" rx="3" fill="#1e6fb8" stroke="#0a1f1c" strokeWidth="1" />
                  <path d="M 5 0 Q 8 -7, 18 -7 L 28 -7 Q 35 -7, 36 0" fill="#4a9fdc" stroke="#0a1f1c" strokeWidth="1" />
                  <circle cx="9" cy="14" r="3" fill="#0a1f1c" />
                  <circle cx="31" cy="14" r="3" fill="#0a1f1c" />
                  <circle cx="20" cy="3" r="1.5" fill="#2cc985" />
                </g>
              </svg>

              {/* Floating Stat Badges */}
              <div className="absolute -left-4 top-1/4 bg-paper p-4 rounded-2xl shadow-xl ring-1 ring-line animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-ink">10</div>
                <div className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Cities</div>
              </div>
              <div className="absolute right-0 top-0 bg-paper p-4 rounded-2xl shadow-xl ring-1 ring-line animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-2xl font-bold text-ink">3</div>
                <div className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Months</div>
              </div>
              <div className="absolute -right-8 bottom-1/4 bg-paper p-4 rounded-2xl shadow-xl ring-1 ring-line animate-float" style={{ animationDelay: '3.5s' }}>
                <div className="text-2xl font-bold text-ink">₹100<span className="text-sm">Cr</span></div>
                <div className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Pipeline</div>
              </div>
              <div className="absolute left-1/4 -bottom-4 bg-paper p-4 rounded-2xl shadow-xl ring-1 ring-line animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold text-ink">50K<span className="text-green-bright">+</span></div>
                <div className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Visitors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid grid-cols-2 gap-8 rounded-3xl bg-ink p-8 text-paper sm:grid-cols-4 lg:p-12">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold sm:text-4xl">10</div>
            <div className="text-sm font-medium text-paper/60">Tier 2/3 Cities</div>
          </div>
          <div className="flex flex-col gap-2 border-l border-paper/10 pl-8">
            <div className="text-3xl font-bold sm:text-4xl">50K<span className="text-green-bright">+</span></div>
            <div className="text-sm font-medium text-paper/60">Expected Visitors</div>
          </div>
          <div className="flex flex-col gap-2 border-l border-paper/10 pl-8">
            <div className="text-3xl font-bold sm:text-4xl">03</div>
            <div className="text-sm font-medium text-paper/60">Months · 1 Closing Summit</div>
          </div>
          <div className="flex flex-col gap-2 border-l border-paper/10 pl-8">
            <div className="text-3xl font-bold sm:text-4xl">20</div>
            <div className="text-sm font-medium text-paper/60">Sponsor Slots Only</div>
          </div>
        </div>
      </header>
    </main>
  );
}

