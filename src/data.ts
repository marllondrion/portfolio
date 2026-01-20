export const content = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Journey",
            skills: "Expertise",
            education: "Education",
            contact: "Contact"
        },
        hero: {
            greeting: "Senior Full Stack Software Engineer",
            name: "Marllon Drion",
            title: "Architecting Scalable Enterprise Solutions",
            subtitle: "14+ years architecting mission-critical software across energy infrastructure, omnichannel e-commerce, and enterprise systems. Specialised in system integration at scale, regulatory compliance, DevOps automation, and technical leadership.",
            cta_primary: "Explore Journey",
            cta_secondary: "Get in Touch",
            bg_image_title: "Core Expertise"
        },
        about: {
            title: "About Me",
            description: "Senior Full Stack Software Engineer and Systems Architect based in Brisbane with 14+ years of progressive experience across Australia and Brazil. Specialised in designing scalable, mission-critical solutions spanning e-commerce infrastructure, renewable energy systems, and enterprise platforms. Expert in third-party system integration, regulatory compliance (PCI DSS, energy sector standards), DevOps automation, and technical team leadership.",
            achievements: "Key Achievements",
            objectives: "Strategic Vision",
            achievements_list: [
                "Architected omnichannel e-commerce platform integrating 25+ third-party systems (POS, payment gateways, couriers, marketplaces) serving 2,000+ independent retailers across Australia and New Zealand.",
                "Reduced mobile development cycle by 50% through strategic migration from native iOS/Android to unified Flutter/Dart framework, enabling single codebase across platforms.",
                "Optimised deployment efficiency by 85% for 40+ enterprise clients via comprehensive GitHub Actions CI/CD pipeline automation and hotfix deployment strategies.",
                "Led PCI DSS compliance transformation across payment processing infrastructure, implementing secure data handling, encryption protocols, and audit frameworks supporting 2,000+ retailers.",
                "Designed renewable energy grid integration systems managing on-grid solar/wind networks for Brazilian utilities serving 18 million customers across 774 municipalities.",
                "Delivered 25% software performance improvements on legacy energy-sector systems through optimisation, profiling, and algorithmic refactoring.",
                "Aggregated and unified recruitment data from 30+ diverse websites into centralised HR system, reducing time-to-hire and improving candidate visibility."
            ],
            objectives_list: [
                "Obtain Azure certifications (AZ-900, AZ-204) and deepen cloud architecture expertise to strengthen enterprise cloud infrastructure design capabilities.",
                "Advance toward Software Architect certification (TOGAF or equivalent) and establish thought leadership in system design and enterprise architecture.",
                "Lead architectural design of globally distributed microservices and event-driven architectures on AWS and Azure, specialising in system resilience and observability.",
                "Deepen expertise in cloud-native AI integrations and real-time data processing systems for next-generation web and mobile products.",
                "Establish technical leadership as software architect and team mentor, elevating code quality standards, architectural rigour, and delivery excellence across engineering organisations."
            ]
        },
        experience: {
            title: "JOURNEY",
            subtitle: "Professional Journey",
            items: [
                {
                    company: "Myfoodlink",
                    website: "https://myfoodlink.com.au",
                    role: "Senior Full Stack Software Developer",
                    period: "12/2021 - 12/2025",
                    location: "Hobart, Australia",
                    bullets: [
                        "Led end-to-end platform development for B2B2C e-commerce SaaS serving 2,000+ independent grocery and liquor retailers across Australia and New Zealand, managing omnichannel retail infrastructure and quick-commerce operations.",
                        "Architected and delivered 25+ third-party integrations spanning 10+ POS systems, 10+ payment gateways (loyalty, gift cards), 5+ courier services (Uber Direct, DoorDash, Drive Yello), and major marketplaces (DoorDash, Uber Eats, Menulog), unifying physical and online retail operations.",
                        "Designed RESTful APIs and webhook-based event architecture enabling asynchronous processing and decoupled third-party system communication; implemented integration error handling, retry logic, and data transformation layers.",
                        "Engineered backend services using Ruby on Rails with MongoDB for high-throughput order management and real-time inventory synchronisation across 2,000+ retailer deployments.",
                        "Developed Vue.js frontend dashboards enabling store managers to configure product catalogues, manage marketplace presence, monitor orders, and track delivery in real-time.",
                        "Led PCI DSS compliance implementation across all payment-related features; architected secure payment flows, data encryption, tokenisation, and audit frameworks enabling 2,000+ retailers to process payments securely.",
                        "Championed mobile strategy: migrated platform-specific native iOS/Android codebase to unified Flutter/Dart framework, reducing code duplication by 50% and accelerating feature delivery.",
                        "Designed comprehensive GitHub Actions CI/CD pipeline automating pull-request checks, testing, multi-stage deployments, and hotfix procedures; reduced mobile deployment lead time by 70% and optimised app deployment for 40+ clients by 85%.",
                        "Conducted technical design reviews and code audits; mentored junior developers on architectural patterns, system design, and integration best practices.",
                        "Managed production incident response and deployed hotfixes to maintain platform stability and service continuity across distributed retailer deployments."
                    ],
                    tech: ["Ruby on Rails", "Flutter/Dart", "MongoDB", "Vue.js", "GitHub Actions", "RESTful APIs", "Webhooks", "PCI DSS", "AWS (EC2, RDS, S3, Lambda)", "Redis", "Domain-Driven Design"]
                },
                {
                    company: "Syntagium Consulting",
                    website: "https://syntagium.com.au",
                    role: "Senior Full Stack Software Engineer",
                    period: "10/2021 - 01/2022",
                    location: "Sydney, Australia",
                    bullets: [
                        "Delivered enterprise application days ahead of schedule on 3-month contract, exceeding client expectations and enabling earlier go-live.",
                        "Architected layered enterprise application using C# ASP.NET Core 3.1 with MVC pattern, ensuring clear separation between presentation, business logic, and data access layers.",
                        "Applied Domain-Driven Design principles to model complex business domains; designed aggregate roots, bounded contexts, and ubiquitous language reflecting client organisational structure.",
                        "Designed and implemented RESTful APIs with semantic HTTP methods, proper status codes, error handling, and validation; ensured consistency with enterprise integration patterns.",
                        "Implemented Entity Framework Core ORM with query optimisation, lazy loading, and selective data loading strategies for performance-critical operations.",
                        "Achieved >80% code coverage through comprehensive unit and integration testing using xUnit; enforced architectural standards through code review and technical governance.",
                        "Collaborated in Agile sprints, contributing to planning, estimation, and continuous delivery; coordinated with product stakeholders to clarify requirements and validate system behaviour."
                    ],
                    tech: ["C#", "ASP.NET Core 3.1", "Entity Framework Core", "DDD", "xUnit", "REST APIs", "SQL Server", "Agile/Scrum"]
                },
                {
                    company: "Staffing Group",
                    website: "https://staffing.com.au",
                    role: "Software Engineer",
                    period: "04/2021 - 06/2021",
                    location: "Melbourne, Australia",
                    bullets: [
                        "Developed HR management and recruitment systems aggregating candidate data from 30+ diverse websites and recruitment platforms into unified candidate management interface.",
                        "Designed .NET/C# backend services consuming and normalising data from heterogeneous sources (job boards, applicant tracking systems, social media), implementing deduplication and entity resolution logic.",
                        "Built AngularJS frontend enabling HR managers to search, filter, and manage aggregated candidate pools; implemented responsive user interfaces and form validation.",
                        "Implemented comprehensive data validation and error handling ensuring data quality and consistency across 30+ integration sources; performed systematic root cause analysis on integration failures.",
                        "Optimised query performance for large candidate datasets through database indexing strategies and caching mechanisms; improved system reliability through extensive testing and debugging."
                    ],
                    tech: [".NET", "C#", "AngularJS", "SQL Server", "Data Integration", "Testing/Debugging"]
                },
                {
                    company: "Axxiom - Technology and Innovation",
                    website: "https://www.axxiom.com.br",
                    role: "Programming Analyst | Researcher",
                    period: "12/2020 - 04/2021",
                    location: "Belo Horizonte, Brazil",
                    bullets: [
                        "Contributed to mission-critical renewable energy grid integration systems managing on-grid solar/wind networks for Brazilian electricity distribution sector (serving 18 million customers).",
                        "Designed .NET backend services monitoring renewable energy generation, managing power distribution, and optimising grid stability; implemented energy flow calculations and grid balancing algorithms.",
                        "Integrated with SCADA systems and grid monitoring infrastructure; handled real-time energy data streams and implemented dashboard interfaces displaying generation metrics and renewable energy contribution.",
                        "Increased monitoring efficiency by 30% through enhanced system functionalities, real-time analytics, and predictive alerting capabilities; enabled grid operators to detect anomalies faster and respond to instability.",
                        "Ensured compliance with Brazilian energy sector regulations (ANEEL standards, grid operator requirements); created technical documentation and provided ongoing support for deployed solutions."
                    ],
                    tech: [".NET", "C#", "SQL Server", "SCADA Integration", "Real-time Data Processing", "Energy Sector Compliance", "MPS.Br Level C (CMMI Level 2)"]
                },
                {
                    company: "Axxiom - Technology and Innovation",
                    website: "https://www.axxiom.com.br",
                    role: "Software Developer Analyst | Researcher",
                    period: "04/2014 - 11/2016",
                    location: "Belo Horizonte, Brazil",
                    bullets: [
                        "Participated in R&D projects building production software for electricity sector automation and compliance; developed systems directly for CEMIG (serving 18 million customers across 774 municipalities).",
                        "Architected full-stack web applications using ASP.NET MVC, NHibernate, and SQL Server; designed domain models, database schemas, and business logic reflecting complex energy management workflows.",
                        "Designed and maintained legal process management system automating workflows, ensuring regulatory compliance, and implementing audit trails for enterprise client requirements.",
                        "Implemented Java EE applications using JSF, Spring Web Flow, and Hibernate; developed PrimeFaces-based rich user interfaces with AJAX for dynamic real-time interactions.",
                        "Led comprehensive performance optimisation initiative: identified database bottlenecks through profiling, implemented query optimisation, multi-level caching strategies, and algorithmic improvements, achieving 25% overall performance gain.",
                        "Collaborated with business analysts, legal domain experts, and utility company operators to validate system behaviour and gather operational feedback."
                    ],
                    tech: ["ASP.NET MVC", "Java EE", "JSF", "Spring Web Flow", "NHibernate", "Hibernate", "SQL Server", "PrimeFaces", "AJAX", "Performance Optimisation"]
                },
                {
                    company: "Flag Intelliwan",
                    website: "https://www.flag.com.br",
                    role: ".NET C# Software Developer",
                    period: "04/2013 - 03/2014",
                    location: "Belo Horizonte, Brazil",
                    bullets: [
                        "Developed logistics and distribution software for major Brazilian distributors and manufacturers, supporting supply chain optimisation and operational efficiency.",
                        "Designed C# and .NET business logic implementing supply chain workflows (inventory management, order fulfilment, route optimisation, shipment tracking).",
                        "Collaborated with logistics domain experts to validate system behaviour against real-world supply chain requirements; optimised database queries and indexing for high-transaction-volume operations."
                    ],
                    tech: [".NET Framework", "C#", "SQL Server", "Logistics Domain"]
                },
                {
                    company: "TSA (Automation Systems Technology)",
                    website: "https://www.tsatec.com.br",
                    role: ".NET C# Junior Software Engineer",
                    period: "10/2012 - 04/2013",
                    location: "Belo Horizonte, Brazil",
                    bullets: [
                        "Supported development of automation and control systems for energy-intensive industries (mining, energy, oil & gas, steel); learned industrial automation domain and systems thinking.",
                        "Developed C# and .NET software implementing automation logic and operational monitoring for complex industrial environments."
                    ],
                    tech: [".NET Framework", "C#", "Industrial Automation"]
                },
                {
                    company: "TechBiz IT",
                    website: "https://www.techbizit.com.br",
                    role: "Software Developer and QA Tester (.NET C# & Selenium IDE)",
                    period: "10/2011 - 10/2012",
                    location: "Nova Lima, Brazil",
                    bullets: [
                        "Developed and tested custom software solutions for public sector and enterprise clients; used Selenium IDE and .NET to improve application quality and regression coverage.",
                        "Gained foundational experience in object-oriented design, relational databases, and enterprise software development practices."
                    ],
                    tech: [".NET Framework", "C#", "Selenium IDE", "QA Testing"]
                },
                {
                    company: "Direcional Engineering",
                    website: "https://www.direcional.com.br",
                    role: "Software Developer (Java)",
                    period: "08/2010 - 08/2011",
                    location: "Belo Horizonte, Brazil",
                    bullets: [
                        "Developed Java-based applications as part of in-house engineering software team; established foundational experience in object-oriented design, databases, and enterprise development.",
                        "Contributed to engineering software solutions for construction and project management domain."
                    ],
                    tech: ["Java", "SQL", "Object-Oriented Design"]
                }
            ]
        },
        skills: {
            title: "Core Expertise",
            categories: [
                {
                    name: "Backend Architecture & Design",
                    list: ["C#", ".NET Core/.NET Framework", "Ruby on Rails", "Java/Spring", "ASP.NET MVC", "Domain-Driven Design (DDD)", "SOLID Principles", "Clean Architecture", "Onion Architecture", "RESTful API Design", "Microservices Patterns", "System Integration Architecture"]
                },
                {
                    name: "Frontend & Mobile",
                    list: ["Vue.js", "React", "Angular/AngularJS", "Flutter/Dart", "HTML5/CSS3", "JavaScript/TypeScript", "Responsive Design", "Cross-Platform Development"]
                },
                {
                    name: "Data & Persistence",
                    list: ["PostgreSQL", "Microsoft SQL Server", "MySQL", "MongoDB", "Entity Framework", "NHibernate", "Hibernate", "JPA", "Data Modelling", "Query Optimisation", "Caching Strategies"]
                },
                {
                    name: "Integration & APIs",
                    list: ["Third-Party API Integration", "Webhook Architecture", "OAuth 2.0 / JWT", "API Gateway Patterns", "Multi-Source Data Aggregation", "Payment Gateway Integration", "SCADA Systems", "Event-Driven Architecture"]
                },
                {
                    name: "Cloud & DevOps",
                    list: ["AWS (EC2, Lambda, S3, RDS, EventBridge)", "Azure (VMs, Functions, Blob Storage, Event Grid)", "GitHub Actions", "CI/CD Pipeline Design", "Docker", "Terraform", "Infrastructure-as-Code", "Deployment Automation", "Git/GitHub"]
                },
                {
                    name: "Security & Compliance",
                    list: ["PCI DSS Compliance", "Secure Payment Processing", "Data Encryption", "OAuth 2.0", "Regulatory Compliance (Energy Sector)", "Security Auditing", "Secure API Design", "Compliance Frameworks", "ITIL Principles"]
                },
                {
                    name: "Professional & Leadership",
                    list: ["Systems Architecture", "Technical Leadership", "Code Review & Mentoring", "Team Collaboration", "Performance Optimisation", "Problem Solving", "Technical Documentation", "Agile/Scrum", "Cross-Functional Communication", "MPS.Br", "CMMI", "SOLID Design Principles"]
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    degree: "Master of Information Technology (Software Development)",
                    institution: "University of Southern Queensland",
                    period: "09/2025 - Present",
                    location: "Online Delivery, Australia"
                },
                {
                    degree: "Advanced Diploma in Information Technology",
                    institution: "Royal Gurkhas Institute of Technology (RGIT)",
                    period: "04/2020 - 10/2021",
                    location: "Melbourne, Australia"
                },
                {
                    degree: "Bachelor's Degree in Computer Information Systems",
                    institution: "Newton Paiva University Centre",
                    period: "2010 - 2013",
                    location: "Belo Horizonte, Brazil"
                }
            ]
        },
        contact: {
            title: "Let's build",
            subtitle: "something elite.",
            links: [
                { label: "marllondrion@gmail.com", type: "email", icon: "", href: "mailto:marllondrion@gmail.com" },
                { label: "+61 0410 389 445", type: "phone", icon: "", href: "tel:+61410389445" },
                { label: "LinkedIn", type: "social", icon: "", href: "https://linkedin.com/in/marllondrion" },
                { label: "GitHub", type: "social", icon: "", href: "https://github.com/marllondrion" }
            ]
        }
    },
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            experience: "Trajetória",
            skills: "Expertise",
            education: "Educação",
            contact: "Contato"
        },
        hero: {
            greeting: "Engenheiro de Software Sênior",
            name: "Marllon Drion",
            title: "Arquitetando Soluções Corporativas Escaláveis",
            subtitle: "14+ anos arquitetando software em infraestrutura de energia, e-commerce omnichannel e sistemas corporativos. Especializado em integração de sistemas em escala, conformidade regulatória, automação DevOps e liderança técnica.",
            cta_primary: "Ver Trajetória",
            cta_secondary: "Contato",
            bg_image_title: "Expertise Principal"
        },
        about: {
            title: "Sobre Mim",
            description: "Engenheiro de Software Sênior e Arquiteto de Sistemas com 14+ anos de experiência progressiva em Brasil e Austrália. Especializado em projetar soluções escaláveis e críticas para infraestrutura de energia renovável, plataformas de e-commerce omnichannel e sistemas corporativos. Especialista em integração de sistemas terceirizados, conformidade regulatória (PCI DSS, padrões do setor energético), automação DevOps e liderança técnica de equipes.",
            achievements: "Principais Conquistas",
            objectives: "Visão Estratégica",
            achievements_list: [
                "Arquitetei plataforma de e-commerce omnichannel integrando 25+ sistemas terceirizados (PDV, gateways de pagamento, entregadores, marketplaces) servindo 2.000+ varejistas independentes na Austrália e Nova Zelândia.",
                "Redução de 50% no ciclo de desenvolvimento mobile através de migração estratégica de iOS/Android nativo para framework unificado Flutter/Dart, possibilitando código único entre plataformas.",
                "Otimizei eficiência de deploy em 85% para 40+ clientes corporativos via pipeline CI/CD abrangente em GitHub Actions e estratégias de hotfix deployment.",
                "Liderei transformação de conformidade PCI DSS em infraestrutura de processamento de pagamentos, implementando data handling seguro, protocolos de criptografia e frameworks de auditoria para 2.000+ varejistas.",
                "Projetei sistemas de integração de rede de energia renovável gerenciando redes solares/eólicas on-grid para utilidades brasileiras servindo 18 milhões de clientes em 774 municípios.",
                "Entreguei melhorias de 25% na performance de software em sistemas legados do setor energético através de otimização, profiling e refatoração algorítmica.",
                "Agregui e unifiquei dados de recrutamento de 30+ websites diversos em sistema centralizado de RH, reduzindo time-to-hire e melhorando visibilidade de candidatos."
            ],
            objectives_list: [
                "Obter certificações Azure (AZ-900, AZ-204) e aprofundar expertise em arquitetura cloud para fortalecer capacidades de design de infraestrutura cloud corporativa.",
                "Avançar rumo à certificação de Arquiteto de Software (TOGAF ou equivalente) e estabelecer liderança intelectual em design de sistemas e arquitetura corporativa.",
                "Liderar design arquitetural de microsserviços distribuídos globalmente e arquiteturas orientadas a eventos em AWS e Azure, especializando-me em resiliência e observabilidade de sistemas.",
                "Aprofundar expertise em integrações cloud-native de IA e sistemas de processamento de dados em tempo real para produtos web e mobile de próxima geração.",
                "Estabelecer liderança técnica como arquiteto de software e mentor de equipes, elevando padrões de qualidade de código, rigor arquitetural e excelência de entrega em organizações de engenharia."
            ]
        },
        experience: {
            title: "TRAJETÓRIA",
            subtitle: "Trajetória Profissional",
            items: [
                {
                    company: "Myfoodlink",
                    website: "https://myfoodlink.com.au",
                    role: "Engenheiro de Software Full Stack Sênior | Arquiteto de Integração",
                    period: "12/2021 - 12/2025",
                    location: "Hobart, Austrália",
                    bullets: [
                        "Liderei desenvolvimento end-to-end da plataforma B2B2C SaaS de e-commerce servindo 2.000+ varejistas independentes de supermercados e bebidas na Austrália e Nova Zelândia, gerenciando infraestrutura de varejo omnichannel e operações de quick-commerce.",
                        "Arquitetei e entreguei 25+ integrações terceirizadas abrangendo 10+ sistemas de PDV, 10+ gateways de pagamento (fidelidade, gift cards), 5+ serviços de entrega (Uber Direct, DoorDash, Drive Yello) e marketplaces principais (DoorDash, Uber Eats, Menulog), unificando operações de varejo físico e online.",
                        "Projetei APIs RESTful e arquitetura orientada a eventos baseada em webhooks possibilitando processamento assíncrono e comunicação desacoplada entre sistemas terceirizados; implementei camadas de tratamento de erros, retry logic e transformação de dados.",
                        "Engenheiro de serviços backend usando Ruby on Rails com MongoDB para gerenciamento de pedidos de alto throughput e sincronização de inventário em tempo real em 2.000+ deployments de varejistas.",
                        "Desenvolvi dashboards frontend em Vue.js possibilitando gerentes de loja configurar catálogos de produtos, gerenciar presença em marketplaces, monitorar pedidos e rastrear entregas em tempo real.",
                        "Liderei implementação de conformidade PCI DSS em todas as features de pagamento; arquitetei fluxos de pagamento seguro, criptografia de dados, tokenização e frameworks de auditoria possibilitando 2.000+ varejistas processar pagamentos com segurança.",
                        "Campeonei estratégia mobile: migrei codebase nativo iOS/Android específico de plataforma para framework unificado Flutter/Dart, reduzindo duplicação de código em 50% e acelerando entrega de features.",
                        "Projetei pipeline GitHub Actions CI/CD abrangente automatizando verificações de pull-request, testes, deploys multi-stage e procedimentos de hotfix; reduzi lead time de deploy mobile em 70% e otimizei deployment de app para 40+ clientes em 85%.",
                        "Conduzi design reviews técnicos e auditorias de código; mentorizei desenvolvedores juniores em padrões arquiteturais, design de sistemas e boas práticas de integração.",
                        "Gerenciei resposta a incidentes em produção e despachei hotfixes para manter estabilidade de plataforma e continuidade de serviço em deployments distribuídos de varejistas."
                    ],
                    tech: ["Ruby on Rails", "Flutter/Dart", "MongoDB", "Vue.js", "GitHub Actions", "RESTful APIs", "Webhooks", "PCI DSS", "AWS (EC2, RDS, S3, Lambda)", "Redis", "Domain-Driven Design"]
                },
                {
                    company: "Syntagium Consulting",
                    website: "https://syntagium.com.au",
                    role: "Engenheiro de Software Full Stack Sênior",
                    period: "10/2021 - 01/2022",
                    location: "Sydney, Austrália",
                    bullets: [
                        "Entreguei aplicação corporativa dias antes do prazo em contrato de 3 meses, superando expectativas do cliente e possibilitando go-live antecipado.",
                        "Arquitetei aplicação corporativa em camadas usando C# ASP.NET Core 3.1 com padrão MVC, garantindo separação clara entre presentation, business logic e data access layers.",
                        "Apliquei princípios de Domain-Driven Design para modelar domínios de negócios complexos; projetei aggregate roots, bounded contexts e ubiquitous language refletindo estrutura organizacional do cliente.",
                        "Projetei e implementei APIs RESTful com métodos HTTP semânticos, status codes apropriados, tratamento de erros e validação; garantindo consistência com padrões de integração corporativa.",
                        "Implementei Entity Framework Core ORM com otimização de queries, lazy loading e data loading seletivo para operações críticas de performance.",
                        "Alcancei >80% de cobertura de código através de testes unitários e de integração abrangentes usando xUnit; apliquei padrões arquiteturais através de code review e governança técnica.",
                        "Colaborei em sprints Ágeis, contribuindo em planejamento, estimativas e entrega contínua; coordenei com stakeholders de produto para clarificar requisitos e validar comportamento do sistema."
                    ],
                    tech: ["C#", "ASP.NET Core 3.1", "Entity Framework Core", "DDD", "xUnit", "REST APIs", "SQL Server", "Agile/Scrum"]
                },
                {
                    company: "Staffing Group",
                    website: "https://staffing.com.au",
                    role: "Engenheiro de Software",
                    period: "04/2021 - 06/2021",
                    location: "Melbourne, Austrália",
                    bullets: [
                        "Desenvolvi sistemas de gestão de RH e recrutamento agregando dados de candidatos de 30+ websites e plataformas de recrutamento diversos em interface centralizada de gestão de candidatos.",
                        "Projetei serviços backend .NET/C# consumindo e normalizando dados de fontes heterogêneas (job boards, sistemas de rastreamento de candidatos, redes sociais), implementando lógica de deduplicação e entity resolution.",
                        "Construí frontend AngularJS possibilitando gerentes de RH buscar, filtrar e gerenciar pools de candidatos agregados; implementei interfaces responsivas e validação de formulários.",
                        "Implementei validação de dados abrangente e tratamento de erros garantindo qualidade de dados e consistência em 30+ fontes de integração; realizei análise sistemática de root cause em falhas de integração.",
                        "Otimizei performance de queries em datasets grandes de candidatos através de estratégias de indexação de banco de dados e mecanismos de caching; melhorei confiabilidade de sistema através de testes e debugging extensivos."
                    ],
                    tech: [".NET", "C#", "AngularJS", "SQL Server", "Integração de Dados", "Testing/Debugging"]
                },
                {
                    company: "Axxiom - Tecnologia e Inovação",
                    website: "https://www.axxiom.com.br",
                    role: "Analista de Programação",
                    period: "12/2020 - 04/2021",
                    location: "Belo Horizonte, Brasil",
                    bullets: [
                        "Contribuí para sistemas de integração de rede de energia renovável críticos para missão, gerenciando redes solares/eólicas on-grid para setor de distribuição de eletricidade brasileiro (servindo 18 milhões de clientes).",
                        "Projetei serviços backend .NET monitorando geração de energia renovável, gerenciando distribuição de energia e otimizando estabilidade de rede; implementei cálculos de fluxo de energia e algoritmos de balanceamento de rede.",
                        "Integrei com sistemas SCADA e infraestrutura de monitoramento de rede; gerenciei fluxos de dados de energia em tempo real e implementei interfaces de dashboard exibindo métricas de geração e contribuição de energia renovável.",
                        "Aumentei eficiência de monitoramento em 30% através de funcionalidades de sistema aprimoradas, analytics em tempo real e alerting preditivo; possibilitei operadores de rede detectar anomalias mais rápido e responder à instabilidade.",
                        "Garantir conformidade com regulações brasileiras do setor de energia (padrões ANEEL, requisitos de operador de rede); criei documentação técnica e forneci suporte contínuo para soluções deployadas."
                    ],
                    tech: [".NET", "C#", "SQL Server", "SCADA Integration", "Processamento de Dados em Tempo Real", "Conformidade do Setor Energético", "MPS.Br Level C (CMMI Level 2)"]
                },
                {
                    company: "Axxiom - Tecnologia e Inovação",
                    website: "https://www.axxiom.com.br",
                    role: "Analista Desenvolvedor de Software",
                    period: "04/2014 - 11/2016",
                    location: "Belo Horizonte, Brasil",
                    bullets: [
                        "Participei de projetos R&D construindo software de produção para automação do setor elétrico e conformidade; desenvolvi sistemas diretamente para CEMIG (servindo 18 milhões de clientes em 774 municípios).",
                        "Arquitetei aplicações web full-stack usando ASP.NET MVC, NHibernate e SQL Server; projetei domain models, schemas de banco de dados e lógica de negócios refletindo workflows complexos de gestão de energia.",
                        "Projetei e mantive sistema de gestão de processos jurídicos automatizando workflows, garantindo conformidade regulatória e implementando audit trails para requisitos de cliente corporativo.",
                        "Implementei aplicações Java EE usando JSF, Spring Web Flow e Hibernate; desenvolvi interfaces ricas baseadas em PrimeFaces com AJAX para interações dinâmicas em tempo real.",
                        "Liderei iniciativa abrangente de otimização de performance: identifiquei gargalos de banco de dados através de profiling, implementei otimização de queries, estratégias multi-level caching e melhorias algorítmicas, alcançando ganho de 25% em performance geral.",
                        "Colaborei com analistas de negócios, especialistas em domínio jurídico e operadores de utilidades para validar comportamento de sistema e coletar feedback operacional."
                    ],
                    tech: ["ASP.NET MVC", "Java EE", "JSF", "Spring Web Flow", "NHibernate", "Hibernate", "SQL Server", "PrimeFaces", "AJAX", "Otimização de Performance"]
                },
                {
                    company: "Flag Intelliwan",
                    website: "https://www.flag.com.br",
                    role: "Desenvolvedor .NET C#",
                    period: "04/2013 - 03/2014",
                    location: "Belo Horizonte, Brasil",
                    bullets: [
                        "Desenvolvi software de logística e distribuição para grandes distribuidoras e fabricantes brasileiros, suportando otimização de cadeia de suprimentos e eficiência operacional.",
                        "Projetei lógica de negócios C# e .NET implementando workflows de cadeia de suprimentos (gestão de inventário, fulfilment de pedidos, otimização de rotas, rastreamento de remessas).",
                        "Colaborei com especialistas em domínio de logística para validar comportamento de sistema contra requisitos reais de cadeia de suprimentos; otimizei queries de banco de dados e indexação para operações de alto volume de transações."
                    ],
                    tech: [".NET Framework", "C#", "SQL Server", "Logística"]
                },
                {
                    company: "TSA (Automation Systems Technology)",
                    website: "https://www.tsatec.com.br",
                    role: "Engenheiro de Software Júnior (.NET C#)",
                    period: "10/2012 - 04/2013",
                    location: "Belo Horizonte, Brasil",
                    bullets: [
                        "Apoiei desenvolvimento de sistemas de automação e controle para indústrias com alto consumo energético (mineração, energia, óleo & gás, aço); aprendi domínio de automação industrial e systems thinking.",
                        "Desenvolvi software C# e .NET implementando lógica de automação e monitoramento operacional para ambientes industriais complexos."
                    ],
                    tech: [".NET Framework", "C#", "Automação Industrial"]
                },
                {
                    company: "TechBiz IT",
                    website: "https://www.techbizit.com.br",
                    role: "Desenvolvedor e QA Tester (.NET C# & Selenium IDE)",
                    period: "10/2011 - 10/2012",
                    location: "Nova Lima, Brasil",
                    bullets: [
                        "Desenvolvi e testei soluções de software sob medida para clientes dos setores público e privado; usei Selenium IDE e .NET para melhorar qualidade de aplicação e cobertura de regressão.",
                        "Ganhei experiência fundamental em design orientado a objetos, bancos de dados relacionais e práticas de desenvolvimento de software corporativo."
                    ],
                    tech: [".NET Framework", "C#", "Selenium IDE", "QA Testing"]
                },
                {
                    company: "Direcional Engineering",
                    website: "https://www.direcional.com.br",
                    role: "Desenvolvedor (Java)",
                    period: "08/2010 - 08/2011",
                    location: "Belo Horizonte, Brasil",
                    bullets: [
                        "Desenvolvi aplicações baseadas em Java como parte de equipe interna de software de engenharia; estabeleci experiência fundamental em design orientado a objetos, bancos de dados e desenvolvimento corporativo.",
                        "Contribui para soluções de software de engenharia para domínio de construção e gestão de projetos."
                    ],
                    tech: ["Java", "SQL", "Object-Oriented Design"]
                }
            ]
        },
        skills: {
            title: "Expertise Principal",
            categories: [
                {
                    name: "Arquitetura & Design Backend",
                    list: ["C#", ".NET Core/.NET Framework", "Ruby on Rails", "Java/Spring", "ASP.NET MVC", "Domain-Driven Design (DDD)", "Princípios SOLID", "Clean Architecture", "Onion Architecture", "Design de APIs RESTful", "Padrões de Microsserviços", "Arquitetura de Integração de Sistemas"]
                },
                {
                    name: "Frontend & Mobile",
                    list: ["Vue.js", "React", "Angular/AngularJS", "Flutter/Dart", "HTML5/CSS3", "JavaScript/TypeScript", "Design Responsivo", "Desenvolvimento Cross-Platform"]
                },
                {
                    name: "Dados & Persistência",
                    list: ["PostgreSQL", "Microsoft SQL Server", "MySQL", "MongoDB", "Entity Framework", "NHibernate", "Hibernate", "JPA", "Modelagem de Dados", "Otimização de Queries", "Estratégias de Cache"]
                },
                {
                    name: "Integração & APIs",
                    list: ["Integração de APIs Terceirizadas", "Arquitetura de Webhooks", "OAuth 2.0 / JWT", "Padrões de API Gateway", "Agregação de Dados Multi-Fonte", "Integração de Gateways de Pagamento", "Sistemas SCADA", "Arquitetura Orientada a Eventos"]
                },
                {
                    name: "Cloud & DevOps",
                    list: ["AWS (EC2, Lambda, S3, RDS, EventBridge)", "Azure (VMs, Functions, Blob Storage, Event Grid)", "GitHub Actions", "Design de Pipeline CI/CD", "Docker", "Terraform", "Infrastructure-as-Code", "Automação de Deployment", "Git/GitHub"]
                },
                {
                    name: "Segurança & Conformidade",
                    list: ["Conformidade PCI DSS", "Processamento Seguro de Pagamentos", "Criptografia de Dados", "OAuth 2.0", "Conformidade Regulatória (Setor Energético)", "Auditoria de Segurança", "Design de API Seguro", "Frameworks de Conformidade", "Princípios ITIL"]
                },
                {
                    name: "Profissional & Liderança",
                    list: ["Arquitetura de Sistemas", "Liderança Técnica", "Code Review & Mentoria", "Colaboração em Equipe", "Otimização de Performance", "Resolução de Problemas", "Documentação Técnica", "Agile/Scrum", "Comunicação Cross-Funcional", "MPS.Br", "CMMI", "Princípios SOLID"]
                }
            ]
        },
        education: {
            title: "Base Acadêmica",
            items: [
                {
                    degree: "Mestrado em Tecnologia da Informação (Desenvolvimento de Software)",
                    institution: "University of Southern Queensland",
                    period: "09/2025 - Presente",
                    location: "Entrega Online, Austrália"
                },
                {
                    degree: "Diploma Avançado em Tecnologia da Informação",
                    institution: "Royal Gurkhas Institute of Technology (RGIT)",
                    period: "04/2020 - 10/2021",
                    location: "Melbourne, Austrália"
                },
                {
                    degree: "Bacharelado em Sistemas de Informação",
                    institution: "Centro Universitário Newton Paiva",
                    period: "2010 - 2013",
                    location: "Belo Horizonte, Brasil"
                }
            ]
        },
        contact: {
            title: "Vamos construir",
            subtitle: "algo de elite.",
            links: [
                { label: "marllondrion@gmail.com", type: "email", icon: "", href: "mailto:marllondrion@gmail.com" },
                { label: "+61 0410 389 445", type: "phone", icon: "", href: "tel:+61410389445" },
                { label: "LinkedIn", type: "social", icon: "", href: "https://linkedin.com/in/marllondrion" },
                { label: "GitHub", type: "social", icon: "", href: "https://github.com/marllondrion" }
            ]
        }
    }
};
