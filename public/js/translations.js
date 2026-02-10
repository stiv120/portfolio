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
      "Cuento con más de 8 años de experiencia en el desarrollo y diseño de aplicaciones web, utilizando tecnologías modernas. También cuento con la capacidad de desarrollar aplicaciones a la medida y adaptarme al mantenimiento de código en proyectos ya desarrollados. Soy orientado a resultados, apasionado por los desafíos del mundo del desarrollo, con gran empatía y aptitud para el trabajo en equipo. Me caracterizo por ser propositivo, en pro de aportar soluciones tecnológicas eficientes.",

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
    trikoDate: "2024 - Actual",
    trikoDesc1:
      "Desarrollar e implementar funcionalidades al aplicativo TRIKO APP, por medio de microservicios desarrollados en .NET, Angular, AWS, Docker, Bitbucket.",
    trikoDesc2:
      "Implementar integraciones bancarias de alta disponibilidad mediante APIs RESTful y microservicios utilizando Java con Spring Boot.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo",
    merqueoDate: "2024 - 2025",
    merqueoDesc1:
      "Desarrollar funcionalidades para diversos proyectos utilizando .NET, Go, Java con Spring Boot, AWS (Lambda, S3, EC2), MySQL y DynamoDB.",
    merqueoDesc2:
      "Integrar requerimientos para dashboards internos y proyectos web-front, optimizando procesos operativos y de atención al cliente.",

    // Samsara
    samsaraTitle: "Co-líder de desarrollo de software",
    samsaraCompany: "Samsara Med",
    samsaraDate: "2023 - 2024",
    samsaraDesc:
      "Co-liderar y participar en todo el ciclo de vida del desarrollo de un software personalizado para el sector salud, utilizando PHP con Laravel, MySQL, HTML, CSS3, jQuery, Node.js.",

    // USC
    uscTitle: "Desarrollador de software",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "2018 - 2023",
    current: "Actual",
    uscTech:
      ".NET, PHP, Angular, JavaScript, Docker, Node.js, Oracle y GitLab",
    uscDesc1:
      "Implementar mejoras en el Sistema de Información para el Aseguramiento de la Calidad (SIPAC), optimizando su eficiencia en un 40% y facilitando el seguimiento académico.",
    uscDesc2:
      "Liderar y desarrollar la actualización del Sistema de Información de Prácticas y Pasantías Universitarias (SIPPU), incorporando funcionalidades de seguimiento en tiempo real y reportes personalizados, incrementando la tasa de colocación de estudiantes en prácticas.",

    // Education section
    professionalEducation: "Formación Profesional",
    complementaryEducation: "Formación Complementaria",
    languagesTitle: "Idiomas",
    english: "Inglés",
    intermediate: "Intermedio",
    spanish: "Español",
    native: "Nativo",

    // Education items
    systemsEngineering: "Ingeniería de Sistemas",
    remington: "Corporación Universitaria Remington",
    remingtonDate: "2021 - 2023",
    technologyAnalysis:
      "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
    sena: "SENA (Servicio Nacional de Aprendizaje)",
    senaDate: "2016 - 2018",
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
      "Triko es el primer mercado de servicios con ofertas anónimas que conecta clientes con proveedores de servicios locales confiables. La plataforma opera en Estados Unidos a través de su aplicación móvil para Android e IOS, permitiendo publicar solicitudes de servicio gratis, recibir múltiples ofertas de proveedores verificados mediante un sistema tipo subasta en tiempo real, y compartir información de contacto solo con el postor favorito. Sin suscripciones ni necesidad de tarjeta de crédito, priorizando transparencia, privacidad y seguridad.",
    trikoAppTech:
      ".NET, Angular, AWS, Docker, Bitbucket, Java con Spring Boot, Microservicios, APIs RESTful.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "Merqueo fue una empresa colombiana que operaba como supermercado en línea, permitiendo a los usuarios realizar compras de mercado a través de su página web y aplicación móvil. La plataforma permitía seleccionar productos, programar horarios de entrega y elegir métodos de pago. La compañía gestionaba directamente su cadena de suministro, almacenando productos en sus propios centros de distribución y realizando entregas sin intermediarios, ofreciendo precios competitivos y optimizando tiempos de entrega. Operó en ciudades de Colombia, México y Brasil. La aplicación móvil y página web incluían dashboard operativo para gestión interna y web-front para clientes.",
    merqueoProjectTech:
      ".NET, Go, Java con Spring Boot, AWS (Lambda, S3, EC2), MySQL, DynamoDB.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "Software hecho a la medida para el sector de la salud, en la cual se gestionan la agenda de cada paciente, su línea de tiempo, reportes detallados de cada historia clínica y generación de rips.",
    samsaraMobiTech:
      "PHP con Laravel, MySQL, HTML, CSS3, jQuery, Node.js.",

    // SIPAC project
    sipacTitle:
      "Sistema de Información para el Aseguramiento de la Calidad (SIPAC)",
    sipacDesc:
      "Sistema de Información hecho para la Universidad Santiago de Cali. Incluye mejoras que optimizan la eficiencia en un 40% y facilitan el seguimiento académico. Destacan el sistema de información SIPPU para prácticas y pasantías universitarias con seguimiento en tiempo real y reportes personalizados.",
    sipacTech:
      ".NET, PHP, Angular, JavaScript, Docker, Node.js, Oracle, GitLab.",

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
      "Results-driven software engineer with over 8 years of experience developing and designing web applications using modern technologies. Proven ability to build custom applications from scratch and maintain existing codebases. Passionate about solving complex development challenges with strong empathy and exceptional teamwork skills. Proactive problem-solver focused on delivering efficient, scalable technological solutions.",

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
    trikoDate: "2024 - Present",
    trikoDesc1:
      "Develop and implement features for the TRIKO APP application through microservices built with .NET, Angular, AWS, Docker, and Bitbucket.",
    trikoDesc2:
      "Implement high-availability banking integrations through RESTful APIs and microservices using Java with Spring Boot.",

    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo",
    merqueoDate: "2024 - 2025",
    merqueoDesc1:
      "Develop features for various projects using .NET, Go, Java with Spring Boot, AWS (Lambda, S3, EC2), MySQL, and DynamoDB.",
    merqueoDesc2:
      "Integrate requirements for internal dashboards and web-front projects, optimizing operational processes and customer service.",

    // Samsara
    samsaraTitle: "Software Development Co-leader",
    samsaraCompany: "Samsara Med",
    samsaraDate: "2023 - 2024",
    samsaraDesc:
      "Co-lead and participate in the full software development lifecycle for custom healthcare sector software using PHP with Laravel, MySQL, HTML, CSS3, jQuery, and Node.js.",

    // USC
    uscTitle: "Software Developer",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "2018 - 2023",
    uscTech:
      ".NET, PHP, Angular, JavaScript, Docker, Node.js, Oracle and GitLab",
    uscDesc1:
      "Implement improvements to the Quality Assurance Information System (SIPAC), optimizing its efficiency by 40% and facilitating academic tracking.",
    uscDesc2:
      "Lead and develop the update of the University Internships and Practices Information System (SIPPU), incorporating real-time tracking and customized reports, increasing the student placement rate in internships.",

    // Education section
    professionalEducation: "Professional Education",
    complementaryEducation: "Complementary Education",
    languagesTitle: "Languages",
    english: "English",
    intermediate: "Intermediate",
    spanish: "Spanish",
    native: "Native",

    // Education items
    systemsEngineering: "Systems Engineering",
    remington: "Corporación Universitaria Remington",
    remingtonDate: "2021 - 2023",
    technologyAnalysis:
      "Information Systems Analysis and Development Technologist",
    sena: "SENA (Servicio Nacional de Aprendizaje)",
    senaDate: "2016 - 2018",
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
      "Triko is the first anonymous service marketplace that connects customers with trusted local service providers. The platform operates in the United States through its mobile application for Android and iOS, allowing users to post free service requests, receive multiple offers from verified providers through a real-time auction system, and share contact information only with the preferred bidder. No subscriptions or credit card required, prioritizing transparency, privacy and security.",
    trikoAppTech:
      ".NET, Angular, AWS, Docker, Bitbucket, Java with Spring Boot, Microservices, RESTful APIs.",

    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc:
      "Merqueo was a Colombian company that operated as an online supermarket, enabling users to make grocery purchases through its website and mobile application. The platform enabled product selection, delivery time scheduling, and payment method selection. The company managed its supply chain directly, storing products in its own distribution centers and making deliveries without intermediaries, offering competitive prices and optimizing delivery times. It operated in cities across Colombia, Mexico, and Brazil. The mobile application and website included an operational dashboard for internal management and a web-front for customers.",
    merqueoProjectTech:
      ".NET, Go, Java with Spring Boot, AWS (Lambda, S3, EC2), MySQL, DynamoDB.",

    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc:
      "Custom healthcare software that manages patient schedules, timelines, detailed medical record reports, and RIPS (Registro Individual de Prestación de Servicios) generation.",
    samsaraMobiTech:
      "PHP with Laravel, MySQL, HTML, CSS3, jQuery, Node.js.",

    // SIPAC project
    sipacTitle: "Quality Assurance Information System (SIPAC)",
    sipacDesc:
      "Information system developed for Universidad Santiago de Cali, which includes modules such as performance evaluation of teachers and administrators, certificates and work permits for the human resources department, the SIPPU information system for university internships and practices, and the general Research system (DGI).",
    sipacTech:
      "PHP, JavaScript, Java, Spring Boot, Laravel, Oracle, ORM Eloquent, HTML, CSS3, Bootstrap, jQuery, Node.js, Express.js, Docker, Git, GitLab, Gitflow, CI/CD, JSON, PHP Unit, Jest, Scrum, Clean code, SOLID principles, Code review, UML Documentation.",

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
