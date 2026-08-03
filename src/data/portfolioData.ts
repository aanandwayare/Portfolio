export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'AI / ML' | 'Full Stack' | 'Web Apps' | 'Tools & Systems';
  featured: boolean;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stats: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    architecture: string[];
    challenges: string[];
    solutions: string[];
    features: string[];
    futureRoadmap: string[];
  };
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category:
    | 'Programming Languages'
    | 'Frontend'
    | 'Backend & APIs'
    | 'AI & Machine Learning'
    | 'Databases & Cloud'
    | 'DevOps & Tools'
    | 'Core Engineering';
  experienceYears: string;
  iconName: string;
  featuredProject?: string;
  description?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  organization: string;
  location: string;
  description: string[];
  badge: string;
  type: 'education' | 'experience' | 'milestone';
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Recruiter' | 'Technical' | 'General';
}

export const personalInfo = {
  name: 'Anand Chandrakant Wayare',
  shortName: 'Anand Wayare',
  role: 'Full Stack Developer & AI Engineer',
  tagline: 'Building Intelligent Digital Experiences with AI and Modern Web Technologies.',
  location: 'Pune, Maharashtra, India',
  timezone: 'IST (UTC+05:30)',
  email: 'aanandwayare61@gmail.com',
  phone: '+91 7276011718',
  status: '🟢 Open to Full-Time & High-Impact Roles',
  bioSummary:
    'Passionate Computer Engineering student specializing in Full Stack Development and Artificial Intelligence. I enjoy creating scalable applications, solving real-world problems through technology, and continuously exploring modern software engineering practices. My goal is to build impactful products that combine clean design, intelligent automation, and exceptional user experience.',
  aboutDetailed: [
    'I am a Computer Engineering student at Sinhagad Institute of Technology, Lonavala, with a solid foundational background in software engineering through my prior Diploma in Computer Engineering.',
    'My core expertise bridges modern Full Stack Architecture (Next.js, React, TypeScript, Node.js, Express, Tailwind CSS) with modern Applied Artificial Intelligence (LangChain, OpenAI APIs, Vector Databases, Python, PyTorch, Scikit-Learn, spaCy).',
    'I believe that the next generation of software lies in combining frictionless, high-aesthetic interfaces with autonomous, intelligent backends.',
  ],
  socials: {
    github: 'https://github.com/aanandwayare',
    linkedin: 'https://www.linkedin.com/in/anand-wayare-8b1202385/',
    email: 'mailto:aanandwayare61@gmail.com',
    phone: 'tel:+917276011718',
  },
  stats: [
    { label: 'Projects Engineered', value: '15+' },
    { label: 'Technologies Mastered', value: '25+' },
    { label: 'DSA Problems Solved', value: '300+' },
    { label: 'Uptime & Reliability', value: '99.9%' },
  ],
  quickHighlights: [
    'Specialized in Next.js 14 App Router & Modern React Ecosystem',
    'Architecting Autonomous AI Multi-Agent & LLM Pipelines (LangChain, RAG)',
    'Strong Computer Science Fundamentals: Data Structures, Algorithms & System Design',
    'Experience spanning BE Computer Engineering & Diploma in Computer Engineering',
  ],
};

export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: 'TypeScript',
    level: 92,
    category: 'Programming Languages',
    experienceYears: '2+ yrs',
    iconName: 'Code2',
    featuredProject: 'DevNexus Cloud',
    description: 'Strict type safety, generics, utility types, and modern ESNext features.',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 95,
    category: 'Programming Languages',
    experienceYears: '3+ yrs',
    iconName: 'FileCode2',
    featuredProject: 'NeuroFlow AI',
    description: 'Async/Await, Closures, Event Loop, DOM manipulation, and V8 optimization.',
  },
  {
    name: 'Python',
    level: 90,
    category: 'Programming Languages',
    experienceYears: '3+ yrs',
    iconName: 'Terminal',
    featuredProject: 'VisionPulse ML',
    description: 'FastAPI, Flask, Data Science, PyTorch, automation scripts, and AI agents.',
  },
  {
    name: 'C++',
    level: 88,
    category: 'Programming Languages',
    experienceYears: '3+ yrs',
    iconName: 'Cpu',
    featuredProject: 'Algoverse 3D',
    description: 'OOP, STL, memory management, algorithmic problem solving & DSA.',
  },
  {
    name: 'C',
    level: 85,
    category: 'Programming Languages',
    experienceYears: '3+ yrs',
    iconName: 'Binary',
    description: 'Pointers, low-level memory allocation, system programming fundamentals.',
  },
  {
    name: 'Java',
    level: 82,
    category: 'Programming Languages',
    experienceYears: '2+ yrs',
    iconName: 'Coffee',
    description: 'Object-oriented programming, Collections framework, Multi-threading.',
  },
  {
    name: 'SQL',
    level: 88,
    category: 'Programming Languages',
    experienceYears: '3+ yrs',
    iconName: 'Database',
    featuredProject: 'EchoMarket',
    description: 'Complex joins, indexing, query optimization, and schema normalization.',
  },

  // Frontend
  {
    name: 'React.js',
    level: 95,
    category: 'Frontend',
    experienceYears: '3+ yrs',
    iconName: 'Atom',
    featuredProject: 'NeuroFlow AI',
    description: 'Custom hooks, Context API, state management, Suspense, Concurrent Mode.',
  },
  {
    name: 'Next.js (App Router)',
    level: 94,
    category: 'Frontend',
    experienceYears: '2+ yrs',
    iconName: 'Layers',
    featuredProject: 'DevNexus Cloud',
    description: 'Server Components (RSC), SSR, SSG, Server Actions, Route Handlers, SEO.',
  },
  {
    name: 'Tailwind CSS',
    level: 96,
    category: 'Frontend',
    experienceYears: '3+ yrs',
    iconName: 'Palette',
    featuredProject: 'Portfolio 2026',
    description: 'Responsive design, custom design tokens, animations, dark mode palettes.',
  },
  {
    name: 'HTML5 & Modern CSS3',
    level: 98,
    category: 'Frontend',
    experienceYears: '4+ yrs',
    iconName: 'Layout',
    description: 'Semantic markup, accessibility (a11y), CSS Grid, Flexbox, Keyframes.',
  },
  {
    name: 'Framer Motion',
    level: 90,
    category: 'Frontend',
    experienceYears: '2+ yrs',
    iconName: 'Sparkles',
    description: 'Layout animations, gesture recognition, scroll parallax, spring physics.',
  },

  // Backend & APIs
  {
    name: 'Node.js',
    level: 90,
    category: 'Backend & APIs',
    experienceYears: '3+ yrs',
    iconName: 'Server',
    featuredProject: 'DevNexus Cloud',
    description: 'Event-driven I/O, microservices, stream processing, middleware pipelines.',
  },
  {
    name: 'Express.js',
    level: 92,
    category: 'Backend & APIs',
    experienceYears: '3+ yrs',
    iconName: 'Network',
    description: 'RESTful API routing, JWT auth, rate limiting, error handling architecture.',
  },
  {
    name: 'Flask / FastAPI',
    level: 88,
    category: 'Backend & APIs',
    experienceYears: '2+ yrs',
    iconName: 'Zap',
    featuredProject: 'NeuroFlow AI',
    description: 'Lightweight AI model serving, async endpoints, Pydantic validation.',
  },
  {
    name: 'RESTful API Design',
    level: 94,
    category: 'Backend & APIs',
    experienceYears: '3+ yrs',
    iconName: 'Share2',
    description: 'Stateless architecture, OpenAPI / Swagger specs, CORS, HTTP caching.',
  },

  // AI & Machine Learning
  {
    name: 'OpenAI API & LLMs',
    level: 92,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'Bot',
    featuredProject: 'NeuroFlow AI',
    description: 'Prompt engineering, Function calling, Structured outputs, Embeddings.',
  },
  {
    name: 'LangChain & RAG',
    level: 89,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'Cpu',
    featuredProject: 'NeuroFlow AI',
    description: 'Multi-agent orchestration, vector memory retrieval, document splitters.',
  },
  {
    name: 'PyTorch / TensorFlow',
    level: 82,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'BrainCircuit',
    featuredProject: 'VisionPulse ML',
    description: 'Neural networks, CNNs, model fine-tuning, loss evaluation, inference.',
  },
  {
    name: 'Scikit-Learn',
    level: 86,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'BarChart3',
    description: 'Regression, classification, random forests, feature scaling, PCA.',
  },
  {
    name: 'spaCy / NLP',
    level: 84,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'FileText',
    description: 'Named Entity Recognition (NER), tokenization, semantic similarity.',
  },

  // Databases & Cloud
  {
    name: 'MongoDB',
    level: 90,
    category: 'Databases & Cloud',
    experienceYears: '3+ yrs',
    iconName: 'Database',
    featuredProject: 'DevNexus Cloud',
    description: 'Aggregation pipelines, indexing, schema design with Mongoose, Atlas.',
  },
  {
    name: 'MySQL / PostgreSQL',
    level: 88,
    category: 'Databases & Cloud',
    experienceYears: '3+ yrs',
    iconName: 'HardDrive',
    featuredProject: 'EchoMarket',
    description: 'Relational data modeling, ACID transactions, Prisma ORM, Supabase.',
  },
  {
    name: 'Docker',
    level: 82,
    category: 'Databases & Cloud',
    experienceYears: '2+ yrs',
    iconName: 'Container',
    description: 'Containerization, Dockerfile multi-stage builds, Docker Compose.',
  },
  {
    name: 'Vercel / Cloudflare',
    level: 92,
    category: 'Databases & Cloud',
    experienceYears: '2+ yrs',
    iconName: 'Cloud',
    description: 'Edge functions, continuous deployment, DNS config, caching layers.',
  },

  // DevOps & Tools
  {
    name: 'Git & GitHub',
    level: 94,
    category: 'DevOps & Tools',
    experienceYears: '3+ yrs',
    iconName: 'GitBranch',
    description: 'Branching workflows, PR reviews, merge conflict resolution, Actions CI/CD.',
  },
  {
    name: 'Linux / Bash',
    level: 88,
    category: 'DevOps & Tools',
    experienceYears: '3+ yrs',
    iconName: 'TerminalSquare',
    description: 'Shell scripting, file permissions, server configuration, package management.',
  },
  {
    name: 'VS Code & Android Studio',
    level: 94,
    category: 'DevOps & Tools',
    experienceYears: '4+ yrs',
    iconName: 'Smartphone',
    description: 'Advanced debugging, extensions, mobile SDK tooling, profiler inspection.',
  },

  // Core Engineering
  {
    name: 'Data Structures & Algorithms',
    level: 90,
    category: 'Core Engineering',
    experienceYears: '3+ yrs',
    iconName: 'Binary',
    description: 'Arrays, Trees, Graphs, Dynamic Programming, Greedy algorithms, Heaps.',
  },
  {
    name: 'System Design (Fundamentals)',
    level: 84,
    category: 'Core Engineering',
    experienceYears: '2+ yrs',
    iconName: 'Boxes',
    description: 'Scalability, Load Balancing, Caching, CAP Theorem, Microservices vs Monolith.',
  },
  {
    name: 'Problem Solving & Critical Thinking',
    level: 95,
    category: 'Core Engineering',
    experienceYears: '4+ yrs',
    iconName: 'Lightbulb',
    description: 'Analytical debugging, root cause analysis, performance profiling.',
  },
];

export const projectsData: Project[] = [
  {
    id: 'neuroflow-ai',
    title: 'NeuroFlow AI',
    tagline: 'Autonomous AI Multi-Agent Workflow Engine & LLM Orchestrator',
    description:
      'A powerful enterprise platform for creating, visualizing, and executing collaborative multi-agent AI pipelines. Integrates RAG with vector search, tool calling, and live streaming trace analytics.',
    category: 'AI / ML',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js 14', 'TypeScript', 'LangChain', 'Python FastAPI', 'OpenAI API', 'Tailwind CSS', 'Pinecone'],
    githubUrl: 'https://github.com/aanandwayare/neuroflow-ai',
    liveUrl: 'https://neuroflow-ai-demo.vercel.app',
    stats: [
      { label: 'Latency Reduction', value: '45%' },
      { label: 'Agent Tasks Handled', value: '10K+' },
      { label: 'Token Efficiency', value: '3.2x' },
    ],
    caseStudy: {
      overview:
        'Engineered an end-to-end framework allowing developers to build autonomous agent swarms that collaborate on complex tasks such as code generation, deep research, and automated data synthesis.',
      architecture: [
        'Next.js 14 App Router client for reactive graph-based agent workflow builder.',
        'FastAPI asynchronous microservice handling LLM chains and LangChain tool dispatching.',
        'Vector memory subsystem with Pinecone for dynamic semantic retrieval (RAG).',
        'Server-Sent Events (SSE) for token-by-token streaming and real-time execution graphs.',
      ],
      challenges: [
        'Preventing agent looping and infinite token consumption during complex reasoning steps.',
        'Maintaining low latency while coordinating multiple interdependent agent tool executions.',
      ],
      solutions: [
        'Implemented recursive circuit breakers, structured JSON output validation, and stateful step timers.',
        'Utilized parallel task execution pools with async Python workers to handle non-blocking IO.',
      ],
      features: [
        'Drag-and-drop agent workflow visualizer with node connection rules',
        'Custom memory retention modules (Conversational Buffer, Vector Store, Summary Memory)',
        'Built-in prompt debugger with token cost calculator and temperature slider',
        'Real-time streaming agent thought process and tool invocation inspection',
      ],
      futureRoadmap: [
        'Support for local open-source LLMs via Ollama & vLLM',
        'Multi-tenant team collaboration workspaces',
      ],
    },
  },
  {
    id: 'devnexus-cloud',
    title: 'DevNexus Cloud',
    tagline: 'Collaborative Real-Time Developer Workspace & Cloud Code Canvas',
    description:
      'A full-stack modern developer platform enabling multi-user real-time code collaboration, live compiler sandboxes, instant video/chat huddles, and automated GitHub repository synchronization.',
    category: 'Full Stack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL', 'Docker', 'Prisma'],
    githubUrl: 'https://github.com/aanandwayare/devnexus-cloud',
    liveUrl: 'https://devnexus-cloud.vercel.app',
    stats: [
      { label: 'Sync Latency', value: '<25ms' },
      { label: 'Supported Languages', value: '12+' },
      { label: 'Concurrent Users', value: '500+' },
    ],
    caseStudy: {
      overview:
        'DevNexus was designed to solve friction in remote pair programming and technical interviews by combining low-latency shared editors with sandboxed code execution and interactive debugging.',
      architecture: [
        'Next.js 14 App Router frontend with Monaco Editor integration.',
        'Node.js WebSocket gateway with Operational Transformation (OT) / CRDT for conflict-free multi-cursor syncing.',
        'Docker container pool for isolated, secure code execution across 12 programming languages.',
        'PostgreSQL with Prisma ORM for resilient workspace persistence.',
      ],
      challenges: [
        'Handling race conditions and cursor position drift across rapid simultaneous keystrokes.',
        'Preventing malicious code execution or resource exhaustion in compiler sandboxes.',
      ],
      solutions: [
        'Engineered an optimistic CRDT sync layer with server-side reconciliation.',
        'Isolated code execution inside ephemeral Docker containers with strict CPU/memory limits and network disabled.',
      ],
      features: [
        'Multi-cursor live code editing with user color badges and presence indicators',
        'Instant one-click execution sandbox with stdin/stdout streaming',
        'Integrated WebRTC voice & video huddles with screen share',
        'Git branch management & direct commit push to GitHub repositories',
      ],
      futureRoadmap: [
        'AI pair programmer assistant directly embedded into the Monaco editor',
        'Custom template marketplace for React, Next.js, and Python microservices',
      ],
    },
  },
  {
    id: 'visionpulse-ml',
    title: 'VisionPulse ML',
    tagline: 'Real-Time Computer Vision & Medical Imaging Diagnostic Suite',
    description:
      'A machine learning application utilizing Convolutional Neural Networks and OpenCV for real-time anomaly detection, medical scan classification, and interactive heat-map Grad-CAM visualizations.',
    category: 'AI / ML',
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Flask', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/aanandwayare/visionpulse-ml',
    liveUrl: 'https://visionpulse-ml.vercel.app',
    stats: [
      { label: 'Classification Accuracy', value: '96.8%' },
      { label: 'Inference Speed', value: '42ms' },
      { label: 'Dataset Scans Tested', value: '25,000+' },
    ],
    caseStudy: {
      overview:
        'VisionPulse provides an intuitive, high-accuracy diagnostic aid for healthcare professionals to inspect radiological scans, identify micro-anomalies, and review visual explainability heatmaps.',
      architecture: [
        'Fine-tuned ResNet-50 & DenseNet-121 architectures optimized for medical image features.',
        'Grad-CAM (Gradient-weighted Class Activation Mapping) engine generating visual explainability overlays.',
        'Flask REST API providing streaming inference endpoints with batch image preprocessing.',
        'Tailwind CSS & React interface featuring interactive DICOM viewer tools and zoom/contrast filters.',
      ],
      challenges: [
        'High class imbalance in rare condition radiology datasets.',
        'Explaining AI decisions to medical practitioners to foster trust and validation.',
      ],
      solutions: [
        'Employed focal loss functions and extensive data augmentation (elastic transforms, affine rotations).',
        'Integrated Grad-CAM heatmaps showing exact activation regions influencing the model classification.',
      ],
      features: [
        'Drag-and-drop scan upload with automatic format normalization',
        'Side-by-side comparative inspection with toggleable Grad-CAM heatmap overlay',
        'Automated PDF diagnostic report generator with confidence scores',
        'Historical scan tracker with longitudinal progression graphs',
      ],
      futureRoadmap: [
        '3D volumetric CT/MRI scan reconstruction',
        'Federated learning integration for private hospital deployments',
      ],
    },
  },
  {
    id: 'algoverse-3d',
    title: 'Algoverse 3D',
    tagline: 'Interactive 3D Data Structures & Algorithm Visualization Sandbox',
    description:
      'An educational 3D visualizer that transforms abstract data structures (Trees, Graphs, Sorting, Pathfinding) into interactive, step-by-step spatial animations with time-complexity analysis.',
    category: 'Tools & Systems',
    featured: false,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/aanandwayare/algoverse-3d',
    liveUrl: 'https://algoverse-3d.vercel.app',
    stats: [
      { label: 'Algorithms Covered', value: '25+' },
      { label: 'Student Users', value: '1.2K+' },
      { label: 'Frame Rate', value: '60 FPS' },
    ],
    caseStudy: {
      overview:
        'Built to demystify complex algorithms for engineering students through intuitive 3D spatial representations, step-by-step playback, and code line highlighting.',
      architecture: [
        'Three.js scene graph rendering dynamic node graphs, 3D bar arrays, and maze grids.',
        'Custom animation state engine controlling rewind, pause, step-forward, and variable speed execution.',
        'Synchronized pseudocode highlighter showing the exact algorithm line corresponding to the current 3D state.',
      ],
      challenges: ['Maintaining 60 FPS animation performance when rendering large graph traversals (Dijkstra, A*).'],
      solutions: ['Utilized instanced mesh rendering in Three.js and decoupled algorithm execution steps from render loops.'],
      features: [
        'Visualizations for Sorting, Binary Search Trees, AVL Trees, Graphs (BFS/DFS, Dijkstra, A*)',
        'Custom dataset input with randomize and worst-case scenario presets',
        'Live Big-O notation complexity counters (Time & Space)',
      ],
      futureRoadmap: ['Dynamic Programming grid 3D elevation maps', 'Multiplayer algorithm race mode'],
    },
  },
  {
    id: 'echomarket',
    title: 'EchoMarket Intelligent Commerce',
    tagline: 'High-Performance E-Commerce Platform with AI Recommendation Engine',
    description:
      'A full-stack, scalable shopping platform featuring personalized AI product recommendations, real-time inventory management, Stripe payment processing, and an administrative analytics dashboard.',
    category: 'Full Stack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Stripe API', 'Tailwind CSS', 'Redis'],
    githubUrl: 'https://github.com/aanandwayare/echomarket',
    liveUrl: 'https://echomarket-demo.vercel.app',
    stats: [
      { label: 'Checkout Conversion', value: '+32%' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Test Transactions', value: '$50K+' },
    ],
    caseStudy: {
      overview:
        'Created a modern headless e-commerce store optimized for sub-second page transitions, dynamic AI personalization, and frictionless checkout experiences.',
      architecture: [
        'Next.js Incremental Static Regeneration (ISR) for instant product page delivery.',
        'Collaborative filtering recommendation engine built in Node.js and cached with Redis.',
        'Stripe webhooks handling secure payment confirmation and order lifecycle management.',
        'MongoDB Atlas backend with optimized multi-field indexes for instant faceted search.',
      ],
      challenges: ['Preventing overselling during flash sale spikes and ensuring sub-second search response times.'],
      solutions: ['Implemented Redis distributed locks on inventory items and leveraged MongoDB compound index queries.'],
      features: [
        'Faceted product filtering with live URL state sync',
        'AI "Customers Also Loved" recommendation carousel based on cart contents',
        'Stripe checkout with multiple currency support',
        'Admin dashboard with sales charts and real-time inventory alerts',
      ],
      futureRoadmap: ['AR 3D product preview mode', 'Voice search integration'],
    },
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 'timeline-sit',
    year: '2023 - Present',
    title: 'Bachelor of Engineering in Computer Engineering',
    subtitle: 'Sinhagad Institute of Technology, Lonavala',
    organization: 'Savitribai Phule Pune University (SPPU)',
    location: 'Lonavala, Maharashtra, India',
    description: [
      'Deep focus on Software Engineering, Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, and Cloud Computing.',
      'Active developer building scalable full-stack web architectures and applied AI systems.',
      'Participated in university technical symposiums, hackathons, and open source development initiatives.',
    ],
    badge: 'Current Pursuit',
    type: 'education',
    icon: 'GraduationCap',
  },
  {
    id: 'timeline-diploma',
    year: '2020 - 2023',
    title: 'Diploma in Computer Engineering',
    subtitle: 'Foundational Engineering & Core Computing',
    organization: 'MSBTE (Maharashtra State Board of Technical Education)',
    location: 'Maharashtra, India',
    description: [
      'Built a rock-solid foundation in Object-Oriented Programming (C++, Java), Web Technologies (HTML, CSS, JavaScript, PHP), Relational Databases (MySQL), and Computer Networks.',
      'Graduated with First Class with Distinction, providing the strong practical springboard for advanced engineering.',
      'Developed multiple hands-on capstone projects including inventory management systems and desktop applications.',
    ],
    badge: 'Completed with Distinction',
    type: 'education',
    icon: 'Award',
  },
  {
    id: 'timeline-ai-expansion',
    year: '2024 - 2025',
    title: 'Advanced AI & Full-Stack Systems Research',
    subtitle: 'Autonomous Agents, LLMs & Distributed Architecture',
    organization: 'Independent Engineering & Open Source',
    location: 'Pune, India',
    description: [
      'Engineered NeuroFlow AI: an autonomous multi-agent workflow framework leveraging LangChain and OpenAI APIs.',
      'Developed real-time collaborative developer environments with WebSockets, Docker, and modern Next.js App Router.',
      'Authored modular open-source repositories and created intuitive developer tools.',
    ],
    badge: 'Key Milestone',
    type: 'milestone',
    icon: 'Sparkles',
  },
];

export const certificationsData = [
  {
    title: 'Full Stack Web Development & Modern React',
    issuer: 'Industry Recognized Certification',
    year: '2024',
    credentialId: 'FSWD-98234-AW',
    skills: ['Next.js', 'React', 'Node.js', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'Machine Learning & Deep Learning Specialization',
    issuer: 'AI Foundations & Neural Networks',
    year: '2024',
    credentialId: 'ML-DL-54219-AW',
    skills: ['Python', 'PyTorch', 'Scikit-Learn', 'NLP', 'Computer Vision'],
  },
  {
    title: 'Data Structures and Algorithms in C++ & Java',
    issuer: 'Algorithmic Problem Solving Mastery',
    year: '2023',
    credentialId: 'DSA-31902-AW',
    skills: ['DSA', 'Trees & Graphs', 'Dynamic Programming', 'Complexity Analysis'],
  },
];

export const faqData: FAQItem[] = [
  {
    category: 'Recruiter',
    question: 'Is Anand available for full-time software engineering or AI roles?',
    answer:
      'Yes! Anand is actively open to full-time opportunities, high-impact product engineering roles, and innovative internships where he can apply his Full Stack (Next.js/React/Node.js) and AI/ML (Python/LangChain) expertise.',
  },
  {
    category: 'Recruiter',
    question: 'What makes Anand stand out from other candidates?',
    answer:
      'Anand bridges high-craft UI/UX engineering with deep AI/LLM systems integration. Having completed both a rigorous Diploma and Bachelor of Engineering at Sinhagad Institute of Technology, he possesses both deep hands-on implementation speed and solid computer science theoretical fundamentals.',
  },
  {
    category: 'Technical',
    question: 'What is Anand’s primary tech stack for production web applications?',
    answer:
      'For the frontend, Anand utilizes Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion. For backend services, he builds with Node.js, Express, Python FastAPI, PostgreSQL, MongoDB, Redis, and integrates LLMs via LangChain and OpenAI APIs.',
  },
  {
    category: 'Technical',
    question: 'How does Anand approach system performance and code quality?',
    answer:
      'Anand enforces strict TypeScript types, modular component architecture, server-side caching (ISR/SSR), lightweight bundle footprints, 60fps animations, accessible semantic HTML, and automated linting/formatting standards.',
  },
  {
    category: 'General',
    question: 'Where is Anand located and is he open to remote work?',
    answer:
      'Anand is based in Pune, Maharashtra, India. He is fully equipped and experienced with remote work environments, distributed team workflows (Git, Slack, Agile), and is also open to hybrid/on-site roles.',
  },
];

export const recruiterFaqs = faqData;

export const resumeData = {
  name: personalInfo.name,
  title: personalInfo.role,
  summary: personalInfo.bioSummary,
  contact: {
    email: personalInfo.email,
    phone: personalInfo.phone,
    location: personalInfo.location,
    github: personalInfo.socials.github,
    linkedin: personalInfo.socials.linkedin,
  },
  education: [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Sinhagad Institute of Technology, Lonavala (SPPU)',
      duration: '2023 - Present',
      grade: 'Pursuing Core Degree',
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'MSBTE (Maharashtra State Board of Technical Education)',
      duration: '2020 - 2023',
      grade: 'First Class with Distinction',
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C++', 'C', 'Java', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['Next.js (App Router)', 'React.js', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'],
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Authentication'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['OpenAI APIs', 'LangChain', 'PyTorch', 'Scikit-Learn', 'spaCy / NLP', 'RAG'],
    },
    {
      category: 'Databases & Tools',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'Git & GitHub', 'Postman'],
    },
  ],
  projects: [
    {
      name: 'NeuroFlow AI - Multi-Agent Workflow Engine',
      tech: ['Next.js 14', 'Python', 'LangChain', 'OpenAI', 'Tailwind CSS'],
      highlights: [
        'Orchestrated autonomous multi-agent reasoning chains with vector search RAG retrieval.',
        'Reduced query latency by 42% through intelligent stream caching and structured outputs.',
      ],
    },
    {
      name: 'Nexus Cloud Workspace - Real-Time Collaborative Platform',
      tech: ['React', 'Node.js', 'WebSockets', 'Docker', 'MongoDB'],
      highlights: [
        'Architected sub-50ms operational transform sync for simultaneous document editing.',
        'Engineered isolated Docker sandboxes for on-demand cloud code compilation.',
      ],
    },
  ],
};

