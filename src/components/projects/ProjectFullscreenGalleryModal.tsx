'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { DashboardProject } from '@/data/projectsDashboardData';

interface ProjectFullscreenGalleryModalProps {
  project: DashboardProject | null;
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectFullscreenGalleryModal({
  project,
  initialIndex,
  isOpen,
  onClose,
}: ProjectFullscreenGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) =>
          prev === 0 ? project.gallery.length - 1 : prev - 1
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, onClose]);

  if (!isOpen || !project || !project.gallery || project.gallery.length === 0) {
    return null;
  }

  const currentItem = project.gallery[currentIndex] || project.gallery[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#141618] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#1A1D20]/80">
            <div className="flex items-center gap-3">
              <span className="text-xl">{project.emoji}</span>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  {currentItem.title}
                </h4>
                <p className="text-[11px] font-mono text-muted-foreground">
                  {project.title} • Asset {currentIndex + 1} of {project.gallery.length}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-surface hover:bg-elevated border border-border text-muted-foreground hover:text-white transition-colors"
              aria-label="Close fullscreen gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Image Area */}
          <div className="relative flex-1 min-h-[350px] sm:min-h-[480px] w-full bg-black/60 flex items-center justify-center p-4">
            <div className="relative w-full h-[350px] sm:h-[480px] max-w-4xl rounded-2xl overflow-hidden">
              <Image
                src={currentItem.url}
                alt={currentItem.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Prev Button */}
            {project.gallery.length > 1 && (
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? project.gallery.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white backdrop-blur-md transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {project.gallery.length > 1 && (
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % project.gallery.length)
                }
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white backdrop-blur-md transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption & Thumbnails */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#1A1D20]/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground max-w-xl text-center sm:text-left">
              {currentItem.desc}
            </p>

            {/* Thumbnail selector */}
            <div className="flex items-center gap-2">
              {project.gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-12 h-8 rounded-lg overflow-hidden border transition-all relative ${
                    currentIndex === idx
                      ? 'border-primary ring-2 ring-primary/40 scale-105'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={item.url} alt={item.title} fill sizes="48px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
