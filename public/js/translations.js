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
    phone: "+57 3178477487",
    aboutTitle: "Sobre mí",
    aboutText: "Cuento con más de 7 años de experiencia en el desarrollo y diseño de aplicaciones web, utilizando tecnologías modernas, también cuento con la capacidad de desarrollar aplicaciones a la medida y a la vez adaptarme al mantenimiento de código en proyectos ya desarrollados. Soy orientado a resultados, apasionado por los desafíos del mundo del desarrollo, con gran empatía y aptitud para el trabajo en equipo. Me caracterizo por ser propositivo, en pro de aportar soluciones tecnológicas eficientes.",
    
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
    trikoTitle: "Backend developer senior",
    trikoCompany: "Triko",
    trikoDate: "Noviembre 2024 - Actual",
    trikoDesc1: "Desarrollar e implementar funcionalidades al aplicativo TRIKO APP, por medio de microservicio desarrollados en PHP con Laravel, .NET, ASP .NET Core web API, AWS, Docker, entre otros.",
    trikoDesc2: "Implementar integraciones bancarias de alta disponibilidad por medio de APIs RESTful y microservicios en Java con Spring Boot.",
    
    // Merqueo
    merqueoTitle: "Backend developer",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "Noviembre 2024 - Julio 2025",
    merqueoDesc1: "Desarrollar e implementar funcionalidades en diferentes proyectos, bajo PHP con Laravel, Go, Java con Spring Boot, .NET, ASP .NET Core web API, AWS (Lambda, S3, EC2), BD: MySQL y DynamoDB, front (Vue.js) desde el S.O Linux.",
    merqueoDesc2: "Integrar requisitos en el proyecto dashboard (para los operativos) y en el proyecto Web-front (para los clientes) facilitando los procesos de los involucrados.",
    
    // Samsara
    samsaraTitle: "Co-líder de Desarrollo de Software",
    samsaraCompany: "Samsara Med (Medicina Funcional)",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc: "Co-liderar y participar en todo el ciclo de vida del desarrollo de un software a la medida para el sector de la salud, en PHP, bajo el framework Laravel, Java con Spring Boot, .NET, ASP .NET Core web API, entre otras tecnologías.",
    samsaraFunc1: "Análisis y levantamiento de requisitos.",
    samsaraFunc2: "Diseño general del sistema.",
    samsaraFunc3: "Desarrollo e implementación.",
    samsaraFunc4: "Validaciones, pruebas, mantenimiento y soporte del código.",
    
    // USC
    uscTitle: "Desarrollador de software",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "Abril 2018 - Diciembre 2023",
    current: "Actual",
    uscTech: "PHP Laravel, Java con Spring Boot, .NET, ASP .NET Core web API, HTML, CSS3, Javascript, Docker, Node.js, Oracle y GitLab",
    uscDesc1: "Implementar mejoras en el Sistema de Información Para el Aseguramiento de la Calidad (SIPAC) optimizando la eficiencia en un 40% y facilitando el seguimiento académico.",
    uscDesc2: "Desarrollar una aplicación de pagos en línea, integrando métodos de pago por medio de Place to pay.",
    uscDesc3: "Liderar y desarrollar la actualización del Sistema de Información de Prácticas y Pasantías Universitarias (SIPPU).",
    
    // Education section
    professionalEducation: "Formación Profesional",
    complementaryEducation: "Formación Complementaria",
    languagesTitle: "Idiomas",
    english: "Inglés",
    intermediate: "Intermedio",
    
    // Education items
    systemsEngineering: "Ingeniería de Sistemas",
    remington: "Corporación Universitaria Remington",
    end2023: "Fin 2023",
    technologyAnalysis: "Tecnología en Análisis y Desarrollo de Sistemas de Información",
    sena: "SENA",
    senaDate: "2016 - 2018",
    dataStructures: "Curso Práctico de Estructuras de Datos y Algoritmos",
    goCourse: "Curso de Go",
    goodPractices: "Buenas prácticas para la escritura de código",
    platzi: "Platzi",
    hours2025: "20 h, 2025",
    hours2024: "20 h, 2024",
    dotnetBootcamp: "Bootcamp backend .NET",
    wwcode: "WWCode Medellín y Perficient Latam",
    bootcampDate: "Jul - Sep 2023",
    laravelPackages: "Aprende a crear paquetes reutilizables para Laravel PHP",
    udemy: "Udemy",
    udemyDate: "Oct 2021",
    scrumFundamentals: "Scrum Fundamentals Certified",
    scrumstudy: "ScrumStudy",
    scrumDate: "Jun 22, 2020",
    dbSpecialization: "Esp. Tecnológica en Gestión y Seguridad de Bases de Datos (SQL Server, Oracle y MongoDB)",
    senaMonths: "6 meses, 2019",
    
    // Projects section
    projectsTitle: "Proyectos en los que he colaborado",
    personalProjects: "Proyectos personales",
    techLabel: "Tecnologías:",
    seeMore: "Ver más..",
    
    // Triko App project
    trikoAppTitle: "TRIKO APP",
    trikoAppDesc: "Triko es el primer mercado de servicios con ofertas anónimas que conecta clientes con proveedores de servicios locales confiables. La plataforma opera en Estados Unidos a través de su aplicación móvil para Android e IOS, permitiendo publicar solicitudes de servicio gratis, recibir múltiples ofertas de proveedores verificados mediante un sistema tipo subasta en tiempo real, y compartir información de contacto solo con el postor favorito. Sin suscripciones ni necesidad de tarjeta de crédito, priorizando transparencia, privacidad y seguridad.",
    trikoAppTech: "PHP con Laravel, Java con Spring Boot, .NET, ASP .NET Core web API, AWS (Lambda, S3, EC2), Docker, Microservicios, APIs RESTful.",
    
    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc: "Merqueo fue una empresa colombiana que operaba como supermercado en línea, permitiendo a los usuarios realizar compras de mercado a través de su página web y aplicación móvil. La plataforma permitía seleccionar productos, programar horarios de entrega y elegir métodos de pago. La compañía gestionaba directamente su cadena de suministro, almacenando productos en sus propios centros de distribución y realizando entregas sin intermediarios, ofreciendo precios competitivos y optimizando tiempos de entrega. Operó en ciudades de Colombia, México y Brasil. La aplicación móvil y página web incluían dashboard operativo para gestión interna y web-front para clientes.",
    merqueoProjectTech: "PHP con Laravel, Go, Java con Spring Boot, .NET, ASP .NET Core web API, Vue.js, AWS (Lambda, S3, EC2), MySQL, DynamoDB, Linux.",
    
    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc: "Software hecho a la medida para el sector de la salud, en la cual se gestionan la agenda de cada paciente, su línea de tiempo, reportes detallados de cada historia clínica y generación de rips.",
    samsaraMobiTech: "PHP con Laravel, Java con Spring Boot, .NET, ASP .NET Core web API, MySQL, HTML, CSS3, Git, Bootstrap 5, JQuery, Node.js, Patrones de diseño y Arquitectura, Arquitectura limpia, clean code y principios SOLID, entre otros.",
    
    // SIPAC project
    sipacTitle: "Sistema de Información para el Aseguramiento de la Calidad (SIPAC)",
    sipacDesc: "Sistema de Información hecho para la Universidad Santiago de Cali, entre la cual se destacan módulos cómo Evaluación de desempeño de docentes y administrativos, certificados y permisos laborales para el departamento de gestión humana, el sistema de información SIPPU para prácticas y pasantías universitarias y el sistema general de Investigaciones, DGI.",
    sipacTech: "Está hecho en PHP y JavaScript, bajo el framework Laravel y empleando Oracle cómo gestor de base de datos, HTML, CSS3, Bootstrap 5, JQuery, Node.js, Docker, Git, entre otros.",
    
    // APPS project
    appsTitle: "Aplicación de Pagos en línea (APPS)",
    appsDesc: "Aplicación de pagos en línea, en la cual se integran los métodos de pagos por medio de la plataforma place to pay, para el proceso de matrículas académicas en la Universidad Santiago de Cali.",
    appsTech: "Está hecho en PHP y JavaScript, bajo el framework Laravel y empleando Oracle cómo gestor de base de datos, HTML, CSS3, Bootstrap 5, JQuery, Node.js, Docker, Git, entre otros.",
    
    // Personal projects
    geolocationTitle: "App de geolocalización - React con PHP",
    geolocationDesc: "El proyecto es una app hecha con React.js para el frontend que consume una API de OpenWheater para mostrar la humedad de las ciudades que el usuario seleccione, a su vez se muestra la ciudad seleccionada en un mapa mediante la librería leaflet, se almacena un historial de consultas en una base de datos MySQL mediante una API hecha en PHP como backend.",
    
    eventsApiTitle: "Api de gestión de eventos",
    eventsApiDesc: "API RESTful hecha en nodejs con docker para una plataforma de gestión de eventos. Esta plataforma permitirá a los usuarios crear, promocionar y gestionar eventos de manera efectiva. Los usuarios podrán registrarse para asistir a eventos al igual que ver detalles sobre los eventos como información detallada o lugares cercanos.",
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
    phone: "+57 3178477487",
    aboutTitle: "About Me",
    aboutText: "I have more than 7 years of experience in web application development and design, using modern technologies. I also have the ability to develop custom applications and adapt to maintaining code in already developed projects. I am results-oriented, passionate about development challenges, with great empathy and aptitude for teamwork. I am characterized by being proactive, in favor of contributing efficient technological solutions.",
    
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
    trikoDate: "November 2024 - Current",
    trikoDesc1: "Develop and implement functionalities for the TRIKO APP application, through microservices developed in PHP with Laravel, .NET, ASP .NET Core web API, AWS, Docker, among others.",
    trikoDesc2: "Implement high-availability banking integrations through RESTful APIs and microservices in Java with Spring Boot.",
    
    // Merqueo
    merqueoTitle: "Backend Developer",
    merqueoCompany: "Merqueo S.A.S",
    merqueoDate: "November 2024 - July 2025",
    merqueoDesc1: "Develop and implement functionalities in different projects, using PHP with Laravel, Go, Java with Spring Boot, .NET, ASP .NET Core web API, AWS (Lambda, S3, EC2), DB: MySQL and DynamoDB, front (Vue.js) from Linux OS.",
    merqueoDesc2: "Integrate requirements into the dashboard project (for operations) and the Web-front project (for clients) facilitating processes for stakeholders.",
    
    // Samsara
    samsaraTitle: "Software Development Co-leader",
    samsaraCompany: "Samsara Med (Functional Medicine)",
    samsaraDate: "Jun 2023 - Nov 2024",
    samsaraDesc: "Co-lead and participate in the entire software development lifecycle for a custom software for the health sector, in PHP, using the Laravel framework, Java with Spring Boot, .NET, ASP .NET Core web API, among other technologies.",
    samsaraFunc1: "Requirements analysis and gathering.",
    samsaraFunc2: "General system design.",
    samsaraFunc3: "Development and implementation.",
    samsaraFunc4: "Validations, testing, maintenance and code support.",
    
    // USC
    uscTitle: "Software Developer",
    uscCompany: "Universidad Santiago de Cali",
    uscDate: "April 2018 - December 2023",
    uscTech: "PHP Laravel, Java with Spring Boot, .NET, ASP .NET Core web API, HTML, CSS3, Javascript, Docker, Node.js, Oracle and GitLab",
    uscDesc1: "Implement improvements in the Quality Assurance Information System (SIPAC), optimizing efficiency by 40% and facilitating academic monitoring.",
    uscDesc2: "Develop an online payment application, integrating payment methods through Place to pay.",
    uscDesc3: "Lead and develop the update of the University Internships and Practices Information System (SIPPU).",
    
    // Education section
    professionalEducation: "Professional Education",
    complementaryEducation: "Complementary Education",
    languagesTitle: "Languages",
    english: "English",
    intermediate: "Intermediate",
    
    // Education items
    systemsEngineering: "Systems Engineering",
    remington: "Corporación Universitaria Remington",
    end2023: "End 2023",
    technologyAnalysis: "Technology in Analysis and Development of Information Systems",
    sena: "SENA",
    senaDate: "2016 - 2018",
    dataStructures: "Practical Course on Data Structures and Algorithms",
    goCourse: "Go Course",
    goodPractices: "Good practices for code writing",
    platzi: "Platzi",
    hours2025: "20 h, 2025",
    hours2024: "20 h, 2024",
    dotnetBootcamp: ".NET Backend Bootcamp",
    wwcode: "WWCode Medellín and Perficient Latam",
    bootcampDate: "Jul - Sep 2023",
    laravelPackages: "Learn to create reusable packages for Laravel PHP",
    udemy: "Udemy",
    udemyDate: "Oct 2021",
    scrumFundamentals: "Scrum Fundamentals Certified",
    scrumstudy: "ScrumStudy",
    scrumDate: "Jun 22, 2020",
    dbSpecialization: "Technological Specialization in Database Management and Security (SQL Server, Oracle and MongoDB)",
    senaMonths: "6 months, 2019",
    
    // Projects section
    projectsTitle: "Projects I have collaborated on",
    personalProjects: "Personal Projects",
    techLabel: "Technologies:",
    seeMore: "See more..",
    
    // Triko App project
    trikoAppTitle: "TRIKO APP",
    trikoAppDesc: "Triko is the first anonymous service marketplace that connects customers with trusted local service providers. The platform operates in the United States through its mobile application for Android and iOS, allowing users to post free service requests, receive multiple offers from verified providers through a real-time auction system, and share contact information only with the preferred bidder. No subscriptions or credit card required, prioritizing transparency, privacy and security.",
    trikoAppTech: "PHP with Laravel, Java with Spring Boot, .NET, ASP .NET Core web API, AWS (Lambda, S3, EC2), Docker, Microservices, RESTful APIs.",
    
    // Merqueo project
    merqueoProjectTitle: "Merqueo",
    merqueoProjectDesc: "Merqueo was a Colombian company that operated as an online supermarket, allowing users to make grocery purchases through its website and mobile application. The platform allowed selecting products, scheduling delivery times and choosing payment methods. The company managed its supply chain directly, storing products in its own distribution centers and making deliveries without intermediaries, offering competitive prices and optimizing delivery times. It operated in cities in Colombia, Mexico and Brazil. The mobile application and website included an operational dashboard for internal management and web-front for customers.",
    merqueoProjectTech: "PHP with Laravel, Go, Java with Spring Boot, .NET, ASP .NET Core web API, Vue.js, AWS (Lambda, S3, EC2), MySQL, DynamoDB, Linux.",
    
    // Samsara MoBi project
    samsaraMobiTitle: "Samsara MoBi",
    samsaraMobiDesc: "Custom-made software for the health sector, which manages each patient's schedule, their timeline, detailed reports of each medical record and RIPS generation.",
    samsaraMobiTech: "PHP with Laravel, Java with Spring Boot, .NET, ASP .NET Core web API, MySQL, HTML, CSS3, Git, Bootstrap 5, JQuery, Node.js, Design Patterns and Architecture, Clean Architecture, clean code and SOLID principles, among others.",
    
    // SIPAC project
    sipacTitle: "Quality Assurance Information System (SIPAC)",
    sipacDesc: "Information System made for Universidad Santiago de Cali, which includes modules such as Performance evaluation of teachers and administrators, certificates and work permits for the human resources department, the SIPPU information system for university internships and practices and the general Research system, DGI.",
    sipacTech: "It is made in PHP and JavaScript, using the Laravel framework and using Oracle as the database manager, HTML, CSS3, Bootstrap 5, JQuery, Node.js, Docker, Git, among others.",
    
    // APPS project
    appsTitle: "Online Payment Application (APPS)",
    appsDesc: "Online payment application, which integrates payment methods through the place to pay platform, for the academic enrollment process at Universidad Santiago de Cali.",
    appsTech: "It is made in PHP and JavaScript, using the Laravel framework and using Oracle as the database manager, HTML, CSS3, Bootstrap 5, JQuery, Node.js, Docker, Git, among others.",
    
    // Personal projects
    geolocationTitle: "Geolocation App - React with PHP",
    geolocationDesc: "The project is an app made with React.js for the frontend that consumes an OpenWeather API to show the humidity of the cities that the user selects, the selected city is also shown on a map using the leaflet library, a query history is stored in a MySQL database through an API made in PHP as backend.",
    
    eventsApiTitle: "Event Management API",
    eventsApiDesc: "RESTful API made in nodejs with docker for an event management platform. This platform will allow users to create, promote and manage events effectively. Users will be able to register to attend events as well as view details about events such as detailed information or nearby places.",
  }
};

