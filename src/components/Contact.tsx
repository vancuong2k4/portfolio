import React, { useState } from 'react'
import { profileData } from '../data/portfolioData'
import { 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react'
import { GmailIcon, GithubIcon } from './SocialIcons'
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
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {})
    }
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in your Name, Email, and Message.')
      return
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '4f8ed5c4-dd88-4bc4-8d23-b9a570391f9d',
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `New Portfolio Message from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: `${formData.name.trim()} (Portfolio Contact)`,
          botcheck: ''
        })
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#ffffff', '#a1a1aa', '#52525b', '#000000']
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Failed to send message. Please try again or reach out directly via email.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('A network error occurred. Please try again or contact me directly via email/phone.')
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 mb-3">
            <span>05. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base max-w-xl mx-auto">
            Have a project in mind, looking for engineering consultation, or considering full-time roles? Feel free to reach out anytime!
          </p>
          <div className="w-12 h-1 bg-zinc-400 dark:bg-zinc-700 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-transparent transition-all duration-300">
                    <GmailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                      Email
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white break-all">
                      {profileData.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.email, 'email')}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedField === 'email' && (
                <span className="text-xs font-mono font-semibold text-emerald-500 mt-2 block">
                  ✓ Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Phone Card with 1-click copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-transparent transition-all duration-300">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                      Phone / WhatsApp
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                      {profileData.phone}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="p-2 rounded-lg text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedField === 'phone' && (
                <span className="text-xs font-mono font-semibold text-emerald-500 mt-2 block">
                  ✓ Phone number copied to clipboard!
                </span>
              )}
            </div>

            {/* GitHub Card with 1-click copy & open link */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-md group">
              <div className="flex items-start justify-between">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 flex-1 min-w-0 group/link"
                  title="Open GitHub Profile"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:border-transparent transition-all duration-300 shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                        GitHub Profile
                      </h4>
                      <ExternalLink className="w-3 h-3 text-zinc-400 group-hover/link:text-black dark:group-hover/link:text-white transition-colors" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white truncate group-hover/link:underline">
                      github.com/vancuong2k4
                    </p>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy(profileData.github, 'github')}
                  aria-label="Copy GitHub profile link"
                  className="p-2 rounded-lg text-zinc-500 hover:text-black dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer shrink-0 ml-2"
                  title="Copy GitHub link"
                >
                  {copiedField === 'github' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedField === 'github' && (
                <span className="text-xs font-mono font-semibold text-emerald-500 mt-2 block">
                  ✓ GitHub link copied to clipboard!
                </span>
              )}
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 flex items-center justify-center">
                  <MapPin className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">Location</h4>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">{profileData.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 text-zinc-900 dark:text-zinc-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">Response Time</h4>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Usually responds within 2 - 4 hours</p>
                </div>
              </div>
            </div>



          </div>

          {/* Right Column: High Contrast Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-2 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 stroke-[2.2]" />
                </span>
                <span>Send a Quick Message</span>
              </h3>
              <p className="text-sm text-zinc-500 mb-8">
                Fill in your details below and I will get back to you as soon as possible.
              </p>

              {status === 'success' && (
                <div className="p-4 mb-6 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Message Sent Successfully!</h5>
                    <p className="text-xs mt-0.5 text-zinc-500 dark:text-zinc-400">Thank you for reaching out. I'll reply via email shortly.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 mb-6 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-red-500/50 text-red-500 text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-base sm:text-sm focus:outline-none focus:border-black dark:focus:border-white transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-base sm:text-sm focus:outline-none focus:border-black dark:focus:border-white transition-all font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project collaboration, Mobile app development..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-base sm:text-sm focus:outline-none focus:border-black dark:focus:border-white transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white text-base sm:text-sm focus:outline-none focus:border-black dark:focus:border-white transition-all resize-none font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full group flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all cursor-pointer disabled:opacity-60 shadow-md active:scale-[0.99]"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 stroke-[2.2] text-zinc-400 group-hover:text-white dark:text-zinc-600 dark:group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                      <span>Send Message Now</span>
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
