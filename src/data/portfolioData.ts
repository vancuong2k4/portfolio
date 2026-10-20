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
    id: "smart-classroom",
    title: "Smart Classroom - Điểm Danh Lớp Học Thông Minh",
    category: "fullstack",
    subtitle: "Hệ thống điểm danh chống gian lận đa lớp: Dynamic QR, GPS Location & Wi-Fi IP",
    description: "Hệ thống điểm danh thông minh chống gian lận kết hợp 3 lớp bảo mật: Dynamic QR Code tự động thay đổi sau 10s, định vị GPS sinh viên và xác thực dải IP Wi-Fi giảng đường.",
    fullDescription: "Dự án Monorepo gồm Backend RESTful API (Node.js/Express, PostgreSQL, PostGIS, Redis), Web Dashboard cho Giảng viên & Quản trị viên (React, Vite, Tailwind CSS) và Mobile App cho Sinh viên quét mã QR (React Native). Hệ thống sử dụng PostGIS tính toán tọa độ GPS trong bán kính 50m, Redis lưu mã QR Token với TTL 10 giây và Docker Compose giúp đóng gói triển khai toàn bộ dịch vụ.",
    tags: ["React", "React Native", "Node.js", "Express", "PostgreSQL", "PostGIS", "Redis", "Docker"],
    metrics: "Bảo mật 3 lớp (QR + GPS + Wi-Fi), mã QR động 10s/lần",
    liveUrl: "https://github.com/vancuong2k4/Smart-Classroom-Management-System#readme",
    githubUrl: "https://github.com/vancuong2k4/Smart-Classroom-Management-System",
    featured: true,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    iconName: "LayoutDashboard",
    features: [
      "Dynamic QR Code thời gian thực với Redis TTL 10 giây chống chụp màn hình chia sẻ",
      "Xác thực tọa độ định vị GPS sinh viên bằng PostGIS với bán kính cho phép 50m quanh giảng đường",
      "Kiểm tra dải IP mạng Wi-Fi trường học để đảm bảo sinh viên đang có mặt tại trường",
      "Bảng điều khiển Giảng viên quản lý khóa học, danh sách điểm danh và thống kê chuyên cần"
    ],
    architecture: [
      "Monorepo: Cấu trúc backend, frontend-web, frontend-mobile tách biệt rõ ràng",
      "Backend: Node.js (Express), PostgreSQL với PostGIS extension, Redis Cache",
      "Frontend Web: React, Vite, Tailwind CSS, Lucide Icons",
      "Mobile: React Native (Expo) quét camera QR siêu tốc độ và truy vấn Geolocation",
      "DevOps: Docker Compose triển khai môi trường cơ sở dữ liệu và container"
    ]
  },
  {
    id: "tvc-shop",
    title: "TVC-Shop - Nền Tảng Thương Mại Điện Tử Minimalist",
    category: "fullstack",
    subtitle: "Hệ thống bán hàng thời trang tối giản với React & Laravel RESTful API",
    description: "Trang web thương mại điện tử chuyên bán các sản phẩm thời trang theo phong cách tối giản (Minimalist), tối ưu hóa tốc độ tải trang, giỏ hàng mượt mà và tích hợp Chatbot AI.",
    fullDescription: "TVC-Shop được xây dựng với kiến trúc hiện đại: Frontend React (Vite, TailwindCSS) và Backend Laravel 8.x cung cấp RESTful APIs an toàn, chuẩn MVC. Hệ thống hỗ trợ quản lý sản phẩm nhiều biến thể (màu sắc, kích thước), giỏ hàng, đặt hàng, mã giảm giá (coupon), yêu thích (wishlist), đánh giá sản phẩm và tích hợp Google Gemini AI Chatbot tư vấn khách hàng tự động.",
    tags: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS", "RESTful API", "Gemini AI"],
    metrics: "Tải trang < 1s, tích hợp Chatbot Gemini AI hỗ trợ khách hàng",
    liveUrl: "https://github.com/vancuong2k4/TVC-Shop#readme",
    githubUrl: "https://github.com/vancuong2k4/TVC-Shop",
    featured: true,
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    iconName: "ShoppingBag",
    features: [
      "Giao diện thiết kế phong cách Minimalist (Trắng/Đen), font chữ sang trọng, chuẩn Responsive",
      "Quản lý sản phẩm đa biến thể (màu sắc, size, tồn kho) và giỏ hàng thời gian thực",
      "Tích hợp trợ lý ảo Google Gemini AI Chatbot giải đáp thắc mắc và gợi ý sản phẩm",
      "Bảng quản trị Admin đầy đủ: quản lý danh mục, sản phẩm, đơn hàng và doanh thu"
    ],
    architecture: [
      "Frontend: React.js (Vite), Tailwind CSS, Context API quản lý state toàn cục",
      "Backend: Laravel 8.x, Eloquent ORM, MySQL Database",
      "Auth: Phân quyền Admin / Customer, hỗ trợ đăng nhập Google OAuth"
    ]
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio - Hồ Sơ Kỹ Sư Công Nghệ Trực Tuyến",
    category: "frontend",
    subtitle: "Website Portfolio cá nhân Monochrome tối giản, hiệu năng cao trên React 19",
    description: "Trang web Portfolio cá nhân hiện đại được xây dựng bằng React 19, TypeScript và Tailwind CSS v4, đạt điểm số Lighthouse tối ưu và kết nối tên miền riêng.",
    fullDescription: "Portfolio cá nhân mang đậm phong cách kỹ thuật lập trình viên với bảng màu Monochrome (Trắng - Đen tối giản). Trang web được tối ưu hóa toàn diện về khả năng hiển thị, tương tác Dark/Light mode, hiệu ứng mượt mà, cấu trúc component chặt chẽ, tối ưu SEO, hỗ trợ form liên hệ bảo mật và triển khai tự động CI/CD qua GitHub và Vercel.",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Lucide Icons", "Vercel"],
    metrics: "Google Lighthouse 99+, thời gian tải trang < 0.5s",
    liveUrl: "https://vancuong-official.id.vn",
    githubUrl: "https://github.com/vancuong2k4/portfolio",
    featured: true,
    gradient: "from-zinc-700 via-zinc-800 to-black",
    iconName: "Layers",
    features: [
      "Ngôn ngữ thiết kế Monochrome tinh tế, độ tương phản cao, chuyển đổi Dark / Light theme tức thì",
      "Đồng bộ trực tiếp mã nguồn với các dự án thực tế trên GitHub cá nhân",
      "Form liên hệ trực tiếp với cơ chế xác thực dữ liệu và chống spam",
      "Tối ưu hóa SEO, Open Graph và kết nối tên miền chính thức vancuong-official.id.vn"
    ],
    architecture: [
      "Frontend: React 19, TypeScript, Vite, Tailwind CSS v4",
      "State & Theme: React Context API lưu trạng thái Dark/Light mode trong LocalStorage",
      "Hosting: Vercel Global Edge Network với chứng chỉ bảo mật SSL tự động"
    ]
  },
  {
    id: "edurag-ai",
    title: "eduRAG - Hệ Thống Sinh Câu Hỏi Tự Động Bằng AI & RAG",
    category: "backend",
    subtitle: "Ứng dụng AI thế hệ mới (Retrieval-Augmented Generation) sinh đề thi từ học liệu điện tử",
    description: "Hệ thống ứng dụng công nghệ AI tiên tiến (RAG) để phân tích tài liệu học tập, giáo trình điện tử và tự động sinh câu hỏi kiểm tra, bài tập trắc nghiệm bám sát nội dung.",
    fullDescription: "eduRAG giải quyết bài toán tốn thời gian trong việc tạo đề thi và ôn tập bài giảng. Hệ thống xử lý các tài liệu học tập định dạng PDF, DOCX, bẻ nhỏ văn bản (chunking), tạo Vector Embeddings và kết hợp LLM để tự động sinh ngân hàng câu hỏi trắc nghiệm đa cấp độ (Nhận biết, Thông hiểu, Vận dụng) kèm đáp án giải thích chi tiết.",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "Vector DB", "LLM", "OpenAI / Gemini"],
    metrics: "Tự động hóa 100% quy trình sinh câu hỏi trắc nghiệm chuẩn xác",
    liveUrl: "https://github.com/vancuong2k4/eduRAG#readme",
    githubUrl: "https://github.com/vancuong2k4/eduRAG",
    featured: true,
    gradient: "from-purple-600 via-violet-600 to-indigo-700",
    iconName: "MessageSquare",
    features: [
      "Tiếp nhận và bóc tách nội dung từ tài liệu học liệu số (PDF, Word, Text)",
      "Chuyển hóa văn bản thành Vector Embeddings và lưu trữ trong Vector Database",
      "Tự động sinh câu hỏi trắc nghiệm 4 đáp án kèm lời giải chi tiết theo chuẩn RAG",
      "Tùy biến mức độ khó và số lượng câu hỏi theo từng chương mục"
    ],
    architecture: [
      "AI Pipeline: LangChain, ChromaDB / FAISS Vector Store, Prompt Engineering",
      "Backend API: Python FastAPI bất đồng bộ hiệu năng cao",
      "LLMs: Tích hợp OpenAI GPT-4o / Google Gemini API"
    ]
  },
  {
    id: "datan-homestay",
    title: "DatAn Homestay - Website Đặt Phòng & Dịch Vụ Du Lịch",
    category: "frontend",
    subtitle: "Website quảng bá không gian nghỉ dưỡng và đặt phòng du lịch trực tuyến",
    description: "Website quảng bá và đặt phòng cho hệ thống Homestay Đất An với giao diện thân thiện, hình ảnh sắc nét, tương thích mọi thiết bị di động.",
    fullDescription: "Dự án website dành cho du khách tìm hiểu và đặt phòng tại Đất An Homestay. Thiết kế giao diện thân thiện với hình ảnh trực quan, danh mục phòng đa dạng kèm bảng giá minh bạch, các tiện ích trải nghiệm (tiệc nướng BBQ, tour trải nghiệm sinh thái), bản đồ chỉ đường và form gửi yêu cầu đặt phòng nhanh chóng.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX", "GitHub Pages"],
    metrics: "Tương thích 100% thiết bị di động, tải trang mượt mà",
    liveUrl: "https://vancuong2k4.github.io/DatAnHomestay/",
    githubUrl: "https://github.com/vancuong2k4/DatAnHomestay",
    featured: false,
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    iconName: "Navigation",
    features: [
      "Bộ sưu tập hình ảnh không gian phòng và tiện ích nghỉ dưỡng chất lượng cao",
      "Bảng thông tin chi tiết từng loại phòng kèm biểu phí và chính sách phụ thu rõ ràng",
      "Form liên hệ đặt chỗ trực tuyến tích hợp gọi điện và nhắn tin tư vấn nhanh",
      "Bố cục Responsive tối ưu cho du khách sử dụng smartphone khi đi du lịch"
    ],
    architecture: [
      "Frontend: HTML5 Semantic, CSS3 hiện đại (Flexbox/Grid), JavaScript",
      "Hosting: GitHub Pages triển khai liên tục từ nhánh main"
    ]
  },
  {
    id: "travel-ngocdieu",
    title: "Ngọc Diệu Travel - Cổng Thông Tin & Đặt Tour Miền Tây",
    category: "frontend",
    subtitle: "Nền tảng đặt tour du lịch sinh thái, khám phá sông nước Đồng bằng Sông Cửu Long",
    description: "Website du lịch chuyên nghiệp giới thiệu các tour khám phá Miền Tây sông nước, tích hợp xem lịch trình chi tiết, ưu đãi mùa vụ và đăng ký tài khoản.",
    fullDescription: "Dự án website du lịch phục vụ du khách khám phá các tỉnh Miền Tây Nam Bộ. Hệ thống bao gồm trang chủ giới thiệu tour nổi bật, trang chi tiết lịch trình từng ngày, mục ưu đãi khuyến mãi mùa vụ, hệ thống đăng nhập/đăng ký tài khoản và form đăng ký tour du lịch sông nước.",
    tags: ["HTML5", "CSS3", "JavaScript", "Web Design", "Responsive", "GitHub Pages"],
    metrics: "Đầy đủ lịch trình tour đa điểm đến, bộ lọc chương trình ưu đãi",
    liveUrl: "https://vancuong2k4.github.io/travel-ngocdieu/",
    githubUrl: "https://github.com/vancuong2k4/travel-ngocdieu",
    featured: false,
    gradient: "from-blue-500 via-cyan-600 to-teal-500",
    iconName: "TrendingUp",
    features: [
      "Trang chi tiết lịch trình tour theo từng ngày và từng điểm tham quan đặc sắc",
      "Chuyên mục khuyến mãi cập nhật các gói tour giảm giá theo mùa",
      "Giao diện đăng ký, đăng nhập tài khoản thành viên trực quan",
      "Tích hợp bản đồ chỉ dẫn và biểu mẫu đặt tour linh hoạt"
    ],
    architecture: [
      "Frontend: HTML5, CSS3, JavaScript tương tác mượt mà",
      "Hosting: GitHub Pages với tốc độ phản hồi nhanh"
    ]
  }
]

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    period: "2023 - 2024",
    role: "Intern Full-Stack Developer",
    company: "Công ty TNHH HiAI",
    companyUrl: "https://hiai.com",
    location: "Thành phố Hồ Chí Minh (remote)",
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
    role: " Intern Full-Stack & Mobile Developer",
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
    role: "Intern Frontend Developer",
    company: "PixelCraft Studio",
    companyUrl: "https://example.com",
    location: "TP. Hồ Chí Minh",
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
    content: "Van Cuong là một kỹ sư full-stack hiếm hoi có cả tư duy kiến trúc hệ thống vững vàng lẫn sự nhạy bén về trải nghiệm người dùng. Những giải pháp cậu ấy đưa ra luôn tối ưu, sạch sẽ và giải quyết triệt để vấn đề tải của sản phẩm."
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Vanguard Digital Lab",
    avatarGradient: "from-purple-500 to-pink-600",
    content: "Làm việc cùng Van Cuong là một trải nghiệm tuyệt vời. Cậu ấy không chỉ viết code nhanh mà còn chủ động đóng góp ý kiến để hoàn thiện tính năng sản phẩm tốt hơn cả bản thiết kế ban đầu."
  },
  {
    id: "test-3",
    name: "Lê Hoàng Long",
    role: "intern Mobile Architect",
    company: "FinTech Global",
    avatarGradient: "from-emerald-500 to-teal-600",
    content: "Khả năng tối ưu hiệu năng React Native và thiết kế animations của Van Cuong thực sự đẳng cấp. Ứng dụng sau khi qua tay Van Cuong mượt mà 60 FPS trên cả những thiết bị cấu hình thấp."
  }
]
