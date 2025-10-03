// src/components/Projects.jsx
import { data } from '../data'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'

// Github Icon
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
       className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M12 .5A12 12 0 0 0 8.21 23.9c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.82 1.32 3.51 1 .11-.78.42-1.32.76-1.62-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.85 1.24 1.93 1.24 3.25 0 4.63-2.81 5.64-5.49 5.94.43.37.81 1.09.81 2.21v3.28c0 .32.22.7.82.58A12 12 0 0 0 12 .5z" />
  </svg>
)

// External Link Icon
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={2} stroke="currentColor"
       className="w-4 h-4 sm:w-5 sm:h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M18 13.5V18A2.25 2.25 0 0 1 15.75 20.25H6.75A2.25 2.25 0 0 1 4.5 18V8.25A2.25 2.25 0 0 1 6.75 6h4.5M15 3h6v6m-11.25 9L21 3" />
  </svg>
)

export default function Projects() {
  const categories = ['All', ...Array.from(new Set(data.projects.map(p => p.category)))]
  const [filter, setFilter] = useState('All')
  const items = useMemo(
    () => data.projects.filter(p => filter === 'All' || p.category === filter),
    [filter]
  )

  // Color palette
  const colors = ['#a678f6', '#c4d7c5', '#e7d5c8', '#f6e7d4', '#d5e8f6', '#f6d5e7']

  return (
    <section className="section pt-16 sm:pt-24">
      <div className="container-responsive">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Projects</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm md:text-base font-medium transition
                ${filter === c
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project Cards: Grid Layout */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            layout
          >
            {items.map((p, i) => {
              const bgColor = colors[i % colors.length] // cycle colors
              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
                  className="flex flex-col md:flex-row items-stretch rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  style={{ backgroundColor: bgColor }}
                >
                  {/* Left Side: Image */}
                  <div className="md:w-1/2 relative">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 md:h-full flex items-center justify-center text-white text-xl font-semibold"
                           style={{ backgroundColor: bgColor }}>
                        {p.title}
                      </div>
                    )}
                  </div>

                  {/* Right Side: Details */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm sm:text-base">{p.summary}</p>

                      {/* Tags */}
                      <motion.div
                        className="flex flex-wrap gap-2 mt-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {},
                          visible: { transition: { staggerChildren: 0.05 } }
                        }}
                      >
                        {p.tags.map(tag => (
                          <motion.span
                            key={tag}
                            className="px-2 py-1 text-xs bg-[#f6f3f47a] rounded-full"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-4">
                      {p.github && (
                        <motion.a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
                        >
                          <GithubIcon /> Code
                        </motion.a>
                      )}
                      {p.link && (
                        <motion.a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
                        >
                          <ExternalLinkIcon /> Live
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
