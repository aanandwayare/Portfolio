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
        tech: 'MySQL + ChromaDB',
        desc: 'Hybrid metadata storage with dense vector similarity indexes.',
        badgeColor: 'border-indigo-500/40 text-indigo-400',
      },
      {
        step: '4. Autonomous Intelligence',
        tech: 'OpenAI GPT-4o + LangChain',
        desc: 'Function calling, structured JSON output validation, and tool loops.',
        badgeColor: 'border-copper-500/40 text-copper-400',
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
      'A full-stack collaborative developer environment featuring multi-cursor live code editing, sandboxed compiler execution, WebRTC huddles, and GitHub sync.',
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
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
        title: 'Instant Sandbox Compiler',
        desc: 'Run C++, Python, JavaScript, and Java with stdin/stdout streaming.',
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
        title: 'Live Voice & Video Huddles',
        desc: 'Integrated WebRTC peer-to-peer communication with zero latency.',
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
    documentation: 'https://github.com/aanandwayare/devnexus-cloud#architecture',
    architecture: [
      {
        step: '1. Client Workspace',
        tech: 'Next.js + Monaco Editor',
        desc: 'CRDT operational transformation with optimistic cursor updates.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. WebSocket Gateway',
        tech: 'Node.js + Socket.io Cluster',
        desc: 'Stateful presence distribution with Redis pub/sub channel.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '3. Compiler Sandbox',
        tech: 'Docker Engine + gVisor',
        desc: 'Isolated execution sandbox with strict CPU/memory limits.',
        badgeColor: 'border-amber-500/40 text-amber-400',
      },
      {
        step: '4. Relational Persistence',
        tech: 'MySQL + Prisma',
        desc: 'Normalized schema for workspaces, files, versions, and permissions.',
        badgeColor: 'border-indigo-500/40 text-indigo-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '42,100+', change: 'Modular TS' },
      { label: 'Sync Latency', value: '<22ms', change: 'Global Edge' },
      { label: 'Languages', value: '14', change: 'Compilers' },
      { label: 'Concurrent Users', value: '1,200+', change: 'Stress Tested' },
      { label: 'Code Executions', value: '450K+', change: 'Safe Container' },
      { label: 'Uptime', value: '99.99%', change: 'High Availability' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Conceived unified workspace for real-time remote pair programming.' },
      { phase: 'Planning', status: 'completed', desc: 'Selected CRDT algorithms and Docker containment architecture.' },
      { phase: 'Design', status: 'completed', desc: 'Designed modern IDE layout inspired by VS Code and Linear.' },
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
      {
        problem: 'Preventing malicious script execution or container escape from untrusted code.',
        solution: 'Isolated runners in non-root gVisor sandboxes with network namespaces disabled.',
        result: 'Completely hardened security boundary with automated process teardown.',
      },
    ],
    features: [
      'Multi-cursor live code editing with user presence and typing indicators',
      'One-click code execution for 14+ languages with interactive terminal',
      'WebRTC audio/video huddles with crystal-clear screen sharing',
      'Instant GitHub repository import and automated branch commit pushes',
      'Integrated theme switcher (Dark / Light / High-Contrast Executive)',
      'Built-in markdown documentation previewer and shareable workspace links',
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
      {
        url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop',
        title: 'Grad-CAM Explainability Map',
        desc: 'Heatmap visualization showing regions that influenced model classification.',
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
      'NumPy',
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
      {
        step: '3. Visual Explainability',
        tech: 'Grad-CAM Engine',
        desc: 'Gradient-weighted class activation mapping for clinical trust.',
        badgeColor: 'border-amber-500/40 text-amber-400',
      },
      {
        step: '4. Web Dashboard',
        tech: 'React + Flask REST API',
        desc: 'Interactive scan inspection and automated diagnostic PDF generation.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '24,800+', change: 'Python & React' },
      { label: 'Model Accuracy', value: '96.8%', change: 'Validated AUC' },
      { label: 'Inference Speed', value: '42ms', change: 'GPU Accelerated' },
      { label: 'Dataset Scans', value: '25,000+', change: 'Pretrained' },
      { label: 'Precision', value: '97.2%', change: 'Low False Positives' },
      { label: 'Report Speed', value: '<1.5s', change: 'Instant PDF' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Identified need for explainable AI in radiological decision support.' },
      { phase: 'Planning', status: 'completed', desc: 'Curated balanced dataset and selected CNN architecture.' },
      { phase: 'Design', status: 'completed', desc: 'Created clinical dark UI with high-contrast scan viewports.' },
      { phase: 'Development', status: 'completed', desc: 'Trained model in PyTorch and built Flask streaming inference pipeline.' },
      { phase: 'Testing', status: 'completed', desc: 'Cross-validated on unseen hospital test sets with medical professionals.' },
      { phase: 'Deployment', status: 'completed', desc: 'Packaged into containerized microservice with web client.' },
    ],
    challenges: [
      {
        problem: 'Class imbalance in rare radiological pathologies skewing model predictions.',
        solution: 'Employed focal loss functions and extensive synthetic augmentation (elastic deformation).',
        result: 'Boosted minority class recall from 78% to 94.5%.',
      },
      {
        problem: 'Clinical resistance to black-box machine learning decisions.',
        solution: 'Integrated real-time Grad-CAM overlays highlighting anatomical activation zones.',
        result: 'Achieved high clinician trust and interpretable diagnostic reports.',
      },
    ],
    features: [
      'Drag-and-drop DICOM and PNG medical scan upload with instant preprocessing',
      'Side-by-side comparative inspection with toggleable Grad-CAM heatmap overlay',
      'Automated diagnostic PDF report generator with anomaly percentage scores',
      'Interactive zoom, pan, window-level contrast, and inversion filters',
      'Secure local cache maintaining patient HIPAA data privacy',
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
      'Native Android companion application built in Java/Kotlin with Material Design 3, SQLite offline-first caching, and real-time Bluetooth LE vitals sync.',
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
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
        title: 'Medication Schedule & Reminders',
        desc: 'Automated notification worker syncing with doctor prescription updates.',
      },
    ],
    technologies: [
      'Java',
      'Android SDK',
      'SQLite / Room',
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
        tech: 'Material 3 + Jetpack Navigation',
        desc: 'Fluid gestural animations with responsive tablet/phone fragments.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '2. Hardware Telemetry',
        tech: 'Bluetooth Low Energy (BLE)',
        desc: 'Continuous sensor packet decoding and background service listeners.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '3. Offline-First Database',
        tech: 'Room DB + SQLite',
        desc: 'Local biometric storage with conflict-free background server sync.',
        badgeColor: 'border-indigo-500/40 text-indigo-400',
      },
      {
        step: '4. Cloud Synchronization',
        tech: 'Retrofit + WorkManager',
        desc: 'Encrypted REST API sync with exponential backoff on network drop.',
        badgeColor: 'border-copper-500/40 text-copper-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '19,500+', change: 'Clean Architecture' },
      { label: 'Sync Success', value: '99.9%', change: 'Offline First' },
      { label: 'App Launch', value: '0.4s', change: 'Cold Start' },
      { label: 'Battery Impact', value: '<2%/day', change: 'Optimized BLE' },
      { label: 'Active Devices', value: '3,200+', change: 'Android 10+' },
      { label: 'Rating', value: '4.8 ★', change: 'Play Store' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Identified gap in reliable offline biometric tracking for cardiac patients.' },
      { phase: 'Planning', status: 'completed', desc: 'Designed BLE communication protocol and Room database schemas.' },
      { phase: 'Design', status: 'completed', desc: 'Adopted Material Design 3 guidelines with accessible typography.' },
      { phase: 'Development', status: 'completed', desc: 'Implemented BLE GATT services, Room DAOs, and Retrofit network layers.' },
      { phase: 'Testing', status: 'completed', desc: 'Tested across 15 real Android devices and simulated hardware packets.' },
      { phase: 'Deployment', status: 'completed', desc: 'Packaged signed APK with ProGuard obfuscation and CI automated testing.' },
    ],
    challenges: [
      {
        problem: 'Battery drain caused by continuous Bluetooth background polling.',
        solution: 'Implemented dynamic packet batching and event-driven wake locks using Android WorkManager.',
        result: 'Reduced battery consumption by 68% while maintaining reliable alerts.',
      },
      {
        problem: 'Data loss during intermittent mobile connectivity in transit.',
        solution: 'Built an offline-first transactional queue in SQLite with idempotent API replay.',
        result: 'Zero data loss recorded across 100,000+ simulated network dropouts.',
      },
    ],
    features: [
      'Real-time Bluetooth LE vitals streaming (Pulse, SpO2, Blood Pressure)',
      'Offline-first architecture with automatic background cloud synchronization',
      'Smart medication compliance alarms with snooze and doctor verification',
      'One-tap emergency SOS broadcast with GPS coordinates to emergency contacts',
      'Interactive biometric trend graphs with weekly PDF medical exports',
    ],
  },
  {
    id: 'async-broker-engine',
    title: 'AsyncBroker Engine',
    emoji: '⚡',
    category: 'Open Source',
    status: 'Open Source',
    subtitle: 'High-Performance Event Broker & Pub/Sub',
    description:
      'A lightweight, ultra-low latency distributed message broker and telemetry dispatcher written in TypeScript with Node.js and Redis integration.',
    overview:
      'AsyncBroker Engine delivers sub-millisecond pub/sub message routing, priority queues, automatic dead-letter queue handling, and live WebSocket telemetry metrics for distributed microservice architectures.',
    mockupType: 'browser',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
        title: 'Broker Telemetry Dashboard',
        desc: 'Real-time throughput gauge, queue depth, and worker consumer metrics.',
      },
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
        title: 'Dead-Letter Queue Visualizer',
        desc: 'Inspect failed payloads and trigger one-click replay mutations.',
      },
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'Express.js',
      'Redis',
      'WebSockets',
      'Docker',
      'Jest',
    ],
    github: 'https://github.com/aanandwayare/async-broker-engine',
    liveDemo: 'https://async-broker-demo.vercel.app',
    documentation: 'https://github.com/aanandwayare/async-broker-engine#documentation',
    architecture: [
      {
        step: '1. Ingestion Endpoint',
        tech: 'Node.js Cluster + HTTP/WS',
        desc: 'Non-blocking I/O message ingestion with rate limiting token buckets.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
      {
        step: '2. Priority Routing Ring',
        tech: 'TypeScript In-Memory Heap',
        desc: 'Sub-millisecond topic routing with wildcard subscription support.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '3. Durable Storage & DLQ',
        tech: 'Redis Streams + AOF',
        desc: 'Persistent message queues with automated exponential backoff retry.',
        badgeColor: 'border-rose-500/40 text-rose-400',
      },
      {
        step: '4. Live Observability',
        tech: 'React + WebSockets',
        desc: 'Interactive Grafana-style telemetry dashboard with zero lag.',
        badgeColor: 'border-copper-500/40 text-copper-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '14,200+', change: 'Zero Dependencies' },
      { label: 'Throughput', value: '65,000 msg/s', change: 'Single Node' },
      { label: 'Latency', value: '0.8ms', change: 'P99 Execution' },
      { label: 'GitHub Stars', value: '340+', change: 'Open Source' },
      { label: 'Test Coverage', value: '98.5%', change: 'Jest Suites' },
      { label: 'Memory Footprint', value: '<45MB', change: 'Lightweight' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Identified need for a lightweight, zero-overhead Node.js event broker.' },
      { phase: 'Planning', status: 'completed', desc: 'Designed lock-free ring buffer algorithms and topic routing trees.' },
      { phase: 'Design', status: 'completed', desc: 'Documented clean TypeScript API signatures and developer experience.' },
      { phase: 'Development', status: 'completed', desc: 'Built the core routing engine, Redis persistence, and WebSocket telemetry.' },
      { phase: 'Testing', status: 'completed', desc: 'Ran stress benchmarks up to 100,000 simultaneous connections.' },
      { phase: 'Deployment', status: 'completed', desc: 'Published open-source npm package and live interactive demo.' },
    ],
    challenges: [
      {
        problem: 'Backpressure overload when slow consumers lagged behind high-throughput producers.',
        solution: 'Engineered adaptive sliding window flow control and transient disk spooling.',
        result: 'Guaranteed 100% message delivery without memory exhaustion.',
      },
      {
        problem: 'High memory garbage collection pauses during rapid object allocations.',
        solution: 'Implemented reusable buffer pools and flattened typed array message representations.',
        result: 'Reduced GC pause frequency by 84% under sustained load.',
      },
    ],
    features: [
      'Sub-millisecond publish/subscribe message dispatching',
      'Wildcard topic routing (e.g. `sensors.*.temperature`)',
      'Automatic Dead-Letter Queue (DLQ) with one-click payload replay',
      'Built-in rate limiter and DDoS token bucket algorithm',
      'Live WebSockets telemetry dashboard with queue throughput metrics',
      'Zero-dependency standalone binary mode with Docker support',
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
    documentation: 'https://github.com/aanandwayare/algoverse-3d#algorithms',
    architecture: [
      {
        step: '1. 3D Render Engine',
        tech: 'Three.js + WebGL Shaders',
        desc: 'Spatial coordinate calculation, spring physics, and camera orbits.',
        badgeColor: 'border-cyan-500/40 text-cyan-400',
      },
      {
        step: '2. Algorithm Generator',
        tech: 'TypeScript Generator Functions',
        desc: 'Yield-based stateful step execution with bidirectional time scrubbing.',
        badgeColor: 'border-copper-500/40 text-copper-400',
      },
      {
        step: '3. Audio Synthesis',
        tech: 'Web Audio API',
        desc: 'Frequency pitched audio tones corresponding to element value comparisons.',
        badgeColor: 'border-amber-500/40 text-amber-400',
      },
      {
        step: '4. UI Control HUD',
        tech: 'React + Framer Motion',
        desc: 'Speed slider, step debugger, code highlighter, and complexity cards.',
        badgeColor: 'border-emerald-500/40 text-emerald-400',
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: '18,600+', change: 'WebGL & TS' },
      { label: 'Frame Rate', value: '60 FPS', change: 'Hardware Accelerated' },
      { label: 'Algorithms', value: '22', change: 'Trees, Graphs, Sorting' },
      { label: 'GitHub Stars', value: '520+', change: 'Trending' },
      { label: 'Interactive Users', value: '45,000+', change: 'Educational' },
      { label: 'Code Execution', value: '<5ms', change: 'Instant AST' },
    ],
    timeline: [
      { phase: 'Idea', status: 'completed', desc: 'Conceptualized 3D interactive spatial visualization for algorithmic CS concepts.' },
      { phase: 'Planning', status: 'completed', desc: 'Designed generator function architecture for time-travel debugging.' },
      { phase: 'Design', status: 'completed', desc: 'Crafted sleek dark HUD with spatial particle grids and neon node auras.' },
      { phase: 'Development', status: 'completed', desc: 'Integrated Three.js shaders, recursive tree layout engines, and Web Audio.' },
      { phase: 'Testing', status: 'completed', desc: 'Optimized WebGL draw calls to maintain 60 FPS on mobile and low-power laptops.' },
      { phase: 'Deployment', status: 'completed', desc: 'Released live interactive web application with zero server dependencies.' },
    ],
    challenges: [
      {
        problem: 'Maintaining smooth 60 FPS performance when rendering large graph networks with 1,000+ vertices.',
        solution: 'Utilized instanced mesh rendering in Three.js and offloaded physics calculations to Web Workers.',
        result: 'Flawless 60 FPS rendering even on complex 3D topological graphs.',
      },
      {
        problem: 'Creating seamless backward time-scrubbing for complex recursive algorithms.',
        solution: 'Engineered an immutable snapshot event log recording every memory state change.',
        result: 'Instant bidirectional step navigation with zero replay lag.',
      },
    ],
    features: [
      '22+ interactive 3D visualizations across Sorting, Trees, Graphs, and Dynamic Programming',
      'Bidirectional step-by-step playback with adjustable speed and pause triggers',
      'Real-time synchronized code line highlighting and variable stack inspector',
      'Web Audio sound synthesis generating tones during node comparisons',
      'Custom graph and tree editor allowing users to test their own custom inputs',
    ],
  },
];
