import { motion, useScroll, useTransform } from "framer-motion"
import MagneticButton from "../ui/MagneticButton"
import { FaReact, FaFigma } from "react-icons/fa"
import { SiShopify } from "react-icons/si"

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, 80])
  const y2 = useTransform(scrollY, [0, 600], [0, -60])

  return (
    <section className="relative overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute -top-24 -left-16 w-[32rem] h-[32rem] rounded-full bg-[#a678f6]/30 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 w-[36rem] h-[36rem] rounded-full bg-[#c5d7c5]/30 blur-3xl"
        style={{ y: y2 }}
      />

      {/* Floating icons */}
      <motion.div
        className="absolute top-28 left-10 text-[#61dafb]"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaReact size={85} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-16 text-[#a259ff]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaFigma size={80} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-[#96bf48]"
        animate={{ y: [0, -35, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiShopify size={75} />
      </motion.div>

      {/* Content */}
      <div className="container-responsive text-center py-32 lg:py-40 flex flex-col items-center gap-6 relative z-10">
        {/* Heading */}
     <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="font-display  leading-tight"
  style={{ fontFamily: "Reckless, Georgia, serif", fontSize: "5rem" }}
>
 

          Hey, I’m Fatina
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg max-w-xl"
          style={{
            fontFamily:
              'Roobert, -apple-system, BlinkMacSystemFont, Arial, Roboto, Ubuntu, "Helvetica Neue", sans-serif',
          }}
        >
          A <span>Full-Stack Developer</span> and{" "}
          <span>Graphic Designer</span> blending <span>React</span>,{" "}
          <span>Figma</span>, and <span>Shopify</span> into sleek, creative
          digital experiences.
        </motion.p>

        {/* Call to actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Scroll button */}
          <MagneticButton
            href="#showcase"
            className="text-[#a678f6] border border-[#7c3aed] bg-transparent px-6 py-3 rounded-[1.7rem] font-semibold hover:bg-[#f3e8ff] transition"
          >
            Show Me the Magic
          </MagneticButton>

          {/* WhatsApp button */}
          <MagneticButton
            href="https://wa.me/96171779091"
            target="_blank"
            rel="noopener noreferrer"
            className="border bg-[#a678f6] text-white px-6 py-3 rounded-[1.7rem] font-semibold hover:bg-[#925fe4] transition"
          >
            Let’s Team Up
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
