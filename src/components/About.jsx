import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-3">
            About
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I'm Inês — a UX Cloud &amp; AI Developer at SAP with a Master's in
            Computer Science, specialising
            in Artificial Intelligence and Human-Computer Interaction. 
          </p>
           <p className="text-muted leading-relaxed mb-4">
            My work lives at the intersection of AI innovation and human-centred
            design: I build enterprise AI applications and automations tailored to customers' needs. I believe the best technology is built <em>with</em> people, not just
            for them.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Lived across three countries — Malaysia, Denmark, and Portugal — I bring a
            global perspective to the technology I build and the communities
            I serve.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            {
              icon: '🎓',
              title: 'MSc Computer Science',
              body: 'Instituto Superior Técnico · AI &amp; HCI specialisation · Academic Excellence Diploma',
            },
            {
              icon: '🌍',
              title: 'International Education',
              body: 'Malaysia · ISKL (High School)<br />Denmark · Aalborg University (Erasmus)<br />Portugal · Instituto Superior Técnico (Bachelor &amp; Master)',
            },
            {
              icon: '🔬',
              title: 'Published Researcher',
              body: 'ACM &amp; Arxiv · NLP · Sign Language · Presented at ACM IVA 2023 in Würzburg',
            },
            {
              icon: '🏳️‍🌈',
              title: 'Inclusion Advocate',
              body: 'Co-Lead Pride@SAP Portugal · Women in Tech · AI Ambassador Network',
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-surface rounded-2xl p-5 card-hover"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-semibold text-ink text-sm">{c.title}</h3>
              </div>
              <p
                className="text-muted text-xs leading-relaxed"
                dangerouslySetInnerHTML={{ __html: c.body }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
