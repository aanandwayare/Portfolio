'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import Button from '../ui/Button';
import HeroProfileVisual from './HeroProfileVisual';

interface HeroSectionProps {
  onOpenAI: () => void;
}

const roles = [
  'Full Stack Developer',
  'AI / ML Systems Engineer',
  'Next.js & React Specialist',
  'Autonomous Agent Architect',
  'Scalable Cloud Engineer',
];

export default function HeroSection({ onOpenAI }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient radial gradients - Copper & Graphite */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] bg-gradient-to-tr from-copper-500/15 via-copper-600/10 to-transparent blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[360px] h-[360px] bg-copper-500/10 blur-[110px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Typewriter & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#3EA27A]/30 bg-[#3EA27A]/10 backdrop-blur-md shadow-[0_0_15px_rgba(62,162,122,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3EA27A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3EA27A]"></span>
              </span>
              <span className="text-xs font-mono text-[#3EA27A] font-medium tracking-wide">
                AVAILABLE FOR FULL-TIME ROLES & AI PROJECTS
              </span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-foreground">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
                  Anand Wayare
                </span>
              </h1>

              {/* Typewriter role ticker */}
              <div className="flex items-center justify-center lg:justify-start gap-2 h-10">
                <span className="text-xl sm:text-2xl font-mono text-muted-foreground font-light">
                  I engineer
                </span>
                <div className="inline-flex items-center px-3 py-1 rounded-xl bg-surface border border-border backdrop-blur-md shadow-sm">
                  <span className="text-lg sm:text-xl font-heading font-semibold text-primary">
                    {currentText}
                  </span>
                  <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Tagline & Summary */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.tagline} Crafting resilient, production-grade cloud architectures
              and autonomous multi-agent pipelines with meticulous executive polish.
            </p>

            {/* Call to Actions matching reference buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo('projects')}
                icon={<ArrowRight className="w-4 h-4" />}
                className="rounded-full shadow-lg shadow-primary/20 px-6 py-3"
              >
                Explore projects
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo('resume')}
                icon={<Download className="w-4 h-4 text-primary" />}
                className="rounded-full px-6 py-3"
              >
                Download resume
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onOpenAI}
                className="rounded-full border border-border hover:border-primary/40 px-6 py-3"
                icon={<Sparkles className="w-4 h-4 text-primary" />}
              >
                Let&apos;s talk
              </Button>
            </div>

            {/* Social Links & Quick Contact Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-muted-foreground">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border bg-surface hover:bg-elevated hover:text-foreground transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border bg-surface hover:bg-elevated hover:text-primary transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.email}
                  className="p-2 rounded-full border border-border bg-surface hover:bg-elevated hover:text-primary transition-all hover:scale-110 shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Visual with circular frame and 6 orbiting squircle badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <HeroProfileVisual />
          </motion.div>
        </div>

        {/* Dynamic Metric Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl border border-border bg-surface/60 backdrop-blur-md text-center hover:border-primary/40 transition-all group shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest group-hover:text-primary">
              Scroll Down
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
