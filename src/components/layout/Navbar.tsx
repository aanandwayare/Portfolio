'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Menu,
  X,
  FileText,
  User,
  Code2,
  FolderCode,
  GraduationCap,
  Mail,
} from 'lucide-react';

import { personalInfo } from '@/data/portfolioData';
import ThemeToggle from './ThemeToggle';
import Button from '../ui/Button';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenAI: () => void;
}

const navLinks = [
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code2 },
  { href: '#projects', label: 'Projects', icon: FolderCode },
  { href: '#experience', label: 'Experience', icon: GraduationCap },
  { href: '#resume', label: 'Resume', icon: FileText },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar({ onOpenCommand, onOpenAI }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-surface/85 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10 dark:shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Signature */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group text-left"
            aria-label="Back to top"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-copper-500/20">
              <div className="flex items-center justify-center w-full h-full bg-surface rounded-[14px]">
                <span className="font-heading font-black text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500">
                  AW
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors">
                Anand Wayare
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
                Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-border bg-surface/75 backdrop-blur-xl shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-elevated'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30 shadow-[0_0_12px_rgba(194,122,69,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* AI Assistant Quick Trigger */}
            <button
              onClick={onOpenAI}
              className="relative p-2 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-105 shadow-sm shadow-primary/10"
              title="Open AI Portfolio Assistant"
              aria-label="Open AI Assistant"
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-border bg-surface text-foreground hover:bg-elevated transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-border bg-surface/95 backdrop-blur-2xl px-6 py-5 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary/15 text-primary font-bold border border-primary/30'
                        : 'text-foreground/80 hover:bg-elevated hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Button
                variant="glow"
                size="sm"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAI();
                }}
                icon={<Sparkles className="w-4 h-4" />}
              >
                Launch AI Assistant
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
