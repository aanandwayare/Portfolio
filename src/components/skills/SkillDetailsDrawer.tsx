'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  FolderGit2,
  Share2,
  CheckCircle2,
} from 'lucide-react';
import { ConstellationSkill, CATEGORY_COLORS, skillsConstellationData } from '@/data/skillsConstellation';
import { SkillTechIcon } from './SkillTechIcon';

interface SkillDetailsDrawerProps {
  skill: ConstellationSkill | null;
  onClose: () => void;
  onSelectSkill: (skillId: string) => void;
}

export default function SkillDetailsDrawer({
  skill,
  onClose,
  onSelectSkill,
}: SkillDetailsDrawerProps) {
  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!skill) return null;

  const categoryStyle = CATEGORY_COLORS[skill.category] || {
    text: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    glow: 'rgba(194,122,69,0.3)',
  };

  const relatedSkillObjects = skill.relatedSkills
    .map((id) => skillsConstellationData.find((s) => s.id === id))
    .filter(Boolean) as ConstellationSkill[];

  return (
    <AnimatePresence>
      <motion.div
        key="drawer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        aria-hidden="true"
      />

      <motion.aside
        key={`drawer-${skill.id}`}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        className="fixed lg:absolute top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] lg:w-[390px] h-full bg-[#1A1D20]/95 dark:bg-[#1A1D20]/95 bg-white/95 backdrop-blur-2xl border-l border-border shadow-[0_0_50px_rgba(0,0,0,0.4)] flex flex-col justify-between overflow-y-auto"
        role="dialog"
        aria-labelledby={`skill-title-${skill.id}`}
      >
        {/* Top Header */}
        <div className="p-6 space-y-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border} font-medium tracking-wide flex items-center gap-1.5`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {skill.category}
            </span>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-border bg-surface hover:bg-elevated hover:text-foreground text-muted-foreground transition-all"
              aria-label="Close skill details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Skill Title & Icon Hero */}
          <div className="flex items-center gap-4 pt-2">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 border shadow-xl relative overflow-hidden"
              style={{
                backgroundColor: 'rgba(26, 29, 32, 0.8)',
                borderColor: skill.color || 'rgba(255,255,255,0.15)',
                boxShadow: `0 8px 25px ${skill.glowColor}`,
              }}
            >
              <SkillTechIcon iconName={skill.iconName} className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 id={`skill-title-${skill.id}`} className="text-xl font-bold font-heading text-foreground">
                {skill.name}
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span>{skill.experienceYears} Experience</span>
                <span>•</span>
                <span className="text-primary font-semibold">{skill.proficiency}% Mastery</span>
              </div>
            </div>
          </div>

          {/* Proficiency Meter */}
          <div className="space-y-1.5 p-3.5 rounded-2xl bg-surface/80 border border-border">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-muted-foreground">Ecosystem Proficiency</span>
              <span className="text-foreground font-bold">{skill.proficiency}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-elevated overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-copper-500 via-copper-400 to-copper-300"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Overview & Application
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Projects Using This Skill */}
          {skill.projects && skill.projects.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-primary" />
                Featured Projects
              </div>
              <div className="space-y-2">
                {skill.projects.map((proj) => (
                  <div
                    key={proj.name}
                    className="p-3 rounded-xl bg-surface/70 border border-border hover:border-primary/40 transition-colors"
                  >
                    <div className="text-xs font-semibold text-foreground flex items-center justify-between">
                      <span>{proj.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-[#3EA27A]" />
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground mt-0.5">
                      {proj.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Connected Skills */}
          {relatedSkillObjects.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-primary" />
                Connected Constellation Nodes ({relatedSkillObjects.length})
              </div>
              <div className="flex flex-wrap gap-2">
                {relatedSkillObjects.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectSkill(rel.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-surface hover:bg-elevated hover:border-primary/50 text-foreground text-xs font-medium transition-all group"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <SkillTechIcon iconName={rel.iconName} className="w-3.5 h-3.5" />
                    </div>
                    <span>{rel.name}</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-4 border-t border-border bg-surface/50 text-center">
          <p className="text-[11px] font-mono text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 rounded bg-elevated border border-border text-foreground">Esc</kbd> to close panel
          </p>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
