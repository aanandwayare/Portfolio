'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Printer,
  Copy,
  Code2,
} from 'lucide-react';
import { resumeData } from '@/data/portfolioData';
import { useToast } from '../ui/Toast';
import { copyToClipboard } from '@/lib/utils';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ResumeSection() {
  const [viewMode, setViewMode] = useState<'interactive' | 'ats'>('interactive');
  const { showToast } = useToast();

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summaryText = `${resumeData.name} - ${resumeData.title}
Email: ${resumeData.contact.email} | Phone: ${resumeData.contact.phone} | Location: ${resumeData.contact.location}
GitHub: ${resumeData.contact.github} | LinkedIn: ${resumeData.contact.linkedin}

SUMMARY:
${resumeData.summary}

EDUCATION:
${resumeData.education.map((e) => `• ${e.degree} - ${e.institution} (${e.duration})`).join('\n')}

TECHNICAL SKILLS:
${resumeData.skills.map((s) => `• ${s.category}: ${s.items.join(', ')}`).join('\n')}

FEATURED PROJECTS:
${resumeData.projects.map((p) => `• ${p.name} (${p.tech.join(', ')}): ${p.highlights.join('; ')}`).join('\n')}
`;
    copyToClipboard(summaryText);
    showToast('ATS Plain-text resume copied to clipboard!');
  };

  return (
    <section id="resume" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Hidden in Print) */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-10 no-print">
          <Badge variant="primary" icon={<FileText className="w-3.5 h-3.5" />}>
            RECRUITER & ATS RESUME HUB
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Curated{' '}
            <span className="bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
              ATS-Optimized Resume
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Switch between the interactive visual portfolio resume and the recruiter-friendly,
            printable ATS standard view with one-click exports.
          </p>
        </div>

        {/* Action Controls Toolbar (Hidden in Print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl border border-border bg-surface/75 backdrop-blur-xl mb-10 no-print shadow-sm">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'interactive'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Visual Interactive View
            </button>
            <button
              onClick={() => setViewMode('ats')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'ats'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ATS Printable Document
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopySummary}
              icon={<Copy className="w-3.5 h-3.5 text-primary" />}
            >
              Copy Raw Text
            </Button>
            <Button
              variant="glow"
              size="sm"
              onClick={handlePrint}
              icon={<Printer className="w-3.5 h-3.5" />}
            >
              Print / Save PDF
            </Button>
          </div>
        </div>

        {/* View Mode Display */}
        <AnimatePresence mode="wait">
          {viewMode === 'interactive' ? (
            <motion.div
              key="interactive"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 no-print"
            >
              {/* Executive Summary Card */}
              <Card className="p-6 sm:p-8 space-y-4 border-border">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-heading text-foreground">
                      {resumeData.name}
                    </h3>
                    <p className="text-xs font-mono text-primary font-medium">{resumeData.title}</p>
                  </div>
                  <div className="hidden sm:flex flex-col text-right text-xs font-mono text-muted-foreground">
                    <span>{resumeData.contact.email}</span>
                    <span>{resumeData.contact.phone}</span>
                    <span>{resumeData.contact.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                    Executive Profile
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>
              </Card>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeData.skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className="p-5 space-y-3 border-border">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{skillGroup.category}</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-elevated border border-border text-foreground/85"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Key Projects in Resume */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-foreground">
                  Notable Engineered Systems
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resumeData.projects.map((proj) => (
                    <Card key={proj.name} className="p-6 space-y-3 border-border">
                      <div className="flex items-start justify-between">
                        <h4 className="text-base font-bold text-foreground">{proj.name}</h4>
                        <div className="flex gap-1">
                          {proj.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {proj.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* ATS Clean Document View (Always visible in Print, or when ATS tab selected) */}
        <div
          className={`${
            viewMode === 'ats' ? 'block' : 'hidden'
          } print:block max-w-4xl mx-auto bg-surface print:bg-white text-foreground print:text-black p-8 sm:p-12 rounded-3xl border border-border print:border-none shadow-2xl space-y-8 font-sans transition-all`}
        >
          {/* Header */}
          <div className="text-center space-y-2 border-b border-border print:border-gray-300 pb-6">
            <h1 className="text-3xl font-bold font-heading text-foreground print:text-black tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-sm font-mono text-primary print:text-copper-700 font-semibold">
              {resumeData.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground print:text-gray-600 font-mono pt-1">
              <span>{resumeData.contact.location}</span>
              <span>•</span>
              <a href={`mailto:${resumeData.contact.email}`} className="underline hover:text-primary">
                {resumeData.contact.email}
              </a>
              <span>•</span>
              <span>{resumeData.contact.phone}</span>
              <span>•</span>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-copper-800 font-bold border-b border-border print:border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground print:text-gray-800 leading-relaxed">
              {resumeData.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-copper-800 font-bold border-b border-border print:border-gray-300 pb-1">
              Technical Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {resumeData.skills.map((s) => (
                <div key={s.category} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-2">
                  <span className="sm:col-span-4 font-semibold text-foreground print:text-black">
                    {s.category}:
                  </span>
                  <span className="sm:col-span-8 text-muted-foreground print:text-gray-700">
                    {s.items.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-copper-800 font-bold border-b border-border print:border-gray-300 pb-1">
              Engineered Software Projects
            </h2>
            <div className="space-y-4">
              {resumeData.projects.map((proj) => (
                <div key={proj.name} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-sm font-bold text-foreground print:text-black">
                      {proj.name}
                    </h3>
                    <span className="text-[11px] font-mono text-primary print:text-copper-700">
                      {proj.tech.join(', ')}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground print:text-gray-700 list-disc list-inside">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary print:text-copper-800 font-bold border-b border-border print:border-gray-300 pb-1">
              Education & Qualifications
            </h2>
            <div className="space-y-3">
              {resumeData.education.map((edu) => (
                <div key={edu.degree} className="space-y-0.5">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-foreground print:text-black">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground print:text-gray-600">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground print:text-gray-700">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] font-mono text-primary print:text-copper-700">
                    {edu.grade}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
