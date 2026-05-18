import React from 'react'

type SkillItem = { label: string; primary?: boolean }

const programmingLanguages: SkillItem[] = [
  { label: 'TypeScript', primary: true },
  { label: 'Python', primary: true },
  { label: 'Scala' },
  { label: 'Groovy' },
  { label: 'Java' },
]

const frameworks: SkillItem[] = [
  { label: 'Next.js', primary: true },
  { label: 'FastAPI', primary: true },
  { label: 'LangWatch', primary: true },
  { label: 'React Native' },
  { label: 'React' },
  { label: 'Strapi' },
  { label: 'Spring' },
  { label: 'Flask' },
  { label: 'pandas' },
  { label: 'Akka' },
  { label: 'Protobuf / Avro' },
  { label: 'Camel' },
  { label: 'Jenkins (CI/CD)' },
  { label: 'Terraform (IaC)' },
  { label: 'Git' },
]

const platforms: SkillItem[] = [
  { label: 'AWS', primary: true },
  { label: 'Azure', primary: true },
  { label: 'MLOps tooling', primary: true },
  { label: 'Kubernetes' },
  { label: 'Docker' },
  { label: 'Kafka' },
  { label: 'Spark / Databricks' },
  { label: 'Flink' },
  { label: 'MuleSoft' },
  { label: 'apache / nginx' },
  { label: 'Linux' },
  { label: 'Wireshark' },
]

const spokenLanguages: SkillItem[] = [
  { label: 'English · Proficient' },
  { label: 'Dutch · Proficient (NT2)' },
  { label: 'Serbian · Native' },
  { label: 'German · Intermediate' },
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
      <div className="eyebrow">§ 03 — Skills</div>
      <h2 className="section-title">The toolbox.</h2>

      <div>
        <Group title="Programming Languages" items={programmingLanguages} />
        <Group title="Frameworks" items={frameworks} />
        <Group title="Software Platforms" items={platforms} />
        <Group title="Spoken Languages" items={spokenLanguages} />
      </div>
    </section>
  )
}
