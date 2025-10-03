import { motion } from 'framer-motion'
import { data } from '../../data'

export default function Features(){
  return (
    <section className="section">
      <div className="container-responsive">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">What I do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((s, i)=>(
            <motion.div
              key={s.title}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{duration:.5, delay: i*0.05}}
              className="card p-6 hover:-translate-y-1 transition-transform"
            >
              <p className="text-sm text-ink/60 mb-2">Service {i+1}</p>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-ink/70">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
