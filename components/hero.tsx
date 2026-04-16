"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress into a percentage for the clip path
  // Start revealing at 0% scroll, fully reveal blueprint by 100% scroll
  const clipPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Framer motion uses standard css rules.
  // clipPath: inset(top right bottom left)
  // We want to clip from the bottom up, so the bottom value increases
  const clipPathValue = useTransform(clipPercentage, (val) => `inset(0 0 ${val}% 0)`);

  return (
    <div ref={containerRef} className="h-[200vh] relative bg-black">
      {/* Sticky wrapper for the actual hero imagery */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Layer 1: Blueprint (Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          {/* Apply the CSS filters for the blueprint aesthetic */}
          <div className="absolute inset-0 z-0 bg-black/40 mix-blend-multiply pointer-events-none" />
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f91cbcf523"
            alt="Motorcycle Blueprint"
            className="w-full h-full object-cover"
            style={{ 
              filter: 'invert(1) brightness(0.5) sepia(1) hue-rotate(180deg)',
              objectPosition: 'center center'
            }}
          />
          {/* Some technical text overlays */}
          <div className="absolute top-10 left-10 text-cyan-400 font-mono text-xs opacity-70">
            SYS_ENG: AERO-8.4<br/>
            STATUS: NOMINAL
          </div>
        </div>

        {/* Layer 2: Realistic (Foreground Layer) */}
        <motion.div 
          className="absolute inset-0 w-full h-full z-10"
          style={{
            clipPath: clipPathValue
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f91cbcf523"
            alt="Realistic Motorcycle"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </motion.div>

        {/* Text overlay on top of everything */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-4 mix-blend-difference">
            Next Gen
          </h1>
          <p className="text-white/70 text-lg uppercase tracking-widest mix-blend-difference">
            Scroll to inspect
          </p>
        </div>
      </div>
    </div>
  );
}
