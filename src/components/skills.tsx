import React from 'react'

type SkillItem = { label: string; primary?: boolean }

const aiAndLlm: SkillItem[] = [
  { label: 'LLM APIs (OpenAI-compatible)', primary: true },
  { label: 'Azure ML' },
  { label: 'Nebius' },
  { label: 'Google Gemini' },
  { label: 'MCP servers', primary: true },
  { label: 'Agentic tool use', primary: true },
  { label: 'Pydantic AI' },
  { label: 'pydantic-evals' },
  { label: 'Prompt design & grounding', primary: true },
  { label: 'LLM-as-judge evaluation' },
  { label: 'Guardrails & adversarial testing' },
  { label: 'LangWatch' },
  { label: 'PHI de-identification (Deduce)' },
]

const programmingLanguages: SkillItem[] = [
  { label: 'Python', primary: true },
  { label: 'TypeScript', primary: true },
  { label: 'Scala' },
  { label: 'Java' },
]

const frameworks: SkillItem[] = [
  { label: 'FastAPI', primary: true },
  { label: 'Next.js', primary: true },
  { label: 'Pydantic' },
  { label: 'SQLAlchemy / Alembic' },
  { label: 'PostgreSQL' },
  { label: 'Node.js / NestJS' },
  { label: 'Kafka' },
  { label: 'Spark / Databricks' },
  { label: 'Flink' },
  { label: 'pandas' },
  { label: 'React' },
  { label: 'React Native' },
  { label: 'TailwindCSS' },
  { label: 'Playwright' },
  { label: 'Jest' },
]

const platforms: SkillItem[] = [
  { label: 'AWS', primary: true },
  { label: 'Azure', primary: true },
  { label: 'Kubernetes', primary: true },
  { label: 'Docker' },
  { label: 'ArgoCD' },
  { label: 'Terraform' },
  { label: 'GitHub Actions' },
  { label: 'OpenTelemetry' },
  { label: 'Prometheus / Grafana' },
  { label: 'Sentry' },
]

const spokenLanguages: SkillItem[] = [
  { label: 'English · Fluent' },
  { label: 'Dutch · Fluent (NT2)' },
  { label: 'Serbian · Fluent' },
  { label: 'German · Intermediate' },
  { label: 'Russian · Intermediate' },
]

const Group = ({ title, items }: { title: string; items: SkillItem[] }) => (
  <div className="skill-group">
    <h4>{title}</h4>
    <div className="skill-tags">
      {items.map((it) => (
        <span key={it.label} className={`tag${it.primary ? ' primary' : ''}`}>
          {it.label}
        </span>
      ))}
    </div>
  </div>
)

export const Skills = (): React.ReactElement => {
  return (
    <section id="skills">
      <div className="eyebrow">§ 03 · Skills</div>
      <h2 className="section-title">The toolbox.</h2>

      <div>
        <Group title="AI and LLM Systems" items={aiAndLlm} />
        <Group title="Programming Languages" items={programmingLanguages} />
        <Group title="Frameworks and Libraries" items={frameworks} />
        <Group title="Platforms and Infrastructure" items={platforms} />
        <Group title="Spoken Languages" items={spokenLanguages} />
      </div>
    </section>
  )
}
