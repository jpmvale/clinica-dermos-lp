'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_URL =
  'https://wa.me/5598988393399?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20Dermos.'

const links = [
  { label: 'Clínica', href: '#sobre' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-md shadow-sm border-b border-cream'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Clínica Dermos"
              width={140}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display font-light text-[0.65rem] tracking-[0.2em] uppercase text-muted hover:text-teal transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-teal hover:bg-teal-light text-white font-display font-light text-[0.65rem] tracking-[0.2em] uppercase px-6 py-3 rounded-full transition-all duration-300"
            >
              Agendar
            </a>
          </nav>

          <button
            className="lg:hidden text-dark p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-px bg-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-px bg-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px bg-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-bg flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-light text-sm tracking-[0.25em] uppercase text-dark hover:text-teal transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.div
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
            >
              <Image src="/logo.svg" alt="Clínica Dermos" width={120} height={36} className="h-8 w-auto" />
            </motion.div>
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-teal text-white font-display font-light text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
