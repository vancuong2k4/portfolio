import React from 'react'

export interface TechMeta {
  Icon: React.FC<{ className?: string }>
  badgeBg: string
  barGradient: string
  glowClass: string
  hoverBorder: string
  accentColor: string
}

// 1. React
export const ReactIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
)

// 2. Next.js
export const NextjsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="#000000" stroke="#404040" strokeWidth="4"/>
    <path d="M149.5 157.5L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.2 149.5 157.5Z" fill="url(#next-g1)"/>
    <rect x="115" y="54" width="12" height="72" fill="url(#next-g2)"/>
    <defs>
      <linearGradient id="next-g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="next-g2" x1="121" y1="54" x2="120.8" y2="106.9" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
)

// 3. TypeScript
export const TypeScriptIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#3178C6"/>
    <path fill="#FFFFFF" d="M72.7 75.8v-7.1c3.1 1.6 6.3 2.5 9.8 2.5 4.3 0 6.6-1.6 6.6-4.2 0-2.3-1.4-3.5-5.3-5.1l-4.5-1.9c-6.8-2.8-10.3-6.6-10.3-13.1 0-8.2 6.5-13.5 17.5-13.5 4.4 0 8.7.9 12.3 2.6v7.3c-3.1-1.6-6.4-2.5-9.8-2.5-4.4 0-6.7 1.7-6.7 4.1 0 2.2 1.4 3.4 5.3 5l4.5 1.9c7.2 3 10.5 7 10.5 13.5 0 8.6-6.6 13.9-18.4 13.9-4.3 0-8.3-.7-11.5-1.4zM26.2 41h36.4v8.1H48.4v42.2h-8V49.1H26.2V41z"/>
  </svg>
)

// 4. Tailwind CSS
export const TailwindIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2 3.60019 8.4 3.00019 6.6 4.20019C4.8 5.40019 4.2 7.20019 4.8 9.60019C5.1 10.8002 5.85 11.7002 7.05 12.3002C8.85 13.2002 10.65 12.9002 12.45 11.4002C14.25 9.90019 14.85 8.10019 14.25 6.00019C13.95 4.80019 13.2 3.90019 12 6.00019ZM19.2 11.4002C17.4 9.00019 15.6 8.40019 13.8 9.60019C12 10.8002 11.4 12.6002 12 15.0002C12.3 16.2002 13.05 17.1002 14.25 17.7002C16.05 18.6002 17.85 18.3002 19.65 16.8002C21.45 15.3002 22.05 13.5002 21.45 11.4002C21.15 10.2002 20.4 9.30019 19.2 11.4002Z" fill="#06B6D4"/>
  </svg>
)

// 5. Vue.js / Nuxt
export const VueIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 256 221">
    <path fill="#42B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"/>
    <path fill="#35495E" d="M0 0l128 220.8L256 0h-51.2L128 132.48 49.92 0H0z"/>
    <path fill="#42B883" d="M50 0l78 132.5L204.8 0h-47.4L128 51.2 97.9 0H50z"/>
  </svg>
)

// 6. Framer Motion
export const FramerMotionIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M4 0h16v8h-8z" fill="#FF0055"/>
    <path d="M4 8h8l8 8H4z" fill="#0055FF"/>
    <path d="M4 16h8v8z" fill="#FF0055"/>
  </svg>
)

// 7. React Native
export const ReactNativeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.8" />
    <circle cx="12" cy="18" r="1" fill="#61DAFB" />
    <circle cx="12" cy="10" r="1.3" fill="#61DAFB" />
    <ellipse cx="12" cy="10" rx="4.2" ry="1.7" stroke="#61DAFB" strokeWidth="1" transform="rotate(30 12 10)" />
    <ellipse cx="12" cy="10" rx="4.2" ry="1.7" stroke="#61DAFB" strokeWidth="1" transform="rotate(-30 12 10)" />
  </svg>
)

// 8. Flutter / Dart
export const FlutterIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 166 202">
    <path fill="#40D0FD" d="M100.7 0L0 100.7l30.9 30.9L162.5 0h-61.8z"/>
    <path fill="#02569B" d="M100.7 122.9l-30.8 30.9 30.8 30.9H163l-46.7-46.9 46.7-46.8h-62.3z"/>
    <path fill="#0175C2" d="M69.9 153.8l30.8 30.9 30.9-30.9-30.9-30.9-30.8 30.9z"/>
  </svg>
)

// 9. iOS & Android Build
export const MobileBuildIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    {/* Android robot half */}
    <path d="M4 14C4 10.7 6.7 8 10 8V20C6.7 20 4 17.3 4 14Z" fill="#3DDC84"/>
    <circle cx="7.5" cy="12" r="0.9" fill="#FFFFFF"/>
    <line x1="6.5" y1="5.5" x2="8" y2="8" stroke="#3DDC84" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Apple silhouette half */}
    <path d="M14 6C15 4.5 16.5 4 16.5 4C16.5 4 16.2 5.5 15.2 6.5C14.2 7.5 13 7.8 13 7.8C13 7.8 13.2 6.8 14 6Z" fill="#A2AAAD"/>
    <path d="M13 8.5C14 8.5 15.2 9.2 16 9.2C17 9.2 18.2 8.5 19.5 8.5C21 8.5 22.3 9.3 23 10.5C20.5 12 21 15.2 23 16C22.3 17.8 21.3 19.8 19.8 19.8C18.8 19.8 18 19 16.8 19C15.5 19 14.5 19.8 13.8 19.8C13.2 19.8 13 19.5 13 19.5V8.5Z" fill="#CBD5E1"/>
  </svg>
)

// 10. Node.js & Express
export const NodejsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32">
    <path fill="#5FA04E" d="M16 2.5l12 6.9v13.8L16 30 4 23.2V9.4L16 2.5z"/>
    <path fill="#FFFFFF" d="M16 8.5c-4.1 0-7.5 2.5-7.5 5.5 0 2 1.5 3.8 3.8 4.7l2.2.8c1.5.5 2.2 1 2.2 1.8 0 1-1.2 1.7-2.8 1.7-1.5 0-3-.5-4.2-1.5l-1.5 2c1.6 1.3 3.7 2 5.7 2 4.4 0 7.8-2.5 7.8-5.7 0-2.2-1.5-3.8-4-4.8l-2.2-.8c-1.3-.5-1.9-1-1.9-1.7 0-.9 1-1.5 2.4-1.5 1.3 0 2.7.4 3.7 1.2l1.4-2.1c-1.4-1-3.2-1.6-5.4-1.6z"/>
  </svg>
)

// 11. NestJS
export const NestjsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 256 256">
    <path fill="#E0234E" d="M217.2 41.5c-15.6-14-38.3-19.6-61.9-15.2-14.7 2.8-28.7 9.8-40.4 20.3L97.5 61.9c-2.3 2.1-4.2 4.6-5.5 7.4-1.3 2.8-1.9 5.8-1.7 8.9.4 6.2 3.8 11.7 9.2 14.8l65.8 38c6.1 3.5 13.8 2.3 18.5-3l12.4-13.9c3.3-3.7 7.7-6.2 12.6-7.1 4.9-.9 9.9-.1 14.3 2.3 8.7 4.8 12.8 14.9 9.8 24.5l-12.8 41.1c-1.6 5.1-4.7 9.5-8.9 12.6s-9.3 4.6-14.5 4.3l-55.6-3.2c-7.2-.4-14.2 2.7-18.7 8.3L77 220.2c-5.2 6.5-13.6 9.8-21.9 8.6-8.3-1.2-15.2-6.8-17.9-14.7L18.4 159c-7.6-22.3-2.5-47 13.3-64.4l43.8-48.4C89.3 31.6 106.6 22 125 18.6c28.2-5.3 55.4 1.4 74.2 18.1 4.6 4.1 6.3 10.5 4.3 16.3-2 5.8-7.3 9.8-13.5 10.2l-20.9 1.2c-5.9.3-11.6-1.9-15.7-6.1-3.9-3.9-8.9-6.4-14.3-7.2-5.4-.8-10.9.1-15.7 2.6-9.6 5-15.2 15.2-14 26 1.2 10.8 9 19.5 19.8 22l45.2 10.5c17.5 4.1 33.8 13.7 45.4 27 15.6 17.9 20.8 42.6 13.9 65.3l-7.7 25.1c-1.6 5.2-5.5 9.3-10.6 11.2s-10.7 1.3-15.3-1.6l-37-23.7c-5.1-3.3-8.6-8.4-9.8-14.4l-7.2-36.2c-1.4-7.2 2.2-14.4 8.7-17.4l14-6.5c4.7-2.2 8.4-6 10.4-10.8 2-4.8 2.1-10.1.3-15-3.5-9.6-13-15.3-23.2-13.8l-40.4 6c-6.8 1-13.3-1.8-17-7.3-3.7-5.5-4.3-12.6-1.5-18.7l12.8-28.1c3.2-7 8.3-12.8 14.7-16.8s13.8-5.9 21.3-5.5l26.2 1.5c4.8.3 9.4 2.1 13 5.3 3.6 3.1 5.9 7.4 6.7 12.1.8 4.7-.2 9.5-2.7 13.6-2.6 4.1-6.5 7.1-11.2 8.5"/>
  </svg>
)

// 12. Python / FastAPI
export const PythonIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 110 110">
    <path fill="#387EB8" d="M54.3 2.1c-13.7 0-22.3 6-22.3 17.5v12.8h22.8v3.2H23.5C10.3 35.6 0 44.5 0 60.1c0 15.9 9.1 24.2 21.4 24.2h9.2v-12.3c0-13.2 11.4-24.8 24.8-24.8h23.2c1.7 0 3-1.3 3-3V21.8c0-12.3-10.8-19.7-27.3-19.7zm-12.2 7c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z"/>
    <path fill="#FFE052" d="M55.7 107.9c13.7 0 22.3-6 22.3-17.5V77.6H55.2v-3.2h31.3c13.2 0 23.5-8.9 23.5-24.5 0-15.9-9.1-24.2-21.4-24.2h-9.2v12.3c0 13.2-11.4 24.8-24.8 24.8H31.4c-1.7 0-3 1.3-3 3v22.4c0 12.3 10.8 19.7 27.3 19.7zm12.2-7c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z"/>
  </svg>
)

// 13. GraphQL & REST
export const GraphQLIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" stroke="#E10098" strokeWidth="1.6" />
    <path d="M12 2V22M3 7.2L21 16.8M3 16.8L21 7.2" stroke="#E10098" strokeWidth="1.2" strokeOpacity="0.8" />
    <circle cx="12" cy="2" r="1.8" fill="#E10098" />
    <circle cx="21" cy="7.2" r="1.8" fill="#E10098" />
    <circle cx="21" cy="16.8" r="1.8" fill="#E10098" />
    <circle cx="12" cy="22" r="1.8" fill="#E10098" />
    <circle cx="3" cy="16.8" r="1.8" fill="#E10098" />
    <circle cx="3" cy="7.2" r="1.8" fill="#E10098" />
  </svg>
)

// 14. WebSockets / Socket.io
export const WebSocketIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9.5" stroke="#F59E0B" strokeWidth="1.6" />
    <path d="M13 3.5L6.5 13H12L11 20.5L17.5 11H12L13 3.5Z" fill="#F59E0B" />
  </svg>
)

// 15. PostgreSQL
export const PostgresIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#336791"/>
    <path d="M18 12C17.7 9.8 15.8 8.2 13.5 8.2C11.2 8.2 9.3 9.8 9 12C7.9 12.6 6.8 13.7 6.8 15.3C6.8 17.5 8.5 19.2 10.7 19.2H16.2C18.1 19.2 19.5 17.8 19.5 16C19.5 14.3 18.7 12.8 18 12Z" fill="#FFFFFF"/>
    <circle cx="13" cy="11.5" r="1.2" fill="#336791"/>
    <path d="M10 15C10.5 16.2 11.8 17 13.2 17" stroke="#336791" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

// 16. MongoDB
export const MongoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C11.5 3.5 7 8.5 7 13.5C7 16.5 9 19.5 12 21.5C15 19.5 17 16.5 17 13.5C17 8.5 12.5 3.5 12 2Z" fill="#47A248"/>
    <path d="M12 2V21.5C12.2 21.5 12.4 21.4 12.6 21.3C15.3 19.3 17 16.5 17 13.5C17 8.5 12.5 3.5 12 2Z" fill="#499D4A"/>
    <path d="M12 22V17" stroke="#8A6B47" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// 17. Redis
export const RedisIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M3 7L12 2.5L21 7L12 11.5L3 7Z" fill="#DC382D"/>
    <path d="M3 12L12 16.5L21 12L12 7.5L3 12Z" fill="#A41E11"/>
    <path d="M3 17L12 21.5L21 17L12 12.5L3 17Z" fill="#7D1308"/>
    <circle cx="12" cy="7" r="1.2" fill="#FFFFFF"/>
    <circle cx="7.5" cy="9.2" r="0.9" fill="#FFFFFF" fillOpacity="0.8"/>
    <circle cx="16.5" cy="9.2" r="0.9" fill="#FFFFFF" fillOpacity="0.8"/>
  </svg>
)

// 18. Supabase & Firebase
export const SupabaseFirebaseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 16.5L7 3L11 10L4 16.5Z" fill="#FFA000"/>
    <path d="M4 16.5L12 21.5L11 10L4 16.5Z" fill="#F57C00"/>
    <path d="M13.5 2L20.5 10.5H15L17.5 21L10.5 12.5H16L13.5 2Z" fill="#3ECF8E"/>
  </svg>
)

// 19. Docker & Container
export const DockerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="5.5" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="8" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="10.5" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="8" y="5.5" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="10.5" y="5.5" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="13" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
    <path d="M22 11.5C21.4 11.4 20.8 11.7 20.5 12.2C19.8 11.2 18.7 10.6 17.5 10.5H15V11H3.5C2.7 11 2 11.7 2 12.5C2 16.5 5 19 9.5 19C14.5 19 18.5 16 20 13.5C21 13.5 22 12.5 22 11.5Z" fill="#2496ED"/>
    <circle cx="5" cy="14" r="0.6" fill="#FFFFFF"/>
  </svg>
)

// 20. Git & GitHub Actions
export const GitIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21.6 10.7L13.3 2.4C12.8 1.9 12 1.9 11.5 2.4L9.6 4.3L12.1 6.8C12.7 6.6 13.5 6.7 14 7.2C14.5 7.7 14.7 8.5 14.4 9.1L16.8 11.5C17.4 11.2 18.2 11.4 18.7 11.9C19.4 12.6 19.4 13.6 18.7 14.3C18 15 17 15 16.3 14.3C15.8 13.8 15.6 13.1 15.8 12.5L13.6 10.3V15.2C13.8 15.5 13.9 15.9 13.9 16.3C13.9 17.3 13.1 18.1 12.1 18.1C11.1 18.1 10.3 17.3 10.3 16.3C10.3 15.5 10.8 14.8 11.6 14.5V9.4C10.8 9.1 10.3 8.4 10.3 7.6C10.3 7.1 10.5 6.6 10.8 6.3L8.3 3.8L2.4 9.7C1.9 10.2 1.9 11 2.4 11.5L10.7 19.8C11.2 20.3 12 20.3 12.5 19.8L21.6 10.7Z" fill="#F05032"/>
  </svg>
)

// 21. AWS & Cloudflare
export const AwsCloudflareIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="#FF9900" fillOpacity="0.18" stroke="#FF9900" strokeWidth="1.2"/>
    <path d="M6 14C9 16.5 15 16.5 18 14" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16.5 13.5L18.5 14L18 16" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 8.5C11.5 8.5 13.5 9.8 14 11.5H7.5C8 9.8 9 8.5 10 8.5Z" fill="#F38020"/>
  </svg>
)

// 22. Linux / Nginx
export const LinuxNginxIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" fill="#009639"/>
    <path d="M8 16.5V7.5H10.2L13.8 13.5V7.5H16V16.5H13.8L10.2 10.5V16.5H8Z" fill="#FFFFFF"/>
  </svg>
)

// Mapping from skill iconName to metadata & colorful styling
export const techMap: Record<string, TechMeta> = {
  // Frontend
  Atom: {
    Icon: ReactIcon,
    badgeBg: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-500/30",
    barGradient: "from-sky-400 to-cyan-300",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(97,218,251,0.25)]",
    hoverBorder: "group-hover:border-sky-500/50",
    accentColor: "#61DAFB",
  },
  Globe: {
    Icon: NextjsIcon,
    badgeBg: "bg-zinc-800/10 dark:bg-white/10 border-zinc-700/30 dark:border-white/20",
    barGradient: "from-zinc-400 to-zinc-100",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(255,255,255,0.2)]",
    hoverBorder: "group-hover:border-zinc-400 dark:group-hover:border-white/50",
    accentColor: "#FFFFFF",
  },
  FileCode: {
    Icon: TypeScriptIcon,
    badgeBg: "bg-blue-600/10 dark:bg-blue-600/15 border-blue-600/30",
    barGradient: "from-blue-500 to-indigo-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(49,120,198,0.28)]",
    hoverBorder: "group-hover:border-blue-500/50",
    accentColor: "#3178C6",
  },
  Palette: {
    Icon: TailwindIcon,
    badgeBg: "bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-500/30",
    barGradient: "from-cyan-500 to-teal-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(6,182,212,0.28)]",
    hoverBorder: "group-hover:border-cyan-500/50",
    accentColor: "#06B6D4",
  },
  Layers: {
    Icon: VueIcon,
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/30",
    barGradient: "from-emerald-500 to-teal-300",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(66,184,131,0.28)]",
    hoverBorder: "group-hover:border-emerald-500/50",
    accentColor: "#42B883",
  },
  Sparkles: {
    Icon: FramerMotionIcon,
    badgeBg: "bg-pink-500/10 dark:bg-pink-500/15 border-pink-500/30",
    barGradient: "from-pink-500 via-purple-500 to-indigo-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(244,63,94,0.28)]",
    hoverBorder: "group-hover:border-pink-500/50",
    accentColor: "#FF0055",
  },

  // Mobile
  Smartphone: {
    Icon: ReactNativeIcon,
    badgeBg: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-500/30",
    barGradient: "from-sky-400 to-blue-500",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(97,218,251,0.25)]",
    hoverBorder: "group-hover:border-sky-500/50",
    accentColor: "#61DAFB",
  },
  Zap: {
    Icon: FlutterIcon,
    badgeBg: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/30",
    barGradient: "from-blue-500 to-cyan-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(2,86,155,0.28)]",
    hoverBorder: "group-hover:border-blue-400/50",
    accentColor: "#02569B",
  },
  Cpu: {
    Icon: MobileBuildIcon,
    badgeBg: "bg-green-500/10 dark:bg-green-500/15 border-green-500/30",
    barGradient: "from-green-500 via-emerald-400 to-slate-300",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(61,220,132,0.25)]",
    hoverBorder: "group-hover:border-green-400/50",
    accentColor: "#3DDC84",
  },

  // Backend
  Server: {
    Icon: NodejsIcon,
    badgeBg: "bg-green-600/10 dark:bg-green-600/15 border-green-600/30",
    barGradient: "from-green-600 to-lime-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(95,160,78,0.28)]",
    hoverBorder: "group-hover:border-green-500/50",
    accentColor: "#5FA04E",
  },
  ShieldCheck: {
    Icon: NestjsIcon,
    badgeBg: "bg-red-500/10 dark:bg-red-500/15 border-red-500/30",
    barGradient: "from-red-600 to-rose-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(224,35,78,0.28)]",
    hoverBorder: "group-hover:border-red-500/50",
    accentColor: "#E0234E",
  },
  Terminal: {
    Icon: PythonIcon,
    badgeBg: "bg-yellow-500/10 dark:bg-yellow-500/15 border-yellow-500/30",
    barGradient: "from-blue-500 via-sky-400 to-yellow-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(255,224,82,0.28)]",
    hoverBorder: "group-hover:border-yellow-400/50",
    accentColor: "#387EB8",
  },
  Network: {
    Icon: GraphQLIcon,
    badgeBg: "bg-pink-600/10 dark:bg-pink-600/15 border-pink-600/30",
    barGradient: "from-pink-600 to-fuchsia-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(225,0,152,0.28)]",
    hoverBorder: "group-hover:border-pink-500/50",
    accentColor: "#E10098",
  },
  Radio: {
    Icon: WebSocketIcon,
    badgeBg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/30",
    barGradient: "from-amber-500 to-yellow-300",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(245,158,11,0.28)]",
    hoverBorder: "group-hover:border-amber-400/50",
    accentColor: "#F59E0B",
  },

  // Database
  Database: {
    Icon: PostgresIcon,
    badgeBg: "bg-sky-600/10 dark:bg-sky-600/15 border-sky-600/30",
    barGradient: "from-blue-600 to-sky-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(51,103,145,0.28)]",
    hoverBorder: "group-hover:border-sky-500/50",
    accentColor: "#336791",
  },
  FolderGit2: {
    Icon: MongoIcon,
    badgeBg: "bg-emerald-600/10 dark:bg-emerald-600/15 border-emerald-600/30",
    barGradient: "from-emerald-600 to-green-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(71,162,72,0.28)]",
    hoverBorder: "group-hover:border-emerald-500/50",
    accentColor: "#47A248",
  },
  Flame: {
    Icon: RedisIcon,
    badgeBg: "bg-red-600/10 dark:bg-red-600/15 border-red-600/30",
    barGradient: "from-red-600 to-orange-500",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(220,56,45,0.28)]",
    hoverBorder: "group-hover:border-red-500/50",
    accentColor: "#DC382D",
  },
  CloudSun: {
    Icon: SupabaseFirebaseIcon,
    badgeBg: "bg-amber-500/10 dark:bg-emerald-500/15 border-amber-500/30",
    barGradient: "from-amber-500 via-orange-400 to-emerald-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(62,207,142,0.25)]",
    hoverBorder: "group-hover:border-emerald-400/50",
    accentColor: "#3ECF8E",
  },

  // DevOps
  Box: {
    Icon: DockerIcon,
    badgeBg: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/30",
    barGradient: "from-blue-500 to-sky-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(36,150,237,0.25)]",
    hoverBorder: "group-hover:border-blue-400/50",
    accentColor: "#2496ED",
  },
  GitBranch: {
    Icon: GitIcon,
    badgeBg: "bg-orange-500/10 dark:bg-orange-500/15 border-orange-500/30",
    barGradient: "from-orange-600 to-amber-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(240,80,50,0.25)]",
    hoverBorder: "group-hover:border-orange-500/50",
    accentColor: "#F05032",
  },
  Cloud: {
    Icon: AwsCloudflareIcon,
    badgeBg: "bg-orange-500/10 dark:bg-orange-500/15 border-orange-500/30",
    barGradient: "from-amber-500 to-orange-500",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(255,153,0,0.25)]",
    hoverBorder: "group-hover:border-orange-400/50",
    accentColor: "#FF9900",
  },
  Nginx: {
    Icon: LinuxNginxIcon,
    badgeBg: "bg-emerald-600/10 dark:bg-emerald-600/15 border-emerald-600/30",
    barGradient: "from-emerald-600 to-green-400",
    glowClass: "group-hover:shadow-[0_0_22px_rgba(0,150,57,0.25)]",
    hoverBorder: "group-hover:border-emerald-500/50",
    accentColor: "#009639",
  },
}
