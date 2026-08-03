'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, X, ChevronRight } from 'lucide-react';
import {
  DashboardProject,
  PROJECT_CATEGORIES,
  ProjectCategory,
} from '@/data/projectsDashboardData';

interface ProjectSidebarProps {
  projects: DashboardProject[];
  activeProjectId: string;
  onSelectProject: (id: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ProjectSidebar({
  projects,
  activeProjectId,
  onSelectProject,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: ProjectSidebarProps) {
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'Featured':
        return 'bg-copper-500/15 text-copper-400 border-copper-500/30';
      case 'Production':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Live':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'Open Source':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      default:
        return 'bg-surface text-muted-foreground border-border';
    }
  };

  return (
    <div className="flex flex-col h-full bg-surface/40 dark:bg-[#141618]/60 backdrop-blur-xl border border-border/80 rounded-3xl p-4 sm:p-5 space-y-4 shadow-xl">
      {/* Top Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter projects (e.g. Python, AI)..."
          className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-md shadow-primary/25 border border-primary/40'
                : 'bg-surface/80 text-muted-foreground hover:bg-elevated hover:text-foreground border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vertical Projects List */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 focus:outline-none custom-scrollbar">
        {projects.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-xs font-mono">
            No projects match &quot;{searchQuery}&quot;
          </div>
        ) : (
          projects.map((project) => {
            const isActive = project.id === activeProjectId;
            return (
              <motion.button
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all relative overflow-hidden group ${
                  isActive
                    ? 'bg-elevated/90 dark:bg-[#1E2226] border-primary/50 shadow-lg shadow-primary/10'
                    : 'bg-surface/60 hover:bg-surface border-border/60 hover:border-border'
                }`}
              >
                {/* Active Left Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="active-project-bar"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-copper-400 via-copper-500 to-copper-600 rounded-r"
                  />
                )}

                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    {/* Emoji / Icon Avatar */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-base border shadow-sm transition-transform ${
                        isActive
                          ? 'bg-primary/10 border-primary/30 scale-105'
                          : 'bg-surface border-border group-hover:scale-105'
                      }`}
                    >
                      <span>{project.emoji}</span>
                    </div>

                    <div>
                      <div className="text-xs sm:text-sm font-bold font-heading text-foreground flex items-center gap-1.5">
                        <span>{project.title}</span>
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground truncate max-w-[140px] sm:max-w-[180px]">
                        {project.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-semibold ${getStatusBadgeStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </motion.button>
            );
          })
        )}
      </div>

      {/* Footer Meta */}
      <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span>{projects.length} Projects</span>
        <span className="flex items-center gap-1 text-primary">
          <Sparkles className="w-3 h-3" /> Live Showcase
        </span>
      </div>
    </div>
  );
}
