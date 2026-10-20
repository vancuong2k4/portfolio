import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { BackgroundEffects } from './components/BackgroundEffects'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300 relative overflow-x-hidden">
        {/* Dynamic Background Effects */}
        <BackgroundEffects />

        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
