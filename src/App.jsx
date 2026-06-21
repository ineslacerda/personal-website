import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AILeadership from './components/AILeadership'
import CommunityImpact from './components/CommunityImpact'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Analytics } from '@vercel/analytics/next'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AILeadership />
        <CommunityImpact />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Analytics />
    </div>
  )
}

export default App
