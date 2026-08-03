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
    text: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    glow: 'rgba(255, 107, 0, 0.45)',
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
    id: 'java',
    name: 'Java',
    category: 'Programming Languages',
    size: 'large',
    x: 420,
    y: 190,
    iconName: 'java',
    color: '#EA2D2E',
    glowColor: 'rgba(234, 45, 46, 0.45)',
    description:
      'Core enterprise platform language, Object-Oriented Design Patterns, multi-threading, concurrency utilities, JVM configurations, Streams API, and Collections framework.',
    proficiency: 94,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'DevNexus Collaborative Cloud', role: 'Spring Boot WebSocket Architect' },
      { name: 'EchoMarket headless api', role: 'Spring Data JPA Relational Schema Mapping' },
      { name: 'Biometric Android Companion', role: 'Native Java BLE Driver Lifecycle' },
    ],
    relatedSkills: ['springboot', 'hibernate', 'mysql', 'typescript', 'vscode'],
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
      'Strict type engineering, generic interfaces, utility types, and strict compilation checks ensuring type safety across client workspaces.',
    proficiency: 90,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'Interactive Project Dashboard', role: 'State Machine Visual Graph Nodes' },
      { name: 'Algoverse 3D visualize', role: 'Types for Generator Execution Time-Travel' },
    ],
    relatedSkills: ['java', 'react', 'nextjs', 'vscode'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming Languages',
    size: 'medium',
    x: 740,
    y: 190,
    iconName: 'python',
    color: '#387EB8',
    glowColor: 'rgba(56, 126, 184, 0.5)',
    description:
      'Applied AI language, Scikit-Learn data science algorithms, NLP processing scripts (spaCy), LangChain pipeline prototyping, and model fine-tuning configurations.',
    proficiency: 90,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'NeuroFlow AI multi-agent', role: 'Core LangChain orchestrator' },
      { name: 'VisionPulse ML anomaly diagnostic', role: 'Radiology model classifier' },
    ],
    relatedSkills: ['openai', 'langchain', 'python', 'vscode'],
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
      'Object-oriented systems programming, Standard Template Library (STL), memory management, complex algorithmic tasks, and DSA.',
    proficiency: 88,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'Algoverse 3D visualizer', role: 'Time-Complexity data graph computations' },
    ],
    relatedSkills: ['java'],
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
      'Relational database querying, multi-table joins, subqueries, ACID compliance transaction configurations, schema normalizations, and index optimization.',
    proficiency: 92,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'EchoMarket commerce database', role: 'Catalog index optimization' },
    ],
    relatedSkills: ['mysql', 'springboot'],
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
      'Component hooks, context boundaries, virtual DOM reconciliation, state optimization, concurrent mode rendering, and modular view component building.',
    proficiency: 94,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'DevNexus Cloud Workspace', role: 'Real-time collaborative canvas' },
      { name: 'NeuroFlow AI workflow graph', role: 'Stateful node builder interface' },
    ],
    relatedSkills: ['typescript', 'nextjs', 'tailwind'],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    size: 'medium',
    x: 230,
    y: 210,
    iconName: 'nextjs',
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.3)',
    description:
      'Next.js App Router architectures, Server-side rendering (SSR), Incremental Static Regeneration (ISR), static generation, server routing configurations.',
    proficiency: 92,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'Bento Project Gallery Dashboard', role: 'Dynamic detail modals & routing' },
    ],
    relatedSkills: ['react', 'typescript', 'tailwind'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    size: 'small',
    x: 100,
    y: 290,
    iconName: 'tailwind',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    description:
      'Frictionless responsive styling utility, custom theme configurations, dark mode class mapping, flexbox/grid layout design.',
    proficiency: 95,
    experienceYears: '3+ Yrs',
    projects: [],
    relatedSkills: ['react', 'nextjs'],
  },

  // ==========================================
  // BACKEND & APIS
  // ==========================================
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'Backend & APIs',
    size: 'large',
    x: 430,
    y: 380,
    iconName: 'springboot',
    color: '#6DB33F',
    glowColor: 'rgba(109, 179, 63, 0.5)',
    description:
      'Spring dependency injection, inversion of control, Spring MVC RestControllers, Spring Data JPA repositories, Spring Security, microservice configuration.',
    proficiency: 92,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'DevNexus Cloud Workspace', role: 'WebSocket gateway & collaboration engine' },
      { name: 'EchoMarket E-Commerce', role: 'Headless Java catalog microservice' },
    ],
    relatedSkills: ['java', 'hibernate', 'mysql', 'rest-api'],
  },
  {
    id: 'hibernate',
    name: 'Hibernate',
    category: 'Backend & APIs',
    size: 'medium',
    x: 440,
    y: 470,
    iconName: 'hibernate',
    color: '#59666C',
    glowColor: 'rgba(89, 102, 108, 0.45)',
    description:
      'Object-Relational Mapping entity configurations, Session persistence lifecycle, lazy/eager loading patterns, JPA criteria query tuning, HQL expressions.',
    proficiency: 89,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'EchoMarket E-Commerce', role: 'ORM data schema entity mapping' },
    ],
    relatedSkills: ['springboot', 'java', 'mysql'],
  },
  {
    id: 'jdbc-jsp',
    name: 'JDBC / Servlets / JSP',
    category: 'Backend & APIs',
    size: 'small',
    x: 550,
    y: 430,
    iconName: 'zap',
    color: '#0073B7',
    glowColor: 'rgba(0, 115, 183, 0.4)',
    description:
      'Direct JDBC database connections, HTTP Servlet request lifecycles, enterprise Java Server Pages session processing, traditional Java web app development.',
    proficiency: 88,
    experienceYears: '3+ Yrs',
    projects: [],
    relatedSkills: ['java', 'sql'],
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
      'GPT models orchestrations, API function calling structures, system persona design, JSON output constraints, vector embeddings queries.',
    proficiency: 92,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'NeuroFlow AI multi-agent', role: 'Reasoning tool loops and JSON structure generation' },
    ],
    relatedSkills: ['python', 'langchain'],
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'AI / Machine Learning',
    size: 'small',
    x: 860,
    y: 310,
    iconName: 'langchain',
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.25)',
    description:
      'Structured chains visual design, vector memory document splitting, multi-agent orchestrator frameworks, agent custom tools execution loops.',
    proficiency: 88,
    experienceYears: '2+ Yrs',
    projects: [
      { name: 'NeuroFlow AI agent coordinator', role: 'DAG visual workflow run loops' },
    ],
    relatedSkills: ['openai', 'python'],
  },

  // ==========================================
  // DATABASE
  // ==========================================
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    size: 'medium',
    x: 580,
    y: 530,
    iconName: 'mysql',
    color: '#4479A1',
    glowColor: 'rgba(68, 121, 161, 0.5)',
    description:
      'Relational database engineering, query performance profiling, composite index optimization, table migrations, relational schema designs.',
    proficiency: 93,
    experienceYears: '3+ Yrs',
    projects: [
      { name: 'DevNexus Cloud persistence', role: 'Active files and user settings schemas' },
    ],
    relatedSkills: ['springboot', 'hibernate', 'sql'],
  },

  // ==========================================
  // DEV TOOLS
  // ==========================================
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Dev Tools',
    size: 'medium',
    x: 100,
    y: 530,
    iconName: 'git',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.45)',
    description:
      'Branching model workflows, GitHub CI/CD Actions build automation, merge conflict resolution, pull request code reviews.',
    proficiency: 94,
    experienceYears: '3+ Yrs',
    projects: [],
    relatedSkills: ['vscode'],
  },
  {
    id: 'intellij',
    name: 'IntelliJ IDEA',
    category: 'Dev Tools',
    size: 'small',
    x: 150,
    y: 600,
    iconName: 'terminal',
    color: '#FE315D',
    glowColor: 'rgba(254, 49, 93, 0.4)',
    description:
      'Enterprise Java IDE profile tools, Spring Boot run configuration settings, advanced Maven/Gradle dependency debugging.',
    proficiency: 92,
    experienceYears: '3+ Yrs',
    projects: [],
    relatedSkills: ['java', 'springboot'],
  },
];

export const skillConnections: SkillConnection[] = [
  { source: 'java', target: 'springboot' },
  { source: 'java', target: 'hibernate' },
  { source: 'java', target: 'jdbc-jsp' },
  { source: 'springboot', target: 'hibernate' },
  { source: 'springboot', target: 'mysql' },
  { source: 'hibernate', target: 'mysql' },
  { source: 'java', target: 'typescript' },
  { source: 'typescript', target: 'react' },
  { source: 'react', target: 'nextjs' },
  { source: 'react', target: 'tailwind' },
  { source: 'typescript', target: 'nextjs' },
  { source: 'springboot', target: 'react' },
  { source: 'python', target: 'openai' },
  { source: 'python', target: 'langchain' },
  { source: 'openai', target: 'langchain' },
  { source: 'mysql', target: 'sql' },
  { source: 'springboot', target: 'intellij' },
  { source: 'java', target: 'intellij' },
];
