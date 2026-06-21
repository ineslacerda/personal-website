import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function OrcidIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
      <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1-5.6 0-10.1-4.6-10.1-10.1 0-5.6 4.5-10.1 10.1-10.1 5.6 0 10.1 4.5 10.1 10.1z" fill="white"/>
    </svg>
  )
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/inês-lacerda-65654a177',
    Icon: () => <FaLinkedin size={20} />,
    color: 'hover:text-[#0A66C2]',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ineslacerda',
    Icon: () => <FaGithub size={20} />,
    color: 'hover:text-[#24292F]',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0001-7426-2076',
    Icon: () => <OrcidIcon size={20} />,
    color: 'hover:text-[#A6CE39]',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          
          <h2 className="font-display text-4xl md:text-3xl font-bold text-ink leading-tight mb-6">
            Let's Connect
          </h2><br />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:ines.lacerda98@gmail.com"
              className="gradient-bg text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              ines.lacerda98@gmail.com
            </a>
            <a
              href="mailto:ines.lacerda@sap.com"
              className="border border-brand-purple text-brand-purple px-7 py-3 rounded-full font-medium hover:bg-brand-light transition-colors"
            >
              ines.lacerda@sap.com
            </a>
          </div>

          <div className="flex justify-center gap-8">
            {socialLinks.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm text-muted transition-colors ${color}`}
              >
                <Icon />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-100 flex justify-center items-center">
        <p className="text-muted text-xs">
          © 2026 Inês Lacerda · UX Cloud &amp; AI Developer
        </p>
      </div>
    </section>
  )
}

