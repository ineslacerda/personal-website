import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const projects = [
  {
    company: 'Uniper · Energy · Germany',
    title: 'Perfect Purchase Requisition',
    headline: '· 95% Increase of search accuracy <br />· 90% user adoption rate',
    description:
      'AI-powered Fiori application that recommends Materials, Suppliers, and Contracts to enable faster, more accurate Purchase Requisition creation. Uses Retrieval Augmented Generation (RAG) and semantic search with HANA Vector Engine and SAP RPT-1 recommendation model over historical Ariba catalog data.',
    stack: ['Procurement', 'SAPUI5', 'CAP', 'AI Core', 'RAG', 'HANA Vector Engine', 'RPT-1', 'Relational Foundational Model'],
    badge: 'Production · Deployed',
    color: 'from-violet-500 to-purple-600',
  },
  {
    company: 'Amadeus · Travel · Spain',
    title: 'Payment Advice Automation',
    headline: '· Showcased at Sapphire Madrid 2026 <br />· 87% success rate',
    description:
      'Automates end-to-end payment advice creation in S/4HANA by extracting data from unstructured emails and credit card statements using Document AI and RPA. Integrated with Joule for conversational access.',
    stack: ['Finance', 'RPA / SAP Build', 'Document AI', 'AI Core', 'LLM', 'Joule'],
    badge: 'Showcased · Sapphire 2026',
    color: 'from-sky-500 to-teal-500',
  },
  {
    company: 'INESC-ID · Master Thesis · Portugal',
    title: 'Portuguese Text-to-Sign Language Translator',
    headline: '· 84% comprehension <br />· ACM IVA 2023',
    description:
      'Created the first Portuguese text-to-sign language translator, automatically incorporating linguistic components and synthesising realistic facial expressions and body movements.  <br />Conducted three user studies with 34 participants. Published at ACM IVA 2023, Würzburg.',
    stack: ['Python', 'NLP', 'C#', 'Unity', '3D Animation', 'REST APIs'],
    badge: 'ACM Published · Würzburg',
    color: 'from-rose-400 to-pink-500',
    videoId: '19qv7MjtkNG9WuTc-eAhMRsVZW0sjN2I-',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Some Project Showcases
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover"
            >
              <div className={`bg-gradient-to-r ${p.color} h-1.5`} />
              <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-xs text-muted mb-2">{p.company}</p>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-ink text-lg">{p.title}</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: p.description }}
                    />
                  {p.videoId && (
                    <div className="mb-4 rounded-xl overflow-hidden aspect-video w-full">
                      <iframe
                        src={`https://drive.google.com/file/d/${p.videoId}/preview`}
                        className="w-full h-full"
                        allow="autoplay"
                        allowFullScreen
                        title={`${p.title} demo`}
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 text-ink/70 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-56 flex flex-col justify-between gap-4">
                  <div className={`bg-gradient-to-br ${p.color} rounded-xl p-5 text-white`}>
                    <p className="text-xs opacity-80 mb-1">Key Results</p>
                    <p
                      className="font-semibold text-sm leading-snug"
                      dangerouslySetInnerHTML={{ __html: p.headline }}
                    />
                  </div>
                  <span className="text-xs bg-brand-light text-brand-purple px-3 py-1.5 rounded-full text-center font-medium">
                    {p.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Personal Projects sub-section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
            Personal Experiments
          </p>
          <p className="text-muted text-sm mb-8 max-w-2xl">
            Outside of customer work, I've built some personal projects.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🏃‍♀️',
                title: 'Strava Workout Coach',
                description:
                  'I\'ve started running last year, completed my first 10K race this year, and I\'m now training for my first half marathon next year. To help structure my training, I built an AI coaching agent that reads my Strava data via a custom MCP server and generates personalised weekly training plans.',
                stack: ['Python', 'LangGraph', 'FastMCP', 'A2A Protocol', 'Strava API', 'SAPUI5'],
                tag: 'Personal · Side project',
              },
              {
                icon: '⚽',
                title: 'SCORE with SAP — World Cup 2026 Predictor',
                description:
                  'FIFA World Cup 2026 score predictor powered by SAP RPT-1 (a pre-trained tabular prediction model) and real-time web search for team news — injuries, suspensions, squad form. Ask natural language questions about the tournament and get data-driven answers enriched with real-world context.',
                stack: ['Python', 'LangGraph', 'SAP RPT-1', 'FastMCP', 'A2A Protocol', 'SAPUI5'],
                tag: 'Personal · Side project',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 card-hover flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-xs bg-gray-100 text-muted px-2 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-ink text-base">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-surface text-ink/70 px-2 py-0.5 rounded-full border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
