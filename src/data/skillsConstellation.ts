export type SkillCategory =
  | 'Programming Languages'
  | 'Frontend'
  | 'Backend & APIs'
  | 'AI / Machine Learning'
  | 'Database'
  | 'Dev Tools';

export type NodeSize = 'large' | 'medium' | 'small';

export interface ConstellationSkill {
  id: string;
  name: string;
  category: SkillCategory;
  size: NodeSize;
  x: number; // 0 to 1000 virtual coordinate
  y: number; // 0 to 650 virtual coordinate
  iconName: string;
  color: string; // brand/accent color
  glowColor: string;
  description: string;
  proficiency: number;
  experienceYears: string;
  projects: { name: string; link?: string; role: string }[];
  relatedSkills: string[]; // skill IDs
}

export interface SkillConnection {
  source: string;
  target: string;
  strength?: number;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Programming Languages',
  'Frontend',
  'Backend & APIs',
  'AI / Machine Learning',
  'Database',
  'Dev Tools',
];

export const CATEGORY_COLORS: Record<SkillCategory, { text: string; bg: string; border: string; glow: string }> = {
  'Programming Languages': {
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    glow: 'rgba(245, 158, 11, 0.4)',
  },
  'Frontend': {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    glow: 'rgba(6, 182, 212, 0.4)',
  },
  'Backend & APIs': {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    glow: 'rgba(16, 185, 129, 0.4)',
  },
  'AI / Machine Learning': {
    text: 'text-copper-400',
    bg: 'bg-copper-500/10',
    border: 'border-copper-500/30',
    glow: 'rgba(194, 122, 69, 0.45)',
  },
  'Database': {
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    glow: 'rgba(99, 102, 241, 0.4)',
  },
  'Dev Tools': {
    text: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    glow: 'rgba(244, 63, 94, 0.4)',
  },
};

export const skillsConstellationData: ConstellationSkill[] = [
  // ==========================================
  // PROGRAMMING LANGUAGES
  // ==========================================
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Programming Languages',
    size: 'large',
    x: 420,
    y: 190,
    iconName: 'javascript',
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.45)',
    description:
      'High-performance modern JavaScript (ES2023+), asynchronous programming with Promises/Async-Await, event loops, DOM manipulation, and functional patterns.',
    proficiency: 95,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'Next.js App & Interactive Canvas' },
      { name: 'Multi-Agent Support Pipeline', role: 'Full Stack Node & React App' },
      { name: 'AI Voice Clinical Scribe', role: 'Real-time WebSocket Orchestration' },
    ],
    relatedSkills: ['react', 'nextjs', 'nodejs', 'express', 'typescript', 'html5'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming Languages',
    size: 'medium',
    x: 320,
    y: 260,
    iconName: 'typescript',
    color: '#3178C6',
    glowColor: 'rgba(49, 120, 198, 0.45)',
    description:
      'Strict type engineering, generics, utility types, and AST transformations ensuring compile-time safety across frontend and backend microservices.',
    proficiency: 92,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'Strict TypeScript Architecture' },
      { name: 'Autonomous Research Multi-Agent', role: 'Typed LLM Structured Outputs' },
      { name: 'Healthcare Intelligence System', role: 'HIPAA compliant schema safety' },
    ],
    relatedSkills: ['javascript', 'react', 'nextjs', 'nodejs', 'vscode'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming Languages',
    size: 'large',
    x: 740,
    y: 190,
    iconName: 'python',
    color: '#387EB8',
    glowColor: 'rgba(56, 126, 184, 0.5)',
    description:
      'Core language for AI/ML engineering, LangChain orchestration, RAG embeddings pipelines, FastAPIs, automated data parsing, and autonomous agent loops.',
    proficiency: 94,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Autonomous Research Multi-Agent', role: 'Core Orchestrator & Tools' },
      { name: 'Enterprise RAG Intelligence System', role: 'Vector Search & Embeddings' },
      { name: 'AI Clinical Scribe Engine', role: 'Audio transcription & NER pipelines' },
    ],
    relatedSkills: ['openai', 'langchain', 'rag', 'llm', 'vscode'],
  },
  {
    id: 'c',
    name: 'C',
    category: 'Programming Languages',
    size: 'small',
    x: 180,
    y: 80,
    iconName: 'c',
    color: '#A8B9CC',
    glowColor: 'rgba(168, 185, 204, 0.35)',
    description:
      'Foundational low-level systems programming, manual memory management (pointers/malloc/free), operating system primitives, and algorithms.',
    proficiency: 85,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Operating System Memory Simulator', role: 'Page allocation & scheduling' },
      { name: 'Custom Data Structures Library', role: 'B-Trees, Graphs & Hash Tables' },
    ],
    relatedSkills: ['cpp', 'java'],
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Programming Languages',
    size: 'small',
    x: 270,
    y: 90,
    iconName: 'cpp',
    color: '#00599C',
    glowColor: 'rgba(0, 89, 156, 0.4)',
    description:
      'Object-oriented systems programming, modern C++ (C++17/20), STL containers, memory efficiency, and computational algorithm optimization.',
    proficiency: 88,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'High-Performance Graph Pathfinding', role: 'A* and Dijkstra Engine' },
      { name: 'Computer Engineering Capstone', role: 'Embedded logic & simulation' },
    ],
    relatedSkills: ['c', 'java'],
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Programming Languages',
    size: 'small',
    x: 370,
    y: 70,
    iconName: 'java',
    color: '#EA2D2E',
    glowColor: 'rgba(234, 45, 46, 0.4)',
    description:
      'Enterprise object-oriented design patterns, multi-threading, concurrency management, JVM optimization, and Spring architecture concepts.',
    proficiency: 84,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Enterprise Banking Simulator', role: 'Multithreaded transaction safety' },
      { name: 'Hospital Management System', role: 'Database models and OOP business logic' },
    ],
    relatedSkills: ['c', 'cpp', 'mysql'],
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Programming Languages',
    size: 'small',
    x: 490,
    y: 530,
    iconName: 'sql',
    color: '#E38C00',
    glowColor: 'rgba(227, 140, 0, 0.4)',
    description:
      'Relational database querying, complex multi-table joins, subqueries, ACID compliance, stored procedures, indexing, and query execution plan optimization.',
    proficiency: 90,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Healthcare Intelligence System', role: 'Relational clinical schemas' },
      { name: 'Financial Transaction Analytics', role: 'Aggregations & time-series analysis' },
    ],
    relatedSkills: ['mysql', 'nodejs'],
  },

  // ==========================================
  // FRONTEND
  // ==========================================
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    size: 'large',
    x: 210,
    y: 330,
    iconName: 'react',
    color: '#00D8FF',
    glowColor: 'rgba(0, 216, 255, 0.5)',
    description:
      'Component lifecycle, custom hooks, React Server Components (RSC), Context API, suspense boundaries, virtual DOM reconciliation, and state optimization.',
    proficiency: 96,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'Custom dynamic components & UI' },
      { name: 'Multi-Agent Support Dashboard', role: 'Real-time telemetry & streaming UI' },
      { name: 'AI Clinical Scribe Frontend', role: 'Waveform visualizer & diff editor' },
    ],
    relatedSkills: ['nextjs', 'javascript', 'typescript', 'tailwind', 'framer-motion', 'html5'],
  },
  {
    id: 'nextjs',
    name: 'Next.js (App Router)',
    category: 'Frontend',
    size: 'large',
    x: 220,
    y: 200,
    iconName: 'nextjs',
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.45)',
    description:
      'Next.js 14 App Router, Server Actions, Incremental Static Regeneration (ISR), dynamic metadata/SEO, edge middleware, and zero-bundle server logic.',
    proficiency: 94,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'App router, SEO, dark/light themes' },
      { name: 'AI Autonomous Dashboard', role: 'Streaming API routes & edge functions' },
    ],
    relatedSkills: ['react', 'typescript', 'javascript', 'tailwind', 'framer-motion', 'nodejs'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    size: 'small',
    x: 100,
    y: 300,
    iconName: 'tailwind',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    description:
      'Utility-first CSS, custom design tokens, dark mode theming, fluid typography, responsive grid/flexbox layouts, and Tailwind plugins.',
    proficiency: 95,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'Copper & Slate Design Tokens' },
      { name: 'AI Multi-Agent Dashboard', role: 'Responsive glassmorphism UI' },
    ],
    relatedSkills: ['react', 'nextjs', 'css3', 'framer-motion'],
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'Frontend',
    size: 'small',
    x: 120,
    y: 420,
    iconName: 'framer-motion',
    color: '#FF0055',
    glowColor: 'rgba(255, 0, 85, 0.45)',
    description:
      'Declarative spring animations, layout transitions, keyframes, scroll-linked parallax, gestural drag interactions, and exit animations with AnimatePresence.',
    proficiency: 92,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'Skill constellation & modal transitions' },
      { name: 'Interactive Case Studies', role: 'Magnetic cards & interactive drawers' },
    ],
    relatedSkills: ['react', 'nextjs', 'tailwind', 'css3'],
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    size: 'small',
    x: 90,
    y: 190,
    iconName: 'html5',
    color: '#E34F26',
    glowColor: 'rgba(227, 79, 38, 0.4)',
    description:
      'Semantic web structure, accessibility (ARIA roles & WCAG 2.1), Open Graph meta tags, microdata, audio/video APIs, and responsive layout foundations.',
    proficiency: 98,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'Semantic markup & 100 Lighthouse score' },
      { name: 'Accessible Clinical Interface', role: 'Screen-reader friendly medical records' },
    ],
    relatedSkills: ['css3', 'javascript', 'react'],
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend',
    size: 'small',
    x: 60,
    y: 380,
    iconName: 'css3',
    color: '#1572B6',
    glowColor: 'rgba(21, 114, 182, 0.4)',
    description:
      'Modern CSS Grid, Flexbox, custom properties, glassmorphism filters, keyframe animations, 3D transforms, and container queries.',
    proficiency: 95,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Executive Portfolio Website', role: 'Luxury glassmorphism & gradients' },
      { name: 'Interactive UI Experiments', role: '3D hover cards & glow borders' },
    ],
    relatedSkills: ['html5', 'tailwind', 'framer-motion'],
  },

  // ==========================================
  // BACKEND & APIS
  // ==========================================
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend & APIs',
    size: 'medium',
    x: 430,
    y: 380,
    iconName: 'nodejs',
    color: '#539E43',
    glowColor: 'rgba(83, 158, 67, 0.5)',
    description:
      'Event-driven asynchronous I/O backend runtime, HTTP/HTTPS web servers, child processes, worker threads, clustering, and streaming large payloads.',
    proficiency: 93,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Multi-Agent Support Backend', role: 'Real-time WebSocket orchestration' },
      { name: 'AI Voice Scribe API Gateway', role: 'Streaming audio processing' },
    ],
    relatedSkills: ['express', 'javascript', 'typescript', 'rest-api', 'mysql', 'sql', 'nextjs'],
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend & APIs',
    size: 'small',
    x: 440,
    y: 470,
    iconName: 'express',
    color: '#68A063',
    glowColor: 'rgba(104, 160, 99, 0.4)',
    description:
      'Microservice routing, custom middleware pipelines, JWT/OAuth authentication, error boundaries, rate limiting, and CORS security hardening.',
    proficiency: 92,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Multi-Agent Backend API', role: 'REST endpoints & middleware' },
      { name: 'Secure Authentication Microservice', role: 'JWT & token rotation' },
    ],
    relatedSkills: ['nodejs', 'rest-api', 'postman', 'mysql'],
  },
  {
    id: 'rest-api',
    name: 'REST API Design',
    category: 'Backend & APIs',
    size: 'small',
    x: 550,
    y: 430,
    iconName: 'rest-api',
    color: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    description:
      'Stateless architecture, OpenAPI/Swagger specifications, idempotent HTTP verbs, versioning strategies, pagination, and unified error schemas.',
    proficiency: 95,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Autonomous Multi-Agent Telemetry', role: 'Standardized payload schemas' },
      { name: 'AI Healthcare Gateway', role: 'Secure REST endpoints & webhooks' },
    ],
    relatedSkills: ['nodejs', 'express', 'postman', 'nextjs'],
  },

  // ==========================================
  // AI / MACHINE LEARNING
  // ==========================================
  {
    id: 'openai',
    name: 'OpenAI API',
    category: 'AI / Machine Learning',
    size: 'medium',
    x: 880,
    y: 190,
    iconName: 'openai',
    color: '#10A37F',
    glowColor: 'rgba(16, 163, 127, 0.5)',
    description:
      'Advanced GPT-4o integration, function calling, JSON structured outputs, prompt optimization, embeddings generation, and token budget management.',
    proficiency: 95,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'Multi-Agent Customer Support', role: 'Intent classification & response generation' },
      { name: 'AI Voice Clinical Scribe', role: 'Medical summarization & structured SOAP notes' },
      { name: 'Portfolio Interactive Assistant', role: 'Contextual persona and Q&A engine' },
    ],
    relatedSkills: ['python', 'langchain', 'rag', 'llm'],
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'AI / Machine Learning',
    size: 'small',
    x: 860,
    y: 310,
    iconName: 'langchain',
    color: '#C27A45',
    glowColor: 'rgba(194, 122, 69, 0.45)',
    description:
      'Autonomous agent loops (ReAct), multi-tool dynamic dispatch, memory managers, output parsers, recursive retrieval chains, and document loaders.',
    proficiency: 92,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'Autonomous Research Multi-Agent', role: 'Multi-agent orchestration loop' },
      { name: 'Enterprise Document Q&A', role: 'RAG retrieval chains & rerankers' },
    ],
    relatedSkills: ['python', 'openai', 'rag', 'llm'],
  },
  {
    id: 'rag',
    name: 'RAG (Retrieval-Augmented)',
    category: 'AI / Machine Learning',
    size: 'small',
    x: 730,
    y: 330,
    iconName: 'rag',
    color: '#D89B65',
    glowColor: 'rgba(216, 155, 101, 0.45)',
    description:
      'Vector similarity search, chunking strategies (recursive, semantic), dense embedding generation, hybrid sparse/dense search, and cross-encoder reranking.',
    proficiency: 93,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'Enterprise Knowledge RAG', role: 'Multi-document semantic retrieval' },
      { name: 'AI Clinical Knowledge Base', role: 'Medical literature lookup & citation' },
    ],
    relatedSkills: ['python', 'openai', 'langchain', 'llm'],
  },
  {
    id: 'llm',
    name: 'LLM Engineering',
    category: 'AI / Machine Learning',
    size: 'small',
    x: 800,
    y: 430,
    iconName: 'llm',
    color: '#E07A5F',
    glowColor: 'rgba(224, 122, 95, 0.45)',
    description:
      'System prompt architecture, chain-of-thought prompting, few-shot conditioning, hallucination mitigation, guardrails, and evaluation benchmarks.',
    proficiency: 94,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'Autonomous Research Multi-Agent', role: 'Self-correcting verification agents' },
      { name: 'AI Voice Clinical Scribe', role: 'Strict schema adherence and validation' },
    ],
    relatedSkills: ['python', 'openai', 'langchain', 'rag'],
  },

  // ==========================================
  // DATABASE
  // ==========================================
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    size: 'medium',
    x: 600,
    y: 540,
    iconName: 'mysql',
    color: '#00758F',
    glowColor: 'rgba(0, 117, 143, 0.45)',
    description:
      'Relational database architecture, InnoDB storage engine, foreign key constraints, transactions (isolation levels), index tuning (B-Tree), and migration scripts.',
    proficiency: 90,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Multi-Agent Support Backend', role: 'User accounts & audit logs' },
      { name: 'Healthcare Information System', role: 'Normalized patient database schemas' },
    ],
    relatedSkills: ['sql', 'nodejs', 'express'],
  },

  // ==========================================
  // DEV TOOLS
  // ==========================================
  {
    id: 'git',
    name: 'Git',
    category: 'Dev Tools',
    size: 'small',
    x: 880,
    y: 530,
    iconName: 'git',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.4)',
    description:
      'Distributed version control, branching workflows (GitFlow, trunk-based), interactive rebasing, merge conflict resolution, and commit hygiene.',
    proficiency: 96,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'All Production Repositories', role: 'Version control & release tagging' },
    ],
    relatedSkills: ['github', 'vscode'],
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Dev Tools',
    size: 'small',
    x: 930,
    y: 450,
    iconName: 'github',
    color: '#F6F5F3',
    glowColor: 'rgba(255, 255, 255, 0.35)',
    description:
      'GitHub Actions CI/CD automated pipelines, Pull Request reviews, issue triage, project boards, and branch protection rules.',
    proficiency: 94,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Automated CI/CD Workflows', role: 'Build validation, linting & deployment' },
    ],
    relatedSkills: ['git', 'vscode'],
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Dev Tools',
    size: 'small',
    x: 690,
    y: 100,
    iconName: 'vscode',
    color: '#007ACC',
    glowColor: 'rgba(0, 122, 204, 0.4)',
    description:
      'Primary development IDE, custom debugging profiles, multi-root workspaces, snippet engineering, and containerized dev environments.',
    proficiency: 98,
    experienceYears: '4+ Yrs',
    projects: [
      { name: 'Engineering Workspace', role: 'Full-stack & AI development setup' },
    ],
    relatedSkills: ['git', 'github', 'typescript', 'python'],
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Dev Tools',
    size: 'small',
    x: 540,
    y: 350,
    iconName: 'postman',
    color: '#FF6C37',
    glowColor: 'rgba(255, 108, 55, 0.4)',
    description:
      'API collection design, environment variables, automated pre-request scripts, test assertions, and mock server orchestration.',
    proficiency: 92,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Multi-Agent API Testing Suite', role: 'Automated endpoint validation' },
      { name: 'AI Voice Scribe Webhook Testing', role: 'Mock streaming responses' },
    ],
    relatedSkills: ['rest-api', 'nodejs', 'express'],
  },
];

// Explicit skill connections for bidirectional graph rendering
export const skillConnections: SkillConnection[] = [
  // Core languages
  { source: 'c', target: 'cpp' },
  { source: 'cpp', target: 'java' },
  { source: 'c', target: 'java' },
  { source: 'javascript', target: 'typescript' },
  { source: 'javascript', target: 'react' },
  { source: 'javascript', target: 'nextjs' },
  { source: 'javascript', target: 'nodejs' },
  { source: 'javascript', target: 'express' },
  { source: 'javascript', target: 'html5' },
  { source: 'typescript', target: 'react' },
  { source: 'typescript', target: 'nextjs' },
  { source: 'typescript', target: 'nodejs' },

  // Frontend web
  { source: 'react', target: 'nextjs' },
  { source: 'react', target: 'tailwind' },
  { source: 'react', target: 'framer-motion' },
  { source: 'react', target: 'html5' },
  { source: 'nextjs', target: 'tailwind' },
  { source: 'nextjs', target: 'framer-motion' },
  { source: 'nextjs', target: 'nodejs' },
  { source: 'tailwind', target: 'css3' },
  { source: 'tailwind', target: 'framer-motion' },
  { source: 'html5', target: 'css3' },
  { source: 'css3', target: 'framer-motion' },

  // Backend & APIs
  { source: 'nodejs', target: 'express' },
  { source: 'nodejs', target: 'rest-api' },
  { source: 'nodejs', target: 'mysql' },
  { source: 'nodejs', target: 'sql' },
  { source: 'express', target: 'rest-api' },
  { source: 'express', target: 'postman' },
  { source: 'express', target: 'mysql' },
  { source: 'rest-api', target: 'postman' },
  { source: 'rest-api', target: 'nextjs' },

  // Database
  { source: 'sql', target: 'mysql' },
  { source: 'java', target: 'mysql' },

  // AI & ML
  { source: 'python', target: 'openai' },
  { source: 'python', target: 'langchain' },
  { source: 'python', target: 'rag' },
  { source: 'python', target: 'llm' },
  { source: 'openai', target: 'langchain' },
  { source: 'openai', target: 'rag' },
  { source: 'openai', target: 'llm' },
  { source: 'langchain', target: 'rag' },
  { source: 'langchain', target: 'llm' },
  { source: 'rag', target: 'llm' },
  { source: 'rag', target: 'mysql' },

  // Dev Tools
  { source: 'git', target: 'github' },
  { source: 'git', target: 'vscode' },
  { source: 'github', target: 'vscode' },
  { source: 'vscode', target: 'typescript' },
  { source: 'vscode', target: 'python' },
];
