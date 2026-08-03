'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  FileText,
  Code2,
  FolderCode,
  User,
  GraduationCap,
  Mail,
  Sparkles,
  ExternalLink,
  Copy,
} from 'lucide-react';
import { projectsData, skillsData, personalInfo } from '@/data/portfolioData';
import { useToast } from '../ui/Toast';
import { copyToClipboard } from '@/lib/utils';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAI: (initialPrompt?: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  icon: any;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenAI }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { showToast } = useToast();

  const items = useMemo<CommandItem[]>(() => {
    const q = query.toLowerCase().trim();

    const sections: CommandItem[] = [
      {
        id: 'hero',
        title: 'Home / Hero',
        category: 'Navigation',
        icon: User,
        action: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onClose();
        },
      },
      {
        id: 'about',
        title: 'About Anand & Philosophy',
        category: 'Navigation',
        icon: User,
        action: () => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        },
      },
      {
        id: 'skills',
        title: 'Skills & Tech Stack Matrix',
        category: 'Navigation',
        icon: Code2,
        action: () => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        },
      },
      {
        id: 'projects',
        title: 'Featured Projects & Case Studies',
        category: 'Navigation',
        icon: FolderCode,
        action: () => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        },
      },
      {
        id: 'experience',
        title: 'Education & Certifications',
        category: 'Navigation',
        icon: GraduationCap,
        action: () => {
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        },
      },
      {
        id: 'resume',
        title: 'ATS Resume View & Export',
        category: 'Navigation',
        icon: FileText,
        action: () => {
          document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        },
      },
      {
        id: 'contact',
        title: 'Contact Anand',
        category: 'Navigation',
        icon: Mail,
        action: () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          onClose();
        },
      },
    ];

    const actions: CommandItem[] = [
      {
        id: 'action-ai',
        title: 'Ask AI Assistant',
        subtitle: 'Interact with the portfolio autonomous assistant',
        category: 'Actions',
        icon: Sparkles,
        action: () => {
          onClose();
          onOpenAI();
        },
      },
      {
        id: 'action-print',
        title: 'Print / Save ATS Resume PDF',
        subtitle: 'Generates standard clean printable document',
        category: 'Actions',
        icon: FileText,
        action: () => {
          onClose();
          window.print();
        },
      },
      {
        id: 'action-copy-email',
        title: 'Copy Email to Clipboard',
        subtitle: personalInfo.email,
        category: 'Actions',
        icon: Copy,
        action: () => {
          copyToClipboard(personalInfo.email);
          showToast('Email address copied to clipboard!');
          onClose();
        },
      },
      {
        id: 'action-copy-phone',
        title: 'Copy Phone Number',
        subtitle: personalInfo.phone,
        category: 'Actions',
        icon: Copy,
        action: () => {
          copyToClipboard(personalInfo.phone);
          showToast('Phone number copied to clipboard!');
          onClose();
        },
      },
      {
        id: 'action-github',
        title: 'Open GitHub Profile',
        subtitle: personalInfo.socials.github,
        category: 'External',
        icon: ExternalLink,
        action: () => {
          window.open(personalInfo.socials.github, '_blank');
          onClose();
        },
      },
      {
        id: 'action-linkedin',
        title: 'Open LinkedIn Profile',
        subtitle: personalInfo.socials.linkedin,
        category: 'External',
        icon: ExternalLink,
        action: () => {
          window.open(personalInfo.socials.linkedin, '_blank');
          onClose();
        },
      },
    ];

    const projects: CommandItem[] = projectsData.map((p) => ({
      id: `proj-${p.id}`,
      title: p.title,
      subtitle: p.tagline,
      category: 'Projects',
      icon: FolderCode,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    }));

    const skills: CommandItem[] = skillsData.map((s) => ({
      id: `skill-${s.name}`,
      title: s.name,
      subtitle: `${s.category} • ${s.level}% proficiency`,
      category: 'Skills',
      icon: Code2,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    }));

    const all = [...sections, ...actions, ...projects, ...skills];

    if (!q) return all.slice(0, 14);

    return all
      .filter((item) => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle?.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
      .slice(0, 16);
  }, [query, onClose, onOpenAI, showToast]);

  const handleSelect = useCallback(
    (index: number) => {
      if (items[index]) {
        items[index].action();
      }
    },
    [items]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSelect(selectedIndex);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, items.length, selectedIndex, handleSelect, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="relative w-full max-w-xl rounded-3xl border border-border bg-surface/95 backdrop-blur-2xl shadow-2xl shadow-black/30 dark:shadow-black/80 overflow-hidden z-10"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-elevated/40">
              <Search className="w-5 h-5 text-primary shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, project name, or skill..."
                className="w-full bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none font-sans"
              />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-elevated text-muted-foreground border border-border">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className="max-h-[360px] overflow-y-auto p-2 space-y-1">
              {items.length === 0 ? (
                <div className="text-center py-10 text-xs sm:text-sm text-muted-foreground">
                  No matching results for &quot;{query}&quot;
                </div>
              ) : (
                items.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                        isSelected
                          ? 'bg-primary/15 border border-primary/30 text-foreground font-semibold shadow-sm'
                          : 'hover:bg-elevated text-foreground/85 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl border transition-colors ${
                            isSelected
                              ? 'bg-primary/20 text-primary border-primary/40'
                              : 'bg-elevated text-muted-foreground border-border'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-foreground">{item.title}</div>
                          {item.subtitle && (
                            <div className="text-[11px] text-muted-foreground font-mono">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-elevated border border-border text-muted-foreground">
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight className="w-3.5 h-3.5 text-primary" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-2.5 bg-elevated/80 border-t border-border text-[11px] font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Navigate: ↑↓</span>
                <span>•</span>
                <span>Select: ↵</span>
              </div>
              <div className="flex items-center gap-1 text-primary font-medium">
                <Sparkles className="w-3 h-3" />
                <span>Executive Command Menu</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
