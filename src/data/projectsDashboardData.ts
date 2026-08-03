export type ProjectCategory =
  | 'AI'
  | 'Full Stack'
  | 'Machine Learning'
  | 'Android'
  | 'Open Source';

export type ProjectStatus = 'Production' | 'Live' | 'Featured' | 'Open Source' | 'Beta';

export type MockupType = 'browser' | 'laptop' | 'phone';

export interface ArchitectureNode {
  step: string;
  tech: string;
  desc: string;
  badgeColor?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  icon?: string;
}

export interface TimelinePhase {
  phase: 'Idea' | 'Planning' | 'Design' | 'Development' | 'Testing' | 'Deployment';
  status: 'completed' | 'current' | 'upcoming';
  desc: string;
}

export interface EngineeringChallenge {
  problem: string;
  solution: string;
  result: string;
}

export interface DashboardProject {
  id: string;
  title: string;
  emoji: string;
  category: ProjectCategory;
  status: ProjectStatus;
  subtitle: string;
  description: string;
  overview: string;
  mockupType: MockupType;
  heroImage: string;
  gallery: { url: string; title: string; desc: string }[];
  technologies: string[];
  github: string;
  liveDemo: string;
  documentation: string;
  architecture: ArchitectureNode[];
  metrics: ProjectMetric[];
  timeline: TimelinePhase[];
  challenges: EngineeringChallenge[];
  features: string[];
}

export const PROJECT_CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'AI',
  'Full Stack',
  'Machine Learning',
  'Android',
  'Open Source',
];

export const projectsDashboardData: DashboardProject[] = [
  {
    id: 'neuroflow-ai',
    title: 'NeuroFlow AI',
    emoji: '🤖',
    category: 'AI',
    status: 'Featured',
    subtitle: 'Autonomous AI Multi-Agent Platform',
    description:
      'Enterprise platform for orchestrating, visualizing, and executing collaborative multi-agent AI swarms with vector RAG and streaming token telemetry.',
    overview:
      'NeuroFlow AI is an end-to-end framework allowing developers and enterprises to construct autonomous agent swarms that coordinate on complex engineering tasks like automated research, code refactoring, and multi-step data synthesis.',
    mockupType: 'browser',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
        title: 'Interactive Agent Flow Builder',
        desc: 'Drag-and-drop visual canvas connecting prompt nodes and tool dispatchers.',
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
    documentation: 'https://github.com/aanandwayare/neuroflow-ai#readme',
    architecture: [
      {
        step: '1. Frontend Interface',
        tech: 'Next.js 14 + React Flow',
        desc: 'Interactive DAG canvas with real-time SSE streaming thought traces.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. Orchestration API',
        tech: 'FastAPI + Python Worker Pool',
        desc: 'Non-blocking async task dispatch with memory buffer managers.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '3. Vector & Relational Store',
        tech: 'MySQL + Vector Store',
        desc: 'Hybrid metadata storage with dense vector similarity indexes.',
        badgeColor: 'border-indigo-500/40 text-indigo-400',
      },
      {
        step: '4. Autonomous Intelligence',
        tech: 'OpenAI GPT-4o + LangChain',
        desc: 'Function calling, structured JSON output validation, and tool loops.',
        badgeColor: 'border-[#FF6B00]/40 text-[#FF8C35]',
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
      { phase: 'Idea', status: 'completed', desc: 'Identified bottleneck in autonomous multi-agent looping.' },
      { phase: 'Planning', status: 'completed', desc: 'Architected async DAG dispatch schema and memory lifecycle.' },
      { phase: 'Design', status: 'completed', desc: 'Created high-fidelity Figma workspace with dark executive styling.' },
      { phase: 'Development', status: 'completed', desc: 'Engineered Next.js 14 frontend, LangChain pipelines, and FastAPI workers.' },
      { phase: 'Testing', status: 'completed', desc: 'Simulated 500 concurrent agent swarms and token edge cases.' },
      { phase: 'Deployment', status: 'completed', desc: 'Deployed across Vercel Edge and AWS container clusters.' },
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
      'Automated fallback tool execution and self-healing error recovery',
      'Multi-tenant role-based workspace management with API keys',
      'Custom LLM temperature, system prompt, and structured output editor',
    ],
  },
  {
    id: 'devnexus-cloud',
    title: 'DevNexus Cloud',
    emoji: '🌐',
    category: 'Full Stack',
    status: 'Live',
    subtitle: 'Real-Time Developer Cloud Workspace',
    description:
      'A full-stack collaborative developer environment featuring multi-cursor live code editing, sandboxed compiler execution, WebRTC huddles, and Spring Boot backend.',
    overview:
      'DevNexus eliminates friction in remote engineering collaboration, pair programming, and live coding interviews by combining low-latency shared editors with instant isolated Docker execution sandboxes.',
    mockupType: 'laptop',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
        title: 'Multi-User Collaborative Code Editor',
        desc: 'Monaco editor with colored cursor presence and live cursor sync.',
      },
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Java',
      'Spring Boot',
      'Hibernate',
      'WebSockets',
      'MySQL',
      'Docker',
      'Tailwind CSS',
    ],
    github: 'https://github.com/aanandwayare/devnexus-cloud',
    liveDemo: 'https://devnexus-cloud.vercel.app',
    documentation: 'https://github.com/aanandwayare/devnexus-cloud#architecture',
    architecture: [
      {
        step: '1. Client Workspace',
        tech: 'Next.js + Monaco Editor',
        desc: 'CRDT operational transformation with optimistic cursor updates.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. Connection Hub',
        tech: 'Spring Boot WebSockets',
        desc: 'Broadcasting keystrokes and presence distribution via WebSocket channel.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '3. Compiler Sandbox',
        tech: 'Docker Engine',
        desc: 'Isolated execution sandbox with strict CPU/memory limits.',
        badgeColor: 'border-amber-500/40 text-amber-400',
      },
      {
        step: '4. Relational Persistence',
        tech: 'MySQL + Hibernate',
        desc: 'Normalized schema for workspaces, files, versions, and permissions.',
        badgeColor: 'border-indigo-500/40 text-indigo-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '42,100+', change: 'Spring Boot & TS' },
      { label: 'Sync Latency', value: '<25ms', change: 'Sub-frame delay' },
      { label: 'Languages', value: '12', change: 'Compilers' },
      { label: 'Concurrent Users', value: '500+', change: 'Stress Tested' },
      { label: 'Code Executions', value: '450K+', change: 'Safe Container' },
      { label: 'Uptime', value: '99.99%', change: 'High Availability' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Conceived unified workspace for real-time remote pair programming.' },
      { phase: 'Planning', status: 'completed', desc: 'Selected CRDT algorithms and Docker containment architecture.' },
      { phase: 'Design', status: 'completed', desc: 'Designed modern IDE layout inspired by VS Code.' },
      { phase: 'Development', status: 'completed', desc: 'Built WebSocket gateway, Monaco editor extensions, and compile runners.' },
      { phase: 'Testing', status: 'completed', desc: 'Simulated 50 users simultaneously editing a single source file.' },
      { phase: 'Deployment', status: 'completed', desc: 'Live on production with edge routing and automatic container recycling.' },
    ],
    challenges: [
      {
        problem: 'Handling concurrent keystrokes and avoiding race conditions or cursor position drift.',
        solution: 'Implemented Yjs CRDT data structures backed by server-side reconciliation queues.',
        result: '100% deterministic conflict-free synchronization under sub-25ms latency.',
      },
    ],
    features: [
      'Multi-cursor live code editing with user presence and typing indicators',
      'One-click code execution for 12+ languages with interactive terminal',
      'WebRTC audio/video huddles with crystal-clear screen sharing',
      'Instant GitHub repository import and automated branch commit pushes',
    ],
  },
  {
    id: 'visionpulse-ml',
    title: 'VisionPulse ML',
    emoji: '🛡',
    category: 'Machine Learning',
    status: 'Production',
    subtitle: 'Diagnostic AI & Medical Imaging Suite',
    description:
      'Computer vision diagnostic system leveraging Convolutional Neural Networks and Grad-CAM for medical scan classification and visual explainability.',
    overview:
      'VisionPulse ML provides an intuitive, high-accuracy diagnostic aid for healthcare professionals to inspect radiological scans, identify micro-anomalies, and review visual explainability heatmaps in real time.',
    mockupType: 'browser',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
        title: 'DICOM Radiography Inspector',
        desc: 'Interactive high-resolution scan viewer with zoom, pan, and contrast filters.',
      },
    ],
    technologies: [
      'Python',
      'PyTorch',
      'OpenCV',
      'Flask',
      'React.js',
      'MySQL',
      'Tailwind CSS',
    ],
    github: 'https://github.com/aanandwayare/visionpulse-ml',
    liveDemo: 'https://visionpulse-ml.vercel.app',
    documentation: 'https://github.com/aanandwayare/visionpulse-ml#research',
    architecture: [
      {
        step: '1. Image Processing',
        tech: 'OpenCV + Albumentations',
        desc: 'DICOM normalization, CLAHE enhancement, and tensor scaling.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. Deep Learning Core',
        tech: 'PyTorch + DenseNet-121',
        desc: 'Transfer learning on medical radiology datasets with focal loss.',
        badgeColor: 'border-copper-500/40 text-copper-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '24,800+', change: 'Python & React' },
      { label: 'Model Accuracy', value: '96.8%', change: 'Validated AUC' },
      { label: 'Inference Speed', value: '42ms', change: 'GPU Accelerated' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Identified need for explainable AI in radiological decision support.' },
      { phase: 'Planning', status: 'completed', desc: 'Curated balanced dataset and selected CNN architecture.' },
      { phase: 'Design', status: 'completed', desc: 'Created clinical dark UI with high-contrast scan viewports.' },
      { phase: 'Development', status: 'completed', desc: 'Trained model in PyTorch and built Flask streaming inference pipeline.' },
    ],
    challenges: [
      {
        problem: 'Class imbalance in rare radiological pathologies skewing model predictions.',
        solution: 'Employed focal loss functions and extensive synthetic augmentation (elastic deformation).',
        result: 'Boosted minority class recall from 78% to 94.5%.',
      },
    ],
    features: [
      'Drag-and-drop DICOM and PNG medical scan upload with instant preprocessing',
      'Side-by-side comparative inspection with toggleable Grad-CAM heatmap overlay',
      'Automated diagnostic PDF report generator with anomaly percentage scores',
    ],
  },
  {
    id: 'healthpulse-mobile',
    title: 'HealthPulse Companion',
    emoji: '📱',
    category: 'Android',
    status: 'Live',
    subtitle: 'Mobile Patient & Vitals Companion',
    description:
      'Native Android companion application built in Java with Material Design 3, SQLite offline-first caching, and real-time Bluetooth LE vitals sync.',
    overview:
      'HealthPulse Mobile brings clinical biometric telemetry to patients with offline-first synchronization, medication compliance reminders, emergency SOS triggers, and interactive biometric graphs.',
    mockupType: 'phone',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        title: 'Real-Time Vitals Dashboard',
        desc: 'Interactive pulse, SpO2, and blood pressure graphs with trend alerts.',
      },
    ],
    technologies: [
      'Java',
      'Android SDK',
      'SQLite',
      'Retrofit',
      'Material Design 3',
      'Bluetooth LE',
      'REST APIs',
    ],
    github: 'https://github.com/aanandwayare/healthpulse-mobile',
    liveDemo: 'https://github.com/aanandwayare/healthpulse-mobile/releases',
    documentation: 'https://github.com/aanandwayare/healthpulse-mobile#readme',
    architecture: [
      {
        step: '1. Native Mobile UI',
        tech: 'Material 3 + Android XML',
        desc: 'Fluid gestural animations with responsive layouts.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '2. Hardware Telemetry',
        tech: 'Bluetooth Low Energy (BLE)',
        desc: 'Continuous sensor packet decoding and background service listeners.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '19,500+', change: 'Clean Architecture' },
      { label: 'Sync Success', value: '99.9%', change: 'Offline First' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Identified gap in reliable offline vitals tracking.' },
      { phase: 'Planning', status: 'completed', desc: 'Designed BLE communication protocol and SQLite database schemas.' },
    ],
    challenges: [
      {
        problem: 'Battery drain caused by continuous Bluetooth background polling.',
        solution: 'Implemented dynamic packet batching and event-driven wake locks using Android WorkManager.',
        result: 'Reduced battery consumption by 68%.',
      },
    ],
    features: [
      'Real-time Bluetooth LE vitals streaming (Pulse, SpO2, Blood Pressure)',
      'Offline-first architecture with automatic background cloud synchronization',
    ],
  },
  {
    id: 'algoverse-3d',
    title: 'Algoverse 3D',
    emoji: '🧬',
    category: 'Open Source',
    status: 'Featured',
    subtitle: 'Interactive 3D Algorithm Sandbox',
    description:
      'An educational 3D visualizer that transforms abstract data structures and algorithms (Trees, Graphs, Pathfinding) into step-by-step spatial animations.',
    overview:
      'Algoverse 3D provides students and engineers with an intuitive spatial understanding of complex algorithms, offering step-by-step playback, time-complexity analysis, and interactive node manipulation.',
    mockupType: 'browser',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
        title: '3D Spatial Binary Tree Traversal',
        desc: 'Interactive node rotations and step-by-step recursive stack inspector.',
      },
    ],
    technologies: [
      'React.js',
      'Three.js / WebGL',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    github: 'https://github.com/aanandwayare/algoverse-3d',
    liveDemo: 'https://algoverse-3d.vercel.app',
    documentation: 'https://github.com/aanandwayare/algoverse-3d#algorithms',
    architecture: [
      {
        step: '1. 3D Render Engine',
        tech: 'Three.js + WebGL',
        desc: 'Spatial coordinate calculation and camera orbits.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
    ],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS', change: 'Hardware Accelerated' },
      { label: 'Algorithms', value: '22', change: 'Trees, Graphs, Sorting' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Conceptualized 3D interactive spatial visualization.' },
    ],
    challenges: [
      {
        problem: 'Maintaining smooth 60 FPS performance when rendering large graph networks.',
        solution: 'Utilized instanced mesh rendering in Three.js and decoupled calculations.',
        result: 'Flawless 60 FPS rendering.',
      },
    ],
    features: [
      '22+ interactive 3D visualizations across Sorting, Trees, Graphs, and Dynamic Programming',
      'Bidirectional step-by-step playback with adjustable speed',
    ],
  },
];
