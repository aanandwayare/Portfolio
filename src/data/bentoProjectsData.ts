export type BentoCardSize = 'featured-xl' | 'wide' | 'square' | 'compact';

export type BentoCategory =
  | 'AI'
  | 'Full Stack'
  | 'Machine Learning'
  | 'Android'
  | 'Web'
  | 'Open Source';

export type BentoProjectStatus = 'Production' | 'Live' | 'Featured' | 'Open Source' | 'Beta';

export interface BentoArchitectureNode {
  step: string;
  tech: string;
  desc: string;
  color?: string;
}

export interface BentoChallenge {
  problem: string;
  solution: string;
  result: string;
}

export interface BentoTimelineItem {
  phase: string;
  desc: string;
  date: string;
}

export interface BentoProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface BentoProject {
  id: string;
  title: string;
  subtitle: string;
  category: BentoCategory;
  featured: boolean;
  size: BentoCardSize;
  status: BentoProjectStatus;
  year: string;
  description: string;
  heroImage: string;
  mockupType: 'browser' | 'laptop' | 'phone';
  gallery: { url: string; title: string; desc: string }[];
  technologies: string[];
  github: string;
  liveDemo: string;
  caseStudy: string;
  overview: string;
  problemStatement: string;
  solution: string;
  features: string[];
  architecture: BentoArchitectureNode[];
  metrics: BentoProjectMetric[];
  timeline: BentoTimelineItem[];
  challenges: BentoChallenge[];
  lessonsLearned: string[];
  relatedProjectIds: string[];
}

export const BENTO_CATEGORIES: ('All' | BentoCategory)[] = [
  'All',
  'AI',
  'Full Stack',
  'Machine Learning',
  'Android',
  'Web',
  'Open Source',
];

export const bentoProjectsData: BentoProject[] = [
  {
    id: 'neuroflow-ai',
    title: 'NeuroFlow AI',
    subtitle: 'Autonomous AI Multi-Agent Workflow Engine & LLM Orchestrator',
    category: 'AI',
    featured: true,
    size: 'featured-xl',
    status: 'Featured',
    year: '2024',
    description:
      'Enterprise platform for orchestrating, visualizing, and executing collaborative multi-agent AI swarms with vector RAG and live streaming token telemetry.',
    overview:
      'NeuroFlow AI is an end-to-end framework allowing developers to construct autonomous agent swarms that coordinate on complex engineering workflows like automated research, code refactoring, and multi-step data synthesis.',
    problemStatement:
      'Multi-agent LLM systems often suffer from runaway recursion, unbounded token spend, lack of real-time trace visibility, and brittle tool integrations.',
    solution:
      'Engineered a DAG-based visual orchestration canvas with recursive circuit breakers, structured JSON validation, and token-by-token Server-Sent Events streaming.',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'browser',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
        title: 'Visual Workflow Orchestration Canvas',
        desc: 'Interactive node graph connecting prompt templates, memory banks, and tool dispatchers.',
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        title: 'Real-Time Streaming Telemetry',
        desc: 'Live token consumption, step latency, and vector similarity metrics.',
      },
    ],
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Python',
      'LangChain',
      'OpenAI API',
      'MySQL',
      'Tailwind CSS',
      'FastAPI',
    ],
    github: 'https://github.com/aanandwayare/neuroflow-ai',
    liveDemo: 'https://neuroflow-ai-demo.vercel.app',
    caseStudy: 'https://github.com/aanandwayare/neuroflow-ai#architecture',
    architecture: [
      {
        step: '1. Frontend Interface',
        tech: 'Next.js 14 + React Flow',
        desc: 'Interactive DAG canvas with real-time SSE streaming thought traces.',
        color: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. Orchestration API',
        tech: 'FastAPI + Python Worker Pool',
        desc: 'Non-blocking async task dispatch with memory buffer managers.',
        color: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '3. Vector & Relational Store',
        tech: 'MySQL + Vector Index',
        desc: 'Hybrid metadata storage with dense vector similarity indexes.',
        color: 'border-indigo-500/40 text-indigo-400',
      },
      {
        step: '4. Autonomous Intelligence',
        tech: 'OpenAI GPT-4o + LangChain',
        desc: 'Function calling, structured JSON output validation, and tool loops.',
        color: 'border-[#FF6B00]/40 text-[#FF8C35]',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '38,400+', change: '+15% optimized' },
      { label: 'Modules', value: '26', change: 'Microservices' },
      { label: 'API Calls', value: '1.8M/mo', change: '99.98% SLA' },
      { label: 'Performance', value: '38ms', change: 'P95 Latency' },
      { label: 'Accuracy', value: '98.6%', change: 'Benchmarked' },
      { label: 'Active Users', value: '8,400+', change: 'Global' },
    ],
    timeline: [
      { phase: 'Concept & Spec', desc: 'Identified bottleneck in autonomous multi-agent looping.', date: 'Q1 2024' },
      { phase: 'Architecture', desc: 'Architected async DAG dispatch schema and memory lifecycle.', date: 'Q2 2024' },
      { phase: 'Core Engine', desc: 'Engineered Next.js 14 frontend, LangChain pipelines, and FastAPI workers.', date: 'Q3 2024' },
      { phase: 'Production Launch', desc: 'Simulated 500 concurrent agent swarms and deployed to cloud.', date: 'Q4 2024' },
    ],
    challenges: [
      {
        problem: 'Infinite agent reasoning loops causing runaway token consumption during recursive research.',
        solution: 'Engineered recursive circuit breakers, depth limits, and stateful token budget monitors.',
        result: '45% token cost reduction and zero runaway loops in production.',
      },
      {
        problem: 'High latency when chaining multiple LLM tool calls and vector searches.',
        solution: 'Implemented speculative parallel tool execution and local semantic response caching.',
        result: 'Reduced multi-step response latency from 4.8s to 1.2s.',
      },
    ],
    features: [
      'Visual DAG workflow builder with drag-and-drop nodes',
      'Real-time token-by-token streaming thought inspection',
      'Hybrid dense & sparse RAG retrieval engine',
    ],
    lessonsLearned: [
      'Token optimization needs to be applied at the agent design level, not just the code execution level.',
      'RAG performance degrades quickly without strict metadata filtering and chunk verification.',
    ],
    relatedProjectIds: ['devnexus-cloud', 'visionpulse-ml'],
  },
  {
    id: 'devnexus-cloud',
    title: 'DevNexus Cloud',
    subtitle: 'Collaborative Real-Time Developer Workspace & Java Backend Canvas',
    category: 'Full Stack',
    featured: true,
    size: 'wide',
    status: 'Live',
    year: '2025',
    description:
      'A full-stack modern developer platform enabling multi-user real-time code collaboration, live compiler sandboxes, and Java Spring Boot backend infrastructure.',
    overview:
      'DevNexus was designed to solve friction in remote pair programming and technical interviews by combining low-latency shared editors with sandboxed code execution and interactive debugging.',
    problemStatement:
      'Collaborative coding platforms often struggle with synchronization conflicts and lack secure, high-performance compilation environments.',
    solution:
      'Built a Spring Boot WebSocket gateway utilizing CRDT for conflict-free syncing, paired with an isolated Docker container pool for sandboxed code compilation.',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'browser',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
        title: 'Multi-User Code Collaboration',
        desc: 'Simultaneous coding session with syntax highlighting and presence indicators.',
      },
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Java',
      'Spring Boot',
      'Hibernate',
      'WebSockets',
      'MySQL',
      'Docker',
    ],
    github: 'https://github.com/aanandwayare/devnexus-cloud',
    liveDemo: 'https://devnexus-cloud.vercel.app',
    caseStudy: 'https://github.com/aanandwayare/devnexus-cloud#architecture',
    architecture: [
      {
        step: '1. User Client',
        tech: 'Next.js + Monaco Editor',
        desc: 'Browser code workspace with real-time cursor tracking and terminal logs.',
        color: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. Connection Hub',
        tech: 'Spring Boot WebSockets',
        desc: 'Handling concurrent user sessions and broadcasting keystrokes via STOMP.',
        color: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '3. Compiler Pool',
        tech: 'Docker Containers + Linux Daemon',
        desc: 'Isolated, sandboxed environments to compile and run code commands.',
        color: 'border-indigo-500/40 text-indigo-400',
      },
    ],
    metrics: [
      { label: 'Sync Latency', value: '<25ms', change: 'Sub-frame delay' },
      { label: 'Concurrency', value: '500+', change: 'Simultaneous users' },
      { label: 'Isolation', value: '100%', change: 'Docker sandbox' },
    ],
    timeline: [
      { phase: 'Prototype', desc: 'Built simple React + Node editor prototype.', date: 'Jan 2025' },
      { phase: 'Java Migration', desc: 'Migrated backend services to Java and Spring Boot for scalability.', date: 'Mar 2025' },
    ],
    challenges: [
      {
        problem: 'Handling race conditions during rapid editing from multiple users.',
        solution: 'Implemented optimistic replication with server-side sequence reconciliation.',
        result: 'Eliminated text duplication and cursor jumping.',
      },
    ],
    features: [
      'Multi-cursor live code editing with user presence and typing indicators',
      'Instant one-click execution sandbox with stdin/stdout streaming',
    ],
    lessonsLearned: [
      'Java Spring Boot provides robust concurrency management natively compared to single-threaded runtimes.',
      'Security isolation in compile environments requires robust Docker daemon access limits.',
    ],
    relatedProjectIds: ['neuroflow-ai', 'echomarket'],
  },
  {
    id: 'visionpulse-ml',
    title: 'VisionPulse ML',
    subtitle: 'Real-Time Computer Vision & Medical Imaging Diagnostic Suite',
    category: 'Machine Learning',
    featured: true,
    size: 'square',
    status: 'Beta',
    year: '2024',
    description:
      'Computer vision system powered by fine-tuned DenseNet-121 classifiers generating Grad-CAM heatmaps for anatomical anomaly detection.',
    overview:
      'VisionPulse provides an intuitive, high-accuracy diagnostic aid for healthcare professionals to inspect radiological scans, identify micro-anomalies, and review visual explainability heatmaps.',
    problemStatement:
      'Healthcare AI platforms often operate as black boxes, preventing doctors from verifying where and why a model classified an anomaly.',
    solution:
      'Integrated Grad-CAM (Gradient-weighted Class Activation Mapping) visualizations directly overlaying high-activation regions onto radiological scans.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'browser',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
        title: 'DICOM Viewer & Grad-CAM Output',
        desc: 'Explainable AI layer highlighting anomaly probability structures.',
      },
    ],
    technologies: ['Python', 'OpenCV', 'Scikit-Learn', 'Flask', 'React', 'Tailwind CSS'],
    github: 'https://github.com/aanandwayare/visionpulse-ml',
    liveDemo: 'https://visionpulse-ml.vercel.app',
    caseStudy: 'https://github.com/aanandwayare/visionpulse-ml',
    architecture: [
      {
        step: '1. Model Backbone',
        tech: 'PyTorch + DenseNet-121',
        desc: 'Feature extractor pre-trained on ImageNet and fine-tuned on clinical datasets.',
        color: 'border-rose-500/40 text-rose-400',
      },
    ],
    metrics: [
      { label: 'Accuracy', value: '96.8%', change: 'Validated' },
      { label: 'Inference', value: '42ms', change: 'GPU accelerated' },
    ],
    timeline: [
      { phase: 'Dataset Prep', desc: 'Normalized and augmented 25,000+ DICOM images.', date: 'Q2 2024' },
    ],
    challenges: [
      {
        problem: 'Severe class imbalance in target medical scans.',
        solution: 'Employed Focal Loss functions and targeted elastic transformations.',
        result: 'Boosted F1-score by 12.4% for rare diagnostic categories.',
      },
    ],
    features: [
      'Drag-and-drop scan upload with automatic format normalization',
      'Side-by-side comparative inspection with toggleable Grad-CAM heatmap overlay',
    ],
    lessonsLearned: [
      'Explainability is not just a feature; it is a clinical requirement for medical diagnostics.',
    ],
    relatedProjectIds: ['neuroflow-ai'],
  },
  {
    id: 'echomarket',
    title: 'EchoMarket Intelligent Commerce',
    subtitle: 'High-Performance E-Commerce Platform with Java Spring Boot Backend',
    category: 'Full Stack',
    featured: false,
    size: 'compact',
    status: 'Live',
    year: '2025',
    description:
      'Headless e-commerce web application featuring Spring Boot REST APIs, Hibernate validation, Stripe payments, and a Next.js catalog storefront.',
    overview:
      'EchoMarket is a headless e-commerce store optimized for sub-second page transitions, dynamic inventory tracking, and secure transaction workflows.',
    problemStatement:
      'Legacy e-commerce sites experience slow response times, transaction drops during scale spikes, and complex relational catalog management.',
    solution:
      'Designed a Spring Boot microservice with Hibernate mapping to MySQL database, integrating Stripe Checkout for payment orchestration.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'browser',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        title: 'Heads-up Storefront Catalog',
        desc: 'Faceted search catalog with client-side caching for instant rendering.',
      },
    ],
    technologies: [
      'Next.js',
      'React',
      'Java',
      'Spring Boot',
      'Hibernate',
      'MySQL',
      'Stripe API',
      'Tailwind CSS',
    ],
    github: 'https://github.com/aanandwayare/echomarket',
    liveDemo: 'https://echomarket-demo.vercel.app',
    caseStudy: 'https://github.com/aanandwayare/echomarket',
    architecture: [
      {
        step: '1. API Router',
        tech: 'Spring MVC Controller',
        desc: 'Exposing paginated endpoints with catalog search parameters.',
        color: 'border-indigo-500/40 text-indigo-400',
      },
    ],
    metrics: [
      { label: 'Page Load', value: '0.6s', change: 'Sub-second' },
      { label: 'Conversion', value: '+32%', change: 'A/B Tested' },
    ],
    timeline: [
      { phase: 'Dev Phase', desc: 'Wrote database schemas and mapped ORM entities.', date: 'May 2025' },
    ],
    challenges: [
      {
        problem: 'Catalog database slow-downs under concurrent filtering query loads.',
        solution: 'Mapped composite relational indexes in MySQL and optimized JPA queries.',
        result: 'Query times dropped from 220ms to 12ms.',
      },
    ],
    features: [
      'Faceted product filtering with live URL state sync',
      'AI recommended carousel based on cart contents',
    ],
    lessonsLearned: [
      'Headless architectures decouple presentation from logic, improving conversion metrics.',
    ],
    relatedProjectIds: ['devnexus-cloud'],
  },
];
