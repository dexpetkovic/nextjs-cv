import React from 'react'

import { ExperienceItem } from '@/components/experience-item'

type ExpEntry = {
  from: string
  to?: string
  role: string
  company: string
  companyHref?: string
  companyDescriptor?: string
  summary: string
  highlights: string[]
}

const experiences: ExpEntry[] = [
  {
    from: '2025-01-01',
    role: 'Founder & AI Engineer',
    company: 'Elands AI',
    summary:
      "Elands AI designs and delivers intelligent systems tailored to our clients' needs. We work primarily with startups and small companies, specialising in turnkey AI platforms and ML systems — handling everything from architecture to production deployment.",
    highlights: [
      'Designing and delivering custom LLM-based applications and AI platforms for clients',
      'Building MLOps infrastructure and data pipelines from scratch to production',
      'Working across the full stack with TypeScript and Python, combining cloud-native engineering with cutting-edge AI capabilities',
      'Shipping robust, scalable products that deliver real business value',
    ],
  },
  {
    from: '2025-07-01',
    role: 'Founding AI Engineer',
    company: 'Delphyr B.V.',
    companyHref: 'https://delphyr.ai',
    companyDescriptor: 'Medical AI SaaS',
    summary:
      'Leading design and development of a next-gen AI platform built specifically for the medical field — a secure, scalable SaaS that brings AI into real clinical workflows, from hospitals to GP practices, without compromising on usability, privacy, or compliance.',
    highlights: [
      'Technical depth &amp; architecture: scalable AI/data platforms, system integrations, trade-offs between performance, cost, and complexity',
      'AI/ML expertise: GenAI end-to-end — model development, fine-tuning, evaluation, and deployment',
      'Full-stack: frontend/mobile (React / React Native), backend (Node.js, Python, NestJS), infrastructure (cloud, containers, tracing/logging)',
      'Data &amp; MLOps: production pipelines with Grafana, Tempo, Elasticsearch',
      'Collaboration: mentoring, defining best practices, making technical decisions transparent',
    ],
  },
  {
    from: '2024-09-01',
    to: '2025-07-01',
    role: 'Expert Software Engineer',
    company: 'Totally Gifts',
    companyHref: 'https://app.live.totallygiftcards.com',
    companyDescriptor: 'Greenfield gift redemption platform',
    summary: 'Helping build a new gift redemption platform from scratch with a modern tech stack.',
    highlights: [
      'Applied GenAI to generate images and video for the platform (Replicate, HuggingFace, OpenAI)',
      'Next.js, TailwindCSS, Clerk, Sentry, NestJS, PostgreSQL, Docker, AWS',
      'Event-driven architecture for capturing and processing gift card events in real time',
      'Contributed across the stack with a cross-functional team of three engineers, a designer, and a product owner',
    ],
  },
  {
    from: '2023-11-01',
    to: '2024-09-01',
    role: 'Lead Fullstack Software Engineer',
    company: 'Grndhouse',
    companyHref: 'https://grndhouse.com',
    companyDescriptor: 'On-demand strength training',
    summary:
      'Team lead managing 5 backend &amp; frontend developers. Streamlined feature development for the MVP — video streaming, payment processing, user management.',
    highlights: [
      'Architected and engineered solutions in React Native, Node.js and AWS',
      'Mentored junior developers, resolved blockers, ensured timely delivery',
      'Tooling: Sentry, RevenueCat, Mixpanel',
      'Expo for App lifecycle and deployments — with and without App Store / Play Store releases',
    ],
  },
  {
    from: '2021-12-01',
    to: '2023-11-01',
    role: 'Fullstack Software Engineer',
    company: 'Fertifa',
    companyHref: 'https://fertifa.com',
    companyDescriptor: 'Reproductive healthcare',
    summary:
      "IC and later team lead managing 5 backend &amp; frontend developers at Europe's most comprehensive reproductive healthcare provider.",
    highlights: [
      'Engineered solutions in React Native, Node.js and AWS',
      'Tooling: Sentry, Strapi, Google Analytics, Meta Pixel, Drip, Amplitude',
      'Manually managed app lifecycle and deployments',
    ],
  },
  {
    from: '2018-05-01',
    to: '2021-12-01',
    role: 'Senior Software Engineer, Batch & Streaming Data',
    company: 'KPN Technium B.V.',
    summary:
      'A deep dive into data platforms — the intricacies of transformation to a data-driven company.',
    highlights: [
      'Senior engineer on an ETL automation framework on Azure, Hadoop/Kafka, automated with Terraform',
      'Rendering framework built with Python, Flask, SQLAlchemy',
      'Led part of story mapping for migrating on-prem data services to Azure / AKS',
      'Distributed event-sourcing application for real-time analysis of the KPN customer journey',
      'Scala / Akka / Alpakka microservices and Flink applications',
      'Fully automated CI/CD, monitoring, and alerting',
    ],
  },
  {
    from: '2017-02-01',
    to: '2018-05-01',
    role: 'Software Engineer, Cognitive Implementation',
    company: 'IPsoft B.V.',
    companyDescriptor: 'Automated Vodafone customer service with Amelia AI',
    summary:
      'Where I learned machine learning, prompt engineering and how to make data-driven decisions. Led a team that automated Vodafone\'s customer service agents using the <a href="https://amelia.ai/" target="_blank" rel="noopener noreferrer">Amelia</a> AI framework.',
    highlights: [
      'Technical lead of a 3-member agile team building human-machine interaction on Amelia',
      'Hands-on development, code reviews, mentoring, Scrum rituals',
      'Managed business requirements and solution architecture',
      'Stack: Groovy / Python / Java · Kafka · Camel · Mule · Elasticsearch · Spring · Grails · Docker',
      'Data analysis with Pandas / Jupyter, d3.js for visualisation',
    ],
  },
  {
    from: '2012-06-01',
    to: '2017-01-01',
    role: 'Senior System Engineer',
    company: 'Liberty Global B.V.',
    companyHref: 'https://www.libertyglobal.com/',
    companyDescriptor: 'OTT streaming (Ziggo Go)',
    summary:
      "Member of Liberty Global's OTT streaming solution architecture &amp; engineering team — combining software and system engineering on complex infrastructure.",
    highlights: [
      'Developed AWS (micro)services infrastructure, CDN content delivery, Adobe AEM and their integrations',
      'Data analysis with Jupyter, Wireshark, Conviva, Omniture',
      'Code reviews and overall system troubleshooting',
      'Deep web/backend, streaming, HA scalable infrastructure, AWS, and network protocol experience',
    ],
  },
]

export const Experiences = (): React.ReactElement => {
  return (
    <section id="experience">
      <div className="eyebrow">§ 04 — Experience</div>
      <h2 className="section-title">
        Seventeen years, <em>compounded</em>.
      </h2>

      <div className="exp-list">
        {experiences.map((e) => (
          <ExperienceItem
            key={`${e.company}-${e.from}`}
            role={e.role}
            company={e.company}
            companyHref={e.companyHref}
            companyDescriptor={e.companyDescriptor}
            summary={e.summary}
            highlights={e.highlights}
            from={new Date(e.from)}
            to={e.to ? new Date(e.to) : undefined}
          />
        ))}
      </div>
    </section>
  )
}
