import { motion } from 'framer-motion'
import profilePic from '../assets/profile_pic.jpeg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-4"
          >
            UX Cloud &amp; AI Developer · SAP · MS Computer Science
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight mb-4"
          >
            Inês Lacerda
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-ink/80 leading-snug mb-6"
          >
            Where{' '}
            <span className="gradient-text font-semibold">human-centred design</span>
            {' '}meets the{' '}
            <span className="gradient-text font-semibold">frontier of AI.</span>
          </motion.p>

          <motion.blockquote
            variants={item}
            className="border-l-4 border-brand-purple/30 pl-4 mb-8 text-muted italic text-sm leading-relaxed"
          >
            "Design is really an act of communication, which means having a deep
            understanding of the person with whom the designer is communicating."
            <br />
            <span className="not-italic font-medium text-ink/60 text-xs">
              — Don Norman, The Design of Everyday Things
            </span>
          </motion.blockquote>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/inês-lacerda-65654a177"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="border border-brand-purple text-brand-purple px-6 py-3 rounded-full font-medium hover:bg-brand-light transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative gradient blob behind the photo */}
            <div className="absolute -inset-4 gradient-bg rounded-3xl opacity-10 blur-2xl" />
            <img
              src={profilePic}
              alt="Inês Lacerda"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-16 flex flex-wrap gap-8"
      >
        {[
          { value: '400+', label: 'Workshop Participants' },
          { value: '4+', label: 'Years at SAP' },
          { value: '48', label: 'Pride@SAP Members' },
        ].map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="gradient-text font-display text-3xl font-bold">
              {s.value}
            </span>
            <span className="text-muted text-sm mt-1">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
