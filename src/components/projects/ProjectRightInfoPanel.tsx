'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Activity,
  Milestone,
  AlertCircle,
  CheckCircle2,
  Images,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Cpu,
  Database,
  Globe,
  Terminal,
} from 'lucide-react';
import { DashboardProject } from '@/data/projectsDashboardData';

interface ProjectRightInfoPanelProps {
  project: DashboardProject;
  onOpenGalleryIndex: (index: number) => void;
}

export default function ProjectRightInfoPanel({
  project,
  onOpenGalleryIndex,
}: ProjectRightInfoPanelProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'metrics' | 'timeline' | 'challenges' | 'features'>('architecture');
  const [expandedChallengeIndex, setExpandedChallengeIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col h-full bg-surface/40 dark:bg-[#141618]/60 backdrop-blur-xl border border-border/80 rounded-3xl p-5 sm:p-6 space-y-5 shadow-xl overflow-hidden">
      {/* Top Tab Switcher */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar border-b border-border/60 text-xs">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap ${
            activeTab === 'architecture'
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-surface'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Architecture</span>
        </button>

        <button
          onClick={() => setActiveTab('metrics')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap ${
            activeTab === 'metrics'
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-surface'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>Metrics</span>
        </button>

        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap ${
            activeTab === 'timeline'
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-surface'
          }`}
        >
          <Milestone className="w-3.5 h-3.5" />
          <span>Timeline</span>
        </button>

        <button
          onClick={() => setActiveTab('challenges')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap ${
            activeTab === 'challenges'
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-surface'
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Challenges</span>
        </button>

        <button
          onClick={() => setActiveTab('features')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap ${
            activeTab === 'features'
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-surface'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Features</span>
        </button>
      </div>

      {/* Main Tab Content Area */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-5 custom-scrollbar">
        {/* Executive Overview Block */}
        <div className="p-3.5 rounded-2xl bg-surface/70 border border-border/80 space-y-1.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Executive Overview
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* TAB 1: ARCHITECTURE FLOW */}
        {activeTab === 'architecture' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              End-to-End System Pipeline
            </div>

            <div className="space-y-2.5">
              {project.architecture.map((node, index) => (
                <div
                  key={node.step}
                  className="p-3.5 rounded-xl bg-surface/60 hover:bg-surface border border-border/60 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                      {node.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        node.badgeColor || 'border-border text-muted-foreground'
                      }`}
                    >
                      {node.tech}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    {node.desc}
                  </p>

                  {/* Flow arrow connecting down */}
                  {index < project.architecture.length - 1 && (
                    <div className="flex justify-center pt-2 -mb-1 opacity-40">
                      <div className="w-0.5 h-3 bg-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 2: METRICS */}
        {activeTab === 'metrics' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Benchmarked Performance & Scale
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3 rounded-xl bg-surface/70 border border-border/70 hover:border-primary/40 transition-colors space-y-1"
                >
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">
                    {metric.label}
                  </div>
                  <div className="text-lg font-black font-heading text-foreground tracking-tight">
                    {metric.value}
                  </div>
                  {metric.change && (
                    <div className="text-[10px] font-mono text-primary font-medium">
                      {metric.change}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 3: TIMELINE */}
        {activeTab === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Lifecycle Execution Phases
            </div>

            <div className="relative pl-5 border-l-2 border-border/70 space-y-4 py-1">
              {project.timeline.map((phase) => (
                <div key={phase.phase} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full border-2 border-primary bg-surface group-hover:bg-primary transition-colors flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>

                  <div className="text-xs font-bold text-foreground">
                    {phase.phase}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 4: CHALLENGES ACCORDION */}
        {activeTab === 'challenges' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Engineering Hurdles & Solutions
            </div>

            <div className="space-y-2.5">
              {project.challenges.map((challenge, index) => {
                const isExpanded = expandedChallengeIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-border/70 bg-surface/60 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() =>
                        setExpandedChallengeIndex(isExpanded ? null : index)
                      }
                      className="w-full p-3.5 text-left flex items-start justify-between gap-2 hover:bg-surface transition-colors"
                    >
                      <div className="text-xs font-bold text-foreground flex items-center gap-2">
                        <span className="text-rose-400 font-mono text-[11px]">
                          [Problem #{index + 1}]
                        </span>
                        <span className="line-clamp-1">{challenge.problem}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${
                          isExpanded ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-3.5 pb-3.5 pt-1 space-y-2.5 text-[11px] border-t border-border/50"
                        >
                          <div className="space-y-1">
                            <span className="font-mono text-muted-foreground uppercase text-[10px]">
                              Full Problem:
                            </span>
                            <p className="text-muted-foreground leading-relaxed">
                              {challenge.problem}
                            </p>
                          </div>

                          <div className="space-y-1 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <span className="font-mono text-emerald-400 font-semibold uppercase text-[10px]">
                              Engineering Solution:
                            </span>
                            <p className="text-foreground leading-relaxed">
                              {challenge.solution}
                            </p>
                          </div>

                          <div className="space-y-1 p-2.5 rounded-lg bg-copper-500/10 border border-copper-500/20">
                            <span className="font-mono text-copper-400 font-semibold uppercase text-[10px]">
                              Impact & Result:
                            </span>
                            <p className="text-foreground leading-relaxed">
                              {challenge.result}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* TAB 5: FEATURES CHECKLIST */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Core Capabilities & Features
            </div>

            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-surface/70 border border-border/70 flex items-start gap-2.5 text-xs text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gallery Thumbnails Strip */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="pt-3 border-t border-border/60 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Images className="w-3.5 h-3.5 text-primary" /> Visual Artifacts
              </span>
              <span>{project.gallery.length} Snapshots</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {project.gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onOpenGalleryIndex(idx)}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-border/80 hover:border-primary transition-all cursor-pointer"
                  title={item.title}
                >
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold">
                    View
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
