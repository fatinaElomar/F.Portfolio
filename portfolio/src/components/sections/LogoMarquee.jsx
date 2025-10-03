import { motion } from 'framer-motion'

const logos = ['Shopify','React','Tailwind','Node','Laravel','Figma','WordPress','WooCommerce']

export default function LogoMarquee(){
  return (
    <section className="py-12 select-none">
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-30%' }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="flex gap-14 text-purple-500/40 text-lg font-semibold whitespace-nowrap will-change-transform"
        >
          {[...logos, ...logos].map((l,i)=>(
            <span key={i} className="px-2">{l}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
