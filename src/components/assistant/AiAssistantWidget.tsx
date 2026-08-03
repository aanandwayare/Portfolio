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
      text: `Hello! I'm Anand's executive AI representative. Ask me anything about his technical stack, engineering projects at Sinhagad Institute of Technology, or full-time availability!`,
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
      }, 550);
    },
    [inputQuery]
  );

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt, isOpen, handleSendMessage]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [isOpen, handleClose]);

  const handleResetChat = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    setIsTyping(false);
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: `Hello! I'm Anand's executive AI representative. Ask me anything about his technical stack, engineering projects at Sinhagad Institute of Technology, or full-time availability!`,
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 no-print">
      {/* Floating Trigger Button with Pulse Ring */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            {/* Pulsing ring in warm copper */}
            <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-copper-500 to-copper-700 opacity-60 blur-sm animate-pulse" />

            <button
              onClick={handleOpen}
              className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-medium text-xs sm:text-sm shadow-xl shadow-primary/25 border border-primary/40 transition-all hover:scale-105"
              aria-label="Open AI Portfolio Assistant"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="font-heading font-semibold">Ask AI Assistant</span>
              <span className="w-2 h-2 rounded-full bg-[#3EA27A] animate-ping" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="w-[calc(100vw-2rem)] sm:w-[410px] h-[550px] max-h-[82vh] rounded-3xl border border-border bg-surface/95 backdrop-blur-2xl shadow-2xl shadow-black/30 dark:shadow-black/80 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-elevated/80">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br from-copper-500 to-copper-700 p-[1px] shadow-sm shadow-copper-500/20">
                  <div className="flex items-center justify-center w-full h-full bg-surface rounded-[15px]">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold font-heading text-foreground flex items-center gap-1.5">
                    <span>Anand AI Assistant</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3EA27A]" />
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
                  title="Minimize chat"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none shadow-md shadow-primary/20'
                        : 'bg-elevated/70 border border-border text-foreground/90 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>

                    {/* Navigation Link Chips if present */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2.5 mt-2 border-t border-border">
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
                <div className="flex gap-2.5 items-center text-muted-foreground">
                  <div className="w-7 h-7 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-4 py-2.5 rounded-2xl bg-elevated border border-border flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Chips */}
            <div className="px-4 py-2 bg-elevated/40 border-t border-border overflow-x-auto flex gap-1.5 scrollbar-none">
              {promptSuggestions.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap text-[10px] font-mono px-2.5 py-1 rounded-lg bg-surface hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border hover:border-primary/30 transition-all shrink-0 shadow-sm"
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
              className="p-3 border-t border-border bg-elevated/90 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about skills, projects, background..."
                className="flex-1 px-3.5 py-2 text-xs bg-surface rounded-xl border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping}
                className="p-2 rounded-xl bg-primary hover:bg-primary-hover disabled:opacity-40 text-white transition-colors"
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
