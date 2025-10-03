import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import NoiseBackground from './components/ui/NoiseBackground'
import Footer from './components/sections/Footer'

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(()=>setReady(true), 1200); return ()=>clearTimeout(t) }, [])

  if (!ready) return <Preloader />

  return (
    <div className="app-bg noise min-h-screen">
      <NoiseBackground />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer/>
    </div>
  )
}