'use client';

import React, { useState, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ConstellationSkill,
  SkillCategory,
  skillsConstellationData,
  skillConnections,
  CATEGORY_COLORS,
} from '@/data/skillsConstellation';
import { SkillTechIcon } from './SkillTechIcon';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Move } from 'lucide-react';

interface SkillConstellationCanvasProps {
  selectedSkillId: string | null;
  onSelectSkill: (skillId: string) => void;
  activeCategory: string;
  searchQuery: string;
}

export default function SkillConstellationCanvas({
  selectedSkillId,
  onSelectSkill,
  activeCategory,
  searchQuery,
}: SkillConstellationCanvasProps) {
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Fast map lookup
  const skillsMap = useMemo(() => {
    const map = new Map<string, ConstellationSkill>();
    skillsConstellationData.forEach((s) => map.set(s.id, s));
    return map;
  }, []);

  // Determine active skill for connection highlights (hovered has priority over selected)
  const activeFocusId = hoveredSkillId || selectedSkillId;
  const focusedSkill = activeFocusId ? skillsMap.get(activeFocusId) : null;

  // Set of connected skill IDs to the currently focused node
  const connectedSkillIds = useMemo(() => {
    if (!focusedSkill) return new Set<string>();
    const set = new Set<string>(focusedSkill.relatedSkills);
    set.add(focusedSkill.id);
    return set;
  }, [focusedSkill]);

  // Filter matching
  const matchingSkillIds = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const isAll = activeCategory === 'All';

    const directMatches = new Set<string>();
    skillsConstellationData.forEach((skill) => {
      const matchesCategory = isAll || skill.category === activeCategory;
      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query);

      if (matchesCategory && matchesSearch) {
        directMatches.add(skill.id);
      }
    });

    // If there is a search query, include the direct connections of matches too for context
    if (query) {
      const expandedMatches = new Set<string>(directMatches);
      directMatches.forEach((id) => {
        const skill = skillsMap.get(id);
        if (skill) {
          skill.relatedSkills.forEach((relId) => expandedMatches.add(relId));
        }
      });
      return expandedMatches;
    }

    return directMatches;
  }, [activeCategory, searchQuery, skillsMap]);

  // Zoom handlers
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.7));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Mouse Drag / Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'svg' || (e.target as HTMLElement).id === 'constellation-bg') {
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Node radius by size
  const getNodeRadius = (size: string) => {
    switch (size) {
      case 'large':
        return 30;
      case 'medium':
        return 24;
      case 'small':
      default:
        return 18;
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative w-full h-[580px] sm:h-[640px] lg:h-[680px] rounded-3xl bg-gradient-to-b from-surface via-[#141618] to-surface dark:from-[#141618] dark:via-[#0E1012] dark:to-[#141618] border border-border/80 shadow-2xl overflow-hidden select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {/* Background Starry Dust & Subtle Animated Grid */}
      <div id="constellation-bg" className="absolute inset-0 pointer-events-none">
        {/* Subtle radial light blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full" />

        {/* Ambient coordinate dots */}
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="constellation-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-muted-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation-grid)" />
        </svg>
      </div>

      {/* Floating Canvas Controls */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface/80 dark:bg-surface/90 backdrop-blur-xl border border-border shadow-lg">
        <button
          onClick={handleZoomIn}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
          title="Zoom In"
          aria-label="Zoom in on constellation"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
          title="Zoom Out"
          aria-label="Zoom out of constellation"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetZoom}
          className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
          title="Reset View"
          aria-label="Reset constellation view"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Helper Pill */}
      <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/70 backdrop-blur-md border border-border text-[11px] font-mono text-muted-foreground">
        <Move className="w-3 h-3 text-primary" />
        <span>Drag to pan • Click node for details • Hover to trace connections</span>
      </div>

      {/* Main Scalable SVG Constellation Graph */}
      <motion.div
        animate={{
          scale: zoomLevel,
          x: panOffset.x,
          y: panOffset.y,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="w-full h-full flex items-center justify-center origin-center"
      >
        <svg
          viewBox="0 0 1000 620"
          className="w-full h-full max-w-[1000px] max-h-[620px] overflow-visible"
        >
          <defs>
            {/* Glow Filter for Active Nodes & Lines */}
            <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Edge Gradients */}
            <linearGradient id="edge-active-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C27A45" />
              <stop offset="50%" stopColor="#D89B65" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* 1. EDGES / CONNECTION LINES */}
          <g className="connections-layer">
            {skillConnections.map((conn, idx) => {
              const src = skillsMap.get(conn.source);
              const tgt = skillsMap.get(conn.target);
              if (!src || !tgt) return null;

              const isConnectedToFocus =
                activeFocusId &&
                (activeFocusId === src.id || activeFocusId === tgt.id);

              const isConnectedToMatch =
                matchingSkillIds.has(src.id) && matchingSkillIds.has(tgt.id);

              let strokeColor = 'rgba(255, 255, 255, 0.12)';
              let strokeWidth = 1.2;
              let opacity = 0.35;
              let strokeDasharray = 'none';

              if (activeFocusId) {
                if (isConnectedToFocus) {
                  strokeColor = 'url(#edge-active-gradient)';
                  strokeWidth = 2.4;
                  opacity = 1;
                  strokeDasharray = '6,4';
                } else {
                  opacity = 0.08;
                }
              } else if (searchQuery || activeCategory !== 'All') {
                if (isConnectedToMatch) {
                  strokeColor = '#C27A45';
                  strokeWidth = 1.8;
                  opacity = 0.8;
                } else {
                  opacity = 0.08;
                }
              }

              return (
                <g key={`edge-${conn.source}-${conn.target}-${idx}`}>
                  <line
                    x1={src.x}
                    y1={src.y}
                    x2={tgt.x}
                    y2={tgt.y}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeOpacity={opacity}
                    strokeDasharray={strokeDasharray}
                    className="transition-all duration-300"
                  />
                  {/* Energy Particle on Active Connection */}
                  {isConnectedToFocus && (
                    <circle r="2.5" fill="#F6F5F3">
                      <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        path={`M ${src.x} ${src.y} L ${tgt.x} ${tgt.y}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* 2. NODES LAYER */}
          <g className="nodes-layer">
            {skillsConstellationData.map((skill) => {
              const radius = getNodeRadius(skill.size);
              const isSelected = selectedSkillId === skill.id;
              const isHovered = hoveredSkillId === skill.id;
              const isFocused = activeFocusId === skill.id;
              const isConnected = connectedSkillIds.has(skill.id);
              const isMatch = matchingSkillIds.has(skill.id);

              // Calculate opacity based on focus/filter state
              let nodeOpacity = 1;
              if (activeFocusId) {
                nodeOpacity = isFocused || isConnected ? 1 : 0.18;
              } else if (searchQuery || activeCategory !== 'All') {
                nodeOpacity = isMatch ? 1 : 0.18;
              }

              const categoryStyle = CATEGORY_COLORS[skill.category];

              return (
                <g
                  key={skill.id}
                  transform={`translate(${skill.x}, ${skill.y})`}
                  className="cursor-pointer transition-opacity duration-300 group"
                  opacity={nodeOpacity}
                  onMouseEnter={() => setHoveredSkillId(skill.id)}
                  onMouseLeave={() => setHoveredSkillId(null)}
                  onClick={() => onSelectSkill(skill.id)}
                >
                  {/* Outer Pulsing Aura for Important / Selected / Hovered Nodes */}
                  {(isFocused || isSelected || skill.size === 'large') && (
                    <circle
                      r={radius + 8}
                      fill="none"
                      stroke={skill.color || '#C27A45'}
                      strokeWidth="1.5"
                      strokeOpacity={isFocused || isSelected ? 0.8 : 0.3}
                      className={isFocused || isSelected ? 'animate-ping' : ''}
                      style={{ animationDuration: '3s' }}
                    />
                  )}

                  {/* Secondary Glow Disc */}
                  <circle
                    r={radius + 4}
                    fill={skill.glowColor}
                    opacity={isFocused || isSelected ? 0.9 : 0.35}
                    className="transition-all duration-300"
                  />

                  {/* Main Glass Node Circle */}
                  <circle
                    r={radius}
                    fill="#1A1D20"
                    stroke={
                      isFocused || isSelected
                        ? skill.color || '#C27A45'
                        : 'rgba(255, 255, 255, 0.15)'
                    }
                    strokeWidth={isFocused || isSelected ? 2.5 : 1.2}
                    filter={isFocused || isSelected ? 'url(#glow-node)' : undefined}
                    className="transition-all duration-300 group-hover:stroke-primary"
                  />

                  {/* Center Tech Icon Container */}
                  <foreignObject
                    x={-radius * 0.65}
                    y={-radius * 0.65}
                    width={radius * 1.3}
                    height={radius * 1.3}
                    className="pointer-events-none"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <SkillTechIcon
                        iconName={skill.iconName}
                        className={`${
                          skill.size === 'large'
                            ? 'w-6 h-6'
                            : skill.size === 'medium'
                            ? 'w-5 h-5'
                            : 'w-4 h-4'
                        }`}
                      />
                    </div>
                  </foreignObject>

                  {/* Label Text below node */}
                  <text
                    y={radius + 14}
                    textAnchor="middle"
                    className={`text-[11px] sm:text-[12px] font-sans font-semibold tracking-tight fill-current transition-all duration-200 pointer-events-none select-none ${
                      isFocused || isSelected
                        ? 'fill-primary font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                        : 'fill-foreground/90'
                    }`}
                  >
                    {skill.name}
                  </text>

                  {/* Category Accent Indicator Dot */}
                  <circle
                    cx={radius * 0.7}
                    cy={-radius * 0.7}
                    r={3}
                    fill={skill.color || '#C27A45'}
                    stroke="#1A1D20"
                    strokeWidth="1"
                    className="pointer-events-none"
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </motion.div>

      {/* Floating Hover Tooltip */}
      <AnimatePresence>
        {hoveredSkillId && !selectedSkillId && (
          (() => {
            const hovered = skillsMap.get(hoveredSkillId);
            if (!hovered) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="absolute top-4 right-4 z-30 p-3.5 rounded-2xl bg-surface/95 dark:bg-[#1A1D20]/95 backdrop-blur-xl border border-border shadow-2xl space-y-1 pointer-events-none max-w-xs"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: hovered.color }}
                  />
                  <span className="text-xs font-bold text-foreground">
                    {hovered.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    ({hovered.category})
                  </span>
                </div>
                <div className="text-[11px] font-mono text-primary font-medium">
                  {hovered.relatedSkills.length} Connected Technologies
                </div>
                <p className="text-[11px] text-muted-foreground line-clamp-2 pt-0.5">
                  {hovered.description}
                </p>
              </motion.div>
            );
          })()
        )}
      </AnimatePresence>
    </div>
  );
}
