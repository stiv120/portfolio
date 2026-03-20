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
    subtitle: "Ingeniero de Sistemas",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "Sobre mí",
    aboutText:
      "Backend developer enfocado en microservicios y serverless: diseño APIs robustas y mantenibles con Node.js/TypeScript y PHP (Laravel/Symfony), y orquesto colas y eventos en AWS para alta disponibilidad. Trabajo con mentalidad de ownership, disfruto el code review y uso IA (Copilot/Cursor) para entregar más rápido sin sacrificar calidad. Si buscas servicios estables, escalables y medibles, hablemos.",

    // Hero CTA
    downloadCv: "Descargar CV",
    viewMyWork: "Ver mis proyectos",
    contactMe: "Contáctame",

    // Skills section
    skillsTitle: "Habilidades",
    languages: "Lenguajes",
    databases: "Bases de Datos",
    frameworks: "Frameworks y Herramientas",
    unitTesting: "Pruebas Unitarias",
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

    // Triko
    trikoTitle: "Senior Backend Developer",
    trikoCompany: "Triko",
    trikoDate: "Nov 2024 - Actual",
    trikoDesc1:
      "Diseñar e implementar microservicios de alta disponibilidad para TRIKO APP usando Node.js, PHP, Laravel, Symfony, AWS (Lambda, SQS, SNS), Docker, Kubernetes y Serverless Framework — plataforma fintech.",
    trikoDesc2:
      "Implementar integraciones bancarias mediante APIs RESTful y SOAP con Java Spring Boot. Gestionar colas y eventos asincrónicos con AWS SQS y CI/CD automatizado.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Desarrollar APIs REST y servicios backend con Node.js, PHP (Laravel, Symfony), Go, AWS (Lambda, S3, EC2), MySQL, DynamoDB con pruebas automatizadas completas (PHPUnit, Jest).",
    merqueoDesc2:
      "Integrar dashboards internos en Vue.js optimizando procesos operativos y de atención al cliente.",

    // Samsara
    samsaraTitle: "Co-líder de desarrollo de software",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc:
      "Co-liderar el ciclo completo de desarrollo de una plataforma de salud: arquitectura, desarrollo, despliegue y soporte con Node.js, PHP, Laravel, MySQL, Web Services REST/SOAP y principios SOLID.",

    // USC
    uscTitle: "Desarrollador de software",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "Abr 2018 - Dic 2023",
    current: "Actual",
    uscTech:
      "Node.js, PHP, Laravel, Symfony, Docker, Oracle, GitLab, Web Services (REST/SOAP).",
    uscDesc1:
      "Optimizar el sistema SIPAC logrando 40% de mejora en eficiencia, facilitando el seguimiento académico y el soporte técnico.",
    uscDesc2:
      "Liderar el rediseño del sistema SIPPU con seguimiento en tiempo real, incrementando la tasa de colocación de estudiantes.",

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
    dataStructures: "Curso Práctico de Estructuras de Datos y Algoritmos",
    goCourse: "Curso de Programación en Go",
    awsCourse: "Introducción a AWS: Fundamentos de Computación en la Nube",
    goodPractices: "Buenas prácticas para la escritura de código",
    platzi: "Platzi",
    hours2025: "2025",
    hours2024: "2024",
    dotnetBootcamp: "Bootcamp backend .NET",
    wwcode: "WWCode Medellín y Perficient Latam",
    bootcampDate: "2023",
    laravelPackages: "Aprende a crear paquetes reutilizables para Laravel PHP",
    laravelIntro: "Curso de Introducción a Laravel 8",
    laravelIntroDate: "2020",
    udemy: "Udemy",
    udemyDate: "2021",
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
      "Triko es un marketplace de servicios anónimos. En mi rol diseñé e implementé microservicios de alta disponibilidad para TRIKO APP con Node.js, PHP (Laravel/Symfony) y AWS (Lambda, SQS, SNS), usando Docker, Kubernetes y Serverless Framework. Gestioné integraciones bancarias mediante APIs REST y SOAP para asegurar flujos confiables y asincrónicos en una plataforma fintech.",
    trikoAppTech:
      "Node.js, PHP (Laravel, Symfony), AWS (Lambda, SQS, SNS), Docker, Kubernetes, Serverless Framework, APIs REST/SOAP, CI/CD, Sentry, JWT, YAML.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "En Merqueo desarrollé APIs REST y servicios backend con Node.js, PHP (Laravel/Symfony) y Go. Implementé integración con AWS (Lambda, S3, EC2) usando MySQL y DynamoDB, y construí pruebas automatizadas completas (PHPUnit y Jest). Además, integré dashboards internos en Vue.js optimizando la operación y la atención al cliente.",
    merqueoProjectTech:
      "Node.js, PHP (Laravel, Symfony), Go, AWS (Lambda, S3, EC2), MySQL, DynamoDB, PHPUnit, Jest, Vue.js, Sentry.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "Co-lideré el ciclo completo de desarrollo y soporte de una plataforma para el sector salud. Implementé componentes backend con Node.js y PHP (Laravel), integré Web Services REST/SOAP, trabajé con MySQL y jQuery, y apliqué principios SOLID y code review para mantener calidad y estabilidad.",
    samsaraMobiTech:
      "Node.js, PHP (Laravel), MySQL, REST/SOAP, jQuery, Sentry, SOLID.",

    // SIPAC project
    sipacTitle:
      "Sistema de Información para el Aseguramiento de la Calidad (SIPAC)",
    sipacDesc:
      "En la Universidad Santiago de Cali optimicé SIPAC logrando 40% de mejora en eficiencia. Lideré el rediseño del sistema SIPPU con seguimiento en tiempo real y reportes personalizados para prácticas y pasantías universitarias.",
    sipacTech:
      "Node.js, PHP, Laravel, Symfony, Docker, Oracle, GitLab, APIs REST/SOAP.",

    // APPS project
    appsTitle: "Aplicación de Pagos en línea (APPS)",
    appsDesc:
      "Aplicación de pagos en línea, en la cual se integran los métodos de pagos por medio de la plataforma place to pay, para el proceso de matrículas académicas en la Universidad Santiago de Cali.",
    appsTech:
      "PHP, JavaScript, Java, Spring Boot, Laravel, Oracle, ORM Eloquent, HTML, CSS3, Bootstrap, jQuery, Node.js, Express.js, Docker, Git, GitLab, Gitflow, CI/CD, JSON, PHP Unit, Jest, Scrum, Código limpio, Principios SOLID, Code review, Documentación UML.",

    // Personal projects
    geolocationTitle: "App de geolocalización - React con PHP",
    geolocationDesc:
      "El proyecto es una app hecha con React.js para el frontend que consume una API de OpenWheater para mostrar la humedad de las ciudades que el usuario seleccione, a su vez se muestra la ciudad seleccionada en un mapa mediante la librería leaflet, se almacena un historial de consultas en una base de datos MySQL mediante una API hecha en PHP como backend.",
    geolocationTech:
      "React.js, PHP, Laravel, MySQL, JavaScript, Bootstrap, jQuery, Leaflet, JSON, GitHub, OpenWeather API.",

    eventsApiTitle: "API de gestión de eventos",
    eventsApiDesc:
      "API RESTful hecha en nodejs con docker para una plataforma de gestión de eventos. Esta plataforma permitirá a los usuarios crear, promocionar y gestionar eventos de manera efectiva. Los usuarios podrán registrarse para asistir a eventos al igual que ver detalles sobre los eventos como información detallada o lugares cercanos.",
    eventsApiTech:
      "Node.js, Express.js, JavaScript, Docker, JSON, Jest, MySQL, GitHub.",
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
    subtitle: "Systems Engineer",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "About Me",
    aboutText:
      "Backend developer focused on microservices and serverless: I design robust, maintainable APIs with Node.js/TypeScript and PHP (Laravel/Symfony), and orchestrate queues and events on AWS for high availability. I work with an ownership mindset, enjoy code review, and use AI tools (Copilot/Cursor) to deliver faster without sacrificing quality. If you need stable, scalable, measurable services, let's talk.",

    // Hero CTA
    downloadCv: "Download CV",
    viewMyWork: "View My Work",
    contactMe: "Contact Me",

    // Skills section
    skillsTitle: "Skills",
    languages: "Languages",
    databases: "Databases",
    frameworks: "Frameworks and Tools",
    unitTesting: "Unit Testing",
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

    // Triko
    trikoTitle: "Senior Backend Developer",
    trikoCompany: "Triko",
    trikoDate: "Nov 2024 - Present",
    trikoDesc1:
      "Design and implement high-availability microservices for TRIKO APP using Node.js, PHP, Laravel, Symfony, AWS (Lambda, SQS, SNS), Docker, Kubernetes, and Serverless Framework — fintech platform.",
    trikoDesc2:
      "Implement high-availability banking integrations through RESTful APIs and SOAP with Java Spring Boot. Manage queues and asynchronous events with AWS SQS and automated CI/CD.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Develop REST APIs and backend services with Node.js, PHP (Laravel, Symfony), Go, AWS (Lambda, S3, EC2), MySQL, DynamoDB, with complete automated testing (PHPUnit, Jest).",
    merqueoDesc2:
      "Integrate internal dashboards in Vue.js, optimizing operational workflows and customer support.",

    // Samsara
    samsaraTitle: "Software Development Co-leader",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc:
      "Co-lead the full development lifecycle of a healthcare platform: architecture, development, deployment, and support with Node.js, PHP, Laravel, MySQL, Web Services (REST/SOAP), and SOLID principles.",

    // USC
    uscTitle: "Software Developer",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "Apr 2018 - Dec 2023",
    uscTech:
      "Node.js, PHP, Laravel, Symfony, Docker, Oracle, GitLab, Web Services (REST/SOAP).",
    uscDesc1:
      "Optimize SIPAC, achieving a 40% efficiency improvement while facilitating academic tracking and technical support.",
    uscDesc2:
      "Lead the redesign of SIPPU with real-time tracking, increasing the student placement rate.",

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
    dataStructures: "Practical Course on Data Structures and Algorithms",
    goCourse: "Go Programming Course",
    awsCourse: "Introduction to AWS: Fundamentals of Cloud Computing",
    goodPractices: "Best Practices for Code Writing",
    platzi: "Platzi",
    hours2025: "2025",
    hours2024: "2024",
    dotnetBootcamp: ".NET Backend Bootcamp",
    wwcode: "WWCode Medellín and Perficient Latam",
    bootcampDate: "2023",
    laravelPackages: "Learn how to create reusable packages for Laravel PHP",
    laravelIntro: "Laravel 8 Introduction Course",
    laravelIntroDate: "2020",
    udemy: "Udemy",
    udemyDate: "2021",
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
      "Triko is an anonymous services marketplace. In my role I designed and implemented high-availability microservices for TRIKO APP using Node.js, PHP (Laravel/Symfony) and AWS (Lambda, SQS, SNS), with Docker, Kubernetes, and the Serverless Framework. I also managed banking integrations through REST and SOAP APIs to ensure reliable, asynchronous payment flows in a fintech platform.",
    trikoAppTech:
      "Node.js, PHP (Laravel, Symfony), AWS (Lambda, SQS, SNS), Docker, Kubernetes, Serverless Framework, REST/SOAP APIs, CI/CD, Sentry, JWT, YAML.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "At Merqueo I developed REST APIs and backend services with Node.js, PHP (Laravel/Symfony) and Go. I implemented integrations on AWS (Lambda, S3, EC2) using MySQL and DynamoDB, and built full automated testing (PHPUnit and Jest). I also integrated internal dashboards in Vue.js to optimize operations and customer support.",
    merqueoProjectTech:
      "Node.js, PHP (Laravel, Symfony), Go, AWS (Lambda, S3, EC2), MySQL, DynamoDB, PHPUnit, Jest, Vue.js, Sentry.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "I co-led the full development and support lifecycle of a healthcare platform. I implemented backend components with Node.js and PHP (Laravel), integrated Web Services REST/SOAP, worked with MySQL and jQuery, and applied SOLID principles and code review to keep quality and stability.",
    samsaraMobiTech:
      "Node.js, PHP (Laravel), MySQL, REST/SOAP, jQuery, Sentry, SOLID.",

    // SIPAC project
    sipacTitle: "Quality Assurance Information System (SIPAC)",
    sipacDesc:
      "At Universidad Santiago de Cali I optimized SIPAC, achieving a 40% improvement in efficiency. I led the redesign of SIPPU with real-time tracking and customized reports for internships and university practices.",
    sipacTech:
      "Node.js, PHP, Laravel, Symfony, Docker, Oracle, GitLab, REST/SOAP APIs.",

    // APPS project
    appsTitle: "Online Payment Application (APPS)",
    appsDesc:
      "Online payment application that integrates payment methods through the PlaceToPay platform for the academic enrollment process at Universidad Santiago de Cali.",
    appsTech:
      "PHP, JavaScript, Java, Spring Boot, Laravel, Oracle, ORM Eloquent, HTML, CSS3, Bootstrap, jQuery, Node.js, Express.js, Docker, Git, GitLab, Gitflow, CI/CD, JSON, PHP Unit, Jest, Scrum, Clean code, SOLID principles, Code review, UML Documentation.",

    // Personal projects
    geolocationTitle: "Geolocation App - React with PHP",
    geolocationDesc:
      "A React.js frontend application that consumes the OpenWeather API to display humidity data for user-selected cities. The selected city is displayed on an interactive map using the Leaflet library. Query history is stored in a MySQL database through a PHP backend API.",
    geolocationTech:
      "React.js, PHP, Laravel, MySQL, JavaScript, Bootstrap, jQuery, Leaflet, JSON, GitHub, OpenWeather API.",

    eventsApiTitle: "Event Management API",
    eventsApiDesc:
      "RESTful API built with Node.js and Docker for an event management platform. This platform enables users to create, promote, and manage events effectively. Users can register to attend events and view event details including comprehensive information and nearby locations.",
    eventsApiTech:
      "Node.js, Express.js, JavaScript, Docker, JSON, Jest, MySQL, GitHub.",
  },
};
