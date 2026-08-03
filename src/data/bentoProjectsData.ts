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
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
        title: 'Vector Knowledge Inspector',
        desc: 'Semantic chunk inspection and cosine distance visualizer.',
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
        tech: 'MySQL + ChromaDB',
        desc: 'Hybrid metadata storage with dense vector similarity indexes.',
        color: 'border-indigo-500/40 text-indigo-400',
      },
      {
        step: '4. Autonomous Intelligence',
        tech: 'OpenAI GPT-4o + LangChain',
        desc: 'Function calling, structured JSON output validation, and tool loops.',
        color: 'border-copper-500/40 text-copper-400',
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
      'Automated fallback tool execution and self-healing error recovery',
      'Multi-tenant role-based workspace management with API keys',
      'Custom LLM temperature, system prompt, and structured output editor',
    ],
    lessonsLearned: [
      'Structured schema validation (Pydantic/Zod) is essential when parsing non-deterministic LLM JSON outputs.',
      'Server-Sent Events provide significantly lower connection overhead than WebSockets for uni-directional text streaming.',
    ],
    relatedProjectIds: ['devnexus-cloud', 'visionpulse-ml', 'async-broker-engine'],
  },
  {
    id: 'devnexus-cloud',
    title: 'DevNexus Cloud',
    subtitle: 'Collaborative Real-Time Developer Workspace & Cloud Code Canvas',
    category: 'Full Stack',
    featured: true,
    size: 'wide',
    status: 'Live',
    year: '2024',
    description:
      'A full-stack collaborative developer environment featuring multi-cursor live code editing, sandboxed compiler execution, WebRTC huddles, and GitHub sync.',
    overview:
      'DevNexus eliminates friction in remote engineering collaboration, pair programming, and live coding interviews by combining low-latency shared editors with instant isolated Docker execution sandboxes.',
    problemStatement:
      'Remote pair programming tools suffer from typing latency, desynchronized cursor states, and insecure local compilation environments.',
    solution:
      'Engineered an optimistic CRDT sync layer with server-side reconciliation and isolated gVisor Docker containers for secure multi-language execution.',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'laptop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
        title: 'Multi-User Collaborative Code Editor',
        desc: 'Monaco editor with colored cursor presence and live cursor sync.',
      },
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
        title: 'Instant Sandbox Compiler',
        desc: 'Run C++, Python, JavaScript, and Java with stdin/stdout streaming.',
      },
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'WebSockets',
      'MySQL',
      'Docker',
      'Tailwind CSS',
    ],
    github: 'https://github.com/aanandwayare/devnexus-cloud',
    liveDemo: 'https://devnexus-cloud.vercel.app',
    caseStudy: 'https://github.com/aanandwayare/devnexus-cloud#architecture',
    architecture: [
      {
        step: '1. Client Workspace',
        tech: 'Next.js + Monaco Editor',
        desc: 'CRDT operational transformation with optimistic cursor updates.',
        color: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. WebSocket Gateway',
        tech: 'Node.js + Socket.io Cluster',
        desc: 'Stateful presence distribution with Redis pub/sub channel.',
        color: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '3. Compiler Sandbox',
        tech: 'Docker Engine + gVisor',
        desc: 'Isolated execution sandbox with strict CPU/memory limits.',
        color: 'border-amber-500/40 text-amber-400',
      },
      {
        step: '4. Relational Persistence',
        tech: 'MySQL + Prisma',
        desc: 'Normalized schema for workspaces, files, versions, and permissions.',
        color: 'border-indigo-500/40 text-indigo-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '42,100+', change: 'Modular TS' },
      { label: 'Sync Latency', value: '<22ms', change: 'Global Edge' },
      { label: 'Languages', value: '14', change: 'Compilers' },
      { label: 'Concurrent Users', value: '1,200+', change: 'Stress Tested' },
    ],
    timeline: [
      { phase: 'Planning', desc: 'Selected CRDT algorithms and Docker containment architecture.', date: 'Q1 2024' },
      { phase: 'Build', desc: 'Built WebSocket gateway, Monaco editor extensions, and compile runners.', date: 'Q2 2024' },
      { phase: 'Scale', desc: 'Stress tested across 50 simultaneous collaborators.', date: 'Q3 2024' },
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
      'One-click code execution for 14+ languages with interactive terminal',
      'WebRTC audio/video huddles with screen sharing',
      'Instant GitHub repository import and automated branch commit pushes',
    ],
    lessonsLearned: [
      'Container sandboxing requires strict resource limits on memory and process count (pids-limit) to avoid fork bombs.',
    ],
    relatedProjectIds: ['neuroflow-ai', 'async-broker-engine'],
  },
  {
    id: 'visionpulse-ml',
    title: 'VisionPulse ML',
    subtitle: 'Real-Time Computer Vision & Medical Imaging Diagnostic Suite',
    category: 'Machine Learning',
    featured: false,
    size: 'square',
    status: 'Production',
    year: '2024',
    description:
      'Computer vision diagnostic system leveraging Convolutional Neural Networks and Grad-CAM for medical scan classification and visual explainability.',
    overview:
      'VisionPulse ML provides an intuitive, high-accuracy diagnostic aid for healthcare professionals to inspect radiological scans, identify micro-anomalies, and review visual explainability heatmaps.',
    problemStatement:
      'Medical professionals often reject black-box AI predictions due to lack of interpretability and high risk of false negatives.',
    solution:
      'Trained fine-tuned DenseNet-121 CNNs with focal loss and integrated real-time Grad-CAM activation heatmaps for full visual explainability.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'browser',
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
    caseStudy: 'https://github.com/aanandwayare/visionpulse-ml#research',
    architecture: [
      {
        step: '1. Image Pipeline',
        tech: 'OpenCV + CLAHE',
        desc: 'DICOM normalization and histogram equalization.',
        color: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. CNN Core',
        tech: 'PyTorch + DenseNet-121',
        desc: 'Deep feature extraction with focal loss optimization.',
        color: 'border-copper-500/40 text-copper-400',
      },
      {
        step: '3. Explainability',
        tech: 'Grad-CAM',
        desc: 'Gradient-weighted class activation mapping.',
        color: 'border-amber-500/40 text-amber-400',
      },
    ],
    metrics: [
      { label: 'Model Accuracy', value: '96.8%', change: 'Validated AUC' },
      { label: 'Inference Speed', value: '42ms', change: 'GPU' },
      { label: 'Dataset Scans', value: '25,000+', change: 'Pretrained' },
    ],
    timeline: [
      { phase: 'Training', desc: 'Curated dataset and fine-tuned DenseNet architecture.', date: 'Q2 2024' },
      { phase: 'Inference API', desc: 'Built streaming Flask REST inference endpoints.', date: 'Q3 2024' },
    ],
    challenges: [
      {
        problem: 'Severe class imbalance in rare pathological datasets.',
        solution: 'Applied focal loss and synthetic elastic image transformations.',
        result: 'Boosted minority class recall from 78% to 94.5%.',
      },
    ],
    features: [
      'Drag-and-drop DICOM and PNG medical scan upload with instant preprocessing',
      'Side-by-side comparative inspection with toggleable Grad-CAM heatmap overlay',
      'Automated diagnostic PDF report generator with anomaly percentage scores',
    ],
    lessonsLearned: [
      'Explainable AI overlays (Grad-CAM) are mandatory for domain trust in clinical workflows.',
    ],
    relatedProjectIds: ['neuroflow-ai', 'healthpulse-mobile'],
  },
  {
    id: 'healthpulse-mobile',
    title: 'HealthPulse Companion',
    subtitle: 'Native Android Patient & Telemetry Companion',
    category: 'Android',
    featured: false,
    size: 'square',
    status: 'Live',
    year: '2024',
    description:
      'Native Android companion application built in Java/Kotlin with Material Design 3, SQLite offline-first caching, and real-time Bluetooth LE vitals sync.',
    overview:
      'HealthPulse Mobile brings clinical biometric telemetry to patients with offline-first synchronization, medication compliance reminders, emergency SOS triggers, and interactive biometric graphs.',
    problemStatement:
      'Continuous BLE connection polling drains mobile batteries rapidly and drops vital packets during transit.',
    solution:
      'Built an event-driven packet batching protocol using Android WorkManager and an offline-first transactional queue in SQLite/Room.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'phone',
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
      'SQLite / Room',
      'Retrofit',
      'Material Design 3',
      'Bluetooth LE',
    ],
    github: 'https://github.com/aanandwayare/healthpulse-mobile',
    liveDemo: 'https://github.com/aanandwayare/healthpulse-mobile/releases',
    caseStudy: 'https://github.com/aanandwayare/healthpulse-mobile#readme',
    architecture: [
      {
        step: '1. Native UI',
        tech: 'Material 3',
        desc: 'Fluid gestural animations with responsive tablet/phone fragments.',
        color: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '2. BLE Telemetry',
        tech: 'Bluetooth GATT',
        desc: 'Continuous sensor packet decoding and background service listeners.',
        color: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '3. Offline DB',
        tech: 'Room + SQLite',
        desc: 'Local biometric storage with background server sync.',
        color: 'border-indigo-500/40 text-indigo-400',
      },
    ],
    metrics: [
      { label: 'Sync Success', value: '99.9%', change: 'Offline First' },
      { label: 'App Launch', value: '0.4s', change: 'Cold Start' },
      { label: 'Active Devices', value: '3,200+', change: 'Android 10+' },
    ],
    timeline: [
      { phase: 'Architecture', desc: 'Designed BLE GATT protocol and Room database schemas.', date: 'Q1 2024' },
      { phase: 'Release', desc: 'Published signed release APK with ProGuard optimization.', date: 'Q3 2024' },
    ],
    challenges: [
      {
        problem: 'Battery drain caused by continuous Bluetooth background polling.',
        solution: 'Implemented dynamic packet batching and event-driven wake locks using WorkManager.',
        result: 'Reduced battery consumption by 68% while maintaining reliable alerts.',
      },
    ],
    features: [
      'Real-time Bluetooth LE vitals streaming (Pulse, SpO2, Blood Pressure)',
      'Offline-first architecture with automatic background cloud synchronization',
      'Smart medication compliance alarms with snooze and doctor verification',
    ],
    lessonsLearned: [
      'Android WorkManager is far more battery-friendly than sticky background foreground services for periodic telemetry.',
    ],
    relatedProjectIds: ['visionpulse-ml', 'devnexus-cloud'],
  },
  {
    id: 'async-broker-engine',
    title: 'AsyncBroker Engine',
    subtitle: 'High-Performance Event Broker & Pub/Sub Dispatcher',
    category: 'Open Source',
    featured: false,
    size: 'compact',
    status: 'Open Source',
    year: '2024',
    description:
      'A lightweight, ultra-low latency distributed message broker and telemetry dispatcher written in TypeScript with Node.js and Redis integration.',
    overview:
      'AsyncBroker Engine delivers sub-millisecond pub/sub message routing, priority queues, automatic dead-letter queue handling, and live WebSocket telemetry metrics for distributed microservice architectures.',
    problemStatement:
      'Existing message brokers have heavy JVM memory footprints and high latency for simple node microservice event buses.',
    solution:
      'Created a zero-dependency lock-free in-memory routing ring with Redis Streams persistence and WebSocket observability.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'browser',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
        title: 'Broker Telemetry Dashboard',
        desc: 'Real-time throughput gauge, queue depth, and worker consumer metrics.',
      },
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'Redis',
      'WebSockets',
      'Docker',
    ],
    github: 'https://github.com/aanandwayare/async-broker-engine',
    liveDemo: 'https://async-broker-demo.vercel.app',
    caseStudy: 'https://github.com/aanandwayare/async-broker-engine#documentation',
    architecture: [
      {
        step: '1. Ingestion',
        tech: 'Node.js Cluster',
        desc: 'Non-blocking I/O message ingestion with rate limiting.',
        color: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '2. Priority Heap',
        tech: 'TypeScript Core',
        desc: 'Sub-millisecond topic routing with wildcard subscriptions.',
        color: 'border-cyan-500/40 text-cyan-400',
      },
    ],
    metrics: [
      { label: 'Throughput', value: '65K msg/s', change: 'Single Node' },
      { label: 'Latency', value: '0.8ms', change: 'P99' },
      { label: 'GitHub Stars', value: '340+', change: 'Open Source' },
    ],
    timeline: [
      { phase: 'Engine Core', desc: 'Built routing trees and Redis Streams persistence.', date: 'Q2 2024' },
      { phase: 'Open Source Release', desc: 'Published open-source npm package and live interactive demo.', date: 'Q4 2024' },
    ],
    challenges: [
      {
        problem: 'Backpressure overload when slow consumers lagged behind high-throughput producers.',
        solution: 'Engineered adaptive sliding window flow control and transient disk spooling.',
        result: 'Guaranteed 100% message delivery without memory exhaustion.',
      },
    ],
    features: [
      'Sub-millisecond publish/subscribe message dispatching',
      'Wildcard topic routing (e.g. `sensors.*.temperature`)',
      'Automatic Dead-Letter Queue (DLQ) with one-click payload replay',
    ],
    lessonsLearned: [
      'Flattening objects into typed arrays significantly reduces V8 Garbage Collector pauses under 50k+ ops/sec.',
    ],
    relatedProjectIds: ['neuroflow-ai', 'algoverse-3d'],
  },
  {
    id: 'algoverse-3d',
    title: 'Algoverse 3D',
    subtitle: 'Interactive 3D Algorithm & Data Structures Sandbox',
    category: 'Web',
    featured: true,
    size: 'wide',
    status: 'Featured',
    year: '2024',
    description:
      'An educational 3D visualizer that transforms abstract data structures and algorithms (Trees, Graphs, Pathfinding) into step-by-step spatial animations.',
    overview:
      'Algoverse 3D provides students and engineers with an intuitive spatial understanding of complex algorithms, offering step-by-step playback, time-complexity analysis, and interactive node manipulation.',
    problemStatement:
      'Traditional 2D algorithm visualizers fail to convey spatial recursion depth and dynamic graph partitioning clearly.',
    solution:
      'Integrated Three.js WebGL shaders with TypeScript generator functions to deliver time-travel step scrubbing and audio tone synthesis.',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
    mockupType: 'browser',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
        title: '3D Spatial Binary Tree Traversal',
        desc: 'Interactive node rotations and step-by-step recursive stack inspector.',
      },
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
        title: 'Graph Pathfinding Explorer',
        desc: 'Real-time comparison between A*, Dijkstra, and BFS algorithms.',
      },
    ],
    technologies: [
      'React.js',
      'Three.js / WebGL',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
    ],
    github: 'https://github.com/aanandwayare/algoverse-3d',
    liveDemo: 'https://algoverse-3d.vercel.app',
    caseStudy: 'https://github.com/aanandwayare/algoverse-3d#algorithms',
    architecture: [
      {
        step: '1. 3D Render Engine',
        tech: 'Three.js + Shaders',
        desc: 'Spatial coordinate calculation and orbit controls.',
        color: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. Algorithm Generator',
        tech: 'TS Generator Functions',
        desc: 'Yield-based stateful step execution with time scrubbing.',
        color: 'border-copper-500/40 text-copper-400',
      },
      {
        step: '3. Audio Engine',
        tech: 'Web Audio API',
        desc: 'Frequency pitched audio tones corresponding to element comparisons.',
        color: 'border-amber-500/40 text-amber-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '18,600+', change: 'WebGL & TS' },
      { label: 'Frame Rate', value: '60 FPS', change: 'Hardware Accel' },
      { label: 'Algorithms', value: '22', change: 'Trees & Graphs' },
    ],
    timeline: [
      { phase: 'WebGL Core', desc: 'Integrated Three.js shaders and recursive tree engines.', date: 'Q1 2024' },
      { phase: 'Public Launch', desc: 'Released live web application with zero dependencies.', date: 'Q3 2024' },
    ],
    challenges: [
      {
        problem: 'Maintaining smooth 60 FPS performance when rendering large graphs with 1,000+ vertices.',
        solution: 'Utilized instanced mesh rendering and offloaded physics calculations to Web Workers.',
        result: 'Flawless 60 FPS rendering even on complex 3D topological graphs.',
      },
    ],
    features: [
      '22+ interactive 3D visualizations across Sorting, Trees, Graphs, and Dynamic Programming',
      'Bidirectional step-by-step playback with adjustable speed and pause triggers',
      'Real-time synchronized code line highlighting and variable stack inspector',
    ],
    lessonsLearned: [
      'InstancedMesh in Three.js reduces draw calls from thousands to one, allowing massive graph visualizations.',
    ],
    relatedProjectIds: ['async-broker-engine', 'devnexus-cloud'],
  },
];
