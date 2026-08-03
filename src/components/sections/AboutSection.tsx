'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  GraduationCap,
  Target,
  Code2,
  Cpu,
  Globe2,
  CheckCircle2,
  Terminal,
  User,
  Flame,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'story' | 'education' | 'focus' | 'terminal'>('story');
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ command: string; output: string | React.ReactNode }>
  >([
    {
      command: 'whoami',
      output: `${personalInfo.name} - Computer Engineering Scholar at Sinhagad Institute of Technology & AI Engineer.`,
    },
    {
      command: 'contact',
      output: `Email: aanandwayare61@gmail.com | Location: Pune, Maharashtra, India`,
    },
  ]);
  const [inputCommand, setInputCommand] = useState('');

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputCommand.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output =
          'Available commands: whoami, skills, education, experience, projects, contact, socials, clear, date, resume, cat vision.txt, cat architecture.md';
        break;
      case 'whoami':
        output = `${personalInfo.name} - Java Full Stack Developer & AI Engineer with distinction in Computer Engineering.`;
        break;
      case 'skills':
        output =
          'Java, Spring Boot, Spring MVC, Hibernate, JDBC, Servlets, JSP, REST APIs, MySQL, Next.js, React, TypeScript, Python, OpenAI API, LangChain.';
        break;
      case 'education':
        output =
          '1. BE in Computer Engineering @ Sinhagad Institute of Technology, Lonavala (2025 - Present)\n2. Diploma in Computer Engineering @ MSBTE (First Class with Distinction, 2022 - 2025)';
        break;
      case 'experience':
        output =
          'Android Developer Intern @ Mountreach Solution Pvt. Ltd. (June 2024 - July 2024) | Artificial Intelligence Intern @ CodeNova (March 2026 - April 2026).';
        break;
      case 'projects':
        output =
          '1. NeuroFlow AI (Autonomous Multi-Agent Workflow Engine)\n2. DevNexus Cloud (Collaborative Coding Environment)\n3. VisionPulse ML (Computer Vision Diagnostic Tool)\n4. EchoMarket (Headless Java E-Commerce Store)';
        break;
      case 'contact':
        output = `Email: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nLocation: ${personalInfo.location}`;
        break;
      case 'socials':
        output = `GitHub: ${personalInfo.socials.github}\nLinkedIn: ${personalInfo.socials.linkedin}\nEmail: ${personalInfo.socials.email}`;
        break;
      case 'clear':
      case 'cls':
        setTerminalHistory([]);
        setInputCommand('');
        return;
      case 'date':
        output = new Date().toUTCString();
        break;
      case 'ls':
        output =
          'resume.pdf  vision.txt  architecture.md  skills.json  contact.vcf';
        break;
      case 'cat vision.txt':
        output =
          'Vision: To pioneer resilient, autonomous AI applications and high-throughput enterprise systems that scale globally with zero downtime.';
        break;
      case 'cat architecture.md':
        output =
          'Architecture Principles:\n• Decoupled enterprise layers (Controller -> Service -> Repository)\n• Strict type safety with TypeScript & Java compilation\n• High performance micro-interactions\n• Clean modular architecture';
        break;
      case 'cat skills.json':
        output = JSON.stringify(
          {
            frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            backend: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
            ai: ['LangChain', 'OpenAI API', 'Python', 'spaCy'],
          },
          null,
          2
        );
        break;
      case 'cat contact.vcf':
      case 'resume':
      case 'cat resume':
        output = `Anand Chandrakant Wayare | Full Stack & AI Engineer | Sinhagad Institute of Technology, Lonavala | anandwayare45@gmail.com`;
        break;
      case 'matrix':
        output = 'Wake up, Neo... The Matrix has you. Follow the white rabbit. 🐰';
        break;
      default:
        output = `Command not found: "${cmd}". Type "help" for a list of valid commands.`;
        break;
    }

    setTerminalHistory((prev) => [...prev, { command: inputCommand, output }]);
    setInputCommand('');
  };

  return (
    <section id="about" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-14">
          <Badge variant="primary" icon={<Sparkles className="w-3.5 h-3.5" />}>
            ENGINEERING PHILOSOPHY & STORY
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Crafting the Intersection of{' '}
            <span className="bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
              Clean Code & Applied AI
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Get to know the engineer behind the architecture, my background at Sinhagad Institute
            of Technology, and what drives my executive engineering standards.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'story', label: 'My Story & Vision', icon: User },
            { id: 'education', label: 'Education & Roots', icon: GraduationCap },
            { id: 'focus', label: 'What Drives Me', icon: Target },
            { id: 'terminal', label: 'Executive Terminal', icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-primary/40 scale-105'
                    : 'bg-surface text-muted-foreground hover:bg-elevated border border-border hover:text-foreground'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Detailed Bio */}
              <Card className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                    Computer Engineering Scholar & Full Stack AI Architect
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {personalInfo.aboutDetailed.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">High-Speed Execution</h4>
                      <p className="text-xs text-muted-foreground">
                        Rapidly turns architectural concepts into production-ready software.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Executive Standards</h4>
                      <p className="text-xs text-muted-foreground">
                        Strict TypeScript, 60fps animations, accessible design, and maintainable systems.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Right Column: Highlights Cards */}
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Full Stack Engineering</h4>
                      <span className="text-xs font-mono text-primary">
                        Next.js • React • Node.js • TypeScript
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Building robust, type-safe architectures with Server Components, optimized
                    caching layers, and reactive state management.
                  </p>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-copper-400/10 border border-copper-400/20 text-copper-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Applied AI & LLMs</h4>
                      <span className="text-xs font-mono text-primary">
                        LangChain • OpenAI • PyTorch • RAG
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Orchestrating autonomous multi-agent pipelines, vector search retrieval, and
                    fine-tuned inference models for real-world enterprise impact.
                  </p>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#3EA27A]/10 border border-[#3EA27A]/20 text-[#3EA27A]">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Global Readiness</h4>
                      <span className="text-xs font-mono text-[#3EA27A]">
                        Pune, India • Remote / Hybrid
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Collaborating seamlessly in distributed git-based agile environments with
                    proactive communication and clean technical documentation.
                  </p>
                </Card>
              </div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Card className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="primary">Current Degree</Badge>
                  <span className="text-xs font-mono text-muted-foreground">2023 - Present</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground">
                  Bachelor of Engineering in Computer Engineering
                </h3>
                <p className="text-sm text-primary font-medium">
                  Sinhagad Institute of Technology, Lonavala
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  Affiliated with Savitribai Phule Pune University (SPPU)
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Advanced coursework: Data Structures, Algorithms, Artificial Intelligence, Database Management, and Cloud Architectures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Building innovative real-world software prototypes and AI workflows alongside curriculum.</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="success">Completed with Distinction</Badge>
                  <span className="text-xs font-mono text-muted-foreground">2020 - 2023</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground">
                  Diploma in Computer Engineering
                </h3>
                <p className="text-sm text-[#3EA27A] font-medium">
                  Foundational Software & Systems Engineering
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  Maharashtra State Board of Technical Education (MSBTE)
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3EA27A] font-bold">•</span>
                    <span>Solidified low-level coding foundations in C, C++, Java, relational databases (MySQL), and computer networking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3EA27A] font-bold">•</span>
                    <span>Graduated with First Class with Distinction, delivering early capstone applications.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          )}

          {activeTab === 'focus' && (
            <motion.div
              key="focus"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <Card className="p-6 space-y-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 w-fit">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground">
                  Engineering Principles
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  I believe in simple abstractions over premature complexity. Code should be clean,
                  self-documenting, and designed for longevity, testability, and high maintainability.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="p-3 rounded-2xl bg-copper-400/10 text-copper-400 border border-copper-400/20 w-fit">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground">
                  Executive Polish
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  A product is only as good as its user experience. I obsess over sub-millisecond
                  interactions, visual hierarchy, ergonomics, and understated luxury.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="p-3 rounded-2xl bg-surface text-foreground border border-border w-fit">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground">
                  Career Trajectory
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  My mission is to become an exceptional Full Stack Developer and AI Engineer at a
                  top-tier product company, shaping the future of intelligent digital products.
                </p>
              </Card>
            </motion.div>
          )}

          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl border border-border bg-graphite-950 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-graphite-900 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#D05D58] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#D7A23B] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#3EA27A] inline-block" />
                  </div>
                  <div className="text-muted-foreground text-xs font-mono">
                    anand@workstation: ~/portfolio
                  </div>
                  <div className="text-[11px] text-muted-foreground hidden sm:block">
                    zsh 5.9 (executive)
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 sm:p-6 space-y-3 min-h-[260px] max-h-[380px] overflow-y-auto">
                  <div className="text-muted-foreground text-xs">
                    Welcome to Anand Wayare&apos;s interactive developer terminal. Type &quot;help&quot; for
                    commands.
                  </div>

                  {terminalHistory.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2 text-copper-400">
                        <span className="text-muted-foreground">guest@anand-exec:~$</span>
                        <span>{item.command}</span>
                      </div>
                      <div className="text-[#DFDDD7] pl-4 leading-relaxed whitespace-pre-wrap">
                        {item.output}
                      </div>
                    </div>
                  ))}

                  {/* Input Form */}
                  <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
                    <span className="text-muted-foreground shrink-0">guest@anand-exec:~$</span>
                    <input
                      type="text"
                      value={inputCommand}
                      onChange={(e) => setInputCommand(e.target.value)}
                      placeholder="Type a command (e.g. help, whoami, skills, clear)..."
                      className="w-full bg-transparent text-white focus:outline-none placeholder:text-muted-foreground/50 text-xs sm:text-sm font-mono"
                    />
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
