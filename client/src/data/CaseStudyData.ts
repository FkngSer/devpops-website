export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  category: 'DevOps' | 'Web3';
  technologies: string[];
  thumbnailImage: string;
  heroImage: string;
  client: string;
  duration: string;
  year: string;
  challenge: string;
  solution: string;
  results: {
    title: string;
    value: string;
    icon: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
    image?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatarUrl: string;
  };
  nextSteps?: string;
  gallery?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "CloudNative Ecosystem",
    description: "Implemented a complete Kubernetes-based infrastructure for a fintech startup, reducing deployment time by 80%.",
    category: "DevOps",
    technologies: ["Kubernetes", "Terraform", "AWS", "Prometheus", "Grafana", "ArgoCD", "GitHub Actions"],
    thumbnailImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    client: "FinTech Startup",
    duration: "6 months",
    year: "2023",
    challenge: "The client was struggling with slow, manual deployments that took over 8 hours to complete and were prone to human error. Their infrastructure was not scalable enough to handle traffic spikes, resulting in service degradation during peak times. They needed a modern, automated solution that would allow for rapid iterations and reliable scaling.",
    solution: "I designed and implemented a comprehensive Kubernetes-based cloud-native ecosystem on AWS using infrastructure as code (Terraform). The solution included automated CI/CD pipelines with GitHub Actions and ArgoCD for GitOps deployments, comprehensive monitoring with Prometheus and Grafana, and auto-scaling policies to handle traffic fluctuations efficiently.",
    results: [
      {
        title: "Deployment Time",
        value: "80%",
        icon: "rocket"
      },
      {
        title: "Infrastructure Cost",
        value: "40%",
        icon: "dollar"
      },
      {
        title: "Service Availability",
        value: "99.99%",
        icon: "check-circle"
      },
      {
        title: "Incident Resolution",
        value: "65%",
        icon: "clock"
      }
    ],
    process: [
      {
        step: 1,
        title: "Assessment & Architecture Design",
        description: "Conducted a thorough assessment of the existing infrastructure and designed a Kubernetes-based architecture tailored to the client's needs, with a focus on scalability, reliability, and cost-efficiency.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "Infrastructure as Code Implementation",
        description: "Used Terraform to codify the entire AWS infrastructure, ensuring consistency across environments and enabling version-controlled infrastructure changes.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "Kubernetes Cluster Setup & Configuration",
        description: "Deployed and configured EKS clusters with security best practices, RBAC, network policies, and optimized compute resources.",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 4,
        title: "CI/CD Pipeline Implementation",
        description: "Established automated CI/CD pipelines using GitHub Actions for testing and building, and ArgoCD for GitOps-based deployments.",
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 5,
        title: "Monitoring & Observability",
        description: "Implemented a comprehensive monitoring solution with Prometheus for metrics, Grafana for visualization, and Loki for log aggregation.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    testimonial: {
      quote: "The CloudNative ecosystem implemented by this team has been transformative for our business. Our deployment process is now fully automated, and we can focus on developing new features instead of managing infrastructure.",
      author: "Alex Johnson",
      role: "CTO",
      company: "FinTech Innovate",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    nextSteps: "The next phase of the project includes implementing advanced security measures like service mesh with Istio, setting up automated compliance checks, and expanding the observability stack to include distributed tracing with Jaeger.",
    gallery: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "MultiversX NFT Marketplace",
    description: "Designed and implemented the infrastructure for a high-volume NFT marketplace handling 10,000+ daily transactions.",
    category: "Web3",
    technologies: ["MultiversX", "IPFS", "GraphQL", "Node.js", "TypeScript", "AWS", "Terraform"],
    thumbnailImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    client: "Digital Art Collective",
    duration: "8 months",
    year: "2023",
    challenge: "A digital art collective needed a high-performance NFT marketplace on the MultiversX blockchain that could handle 10,000+ daily transactions. They required a system that would provide fast loading times, reliable metadata storage, efficient indexing of blockchain data, and a seamless user experience for artists and collectors.",
    solution: "I designed and implemented a comprehensive infrastructure for the NFT marketplace leveraging MultiversX blockchain for the core functionality, IPFS for decentralized metadata and asset storage, and a GraphQL API layer for efficient data querying. The solution included automated scaling infrastructure on AWS provisioned with Terraform, a robust caching layer, and real-time event processing.",
    results: [
      {
        title: "Daily Transactions",
        value: "10,000+",
        icon: "trending-up"
      },
      {
        title: "Metadata Load Time",
        value: "200ms",
        icon: "zap"
      },
      {
        title: "User Growth",
        value: "300%",
        icon: "users"
      },
      {
        title: "Uptime",
        value: "99.95%",
        icon: "activity"
      }
    ],
    process: [
      {
        step: 1,
        title: "Smart Contract Development",
        description: "Developed and audited secure smart contracts on MultiversX for NFT minting, marketplace functionality, and royalty management.",
        image: "https://images.unsplash.com/photo-1642005354606-a35b4c8ff954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "Decentralized Storage Integration",
        description: "Implemented IPFS integration for reliable, decentralized storage of NFT metadata and digital assets with content addressing.",
        image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "GraphQL API Development",
        description: "Created a performant GraphQL API layer for efficiently querying marketplace data, with optimized resolvers and caching strategies.",
        image: "https://images.unsplash.com/photo-1642005354696-88ffc0b332d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 4,
        title: "Event Processing System",
        description: "Built a real-time event processing system to capture and index blockchain events, enabling fast search and filtering capabilities.",
        image: "https://images.unsplash.com/photo-1658204238967-3a81a814d0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 5,
        title: "Infrastructure Deployment",
        description: "Deployed the solution on AWS using Terraform, with automated scaling, load balancing, and monitoring for high availability.",
        image: "https://images.unsplash.com/photo-1639322537142-c868863236c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    testimonial: {
      quote: "Our NFT marketplace on MultiversX has exceeded all expectations. The infrastructure built by this team has allowed us to scale to thousands of daily transactions while maintaining excellent performance. The integration of IPFS ensures our digital assets are stored securely and persistently.",
      author: "Elena Rodriguez",
      role: "Founder",
      company: "Metaverse Artifacts",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    nextSteps: "Future developments include implementing a cross-chain bridge to enable interoperability with other blockchains like Solana and Base, expanding the analytics dashboard, and developing a mobile application for the marketplace.",
    gallery: [
      "https://images.unsplash.com/photo-1639322537142-c868863236c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1642005354696-88ffc0b332d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1658204238967-3a81a814d0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "CI/CD Pipeline Automation",
    description: "Built a streamlined CI/CD pipeline for a SaaS company, enabling 30+ daily deployments with zero downtime.",
    category: "DevOps",
    technologies: ["GitHub Actions", "Docker", "ArgoCD", "Kubernetes", "Helm", "Terraform", "AWS"],
    thumbnailImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    client: "SaaS Platform Provider",
    duration: "4 months",
    year: "2022",
    challenge: "A rapidly growing SaaS company was struggling with their deployment process which was manual, error-prone, and time-consuming. They were only able to deploy once a week due to the complexity, which slowed down their ability to deliver new features and fix bugs promptly. They needed a modern, automated CI/CD pipeline that would allow for frequent, reliable deployments without service disruption.",
    solution: "I designed and implemented a comprehensive CI/CD pipeline automation solution using GitHub Actions for continuous integration, Docker for containerization, and ArgoCD for GitOps-based deployments to Kubernetes. The solution included infrastructure as code with Terraform, Helm charts for Kubernetes resources, and canary deployments for zero-downtime updates.",
    results: [
      {
        title: "Daily Deployments",
        value: "30+",
        icon: "git-branch"
      },
      {
        title: "Deployment Time",
        value: "85%",
        icon: "clock"
      },
      {
        title: "Deployment Success",
        value: "99.8%",
        icon: "check"
      },
      {
        title: "Developer Productivity",
        value: "60%",
        icon: "code"
      }
    ],
    process: [
      {
        step: 1,
        title: "Workflow Analysis & Design",
        description: "Conducted a thorough analysis of the existing development workflow and designed a new CI/CD pipeline tailored to the team's needs and technical stack.",
        image: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "Infrastructure as Code Implementation",
        description: "Used Terraform to codify the AWS infrastructure, ensuring consistency across environments and enabling version-controlled infrastructure changes.",
        image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "Containerization & Registry Setup",
        description: "Implemented Docker containerization for all services and set up a secure container registry with vulnerability scanning.",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 4,
        title: "CI Pipeline Configuration",
        description: "Configured GitHub Actions workflows for automated testing, building, and tagging of container images upon code changes.",
        image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 5,
        title: "CD Implementation with ArgoCD",
        description: "Set up ArgoCD for GitOps-based deployments to Kubernetes, with automated promotion between environments and rollback capabilities.",
        image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    testimonial: {
      quote: "The CI/CD pipeline automation has been transformative for our development process. We've gone from weekly deployments with frequent issues to multiple daily deployments that are reliable and stress-free. Our developers can now focus on building features instead of managing deployments.",
      author: "Michael Chen",
      role: "VP of Engineering",
      company: "SaaS Innovate",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    nextSteps: "The next phase includes implementing automated security scanning in the CI pipeline, setting up feature flag management for safer deployments, and integrating performance testing to catch resource-intensive changes before they reach production.",
    gallery: [
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Solana Token Tracker",
    description: "Developed a Discord bot for Solana communities, providing real-time alerts, wallet verification and community management.",
    category: "Web3",
    technologies: ["Solana", "Node.js", "Discord.js", "TypeScript", "AWS Lambda", "DynamoDB", "RPC APIs"],
    thumbnailImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    client: "Solana DeFi Protocol",
    duration: "3 months",
    year: "2022",
    challenge: "A Solana-based DeFi protocol needed an efficient way to manage their growing Discord community of token holders, verify wallet ownership, provide real-time alerts for significant token movements, and automate role assignment based on token holdings. Manual verification was time-consuming and susceptible to fraud.",
    solution: "I designed and developed a comprehensive Discord bot that integrates with Solana's blockchain to provide real-time token tracking, secure wallet verification using cryptographic signing, automated role management based on token holdings, and customizable alerts for significant token movements or price changes.",
    results: [
      {
        title: "Verification Time",
        value: "99%",
        icon: "shield"
      },
      {
        title: "Community Growth",
        value: "250%",
        icon: "users"
      },
      {
        title: "Moderation Hours",
        value: "80%",
        icon: "clock"
      },
      {
        title: "Alert Accuracy",
        value: "99.9%",
        icon: "bell"
      }
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Worked closely with the community managers to identify key requirements for verification, alerts, and community management features.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "Solana Integration",
        description: "Implemented robust RPC API integration with Solana blockchain for real-time monitoring of token transactions and wallet verification.",
        image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "Discord Bot Development",
        description: "Developed a Discord bot using Discord.js and TypeScript with a modular architecture for easy feature expansion and maintenance.",
        image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 4,
        title: "Cryptographic Verification",
        description: "Created a secure wallet verification system using cryptographic signatures to prevent fraud and ensure only legitimate token holders gain access.",
        image: "https://images.unsplash.com/photo-1563462479775-e9e7dfbf7d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 5,
        title: "Serverless Deployment",
        description: "Deployed the solution using AWS Lambda and DynamoDB for scalable, cost-efficient operation with high availability.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    testimonial: {
      quote: "The Solana Token Tracker bot has revolutionized our community management. What used to take hours of manual verification now happens automatically and securely. Our community members love the real-time alerts and transparent token tracking features.",
      author: "Sarah Williams",
      role: "Community Lead",
      company: "Solana DeFi Protocol",
      avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    nextSteps: "Future development includes integrating additional Solana data sources, creating a web dashboard for analytics, implementing governance voting features, and expanding alert customization options.",
    gallery: [
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 5,
    title: "Observability Platform",
    description: "Created a comprehensive monitoring solution for a microservices architecture, reducing incident response time by 65%.",
    category: "DevOps",
    technologies: ["Prometheus", "Grafana", "ELK Stack", "OpenTelemetry", "AWS", "Terraform", "Kubernetes"],
    thumbnailImage: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    client: "E-commerce Platform",
    duration: "5 months",
    year: "2023",
    challenge: "A growing e-commerce platform with a microservices architecture was experiencing frequent outages and performance issues that were difficult to diagnose. Their existing monitoring solutions were siloed, lacking integration, and providing limited visibility. They needed a comprehensive observability platform to quickly identify, diagnose, and resolve issues.",
    solution: "I designed and implemented an integrated observability platform covering all three pillars: metrics with Prometheus, logs with ELK Stack, and traces with OpenTelemetry. The solution included custom dashboards in Grafana, automated alerting with PagerDuty integration, and a centralized view of system health for rapid troubleshooting.",
    results: [
      {
        title: "Incident Response Time",
        value: "65%",
        icon: "zap"
      },
      {
        title: "Mean Time to Resolution",
        value: "70%",
        icon: "clock"
      },
      {
        title: "Service Uptime",
        value: "99.95%",
        icon: "trending-up"
      },
      {
        title: "False Alerts",
        value: "85%",
        icon: "bell-off"
      }
    ],
    process: [
      {
        step: 1,
        title: "Assessment & Architecture Design",
        description: "Conducted a comprehensive assessment of the existing systems and designed a unified observability architecture covering metrics, logs, and traces.",
        image: "https://images.unsplash.com/photo-1536749300561-1e958126c68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "Metrics Collection Implementation",
        description: "Deployed Prometheus for metrics collection with custom exporters for all services, and set up effective metric retention policies.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "Centralized Logging",
        description: "Implemented ELK Stack (Elasticsearch, Logstash, Kibana) for centralized log collection and analysis with structured logging standards.",
        image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 4,
        title: "Distributed Tracing",
        description: "Integrated OpenTelemetry for distributed tracing across services, enabling end-to-end visibility of request flows.",
        image: "https://images.unsplash.com/photo-1551288049-3ab5a666bc41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 5,
        title: "Dashboard & Alert Configuration",
        description: "Created custom Grafana dashboards for different teams and configured intelligent alerting with PagerDuty integration.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    testimonial: {
      quote: "The observability platform has transformed our operations. We can now identify and resolve issues in minutes that used to take hours. The unified view across metrics, logs, and traces has given us unprecedented visibility into our systems.",
      author: "David Thompson",
      role: "Head of Platform Engineering",
      company: "ShopScale",
      avatarUrl: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    nextSteps: "The next phase of the project includes implementing advanced anomaly detection using machine learning, extending the observability platform to cover more business metrics, and setting up automated remediation for common issues.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 6,
    title: "Cross-Chain DeFi Platform",
    description: "Engineered the backend infrastructure for a cross-chain DeFi protocol connecting MultiversX, Solana, Base, and TON.",
    category: "Web3",
    technologies: ["MultiversX", "Solana", "Base", "TON", "Rust", "TypeScript", "AWS", "Terraform", "GraphQL"],
    thumbnailImage: "https://images.unsplash.com/photo-1560732488-7b5f4d54f584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1560732488-7b5f4d54f584?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    client: "DeFi Protocol Startup",
    duration: "10 months",
    year: "2023",
    challenge: "A DeFi startup wanted to create a cross-chain liquidity protocol that would allow assets to flow seamlessly between MultiversX, Solana, Base, and TON blockchains. They needed a reliable, secure infrastructure that could handle complex cross-chain transactions, ensure atomic execution, and provide a unified interface for users regardless of the underlying blockchain.",
    solution: "I designed and built a comprehensive cross-chain infrastructure using a combination of blockchain-specific adapters, a unified GraphQL API, and secure bridge protocols. The solution included real-time monitoring of cross-chain transactions, automated reconciliation processes, and a scalable AWS infrastructure provisioned with Terraform.",
    results: [
      {
        title: "Cross-Chain Tx Time",
        value: "2 min",
        icon: "zap"
      },
      {
        title: "Protocol TVL Growth",
        value: "500%",
        icon: "trending-up"
      },
      {
        title: "Transaction Success",
        value: "99.7%",
        icon: "check"
      },
      {
        title: "Unique Users",
        value: "10k+",
        icon: "users"
      }
    ],
    process: [
      {
        step: 1,
        title: "Cross-Chain Architecture Design",
        description: "Designed a modular cross-chain architecture with blockchain-specific adapters and a unified transaction protocol.",
        image: "https://images.unsplash.com/photo-1609151376730-f246ec0b99e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 2,
        title: "Blockchain Integration",
        description: "Developed integrations with MultiversX, Solana, Base, and TON blockchains, including their respective smart contract systems.",
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 3,
        title: "Secure Bridge Implementation",
        description: "Built a secure bridge protocol with multi-signature validation, fraud-proof systems, and liquidity management.",
        image: "https://images.unsplash.com/photo-1535959388431-9bf7722b97fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 4,
        title: "API & Indexing Layer",
        description: "Developed a GraphQL API and indexing system to provide a unified interface and fast access to cross-chain data.",
        image: "https://images.unsplash.com/photo-1644368759069-2ed958cf1a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        step: 5,
        title: "Monitoring & Alert System",
        description: "Implemented comprehensive monitoring and alerting for cross-chain transactions, with automated reconciliation for edge cases.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    testimonial: {
      quote: "The cross-chain DeFi platform has exceeded our expectations. The ability to seamlessly move assets between MultiversX, Solana, Base, and TON blockchains has opened up entirely new possibilities for our protocol. The infrastructure is rock-solid and has scaled effortlessly with our growing user base.",
      author: "Jason Kim",
      role: "Co-founder",
      company: "CrossChainDeFi",
      avatarUrl: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    nextSteps: "The future roadmap includes adding support for additional blockchains like Bitcoin and integrating with more DeFi protocols across these chains to expand the liquidity network. We're also exploring implementing zero-knowledge proofs for enhanced security and privacy.",
    gallery: [
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1644368759069-2ed958cf1a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560732488-7b5f4d54f584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];