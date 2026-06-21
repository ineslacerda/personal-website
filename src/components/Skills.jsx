import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const skillGroups = [
  {
    label: 'AI & Machine Learning',
    skills: ['Large Language Models', 'RAG', 'LangChain', 'LangGraph', 'AI Core', 'HANA Vector Engine', 'NLP', 'Generative AI', 'Multi-Agent Systems'],
  },
  {
    label: 'Development',
    skills: ['SAPUI5', 'OData/SAP CAP', 'TypeScript', 'React', 'Python', 'C#', 'Node.js', 'Unity', 'REST APIs'],
  },
  {
    label: 'SAP Ecosystem',
    skills: ['SAP BTP', 'Joule Studio', 'SAP Build', 'S/4HANA', 'SAP HANA Cloud', 'SuccessFactors', 'Ariba', 'SAP RPT-1'],
  },
  {
    label: 'Design & Methodology',
    skills: ['Figma', 'Design Thinking', 'SAP Fiori Design', 'Agile / Scrum', 'Human-Computer Interaction', 'User Research'],
  },
]

const certs = [
  { name: 'Generative AI Leader Certification', issuer: 'Google', code: '' },
  { name: 'SAP Generative AI Developer', issuer: 'SAP', code: 'C_AIG' },
  { name: 'SAP Certified Solution Architect — BTP', issuer: 'SAP', code: 'P_BTPA' },
  { name: 'SAP BTP Back-End Developer', issuer: 'SAP', code: 'C_CPE' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', code: 'AI-900' },
  { name: 'Portuguese Sign Language', issuer: 'UP2U', code: '' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-brand-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Skills &amp; Certifications
          </p>
          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm bg-surface text-ink/80 px-3 py-1 rounded-full border border-gray-200 hover:border-brand-purple/40 hover:text-brand-purple transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-6">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certs.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-2xl p-5 border border-gray-100 card-hover flex items-start gap-3"
              >
                <div className="gradient-bg w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                  {c.issuer[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink leading-snug">{c.name}</p>
                  <p className="text-xs text-muted mt-0.5">
                    {c.issuer}{c.code ? ` · ${c.code}` : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
