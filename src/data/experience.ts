export interface TimelineItem {
  role: string
  company: string
  date: string
  description: string
  achievements: Array<string | { text: string; bold?: string[] }>
  tech: string[]
  isCurrent?: boolean
}

export const EXPERIENCE: TimelineItem[] = [
  {
    isCurrent: true,
    role: 'Lead Senior Java / Go Developer · Team Lead',
    company: 'Licensed Digital Banking Platform · Frankfurt (Remote)',
    date: 'Dec 2022 — Present',
    description: 'Leading backend engineering for a licensed card issuing platform serving 20M+ cardholders across multiple markets.',
    achievements: [
      'Led full migration of <strong>1M+ cardholders</strong> between issuing banks — zero downtime, full regulatory compliance',
      'Architected integrations with <strong>Visa</strong> (VTS, Visa Direct), <strong>Mastercard</strong> (MDES, Mastercard Send), <strong>MPGS</strong>, UnionPay and JCB',
      'Built real-time payment processing pipelines handling <strong>10K+ TPS</strong>',
      'Designed bank-to-bank settlement, reconciliation and dispute management pipelines',
      'Implemented <strong>3DS2 authentication</strong>, tokenization, and PCI-DSS compliant card lifecycle management',
      'Integrated core banking systems for ledger, KYC and transaction management',
      'Designed webhook-driven event systems for partner bank onboarding',
      'Lead a team of up to <strong>10 engineers</strong>: architecture, code reviews, hiring and delivery',
      'Introduced AI-assisted engineering: RAG pipelines, LLM integrations and agentic tooling (Bedrock, Vertex AI, Anthropic API)',
    ],
    tech: ['Java 17+', 'Go', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'AWS', 'GCP', 'Kubernetes', 'Docker', 'ArgoCD', 'Camunda', 'Pinecone', 'Bedrock'],
  },
  {
    role: 'Software Engineer, Core Team (Java & Go)',
    company: 'Adobe — Workfront Fusion',
    date: 'Jul 2021 — Jul 2022',
    description: 'Core backend engineer on the workflow automation platform connecting 200+ enterprise applications.',
    achievements: [
      'Led design and implementation of production connectors: <strong>Microsoft Outlook, Salesforce, Jira, Workday</strong> and more',
      'Architected connector framework handling <strong>5M+ daily API calls</strong> across customer tenants',
      'Built OAuth2 and API key authentication flows for third-party integrations',
      'Drove <strong>Go adoption</strong> for high-performance microservices alongside the Java codebase',
      'Mentored junior and mid-level engineers, led code reviews and architecture discussions',
      'Collaborated with product and design teams across US, EU and India',
    ],
    tech: ['Java', 'Go', 'Spring Boot', 'JS', 'AWS', 'Docker', 'Kubernetes', 'REST', 'OAuth2', 'PostgreSQL', 'Redis'],
  },
  {
    role: 'Software Engineer II',
    company: 'Adobe — Workfront Fusion',
    date: 'Feb 2021 — Jul 2021',
    description: 'Backend and DevOps on the Fusion integration platform.',
    achievements: [
      'Reduced deployment time from <strong>4 hours to 20 minutes</strong> through CI/CD automation',
      'Rewrote critical legacy Java services — <strong>60% faster responses</strong>',
      'Owned the DevOps lifecycle: Jenkins pipelines, Docker, AWS infrastructure, monitoring',
      'Implemented feature toggles, A/B testing infrastructure and canary deployments',
    ],
    tech: ['Java', 'Go', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Kafka', 'Terraform'],
  },
  {
    role: 'Software Engineer → Software Engineer II',
    company: 'Adobe Workfront',
    date: 'Dec 2017 — Feb 2021',
    description: 'Backend engineer on Workfront — an enterprise work management platform processing millions of daily requests.',
    achievements: [
      'Led disaggregation of the monolith into <strong>30+ independently deployable microservices</strong>',
      'Rewrote legacy Java code — reduced technical debt by 40%, test coverage from 45% to <strong>85%</strong>',
      'Built versioned RESTful APIs with backward compatibility',
      'Optimized high-load PostgreSQL and Oracle queries — reduced p95 latency by <strong>50%</strong>',
      'Enhanced CI/CD with automated testing, SonarQube static analysis and deployment gates',
      'On-call rotations and production incident response',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL', 'Oracle', 'React', 'Jenkins', 'Docker', 'SonarQube', 'DataDog'],
  },
  {
    role: 'Software Engineer / Java',
    company: 'Webb Fontaine',
    date: 'Oct 2016 — Dec 2017',
    description: 'Customs and trade automation for governments across 10+ countries.',
    achievements: [
      'Developed Java automation frameworks for customs declaration processing and trade compliance',
      'Built financial modules for duty calculation, tariff classification and revenue management',
      'Integrated with government regulatory systems and cross-border data exchange protocols',
      'Designed batch pipelines for high-volume customs transaction data',
    ],
    tech: ['Java', 'Spring', 'REST', 'Oracle DB', 'Linux', 'Maven', 'JUnit'],
  },
  {
    role: 'Software Engineer',
    company: 'IBM ISTC',
    date: 'Mar 2016 — Oct 2016',
    description: "Built FoodMiX — an AI-powered recipe recommendation startup, inside IBM's startup incubator.",
    achievements: [
      'Full-stack app suggesting recipes from available ingredients using ML-based scoring',
      'REST services for ingredient matching, recipe scoring and preference learning',
      'Ingestion pipelines normalising <strong>10K+ recipes</strong>',
      'Presented the product at IBM ISTC demo days to investors and mentors',
    ],
    tech: ['Java', 'Spring', 'REST', 'PostgreSQL', 'Linux', 'ML'],
  },
]
