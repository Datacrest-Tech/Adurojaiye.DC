import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import TeamMembers from './pages/TeamMembers'
import ContactUs from './pages/ContactUs'
import ConsultUs from './pages/ConsultUs'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function PageFade({ children }) {
  const { pathname } = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <PageFade>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team-members" element={<TeamMembers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/consult-us" element={<ConsultUs />} />
        </Routes>
      </PageFade>
      <Footer />
    </div>
  )
}
