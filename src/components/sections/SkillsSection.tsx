'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Search,
  Sparkles,
  Network,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
  Share2,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import SkillConstellationCanvas from '../skills/SkillConstellationCanvas';
import SkillDetailsDrawer from '../skills/SkillDetailsDrawer';
import { SkillTechIcon } from '../skills/SkillTechIcon';
import {
  skillsConstellationData,
  SKILL_CATEGORIES,
  CATEGORY_COLORS,
  ConstellationSkill,
} from '@/data/skillsConstellation';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'constellation' | 'grid'>('constellation');

  // Active selected skill object
  const selectedSkill = useMemo(() => {
    if (!selectedSkillId) return null;
    return skillsConstellationData.find((s) => s.id === selectedSkillId) || null;
  }, [selectedSkillId]);

  // Filtered skills for Grid View
  const filteredGridSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return skillsConstellationData.filter((skill) => {
      const matchesCategory =
        activeCategory === 'All' || skill.category === activeCategory;
      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="relative py-24 z-10 scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-[500px] h-[500px] bg-copper-500/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-10">
          <Badge variant="primary" icon={<Network className="w-3.5 h-3.5" />}>
            INTERACTIVE TECHNOLOGY CONSTELLATION
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-foreground tracking-tight">
            Interconnected{' '}
            <span className="bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
              Skill Constellation
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            An organic technology graph visualizing dependencies and relationships across modern
            frontend, distributed backend, relational databases, and autonomous AI systems.
          </p>
        </div>

        {/* Toolbar: Category Filters, Search, & View Mode Switcher */}
        <div className="space-y-4 mb-8">
          {/* Top Row: Category Filter Chips & View Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === 'All'
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-primary/40'
                    : 'bg-surface text-muted-foreground hover:bg-elevated border border-border hover:text-foreground'
                }`}
              >
                All Ecosystems ({skillsConstellationData.length})
              </button>

              {SKILL_CATEGORIES.map((cat) => {
                const count = skillsConstellationData.filter((s) => s.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-primary/40'
                        : 'bg-surface text-muted-foreground hover:bg-elevated border border-border hover:text-foreground'
                    }`}
                  >
                    {cat} <span className="opacity-60 text-[10px]">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-full bg-surface border border-border">
              <button
                onClick={() => setViewMode('constellation')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'constellation'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Interactive Network Constellation"
              >
                <Network className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Constellation</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title="Categorized Matrix Grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid Matrix</span>
              </button>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technology (e.g. Python, Next.js, LangChain, MySQL, React)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-full border border-border bg-surface text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 backdrop-blur-md shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* View Mode 1: Interactive Constellation Canvas */}
        {viewMode === 'constellation' && (
          <div className="relative">
            <SkillConstellationCanvas
              selectedSkillId={selectedSkillId}
              onSelectSkill={(id) => setSelectedSkillId(id)}
              activeCategory={activeCategory}
              searchQuery={searchQuery}
            />

            {/* Side Details Drawer */}
            <SkillDetailsDrawer
              skill={selectedSkill}
              onClose={() => setSelectedSkillId(null)}
              onSelectSkill={(id) => setSelectedSkillId(id)}
            />
          </div>
        )}

        {/* View Mode 2: Categorized Grid Matrix */}
        {viewMode === 'grid' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredGridSkills.map((skill) => {
                const categoryStyle = CATEGORY_COLORS[skill.category];
                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => {
                      setSelectedSkillId(skill.id);
                      setViewMode('constellation');
                    }}
                    className="p-5 rounded-2xl border border-border bg-surface hover:border-primary/40 transition-all cursor-pointer group shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-11 h-11 rounded-xl p-2 flex items-center justify-center border shadow-md"
                            style={{
                              backgroundColor: 'rgba(26,29,32,0.8)',
                              borderColor: skill.color || 'rgba(255,255,255,0.15)',
                            }}
                          >
                            <SkillTechIcon iconName={skill.iconName} className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                              {skill.name}
                            </h3>
                            <span
                              className={`text-[11px] font-mono ${categoryStyle.text}`}
                            >
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-elevated border border-border text-primary font-medium">
                          {skill.experienceYears}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-border mt-4 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Share2 className="w-3.5 h-3.5 text-primary" />
                        <span>{skill.relatedSkills.length} Connections</span>
                      </div>
                      <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
