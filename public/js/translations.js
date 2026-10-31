// Translations object
const translations = {
  es: {
    // Landing
    navCta: "Hablemos",
    heroEyebrow: "Disponible para nuevos retos",
    heroTitleHtml:
      "Construyo software <em>full stack</em> con agentes de código y criterio de ingeniero.",
    heroLead:
      "Ingeniero de Sistemas con más de 8 años en producción, de la base de datos a la interfaz. Escribo la spec, delego la implementación a agentes y reviso cada diff.",
    heroRole: "Full Stack AI-First Developer · NestJS · Next.js · Cloud",
    scrollLabel: "Desliza",
    statYears: "años en producción",
    statTests: "pruebas en verde",
    statMutation: "mutation testing en dominio",
    statCert: "certificación AI-First",
    aboutKicker: "Sobre mí",
    aboutHeadHtml:
      "Los agentes escriben. <em>Yo respondo</em> por el resultado.",
    wfKicker: "Mi forma de trabajar",
    wf1Title: "Spec",
    wf1Desc: "Criterios de aceptación claros antes de escribir una línea.",
    wf2Title: "Delegar",
    wf2Desc: "El agente implementa en un worktree por historia.",
    wf3Title: "Revisar",
    wf3Desc: "Reviso el diff junto a un revisor de estándares independiente.",
    wf4Title: "Decidir",
    wf4Desc: "Defino qué delego y qué escribo a mano.",
    skillsKicker: "Stack",
    skillsHeadHtml: "Las herramientas con las que <em>entrego</em>",
    expKicker: "Experiencia",
    expHeadHtml: "Dónde he <em>construido</em>",
    projKicker: "Trabajo",
    projHeadHtml: "Proyectos <em>destacados</em>",
    projCollab: "Colaboraciones",
    eduKicker: "Formación",
    eduHeadHtml: "Siempre <em>aprendiendo</em>",
    contactKicker: "Contacto",
    contactHeadHtml: "¿Construimos algo <em>juntos</em>?",
    contactLead:
      "Estoy abierto a roles full stack y de orquestación de agentes de código. Escríbeme y conversamos.",
    copyEmail: "Copiar correo",
    copied: "¡Copiado!",
    footerNote: "Hecho con cuidado en Cali, Colombia",
    backToTop: "Volver arriba",

    // Navbar
    navAbout: "Sobre mí",
    navSkills: "Habilidades",
    navExperience: "Experiencia",
    navEducation: "Formación",
    navProjects: "Proyectos",
    navContact: "Contacto",
    spanishLabel: "Español",
    englishLabel: "Inglés",

    // About section
    title: "Javier Stiven Chávez Gallego",
    subtitle:
      "Developer Senior AI-First · Orquestación de Agentes de Código · Backend Node.js / NestJS · Cloud",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "Sobre mí",
    aboutText:
      "Ingeniero de Sistemas con más de 8 años en producción y con agentes de código como forma normal de trabajo, no como experimento. Certificado AI-First Augmented Professional (Expert Level) por Ceiba en orquestación de agentes de IA. Desarrollo historias completas dirigiendo ciclos autónomos: escribo la spec con criterios de aceptación, delego la implementación, reviso el diff y decido qué delego y qué escribo a mano. Base sólida de backend, hexagonal, pruebas y cloud.",

    // Hero CTA
    downloadCv: "Descargar CV",
    viewMyWork: "Ver mis proyectos",
    contactMe: "Contáctame",

    // Skills section
    skillsTitle: "Habilidades",
    databases: "Bases de Datos",
    unitTesting: "Pruebas y Calidad",
    solidPrinciples: "Principios SOLID",
    hexagonalArchitecture: "Arquitectura hexagonal",
    skillsAgentsTitle: "Agentes de Código",
    agentSpecs: "Specs ejecutables",
    agentDelegation: "Delegación a subagentes",
    agentDiffReview: "Revisión crítica de diffs",
    agentDecisionLog: "Registro de decisiones",
    agentWorktrees: "Worktrees por historia",
    skillsJudgmentTitle: "Criterio y Calidad del Agente",
    judgeInvented: "Detección de lógica inventada",
    judgeScope: "Alcance fuera de spec",
    judgeDuplicated: "Reglas duplicadas",
    judgePartial: "Alcance parcial documentado",
    skillsLlmTitle: "LLMs e Integración de IA",
    llmApis: "APIs de modelos",
    llmStructured: "Salidas estructuradas",
    llmTools: "Uso de herramientas",
    llmErrors: "Manejo de errores",
    llmPermissions: "Permisos acotados",
    llmValidation: "Validación del resultado",
    skillsBackendTitle: "Backend",
    dbMigrations: "Migraciones versionadas",
    dbTransactions: "Transaccionalidad",
    skillsCloudTitle: "Cloud y Contenedores",
    testUnit: "Pruebas unitarias",
    testE2e: "Pruebas e2e HTTP",
    testArchitecture: "Pruebas de arquitectura",
    testMutation: "Mutation testing (Stryker)",
    skillsSecurityTitle: "Seguridad",
    secServerAuth: "Autorización en servidor",
    secRoles: "Roles y permisos granulares",
    secLeastPrivilege: "Mínimo privilegio",
    secSecrets: "Gestión de secretos por ambiente",
    skillsFrontendTeamTitle: "Frontend, Mobile y Equipo",
    docsInSpanish: "Documentación en español",

    // Experience section
    experienceTitle: "Experiencia",
    company: "Empresa",
    current: "Actual",
    functions: "Funciones",
    technologies: "Tecnologías",

    // Ceiba
    ceibaTitle: "Arquitecto Desarrollador",
    ceibaCompany: "Ceiba — cliente Los Olivos (marketplace XPets)",
    ceibaDate: "Jul 2025 - Actual",
    ceibaDesc1:
      "Desarrollo historias de punta a punta dirigiendo ciclos autónomos de agentes: spec con criterios de aceptación, delegación de la implementación, revisión del diff con un revisor de estándares independiente y decisión explícita de qué delegar y qué escribir a mano.",
    ceibaDesc2:
      "Módulo de catálogo en NestJS con arquitectura hexagonal y DDD: casos de uso, adaptadores PostgreSQL con Drizzle ORM, migraciones y auditoría escrita en la misma transacción que el cambio.",
    ceibaDesc3:
      "Más de 200 pruebas en verde entre unitarias, e2e HTTP y de arquitectura, con mutation testing al 100% en dominio y aplicación.",
ceibaDesc4:
      "En Los Olivos también construyo el frontend web con React y Next.js y la app móvil con React Native y Expo.",

    // Incluirtec
    incluirtecTitle: "Desarrollador Backend",
    incluirtecCompany: "Incluirtec",
    incluirtecDate: "Mar 2026 - Jul 2026",
    incluirtecDesc1:
      "Operación de sistemas en producción: diagnóstico de incidentes, análisis de causa raíz y despliegue de correcciones con mínimo impacto. El cliente reconoció el trabajo entregado.",

    // Triko
    trikoTitle: "Desarrollador Backend Senior",
    trikoCompany: "Triko",
    trikoDate: "Nov 2024 - Jun 2025",
    trikoDesc1:
      "Microservicios en Node.js y TypeScript integrados con sistemas bancarios de alta disponibilidad, en contenedores sobre Docker y Kubernetes.",
    trikoDesc2:
      "Pipelines de CI/CD, participación en code reviews y monitoreo continuo de la operación.",

    // Merqueo
    merqueoTitle: "Desarrollador Backend",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Servicios backend con Node.js, TypeScript, PHP y Go sobre PostgreSQL y Redis, con colas y procesamiento asíncrono de alto volumen.",
    merqueoDesc2:
      "Optimización de consultas SQL en producción, caching y pruebas automatizadas.",

    // Samsara
    samsaraTitle: "Co-líder de desarrollo de software",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc1:
      "Dueño del ciclo completo en un equipo pequeño: arquitectura, APIs, modelo de datos, estándares, mentoría y soporte postproducción.",
    samsaraDesc2:
      "Análisis de requerimientos, diseño, desarrollo, pruebas, despliegue y soporte al cliente.",

    // USC
    uscTitle: "Desarrollador de software fullstack",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "Abr 2018 - Dic 2023",
    uscTech:
      ".NET, ASP.NET Core Web API, Angular, SQL Server, Docker, AWS (EC2, S3).",
    uscDesc1:
      "Diseño y desarrollo de sistemas de información con .NET, ASP.NET Core Web API, Angular, SQL Server y Docker; aplicando patrones de diseño y arquitecturas orientadas a objetos, con despliegue en AWS (EC2, S3).",
    uscDesc2:
      "Optimización del sistema SIPAC: 40% de mejora en eficiencia académica mediante índices y consultas SQL. Integración con servicios externos y archivos planos.",
    uscDesc3:
      "Desarrollo de aplicación de pagos en línea integrando métodos de pago mediante webservices/APIs.",

    // Education section
    professionalEducation: "Formación Profesional",
    complementaryEducation: "Formación Complementaria",
    languagesTitle: "Idiomas",
    english: "Inglés",
    intermediate: "B1+ – Lectura técnica fluida.",
    spanish: "Español",
    native: "Nativo",

    // Education items
    systemsEngineering: "Ingeniería de Sistemas",
    remington: "Corporación Universitaria Remington",
    remingtonDate: "Abr 2021 - Dic 2023",
    technologyAnalysis:
      "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
    sena: "SENA (Servicio Nacional de Aprendizaje)",
    senaDate: "Sep 2016 - Sep 2018",
    dotnetBootcamp: "Bootcamp Backend .NET",
    wwcode: "WWCode Medellín y Perficient Latam",
    bootcampDate: "2023",
    scrumFundamentals: "Scrum Fundamentals Certified",
    scrumstudy: "ScrumStudy",
    scrumDate: "2020",
    dbSpecialization:
      "Especialización Tecnológica en Gestión y Seguridad de Bases de Datos (SQL Server, Oracle y MongoDB)",
    senaMonths: "2019",
    aiFirstCert: "AI-First Certified — Augmented Professional, Expert Level",
    aiFirstCertDesc: "Roles aumentados y colaboración cognitiva Humano-IA",
    ceibaCert: "Ceiba",
    aiFirstCertDate: "Sep 2026",
    awsCert: "Introducción a AWS: Fundamentos de Cloud Computing",
    platzi: "Platzi",
    awsCertDate: "2025",

    // Projects section
    projectsTitle: "Proyectos en los que he colaborado",
    personalProjects: "Proyectos personales",
    techLabel: "Tecnologías:",
    seeMore: "Ver más..",

    // XPets project
    xpetsTitle: "XPets — Marketplace (Los Olivos)",
    xpetsDesc:
      "Marketplace del cliente Los Olivos, desarrollado desde Ceiba. Módulo de catálogo en NestJS con arquitectura hexagonal y DDD: casos de uso, adaptadores PostgreSQL con Drizzle ORM, migraciones versionadas y auditoría escrita en la misma transacción que el cambio. Más de 200 pruebas en verde (unitarias, e2e HTTP y de arquitectura) con mutation testing al 100% en dominio y aplicación. Frontend web con React y Next.js y app móvil con React Native y Expo.",
    xpetsTech:
      "NestJS, TypeScript, React, Next.js, React Native, Expo, PostgreSQL, Drizzle ORM, Hexagonal / DDD, Vitest, Stryker, Claude Code.",

    // Triko App project
    trikoAppTitle: "TRIKO APP",
    trikoAppDesc:
      "Marketplace de servicios con subastas en tiempo real. Contribuí con microservicios Node.js y TypeScript integrados con sistemas bancarios de alta disponibilidad, en contenedores sobre Docker y Kubernetes, con pipelines de CI/CD.",
    trikoAppTech:
      "Node.js, TypeScript, Docker, Kubernetes, CI/CD, REST APIs, integración bancaria.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "Supermercado en línea con operaciones en Colombia, México y Brasil. Desarrollé servicios backend con Node.js, TypeScript, PHP y Go sobre PostgreSQL y Redis, con colas y procesamiento asíncrono de alto volumen, y optimicé consultas SQL en producción.",
    merqueoProjectTech:
      "Node.js, TypeScript, PHP, Go, PostgreSQL, Redis, colas, caching, pruebas automatizadas.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "Plataforma de salud a medida para gestión de pacientes, historias clínicas y reportes. Participé en el ciclo completo con APIs REST/SOAP, PHP/Laravel, MySQL y despliegue en Azure (PaaS).",
    samsaraMobiTech:
      "PHP (Laravel), MySQL, REST/SOAP, Azure (PaaS), SOLID.",

    // SIPAC project
    sipacTitle:
      "Sistema de Información para el Aseguramiento de la Calidad (SIPAC)",
    sipacDesc:
      "Sistema de información para la Universidad Santiago de Cali. Optimicé SIPAC logrando 40% de mejora en eficiencia académica mediante índices y consultas SQL, con integración a servicios externos y archivos planos.",
    sipacTech:
      ".NET, ASP.NET Core Web API, Angular, SQL Server, Docker, AWS (EC2, S3), APIs REST.",

    // APPS project
    appsTitle: "Aplicación de Pagos en línea (APPS)",
    appsDesc:
      "Aplicación de pagos en línea integrando métodos de pago mediante Place to Pay (webservices/APIs) para el proceso de matrículas académicas en la Universidad Santiago de Cali.",
    appsTech:
      ".NET, ASP.NET Core, Angular, SQL Server, APIs REST, integración de servicios externos.",

    // Personal projects
    geolocationTitle: "App de geolocalización - React con PHP",
    geolocationDesc:
      "App con React.js que consume la API de OpenWeather para mostrar humedad de ciudades seleccionadas, visualización en mapa con Leaflet e historial de consultas en MySQL mediante API PHP.",
    geolocationTech:
      "React.js, PHP, Laravel, MySQL, JavaScript, Leaflet, OpenWeather API.",

    eventsApiTitle: "API de gestión de eventos",
    eventsApiDesc:
      "API RESTful con Node.js y Docker para una plataforma de gestión de eventos: creación, promoción, registro de asistentes y consulta de detalles.",
    eventsApiTech:
      "Node.js, Express.js, JavaScript, Docker, Jest, MySQL, GitHub.",
  },
  en: {
    // Landing
    navCta: "Let's talk",
    heroEyebrow: "Open to new challenges",
    heroTitleHtml:
      "I build <em>full stack</em> software with coding agents and an engineer's judgment.",
    heroLead:
      "Systems Engineer with 8+ years in production, from the database to the interface. I write the spec, delegate the implementation to agents, and review every diff.",
    heroRole: "Full Stack AI-First Developer · NestJS · Next.js · Cloud",
    scrollLabel: "Scroll",
    statYears: "years in production",
    statTests: "passing tests",
    statMutation: "mutation testing on domain",
    statCert: "AI-First certification",
    aboutKicker: "About me",
    aboutHeadHtml: "Agents write. <em>I answer</em> for the result.",
    wfKicker: "How I work",
    wf1Title: "Spec",
    wf1Desc: "Clear acceptance criteria before a single line is written.",
    wf2Title: "Delegate",
    wf2Desc: "The agent implements in a worktree per story.",
    wf3Title: "Review",
    wf3Desc: "I review the diff alongside an independent standards reviewer.",
    wf4Title: "Decide",
    wf4Desc: "I decide what to delegate and what to write by hand.",
    skillsKicker: "Stack",
    skillsHeadHtml: "The tools I <em>ship</em> with",
    expKicker: "Experience",
    expHeadHtml: "Where I've <em>built</em>",
    projKicker: "Work",
    projHeadHtml: "Selected <em>projects</em>",
    projCollab: "Collaborations",
    eduKicker: "Education",
    eduHeadHtml: "Always <em>learning</em>",
    contactKicker: "Contact",
    contactHeadHtml: "Shall we build something <em>together</em>?",
    contactLead:
      "I'm open to full stack and coding-agent orchestration roles. Write to me and let's talk.",
    copyEmail: "Copy email",
    copied: "Copied!",
    footerNote: "Crafted with care in Cali, Colombia",
    backToTop: "Back to top",

    // Navbar
    navAbout: "About Me",
    navSkills: "Skills",
    navExperience: "Experience",
    navEducation: "Education",
    navProjects: "Projects",
    navContact: "Contact",
    spanishLabel: "Spanish",
    englishLabel: "English",

    // About section
    title: "Javier Stiven Chávez Gallego",
    subtitle:
      "Senior AI-First Developer · Code Agent Orchestration · Node.js / NestJS Backend · Cloud",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "About Me",
    aboutText:
      "Systems Engineer with 8+ years in production who uses coding agents as a normal way of working, not as an experiment. Certified AI-First Augmented Professional (Expert Level) by Ceiba in AI agent orchestration. I deliver complete stories by directing autonomous cycles: I write the spec with acceptance criteria, delegate the implementation, review the diff, and decide what to delegate and what to write by hand. Solid foundation in backend, hexagonal architecture, testing, and cloud.",

    // Hero CTA
    downloadCv: "Download CV",
    viewMyWork: "View My Work",
    contactMe: "Contact Me",

    // Skills section
    skillsTitle: "Skills",
    databases: "Databases",
    unitTesting: "Testing and Quality",
    solidPrinciples: "SOLID Principles",
    hexagonalArchitecture: "Hexagonal architecture",
    skillsAgentsTitle: "Coding Agents",
    agentSpecs: "Executable specs",
    agentDelegation: "Subagent delegation",
    agentDiffReview: "Critical diff review",
    agentDecisionLog: "Decision log",
    agentWorktrees: "Worktree per story",
    skillsJudgmentTitle: "Agent Judgment & Quality",
    judgeInvented: "Spotting invented logic",
    judgeScope: "Out-of-spec scope",
    judgeDuplicated: "Duplicated rules",
    judgePartial: "Documented partial scope",
    skillsLlmTitle: "LLMs & AI Integration",
    llmApis: "Model APIs",
    llmStructured: "Structured outputs",
    llmTools: "Tool use",
    llmErrors: "Error handling",
    llmPermissions: "Scoped permissions",
    llmValidation: "Result validation",
    skillsBackendTitle: "Backend",
    dbMigrations: "Versioned migrations",
    dbTransactions: "Transactionality",
    skillsCloudTitle: "Cloud & Containers",
    testUnit: "Unit tests",
    testE2e: "HTTP e2e tests",
    testArchitecture: "Architecture tests",
    testMutation: "Mutation testing (Stryker)",
    skillsSecurityTitle: "Security",
    secServerAuth: "Server-side authorization",
    secRoles: "Granular roles & permissions",
    secLeastPrivilege: "Least privilege",
    secSecrets: "Per-environment secrets management",
    skillsFrontendTeamTitle: "Frontend, Mobile & Team",
    docsInSpanish: "Documentation in Spanish",

    // Experience section
    experienceTitle: "Experience",
    company: "Company",
    current: "Current",
    functions: "Functions",
    technologies: "Technologies",

    // Ceiba
    ceibaTitle: "Developer Architect",
    ceibaCompany: "Ceiba — client Los Olivos (XPets marketplace)",
    ceibaDate: "Jul 2025 - Present",
    ceibaDesc1:
      "I deliver stories end to end by directing autonomous agent cycles: spec with acceptance criteria, delegated implementation, diff review with an independent standards reviewer, and an explicit decision on what to delegate and what to write by hand.",
    ceibaDesc2:
      "Catalog module in NestJS with hexagonal architecture and DDD: use cases, PostgreSQL adapters with Drizzle ORM, migrations, and audit records written in the same transaction as the change.",
    ceibaDesc3:
      "200+ passing tests across unit, HTTP e2e, and architecture tests, with 100% mutation testing on the domain and application layers.",
ceibaDesc4:
      "At Los Olivos I also build the web frontend with React and Next.js and the mobile app with React Native and Expo.",

    // Incluirtec
    incluirtecTitle: "Backend Developer",
    incluirtecCompany: "Incluirtec",
    incluirtecDate: "Mar 2026 - Jul 2026",
    incluirtecDesc1:
      "Production systems operation: incident diagnosis, root cause analysis, and deployment of fixes with minimal impact. The client recognized the work delivered.",

    // Triko
    trikoTitle: "Senior Backend Developer",
    trikoCompany: "Triko",
    trikoDate: "Nov 2024 - Jun 2025",
    trikoDesc1:
      "Microservices in Node.js and TypeScript integrated with high-availability banking systems, running in containers on Docker and Kubernetes.",
    trikoDesc2:
      "CI/CD pipelines, code review participation, and continuous monitoring of the operation.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Backend services with Node.js, TypeScript, PHP, and Go on PostgreSQL and Redis, with queues and high-volume asynchronous processing.",
    merqueoDesc2:
      "SQL query optimization in production, caching, and automated testing.",

    // Samsara
    samsaraTitle: "Software Development Co-Lead",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc1:
      "Owner of the full cycle in a small team: architecture, APIs, data model, standards, mentoring, and post-production support.",
    samsaraDesc2:
      "Requirements analysis, design, development, testing, deployment, and client support.",

    // USC
    uscTitle: "Fullstack Software Developer",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "Apr 2018 - Dec 2023",
    uscTech:
      ".NET, ASP.NET Core Web API, Angular, SQL Server, Docker, AWS (EC2, S3).",
    uscDesc1:
      "Designed and developed information systems with .NET, ASP.NET Core Web API, Angular, SQL Server, and Docker; applying design patterns and OOP architectures, deployed on AWS (EC2, S3).",
    uscDesc2:
      "Optimized SIPAC system: 40% efficiency improvement in academic tracking through indexes and SQL queries. Integration with external services and flat files.",
    uscDesc3:
      "Developed online payment application integrating payment methods via webservices/APIs.",

    // Education section
    professionalEducation: "Professional Education",
    complementaryEducation: "Complementary Education",
    languagesTitle: "Languages",
    english: "English",
    intermediate: "B1+ – Fluent technical reading.",
    spanish: "Spanish",
    native: "Native",

    // Education items
    systemsEngineering: "Systems Engineering",
    remington: "Corporación Universitaria Remington",
    remingtonDate: "Apr 2021 - Dec 2023",
    technologyAnalysis:
      "Information Systems Analysis and Development Technologist",
    sena: "SENA (Servicio Nacional de Aprendizaje)",
    senaDate: "Sep 2016 - Sep 2018",
    dotnetBootcamp: ".NET Backend Bootcamp",
    wwcode: "WWCode Medellín and Perficient Latam",
    bootcampDate: "2023",
    scrumFundamentals: "Scrum Fundamentals Certified",
    scrumstudy: "ScrumStudy",
    scrumDate: "2020",
    dbSpecialization:
      "Technological Specialization in Database Management and Security (SQL Server, Oracle and MongoDB)",
    senaMonths: "2019",
    aiFirstCert: "AI-First Certified — Augmented Professional, Expert Level",
    aiFirstCertDesc: "Augmented roles and Human-AI cognitive collaboration",
    ceibaCert: "Ceiba",
    aiFirstCertDate: "Sep 2026",
    awsCert: "Introduction to AWS: Cloud Computing Fundamentals",
    platzi: "Platzi",
    awsCertDate: "2025",

    // Projects section
    projectsTitle: "Projects I have collaborated on",
    personalProjects: "Personal Projects",
    techLabel: "Technologies:",
    seeMore: "See more...",

    // XPets project
    xpetsTitle: "XPets — Marketplace (Los Olivos)",
    xpetsDesc:
      "Marketplace for the client Los Olivos, built through Ceiba. Catalog module in NestJS with hexagonal architecture and DDD: use cases, PostgreSQL adapters with Drizzle ORM, versioned migrations, and audit records written in the same transaction as the change. 200+ passing tests (unit, HTTP e2e, and architecture) with 100% mutation testing on the domain and application layers. Web frontend with React and Next.js and a mobile app with React Native and Expo.",
    xpetsTech:
      "NestJS, TypeScript, React, Next.js, React Native, Expo, PostgreSQL, Drizzle ORM, Hexagonal / DDD, Vitest, Stryker, Claude Code.",

    // Triko App project
    trikoAppTitle: "TRIKO APP",
    trikoAppDesc:
      "Services marketplace with real-time auctions. I contributed Node.js and TypeScript microservices integrated with high-availability banking systems, running in containers on Docker and Kubernetes, with CI/CD pipelines.",
    trikoAppTech:
      "Node.js, TypeScript, Docker, Kubernetes, CI/CD, REST APIs, banking integration.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "Online supermarket operating in Colombia, Mexico, and Brazil. I built backend services with Node.js, TypeScript, PHP, and Go on PostgreSQL and Redis, with queues and high-volume asynchronous processing, and optimized SQL queries in production.",
    merqueoProjectTech:
      "Node.js, TypeScript, PHP, Go, PostgreSQL, Redis, queues, caching, automated testing.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "Custom healthcare platform for patient management, clinical records, and reports. Full lifecycle with REST/SOAP APIs, PHP/Laravel, MySQL, and Azure (PaaS) deployment.",
    samsaraMobiTech:
      "PHP (Laravel), MySQL, REST/SOAP, Azure (PaaS), SOLID.",

    // SIPAC project
    sipacTitle: "Quality Assurance Information System (SIPAC)",
    sipacDesc:
      "Information system for Universidad Santiago de Cali. I optimized SIPAC achieving 40% efficiency improvement through indexes and SQL queries, with external service and flat file integrations.",
    sipacTech:
      ".NET, ASP.NET Core Web API, Angular, SQL Server, Docker, AWS (EC2, S3), REST APIs.",

    // APPS project
    appsTitle: "Online Payment Application (APPS)",
    appsDesc:
      "Online payment application integrating payment methods through Place to Pay (webservices/APIs) for academic enrollment at Universidad Santiago de Cali.",
    appsTech:
      ".NET, ASP.NET Core, Angular, SQL Server, REST APIs, external service integration.",

    // Personal projects
    geolocationTitle: "Geolocation App - React with PHP",
    geolocationDesc:
      "React.js app consuming the OpenWeather API to display humidity for selected cities, map visualization with Leaflet, and query history in MySQL via PHP API.",
    geolocationTech:
      "React.js, PHP, Laravel, MySQL, JavaScript, Leaflet, OpenWeather API.",

    eventsApiTitle: "Event Management API",
    eventsApiDesc:
      "RESTful API with Node.js and Docker for an event management platform: creation, promotion, attendee registration, and event details.",
    eventsApiTech:
      "Node.js, Express.js, JavaScript, Docker, Jest, MySQL, GitHub.",
  },
};
