'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid,
  Search,
  X,
  Sparkles,
  Layers,
  SlidersHorizontal,
  FolderCode,
} from 'lucide-react';
import Badge from '../ui/Badge';
import BentoProjectCard from '../projects/BentoProjectCard';
import BentoProjectDetailModal from '../projects/BentoProjectDetailModal';
import {
  bentoProjectsData,
  BentoProject,
  BENTO_CATEGORIES,
} from '@/data/bentoProjectsData';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<BentoProject | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return bentoProjectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenDetail = (project: BentoProject) => {
    setSelectedProject(project);
    setDetailModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-28 z-10 scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[600px] h-[600px] bg-copper-500/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" />

      {/* Grid Pattern Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-12">
          <Badge variant="primary" icon={<LayoutGrid className="w-3.5 h-3.5" />}>
            BENTO PROJECT SHOWCASE
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-foreground tracking-tight">
            Featured Works &{' '}
            <span className="bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
              Software Gallery
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Inspired by Apple, Vercel, Linear, and Raycast. An organic Bento Grid
            showcasing production-grade AI swarms, real-time developer clouds, and full-stack architectures.
          </p>
        </div>

        {/* Filter Toolbar: Categories + Search Bar */}
        <div className="sticky top-20 z-30 mb-10 p-3 sm:p-4 rounded-3xl bg-surface/70 dark:bg-[#141618]/80 backdrop-blur-xl border border-border/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {BENTO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-primary/40 scale-105'
                    : 'bg-surface/80 text-muted-foreground hover:bg-elevated hover:text-foreground border border-border/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech (e.g. Python, AI)..."
              className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm rounded-2xl border border-border/80 bg-surface/90 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Bento Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[auto]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-16 text-center rounded-3xl bg-surface/40 border border-border/60 p-8 space-y-3"
              >
                <p className="text-muted-foreground text-sm font-mono">
                  No projects match your search for &quot;{searchQuery}&quot; in{' '}
                  {selectedCategory}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-md shadow-primary/20"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              filteredProjects.map((project) => (
                <BentoProjectCard
                  key={project.id}
                  project={project}
                  onOpenDetail={handleOpenDetail}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer Hint */}
        <div className="pt-10 flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Click any Bento card to explore full architectural case studies</span>
        </div>
      </div>

      {/* Shared Layout Fullscreen Detail Modal */}
      <BentoProjectDetailModal
        project={selectedProject}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
}
