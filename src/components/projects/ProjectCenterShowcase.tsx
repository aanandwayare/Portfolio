'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  BookOpen,
  Maximize2,
  Lock,
  Globe,
  Laptop,
  Smartphone,
  Sparkles,
  ArrowUpRight,
  Layers,
} from 'lucide-react';
import { DashboardProject, MockupType } from '@/data/projectsDashboardData';

interface ProjectCenterShowcaseProps {
  project: DashboardProject;
  onOpenGallery: () => void;
}

export default function ProjectCenterShowcase({
  project,
  onOpenGallery,
}: ProjectCenterShowcaseProps) {
  const [deviceView, setDeviceView] = useState<MockupType>(project.mockupType || 'browser');
  const [imageLoaded, setImageLoaded] = useState(false);

  // Sync default device view when project changes
  React.useEffect(() => {
    setDeviceView(project.mockupType || 'browser');
    setImageLoaded(false);
  }, [project]);

  return (
    <div className="flex flex-col h-full bg-surface/40 dark:bg-[#141618]/60 backdrop-blur-xl border border-border/80 rounded-3xl p-5 sm:p-6 lg:p-7 space-y-6 shadow-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 bg-copper-500/10 blur-[90px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full" />

      {/* Top Header & Device Toggle Toolbar */}
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">{project.emoji}</span>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface border border-border text-foreground font-semibold">
            {project.category}
          </span>
        </div>

        {/* Device Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-surface/80 border border-border text-xs">
          <button
            onClick={() => setDeviceView('browser')}
            className={`p-1.5 rounded-lg transition-colors ${
              deviceView === 'browser'
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Browser Mockup View"
            aria-label="Browser view"
          >
            <Globe className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setDeviceView('laptop')}
            className={`p-1.5 rounded-lg transition-colors ${
              deviceView === 'laptop'
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Laptop Mockup View"
            aria-label="Laptop view"
          >
            <Laptop className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setDeviceView('phone')}
            className={`p-1.5 rounded-lg transition-colors ${
              deviceView === 'phone'
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title="Mobile Mockup View"
            aria-label="Phone view"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Device Mockup Frame */}
      <div className="relative z-10 flex items-center justify-center flex-1 min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]">
        <AnimatePresence mode="wait">
          {/* 1. BROWSER FRAME */}
          {deviceView === 'browser' && (
            <motion.div
              key={`browser-${project.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[580px] rounded-2xl border border-border/80 bg-[#1A1D20] shadow-2xl overflow-hidden group cursor-pointer"
              onClick={onOpenGallery}
            >
              {/* Browser Window Header */}
              <div className="px-4 py-2.5 bg-[#141618] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1F2327] border border-white/5 text-[11px] font-mono text-muted-foreground truncate max-w-[220px]">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span>https://{project.id}.app</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenGallery();
                  }}
                  className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
                  title="Expand Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Browser Content Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-elevated animate-pulse flex items-center justify-center text-xs font-mono text-muted-foreground">
                    Loading Visual Asset...
                  </div>
                )}
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to expand gallery</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. LAPTOP FRAME */}
          {deviceView === 'laptop' && (
            <motion.div
              key={`laptop-${project.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[540px] flex flex-col items-center group cursor-pointer"
              onClick={onOpenGallery}
            >
              {/* Laptop Screen Bezel */}
              <div className="w-full rounded-t-2xl border-4 border-[#24282C] bg-[#141618] shadow-2xl overflow-hidden p-1.5 relative">
                {/* Camera notch dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-black mx-auto mb-1 border border-white/20" />
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-black/40">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                    <Maximize2 className="w-4 h-4" />
                    <span>Click to expand gallery</span>
                  </div>
                </div>
              </div>
              {/* Laptop Base Stand */}
              <div className="w-[112%] h-3.5 bg-gradient-to-r from-[#24282C] via-[#353A40] to-[#24282C] rounded-b-xl border-t border-white/20 shadow-xl flex items-center justify-center">
                <div className="w-12 h-1 bg-[#1A1D20] rounded-full" />
              </div>
            </motion.div>
          )}

          {/* 3. PHONE FRAME */}
          {deviceView === 'phone' && (
            <motion.div
              key={`phone-${project.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="w-[240px] sm:w-[260px] rounded-[36px] border-4 border-[#24282C] bg-[#141618] p-2 shadow-2xl overflow-hidden group cursor-pointer relative"
              onClick={onOpenGallery}
            >
              {/* Dynamic Island */}
              <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 border border-white/10 z-20 flex items-center justify-center" />
              <div className="relative aspect-[9/19] w-full rounded-[24px] overflow-hidden bg-black/40">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="260px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-[11px] font-semibold backdrop-blur-[2px]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Meta Information */}
      <div className="space-y-4 relative z-10">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-foreground tracking-tight flex items-center gap-2">
            <span>{project.title}</span>
          </h3>
          <p className="text-xs sm:text-sm font-mono text-primary mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Technology Tag Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-surface border border-border text-foreground font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-copper-500 via-copper-400 to-copper-600 hover:from-copper-400 hover:to-copper-500 text-white text-xs font-bold shadow-lg shadow-copper-500/25 hover:shadow-copper-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-elevated border border-border text-foreground text-xs font-medium hover:border-primary/40 transition-all"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
              <span>Source Code</span>
            </a>
          )}

          {project.documentation && (
            <a
              href={project.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-elevated border border-border text-muted-foreground hover:text-foreground text-xs font-medium hover:border-primary/40 transition-all"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Case Study</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
