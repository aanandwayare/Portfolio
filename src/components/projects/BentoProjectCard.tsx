'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Lock,
  Layers,
  Cpu,
  Smartphone,
  Globe,
  Radio,
} from 'lucide-react';
import { BentoProject, BentoCardSize } from '@/data/bentoProjectsData';

interface BentoProjectCardProps {
  project: BentoProject;
  onOpenDetail: (project: BentoProject) => void;
}

export default function BentoProjectCard({
  project,
  onOpenDetail,
}: BentoProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Bento span calculation based on card size
  const getSizeClasses = (size: BentoCardSize) => {
    switch (size) {
      case 'featured-xl':
        return 'col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 md:row-span-2 min-h-[460px] lg:min-h-[520px]';
      case 'wide':
        return 'col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 min-h-[360px]';
      case 'square':
        return 'col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 row-span-1 min-h-[360px]';
      case 'compact':
        return 'col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 row-span-1 min-h-[360px]';
      default:
        return 'col-span-1 row-span-1 min-h-[360px]';
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case 'Featured':
        return 'bg-copper-400';
      case 'Production':
        return 'bg-emerald-400';
      case 'Live':
        return 'bg-cyan-400';
      case 'Open Source':
        return 'bg-purple-400';
      default:
        return 'bg-primary';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, type: 'spring', damping: 25, stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenDetail(project)}
      className={`group relative rounded-[28px] overflow-hidden border border-border/80 bg-surface/50 dark:bg-[#141618]/70 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-copper-500/10 transition-all duration-500 cursor-pointer flex flex-col justify-between ${getSizeClasses(
        project.size
      )}`}
    >
      {/* Dynamic Ambient Hover Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/70 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-80" />

      {/* Subtle border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-primary/40 transition-colors duration-500 z-20" />

      {/* Hero Background Visual with Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black/50">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-elevated animate-pulse" />
        )}
      </div>

      {/* TOP HEADER: Badges & Status */}
      <div className="relative z-20 p-5 sm:p-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Category Chip */}
          <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-surface/80 dark:bg-[#1A1D20]/85 border border-border/90 text-foreground backdrop-blur-md shadow-sm">
            {project.category}
          </span>

          {/* Featured Badge */}
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-copper-500/20 text-copper-300 border border-copper-500/40 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-copper-400" />
              Featured
            </span>
          )}
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111315]/80 border border-white/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${getStatusDotColor(
                project.status
              )}`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${getStatusDotColor(
                project.status
              )}`}
            />
          </span>
          <span className="text-[10px] font-mono text-muted-foreground">
            {project.status}
          </span>
        </div>
      </div>

      {/* BOTTOM CONTENT: Title, Description, Tech Stack, & Hover Actions */}
      <div className="relative z-20 p-5 sm:p-6 space-y-3.5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3
              className={`font-black font-heading text-white tracking-tight group-hover:text-primary transition-colors duration-300 ${
                project.size === 'featured-xl'
                  ? 'text-2xl sm:text-3xl'
                  : 'text-xl sm:text-2xl'
              }`}
            >
              {project.title}
            </h3>
            <span className="text-xs font-mono text-muted-foreground shrink-0">
              {project.year}
            </span>
          </div>

          <p className="text-xs font-mono text-primary/90 mt-0.5 line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        <p
          className={`text-xs text-muted-foreground leading-relaxed ${
            project.size === 'featured-xl' ? 'line-clamp-3' : 'line-clamp-2'
          }`}
        >
          {project.description}
        </p>

        {/* Floating Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies
            .slice(0, project.size === 'featured-xl' ? 6 : 4)
            .map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-surface/70 dark:bg-[#1E2226]/80 border border-white/10 text-foreground/90 backdrop-blur-md transition-all group-hover:border-primary/30"
              >
                {tech}
              </span>
            ))}
          {project.technologies.length > (project.size === 'featured-xl' ? 6 : 4) && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-surface/50 border border-white/10 text-muted-foreground">
              +{project.technologies.length - (project.size === 'featured-xl' ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Action bar revealed on hover */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          <div className="flex items-center gap-2">
            {project.github && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, '_blank');
                }}
                className="p-1.5 rounded-full bg-surface/80 hover:bg-elevated border border-border text-muted-foreground hover:text-white transition-colors"
                title="View Source Code"
                aria-label="View Source Code"
              >
                <Github className="w-3.5 h-3.5" />
              </button>
            )}
            {project.liveDemo && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveDemo, '_blank');
                }}
                className="p-1.5 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/40 text-primary hover:text-white transition-colors"
                title="View Live Demo"
                aria-label="View Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
