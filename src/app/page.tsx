'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import CommandPalette from '@/components/layout/CommandPalette';
import AiAssistantWidget from '@/components/assistant/AiAssistantWidget';

export default function HomePage() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [initialAIPrompt, setInitialAIPrompt] = useState<string | undefined>(undefined);

  const handleOpenAI = (prompt?: string) => {
    if (prompt) setInitialAIPrompt(prompt);
    setIsAIOpen(true);
  };

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenAI={() => handleOpenAI()}
      />

      {/* Page Sections */}
      <HeroSection onOpenAI={() => handleOpenAI()} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Global Modals & Interactive Overlays */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenAI={(prompt) => handleOpenAI(prompt)}
      />

      <AiAssistantWidget
        isOpen={isAIOpen}
        setIsOpen={setIsAIOpen}
        initialPrompt={initialAIPrompt}
      />
    </main>
  );
}
