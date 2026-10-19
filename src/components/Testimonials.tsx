import React from 'react'
import { certificatesData, testimonialsData } from '../data/portfolioData'
import { 
  Award, 
  Quote, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck 
} from 'lucide-react'

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UY TÍN & CHỨNG NHẬN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Chứng Chỉ Quốc Tế & Đánh Giá
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Showcase */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-500" />
            <span>Chứng chỉ chuyên môn</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      {cert.badgeText}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                {cert.verifyUrl && (
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
                    >
                      <span>Xác minh chứng chỉ</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Quote className="w-5 h-5 text-indigo-500" />
            <span>Đồng nghiệp & Khách hàng nói gì</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-3xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-indigo-500/30 mb-3" />
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                    "{test.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${test.avatarGradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                      {test.name}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {test.role} • {test.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
