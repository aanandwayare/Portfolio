'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Layers,
  Activity,
  Milestone,
  Lightbulb,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Images,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Lock,
} from 'lucide-react';
import { BentoProject, bentoProjectsData } from '@/data/bentoProjectsData';

interface BentoProjectDetailModalProps {
  project: BentoProject | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: BentoProject) => void;
}

export default function BentoProjectDetailModal({
  project,
  isOpen,
  onClose,
  onSelectProject,
}: BentoProjectDetailModalProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [fullscreenGalleryOpen, setFullscreenGalleryOpen] = useState<boolean>(false);
  const [expandedChallengeIndex, setExpandedChallengeIndex] = useState<number | null>(0);

  // Reset gallery index on project switch
  useEffect(() => {
    setActiveGalleryIndex(0);
    setExpandedChallengeIndex(0);
  }, [project]);

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (fullscreenGalleryOpen) {
          setFullscreenGalleryOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, fullscreenGalleryOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const relatedProjects = bentoProjectsData.filter((p) =>
    project.relatedProjectIds?.includes(p.id)
  );

  return (
    <AnimatePresence>
      <div key="modal-root" className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl z-0"
        />

        {/* Centering wrapper */}
        <div className="relative z-10 min-h-full flex items-start sm:items-center justify-center p-3 sm:p-5 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#141618] border border-border/80 rounded-[28px] sm:rounded-[32px] shadow-2xl flex flex-col my-4"
          >
          {/* TOP STICKY BAR: Project Name & Back/Close */}
          <div className="sticky top-0 z-30 px-6 py-4 bg-[#141618]/90 backdrop-blur-xl border-b border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface border border-border text-foreground font-bold">
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg font-black font-heading text-white tracking-tight truncate max-w-xs sm:max-w-md">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-surface/80 hover:bg-elevated border border-border text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              aria-label="Close Project Detail"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline font-mono">ESC</span>
            </button>
          </div>

          {/* SCROLLABLE BODY */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10 custom-scrollbar">
            {/* 1. HERO BANNER & SIMULATED BROWSER */}
            <div className="rounded-2xl border border-border/80 bg-[#1A1D20] shadow-2xl overflow-hidden group">
              {/* Browser Window Header */}
              <div className="px-4 py-2.5 bg-[#111315] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A1D20] border border-white/5 text-[11px] font-mono text-muted-foreground truncate max-w-[240px]">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span>https://{project.id}.app</span>
                </div>

                <div className="text-[11px] font-mono text-primary font-bold">
                  {project.status}
                </div>
              </div>

              {/* Hero Image */}
              <div
                className="relative aspect-[16/9] w-full overflow-hidden bg-black/60 cursor-pointer"
                onClick={() => setFullscreenGalleryOpen(true)}
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to expand image</span>
                </div>
              </div>
            </div>

            {/* 2. TITLE, SUBTITLE & ACTION BUTTONS */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border/60 pb-8">
              <div className="space-y-1.5">
                <h1 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base font-mono text-primary">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
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
                    <Github className="w-4 h-4 text-muted-foreground" />
                    <span>Source Code</span>
                  </a>
                )}

                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-elevated border border-border text-muted-foreground hover:text-foreground text-xs font-medium hover:border-primary/40 transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>Docs</span>
                  </a>
                )}
              </div>
            </div>

            {/* 3. OVERVIEW & PROBLEM / SOLUTION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Statement Card */}
              <div className="p-6 rounded-2xl bg-surface/60 dark:bg-[#1A1D20]/80 border border-rose-500/30 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  The Problem & Motivation
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Engineering Solution Card */}
              <div className="p-6 rounded-2xl bg-surface/60 dark:bg-[#1A1D20]/80 border border-emerald-500/30 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  The Architectural Solution
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 4. BENCHMARKED SCALE & METRICS */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  Benchmarked Scale & Performance
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-4 rounded-2xl bg-surface/70 border border-border/70 space-y-1"
                    >
                      <div className="text-[10px] font-mono text-muted-foreground uppercase">
                        {metric.label}
                      </div>
                      <div className="text-xl font-black font-heading text-white tracking-tight">
                        {metric.value}
                      </div>
                      {metric.change && (
                        <div className="text-[11px] font-mono text-primary font-semibold">
                          {metric.change}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. ARCHITECTURE DIAGRAM / FLOW */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                End-to-End System Pipeline
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.architecture.map((node, index) => (
                  <div
                    key={node.step}
                    className="p-4 rounded-2xl bg-surface/60 dark:bg-[#1A1D20]/70 border border-border/70 hover:border-primary/40 transition-all space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {node.step}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          node.color || 'border-border text-muted-foreground'
                        }`}
                      >
                        {node.tech}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. COMPLETE TECH STACK */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Complete Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-surface/80 border border-border text-foreground font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. CORE FEATURES & CHALLENGES ACCORDION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features Checklist */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Functional Features
                </h4>

                <div className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface/70 border border-border/70 flex items-start gap-2.5 text-xs text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges Accordion */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  Engineering Challenges & Solutions
                </h4>

                <div className="space-y-3">
                  {project.challenges.map((challenge, idx) => {
                    const isExpanded = expandedChallengeIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-border/70 bg-surface/60 overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedChallengeIndex(isExpanded ? null : idx)
                          }
                          className="w-full p-3.5 text-left flex items-start justify-between gap-2 hover:bg-surface transition-colors"
                        >
                          <div className="text-xs font-bold text-white flex items-center gap-2">
                            <span className="text-rose-400 font-mono text-[11px]">
                              [Challenge #{idx + 1}]
                            </span>
                            <span className="line-clamp-1">
                              {challenge.problem}
                            </span>
                          </div>
                        </button>

                        <div className="px-3.5 pb-3.5 pt-1 space-y-2 text-xs border-t border-border/40">
                          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                            <strong className="block text-[10px] font-mono uppercase">
                              Solution:
                            </strong>
                            {challenge.solution}
                          </div>
                          <div className="p-2.5 rounded-lg bg-copper-500/10 border border-copper-500/20 text-copper-300">
                            <strong className="block text-[10px] font-mono uppercase">
                              Result:
                            </strong>
                            {challenge.result}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 8. LESSONS LEARNED & INSIGHTS */}
            {project.lessonsLearned && project.lessonsLearned.length > 0 && (
              <div className="p-6 rounded-2xl bg-surface/60 dark:bg-[#1A1D20]/80 border border-primary/30 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  Key Lessons Learned & Architectural Insights
                </div>
                <div className="space-y-2">
                  {project.lessonsLearned.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. INTERACTIVE GALLERY & SCREENSHOT STRIP */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Images className="w-4 h-4 text-primary" />
                    Visual Artifacts & Screenshots
                  </h4>
                  <span className="text-xs font-mono text-muted-foreground">
                    {project.gallery.length} Snapshots
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.gallery.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveGalleryIndex(idx);
                        setFullscreenGalleryOpen(true);
                      }}
                      className="group rounded-2xl overflow-hidden border border-border/80 bg-surface/60 cursor-pointer space-y-2 p-2 hover:border-primary transition-all"
                    >
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/40">
                        <Image
                          src={item.url}
                          alt={item.title}
                          fill
                          sizes="300px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                          Expand
                        </div>
                      </div>
                      <div className="px-1">
                        <div className="text-xs font-bold text-white truncate">
                          {item.title}
                        </div>
                        <p className="text-[11px] text-muted-foreground line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 10. RELATED PROJECTS FOOTER */}
            {relatedProjects.length > 0 && (
              <div className="pt-8 border-t border-border/60 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Explore Related Projects
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedProjects.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectProject(rel)}
                      className="p-4 rounded-2xl bg-surface/60 hover:bg-surface border border-border/80 hover:border-primary/40 text-left transition-all group space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-primary font-bold">
                          {rel.category}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        {rel.title}
                      </div>
                      <p className="text-[11px] text-muted-foreground line-clamp-1">
                        {rel.subtitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {fullscreenGalleryOpen && project.gallery && project.gallery.length > 0 && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
          <button
            onClick={() => setFullscreenGalleryOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden">
            <Image
              src={project.gallery[activeGalleryIndex]?.url || project.heroImage}
              alt={project.gallery[activeGalleryIndex]?.title || project.title}
              fill
              sizes="1200px"
              className="object-contain"
            />
          </div>

          {/* Prev/Next buttons */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveGalleryIndex((prev) =>
                    prev === 0 ? project.gallery.length - 1 : prev - 1
                  )
                }
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setActiveGalleryIndex((prev) =>
                    (prev + 1) % project.gallery.length
                  )
                }
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
      </div>
    </AnimatePresence>
  );
}
