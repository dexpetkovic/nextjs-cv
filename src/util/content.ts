export const content = {
  profile: [
    'I have started my career as a system engineer back in 2008, and since then have grown into a seasoned full-stack developer, working on a wide range of projects, from traditional IPTV systems to modern AI-human interaction frameworks.',
    'As a Dutch citizen and fluent speaker of English, Dutch and Serbian, I have worked extensively with Dutch 🇳🇱, American 🇺🇸 and British 🇬🇧 customers.',
    'My journey began in Serbia, integrating traditional IPTV systems, and took me to the Netherlands where I did cloud development and DevOps for Liberty Global OTT streaming platform. From there, I ventured into development of AI-human interaction in Amelia AI framework, development of data processing frameworks in KPN, and I now do full-stack development using React, React Native (Expo) and NodeJS.',
    'Generative AI and the extension of AI model capabilities are my current learning focus. I am exploring how to leverage them to build better solutions. See my <a href="https://github.com/dexpetkovic" target="_blank" class="text-blue-700">GitHub repository</a> for more details on <a href="https://github.com/dexpetkovic/brAIn-demo" target="_blank" class="text-blue-700">agentic usage with MCP servers</a>.',
    'I spend my free time with family, learning Dutch, exploring emerging technologies and taking care of my health via balanced diet and strenght training.',
    'And as a Dutchman, I ride kids to school in our Urban Arrow bakfiets (cargobike) - so fun and "gezellig" 🎉 (joyful in Dutch)',
  ],
  experiences: [
    {
      from: '2024-09-01',
      to: '2025-05-01',
      role: 'Expert Software Engineer',
      company: 'Totally Gifts',
      summary:
        'Helping out to build a new gift redemption platform for <a href="https://app.live.totallygiftcards.com" target="_blank" class="text-blue-700">Totally Gifts</a>, fully from scratch.',
      keyTakeaway: 'Development of a greenfield project with a new tech stack, from scratch',
      highlights: [
        'Applied genAI to generate images and videos for the platform (Replicate, HuggingFace, OpenAI)',
        'NextJS, TailwindCSS, Clerk, Sentry, NestJS, PostgreSQL, Docker, AWS have been used to build the solution.',
        'Event-driven architecture was used to capture gift card events and process them in real-time',
        'I contributed across the stack, collaborating closely with a cross-functional team of three engineers, a designer, and a product owner',
      ],
    },
    {
      from: '2023-11-01',
      to: '2024-09-01',
      role: 'Lead Fullstack Software Engineer',
      company: 'Grndhouse',
      summary:
        'Team lead managing a team of 5 backend and frontend developers on <a href="https://grndhouse.com" target="_blank" class="text-blue-700">Grndhouse</a>. Grndhouse is a platform for on-demand strength training.',
      keyTakeaway: 'Taking regular meetings with stakeholders to streamline the development of features for the initial MVP of Grndhouse, including video streaming, payment processing, and user management.',
      highlights: [
        'Architected and engineered solutions in React Native, NodeJS and AWS',
        'Mentored junior developers, resolved blockers, and ensured timely project delivery',
        'Used a wide array of modern tools and services, such as Sentry for events monitoring, RevenueCat for payments, Mixpanel for analytics',
        'Used Expo to manage App lifecycle and deployments without App Store and Play store releases (but also with them when needed)',
      ],
    },
    {
      from: '2021-12-01',
      to: '2023-11-01',
      role: 'Fullstack Software Engineer',
      company: 'Fertifa',
      summary: 'Individual contributor and then a team lead, managing a team of 5 backend and frontend developers on <a href="https://fertifa.com" target="_blank" class="text-blue-700">Fertifa</a>. Fertifa is Europe\'s most comprehensive reproductive healthcare provider.',
      keyTakeaway: 'Development of features for Fertifa, defining the features together with the product owner and stakeholders, mentoring the team.',
      highlights: [
        'Engineered solutions in React Native, NodeJS and AWS',
        'Used a wide array of modern tools and services, such as Sentry for events monitoring, Strapi for content management, Google Analytics, Meta Pixel, Drip, Amplitude for analytics',
        'Manually managed App lifecycle and deployments',
      ],
    },
    {
      from: '2018-05-01',
      to: '2021-12-01',
      role: 'Senior Software Engineer, Batch and Streaming Data',
      company: 'KPN Technium B.V',
      summary: '',
      keyTakeaway:
        'This role was a deep dive into data platforms and taught me the intricacies of transformation to a data driven company',
      highlights: [
        'Senior engineer in a team developing ETL automation framework and platform in Azure, based on Hadoop & Kafka ecosystem, automated by Terraform',
        'The rendering framework was built with Python, Flask and SQLAlchemy',
        'I led a part of story mapping for migration of on-premise data platform services to Azure. Built automation for deploying services on Azure Kubernetes cluster',
        'Development of distributed event sourcing application for “real-time” analysis of KPN customer journey where multiple touchpoints are combined, analyzed and visualized',
        'Scala stack with Akka/Alpakka is used to build microservices and Flink applications',
        'Utilizing DevOps methodology with fully automated CI/CD, monitoring and alerting',
      ],
    },
    {
      from: '2017-02-01',
      to: '2018-05-01',
      role: 'Software Engineer, Cognitive Implementation',
      company: 'IPsoft B.V.',
      summary: '',
      keyTakeaway:
        "This role enabled me to learn much more about machine learning, prompt engineering and making data-driven decisions. Led a team that automated Vodafone's customer service agents using Amelia AI framework.",
      highlights: [
        'As technical lead of a 3-member agile team I was responsible for development of human-machine interaction on artificial intelligence framework <a href="https://amelia.ai/" target="_blank" class="text-blue-700">Amelia</a>.',
        'Focused on hands-on development, code reviewing, mentoring and Scrum rituals',
        'The role included managing business requirements and solution architecting',
        'Development was done mostly in Groovy/Python and in Java',
        'The technical stack included Kafka, Camel, Mule, ElasticSearch, Spring, Grails, Docker',
        'Data analysis with Pandas, Jupyter and visualisation with d3.js, and making new features (or refactoring) decisions from the insights',
      ],
    },
    {
      from: '2012-06-01',
      to: '2017-01-01',
      role: 'Senior System Engineer',
      company: 'Liberty Global B.V.',
      summary:
        'As member of <a href="https://www.libertyglobal.com/" target="_blank" class="text-blue-700">Liberty Global</a> <a href="https://www.ziggogo.tv/" target="_blank" class="text-orange-500">OTT streaming</a> solution architecture & engineering team, I gained deep experience in combining software and system engineering to solve complex infrastructure challenges',
      keyTakeaway:
        'Through work with high availability services I acquired deep knowledge of web and backend application design, streaming technologies, HA scalable infrastructure, AWS cloud and full stack network protocols',
      highlights: [
        'I developed AWS (micro)services infrastructure, worked on the CDN content delivery system, Adobe AEM and their integration',
        'Data analysis with Jupyter, Wireshark, Conviva, Omniture',
        'Performing code reviews and overall system troubleshooting',
      ],
    },
  ],
  programmingLanguages: ['Typescript', 'Python', 'Scala', 'Groovy', 'Java'],
  frameworks: [
    'React Native',
    'ReactJS',
    'Strapi',
    'Spring',
    'Flask',
    'pandas',
    'Akka',
    'Protobuf/Avro',
    'Camel',
    'Jenkins (CI/CD)',
    'Terraform (Infrastructure as Code)',
    'Git (version control)',
  ],
  softwarePlatforms: [
    ' AWS',
    ' Azure',
    ' Kubernetes',
    ' Docker',
    ' Kafka',
    ' Spark/Databricks',
    ' Flink',
    ' MuleSoft',
    ' apache/nginx',
    ' Linux',
    ' Wireshark',
  ],
  languages: ['English (Proficient)', 'Dutch (Proficient, NT2)', 'Serbian (Proficient)', 'German (Intermediate)', 'Russian (Intermediate)'],
  other: {
    softwareEngineering: {
      learningNext: [
        'Leveraging Expo for rapid mobile app prototyping and deployments',
        'Using AI tools like ChatGPT to accelerate development and decision-making workflows',
      ],
    },
    organizationalToolset: ['Atlassian', 'Jira', 'Confluence', 'Bitbucket'],
    education: [
      {
        duration: '09/2009 – 02/2011',
        degree: 'Masters Course: System Engineering and Radio Communications',
        institution: 'Faculty of Electrical Engineering, University of Belgrade',
        specialization: 'Telecommunications and software engineering',
      },
      {
        duration: '10/2002 – 08/2007',
        degree: 'BSc of Electrical Engineering',
        institution: 'Faculty of Electrical Engineering, University of Belgrade',
        specialization: 'Telecommunications and computer science',
      },
    ],
  },
}
