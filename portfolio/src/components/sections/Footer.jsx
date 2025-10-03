import { Linkedin, Github, Instagram } from 'lucide-react'
import { FaShopify, FaBehance } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Me from '../../assets/images/me.png'

export default function Footer() {
  const contacts = {
    email: "your@email.com"
  }

  const socialLinks = [
    { Icon: Linkedin, href: 'www.linkedin.com/in/fatina-elomar' },
    { Icon: Github, href: 'https://github.com/fatinaElomar' },
    { Icon: FaShopify, href: 'https://community.shopify.com/c/user/viewprofilepage/user-id/1930506' },
    { Icon: FaBehance, href: 'https://www.behance.net/fatinaelomar' },
    { Icon: Instagram, href: 'https://www.instagram.com/' }
  ]

  return (
    <footer id="contact" className="w-full relative overflow-hidden">
      <div className="bg-transparent px-6 py-16 sm:px-12 flex flex-col sm:flex-row items-center " />
      {/* Top CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#f5f5f5] px-6 py-16 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-8 relative"
      >
        {/* Left Text + Button */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 relative z-10 text-center sm:text-left"
        >
          <h3 className="text-2xl font-bold text-black leading-snug">
            Have an idea or project in mind? <br />
            Let’s bring it to life together.
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = 'mailto:' + contacts.email)}
            className="mt-6 bg-[#111] text-white px-6 py-3 rounded-md font-medium"
          >
            Let’s Work Together
          </motion.button>
        </motion.div>

        {/* Image — responsive fix */}
       <motion.img
  src={Me}
  alt="Portfolio showcase"
  className="w-64 sm:w-[20rem] lg:w-[32rem] relative sm:absolute top-[-28%] left-0 sm:left-[55%] sm:-translate-x-1/2"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
/>

      </motion.div>

      {/* Middle Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 text-black">
        {/* Social */}
        <motion.div
          whileHover={{ backgroundColor: "#e1cbb9" }}
          className="bg-[#e7d6c9] px-8 py-12 text-center sm:text-left"
        >
          <h4 className="text-sm font-medium mb-2">Stay Connected</h4>
          <p className="text-lg font-semibold mb-6">Follow my journey</p>
          <div className="flex justify-center sm:justify-start gap-5 text-black">
            {socialLinks.map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          whileHover={{ backgroundColor: "#b5cdb5" }}
          className="bg-[#c5d7c5] px-8 py-12 text-center sm:text-left"
        >
          <h4 className="text-sm font-medium mb-2">Get Insights</h4>
          <p className="text-lg font-semibold mb-6">
            Latest design & dev tips in your inbox
          </p>
          <form className="flex flex-col sm:flex-row bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-3 py-2 text-sm outline-none border-b sm:border-b-0 sm:border-r"
            />
            <motion.button
              type="submit"
              whileHover={{ x: 5 }}
              className="px-4 py-2 bg-black text-white text-lg"
            >
              →
            </motion.button>
          </form>
        </motion.div>

        {/* Collaborate */}
        <motion.div
          whileHover={{ backgroundColor: "#9d6bf3" }}
          className="bg-[#a678f6] px-8 py-12 flex flex-col justify-center text-center sm:text-left"
        >
          <h4 className="text-sm font-medium mb-2">Want to collaborate?</h4>
          <motion.a
            href="https://wa.me/96171779091"
            className="text-lg font-semibold"
            whileHover={{ x: 5 }}
          >
            Hire Me →
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-black text-white px-6 py-6 sm:px-12 flex flex-col sm:flex-row justify-between items-center text-sm text-center sm:text-left gap-4"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold"
          >
            F.O
          </motion.div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-white/80">
            <a href="/">About</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
            <a
  href="https://wa.me/96171779091"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact
</a>
          </div>
        </div>
        <p className="text-white/70">
          © {new Date().getFullYear()} | Designed & Developed by Fatina
        </p>
      </motion.div>
    </footer>
  )
}
