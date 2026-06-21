import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const events = [
  {
    tag: 'Online',
    title: 'Agentic AI Zone — Virtual Sessions',
    meta: '8 sessions · 50+ participants each · 400+ total',
    description:
      'Led 8 live virtual AI enablement sessions across the Agentic AI Zone. Sessions covered how to build agents in Joule Studio, create Joule Skills, and how to do vibe coding using Hyperspace AI, GitHub Copilot, and Claude Code.',
    stack: ['Joule Studio', 'Joule Skills', 'Vibe Coding', 'MCP'],
    highlight: '400+ participants reached',
  },
  {
    tag: 'Onsite · Romania · EMEA/MEE Roadmap',
    title: 'Agentic AI Zone — Onsite Workshops',
    meta: '2 full days · 88 participants · 29 agents built',
    description:
      'Led and facilitated 2-day hands-on workshops in Romania. Participants built real AI agents. Part of an ongoing 8-country EMEA/MEE rollout.',
    stack: ['SAP AI Strategy', 'Claude Code', 'Skills', 'LangGraph', 'Joule', 'A2A Protocol', 'Python'],
    highlight: '88 participants | 29 agents built',
  },
  {
    tag: 'Online · 4 Weeks',
    title: 'UX CD Hackathon — Road to GenAI',
    meta: '4-week program · ~3 hrs/week · 23 participants',
    description:
      'Designed and ran a 4-week online GenAI development programme - going from a first LLM call to autonomous multi-agent systems with RAG and tool calling. Each session combined theory, live code walkthroughs, and real customer use cases.',
    stack: ['Node.js', 'CAP', 'Fiori', 'AI Core', 'LangGraph', 'Agentic Patterns', 'RAG', 'MCP'],
    highlight: 'From zero to multi-agent in 4 weeks',
  },
]

export default function AILeadership() {
  return (
    <section id="ai-leadership" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-3">
            AI Education &amp; Leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 card-hover flex flex-col gap-4 border border-gray-100"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs text-brand-purple font-medium bg-brand-light px-2 py-1 rounded-full text-right">
                  {e.tag}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-ink text-base mb-1">
                  {e.title}
                </h3>
                <p className="text-xs text-brand-teal font-medium mb-3">{e.meta}</p>
                <p className="text-muted text-sm leading-relaxed">{e.description}</p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {e.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-ink/70 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="gradient-bg rounded-xl px-4 py-2">
                  <p className="text-white text-xs font-medium text-center">
                    {e.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 bg-white rounded-2xl p-8 border border-gray-100"
        >
          {[
            { value: '8', label: 'Virtual Sessions' },
            { value: '400+', label: 'Virtual Participants' },
            { value: '88', label: 'Onsite Participants' },
            { value: '29', label: 'Agents Built' },
            { value: '23', label: 'Hackathon Participants' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="gradient-text font-display text-3xl font-bold block">
                {s.value}
              </span>
              <span className="text-muted text-xs mt-1 block">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
