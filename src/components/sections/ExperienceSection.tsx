'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Sparkles,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { timelineData, certificationsData } from '@/data/portfolioData';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" icon={<GraduationCap className="w-3.5 h-3.5" />}>
            ACADEMIC EXCELLENCE & MILESTONES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Education, Foundations &{' '}
            <span className="bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
              Engineering Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Tracing the continuous progression from core systems fundamentals to modern AI
            architectures and full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Timeline */}
          <div className="lg:col-span-7 space-y-8 relative">
            {/* Timeline vertical guide line */}
            <div className="absolute left-6 sm:left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-copper-500 via-copper-400 to-transparent opacity-40" />

            {timelineData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Node Dot / Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface border border-border text-primary group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300 shadow-lg shrink-0">
                  {item.icon === 'GraduationCap' && <GraduationCap className="w-6 h-6" />}
                  {item.icon === 'Award' && <Award className="w-6 h-6 text-[#3EA27A]" />}
                  {item.icon === 'Sparkles' && <Sparkles className="w-6 h-6 text-copper-300" />}
                </div>

                {/* Content Card */}
                <Card className="flex-grow p-6 space-y-3 border-border hover:border-primary/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-elevated border border-border text-primary font-medium">
                      {item.year}
                    </span>
                    <Badge
                      variant={item.type === 'education' ? 'primary' : 'accent'}
                      size="sm"
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-foreground/80">{item.subtitle}</p>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground mt-0.5">
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" /> {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-border">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Verified Certifications & Continuous Learning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-heading text-foreground flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#3EA27A]" />
                <span>Verified Certifications</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Formal specializations and industry-aligned masteries.
              </p>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, cIdx) => (
                <motion.div
                  key={cert.credentialId}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: cIdx * 0.1 }}
                >
                  <Card className="p-5 space-y-3 border-border hover:border-[#3EA27A]/40 transition-all">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-mono text-[#3EA27A] bg-[#3EA27A]/10 px-2 py-0.5 rounded border border-[#3EA27A]/20">
                        {cert.year}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-elevated border border-border text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                      <span>ID: {cert.credentialId}</span>
                      <span className="text-[#3EA27A]">Verified</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Summary Pill Box */}
            <div className="p-5 rounded-2xl border border-border bg-surface/60 backdrop-blur-md space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                Academic Rigor
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sinhagad Institute of Technology (BE Computer Engineering) combined with MSBTE
                Diploma gives Anand a continuous track record of technical rigor, hands-on
                engineering speed, and systems-level problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
