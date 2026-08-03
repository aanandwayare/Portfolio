'use client';

import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Clock,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-surface/90 backdrop-blur-xl text-foreground/80 py-16 z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 p-[1px] shadow-sm shadow-copper-500/20">
                <div className="flex items-center justify-center w-full h-full bg-surface rounded-[15px]">
                  <span className="font-heading font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-copper-300 to-copper-500">
                    AW
                  </span>
                </div>
              </div>
              <h3 className="text-base font-bold font-heading text-foreground">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Full Stack Developer & AI Engineer specializing in resilient cloud microservices,
              agentic workflows, and handcrafted digital experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-elevated/50 text-xs font-mono text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>Pune, IN:</span>
              <span className="text-primary font-semibold">{time || '12:00 PM IST'}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Narrative
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Technical Matrix
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  Academic Timeline
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-primary transition-colors">
                  ATS Printable Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <p>Email: <a href={personalInfo.socials.email} className="text-foreground hover:text-primary">{personalInfo.email}</a></p>
              <p>Phone: <a href={personalInfo.socials.phone} className="text-foreground hover:text-primary">{personalInfo.phone}</a></p>
              <p>Location: {personalInfo.location}</p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-surface hover:bg-elevated text-foreground hover:text-primary transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-surface hover:bg-elevated text-foreground hover:text-primary transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                className="p-2.5 rounded-xl border border-border bg-surface hover:bg-elevated text-foreground hover:text-primary transition-all shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Anand Chandrakant Wayare. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-surface hover:bg-elevated text-muted-foreground hover:text-foreground transition-all shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}
