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
  role: 'Java Full Stack Developer & AI Engineer',
  tagline: 'Building Intelligent Enterprise Applications Powered by Java, Spring Boot, React, and Artificial Intelligence.',
  location: 'Pune, Maharashtra, India',
  timezone: 'IST (UTC+05:30)',
  email: 'aanandwayare61@gmail.com',
  phone: '+91 7276011718',
  status: '🟢 Open to Full-Time & High-Impact Roles',
  bioSummary:
    'I am a Computer Engineering student at Sinhagad Institute of Technology, Lonavala, with a strong foundation built through my Diploma in Computer Engineering. My expertise combines Java Full Stack Development (Java, Spring Boot, Hibernate, JDBC, Servlets, JSP, React, Next.js, TypeScript, HTML, CSS, Tailwind CSS, MySQL) with Applied Artificial Intelligence (Python, OpenAI APIs, LangChain, Vector Databases, Machine Learning, Scikit-Learn, spaCy). I enjoy building scalable enterprise applications enhanced with intelligent AI capabilities while focusing on clean architecture, performance, and user experience.',
  aboutDetailed: [
    'I am a Computer Engineering student at Sinhagad Institute of Technology, Lonavala, with a solid foundational background in software engineering through my prior Diploma in Computer Engineering.',
    'My core expertise bridges modern Java Full Stack Development (Java, Spring Boot, Hibernate, JDBC, Servlets, JSP, React, Next.js, TypeScript, Tailwind CSS) with modern Applied Artificial Intelligence (LangChain, OpenAI APIs, Vector Databases, Python, Scikit-Learn, spaCy).',
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
    'Specialized in Java Full Stack Development & Spring Boot',
    'Architecting Autonomous AI Multi-Agent & LLM Pipelines (LangChain, RAG)',
    'Strong Computer Science Fundamentals: Data Structures, Algorithms & System Design',
    'Experience spanning BE Computer Engineering & Diploma in Computer Engineering',
  ],
};

export const skillsData: Skill[] = [
  // Programming Languages
  {
    name: 'Java',
    level: 94,
    category: 'Programming Languages',
    experienceYears: '3+ yrs',
    iconName: 'Coffee',
    featuredProject: 'DevNexus Cloud',
    description: 'Object-oriented programming, Collections framework, multithreading, and streams API.',
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'Programming Languages',
    experienceYears: '2+ yrs',
    iconName: 'Code2',
    featuredProject: 'Portfolio',
    description: 'Strict type safety, generics, utility types, and modern ESNext features.',
  },
  {
    name: 'JavaScript (ES6+)',
    level: 93,
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
    description: 'Data Science, PyTorch, automation scripts, and AI agent frameworks.',
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
    name: 'SQL',
    level: 92,
    category: 'Programming Languages',
    experienceYears: '3+ yrs',
    iconName: 'Database',
    featuredProject: 'EchoMarket',
    description: 'Complex joins, indexing, query optimization, and schema normalization.',
  },

  // Frontend
  {
    name: 'React.js',
    level: 94,
    category: 'Frontend',
    experienceYears: '3+ yrs',
    iconName: 'Atom',
    featuredProject: 'NeuroFlow AI',
    description: 'Custom hooks, Context API, state management, Suspense, Concurrent Mode.',
  },
  {
    name: 'Next.js (App Router)',
    level: 92,
    category: 'Frontend',
    experienceYears: '2+ yrs',
    iconName: 'Layers',
    featuredProject: 'DevNexus Cloud',
    description: 'Server Components (RSC), SSR, SSG, Server Actions, Route Handlers, SEO.',
  },
  {
    name: 'Tailwind CSS',
    level: 95,
    category: 'Frontend',
    experienceYears: '3+ yrs',
    iconName: 'Palette',
    description: 'Responsive design, custom design tokens, animations, dark mode palettes.',
  },
  {
    name: 'HTML5 & Modern CSS3',
    level: 96,
    category: 'Frontend',
    experienceYears: '4+ yrs',
    iconName: 'Layout',
    description: 'Semantic markup, accessibility (a11y), CSS Grid, Flexbox, Keyframes.',
  },
  {
    name: 'Framer Motion',
    level: 88,
    category: 'Frontend',
    experienceYears: '2+ yrs',
    iconName: 'Sparkles',
    description: 'Layout animations, gesture recognition, scroll parallax, spring physics.',
  },

  // Backend & APIs
  {
    name: 'Spring Boot',
    level: 92,
    category: 'Backend & APIs',
    experienceYears: '2+ yrs',
    iconName: 'Server',
    featuredProject: 'DevNexus Cloud',
    description: 'Dependency injection, Spring MVC, Security, Spring Data JPA, microservices.',
  },
  {
    name: 'Hibernate',
    level: 89,
    category: 'Backend & APIs',
    experienceYears: '2+ yrs',
    iconName: 'Network',
    description: 'Object-Relational Mapping (ORM), session management, caching, HQL.',
  },
  {
    name: 'JDBC / Servlets / JSP',
    level: 88,
    category: 'Backend & APIs',
    experienceYears: '3+ yrs',
    iconName: 'Zap',
    description: 'Dynamic web page generation, request handling, direct database connectivity.',
  },
  {
    name: 'RESTful API Design',
    level: 93,
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
    name: 'LangChain',
    level: 88,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'Cpu',
    featuredProject: 'NeuroFlow AI',
    description: 'Multi-agent orchestration, vector memory retrieval, document splitters.',
  },
  {
    name: 'Scikit-Learn',
    level: 85,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'BarChart3',
    description: 'Regression, classification, random forests, feature scaling, PCA.',
  },
  {
    name: 'spaCy / NLP',
    level: 83,
    category: 'AI & Machine Learning',
    experienceYears: '2+ yrs',
    iconName: 'FileText',
    description: 'Named Entity Recognition (NER), tokenization, semantic similarity.',
  },

  // Databases & Cloud
  {
    name: 'MySQL',
    level: 93,
    category: 'Databases & Cloud',
    experienceYears: '3+ yrs',
    iconName: 'Database',
    featuredProject: 'EchoMarket',
    description: 'Relational data modeling, schema optimization, transaction isolation, profiling.',
  },
  {
    name: 'Docker',
    level: 82,
    category: 'Databases & Cloud',
    experienceYears: '2+ yrs',
    iconName: 'Container',
    description: 'Containerization, Dockerfile multi-stage builds, Docker Compose.',
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
    name: 'IntelliJ IDEA',
    level: 92,
    category: 'DevOps & Tools',
    experienceYears: '3+ yrs',
    iconName: 'TerminalSquare',
    description: 'Advanced debugging, profiler tools, project management for Spring architectures.',
  },
  {
    name: 'Postman',
    level: 91,
    category: 'DevOps & Tools',
    experienceYears: '3+ yrs',
    iconName: 'Share2',
    description: 'API testing, collection runner, environment variables, mock servers.',
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
    technologies: ['Next.js 14', 'TypeScript', 'LangChain', 'Python FastAPI', 'OpenAI API', 'Tailwind CSS', 'MySQL'],
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
        'Vector memory subsystem with MySQL for dynamic semantic retrieval (RAG).',
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
    tagline: 'Collaborative Real-Time Developer Workspace & Java Backend Canvas',
    description:
      'A full-stack modern developer platform enabling multi-user real-time code collaboration, live compiler sandboxes, instant video/chat huddles, and automated GitHub repository synchronization.',
    category: 'Full Stack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'React', 'TypeScript', 'Java', 'Spring Boot', 'Hibernate', 'WebSockets', 'MySQL'],
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
        'Spring Boot WebSocket gateway with Operational Transformation (OT) / CRDT for conflict-free multi-cursor syncing.',
        'Docker container pool for isolated, secure code execution across 12 programming languages.',
        'MySQL with Hibernate for resilient workspace persistence.',
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
        'AI pair programmer assistant directly embedded into the editor',
        'Custom template marketplace for Spring Boot and Python microservices',
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
    technologies: ['Python', 'OpenCV', 'Scikit-Learn', 'Flask', 'React', 'Tailwind CSS'],
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
    tagline: 'High-Performance E-Commerce Platform with Java Spring Boot Backend',
    description:
      'A full-stack, scalable shopping platform featuring personalized AI product recommendations, real-time inventory management, Stripe payment processing, and an administrative analytics dashboard.',
    category: 'Full Stack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'React', 'Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Stripe API', 'Tailwind CSS'],
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
        'Collaborative filtering recommendation engine built in Spring Boot and cached with Redis.',
        'Stripe webhooks handling secure payment confirmation and order lifecycle management.',
        'MySQL backend with optimized indexes for instant faceted search.',
      ],
      challenges: ['Preventing overselling during flash sale spikes and ensuring sub-second search response times.'],
      solutions: ['Implemented distributed locks on inventory items and leveraged SQL indexes.'],
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
    year: '2025 – Present',
    title: 'Bachelor of Engineering in Computer Engineering',
    subtitle: 'Sinhagad Institute of Technology, Lonavala',
    organization: 'Savitribai Phule Pune University (SPPU)',
    location: 'Lonavala, Maharashtra, India',
    description: [
      'Deep focus on Software Engineering, Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, and Cloud Computing.',
      'Active developer building scalable Java Full Stack web architectures and applied AI systems.',
      'Participated in university technical symposiums, hackathons, and open source development initiatives.',
    ],
    badge: 'Current Pursuit',
    type: 'education',
    icon: 'GraduationCap',
  },
  {
    id: 'timeline-diploma',
    year: '2022 – 2025',
    title: 'Diploma in Computer Engineering',
    subtitle: 'Foundational Engineering & Core Computing',
    organization: 'MSBTE (Maharashtra State Board of Technical Education)',
    location: 'Maharashtra, India',
    description: [
      'Built a rock-solid foundation in Object-Oriented Programming (Java, C++), Web Technologies, Relational Databases (MySQL), and Computer Networks.',
      'Graduated with First Class with Distinction, providing the strong practical springboard for advanced engineering.',
      'Developed multiple hands-on capstone projects including inventory management systems and desktop applications.',
    ],
    badge: 'Completed with Distinction',
    type: 'education',
    icon: 'Award',
  },
  {
    id: 'timeline-ai-expansion',
    year: '2025',
    title: 'Java Full Stack & AI Engineering Specialization',
    subtitle: 'Advanced projects, internships, and continuous learning',
    organization: 'Independent Engineering & Internships',
    location: 'Pune, India',
    description: [
      'Started specialization in Artificial Intelligence and Java Full Stack Development through advanced projects, internships, and continuous learning.',
      'Engineered NeuroFlow AI: an autonomous multi-agent workflow framework leveraging LangChain and OpenAI APIs.',
      'Developed real-time collaborative developer environments with Spring Boot, WebSockets, Docker, and modern Next.js.',
    ],
    badge: 'Key Milestone',
    type: 'milestone',
    icon: 'Sparkles',
  },
  {
    id: 'timeline-android-intern',
    year: 'June 2024 – July 2024',
    title: 'Android Developer Intern',
    subtitle: 'Mountreach Solution Pvt. Ltd.',
    organization: 'Mountreach Solution Pvt. Ltd.',
    location: 'Pune, India',
    description: [
      'Completed a 45-day industrial internship in Android Development (45 Days Internship).',
      'Built Android applications using core Android concepts and Java.',
      'Worked on UI development, application architecture, debugging, and optimization.',
      'Gained practical experience with the software development lifecycle and team collaboration.',
    ],
    badge: '45 Days Internship',
    type: 'experience',
    icon: 'Smartphone',
  },
  {
    id: 'timeline-ai-intern',
    year: 'March 2026 – April 2026',
    title: 'Artificial Intelligence Intern',
    subtitle: 'CodeNova',
    organization: 'CodeNova',
    location: 'Remote',
    description: [
      'Successfully completed a one-month internship in Artificial Intelligence (1 Month Internship).',
      'Worked on AI-based applications and real-world development tasks.',
      'Contributed to assigned projects involving NLP, OpenAI APIs, and intelligent systems.',
      'Strengthened practical knowledge of AI development workflows and modern software engineering practices.',
    ],
    badge: '1 Month Internship',
    type: 'experience',
    icon: 'Bot',
  },
];

export const certificationsData = [
  {
    title: 'Python for Data Structures Training',
    issuer: 'Complete Java Classes by Kunal Sir',
    year: '2025',
    credentialId: 'PY-DS-AW',
    skills: ['Python', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'Java Full Stack Developer Specialization',
    issuer: 'Complete Java Classes',
    year: '2025',
    credentialId: 'JFS-AW',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'MySQL'],
  },
];

export const faqData: FAQItem[] = [
  {
    category: 'Recruiter',
    question: 'Is Anand available for full-time Java Full Stack or AI roles?',
    answer:
      'Yes! Anand is actively open to full-time opportunities, high-impact product engineering roles, and innovative internships where he can apply his Java Full Stack (Java, Spring Boot, React) and AI/ML (Python, OpenAI, LangChain) expertise.',
  },
  {
    category: 'Recruiter',
    question: 'What makes Anand stand out as a Java Full Stack Developer with AI?',
    answer:
      'Anand bridges modern web architecture and Spring Boot backends with Applied AI systems integration. Having completed both a Diploma and pursuing BE Computer Engineering at Sinhagad Institute of Technology, he possesses strong software engineering fundamentals and implementation speed.',
  },
  {
    category: 'Technical',
    question: 'What is Anand’s primary tech stack for Java enterprise applications?',
    answer:
      'He utilizes Java, Spring Boot, Spring MVC, Hibernate, JDBC, Servlets, and JSP on the backend. For the frontend, he builds with React, Next.js, TypeScript, and Tailwind CSS. Databases are handled with MySQL, and AI pipelines are built with Python, OpenAI APIs, and LangChain.',
  },
  {
    category: 'Technical',
    question: 'How does Anand approach system performance and code quality?',
    answer:
      'Anand enforces clean architecture, Spring dependency injection patterns, database indexing/caching, strict TypeScript types, responsive UI design, and modular component reusability.',
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
      duration: '2025 – Present',
      grade: 'Pursuing Core Degree',
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'MSBTE (MSBTE Board)',
      duration: '2022 – 2025',
      grade: 'First Class with Distinction',
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Java', 'TypeScript', 'JavaScript (ES6+)', 'Python', 'C++', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend & APIs',
      items: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JDBC', 'Servlets', 'JSP', 'REST APIs'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['Python', 'OpenAI API', 'LangChain', 'Machine Learning', 'Scikit-Learn', 'spaCy'],
    },
    {
      category: 'Databases & Tools',
      items: ['MySQL', 'Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'Postman'],
    },
  ],
  projects: [
    {
      name: 'NeuroFlow AI - Multi-Agent Workflow Engine',
      tech: ['Next.js 14', 'Python', 'LangChain', 'OpenAI', 'Tailwind CSS', 'MySQL'],
      highlights: [
        'Orchestrated autonomous multi-agent reasoning chains with vector search RAG retrieval.',
        'Reduced query latency by 45% through intelligent stream caching and structured outputs.',
      ],
    },
    {
      name: 'DevNexus Cloud Workspace - Java Collaborative Platform',
      tech: ['Next.js', 'React', 'Java', 'Spring Boot', 'Hibernate', 'WebSockets', 'MySQL'],
      highlights: [
        'Architected sub-25ms WebSocket-based synchronization for simultaneous document editing.',
        'Engineered isolated Docker sandboxes for on-demand cloud code compilation.',
      ],
    },
  ],
};
