import React from 'react'

import { ExperienceItem } from '@/components/experience-item'

type ExpEntry = {
  from?: string
  to?: string
  role: string
  company: string
  companyHref?: string
  companyDescriptor?: string
  summary: string
  highlights: string[]
  stack?: string[]
}

const experiences: ExpEntry[] = [
  {
    role: 'Founder & AI Engineer',
    company: 'Elands AI',
    summary: 'Elands AI designs and delivers intelligent systems for startups and small companies.',
    highlights: [
      'Designing and shipping LLM-based applications for clients',
      'Building evaluation infrastructure for LLM systems',
      'Building real-time AI services',
    ],
  },
  {
    from: '2025-07-01',
    role: 'Lead AI Engineer',
    company: 'Delphyr B.V.',
    companyHref: 'https://delphyr.ai',
    companyDescriptor: 'AI for the medical field',
    summary:
      'I joined Delphyr to build an AI platform specifically for the medical field. We are bringing AI into real clinical workflows, from hospitals to GP practices.',
    highlights: [
      'We won our first contract with a Dutch mental health provider, by successfully completing integration with an EHR. On top of that I lead EHR integrations across four vendors',
      'AI-native engineering is the core of my workflow, with several coding agents in parallel, each running on a plan from Linear and reviewed by a second model',
      'I led the effort to encrypt data with KEK/DEK envelope encryption and to iterate on pentests to harden the system. I automated the UDI-PI release process',
      'With the product platform in place, I now focus on the AI layer. This consists of prompt design for various workflows, guardrails, evals, integrations and the observability that keeps model behavior measurable in production',
      'I built release gating on measured eval regressions and cut the eval suite runtime from 55 to 25 minutes. LangWatch observability with PHI-safe tracing shows where the chat harness needs improvement',
      'I ran embedding migration from Azure to Nebius, first evaluating and then implementing the migration. I migrated inference providers (Nebius, Baseten) and enabled visibility into token spending',
      'I worked on prompt design and grounding for ambient clinical documentation, from per-specialism templates to transcript-level verification of every generated statement',
      'I set up the Nebius Kubernetes cluster, ArgoCD-based GitOps and self-hosted CI runners. Fully automated tag-driven releases run evals and integration tests to validate deployment',
      'I lead incident command and write postmortem analysis for our production incidents',
    ],
    stack: [
      'Python',
      'FastAPI',
      'Pydantic AI',
      'PostgreSQL',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Auth0',
      'Pinecone',
      'LangWatch',
      'Sentry',
      'Grafana',
      'Docker',
      'Kubernetes',
      'ArgoCD',
      'Nebius',
      'Azure',
    ],
  },
  {
    from: '2024-09-01',
    to: '2025-06-01',
    role: 'Expert Software Engineer',
    company: 'Totally Gifts',
    companyDescriptor: 'Greenfield gift card platform',
    summary: 'I built a greenfield gift card platform on a new tech stack.',
    highlights: [
      'Event-driven architecture to capture gift card events and process them in real time',
      'Worked across the stack in a team of three engineers, a designer and a product owner',
      'Management of App Store and Play Store releases',
    ],
    stack: ['Next.js', 'TailwindCSS', 'Clerk', 'Sentry', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    from: '2023-11-01',
    to: '2024-09-01',
    role: 'Lead Fullstack Software Engineer',
    company: 'Grndhouse',
    companyHref: 'https://grndhouse.com',
    companyDescriptor: 'On-demand strength training',
    summary:
      'Team lead managing a team of 5 backend and frontend developers on grndhouse.com, a platform for on-demand strength training.',
    highlights: [
      'Led the development of the initial MVP after a successful funding round',
      'Met stakeholders regularly to plan the video streaming, payment processing and user management features',
      'Designed and built features with React Native, Node.js and AWS',
      'Mentored junior developers and cleared blockers for the team',
      'Expo to manage app lifecycle and deployments, with or without App Store / Play Store releases',
    ],
    stack: ['React Native', 'Node.js', 'AWS', 'Expo', 'Sentry', 'RevenueCat', 'Mixpanel'],
  },
  {
    from: '2021-12-01',
    to: '2023-11-01',
    role: 'Fullstack Software Engineer',
    company: 'Fertifa',
    companyHref: 'https://fertifa.com',
    companyDescriptor: 'Reproductive healthcare',
    summary:
      "Progressed from individual contributor to team lead, managing a team of 5 backend and frontend developers on fertifa.com, Europe's most comprehensive reproductive healthcare provider.",
    highlights: [
      'Defined and developed features in collaboration with the product owner and stakeholders',
      'Built features in React Native, Node.js and AWS',
      'Mentored junior developers and led sprints',
      'Manual app lifecycle management and deployments',
    ],
    stack: ['React Native', 'Node.js', 'AWS', 'Strapi', 'Sentry', 'Google Analytics', 'Meta Pixel', 'Drip', 'Amplitude'],
  },
  {
    from: '2018-06-01',
    to: '2021-12-01',
    role: 'Senior Software Engineer',
    company: 'KPN Technium B.V.',
    summary:
      'Senior engineer in the team developing an ETL automation framework and platform in Azure, based on the Hadoop &amp; Kafka ecosystem, automated by Terraform.',
    highlights: [
      'Rendering framework built with Python, Flask and SQLAlchemy',
      'Led story mapping for migration of on-premise data platform services to Azure',
      'Development of a distributed event-sourcing application for real-time analysis of the KPN customer journey, where multiple touch points are combined, analysed and visualised',
      'Scala stack with Akka / Alpakka used to build microservices and Flink applications',
      'DevOps methodology with fully automated CI/CD, monitoring and alerting',
    ],
  },
  {
    from: '2017-02-01',
    to: '2018-05-01',
    role: 'Software Engineer, Cognitive Implementation',
    company: 'IPsoft B.V.',
    companyDescriptor: 'Amelia AI framework',
    summary:
      'As technical lead of a 3-member agile team I was responsible for development of human-machine interaction on the artificial intelligence framework <a href="https://amelia.ai/" target="_blank" rel="noopener noreferrer">Amelia</a>.',
    highlights: [
      'Mostly hands-on development, code reviewing, mentoring and Scrum rituals',
      'Development mostly in Groovy / Python and in Java',
      'Data analysis with Pandas and Jupyter, visualisation with d3.js, and making new feature (or refactoring) decisions from the insights',
    ],
    stack: ['Kafka', 'Camel', 'Mule', 'Elasticsearch', 'Spring', 'Grails', 'Docker'],
  },
  {
    from: '2012-06-01',
    to: '2017-01-01',
    role: 'Senior System Engineer',
    company: 'Liberty Global B.V.',
    companyDescriptor: 'OTT streaming',
    summary:
      "As member of Liberty Global's OTT streaming solution architecture &amp; engineering team, I worked on the architecture of various system components, developing AWS (micro)services infrastructure, CDN content delivery, Adobe AEM and their integration.",
    highlights: [
      'Microservices development in Python',
      'Deep knowledge of web and backend application design, streaming technologies, HA scalable infrastructure, AWS cloud and full stack network protocols, acquired through work with high availability services',
      'Data analysis with Jupyter, Wireshark, Conviva and Omniture',
      'Performing code reviews and overall system troubleshooting',
    ],
  },
]

export const Experiences = (): React.ReactElement => {
  return (
    <section id="experience">
      <div className="eyebrow">§ 04 · Experience</div>
      <h2 className="section-title">
        Where I have <em>worked</em>.
      </h2>

      <div className="exp-list">
        {experiences.map((e) => (
          <ExperienceItem
            key={`${e.company}-${e.from ?? 'now'}`}
            role={e.role}
            company={e.company}
            companyHref={e.companyHref}
            companyDescriptor={e.companyDescriptor}
            summary={e.summary}
            highlights={e.highlights}
            stack={e.stack}
            from={e.from ? new Date(e.from) : undefined}
            to={e.to ? new Date(e.to) : undefined}
          />
        ))}
      </div>
    </section>
  )
}
