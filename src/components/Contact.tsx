import React, { useState } from 'react'
import { profileData } from '../data/portfolioData'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'
import confetti from 'canvas-confetti'

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    // Simulate sending or ready for EmailJS/Web3Forms
    setTimeout(() => {
      setStatus('success')
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KẾT NỐI VÀ HỢP TÁC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Liên Hệ Với Tôi
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
            Bạn đang có ý tưởng dự án mới, cần tư vấn giải pháp phần mềm, hoặc muốn trao đổi cơ hội việc làm? Tôi luôn sẵn lòng lắng nghe!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Gửi Email Trực Tiếp
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white break-all">
                      {profileData.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.email, 'email')}
                  aria-label="Sao chép địa chỉ email"
                  className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  title="Sao chép email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedField === 'email' && (
                <span className="text-xs font-semibold text-emerald-500 mt-2 block">
                  ✓ Đã sao chép địa chỉ email!
                </span>
              )}
            </div>

            {/* Phone Card with 1-click copy */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-slate-700 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Số Điện Thoại / Zalo
                    </h4>
                    <p className="text-base font-semibold text-slate-900 dark:text-white">
                      {profileData.phone}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.phone, 'phone')}
                  aria-label="Sao chép số điện thoại"
                  className="p-2 rounded-xl text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  title="Sao chép số điện thoại"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedField === 'phone' && (
                <span className="text-xs font-semibold text-emerald-500 mt-2 block">
                  ✓ Đã sao chép số điện thoại!
                </span>
              )}
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Địa Điểm</h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{profileData.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-slate-700 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Thời Gian Phản Hồi</h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Thường phản hồi trong vòng 2 - 4 giờ</p>
                </div>
              </div>
            </div>

            {/* Free Hosting & Zero Backend Notice */}
            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>
                <strong>Mẹo:</strong> Portfolio được cấu hình tối ưu để đưa lên Vercel / GitHub Pages hoàn toàn <strong>miễn phí 100%</strong>. Form liên hệ có thể tích hợp trực tiếp EmailJS hoặc Web3Forms mà không cần thuê máy chủ backend!
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xl backdrop-blur-md">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-indigo-500" />
                <span>Gửi Tin Nhắn Nhanh</span>
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                Điền thông tin vào form dưới đây, tôi sẽ liên hệ lại bạn sớm nhất có thể.
              </p>

              {status === 'success' && (
                <div className="p-4 mb-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Gửi tin nhắn thành công!</h5>
                    <p className="text-xs mt-0.5">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi qua email trong thời gian sớm nhất.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 mb-6 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Địa chỉ Email *
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Tiêu đề / Chủ đề
                  </label>
                  <input
                    type="text"
                    placeholder="Hợp tác phát triển ứng dụng di động / Trao đổi công việc..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Hãy chia sẻ thông tin về dự án hoặc yêu cầu của bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 cursor-pointer disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang gửi tin nhắn...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi Tin Nhắn Ngay</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
