import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const pubs = [
  {
    title: 'Towards Realistic Sign Language Animations',
    venue: 'ACM · 2023',
    type: 'Conference Paper',
    link: 'https://dl.acm.org/doi/10.1145/3570945.3607354',
  },
  {
    title: 'Enhancing Portuguese Sign Language Animation with Dynamic Timing and Mouthing',
    venue: 'Arxiv · 2023',
    type: 'Preprint',
    link: 'https://arxiv.org/abs/2307.06124',
  },
]

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Research &amp; Publications
          </p>
          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            My Master's research produced the first Portuguese text-to-sign language
            translator, bridging NLP and 3D animation to improve communication
            accessibility for the Deaf community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {pubs.map((pub, i) => (
            <motion.a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-surface rounded-2xl p-6 card-hover border border-gray-100 flex flex-col gap-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs bg-brand-light text-brand-purple px-2 py-0.5 rounded-full font-medium">
                  {pub.type}
                </span>
                <span className="text-xs text-muted">{pub.venue}</span>
              </div>
              <h3 className="font-semibold text-ink text-sm leading-snug group-hover:text-brand-purple transition-colors">
                {pub.title}
              </h3>
              <span className="text-xs text-brand-teal font-medium">View publication →</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
