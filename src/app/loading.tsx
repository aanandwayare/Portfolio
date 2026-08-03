'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  // Animate progress bar from 0 → 100
  useEffect(() => {
    const steps = [
      { target: 30, delay: 0, duration: 400 },
      { target: 65, delay: 420, duration: 600 },
      { target: 88, delay: 1060, duration: 500 },
      { target: 100, delay: 1700, duration: 300 },
    ];

    steps.forEach(({ target, delay }) => {
      setTimeout(() => setProgress(target), delay);
    });
  }, []);

  // Animated ellipsis for "Loading..."
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 420);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111315] overflow-hidden">

      {/* Ambient orange glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF6B00]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#FF8C35]/8 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #FF6B00 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center gap-8 px-6"
      >
        {/* AW Logo Mark */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="relative flex items-center justify-center w-16 h-16 rounded-2xl p-[2px]"
          style={{
            background: 'linear-gradient(135deg, #FF6B00, #FF8C35, #FFB36A)',
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-[#111315] rounded-[14px]">
            <span
              className="font-black text-xl tracking-tight"
              style={{
                fontFamily: 'Space Grotesk, system-ui, sans-serif',
                background: 'linear-gradient(135deg, #FFB36A, #FF8C35, #FF6B00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AW
            </span>
          </div>
          {/* Spinning outer ring */}
          <div
            className="absolute inset-[-4px] rounded-[20px] border border-transparent animate-spin"
            style={{
              borderTopColor: '#FF6B00',
              borderRightColor: 'transparent',
              animationDuration: '2s',
            }}
          />
        </motion.div>

        {/* Loading Label & bar block */}
        <div className="flex flex-col items-center gap-3 w-full max-w-xs sm:max-w-sm">

          {/* "Loading..." label above bar */}
          <div className="flex items-center justify-between w-full">
            <span
              className="text-xs font-mono font-semibold tracking-widest uppercase"
              style={{ color: '#A6A39C', letterSpacing: '0.2em' }}
            >
              Loading<span className="inline-block w-5 text-left">{dots}</span>
            </span>
            <span
              className="text-xs font-mono tabular-nums"
              style={{ color: '#FF6B00' }}
            >
              {progress}%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div
            className="relative w-full h-[5px] rounded-full overflow-hidden"
            style={{ background: 'rgba(255, 107, 0, 0.12)' }}
          >
            {/* Animated fill */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #FF6B00, #FF8C35, #FFB36A)',
                boxShadow: '0 0 12px rgba(255, 107, 0, 0.6), 0 0 28px rgba(255, 107, 0, 0.25)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            />

            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-y-0 w-12 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
              }}
              animate={{ left: ['-10%', '110%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
            />
          </div>

          {/* "Full Stack + AI Engineer" below bar */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[11px] font-mono tracking-[0.3em] uppercase text-center"
            style={{ color: '#66645E' }}
          >
            Full Stack{' '}
            <span style={{ color: '#FF6B00', fontWeight: 700 }}>+</span>
            {' '}AI Engineer
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
