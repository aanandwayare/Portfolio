'use client';

import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Server,
  Layers,
  Sparkles,
  Bot,
  BrainCircuit,
  FileCode2,
  GitBranch,
  Search,
  Globe,
  Share2,
} from 'lucide-react';

interface IconProps {
  className?: string;
}

export function SkillTechIcon({ iconName, className = 'w-5 h-5' }: { iconName: string; className?: string }) {
  switch (iconName) {
    case 'javascript':
      return (
        <div className="w-full h-full bg-[#F7DF1E] rounded-md flex items-end justify-end p-0.5 font-sans font-black text-[10px] sm:text-xs text-black leading-none select-none">
          JS
        </div>
      );
    case 'typescript':
      return (
        <div className="w-full h-full bg-[#3178C6] rounded-md flex items-end justify-end p-0.5 font-sans font-black text-[10px] sm:text-xs text-white leading-none select-none">
          TS
        </div>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path
            d="M11.91 2C6.83 2 7.15 4.21 7.15 4.21L7.16 6.5h4.84v.69H5.17S2 6.84 2 11.94c0 5.11 2.76 4.93 2.76 4.93h1.65v-2.32s-.09-2.76 2.72-2.76h4.69s2.63.04 2.63-2.55V4.64S16.99 2 11.91 2zm-2.58 1.48a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86z"
            fill="#387EB8"
          />
          <path
            d="M12.09 22c5.08 0 4.76-2.21 4.76-2.21l-.01-2.29H12v-.69h6.83s3.17.35 3.17-4.75c0-5.11-2.76-4.93-2.76-4.93h-1.65v2.32s.09 2.76-2.72 2.76H10.18s-2.63-.04-2.63 2.55v4.59s-.55 2.66 4.54 2.66zm2.58-1.48a.93.93 0 1 1 0-1.86.93.93 0 0 1 0 1.86z"
            fill="#FFE052"
          />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={`${className} text-[#00D8FF]`} fill="currentColor">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-foreground`} fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 18.238L8.68 6.55h1.84l7.146 10.158v1.53zm-3.33-4.733l-1.84-2.617V6.55h1.84v6.955z" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-[#38BDF8]`} fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case 'framer-motion':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-[#FF0055]`} fill="currentColor">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-[#539E43]`} fill="currentColor">
          <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.31L4.5 8.65v6.7l7.5 4.34 7.5-4.34V8.65L12 4.31zm1.2 4.19c1.9 0 2.9 1.1 2.9 2.7v.5h-1.8v-.5c0-.8-.4-1.3-1.1-1.3s-1.1.4-1.1 1.1c0 .7.4 1 1.7 1.4 2.1.6 3.1 1.4 3.1 3.1 0 1.9-1.3 3-3.1 3s-3.1-1.1-3.1-3.1v-.6h1.8v.6c0 1 .5 1.5 1.3 1.5s1.3-.5 1.3-1.3c0-.8-.5-1.2-1.8-1.6-1.9-.6-3-1.3-3-2.9 0-1.8 1.2-2.9 2.9-2.9z" />
        </svg>
      );
    case 'express':
      return <Server className={`${className} text-[#68A063]`} />;
    case 'rest-api':
      return <Share2 className={`${className} text-[#10B981]`} />;
    case 'openai':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-foreground`} fill="currentColor">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1449-2.8007l3.854-2.2238 3.854 2.2238v4.4477l-3.854 2.2237-3.854-2.2237z" />
        </svg>
      );
    case 'langchain':
      return <Bot className={`${className} text-copper-400`} />;
    case 'rag':
      return <BrainCircuit className={`${className} text-copper-300`} />;
    case 'llm':
      return <Sparkles className={`${className} text-amber-400`} />;
    case 'mysql':
      return <Database className={`${className} text-[#00758F]`} />;
    case 'sql':
      return <Database className={`${className} text-amber-400`} />;
    case 'c':
      return (
        <div className="font-heading font-black text-xs text-[#A8B9CC] select-none">
          C
        </div>
      );
    case 'cpp':
      return (
        <div className="font-heading font-black text-xs text-[#00599C] select-none">
          C++
        </div>
      );
    case 'java':
      return <FileCode2 className={`${className} text-[#EA2D2E]`} />;
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-[#E34F26]`} fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.203l.234-2.625H5.484l.656 7.875h9.375l-.328 3.656-3.211.891-3.211-.891-.211-2.438H6.188l.375 4.875 5.414 1.5 5.414-1.5.75-8.438H8.531z" />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-[#1572B6]`} fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm14.156 16.406l.328-3.656H7.172l-.234-2.625h9.375l.234-2.625H4.219l.656 7.875h7.828l-.281 3.141-2.445.656-2.445-.656-.156-1.781H4.828l.281 3.563 4.867 1.344 4.867-1.344.815-9.569z" />
        </svg>
      );
    case 'git':
      return <GitBranch className={`${className} text-[#F05032]`} />;
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={`${className} text-foreground`} fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case 'vscode':
      return <Code2 className={`${className} text-[#007ACC]`} />;
    case 'postman':
      return <Globe className={`${className} text-[#FF6C37]`} />;
    default:
      return <Code2 className={className} />;
  }
}
