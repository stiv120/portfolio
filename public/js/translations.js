// Translations object
const translations = {
  es: {
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
      "Ingeniero de Sistemas · .NET / ASP.NET Core / Angular · Microservicios · Cloud AWS / Azure · Inglés B1",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "Sobre mí",
    aboutText:
      "Ingeniero de Sistemas con más de 8 años de experiencia en desarrollo de software con .NET y Angular, especializado en microservicios, arquitecturas limpias y patrones de diseño en entornos de alta disponibilidad. Cuento con 4 años de experiencia en AWS (Lambda, S3, EC2) y 3 años en Azure (IaaS, PaaS, SaaS). Sólidas habilidades en ASP.NET Core Web API, optimización de bases de datos relacionales y construcción de interfaces con Angular. Orientado a la calidad del código, buenas prácticas y entrega de soluciones escalables en equipos ágiles. Inglés B1.",

    // Hero CTA
    downloadCv: "Descargar CV",
    viewMyWork: "Ver mis proyectos",
    contactMe: "Contáctame",

    // Skills section
    skillsTitle: "Habilidades",
    languages: "Lenguajes",
    databases: "Bases de Datos",
    frameworks: "Frameworks y Herramientas",
    unitTesting: "Pruebas y Calidad",
    methodologies: "Metodologías de Trabajo",
    documentation: "Documentación y UML",
    patterns: "Patrones de Diseño y Arquitectura",
    cleanCode: "Código limpio",
    solidPrinciples: "Principios SOLID",
    codeReview: "Code review",
    documentRequirements: "Documentar requerimientos",
    designPatterns: "Patrones de diseño",
    architecture: "Arquitectura",
    hexagonalArchitecture: "Arquitectura hexagonal",

    // Experience section
    experienceTitle: "Experiencia",
    company: "Empresa",
    current: "Actual",
    functions: "Funciones",
    technologies: "Tecnologías",

    // Incluirtec
    incluirtecTitle: "Desarrollador Fullstack",
    incluirtecCompany: "Incluirtec",
    incluirtecDate: "Mar 2026 - Actual",
    incluirtecDesc1:
      "Desarrollo e implementación de funcionalidades back-end con .NET y ASP.NET Core Web API en sistemas productivos de alta disponibilidad.",
    incluirtecDesc2:
      "Resolución de incidentes productivos, análisis de causa raíz y despliegue de correcciones con mínimo impacto en el servicio.",
    incluirtecDesc3:
      "Construcción de interfaces con Angular, integrando consumo de APIs REST, manejo de estados y componentes reutilizables.",
    incluirtecDesc4:
      "Aplicación de estándares de desarrollo, revisión de código entre pares, gestión de la configuración y despliegue en Azure.",

    // Triko
    trikoTitle: "Desarrollador Backend Senior",
    trikoCompany: "Triko",
    trikoDate: "Nov 2024 - Mar 2026",
    trikoDesc1:
      "Implementación de microservicios con .NET/ASP.NET Core bajo Clean Architecture y SOLID, integrados con sistemas bancarios y ERP de alta disponibilidad, además de desarrollo de interfaces frontend con Angular.",
    trikoDesc2:
      "Desarrollo y documentación de APIs RESTful, configuración de pipelines CI/CD y validaciones en ambientes dev/QA/prod desplegados en Azure (App Services, Functions).",
    trikoDesc3:
      "Aplicación de patrones de diseño en el dominio bancario; participación activa en revisiones de código y buenas prácticas del equipo.",

    // Merqueo
    merqueoTitle: "Desarrollador Backend",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Desarrollo de funcionalidades back-end en .NET integradas con sistemas externos, desplegadas en AWS (Lambda, S3).",
    merqueoDesc2:
      "Optimización de consultas SQL (MySQL), pruebas automatizadas y desarrollo de interfaces frontend con Angular.",

    // Samsara
    samsaraTitle: "Co-líder de desarrollo de software",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc1:
      "Desarrollo del ciclo completo: implementación de APIs REST/SOAP con PHP y Laravel, gestión de BD MySQL, despliegue en Azure (PaaS) y soporte post-producción.",
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
    intermediate: "B1 (Intermedio) – Lectura técnica y comunicación.",
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

    // Projects section
    projectsTitle: "Proyectos en los que he colaborado",
    personalProjects: "Proyectos personales",
    techLabel: "Tecnologías:",
    seeMore: "Ver más..",

    // Triko App project
    trikoAppTitle: "TRIKO APP",
    trikoAppDesc:
      "Marketplace de servicios con subastas en tiempo real. Contribuí con microservicios .NET/ASP.NET Core bajo Clean Architecture, integraciones bancarias y ERP de alta disponibilidad, interfaces Angular y despliegue en Azure con CI/CD.",
    trikoAppTech:
      ".NET, ASP.NET Core, Angular, Azure (App Services, Functions), REST APIs, CI/CD, Clean Architecture, SOLID.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "Supermercado en línea con operaciones en Colombia, México y Brasil. Desarrollé funcionalidades back-end en .NET integradas con sistemas externos en AWS, optimización SQL en MySQL e interfaces Angular para dashboard operativo y web de clientes.",
    merqueoProjectTech:
      ".NET, ASP.NET Core, Angular, AWS (Lambda, S3), MySQL, pruebas automatizadas, APIs REST.",

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
      "Systems Engineer · .NET / ASP.NET Core / Angular · Microservices · Cloud AWS / Azure · English B1",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "About Me",
    aboutText:
      "Systems Engineer with 8+ years of experience in software development with .NET and Angular, specialized in microservices, clean architectures, and design patterns in high-availability environments. 4 years of experience with AWS (Lambda, S3, EC2) and 3 years with Azure (IaaS, PaaS, SaaS). Strong skills in ASP.NET Core Web API, relational database optimization, and Angular frontend development. Focused on code quality, best practices, and delivering scalable solutions in agile teams. English B1.",

    // Hero CTA
    downloadCv: "Download CV",
    viewMyWork: "View My Work",
    contactMe: "Contact Me",

    // Skills section
    skillsTitle: "Skills",
    languages: "Languages",
    databases: "Databases",
    frameworks: "Frameworks and Tools",
    unitTesting: "Testing and Quality",
    methodologies: "Work Methodologies",
    documentation: "Documentation and UML",
    patterns: "Design Patterns and Architecture",
    cleanCode: "Clean code",
    solidPrinciples: "SOLID Principles",
    codeReview: "Code review",
    documentRequirements: "Document requirements",
    designPatterns: "Design patterns",
    architecture: "Architecture",
    hexagonalArchitecture: "Hexagonal architecture",

    // Experience section
    experienceTitle: "Experience",
    company: "Company",
    current: "Current",
    functions: "Functions",
    technologies: "Technologies",

    // Incluirtec
    incluirtecTitle: "Fullstack Developer",
    incluirtecCompany: "Incluirtec",
    incluirtecDate: "Mar 2026 - Present",
    incluirtecDesc1:
      "Develop and implement back-end features with .NET and ASP.NET Core Web API in high-availability production systems.",
    incluirtecDesc2:
      "Resolve production incidents, perform root cause analysis, and deploy fixes with minimal service impact.",
    incluirtecDesc3:
      "Build Angular interfaces integrating REST API consumption, state management, and reusable components.",
    incluirtecDesc4:
      "Apply development standards, peer code reviews, configuration management, and Azure deployments.",

    // Triko
    trikoTitle: "Senior Backend Developer",
    trikoCompany: "Triko",
    trikoDate: "Nov 2024 - Mar 2026",
    trikoDesc1:
      "Implemented microservices with .NET/ASP.NET Core under Clean Architecture and SOLID, integrated with high-availability banking systems and ERP, plus Angular frontend development.",
    trikoDesc2:
      "Developed and documented RESTful APIs, configured CI/CD pipelines, and validated dev/QA/prod environments deployed on Azure (App Services, Functions).",
    trikoDesc3:
      "Applied design patterns in the banking domain; active participation in code reviews and team best practices.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Developed back-end features in .NET integrated with external systems, deployed on AWS (Lambda, S3).",
    merqueoDesc2:
      "Optimized SQL queries (MySQL), automated testing, and Angular frontend development.",

    // Samsara
    samsaraTitle: "Software Development Co-Lead",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc1:
      "Full lifecycle development: REST/SOAP APIs with PHP and Laravel, MySQL database management, Azure (PaaS) deployment, and post-production support.",
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
    intermediate: "B1 (Intermediate) – Technical reading & communication.",
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

    // Projects section
    projectsTitle: "Projects I have collaborated on",
    personalProjects: "Personal Projects",
    techLabel: "Technologies:",
    seeMore: "See more...",

    // Triko App project
    trikoAppTitle: "TRIKO APP",
    trikoAppDesc:
      "Services marketplace with real-time auctions. I contributed .NET/ASP.NET Core microservices under Clean Architecture, high-availability banking and ERP integrations, Angular interfaces, and Azure deployment with CI/CD.",
    trikoAppTech:
      ".NET, ASP.NET Core, Angular, Azure (App Services, Functions), REST APIs, CI/CD, Clean Architecture, SOLID.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "Online supermarket operating in Colombia, Mexico, and Brazil. I built .NET back-end features integrated with external systems on AWS, MySQL SQL optimization, and Angular interfaces for operational dashboard and client web.",
    merqueoProjectTech:
      ".NET, ASP.NET Core, Angular, AWS (Lambda, S3), MySQL, automated testing, REST APIs.",

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
