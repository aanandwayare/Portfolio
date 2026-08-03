import { personalInfo, skillsData } from './portfolioData';

export interface AIResponse {
  answer: string;
  suggestedAction?: {
    label: string;
    actionType: 'scroll' | 'modal' | 'external' | 'copy';
    target: string;
  };
  relatedChips?: string[];
}

export const promptSuggestions = [
  'Why should we hire Anand?',
  'Tell me about his AI & ML projects',
  'What is his full tech stack?',
  'Summarize Anand\'s education & background',
  'How do I contact or schedule an interview?',
  'What is his experience with Java & Spring Boot?',
];

export function queryAIAssistant(query: string): AIResponse {
  const q = query.toLowerCase().trim();

  // Hiring / Recruiter Pitch
  if (
    q.includes('why hire') ||
    q.includes('hire him') ||
    q.includes('why should we hire') ||
    q.includes('value') ||
    q.includes('strengths') ||
    q.includes('candidate')
  ) {
    return {
      answer: `**Why Anand Chandrakant Wayare is an exceptional hire:**\n\n1. **Dual Expertise in Java Full Stack & AI:** Anand bridges enterprise Java backends (Spring Boot, Hibernate, MySQL, JDBC, Servlets, JSP) with modern Applied AI pipelines (Python, OpenAI APIs, LangChain, vector representations).\n2. **Deep Practical & Theoretical Foundation:** Having completed both a Diploma in Computer Engineering (with Distinction) and pursuing a BE in Computer Engineering at Sinhagad Institute of Technology, he brings 5+ years of continuous engineering immersion.\n3. **Craftsmanship & Speed:** Anand prioritizes Apple-level polish, 60fps animations, strict TypeScript safety, and scalable clean architectures.\n4. **Proven Projects:** He has built production-grade systems like *NeuroFlow AI* (multi-agent orchestrator) and *DevNexus Cloud* (real-time collaborative workspace with Spring Boot backend).\n\nHe is actively seeking high-impact roles where he can innovate immediately.`,
      suggestedAction: {
        label: 'View Featured Projects',
        actionType: 'scroll',
        target: '#projects',
      },
      relatedChips: ['Tell me about his AI & ML projects', 'How do I contact him?', 'Download his resume'],
    };
  }

  // AI & Machine Learning
  if (
    q.includes('ai') ||
    q.includes('machine learning') ||
    q.includes('ml') ||
    q.includes('langchain') ||
    q.includes('llm') ||
    q.includes('agent') ||
    q.includes('neuroflow') ||
    q.includes('visionpulse')
  ) {
    return {
      answer: `**Anand's AI & Machine Learning Expertise:**\n\n- **Autonomous Agent Architectures:** Built **NeuroFlow AI**, an enterprise framework for multi-agent LLM task orchestration with vector search and real-time streaming trace visualization.\n- **Computer Vision & Medical ML:** Built **VisionPulse ML**, fine-tuning CNN architectures (DenseNet-121) with Grad-CAM visual heatmaps for 96.8% accurate radiological anomaly classification.\n- **Core Tooling:** LangChain, OpenAI APIs, Python, Scikit-Learn, spaCy, and prompt engineering.\n\nHe specializes in taking AI from research prototypes into production-grade web applications.`,
      suggestedAction: {
        label: 'Inspect NeuroFlow AI Case Study',
        actionType: 'modal',
        target: 'neuroflow-ai',
      },
      relatedChips: ['What is his full tech stack?', 'Tell me about DevNexus Cloud', 'View his skills matrix'],
    };
  }

  // Full Tech Stack / Skills
  if (
    q.includes('tech stack') ||
    q.includes('skills') ||
    q.includes('technologies') ||
    q.includes('languages') ||
    q.includes('frameworks') ||
    q.includes('tools')
  ) {
    return {
      answer: `**Anand's Core Technical Stack:**\n\n- **Languages:** Java, TypeScript, JavaScript (ES6+), Python, C++, SQL\n- **Frontend:** React, Next.js, HTML5, CSS3, Tailwind CSS, Framer Motion\n- **Backend & APIs:** Java, Spring Boot, Spring MVC, Hibernate, JDBC, Servlets, JSP, REST APIs\n- **AI / ML:** Python, OpenAI API, LangChain, Machine Learning, Scikit-Learn, spaCy\n- **Databases & Tools:** MySQL, Git, GitHub, VS Code, IntelliJ IDEA, Android Studio, Postman, Docker\n\nHe has a top proficiency rating across Java and TypeScript ecosystems.`,
      suggestedAction: {
        label: 'Explore Interactive Skills Matrix',
        actionType: 'scroll',
        target: '#skills',
      },
      relatedChips: ['Tell me about his Next.js experience', 'Why hire Anand?', 'Summarize education'],
    };
  }

  // Education / Background
  if (
    q.includes('education') ||
    q.includes('college') ||
    q.includes('university') ||
    q.includes('sinhagad') ||
    q.includes('degree') ||
    q.includes('diploma') ||
    q.includes('school') ||
    q.includes('background')
  ) {
    return {
      answer: `**Anand's Educational Journey:**\n\n1. **Bachelor of Engineering in Computer Engineering (2025 – Present):**\n   * Sinhagad Institute of Technology, Lonavala (Savitribai Phule Pune University)\n   * Rigorous curriculum in DSA, AI, Distributed Systems, DBMS, and Web Architecture.\n\n2. **Diploma in Computer Engineering (2022 – 2025):**\n   * MSBTE Board\n   * Completed with **First Class with Distinction**, solidifying OOP (Java, C++), Networking, and Web fundamentals.\n\nThis continuous academic rigor gives Anand a rare blend of strong enterprise Java knowledge and rapid Applied AI engineering agility.`,
      suggestedAction: {
        label: 'View Experience Roadmap',
        actionType: 'scroll',
        target: '#experience',
      },
      relatedChips: ['Download ATS Resume', 'View projects', 'Contact Anand'],
    };
  }

  // Contact / Hire / Phone / Email
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('location') ||
    q.includes('reach') ||
    q.includes('connect') ||
    q.includes('interview') ||
    q.includes('message')
  ) {
    return {
      answer: `**Get in Touch with Anand:**\n\n- 📧 **Email:** [${personalInfo.email}](mailto:${personalInfo.email})\n- 📞 **Phone:** [${personalInfo.phone}](tel:${personalInfo.phone})\n- 📍 **Location:** Pune, Maharashtra, India (Available for Remote & Hybrid roles)\n- 🔗 **LinkedIn:** [linkedin.com/in/anand-wayare-8b1202385](https://www.linkedin.com/in/anand-wayare-8b1202385/)\n- 💻 **GitHub:** [github.com/aanandwayare](https://github.com/aanandwayare)\n\nHe responds quickly to interview inquiries and technical discussions!`,
      suggestedAction: {
        label: 'Go to Contact Section',
        actionType: 'scroll',
        target: '#contact',
      },
      relatedChips: ['Why should we hire Anand?', 'What is his tech stack?', 'View ATS Resume'],
    };
  }

  // Projects / Portfolio Work
  if (
    q.includes('project') ||
    q.includes('work') ||
    q.includes('built') ||
    q.includes('portfolio') ||
    q.includes('showcase')
  ) {
    return {
      answer: `**Anand's Flagship Engineering Projects:**\n\n1. **NeuroFlow AI:** Autonomous multi-agent AI orchestrator with LangChain, FastAPI, and real-time streaming graph visualizations.\n2. **DevNexus Cloud:** Real-time collaborative cloud IDE with multi-cursor sync, WebSockets, and Spring Boot backend.\n3. **VisionPulse ML:** Medical scan diagnostic suite using CNNs, PyTorch, and Grad-CAM explainability heatmaps.\n4. **Algoverse 3D:** Interactive 3D spatial visualizer for complex graph & tree algorithms in Three.js.\n5. **EchoMarket:** High-performance headless e-commerce store with Spring Boot and Stripe checkout.`,
      suggestedAction: {
        label: 'Browse All Projects',
        actionType: 'scroll',
        target: '#projects',
      },
      relatedChips: ['Tell me about NeuroFlow AI', 'What is his tech stack?', 'How to contact Anand?'],
    };
  }

  // Next.js & React specific
  if (q.includes('next.js') || q.includes('react') || q.includes('frontend')) {
    return {
      answer: `**Anand's Frontend & Next.js Specialization:**\n\n- **Next.js & React:** Deep understanding of Server Components (RSC), Client Components, Streaming SSR with Suspense, Route Handlers, and Server Actions.\n- **Performance:** Sub-second First Contentful Paint (FCP), dynamic code splitting, image optimization, and SEO structured data.\n- **Modern Styling & Animation:** Tailwind CSS, Framer Motion layout transitions, Lenis smooth scrolling, and custom glassmorphism design tokens.\n- **State & Architecture:** Modular component design, custom hooks, and strict TypeScript interfaces.`,
      suggestedAction: {
        label: 'View Frontend Projects',
        actionType: 'scroll',
        target: '#projects',
      },
      relatedChips: ['View all skills', 'Tell me about DevNexus Cloud', 'Contact Anand'],
    };
  }

  // Resume
  if (q.includes('resume') || q.includes('cv') || q.includes('pdf') || q.includes('download')) {
    return {
      answer: `**Anand's Resume:**\n\nYou can view and download his complete ATS-optimized resume directly on this site, or print a formatted copy in one click.\n\n- **Highlights:** BE Computer Engineering @ Sinhagad Institute, Diploma with Distinction, 15+ Engineered Projects, 25+ Tech Skills, 300+ DSA Problems Solved.`,
      suggestedAction: {
        label: 'Open Resume Hub',
        actionType: 'scroll',
        target: '#resume',
      },
      relatedChips: ['Why should we hire Anand?', 'What is his tech stack?', 'How do I contact him?'],
    };
  }

  // Default intelligent fallback
  return {
    answer: `Anand Chandrakant Wayare is a **Java Full Stack Developer & AI Engineer** based in Pune, India, currently pursuing his BE in Computer Engineering at Sinhagad Institute of Technology (following a Diploma with Distinction).\n\nHe specializes in **Java, Spring Boot, React, Next.js, and Applied Artificial Intelligence (OpenAI, LangChain, Python)**.\n\nFeel free to ask me anything about his technical projects, skills, education, problem solving, or how to contact him for job opportunities!`,
    suggestedAction: {
      label: 'Explore Projects & Skills',
      actionType: 'scroll',
      target: '#projects',
    },
    relatedChips: [
      'Why should we hire Anand?',
      'Tell me about his AI & ML projects',
      'What is his full tech stack?',
      'How do I contact Anand?',
    ],
  };
}

export const defaultSuggestedPrompts = promptSuggestions;

export function findAiResponse(query: string) {
  const res = queryAIAssistant(query);
  return {
    answer: res.answer,
    relatedLinks: res.suggestedAction
      ? [{ label: res.suggestedAction.label, url: res.suggestedAction.target }]
      : undefined,
  };
}
