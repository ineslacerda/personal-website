import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const communities = [
  {
    icon: '🏳️‍🌈',
    title: 'Co-Lead Pride@SAP Portugal',
    stats: [
      { value: '48', label: 'Members' },
      { value: '3+', label: 'Events / Quarter' },
    ],
    description:
      'Co-lead the Pride@SAP Portugal chapter, organizing quarterly events that create an inclusive space for LGBTQ+ employees and allies at SAP. Focused on psychological safety, visibility, and building an inclusive culture.',
  },
  {
    icon: '👩‍💻',
    title: 'SAP Women in Tech',
    stats: [],
    description:
      'Selected for Top Women Tech Brussels, speaker at Breaking Into Tech (80 attendees), and volunteer mentor — see highlights below.',
  },
  {
    icon: '🤖',
    title: 'SAP AI Ambassador Network',
    stats: [],
    description:
      'Member of the SAP AI Ambassador Network — sharing knowledge on generative AI, agentic systems, and responsible AI practices across the SAP ecosystem and with customers.',
  },
]

export default function CommunityImpact() {
  return (
    <section id="community" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Community Impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {communities.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-surface rounded-2xl p-7 card-hover border border-gray-100 flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="font-semibold text-ink text-base">{c.title}</h3>
              </div>

               <p className="text-muted text-sm leading-relaxed">{c.description}</p>
              
              {c.stats.length > 0 && (
                <div className="flex gap-6">
                  {c.stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="gradient-text font-display text-2xl font-bold">
                        {s.value}
                      </span>
                      <span className="text-muted text-xs">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Women in Tech 2024 Highlights */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 mb-6"
        >
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-5">
            Women in Tech · Highlights
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: '🏆',
                event: 'Top Women Tech · Brussels',
                tag: 'Award',
                description:
                  'Honoured to be selected to attend this European event, where I won a special recognition from CARIAD. An incredible opportunity to network with inspiring women tech leaders across Europe.',
              },
              {
                icon: '🌐',
                event: 'Web Summit · Women in Tech',
                tag: 'Attendee',
                description:
                  'Attended as a woman in tech and participated in an empowering Masterclass delivered by the SAP Business Women\'s Network.',
              },
              {
                icon: '🎤',
                event: 'Breaking Into Tech · Speaker',
                tag: '80 attendees',
                description:
                  'Shared my career journey and experiences at SAP with an audience of 80 students.',
              },
              {
                icon: '🤝',
                event: 'Braço Direito · Volunteer Mentor',
                tag: 'Mentoring',
                description:
                  'Volunteered to give a student a hands-on look into a day in my professional life, guiding her in understanding how careers unfold in the corporate technology world.',
              },
            ].map((h, i) => (
              <motion.div
                key={h.event}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-surface rounded-2xl p-6 card-hover border border-gray-100 flex gap-4"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{h.icon}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4 className="font-semibold text-ink text-sm">{h.event}</h4>
                    <span className="text-xs bg-brand-light text-brand-purple px-2 py-0.5 rounded-full">
                      {h.tag}
                    </span>
                  </div>
                  <p className="text-muted text-xs leading-relaxed">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
