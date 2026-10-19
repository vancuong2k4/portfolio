import React from 'react'
import { profileData } from '../data/portfolioData'
import { 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  Award,
  Sparkles
} from 'lucide-react'

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Hiệu năng & Tốc độ",
      description: "Tối ưu hóa Core Web Vitals, giảm bundle size và tăng tốc độ phản hồi API dưới 100ms.",
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-500"
    },
    {
      icon: Smartphone,
      title: "Đa Nền Tảng Liền Mạch",
      description: "Xây dựng trải nghiệm nhất quán trên Web & Mobile (iOS / Android) với độ mượt mà 60 FPS.",
      color: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-500"
    },
    {
      icon: ShieldCheck,
      title: "Code Sạch & Dễ Mở Rộng",
      description: "Áp dụng Clean Architecture, SOLID principles, viết unit test và typing chặt chẽ với TypeScript.",
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-500"
    },
    {
      icon: Users,
      title: "Tư Duy Sản Phẩm",
      description: "Không chỉ viết code, tôi luôn hướng đến giải quyết bài toán kinh doanh và tạo giá trị thực cho người dùng.",
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-500"
    }
  ]

  const statsList = [
    { label: "Năm Kinh Nghiệm", value: `${profileData.stats.yearsExperience}+`, icon: Briefcase, color: "text-indigo-500" },
    { label: "Dự Án Hoàn Thành", value: `${profileData.stats.projectsCompleted}+`, icon: Award, color: "text-purple-500" },
    { label: "Công Nghệ Làm Chủ", value: `${profileData.stats.technologiesMastered}+`, icon: Zap, color: "text-amber-500" },
    { label: "Commits Trong Năm", value: `${profileData.stats.commitsLastYear.toLocaleString()}+`, icon: Sparkles, color: "text-emerald-500" },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HỒ SƠ CÁ NHÂN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Về Bản Thân & Triết Lý Làm Việc
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Grid: Bio & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Left Column: Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Kỹ Sư Phần Mềm Đam Mê Sáng Tạo & Tối Ưu
            </h3>
            {profileData.aboutParagraphs.map((p, idx) => (
              <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {p}
              </p>
            ))}

            {/* Quick Details Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span><strong>Địa điểm:</strong> {profileData.location}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <GraduationCap className="w-4 h-4 text-purple-500 shrink-0" />
                <span><strong>Học vấn:</strong> Kỹ sư ĐH Bách Khoa</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <Languages className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong>Ngôn ngữ:</strong> Tiếng Việt, Tiếng Anh (IELTS 7.0)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>Mô hình:</strong> Hybrid / Full-remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {statsList.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* Bottom: 4 Value Pillars */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Giá Trị Cốt Lõi Mang Đến Cho Mọi Dự Án
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
