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
      "Ingeniero de Sistemas | Desarrollador Fullstack Senior | PHP & Laravel · Vue.js · React · Angular · AWS",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "Sobre mí",
    aboutText:
      "Ingeniero de Sistemas y Desarrollador Fullstack Senior con más de 8 años de experiencia construyendo aplicaciones web de alto impacto. Especializado en PHP (Laravel y Symfony) para backend y Vue.js, React y Angular para frontend. Cuento con experiencia en APIs REST/SOAP, microservicios, Docker, AWS y CI/CD, con foco en rendimiento, calidad y mantenibilidad. He participado en plataformas con miles de usuarios activos y optimizaciones con mejoras de hasta 40% en eficiencia. Trabajo autónomo en entornos remotos y en equipos Agile/Scrum. Inglés técnico B1.",

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
      "Desarrollar e implementar funcionalidades para TRIKO APP mediante microservicios con PHP, Laravel, Symfony, AWS, Docker, Kubernetes, Linux, Bitbucket y Sentry.",
    trikoDesc2:
      "Diseñar y mantener APIs REST y microservicios de alta disponibilidad para integraciones bancarias con Java y Spring Boot.",
    trikoDesc3:
      "Publicar y mantener aplicaciones en producción con pipelines CI/CD automatizados y monitoreo continuo con Sentry.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Desarrollar e implementar funcionalidades back-end en múltiples proyectos con PHP (Laravel), Go, AWS (Lambda, S3, EC2), MySQL y DynamoDB.",
    merqueoDesc2:
      "Integrar requerimientos para dashboards internos y proyectos web-front, mejorando flujos operativos con Vue.js.",
    merqueoDesc3:
      "Realizar pruebas automatizadas, documentar APIs y optimizar consultas SQL en entornos de producción.",

    // Samsara
    samsaraTitle: "Co-líder de desarrollo de software",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc1:
      "Co-liderar el ciclo completo de desarrollo de una plataforma de salud a medida con PHP, Laravel, Symfony, APIs REST/SOAP, MySQL y jQuery.",
    samsaraDesc2:
      "Liderar levantamiento de requerimientos, diseño de sistema, desarrollo, pruebas, despliegue y soporte al cliente.",

    // USC
    uscTitle: "Desarrollador de software fullstack",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "Abr 2018 - Dic 2023",
    uscTech:
      "PHP (Laravel, Symfony), HTML, CSS3, JavaScript, Vue.js, Docker, Node.js, Oracle, GitLab y Ajax.",
    uscDesc1:
      "Construir y mantener sistemas de información con PHP (Laravel, Symfony), Docker, Oracle, Node.js, GitLab y Ajax.",
    uscDesc2:
      "Optimizar el sistema SIPAC logrando un 40% de mejora en eficiencia en seguimiento académico y soporte técnico.",
    uscDesc3:
      "Liderar el rediseño del SIPPU con seguimiento en tiempo real y reportes personalizados, incrementando la tasa de colocación de estudiantes en prácticas.",

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
      "Triko es un marketplace de servicios anónimos. Contribuí con microservicios back-end para TRIKO APP usando PHP (Laravel, Symfony), AWS, Docker y Kubernetes; integraciones bancarias de alta disponibilidad con Java y Spring Boot; y despliegue con CI/CD y monitoreo con Sentry.",
    trikoAppTech:
      "PHP (Laravel, Symfony), Java (Spring Boot), AWS, Docker, Kubernetes, REST/SOAP, CI/CD, Sentry.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "Desarrollé funcionalidades back-end con PHP (Laravel), Go y AWS (Lambda, S3, EC2), MySQL y DynamoDB; pruebas automatizadas y documentación de APIs; e integración de dashboards y front web con Vue.js.",
    merqueoProjectTech:
      "PHP (Laravel), Go, AWS (Lambda, S3, EC2), MySQL, DynamoDB, Vue.js, PHPUnit, Mockery, Sentry.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "Co-lideré el ciclo de desarrollo de una plataforma de salud con PHP, Laravel, Symfony, APIs REST/SOAP, MySQL y jQuery; levantamiento de requerimientos, despliegue y soporte al cliente.",
    samsaraMobiTech:
      "PHP (Laravel, Symfony), MySQL, REST/SOAP, jQuery, Sentry, SOLID.",

    // SIPAC project
    sipacTitle:
      "Sistema de Información para el Aseguramiento de la Calidad (SIPAC)",
    sipacDesc:
      "En la Universidad Santiago de Cali optimicé SIPAC (40% de mejora en eficiencia) y lideré el rediseño del SIPPU con seguimiento en tiempo real y reportes para prácticas y pasantías.",
    sipacTech:
      "PHP (Laravel, Symfony), Vue.js, Docker, Oracle, Node.js, GitLab, Ajax, APIs REST/SOAP.",

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
    subtitle:
      "Systems Engineer | Senior Fullstack Developer | PHP & Laravel · Vue.js · React · Angular · AWS",
    location: "Santiago de Cali, Colombia",
    phone: "+57 3188640454",
    aboutTitle: "About Me",
    aboutText:
      "Systems Engineer and Senior Fullstack Developer with 8+ years of experience building high-impact web applications. Specialized in PHP (Laravel and Symfony) for backend and Vue.js, React, and Angular for frontend. Hands-on experience with REST/SOAP APIs, microservices, Docker, AWS, and CI/CD, focused on performance, quality, and maintainability. I have worked on platforms with thousands of active users and delivered optimizations with up to 40% efficiency gains. Strong remote collaboration in Agile/Scrum environments. English B1 (technical).",

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
      "Develop and implement features for TRIKO APP using backend microservices with PHP, Laravel, Symfony, AWS, Docker, Kubernetes, Linux, Bitbucket, and Sentry.",
    trikoDesc2:
      "Design and maintain high-availability RESTful APIs and microservices for banking integrations using Java with Spring Boot.",
    trikoDesc3:
      "Publish and maintain production applications with automated CI/CD pipelines and continuous monitoring with Sentry.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "Nov 2024 - Jul 2025",
    merqueoDesc1:
      "Develop and implement backend features across multiple projects using PHP (Laravel), Go, AWS (Lambda, S3, EC2), MySQL, and DynamoDB.",
    merqueoDesc2:
      "Integrate requirements for internal dashboard and client-facing web-front projects, improving operational workflows with Vue.js.",
    merqueoDesc3:
      "Perform automated testing, document APIs, and optimize SQL queries in production environments.",

    // Samsara
    samsaraTitle: "Software Development Co-Lead",
    samsaraCompany: "Samsara Med",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc1:
      "Co-led the full software development lifecycle of a custom healthcare platform using PHP, Laravel, Symfony, REST/SOAP APIs, MySQL, and jQuery.",
    samsaraDesc2:
      "Led requirements gathering, system design, development, testing, deployment, and client support.",

    // USC
    uscTitle: "Fullstack Software Developer",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "Apr 2018 - Dec 2023",
    uscTech:
      "PHP (Laravel, Symfony), HTML, CSS3, JavaScript, Vue.js, Docker, Node.js, Oracle, GitLab, and Ajax.",
    uscDesc1:
      "Built and maintained information systems using PHP (Laravel, Symfony), Docker, Oracle, Node.js, GitLab, and Ajax.",
    uscDesc2:
      "Optimized SIPAC achieving a 40% efficiency improvement in academic tracking and technical support.",
    uscDesc3:
      "Led the redesign of SIPPU with real-time tracking and custom reports, increasing student internship placement rates.",

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
      "Triko is an anonymous services marketplace. I contributed backend microservices for TRIKO APP using PHP (Laravel, Symfony), AWS, Docker, and Kubernetes; high-availability banking integrations with Java and Spring Boot; and deployments with CI/CD and Sentry monitoring.",
    trikoAppTech:
      "PHP (Laravel, Symfony), Java (Spring Boot), AWS, Docker, Kubernetes, REST/SOAP, CI/CD, Sentry.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "I built backend features with PHP (Laravel), Go, AWS (Lambda, S3, EC2), MySQL, and DynamoDB; automated testing and API documentation; and Vue.js dashboards for internal and client-facing workflows.",
    merqueoProjectTech:
      "PHP (Laravel), Go, AWS (Lambda, S3, EC2), MySQL, DynamoDB, Vue.js, PHPUnit, Mockery, Sentry.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "I co-led development of a healthcare platform using PHP, Laravel, Symfony, REST/SOAP APIs, MySQL, and jQuery; requirements, deployment, and client support.",
    samsaraMobiTech:
      "PHP (Laravel, Symfony), MySQL, REST/SOAP, jQuery, Sentry, SOLID.",

    // SIPAC project
    sipacTitle: "Quality Assurance Information System (SIPAC)",
    sipacDesc:
      "At Universidad Santiago de Cali I optimized SIPAC (40% efficiency gain) and led the SIPPU redesign with real-time tracking and reports for internships and practices.",
    sipacTech:
      "PHP (Laravel, Symfony), Vue.js, Docker, Oracle, Node.js, GitLab, Ajax, REST/SOAP APIs.",

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
