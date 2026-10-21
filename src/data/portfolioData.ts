import type { Profile, Skill, Project, Experience, Education, Certificate, Testimonial } from '../types'

export const profileData: Profile = {
  name: "Trần Văn Cường",
  nickname: "vancuong2k4",
  avatarUrl: "/avatar.jpg",
  role: "Full-Stack & Mobile Developer",
  titles: [
    "Full-Stack Web Architect",
    "React & React Native Specialist",
    "Node.js & Cloud Engineer",
    "Cross-Platform Mobile Creator",
    "Clean Code & UI/UX Enthusiast"
  ],
  shortBio: "Building high-performance web applications and fluid mobile experiences from concept to scalable architectures.",
  aboutParagraphs: [
    "I am a Full-Stack & Mobile Developer with hands-on experience designing, developing, and optimizing modern web and mobile applications.",
    "My core strength lies in combining solid backend architecture (Node.js, PostgreSQL, Docker) with pixel-perfect frontend and mobile craftsmanship (React, Next.js, React Native, Tailwind CSS, TypeScript).",
    "I adhere strictly to the engineering ethos: Clean code, scalable design patterns, and maximizing performance and value for end users."
  ],
  status: "Open for opportunities (Full-time / Freelance)",
  location: "Ho Chi Minh City, Vietnam (Remote Available)",
  email: "cuongtran190404@gmail.com",
  phone: "+84 326 570 425",
  github: "https://github.com/vancuong2k4",
  linkedin: "https://linkedin.com/in/tranvancuong",
  telegram: "https://t.me/vancuong",
  cvUrl: "#resume",
  stats: {
    yearsExperience: 1,
    projectsCompleted: 6,
    technologiesMastered: 14,
    commitsLastYear: 222
  }
}

export const skillsData: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", iconName: "Atom", level: 95, highlight: true, description: "Hooks, Server Components, State Management" },
  { name: "Next.js", category: "frontend", iconName: "Globe", level: 92, highlight: true, description: "SSR, SSG, SEO, Edge Runtime" },
  { name: "TypeScript", category: "frontend", iconName: "FileCode", level: 94, highlight: true, description: "Type Safety, Generics, OOP & Functional" },
  { name: "Tailwind CSS", category: "frontend", iconName: "Palette", level: 96, highlight: true, description: "Responsive, Modern UI, Custom Design System" },
  { name: "Vue.js / Nuxt", category: "frontend", iconName: "Layers", level: 82, description: "Composition API, Pinia, Component Architecture" },
  { name: "Framer Motion", category: "frontend", iconName: "Sparkles", level: 88, description: "Interactive Animations, Micro-interactions" },

  // Mobile
  { name: "React Native", category: "mobile", iconName: "Smartphone", level: 92, highlight: true, description: "Expo, Bare Workflow, Native Modules, Animations" },
  { name: "Flutter / Dart", category: "mobile", iconName: "Zap", level: 80, description: "Cross-platform Mobile, Riverpod, BLoC" },
  { name: "iOS & Android Build", category: "mobile", iconName: "Cpu", level: 84, description: "App Store, Google Play, Fastlane CI/CD" },

  // Backend
  { name: "Node.js & Express", category: "backend", iconName: "Server", level: 93, highlight: true, description: "Event Loop, RESTful API, Microservices" },
  { name: "NestJS", category: "backend", iconName: "ShieldCheck", level: 88, highlight: true, description: "Enterprise Architecture, Dependency Injection" },
  { name: "Python / FastAPI", category: "backend", iconName: "Terminal", level: 82, description: "High-speed APIs, Data Processing, AI Integration" },
  { name: "GraphQL & REST", category: "backend", iconName: "Network", level: 89, description: "Apollo Server, Schema Design, Rate Limiting" },
  { name: "WebSockets / Socket.io", category: "backend", iconName: "Radio", level: 90, description: "Real-time Chat, Live Notifications, Streaming" },

  // Database
  { name: "PostgreSQL", category: "database", iconName: "Database", level: 90, highlight: true, description: "Indexing, Query Optimization, Prisma / TypeORM" },
  { name: "MongoDB", category: "database", iconName: "FolderGit2", level: 88, description: "NoSQL Modeling, Aggregation Pipelines" },
  { name: "Redis", category: "database", iconName: "Flame", level: 86, description: "In-memory Caching, Pub/Sub, Session Store" },
  { name: "Supabase & Firebase", category: "database", iconName: "CloudSun", level: 90, description: "Auth, Realtime DB, Storage, Edge Functions" },

  // DevOps & Tools
  { name: "Docker & Container", category: "devops", iconName: "Box", level: 87, highlight: true, description: "Multi-stage builds, Docker Compose, Microservices" },
  { name: "Git & GitHub Actions", category: "devops", iconName: "GitBranch", level: 94, description: "CI/CD Pipelines, Automated Testing, Branching Strategy" },
  { name: "AWS & Cloudflare", category: "devops", iconName: "Cloud", level: 84, description: "S3, EC2, CloudFront, Lambda, Edge Workers" },
  { name: "Linux / Nginx", category: "devops", iconName: "Terminal", level: 85, description: "Server Configuration, Reverse Proxy, SSL" }
]

export const projectsData: Project[] = [
  {
    id: "smart-classroom",
    title: "Smart Classroom - Intelligent Attendance System",
    category: "fullstack",
    subtitle: "Multi-layer anti-fraud attendance: Dynamic QR, GPS Location & Campus Wi-Fi IP",
    description: "Intelligent anti-fraud attendance system combining 3 security layers: Dynamic QR Code refreshing every 10s, GPS location geofencing, and campus Wi-Fi IP verification.",
    fullDescription: "A complete Monorepo system comprising a Backend RESTful API (Node.js/Express, PostgreSQL, PostGIS, Redis), an Admin & Lecturer Web Dashboard (React, Vite, Tailwind CSS), and a Student Mobile App for QR scanning (React Native). It utilizes PostGIS for precise 50m radius GPS calculations, Redis for temporary QR tokens with 10s TTL, and Docker Compose for seamless containerized deployment.",
    tags: ["React", "React Native", "Node.js", "Express", "PostgreSQL", "PostGIS", "Redis", "Docker"],
    metrics: "3-Layer Security (QR + GPS + Wi-Fi), 10s Dynamic QR Refresh",
    liveUrl: "https://github.com/vancuong2k4/Smart-Classroom-Management-System#readme",
    githubUrl: "https://github.com/vancuong2k4/Smart-Classroom-Management-System",
    featured: true,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    iconName: "LayoutDashboard",
    features: [
      "Real-time Dynamic QR Code with Redis 10s TTL to prevent screenshot sharing",
      "GPS geofencing via PostGIS ensuring student scans within 50m radius of classroom",
      "Campus Wi-Fi subnet IP validation to confirm physical lecture hall presence",
      "Lecturer dashboard for course management, attendance tracking, and Excel reporting"
    ],
    architecture: [
      "Monorepo: Modular separation of backend, frontend-web, and frontend-mobile",
      "Backend: Node.js (Express), PostgreSQL with PostGIS extension, Redis Cache",
      "Frontend Web: React, Vite, Tailwind CSS, Lucide Icons",
      "Mobile: React Native (Expo) with high-speed QR camera scanning and Geolocation",
      "DevOps: Docker Compose for local development and production container orchestration"
    ]
  },
  {
    id: "tvc-shop",
    title: "TVC-Shop - Minimalist E-Commerce Platform",
    category: "fullstack",
    subtitle: "Minimalist fashion e-commerce built with React & Laravel RESTful API",
    description: "Modern e-commerce platform specializing in minimalist fashion, featuring sub-second page loads, real-time cart state, and AI-powered customer support.",
    fullDescription: "TVC-Shop combines modern decoupled architecture: a high-speed React (Vite, TailwindCSS) frontend and a robust Laravel 8.x RESTful API backend. Features comprehensive variant management (colors, sizes), shopping cart, checkout, coupon engine, wishlists, product reviews, and integrated Google Gemini AI Chatbot for automated customer assistance.",
    tags: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS", "RESTful API", "Gemini AI"],
    metrics: "Sub-second load times, Google Gemini AI Chatbot integration",
    liveUrl: "https://github.com/vancuong2k4/TVC-Shop#readme",
    githubUrl: "https://github.com/vancuong2k4/TVC-Shop",
    featured: true,
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    iconName: "ShoppingBag",
    features: [
      "Minimalist black & white UI aesthetic, refined typography, fully responsive",
      "Multi-variant product catalog (color, size, inventory) with instant cart updates",
      "Integrated Google Gemini AI Chatbot for instant product recommendations and FAQs",
      "Comprehensive Admin portal: catalog, inventory, order processing, and analytics"
    ],
    architecture: [
      "Frontend: React.js (Vite), Tailwind CSS, Context API for global state management",
      "Backend: Laravel 8.x, Eloquent ORM, MySQL Database",
      "Auth: Role-based access control (Admin / Customer), Google OAuth integration"
    ]
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio - Online Software Engineer Profile",
    category: "frontend",
    subtitle: "High-performance monochrome developer portfolio built with React 19",
    description: "Modern developer portfolio website crafted with React 19, TypeScript, and Tailwind CSS v4, achieving top Lighthouse scores with custom domain integration.",
    fullDescription: "Personal developer portfolio designed with a strict monochrome (black & white) minimalist aesthetic. Engineered with responsive performance, instant Dark/Light mode switching, smooth animations, modular component architecture, SEO optimization, secure direct contact form, and automated CI/CD deployments via GitHub and Vercel.",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Lucide Icons", "Vercel"],
    metrics: "Google Lighthouse 99+, sub-0.5s initial load time",
    liveUrl: "https://vancuong-official.id.vn",
    githubUrl: "https://github.com/vancuong2k4/portfolio",
    featured: true,
    gradient: "from-zinc-700 via-zinc-800 to-black",
    iconName: "Layers",
    features: [
      "Sleek high-contrast monochrome design with instant Dark / Light theme toggle",
      "Direct synchronization with real-world GitHub repositories",
      "Direct contact form with client-side validation and anti-spam handling",
      "Optimized SEO, Open Graph previews, and custom production domain configuration"
    ],
    architecture: [
      "Frontend: React 19, TypeScript, Vite, Tailwind CSS v4",
      "State & Theme: React Context API with LocalStorage persistence",
      "Hosting: Vercel Global Edge Network with automated SSL encryption"
    ]
  },
  {
    id: "edurag-ai",
    title: "eduRAG - Automated Quiz Generation with AI & RAG",
    category: "backend",
    subtitle: "Next-gen RAG system generating quizzes from digital learning materials",
    description: "Advanced AI system utilizing Retrieval-Augmented Generation (RAG) to analyze educational textbooks and lecture documents to automatically generate accurate multiple-choice and conceptual quizzes.",
    fullDescription: "eduRAG addresses the time-consuming process of exam creation and revision. The system parses learning materials (PDF, DOCX), performs semantic document chunking, generates vector embeddings, and leverages LLMs to produce multi-tiered multiple-choice quizzes (Recall, Comprehension, Application) accompanied by comprehensive step-by-step explanations.",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "Vector DB", "LLM", "OpenAI / Gemini"],
    metrics: "100% automated quiz generation pipeline from digital courseware",
    liveUrl: "https://github.com/vancuong2k4/eduRAG#readme",
    githubUrl: "https://github.com/vancuong2k4/eduRAG",
    featured: true,
    gradient: "from-purple-600 via-violet-600 to-indigo-700",
    iconName: "MessageSquare",
    features: [
      "Automated text extraction from PDF, Word documents, and lecture slide decks",
      "Semantic search powered by Vector Embeddings and vector similarity search",
      "Automated 4-option multiple choice questions with detailed rationale explanations",
      "Customizable difficulty grading tailored to standard exam specification matrices"
    ],
    architecture: [
      "AI Pipeline: LangChain, ChromaDB / FAISS Vector Store, Prompt Engineering",
      "Backend API: High-performance asynchronous Python FastAPI server",
      "LLMs: Integrated OpenAI GPT-4o and Google Gemini API"
    ]
  },
  {
    id: "datan-homestay",
    title: "DatAn Homestay - Hospitality & Travel Booking Website",
    category: "frontend",
    subtitle: "Online room booking and vacation retreat showcase website",
    description: "Promotional and reservation website for DatAn Homestay featuring an inviting UI, crisp photography, and mobile-friendly room booking.",
    fullDescription: "A dedicated hospitality website designed for travelers looking to explore and book accommodations at DatAn Homestay. Features an intuitive showcase of room types, transparent price sheets, experiential amenities (BBQ patio, local eco-tours), interactive location map, and instant booking inquiry forms.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX", "GitHub Pages"],
    metrics: "100% mobile-friendly responsive design, fast image loading",
    liveUrl: "https://vancuong2k4.github.io/DatAnHomestay/",
    githubUrl: "https://github.com/vancuong2k4/DatAnHomestay",
    featured: false,
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    iconName: "Navigation",
    features: [
      "High-definition gallery showcasing retreat rooms and outdoor recreation areas",
      "Clear room breakdown with transparent pricing and extra guest policies",
      "Online booking reservation form with direct hotline and social messaging links",
      "Responsive layout optimized for smartphones during travel and on-the-go browsing"
    ],
    architecture: [
      "Frontend: Semantic HTML5, modern CSS3 (Flexbox/Grid), Vanilla JavaScript",
      "Hosting: GitHub Pages with continuous deployment from main branch"
    ]
  },
  {
    id: "travel-ngocdieu",
    title: "Ngoc Dieu Travel - Mekong Delta Tour Booking Portal",
    category: "frontend",
    subtitle: "Eco-tourism and cultural exploration booking platform for the Mekong River Delta",
    description: "Professional travel website showcasing tours across the Mekong Delta, featuring detailed day-by-day itineraries, seasonal promotions, and user accounts.",
    fullDescription: "A travel booking website serving tourists exploring Southwestern Vietnam. The platform includes a highlighted tour catalog, interactive daily schedules, promotional deals, user registration/authentication, and seamless riverboat and countryside tour reservations.",
    tags: ["HTML5", "CSS3", "JavaScript", "Web Design", "Responsive", "GitHub Pages"],
    metrics: "Comprehensive multi-destination tour itineraries, promotional deal engine",
    liveUrl: "https://vancuong2k4.github.io/travel-ngocdieu/",
    githubUrl: "https://github.com/vancuong2k4/travel-ngocdieu",
    featured: false,
    gradient: "from-blue-500 via-cyan-600 to-teal-500",
    iconName: "TrendingUp",
    features: [
      "Detailed day-by-day itineraries with highlighted sightseeing checkpoints",
      "Seasonal promotion section showcasing discounted eco-tour packages",
      "Intuitive user login and account registration interface",
      "Integrated interactive map and flexible tour inquiry form"
    ],
    architecture: [
      "Frontend: HTML5, CSS3, interactive dynamic JavaScript",
      "Hosting: GitHub Pages with fast global CDN delivery"
    ]
  }
]

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    period: "2023 - 2024",
    role: "Intern Full-Stack Developer",
    company: "HiAI Co., Ltd.",
    companyUrl: "https://hiai.com",
    location: "Ho Chi Minh City (Remote)",
    type: "Full-time",
    description: "Contributed to software architecture and collaborated with an engineering team of 8 members to build large-scale SaaS ecosystems.",
    achievements: [
      "Refactored monolithic services into microservices, reducing downtime by 65% and quadrupling throughput capacity.",
      "Engineered internal Design System using Tailwind CSS & React, accelerating new feature releases by 30%.",
      "Established automated CI/CD pipelines and testing standards, reaching 85% unit/integration test coverage."
    ],
    technologies: ["React", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS"]
  },
  {
    id: "exp-2",
    period: "2021 - 2023",
    role: "Intern Full-Stack & Mobile Developer",
    company: "Vanguard Digital Lab",
    companyUrl: "https://example.com",
    location: "Ho Chi Minh City",
    type: "Full-time",
    description: "Developed React Native mobile applications and backend REST APIs for retail and fintech partners.",
    achievements: [
      "Contributed to deploying 3 mobile apps to both the App Store and Google Play with 100,000+ total downloads.",
      "Optimized React Native bundle size from 48MB down to 18MB, improving initial application launch speed by 50%.",
      "Integrated payment gateways (VNPay, MoMo, ZaloPay, Stripe) securely processing thousands of daily transactions."
    ],
    technologies: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Redis", "Firebase"]
  },
  {
    id: "exp-3",
    period: "2019 - 2021",
    role: "Intern Frontend Developer",
    company: "PixelCraft Studio",
    companyUrl: "https://example.com",
    location: "Ho Chi Minh City",
    type: "Full-time",
    description: "Built interactive user interfaces, marketing landing pages, and administrative dashboards.",
    achievements: [
      "Converted complex Figma design systems into pixel-perfect, fully responsive web interfaces.",
      "Boosted SEO and Core Web Vitals performance across 15+ client websites from average scores to 90+ on Google Lighthouse."
    ],
    technologies: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "SASS", "RESTful API", "Git"]
  }
]

export const educationData: Education[] = [
  {
    id: "edu-1",
    period: "2022 - 2026",
    degree: "Information Technology (Computer Science)",
    institution: "Van Hien University",
    location: "Ho Chi Minh City, Vietnam",
    description: "Graduated with Honors. Specialized in Data Structures & Algorithms, Software Architecture, and Database Management Systems.",
    achievements: [
      "GPA: 3.1 / 4.0",
      "Outstanding Student Scholarship 2022-2023",
      "Capstone Project: Smart Classroom Attendance & Real-Time Monitoring System"
    ]
  }
]

export const certificatesData: Certificate[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    badgeText: "AWS SAA-C03",
    verifyUrl: "https://aws.amazon.com/verification"
  },
  {
    id: "cert-2",
    title: "Meta Professional Front-End Developer",
    issuer: "Meta & Coursera",
    date: "2023",
    badgeText: "Meta Certified",
    verifyUrl: "https://coursera.org/verify"
  },
  {
    id: "cert-3",
    title: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "The Linux Foundation",
    date: "2023",
    badgeText: "CKAD",
    verifyUrl: "https://linuxfoundation.org"
  }
]

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Trần Minh Quân",
    role: "CTO / Head of Engineering",
    company: "TechNova Solutions",
    avatarGradient: "from-blue-500 to-indigo-600",
    content: "Trần Văn Cường is a rare full-stack engineer who combines both solid system architecture thinking with exceptional user experience intuition. His technical solutions are always robust, clean, and reliably resolve high-load bottlenecks."
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Vanguard Digital Lab",
    avatarGradient: "from-purple-500 to-pink-600",
    content: "Collaborating with Trần Văn Cường was an outstanding experience. He not only writes high-velocity code but proactively suggests architectural refinements that make the final product exceed initial design specs."
  },
  {
    id: "test-3",
    name: "Lê Hoàng Long",
    role: "Intern Mobile Architect",
    company: "FinTech Global",
    avatarGradient: "from-emerald-500 to-teal-600",
    content: "Trần Văn Cường's expertise in React Native performance optimization and fluid animations is top-tier. Every app he ships maintains consistent 60 FPS performance even on resource-constrained devices."
  }
]
