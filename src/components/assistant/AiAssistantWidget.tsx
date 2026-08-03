'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Bot,
  Send,
  X,
  User,
  RotateCcw,
  ExternalLink,
} from 'lucide-react';
import {
  queryAIAssistant,
  promptSuggestions,
} from '@/data/aiKnowledge';

// ─── Inline markdown renderer ─────────────────────────────────────────────────
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-primary/90 not-italic font-semibold">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function FormatAIMessage({ text }: { text: string }) {
  const lines = text.split('\n');

  return (
    <div className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-1" />;

        // Section heading: **Heading:**
        const headingMatch = line.match(/^\*\*([^*]+:)\*\*$/);
        if (headingMatch) {
          return (
            <p
              key={i}
              className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 pt-1.5"
            >
              {headingMatch[1]}
            </p>
          );
        }

        // Numbered list: 1. item
        const numberedMatch = line.match(/^(\d+)\.\s+(.*)$/);
        if (numberedMatch) {
          return (
            <div key={i} className="flex items-start gap-2.5">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] font-black flex items-center justify-center mt-0.5">
                {numberedMatch[1]}
              </span>
              <span className="text-foreground/90">{renderInline(numberedMatch[2])}</span>
            </div>
          );
        }

        // Bullet list: - item
        const bulletMatch = line.match(/^[-•]\s+(.*)$/);
        if (bulletMatch) {
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="shrink-0 w-1 h-1 rounded-full bg-primary/70 mt-[7px]" />
              <span className="text-foreground/85">{renderInline(bulletMatch[1])}</span>
            </div>
          );
        }

        // Normal paragraph
        return (
          <p key={i} className="text-foreground/90">
            {renderInline(line)}
          </p>
        );
      })}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
}

interface AiAssistantWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  initialPrompt?: string;
}

export default function AiAssistantWidget({
  isOpen,
  setIsOpen,
  initialPrompt,
}: AiAssistantWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Anand's executive AI representative.\n\nAsk me anything about his technical stack, engineering projects, or full-time availability.`,
      timestamp: 'Just now',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = useCallback(
    (customText?: string) => {
      const query = customText || inputQuery;
      if (!query.trim()) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: query,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, userMsg]);
      if (!customText) setInputQuery('');
      setIsTyping(true);

      const aiResponse = queryAIAssistant(query);

      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiResponse.answer,
          links: aiResponse.suggestedAction
            ? [{ label: aiResponse.suggestedAction.label, url: aiResponse.suggestedAction.target }]
            : undefined,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, aiMsg]);
      }, 650);
    },
    [inputQuery]
  );

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt, isOpen, handleSendMessage]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [isOpen, handleClose]);

  const handleResetChat = () => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    setIsTyping(false);
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: `Hello! I'm Anand's executive AI representative.\n\nAsk me anything about his technical stack, engineering projects, or full-time availability.`,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 no-print">
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C35] opacity-50 blur-sm animate-pulse" />
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium text-xs sm:text-sm shadow-xl shadow-primary/30 border border-primary/40 transition-all hover:scale-105 active:scale-[0.97]"
              aria-label="Open AI Portfolio Assistant"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="font-semibold">Ask AI Assistant</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="w-[min(calc(100vw-2rem),420px)] h-[560px] max-h-[82vh] rounded-3xl border border-border bg-surface/98 backdrop-blur-2xl shadow-2xl shadow-black/30 dark:shadow-black/80 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-elevated/80 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#E55E00] p-[1px] shadow-sm shadow-primary/20">
                  <div className="flex items-center justify-center w-full h-full bg-surface rounded-[15px]">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold font-heading text-foreground flex items-center gap-1.5">
                    <span>Anand AI</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </h3>
                  <p className="text-[10px] font-mono text-muted-foreground">
                    Context-Aware Portfolio Intelligence
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
                  title="Reset conversation"
                  aria-label="Reset chat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-elevated transition-colors"
                  title="Close"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] rounded-2xl px-3.5 py-3 ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none shadow-md shadow-primary/20'
                        : 'bg-elevated/80 border border-border text-foreground rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.sender === 'ai' ? (
                      <FormatAIMessage text={msg.text} />
                    ) : (
                      <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                    )}

                    {/* Timestamp */}
                    <p className={`text-[10px] mt-1.5 font-mono ${msg.sender === 'user' ? 'text-white/60 text-right' : 'text-muted-foreground'}`}>
                      {msg.timestamp}
                    </p>

                    {/* Link Chips */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2.5 mt-1.5 border-t border-border/60">
                        {msg.links.map((link, lIdx) => (
                          <button
                            key={lIdx}
                            onClick={() => {
                              const target = document.querySelector(link.url);
                              if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                                handleClose();
                              }
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-mono bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-xl bg-elevated border border-border flex items-center justify-center shrink-0 mt-0.5 text-foreground">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-elevated border border-border flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 bg-elevated/40 border-t border-border overflow-x-auto flex gap-1.5 shrink-0" style={{ scrollbarWidth: 'none' }}>
              {promptSuggestions.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap text-[10px] font-mono px-2.5 py-1 rounded-lg bg-surface hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border hover:border-primary/30 transition-all shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 border-t border-border bg-elevated/90 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about skills, projects, background..."
                className="flex-1 px-3.5 py-2.5 text-xs bg-surface rounded-xl border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                className="p-2.5 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-40 text-white transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/20"
                aria-label="Send query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
