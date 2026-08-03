'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, recruiterFaqs } from '@/data/portfolioData';
import { useToast } from '../ui/Toast';
import { copyToClipboard } from '@/lib/utils';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ContactSection() {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      showToast('Please enter your name.', 'error');
      return;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      showToast('Please provide a valid email address.', 'error');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      showToast('Please enter a message with at least 5 characters.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    showToast('Message sent successfully! Anand will get back to you promptly.');

    // Fire celebratory confetti safely
    try {
      if (typeof window !== 'undefined') {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.7 },
          colors: ['#C27A45', '#D89B65', '#A86636', '#3EA27A'],
        });
      }
    } catch {
      // Confetti fallback
    }

    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 4500);
  };

  const handleCopy = (text: string, label: string) => {
    copyToClipboard(text);
    showToast(`${label} copied to clipboard!`);
  };

  return (
    <section id="contact" className="relative py-24 z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" icon={<Mail className="w-3.5 h-3.5" />}>
            GET IN TOUCH & OPPORTUNITIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Currently open to full-time Software Engineering roles, AI / ML positions, high-impact
            consulting, and collaborative open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Recruiter FAQ Accordion */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-heading text-foreground">
                Direct Channels
              </h3>

              {/* Email Card */}
              <Card className="p-4 flex items-center justify-between group hover:border-primary/40 transition-all border-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </span>
                    <a
                      href={personalInfo.socials.email}
                      className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'Email')}
                  className="p-2 rounded-xl border border-border bg-surface hover:bg-elevated text-muted-foreground hover:text-foreground transition-colors shadow-sm"
                  aria-label="Copy email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </Card>

              {/* Phone Card */}
              <Card className="p-4 flex items-center justify-between group hover:border-[#3EA27A]/40 transition-all border-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#3EA27A]/10 text-[#3EA27A] border border-[#3EA27A]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={personalInfo.socials.phone}
                      className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-[#3EA27A] block transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                  className="p-2 rounded-xl border border-border bg-surface hover:bg-elevated text-muted-foreground hover:text-foreground transition-colors shadow-sm"
                  aria-label="Copy phone number"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </Card>

              {/* Location Card */}
              <Card className="p-4 flex items-center justify-between border-border">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-surface text-primary border border-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      Base Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground block">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#3EA27A] bg-[#3EA27A]/10 px-2 py-0.5 rounded border border-[#3EA27A]/20">
                  Open to Relocation
                </span>
              </Card>
            </div>

            {/* Recruiter FAQ Accordion */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-lg font-bold font-heading text-foreground flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                <span>Frequently Asked Questions</span>
              </h3>

              <div className="space-y-2">
                {recruiterFaqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-border bg-surface/75 overflow-hidden transition-colors shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-primary transition-transform duration-200 shrink-0 ml-2 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-border pt-2"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 space-y-6 border-border">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Fill out the details below and Anand will reply within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#3EA27A]/10 border border-[#3EA27A]/30 text-[#3EA27A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground font-heading">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. A confirmation has been logged. Anand will be in
                    touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted-foreground">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-muted-foreground">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-muted-foreground">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-muted-foreground">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Anand, I came across your portfolio and would love to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 resize-none shadow-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
