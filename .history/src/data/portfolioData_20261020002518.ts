import type { Profile, Skill, Project, Experience, Education, Certificate, Testimonial } from '../types'

export const profileData: Profile = {
  name: "Trần Văn Cường",
  nickname: "vancuong2k4",
  role: " Full-Stack & Mobile Developer",
  titles: [
    "Full-Stack Web Architect",
    "React & React Native Specialist",
    "Node.js & Cloud Engineer",
    "Cross-Platform Mobile Creator",
    "Clean Code & UI/UX Enthusiast"
  ],
  shortBio: "Xây dựng các sản phẩm web & ứng dụng di động hiệu năng cao, trải nghiệm mượt mà từ ý tưởng đến quy mô hàng triệu người dùng.",
  aboutParagraphs: [
    "Tôi là một lập trình viên Full-Stack với hơn 1 năm kinh nghiệm thực chiến trong việc thiết kế, xây dựng và tối ưu các hệ sinh thái ứng dụng web và di động hiện đại.",
    "Thế mạnh của tôi nằm ở sự kết hợp giữa tư duy sản phẩm nhạy bén, kiến trúc backend chịu tải cao (Node.js/PostgreSQL/Docker) và kỹ năng frontend/mobile tỉ mỉ (React, Next.js, React Native, Tailwind CSS, TypeScript).",
    "Tôi luôn theo đuổi phương châm: Code sạch, kiến trúc dễ mở rộng, và tối đa hóa trải nghiệm của người dùng cuối."
  ],
  status: "Sẵn sàng đón nhận cơ hội mới (Full-time / Freelance)",
  location: "TP. Hồ Chí Minh (Hỗ trợ Remote)",
  email: "cuongtran190404@gmail.com",
  phone: "+84 326 570 425",
  github: "https://github.com/vancuong2k4",
  linkedin: "https://linkedin.com/in/tranvancuong",
  telegram: "https://t.me/vancuong",
  cvUrl: "#resume",
  stats: {
    yearsExperience: 1,
    projectsCompleted: 20,
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
  { name: "WebSockets / Socket.io", category: "backend", iconName: "Radio", level: 90, description: "Realtime Chat, Live Notification, Streaming" },

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
    id: "zenith-saas",
    title: "Zenith Cloud - Nền tảng Quản trị Doanh nghiệp AI",
    category: "fullstack",
    subtitle: "SaaS Platform với AI Analytics & Real-time Collaboration",
    description: "Hệ thống quản lý công việc và tự động hóa quy trình cho đội ngũ với trợ lý ảo AI và bảng điều khiển trực quan thời gian thực.",
    fullDescription: "Zenith Cloud là nền tảng quản trị công việc toàn diện theo kiến trúc Micro-frontend kết hợp Backend NestJS và PostgreSQL. Tích hợp AI phân tích năng suất, realtime collaborative board qua WebSocket và thanh toán Stripe đa tiền tệ.",
    tags: ["React", "Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "OpenAI API", "Docker"],
    metrics: "Tăng 45% năng suất đội ngũ, hỗ trợ 10,000+ active users",
    liveUrl: "https://example.com/demo-zenith",
    githubUrl: "https://github.com/your-username/zenith-cloud",
    featured: true,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    iconName: "LayoutDashboard",
    features: [
      "Bảng điều khiển Kanban thời gian thực với drag-and-drop mượt mà",
      "Trợ lý AI tự động tóm tắt cuộc họp và phân công nhiệm vụ",
      "Hệ thống phân quyền RBAC đa cấp độ (Admin, Manager, Member)",
      "Tích hợp cổng thanh toán Stripe và webhook tự động kích hoạt tài khoản"
    ],
    architecture: [
      "Frontend: Next.js App Router, Tailwind CSS, Zustand, Shadcn UI",
      "Backend: NestJS microservices, RabbitMQ message broker",
      "Database: PostgreSQL with Prisma ORM, Redis for caching & rate limiting",
      "DevOps: Docker containers, deployed on AWS ECS with GitHub Actions CI/CD"
    ]
  },
  {
    id: "fitpulse-mobile",
    title: "FitPulse - Ứng dụng Huấn luyện Thể thao Thông minh",
    category: "mobile",
    subtitle: "React Native & AI Computer Vision Fitness Tracker",
    description: "Ứng dụng di động theo dõi lộ trình tập luyện cá nhân hóa, nhận diện động tác tập luyện qua camera và đồng bộ Apple Health / Google Fit.",
    fullDescription: "FitPulse là ứng dụng di động đa nền tảng (iOS & Android) được xây dựng bằng React Native. Ứng dụng cung cấp bài tập cá nhân hóa dựa trên AI, theo dõi nhịp tim qua kết nối BLE (Bluetooth Low Energy) và cộng đồng giao lưu xã hội.",
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "Supabase", "HealthKit"],
    metrics: "4.8★ trên App Store với hơn 25,000+ lượt tải",
    liveUrl: "https://example.com/demo-fitpulse",
    githubUrl: "https://github.com/your-username/fitpulse-mobile",
    featured: true,
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    iconName: "Activity",
    features: [
      "Hơn 300+ bài tập hoạt họa 3D chất lượng cao với hướng dẫn chi tiết",
      "Đồng bộ hai chiều với Apple HealthKit và Google Health Connect",
      "Chế độ ngoại tuyến (Offline-first) với WatermelonDB",
      "Bảng xếp hạng bạn bè và thông báo đẩy (Push Notifications) giữ lửa tập luyện"
    ],
    architecture: [
      "Client: React Native (Expo SDK 52), Reanimated 3, Redux Toolkit",
      "Backend: Node.js serverless functions trên Supabase Edge",
      "Storage: Supabase PostgreSQL & S3 media storage",
      "Notifications: OneSignal push notification integration"
    ]
  },
  {
    id: "nova-ecommerce",
    title: "Nova Fashion - Sàn Thương mại Điện tử Đa kênh",
    category: "fullstack",
    subtitle: "Headless E-Commerce Siêu Tốc Độ & Trải nghiệm Mua sắm 3D",
    description: "Sàn thương mại điện tử thời trang với công nghệ Headless Commerce, tốc độ load dưới 0.8s, tích hợp thử đồ AR và thanh toán VNPay, MoMo.",
    fullDescription: "Giải pháp thương mại điện tử thế hệ mới giải quyết bài toán tải trang chậm của các shop online truyền thống. Điểm số Google Lighthouse đạt 99/100, hỗ trợ tìm kiếm ngữ nghĩa thông minh và giỏ hàng thời gian thực.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "VNPay / MoMo API", "Stripe"],
    metrics: "Tốc độ tải trang 0.8s, tỉ lệ chuyển đổi tăng 32%",
    liveUrl: "https://example.com/demo-nova",
    githubUrl: "https://github.com/your-username/nova-ecommerce",
    featured: true,
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    iconName: "ShoppingBag",
    features: [
      "Tối ưu Core Web Vitals tối đa, hỗ trợ Incremental Static Regeneration (ISR)",
      "Tích hợp cổng thanh toán nội địa (VNPay, MoMo) & quốc tế (Stripe, PayPal)",
      "Bộ lọc sản phẩm đa tiêu chí tức thì (Faceted search) không giật lag",
      "Hệ thống quản lý kho hàng và đồng bộ đơn hàng tự động"
    ],
    architecture: [
      "Frontend: Next.js 14, Tailwind CSS, Framer Motion",
      "Backend: Node.js / Express micro-api, Redis Cache",
      "Database: MongoDB with Mongoose, MeiliSearch for lightning search"
    ]
  },
  {
    id: "omnichat-realtime",
    title: "OmniChat - Hệ thống Hội thoại Doanh nghiệp Realtime",
    category: "backend",
    subtitle: "High-concurrency Real-time Chat Engine",
    description: "Nền tảng chat và hỗ trợ khách hàng đa kênh với kiến trúc chịu tải hàng chục nghìn kết nối đồng thời qua WebSockets và Redis Cluster.",
    fullDescription: "OmniChat cung cấp giải pháp liên lạc nội bộ và CSKH cho các tổ chức. Hệ thống mã hóa đầu cuối (E2EE), chia sẻ tập tin tức thì, cuộc gọi thoại WebRTC và bot tự động phản hồi 24/7.",
    tags: ["Node.js", "Socket.io", "Redis", "WebRTC", "PostgreSQL", "Docker"],
    metrics: "Xử lý 50,000+ tin nhắn/giây với độ trễ < 30ms",
    liveUrl: "https://example.com/demo-omnichat",
    githubUrl: "https://github.com/your-username/omnichat-engine",
    featured: false,
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    iconName: "MessageSquare",
    features: [
      "Kết nối liên tục hai chiều với cơ chế tự phục hồi kết nối (Auto reconnect)",
      "Hỗ trợ cuộc gọi video / audio chất lượng cao qua WebRTC P2P",
      "Mã hóa tin nhắn End-to-End Encryption (E2EE)",
      "Lưu trữ lịch sử chat phân trang vô tận (Infinite scrolling)"
    ],
    architecture: [
      "Socket Server: Node.js Cluster with Socket.io Redis Adapter",
      "Database: ScyllaDB / PostgreSQL for message persistence",
      "Media: AWS S3 + CloudFront CDN for encrypted attachments"
    ]
  },
  {
    id: "crypto-lens",
    title: "CryptoLens - Bảng điều khiển Tài chính Web3 & DEX",
    category: "frontend",
    subtitle: "Interactive Crypto Analytics & Portfolio Dashboard",
    description: "Bảng theo dõi biến động thị trường tiền mã hóa thời gian thực, biểu đồ kỹ thuật TradingView và quản lý danh mục đầu tư thông minh.",
    fullDescription: "Ứng dụng web hiển thị dữ liệu tài chính trực quan với đồ thị tương tác cao. Kết nối ví Web3 (Metamask, Phantom) để theo dõi số dư ví on-chain và cảnh báo biến động giá qua Telegram bot.",
    tags: ["React", "TypeScript", "Ethers.js", "Chart.js", "Tailwind CSS"],
    metrics: "Cập nhật dữ liệu giá thời gian thực với hơn 15 sàn giao dịch",
    liveUrl: "https://example.com/demo-cryptolens",
    githubUrl: "https://github.com/your-username/crypto-lens",
    featured: false,
    gradient: "from-purple-600 via-pink-600 to-red-500",
    iconName: "TrendingUp",
    features: [
      "Biểu đồ hình nến tương tác đầy đủ chỉ báo (RSI, MACD, MA)",
      "Kết nối ví Web3 đa chuỗi (Ethereum, BSC, Solana, Polygon)",
      "Tính toán lãi/lỗ (P&L) tự động theo thời gian thực",
      "Giao diện Dark Mode chuẩn tài chính hiện đại"
    ],
    architecture: [
      "Frontend: React with Vite, Tailwind CSS, Lucide Icons",
      "Data Feed: Binance WebSocket Streams & CoinGecko API"
    ]
  },
  {
    id: "foodie-delivery",
    title: "Foodie Express - Ứng dụng Giao đồ ăn & Định vị Trực tiếp",
    category: "mobile",
    subtitle: "React Native Food Delivery App with Live Driver GPS",
    description: "Ứng dụng đặt món ăn với bản đồ tracking tài xế trực tiếp theo thời gian thực, tích hợp tìm kiếm thông minh và thanh toán không tiền mặt.",
    fullDescription: "Hệ thống bao gồm ứng dụng cho khách hàng và ứng dụng cho tài xế. Tối ưu hóa thuật toán định vị GPS để tiết kiệm pin tối đa, cập nhật lộ trình di chuyển mượt mà trên bản đồ Google Maps.",
    tags: ["React Native", "Google Maps API", "Node.js", "Firebase", "Redux"],
    metrics: "Định vị mượt mà 60 FPS, độ chính xác GPS sai số < 5m",
    liveUrl: "https://example.com/demo-foodie",
    githubUrl: "https://github.com/your-username/foodie-express",
    featured: false,
    gradient: "from-yellow-500 via-amber-600 to-red-600",
    iconName: "Navigation",
    features: [
      "Bản đồ tương tác với icon tài xế di chuyển mượt mà theo góc xoay",
      "Hệ thống gợi ý món ăn theo vị trí và thói quen sở thích",
      "Thông báo trạng thái đơn hàng: Đang chuẩn bị -> Đang giao -> Đã tới nơi",
      "Đánh giá và tip tài xế tiện lợi"
    ],
    architecture: [
      "Mobile: React Native, React Native Maps, Reanimated",
      "Backend: Firebase Cloud Functions & Firestore Realtime DB"
    ]
  }
]

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    period: "2023 - Hiện tại",
    role: "Senior Full-Stack Developer",
    company: "TechNova Solutions",
    companyUrl: "https://example.com",
    location: "Hà Nội (Hybrid)",
    type: "Toàn thời gian",
    description: "Chịu trách nhiệm kiến trúc phần mềm và dẫn dắt đội ngũ kỹ sư 8 thành viên phát triển hệ sinh thái SaaS quy mô lớn.",
    achievements: [
      "Tái cấu trúc hệ thống monolithic sang microservices giúp giảm 65% thời gian downtime và tăng khả năng chịu tải lên gấp 4 lần.",
      "Thiết kế Design System nội bộ bằng Tailwind CSS & React, đẩy nhanh tốc độ release tính năng mới thêm 30%.",
      "Thiết lập văn hóa code review, CI/CD tự động và quy chuẩn viết Unit/Integration Tests đạt độ phủ 85%."
    ],
    technologies: ["React", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS"]
  },
  {
    id: "exp-2",
    period: "2021 - 2023",
    role: "Full-Stack & Mobile Developer",
    company: "Vanguard Digital Lab",
    companyUrl: "https://example.com",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    description: "Phát triển các ứng dụng di động React Native và hệ thống API Backend cho các đối tác tài chính & bán lẻ.",
    achievements: [
      "Phát hành 3 ứng dụng di động lên cả 2 chợ App Store & Google Play với hơn 100,000+ lượt tải.",
      "Tối ưu hóa bundle size của ứng dụng React Native giảm từ 48MB xuống còn 18MB, cải thiện thời gian khởi động app thêm 50%.",
      "Tích hợp các cổng thanh toán điện tử (VNPay, MoMo, ZaloPay, Stripe) xử lý an toàn hàng nghìn giao dịch mỗi ngày."
    ],
    technologies: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "Redis", "Firebase"]
  },
  {
    id: "exp-3",
    period: "2019 - 2021",
    role: "Junior Frontend Developer",
    company: "PixelCraft Studio",
    companyUrl: "https://example.com",
    location: "Hà Nội",
    type: "Toàn thời gian",
    description: "Tham gia xây dựng giao diện người dùng, landing pages và dashboard quản trị web tương tác cao.",
    achievements: [
      "Chuyển đổi các bản thiết kế Figma phức tạp thành giao diện pixel-perfect, responsive trên mọi kích thước màn hình.",
      "Cải thiện điểm số SEO và Performance cho 15+ website của khách hàng từ mức trung bình lên 90+ trên Google Lighthouse."
    ],
    technologies: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "SASS", "RESTful API", "Git"]
  }
]

export const educationData: Education[] = [
  {
    id: "edu-1",
    period: "2022 - 2026",
    degree: " Công nghệ Thông tin (Khoa học Máy tính)",
    institution: "Đại học Văn Hiến",
    location: "Tp.HCM, Việt Nam",
    description: "Tốt nghiệp loại Khá. Chuyên sâu về Cấu trúc dữ liệu & Giải thuật, Kiến trúc phần mềm và Hệ quản trị cơ sở dữ liệu.",
    achievements: [
      "GPA: 3.1 / 4.0",
      "Học bổng sinh viên ưu tú 2022-2023",
      "Đề tài tốt nghiệp: Xây dựng hệ thống phân tích dữ liệu lớn thời gian thực"
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
    content: "An là một kỹ sư full-stack hiếm hoi có cả tư duy kiến trúc hệ thống vững vàng lẫn sự nhạy bén về trải nghiệm người dùng. Những giải pháp cậu ấy đưa ra luôn tối ưu, sạch sẽ và giải quyết triệt để vấn đề tải của sản phẩm."
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Vanguard Digital Lab",
    avatarGradient: "from-purple-500 to-pink-600",
    content: "Làm việc cùng An là một trải nghiệm tuyệt vời. Cậu ấy không chỉ viết code nhanh mà còn chủ động đóng góp ý kiến để hoàn thiện tính năng sản phẩm tốt hơn cả bản thiết kế ban đầu."
  },
  {
    id: "test-3",
    name: "Lê Hoàng Long",
    role: "Senior Mobile Architect",
    company: "FinTech Global",
    avatarGradient: "from-emerald-500 to-teal-600",
    content: "Khả năng tối ưu hiệu năng React Native và thiết kế animations của An thực sự đẳng cấp. Ứng dụng sau khi qua tay An mượt mà 60 FPS trên cả những thiết bị cấu hình thấp."
  }
]
