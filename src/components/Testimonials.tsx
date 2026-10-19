import React from 'react'
import { certificatesData, testimonialsData } from '../data/portfolioData'
import { 
  Award, 
  Quote, 
  ExternalLink, 
  ShieldCheck 
} from 'lucide-react'

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 mb-3">
            <span>// 05. UY TÍN & CHỨNG NHẬN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Chứng Chỉ Chuyên Môn & Đánh Giá
          </h2>
          <div className="w-12 h-1 bg-zinc-400 dark:bg-zinc-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Showcase */}
        <div className="mb-20">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-zinc-500" />
            <span>Chứng chỉ tiêu chuẩn quốc tế</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                      {cert.badgeText}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="font-bold text-zinc-900 dark:text-white text-base mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-zinc-500 flex items-center gap-1.5 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                {cert.verifyUrl && (
                  <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white hover:underline transition-colors"
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
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <Quote className="w-5 h-5 text-zinc-500" />
            <span>Đồng nghiệp & Khách hàng nói gì</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <Quote className="w-6 h-6 text-zinc-300 dark:text-zinc-700 mb-3" />
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed italic">
                    "{test.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="w-9 h-9 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs shadow-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-zinc-900 dark:text-white">
                      {test.name}
                    </h5>
                    <p className="text-xs text-zinc-500 font-mono">
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
