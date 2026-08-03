'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroProfileVisual() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] aspect-square flex items-center justify-center select-none py-6">
      {/* Ambient background soft glow matching theme */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-copper-500/20 via-copper-600/10 to-transparent blur-3xl pointer-events-none" />

      {/* Center Circular Portrait Frame with exact crisp white/theme border */}
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[370px] lg:h-[370px] rounded-full p-1.5 sm:p-2 bg-gradient-to-b from-white/90 via-white/80 to-white/60 dark:from-[#2A2E33] dark:via-[#202428] dark:to-[#16191C] shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.7)] ring-1 ring-black/5 dark:ring-white/10 z-10 flex items-center justify-center">
        {/* Inner circle mask */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-elevated">
          {/* Shimmer loading skeleton */}
          <AnimatePresence>
            {!imageLoaded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-r from-surface via-elevated to-surface animate-pulse flex items-center justify-center z-20"
              >
                <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* High-Resolution Portrait */}
          <Image
            src="/profile.jpg"
            alt="Anand Chandrakant Wayare - Full Stack Developer & AI Engineer"
            fill
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 370px"
            onLoad={() => setImageLoaded(true)}
            className={`object-cover object-top transition-all duration-700 ease-out ${
              imageLoaded ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-95 blur-sm'
            }`}
          />
        </div>
      </div>

      {/* Orbiting Squircles (Exact Badges from Reference: React, Tailwind, JS, Python, OpenAI, Node.js) */}

      {/* 1. TOP-LEFT: React (Cyan Atom) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15, rotate: 6 }}
        className="absolute left-3 sm:left-2 top-8 sm:top-10 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#1A1D20] border border-black/5 dark:border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-transform group"
        title="React & Next.js"
      >
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D8FF] group-hover:rotate-45 transition-transform duration-500"
          fill="currentColor"
        >
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </motion.div>

      {/* 2. MIDDLE-LEFT: Tailwind CSS (Cyan Wave) */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        whileHover={{ scale: 1.15, rotate: -6 }}
        className="absolute -left-2 sm:-left-3 top-[52%] -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#1A1D20] border border-black/5 dark:border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-transform group"
        title="Tailwind CSS"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#38BDF8] group-hover:scale-110 transition-transform"
          fill="currentColor"
        >
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      </motion.div>

      {/* 3. BOTTOM-LEFT: JavaScript (Yellow JS Square) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        whileHover={{ scale: 1.15, rotate: 6 }}
        className="absolute left-1 sm:left-1 bottom-12 sm:bottom-14 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#1A1D20] border border-black/5 dark:border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-transform group"
        title="JavaScript (ES6+)"
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#F7DF1E] rounded-md flex items-end justify-end p-0.5 font-sans font-black text-[10px] sm:text-xs text-black leading-none select-none group-hover:scale-105 transition-transform">
          JS
        </div>
      </motion.div>

      {/* 4. TOP-RIGHT: Python (Blue & Yellow Snake) */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        whileHover={{ scale: 1.15, rotate: -6 }}
        className="absolute right-3 sm:right-2 top-8 sm:top-10 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#1A1D20] border border-black/5 dark:border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-transform group"
        title="Python & AI Architectures"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" fill="currentColor">
          <path
            d="M11.91 2C6.83 2 7.15 4.21 7.15 4.21L7.16 6.5h4.84v.69H5.17S2 6.84 2 11.94c0 5.11 2.76 4.93 2.76 4.93h1.65v-2.32s-.09-2.76 2.72-2.76h4.69s2.63.04 2.63-2.55V4.64S16.99 2 11.91 2zm-2.58 1.48a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86z"
            fill="#387EB8"
          />
          <path
            d="M12.09 22c5.08 0 4.76-2.21 4.76-2.21l-.01-2.29H12v-.69h6.83s3.17.35 3.17-4.75c0-5.11-2.76-4.93-2.76-4.93h-1.65v2.32s.09 2.76-2.72 2.76H10.18s-2.63-.04-2.63 2.55v4.59s-.55 2.66 4.54 2.66zm2.58-1.48a.93.93 0 1 1 0-1.86.93.93 0 0 1 0 1.86z"
            fill="#FFE052"
          />
        </svg>
      </motion.div>

      {/* 5. MIDDLE-RIGHT: OpenAI / ChatGPT Swirl */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        whileHover={{ scale: 1.15, rotate: 6 }}
        className="absolute -right-2 sm:-right-3 top-[50%] -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#1A1D20] border border-black/5 dark:border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-transform group"
        title="OpenAI & LLMs"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#111315] dark:text-[#F6F5F3] group-hover:rotate-90 transition-transform duration-700"
          fill="currentColor"
        >
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1449-2.8007l3.854-2.2238 3.854 2.2238v4.4477l-3.854 2.2237-3.854-2.2237z" />
        </svg>
      </motion.div>

      {/* 6. BOTTOM-RIGHT: Node.js (Green Hexagon) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        whileHover={{ scale: 1.15, rotate: -6 }}
        className="absolute right-1 sm:right-1 bottom-12 sm:bottom-14 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#1A1D20] border border-black/5 dark:border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.6)] cursor-pointer transition-transform group"
        title="Node.js Backend & APIs"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#539E43] group-hover:scale-110 transition-transform" fill="currentColor">
          <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.31L4.5 8.65v6.7l7.5 4.34 7.5-4.34V8.65L12 4.31zm1.2 4.19c1.9 0 2.9 1.1 2.9 2.7v.5h-1.8v-.5c0-.8-.4-1.3-1.1-1.3s-1.1.4-1.1 1.1c0 .7.4 1 1.7 1.4 2.1.6 3.1 1.4 3.1 3.1 0 1.9-1.3 3-3.1 3s-3.1-1.1-3.1-3.1v-.6h1.8v.6c0 1 .5 1.5 1.3 1.5s1.3-.5 1.3-1.3c0-.8-.5-1.2-1.8-1.6-1.9-.6-3-1.3-3-2.9 0-1.8 1.2-2.9 2.9-2.9z" />
        </svg>
      </motion.div>
    </div>
  );
}
