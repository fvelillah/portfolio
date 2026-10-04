// Fernando Velilla - Robotics & Cyber-Physical Systems Portfolio JS
// Multi-language (EN / ES / IT) support with default English ('en')

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_projects: "Projects",
    nav_trajectory: "Experience",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_download_cv: "Download CV",
    turin_label: "Turin:",

    // Hero Section
    hero_badge: "ROBOTICS & CYBER-PHYSICAL SYSTEMS ENGINEER | TURIN, ITALY",
    hero_title_1: "Engineering at the frontier of ",
    hero_title_accent1: "Physical Control",
    hero_title_2: " and ",
    hero_title_accent2: "Intelligent AI",
    hero_title_end: ".",
    hero_description: "Hello, I am <strong class='text-white font-semibold'>Fernando Velilla Hurtado</strong>. I combine rigorous mechatronics engineering with Master's studies in Computer Engineering at <strong class='text-cyan-300 font-medium'>Politecnico di Torino</strong> (specializing in Automation & Cyber-Physical Systems). Experienced in autonomous mobile navigation with <strong class='text-slate-100 font-medium'>ROS2 / Micro-ROS</strong>, <strong class='text-slate-100 font-medium'>Hardware-in-the-Loop (HIL)</strong> simulation, computer vision with <strong class='text-slate-100 font-medium'>PyTorch</strong>, and multi-agent coordination for industrial robotic fleets.",
    
    // Value props
    prop_ros2: "ROS2 Humble & Micro-ROS",
    prop_hil: "HIL Simulation & PLCs",
    prop_fleet: "Autonomous Delivery Fleets",
    prop_ai: "PyTorch & LangGraph Agents",

    // Hero Buttons
    btn_download_cv: "Download CV",
    btn_copy_email: "Copy Email",

    // Profile Card
    profile_badge: "ENGINEER PROFILE",
    profile_degree1: "MSc Computer Engineering (Politecnico di Torino)",
    profile_degree2: "Mechatronics Engineer (Universidad EIA)",
    profile_status_label: "Status:",
    profile_status_val: "Industry / R&D",
    profile_location_label: "Location:",
    profile_location_val: "Turin, Italy",

    // Utopian Robotics Artwork Card
    utopian_badge: "CYBER-PHYSICAL VISION // FUTURE OF AUTOMATION",
    utopian_title: "Autonomous Collaboration in an Utopian World",
    utopian_desc: "Cooperative ecosystem where humanoid robots, collaborative manipulators, and intelligent cyber-physical systems work harmoniously in high-tech sustainable environments.",

    // Featured Projects Header & Filters
    projects_tag: "ENGINEERING PORTFOLIO",
    projects_title: "Featured Technical Projects",
    projects_desc: "Real integrated systems: autonomous mobile robotics, unsupervised computer vision, HIL digital twins, and multi-agent orchestration for industrial manufacturing.",
    filter_all: "All (6)",
    filter_robotics: "Robotics & ROS2",
    filter_ai: "AI & Vision",
    filter_cps: "Cyber-Physical & HIL",
    card_details_btn: "View Architecture & Details",

    // Trajectory
    trajectory_tag: "ACADEMIC & PROFESSIONAL BACKGROUND",
    trajectory_title: "Experience & Education",
    trajectory_desc: "A solid combination of industrial field robotics engineering and advanced computer systems, control, and CPS education in Europe.",
    exp_heading: "Industrial Experience",
    edu_heading: "Higher Education & Degrees",
    exp1_role: "Maintenance Analyst",
    exp1_period: "Dec 2024 - May 2025",
    exp1_company: "Robot.com (formerly Kiwibot)",
    exp1_desc: "Predictive, corrective, and operational diagnostics for a fleet of over <strong class='text-slate-200'>30+ last-mile autonomous delivery robots</strong>. On-site coordination and deployment of depot charging station infrastructure at the <strong class='text-slate-200'>University of Southern Indiana (Evansville, USA)</strong>.",

    exp2_role: "Engineering Intern",
    exp2_period: "Nov 2023 - Feb 2024",
    exp2_company: "Vidycom S.A.S / Ecolair — Medellín, Colombia",
    exp2_desc: "Development of instrumentation and systems for industrial air quality measurement and control. Calibration of electrochemical sensors, control loop integration, and environmental monitoring telemetry.",

    edu1_degree: "MSc Computer Engineering",
    edu1_period: "2025 - 2027",
    edu1_institution: "Politecnico di Torino — Turin, Italy",
    edu1_track: "Track: Automation & Intelligent Cyber-Physical Systems",
    edu1_grades_title: "KEY COURSES & OUTSTANDING PERFORMANCE:",
    edu1_c1: "Modeling & Control of CPS",
    edu1_c2: "System & Device Programming",
    edu1_c3: "Data Science & Databases",
    edu1_c4: "ML for Vision & Multimedia",
    edu1_c5: "Nonlinear Control & Aerospace",
    edu1_c6: "Current Weighted Average",

    edu2_degree: "B.S. Mechatronics Engineering",
    edu2_period: "2021 - 2025",
    edu2_institution: "Universidad EIA — Medellín, Colombia",
    edu2_grade: "Graduation Grade: 4.5 / 5.0",
    edu2_desc: "Rigorous multidisciplinary curriculum integrating mechanical design, analog/digital electronics, modern automatic control, robotics, and real-time embedded software.",

    // Skills
    skills_tag: "TECHNOLOGY STACK & EXPERTISE",
    skills_title: "Specialized Technical Skills",
    skills_desc: "Comprehensive mastery across all cyber-physical system layers: from microcontrollers and bus protocols to deep neural networks and multi-agent systems.",
    pillar1_title: "Robotics & Control",
    pillar1_desc: "Autonomous mobile navigation, kinematics, optimal control, and closed loops.",
    pillar1_level: "Level: Advanced / Specialized",

    pillar2_title: "Cyber-Physical & HIL",
    pillar2_desc: "Real-time hardware-software interaction and industrial automation.",
    pillar2_level: "Level: Real-Time & Industrial",

    pillar3_title: "AI & Computer Vision",
    pillar3_desc: "Deep learning for industrial vision and multi-agent fleet orchestration.",
    pillar3_level: "Level: Research & Production",

    pillar4_title: "Languages & CAD",
    pillar4_desc: "Low-level development, system tooling, and precision mechanical design.",
    pillar4_level: "Level: Multiplatform",

    lang_title: "Language Proficiency",
    lang_desc: "Full capability to collaborate and lead in multicultural, international engineering teams",
    lang_es: "Spanish",
    lang_es_lvl: "Native",
    lang_en: "English",
    lang_en_lvl: "IELTS 7.5 (C1)",
    lang_it: "Italian",
    lang_it_lvl: "Level II (B2)",

    // Contact
    contact_tag: "PROFESSIONAL NETWORK",
    contact_title: "Let's connect on Robotics or Cyber-Physical Systems?",
    contact_desc: "Available to collaborate on R&D projects, autonomous robotics fleet design, real-time embedded control integration, and applied AI architectures.",
    contact_btn_cv: "Download Full CV (PDF)",
    contact_btn_mail: "Send Direct Email",

    // Footer
    footer_role: "Robotics & Cyber-Physical Systems Engineering",
    footer_copy: "© 2026 Fernando Velilla Hurtado. Built with Tailwind CSS & Vite.",

    // Modal
    modal_metrics_title: "SYSTEM KEY METRICS",
    modal_overview_title: "OVERVIEW & ENGINEERING CHALLENGE",
    modal_arch_title: "KEY ARCHITECTURE & IMPLEMENTATION HIGHLIGHTS",
    modal_stack_title: "TOOLS & TECHNOLOGIES",
    modal_close: "Close window",
    modal_github: "Open GitHub Repository",
    modal_project_site: "Open Project Website",
    modal_paper_btn: "Read Research Paper (PDF)",
    modal_publication_btn: "Semillero ASIMOV 2024-2",
    btn_paper_pdf: "Paper (PDF)",
    btn_asimov_pub: "ASIMOV 2024-2",
    project_site_btn: "Project Site",

    // Toast
    toast_copied: "✓ Email copied to clipboard: fernandovelilla1@gmail.com"
  },

  es: {
    // Navigation
    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_trajectory: "Trayectoria",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    nav_download_cv: "Descargar CV",
    turin_label: "Turín:",

    // Hero Section
    hero_badge: "INGENIERO EN ROBÓTICA & SISTEMAS CIBERFÍSICOS | TURÍN, ITALIA",
    hero_title_1: "Ingeniería en la frontera del ",
    hero_title_accent1: "Control Físico",
    hero_title_2: " y la ",
    hero_title_accent2: "IA Inteligente",
    hero_title_end: ".",
    hero_description: "Hola, soy <strong class='text-white font-semibold'>Fernando Velilla Hurtado</strong>. Combino formación mecatrónica rigurosa con estudios de Máster en Ingeniería Informática en el <strong class='text-cyan-300 font-medium'>Politecnico di Torino</strong> (especialidad en Automatización y Sistemas Ciberfísicos). Especializado en navegación móvil con <strong class='text-slate-100 font-medium'>ROS2 / Micro-ROS</strong>, simulación <strong class='text-slate-100 font-medium'>Hardware-in-the-Loop (HIL)</strong>, visión por computador con <strong class='text-slate-100 font-medium'>PyTorch</strong> y coordinación multi-agente para flotas industriales.",

    // Value props
    prop_ros2: "ROS2 Humble & Micro-ROS",
    prop_hil: "Simulación HIL & PLCs",
    prop_fleet: "Flotas de Robots Autónomos",
    prop_ai: "PyTorch & Agentes LangGraph",

    // Hero Buttons
    btn_download_cv: "Descargar CV",
    btn_copy_email: "Copiar Correo",

    // Profile Card
    profile_badge: "PERFIL DEL INGENIERO",
    profile_degree1: "MSc Computer Engineering (Politecnico di Torino)",
    profile_degree2: "Ingeniero Mecatrónico (Universidad EIA)",
    profile_status_label: "Estado:",
    profile_status_val: "Investigación / Industria",
    profile_location_label: "Residencia:",
    profile_location_val: "Turín, Italia",

    // Utopian Robotics Artwork Card
    utopian_badge: "VISIÓN CIBERFÍSICA // FUTURO DE LA AUTOMATIZACIÓN",
    utopian_title: "Colaboración Autónoma en un Mundo Utópico",
    utopian_desc: "Ecosistema cooperativo donde robots humanoides, manipuladores colaborativos y sistemas ciberfísicos inteligentes conviven en armonía en entornos de alta tecnología sostenible.",

    // Featured Projects Header & Filters
    projects_tag: "PORTAFOLIO DE INGENIERÍA",
    projects_title: "Proyectos Técnicos Destacados",
    projects_desc: "Sistemas reales integrados: robótica móvil autónoma, modelos de visión no supervisada, gemelos digitales HIL y orquestación con IA para entornos industriales.",
    filter_all: "Todos (6)",
    filter_robotics: "Robótica & ROS2",
    filter_ai: "IA & Visión",
    filter_cps: "Sistemas Ciberfísicos & HIL",
    card_details_btn: "Ver Arquitectura & Detalles",

    // Trajectory
    trajectory_tag: "TRAYECTORIA ACADÉMICA & PROFESIONAL",
    trajectory_title: "Experiencia & Formación",
    trajectory_desc: "Una combinación sólida entre ingeniería mecatrónica de campo y formación avanzada en informática, control y sistemas ciberfísicos en Europa.",
    exp_heading: "Experiencia Industrial",
    edu_heading: "Formación de Grado & Postgrado",
    exp1_role: "Maintenance Analyst",
    exp1_period: "Dic 2024 - May 2025",
    exp1_company: "Robot.com (anteriormente Kiwibot)",
    exp1_desc: "Mantenimiento predictivo, correctivo y diagnóstico operativo de una flota de más de <strong class='text-slate-200'>30 robots autónomos de delivery de última milla</strong>. Coordinación y despliegue in situ de la infraestructura de estaciones de recarga para robots en la <strong class='text-slate-200'>University of Southern Indiana (Evansville, EE.UU.)</strong>.",

    exp2_role: "Engineering Intern",
    exp2_period: "Nov 2023 - Feb 2024",
    exp2_company: "Vidycom S.A.S / Ecolair — Medellín, Colombia",
    exp2_desc: "Desarrollo de tecnologías para la medición y control de calidad de aire. Calibración de transductores electroquímicos, integración de lazos de control y telemetría de monitoreo ambiental.",

    edu1_degree: "MSc Computer Engineering",
    edu1_period: "2025 - 2027",
    edu1_institution: "Politecnico di Torino — Turín, Italia",
    edu1_track: "Especialización: Automation & Intelligent Cyberphysical Systems",
    edu1_grades_title: "ASIGNATURAS & RENDIMIENTO DESTACADO:",
    edu1_c1: "Modeling & Control of CPS",
    edu1_c2: "System & Device Programming",
    edu1_c3: "Data Science & Databases",
    edu1_c4: "ML for Vision & Multimedia",
    edu1_c5: "Nonlinear Control & Aerospace",
    edu1_c6: "Media Ponderada Actual",

    edu2_degree: "Grado en Ingeniería Mecatrónica",
    edu2_period: "2021 - 2025",
    edu2_institution: "Universidad EIA — Medellín, Colombia",
    edu2_grade: "Nota de Graduación: 4.5 / 5.0",
    edu2_desc: "Formación multidisciplinar de élite integrando diseño mecánico, electrónica analógica y digital, control automático moderno, robótica y software embebido en tiempo real.",

    // Skills
    skills_tag: "STACK TECNOLÓGICO & COMPETENCIAS",
    skills_title: "Habilidades Técnicas Especializadas",
    skills_desc: "Dominio integral de las capas del sistema ciberfísico: desde microcontroladores y protocolos de bus hasta redes neuronales y orquestación de agentes.",
    pillar1_title: "Robótica & Control",
    pillar1_desc: "Navegación móvil autónoma, cinemática, optimización y lazos cerrados.",
    pillar1_level: "Nivel: Avanzado / Especializado",

    pillar2_title: "Sistemas Ciberfísicos & HIL",
    pillar2_desc: "Interacción hardware-software en tiempo real y automatización industrial.",
    pillar2_level: "Nivel: Tiempo Real & Industrial",

    pillar3_title: "IA & Visión Artificial",
    pillar3_desc: "Deep learning para visión industrial y orquestación multi-agente.",
    pillar3_level: "Nivel: Investigación & Producción",

    pillar4_title: "Lenguajes & CAD",
    pillar4_desc: "Herramientas de ingeniería, desarrollo de bajo nivel y diseño físico.",
    pillar4_level: "Nivel: Multiplataforma",

    lang_title: "Competencia Lingüística",
    lang_desc: "Capacidad para trabajar en entornos internacionales multiculturales",
    lang_es: "Español",
    lang_es_lvl: "Nativo",
    lang_en: "Inglés",
    lang_en_lvl: "IELTS 7.5 (C1)",
    lang_it: "Italiano",
    lang_it_lvl: "Livello II (B2)",

    // Contact
    contact_tag: "CONEXIÓN PROFESIONAL",
    contact_title: "¿Hablamos sobre Robótica o Sistemas Ciberfísicos?",
    contact_desc: "Disponible para colaborar en proyectos de I+D, diseño de flotas robóticas, integración de control embebido en tiempo real y arquitecturas de inteligencia artificial aplicada.",
    contact_btn_cv: "Descargar CV Completo (PDF)",
    contact_btn_mail: "Enviar Correo Directo",

    // Footer
    footer_role: "Ingeniería en Robótica & Sistemas Ciberfísicos",
    footer_copy: "© 2026 Fernando Velilla Hurtado. Construido con Tailwind CSS & Vite.",

    // Modal
    modal_metrics_title: "MÉTRICAS CLAVE DEL SISTEMA",
    modal_overview_title: "DESCRIPCIÓN GENERAL & RETO DE INGENIERÍA",
    modal_arch_title: "PUNTOS CLAVE DE ARQUITECTURA & IMPLEMENTACIÓN",
    modal_stack_title: "HERRAMIENTAS & TECNOLOGÍAS",
    modal_close: "Cerrar ventana",
    modal_github: "Abrir Repositorio en GitHub",
    modal_project_site: "Ver Sitio del Proyecto",
    modal_paper_btn: "Leer Artículo de Investigación (PDF)",
    modal_publication_btn: "Publicación Semillero ASIMOV 2024-2",
    btn_paper_pdf: "Artículo (PDF)",
    btn_asimov_pub: "ASIMOV 2024-2",
    project_site_btn: "Sitio del Proyecto",

    // Toast
    toast_copied: "✓ Email copiado al portapapeles: fernandovelilla1@gmail.com"
  },

  it: {
    // Navigation
    nav_home: "Home",
    nav_projects: "Progetti",
    nav_trajectory: "Esperienza",
    nav_skills: "Competenze",
    nav_contact: "Contatto",
    nav_download_cv: "Scarica CV",
    turin_label: "Torino:",

    // Hero Section
    hero_badge: "INGEGNERE IN ROBOTICA & SISTEMI CIBERFISICI | TORINO, ITALIA",
    hero_title_1: "Ingegneria alla frontiera del ",
    hero_title_accent1: "Controllo Fisico",
    hero_title_2: " e dell'",
    hero_title_accent2: "IA Intelligente",
    hero_title_end: ".",
    hero_description: "Ciao, sono <strong class='text-white font-semibold'>Fernando Velilla Hurtado</strong>. Combino una rigorosa formazione meccatronica con studi magistrali in Ingegneria Informatica al <strong class='text-cyan-300 font-medium'>Politecnico di Torino</strong> (indirizzo Automazione e Sistemi Ciberfisici Intelligenti). Specializzato in navigazione mobile con <strong class='text-slate-100 font-medium'>ROS2 / Micro-ROS</strong>, simulazione <strong class='text-slate-100 font-medium'>Hardware-in-the-Loop (HIL)</strong>, visione artificiale con <strong class='text-slate-100 font-medium'>PyTorch</strong> e coordinamento multi-agente per flotte industriali.",

    // Value props
    prop_ros2: "ROS2 Humble & Micro-ROS",
    prop_hil: "Simulazione HIL & PLC",
    prop_fleet: "Flotte di Robot Autonomi",
    prop_ai: "PyTorch & Agenti LangGraph",

    // Hero Buttons
    btn_download_cv: "Scarica CV",
    btn_copy_email: "Copia Email",

    // Profile Card
    profile_badge: "PROFILO DELL'INGEGNERE",
    profile_degree1: "Laurea Magistrale Ing. Informatica (Politecnico di Torino)",
    profile_degree2: "Ingegnere Meccatronico (Universidad EIA)",
    profile_status_label: "Stato:",
    profile_status_val: "Industria / R&D",
    profile_location_label: "Residenza:",
    profile_location_val: "Torino, Italia",

    // Utopian Robotics Artwork Card
    utopian_badge: "VISIONE CIBERFISICA // IL FUTURO DELL'AUTOMAZIONE",
    utopian_title: "Collaborazione Autonoma in un Mondo Utopico",
    utopian_desc: "Ecosistema cooperativo in cui robot umanoidi, manipolatori collaborativi e sistemi ciberfisici intelligenti collaborano armoniosamente in contesti tecnologici e sostenibili.",

    // Featured Projects Header & Filters
    projects_tag: "PORTFOLIO DI INGEGNERIA",
    projects_title: "Progetti Tecnici in Evidenza",
    projects_desc: "Sistemi reali integrati: robotica mobile autonoma, computer vision non supervisionata, gemelli digitali HIL e orchestrazione AI per l'industria manifatturiera.",
    filter_all: "Tutti (6)",
    filter_robotics: "Robotica & ROS2",
    filter_ai: "AI & Visione",
    filter_cps: "Sistemi Ciberfisici & HIL",
    card_details_btn: "Vedi Architettura & Dettagli",

    // Trajectory
    trajectory_tag: "PERCORSO ACCADEMICO & PROFESSIONALE",
    trajectory_title: "Esperienza & Formazione",
    trajectory_desc: "Una solida combinazione tra ingegneria meccatronica sul campo e formazione avanzata in informatica, controllo e sistemi ciberfisici in Europa.",
    exp_heading: "Esperienza Industriale",
    edu_heading: "Formazione Accademica & Titoli",
    exp1_role: "Maintenance Analyst",
    exp1_period: "Dic 2024 - Mag 2025",
    exp1_company: "Robot.com (precedentemente Kiwibot)",
    exp1_desc: "Manutenzione predittiva, correttiva e diagnostica operativa per una flotta di oltre <strong class='text-slate-200'>30 robot autonomi per consegne di ultimo miglio</strong>. Coordinamento e installazione sul campo dell'infrastruttura di ricarica robotica presso la <strong class='text-slate-200'>University of Southern Indiana (Evansville, USA)</strong>.",

    exp2_role: "Engineering Intern",
    exp2_period: "Nov 2023 - Feb 2024",
    exp2_company: "Vidycom S.A.S / Ecolair — Medellín, Colombia",
    exp2_desc: "Sviluppo di tecnologie per la misurazione e il controllo della qualità dell'aria. Calibrazione di sensori elettrochimici, integrazione di anelli di controllo e telemetria ambientale.",

    edu1_degree: "Laurea Magistrale in Ingegneria Informatica",
    edu1_period: "2025 - 2027",
    edu1_institution: "Politecnico di Torino — Torino, Italia",
    edu1_track: "Indirizzo: Automation & Intelligent Cyberphysical Systems",
    edu1_grades_title: "CORSI PRINCIPALI & VOTI DI ECCELLENZA:",
    edu1_c1: "Modeling & Control of CPS",
    edu1_c2: "System & Device Programming",
    edu1_c3: "Data Science & Databases",
    edu1_c4: "ML for Vision & Multimedia",
    edu1_c5: "Nonlinear Control & Aerospace",
    edu1_c6: "Media Ponderata Attuale",

    edu2_degree: "Laurea in Ingegneria Meccatronica",
    edu2_period: "2021 - 2025",
    edu2_institution: "Universidad EIA — Medellín, Colombia",
    edu2_grade: "Voto Finale di Laurea: 4.5 / 5.0",
    edu2_desc: "Percorso multidisciplinare rigoroso che integra progettazione meccanica, elettronica analogica e digitale, controllo automatico moderno, robotica e software embedded real-time.",

    // Skills
    skills_tag: "STACK TECNOLOGICO & COMPETENZE",
    skills_title: "Competenze Tecniche Specializzate",
    skills_desc: "Padronanza completa di tutti i livelli del sistema ciberfisico: dai microcontrollori e protocolli di bus alle reti neurali profonde e orchestrazione di agenti.",
    pillar1_title: "Robotica & Controllo",
    pillar1_desc: "Navigazione mobile autonoma, cinematica, ottimizzazione e controllo in anello chiuso.",
    pillar1_level: "Livello: Avanzato / Specializzato",

    pillar2_title: "Sistemi Ciberfisici & HIL",
    pillar2_desc: "Interazione hardware-software real-time e automazione industriale.",
    pillar2_level: "Livello: Tempo Reale & Industriale",

    pillar3_title: "AI & Computer Vision",
    pillar3_desc: "Deep learning per visione industriale e orchestrazione di flotte multi-agente.",
    pillar3_level: "Livello: Ricerca & Produzione",

    pillar4_title: "Linguaggi & CAD",
    pillar4_desc: "Sviluppo di basso livello, strumenti di sistema e progettazione meccanica.",
    pillar4_level: "Livello: Multipiattaforma",

    lang_title: "Competenze Linguistiche",
    lang_desc: "Piena capacità di collaborare in team di ingegneria multiculturali e internazionali",
    lang_es: "Spagnolo",
    lang_es_lvl: "Madrelingua",
    lang_en: "Inglese",
    lang_en_lvl: "IELTS 7.5 (C1)",
    lang_it: "Italiano",
    lang_it_lvl: "Livello II (B2)",

    // Contact
    contact_tag: "CONNESSIONE PROFESSIONALE",
    contact_title: "Parliamo di Robotica o Sistemi Ciberfisici?",
    contact_desc: "Disponibile a collaborare su progetti di R&D, progettazione di flotte robotiche, integrazione di controllo embedded in tempo reale e architetture di intelligenza artificiale applicata.",
    contact_btn_cv: "Scarica CV Completo (PDF)",
    contact_btn_mail: "Invia Email Diretta",

    // Footer
    footer_role: "Ingegneria in Robotica & Sistemi Ciberfisici",
    footer_copy: "© 2026 Fernando Velilla Hurtado. Costruito con Tailwind CSS & Vite.",

    // Modal
    modal_metrics_title: "METRICHE CHIAVE DEL SISTEMA",
    modal_overview_title: "PANORAMICA & SFIDA INGEGNERISTICA",
    modal_arch_title: "PUNTI CHIAVE DI ARCHITETTURA & IMPLEMENTAZIONE",
    modal_stack_title: "STRUMENTI & TECNOLOGIE",
    modal_close: "Chiudi finestra",
    modal_github: "Apri Repository su GitHub",
    modal_project_site: "Visualizza Sito del Progetto",
    modal_paper_btn: "Leggi Articolo di Ricerca (PDF)",
    modal_publication_btn: "Pubblicazione Gruppo ASIMOV 2024-2",
    btn_paper_pdf: "Articolo (PDF)",
    btn_asimov_pub: "ASIMOV 2024-2",
    project_site_btn: "Sito del Progetto",

    // Toast
    toast_copied: "✓ Email copiata negli appunti: fernandovelilla1@gmail.com"
  }
};

// Project localized data with contextual metric highlights
const projectsI18n = {
  'sdp-arol': {
    image: 'assets/images/fleet_mgmt.jpg',
    github: 'https://github.com/JuanPuyo1/SDPArolProject',
    period: '2026',
    techStack: ['Python', 'LangGraph', 'Qdrant', 'RAG', 'Docker', 'FastAPI', 'Local LLMs', 'Industrial Automation'],
    en: {
      title: 'Multi-Agent AI Framework for Industrial Fleet Management',
      subtitle: 'Full-stack multi-agent AI solution for real-time troubleshooting on AROL industrial capping machinery (Italy)',
      category: 'AI & INDUSTRIAL FLEET',
      highlightBadge: '>90% BENCHMARK',
      desc: 'Multi-agent AI architecture designed for industrial machinery manufacturer (AROL). Real-time troubleshooting orchestration and assisted operator guidance using local models, LangGraph supervisor harness, and Qdrant vector retrieval.',
      metricHighlight: {
        val: '>90%',
        label: 'Multi-Agent Benchmark Rate',
        desc: 'Diagnostic task success rate with LangGraph & Qdrant RAG on AROL machinery'
      },
      metrics: [
        { label: 'Success Rate', value: '>90%' },
        { label: 'Architecture', value: 'LangGraph + RAG' },
        { label: 'Vector Store', value: 'Qdrant DB' },
        { label: 'Inference', value: 'Local LLMs' }
      ],
      overview: 'End-to-end development for the Italian manufacturer AROL (global leader in capping and bottling machinery). I designed a coordinated multi-agent architecture to assist plant operators and resolve machinery issues in real time.',
      architecture: [
        'LangGraph supervisor orchestrator featuring dynamic sub-task routing and deterministic tool calling.',
        'Retrieval-Augmented Generation (RAG) engine connected to Qdrant vector database indexing OEM manuals and troubleshooting records.',
        'Privacy-preserving local LLM inference preventing intellectual property leakage outside the factory network.',
        'Interactive telemetry dashboard with machine health indicators, early warnings, and 65% faster mean-time-to-resolution.'
      ]
    },
    es: {
      title: 'Multi-Agent AI Framework for Industrial Fleet Management',
      subtitle: 'Solución full-stack de IA multi-agente para diagnóstico y asistencia en maquinaria de envasado AROL (Italia)',
      category: 'IA & FLOTA INDUSTRIAL',
      highlightBadge: '>90% BENCHMARK',
      desc: 'Arquitectura de IA multi-agente diseñada para fabricantes de maquinaria industrial (AROL). Diagnóstico inteligente y resolución asistida de anomalías en planta mediante modelos locales, orquestación con LangGraph y recuperación vectorial con Qdrant RAG.',
      metricHighlight: {
        val: '>90%',
        label: 'Tasa de Éxito Multi-Agente',
        desc: 'Tasa de éxito diagnóstico con LangGraph y Qdrant RAG en maquinaria AROL'
      },
      metrics: [
        { label: 'Tasa de Éxito', value: '>90%' },
        { label: 'Arquitectura', value: 'LangGraph + RAG' },
        { label: 'Base Vectorial', value: 'Qdrant DB' },
        { label: 'Modelos', value: 'LLMs Locales' }
      ],
      overview: 'Desarrollo integral para la multinacional italiana AROL (líder en maquinaria de tapado y embotellado). Diseñé una arquitectura multi-agente coordinada para asistir a operadores y resolver fallos de mantenimiento en tiempo real.',
      architecture: [
        'Orquestador supervisor basado en LangGraph con enrutamiento dinámico de subtareas y llamadas a herramientas (Tool Calling).',
        'Motor RAG conectado a la base de datos vectorial Qdrant para consultar manuales técnicos e historiales de averías.',
        'Soporte para inferencia de modelos locales sin fuga de propiedad intelectual confidencial de planta.',
        'Dashboard interactivo con métricas de salud de flota, alertas tempranas y tiempos de respuesta reducidos en un 65%.'
      ]
    },
    it: {
      title: 'Multi-Agent AI Framework for Industrial Fleet Management',
      subtitle: 'Soluzione full-stack di AI multi-agente per diagnostica e assistenza sui macchinari di confezionamento AROL (Italia)',
      category: 'AI & FLOTTE INDUSTRIALI',
      highlightBadge: '>90% BENCHMARK',
      desc: 'Architettura AI multi-agente progettata per il costruttore di macchine AROL. Diagnostica intelligente e risoluzione guasti in tempo reale tramite modelli locali, orchestrazione LangGraph e motore RAG con Qdrant.',
      metricHighlight: {
        val: '>90%',
        label: 'Successo Benchmark Multi-Agente',
        desc: 'Tasso di successo diagnostico con LangGraph e Qdrant RAG su macchine AROL'
      },
      metrics: [
        { label: 'Tasso di Successo', value: '>90%' },
        { label: 'Architettura', value: 'LangGraph + RAG' },
        { label: 'DB Vettoriale', value: 'Qdrant' },
        { label: 'Inferenza', value: 'LLM Locali' }
      ],
      overview: 'Sviluppo completo per l\'azienda italiana AROL (leader nelle macchine per la tappatura industriale). Ho progettato un\'architettura multi-agente per assistere gli operatori e risolvere anomalie in tempo reale.',
      architecture: [
        'Orchestratore supervisore basato su LangGraph con routing dinamico delle sotto-attività e tool calling.',
        'Motore RAG integrato con database vettoriale Qdrant per interrogare manuali tecnici e log di manutenzione.',
        'Inferenza con modelli locali nel rispetto della riservatezza dei dati industriali di stabilimento.',
        'Cruscotto interattivo per la diagnostica della flotta con tempi di risoluzione ridotti del 65%.'
      ]
    }
  },

  'anomaly-detection': {
    image: 'assets/images/anomaly_detection.jpg',
    github: 'https://github.com/fvelillah/Anomaly-Detection-with-Autoencoders',
    period: '2025',
    techStack: ['PyTorch', 'Computer Vision', 'CUDA', 'Autoencoders', 'OpenCV', 'MVTec AD', 'NumPy', 'Matplotlib'],
    en: {
      title: 'Unsupervised Anomaly Detection with PyTorch',
      subtitle: 'Unsupervised detection and spatial heatmap localization of microscopic defects in industrial parts',
      category: 'COMPUTER VISION & DEEP LEARNING',
      highlightBadge: 'ROC-AUC: 0.83 (PIXEL-WISE)',
      desc: 'Design and training of a Convolutional Autoencoder (CAE) for unsupervised defect detection and pixel-level spatial heatmap localization in industrial mechanical components. Evaluated on the MVTec AD benchmark.',
      metricHighlight: {
        val: '0.83',
        label: 'ROC-AUC on MVTec AD',
        desc: 'Pixel-wise defect localization score with Convolutional Autoencoders'
      },
      metrics: [
        { label: 'Pixel ROC-AUC', value: '0.83' },
        { label: 'Inference Latency', value: '14 ms' },
        { label: 'Benchmark', value: 'MVTec AD' },
        { label: 'Framework', value: 'PyTorch / CUDA' }
      ],
      overview: 'Computer vision framework utilizing Convolutional Autoencoders (CAE) for automated industrial quality inspection. Trained exclusively on defect-free reference parts to model normal distribution, localizing anomalies via reconstruction error heatmaps.',
      architecture: [
        'Convolutional encoder for latent bottleneck compression and transpose-convolutional decoder for reconstruction.',
        'Hybrid loss formulation combining Structural Similarity Index (SSIM) and pixel MSE to preserve micro-textures.',
        'Pixel-level anomaly probability map generation with automated adaptive threshold segmentation.',
        'Evaluated on standard MVTec AD industrial benchmark, reaching 0.83 pixel-wise ROC-AUC near state-of-the-art.'
      ]
    },
    es: {
      title: 'Unsupervised Anomaly Detection with PyTorch',
      subtitle: 'Detección y localización espacial de defectos microscópicos en componentes industriales sin supervisión previa',
      category: 'VISIÓN ARTIFICIAL & DEEP LEARNING',
      highlightBadge: 'ROC-AUC: 0.83 (PIXEL-WISE)',
      desc: 'Diseño y entrenamiento de un Autoencoder Convolucional (CAE) para la detección y localización espacial de defectos microscópicos en piezas mecánicas sin requerir imágenes defectuosas previas. Evaluado sobre MVTec AD.',
      metricHighlight: {
        val: '0.83',
        label: 'ROC-AUC en MVTec AD',
        desc: 'Puntuación pixel-wise de localización de anomalías con autoencoders convolucionales'
      },
      metrics: [
        { label: 'ROC-AUC Pixel', value: '0.83' },
        { label: 'Latencia Inferencia', value: '14 ms' },
        { label: 'Benchmark', value: 'MVTec AD' },
        { label: 'Framework', value: 'PyTorch / CUDA' }
      ],
      overview: 'Implementación de visión por computador basada en Convolutional Autoencoders (CAE) para inspección de calidad industrial. Diseñado para aprender la distribución únicamente sobre piezas libres de defectos.',
      architecture: [
        'Encoder convolucional con compresión latente y Decoder con capas de convolución traspuesta.',
        'Función de pérdida combinada SSIM y MSE ponderada para preservar bordes y texturas mecánicas finas.',
        'Generación de mapas de calor de probabilidad de anomalía a nivel de píxel con umbralización adaptativa.',
        'Evaluación sobre el benchmark industrial estándar MVTec AD, logrando una métrica ROC-AUC de 0.83.'
      ]
    },
    it: {
      title: 'Unsupervised Anomaly Detection with PyTorch',
      subtitle: 'Rilevamento e localizzazione spaziale non supervisionata di difetti in componenti industriali tramite mappe termiche',
      category: 'COMPUTER VISION & DEEP LEARNING',
      highlightBadge: 'ROC-AUC: 0.83 (PIXEL-WISE)',
      desc: 'Progettazione e addestramento di un Autoencoder Convoluzionale (CAE) per il rilevamento e la localizzazione di difetti senza esempi anomali preventivi. Valutato sul benchmark standard MVTec AD.',
      metricHighlight: {
        val: '0.83',
        label: 'ROC-AUC su MVTec AD',
        desc: 'Punteggio pixel-wise di localizzazione anomalie con autoencoder convoluzionali'
      },
      metrics: [
        { label: 'ROC-AUC Pixel', value: '0.83' },
        { label: 'Latenza Inferenza', value: '14 ms' },
        { label: 'Benchmark', value: 'MVTec AD' },
        { label: 'Framework', value: 'PyTorch / CUDA' }
      ],
      overview: 'Modello di computer vision basato su Convolutional Autoencoders (CAE) per il controllo qualità industriale, addestrato su componenti privi di difetti per individuare anomalie tramite errore di ricostruzione.',
      architecture: [
        'Encoder convoluzionale con compressione nello spazio latente e Decoder a convoluzioni trasposte.',
        'Funzione di perdita ibrida SSIM e MSE per conservare i dettagli strutturali e tessiturali delle superfici.',
        'Generazione di mappe termiche a livello di pixel con segmentazione automatica della soglia.',
        'Valutazione su MVTec AD con punteggio ROC-AUC pixel-wise di 0.83 competitivo con lo stato dell\'arte.'
      ]
    }
  },

  'ros2-navigation': {
    image: 'assets/images/diff_drive_bench.png',
    paperUrl: 'docs/Informe_Final_ASIMOV_ACG_FVH_DCP.pdf',
    publicationUrl: 'https://repository.eia.edu.co/entities/publication/4991dc75-cd9c-4cb8-a0bd-bbd3bf2161c9',
    github: null,
    period: '2024',
    gallery: [
      {
        id: 'bench',
        src: 'assets/images/diff_drive_bench.png',
        tab: {
          en: 'System in Action',
          es: 'Sistema en Acción',
          it: 'Sistema in Azione'
        },
        caption: {
          en: 'Autonomous Navigation Run: Terminal Nodes, Differential Vehicle on Track & Live RViz Odometry Tracking',
          es: 'Prueba de Navegación Autónoma: Nodos en Terminal, Vehículo Diferencial en Pista y Rastreo en RViz',
          it: 'Test di Navigazione Autonoma: Nodi Terminale, Veicolo Differenziale in Pista e Tracking su RViz'
        }
      },
      {
        id: 'physical',
        src: 'assets/images/diff_drive_physical.jpg',
        tab: {
          en: 'Physical Robot',
          es: 'Robot Físico',
          it: 'Robot Fisico'
        },
        caption: {
          en: 'Assembled Differential Mobile Robot with MDF Chassis, Motors, RPi Pico & RPi 4',
          es: 'Robot Móvil Diferencial Ensamblado con Chasis en MDF, Motores, RPi Pico y RPi 4',
          it: 'Robot Mobile Differenziale Assemblato con Telaio in MDF, Motori, RPi Pico e RPi 4'
        }
      },
      {
        id: 'render',
        src: 'assets/images/diff_drive_render.png',
        tab: {
          en: '3D CAD Model',
          es: 'Modelo CAD 3D',
          it: 'Modello CAD 3D'
        },
        caption: {
          en: '3D CAD Isometric Render of the Differential Vehicle Structure',
          es: 'Render Isométrico CAD 3D de la Estructura del Vehículo Diferencial',
          it: 'Rendering Assonometrico CAD 3D della Struttura del Veicolo Differenziale'
        }
      },
      {
        id: 'cad',
        src: 'assets/images/diff_drive_cad.png',
        tab: {
          en: 'Exploded View',
          es: 'Vista Explosionada',
          it: 'Vista Esplosa'
        },
        caption: {
          en: 'Exploded Mechanical Assembly Diagram & Part Hierarchy',
          es: 'Diagrama Mecánico Explosionado y Jerarquía de Ensamble de Piezas',
          it: 'Diagramma Meccanico Esploso e Componenti'
        }
      }
    ],
    techStack: ['ROS2 Humble', 'Micro-ROS', 'Raspberry Pi 4', 'Raspberry Pi Pico', 'Webots', 'Line of Sight (LOS)', 'Python & C++', 'RViz Telemetry', 'System Identification & PID', 'UART & Wi-Fi'],
    en: {
      title: 'Autonomous Vehicle with ROS2 & Micro-ROS',
      subtitle: 'Autonomous differential mobile robot: Micro-ROS low-level PID, ROS2 odometry, and Line of Sight navigation',
      category: 'AUTONOMOUS MOBILE ROBOTICS',
      highlightBadge: 'ROS2 + MICRO-ROS',
      desc: 'Autonomous differential drive ground vehicle designed and built at EIA University (ASIMOV Research Group). Features a dual-processor architecture (Raspberry Pi 4 + Raspberry Pi Pico), low-level velocity PID loops tuned via motor system identification in Micro-ROS, ROS2 odometry with RViz live telemetry, and autonomous Line of Sight (LOS) waypoint navigation.',
      metricHighlight: {
        val: 'LOS (x,y,θ)',
        label: 'Line of Sight Autonomous Navigation',
        desc: 'Target waypoint (x, y) reachability and heading (θ) convergence with Micro-ROS velocity PID'
      },
      metrics: [
        { label: 'High-Level Compute', value: 'Raspberry Pi 4' },
        { label: 'Low-Level Control', value: 'RPi Pico / Micro-ROS' },
        { label: 'Guidance Strategy', value: 'Line of Sight (LOS)' },
        { label: 'Simulation Twin', value: 'Webots + Turtlesim' }
      ],
      overview: 'Complete design, physical hardware manufacturing, and embedded software architecture for an autonomous differential drive mobile robot developed within the ASIMOV Robotics Research Group at Universidad EIA (Authors: Antonio Cock G., Daniel Correa P., Fernando Velilla H.). The system integrates a dual-processor architecture (Raspberry Pi 4 + Raspberry Pi Pico over UART), motor system identification via first-order step responses, tuned velocity PID loops running in Micro-ROS, ROS2 dead-reckoning odometry visualized in RViz, and autonomous Line of Sight (LOS) waypoint navigation.',
      architecture: [
        'Research paper published in EIA institutional repository: "Robot Móvil Diferencial Autónomo" (Semillero de Investigación en Robótica ASIMOV 2024-2).',
        'Dual-processor embedded computing: Raspberry Pi 4 handling Wi-Fi telemetry and high-level ROS2 nodes, linked via UART to a Raspberry Pi Pico executing low-level Micro-ROS.',
        'Experimental motor system identification: Derived approximate first-order transfer function models from encoder step-response data to synthesize velocity PID controllers.',
        'Real-time dead-reckoning odometry node: ROS2 node calculating planar position (x, y) and heading orientation (θ) from encoder ticks, streaming live to RViz.',
        'Line of Sight (LOS) autonomous navigation: Closed-loop guidance algorithm directing the vehicle toward destination coordinates (x, y), followed by angular heading (θ) alignment.',
        'Simulation & digital twin validation: Comprehensive modeling in Webots and ROS2 Turtlesim for algorithm parameter tuning and risk reduction prior to physical runs.',
        'Experimental findings: Successfully achieved target position and heading set-points; analyzed cumulative encoder drift as an opportunity for future multi-sensor fusion (IMU/vision).'
      ]
    },
    es: {
      title: 'Autonomous Vehicle with ROS2 & Micro-ROS',
      subtitle: 'Robot móvil diferencial autónomo: control de bajo nivel en Micro-ROS, odometría en ROS2 y navegación Line of Sight',
      category: 'ROBÓTICA MÓVIL AUTÓNOMA',
      highlightBadge: 'ROS2 + MICRO-ROS',
      desc: 'Vehículo terrestre diferencial autónomo diseñado y construido en la Universidad EIA (Semillero ASIMOV). Integra arquitectura de cómputo dual (Raspberry Pi 4 + Raspberry Pi Pico), control PID de velocidad sintonizado mediante identificación de motores en Micro-ROS, odometría en ROS2 con telemetría en RViz y navegación autónoma por Line of Sight (LOS).',
      metricHighlight: {
        val: 'LOS (x,y,θ)',
        label: 'Navegación Autónoma Line of Sight',
        desc: 'Convergencia al objetivo (x, y) y orientación (θ) con control PID de velocidad en Micro-ROS'
      },
      metrics: [
        { label: 'Cómputo Superior', value: 'Raspberry Pi 4' },
        { label: 'Control Embebido', value: 'RPi Pico / Micro-ROS' },
        { label: 'Estrategia de Guía', value: 'Line of Sight (LOS)' },
        { label: 'Gemelo Digital', value: 'Webots + Turtlesim' }
      ],
      overview: 'Diseño integral, manufactura de hardware y arquitectura de software embebido para un robot móvil diferencial autónomo desarrollado en el Semillero de Robótica ASIMOV de la Universidad EIA (Autores: Antonio Cock G., Daniel Correa P., Fernando Velilla H.). El sistema integra una arquitectura de cómputo dual (Raspberry Pi 4 + Raspberry Pi Pico comunicadas por UART), identificación experimental de motores mediante modelos de primer orden, control PID de velocidad en Micro-ROS, nodo de odometría en ROS2 con telemetría en RViz y navegación autónoma punto a punto mediante el algoritmo Line of Sight (LOS).',
      architecture: [
        'Artículo de investigación publicado en el repositorio institucional de la Universidad EIA: "Robot Móvil Diferencial Autónomo" (Semillero ASIMOV 2024-2).',
        'Arquitectura de cómputo dual: Raspberry Pi 4 para telemetría Wi-Fi y nodos de alto nivel en ROS2, conectada por UART a una Raspberry Pi Pico ejecutando Micro-ROS de bajo nivel.',
        'Identificación experimental de motores: Modelado mediante funciones de transferencia de primer orden a partir de datos de encoders para sintonizar controladores PID de velocidad.',
        'Nodo de odometría en tiempo real: Nodo en ROS2 que calcula la posición plana (x, y) y orientación (θ) a partir de los encoders, visualizando la trayectoria en RViz.',
        'Navegación autónoma por Line of Sight (LOS): Algoritmo de guiado en lazo cerrado que desplaza el vehículo hacia el objetivo (x, y) y luego ajusta la orientación angular (θ).',
        'Gemelo digital y simulación previa: Modelado completo en Webots y pruebas en ROS2 Turtlesim para ajustar parámetros de control antes de las pruebas físicas.',
        'Resultados experimentales: Alcanzó satisfactoriamente los set-points de posición y orientación en pista de pruebas; documentó el error acumulativo de encoders como base para futura fusión sensorial (IMU/visión).'
      ]
    },
    it: {
      title: 'Autonomous Vehicle with ROS2 & Micro-ROS',
      subtitle: 'Robot mobile differenziale autonomo: controllo Micro-ROS, odometria ROS2 e navigazione Line of Sight',
      category: 'ROBOTICA MOBILE AUTONOMA',
      highlightBadge: 'ROS2 + MICRO-ROS',
      desc: 'Veicolo terrestre a trazione differenziale progettato e realizzato presso l\'Universidad EIA (Gruppo di Ricerca ASIMOV). Include architettura a doppio processore (Raspberry Pi 4 + Raspberry Pi Pico), controllo di velocità PID sintonizzato tramite identificazione dei motori in Micro-ROS, odometria in ROS2 con RViz e navigazione autonoma Line of Sight (LOS).',
      metricHighlight: {
        val: 'LOS (x,y,θ)',
        label: 'Navigazione Autonoma Line of Sight',
        desc: 'Raggiungimento coordinate (x, y) e allineamento (θ) con controllo PID in Micro-ROS'
      },
      metrics: [
        { label: 'Computer di Bordo', value: 'Raspberry Pi 4' },
        { label: 'Controllo Embedded', value: 'RPi Pico / Micro-ROS' },
        { label: 'Strategia di Guida', value: 'Line of Sight (LOS)' },
        { label: 'Gemello Digitale', value: 'Webots + Turtlesim' }
      ],
      overview: 'Progettazione completa, assemblaggio dell\'hardware e architettura software embedded per un robot mobile differenziale autonomo sviluppato all\'interno del gruppo di ricerca ASIMOV presso l\'Universidad EIA (Autori: Antonio Cock G., Daniel Correa P., Fernando Velilla H.). Il sistema combina architettura a doppio processore (Raspberry Pi 4 + Raspberry Pi Pico su UART), identificazione sperimentale dei motori con modelli del primo ordine, anelli PID di velocità in Micro-ROS, odometria real-time in ROS2 con RViz e navigazione autonoma con algoritmo Line of Sight (LOS).',
      architecture: [
        'Articolo scientifico pubblicato nell\'archivio istituzionale EIA: "Robot Móvil Diferencial Autónomo" (Semillero di Ricerca ASIMOV 2024-2).',
        'Architettura computazionale duale: Raspberry Pi 4 per telemetria Wi-Fi e nodi ROS2, collegata via UART a un Raspberry Pi Pico con Micro-ROS per il controllo di basso livello.',
        'Identificazione sperimentale dei motori: Stima di modelli del primo ordine da risposte al gradino degli encoder per la taratura dei controllori PID di velocità.',
        'Nodo di odometria real-time in ROS2: Calcolo delle coordinate (x, y) e orientamento (θ) in tempo reale a partire dagli encoder con visualizzazione su RViz.',
        'Guida autonoma Line of Sight (LOS): Algoritmo in anello chiuso che guida il robot verso il punto desiderato (x, y) per poi effettuare la rotazione sull\'orientamento finale (θ).',
        'Simulazione e gemello digitale: Modellazione in Webots e verifiche preliminari in ROS2 Turtlesim per la validazione sicura del controllo prima dei test fisici.',
        'Risultati sperimentali: Punti obiettivo e orientamento raggiunti con successo; evidenziato il drift cumulativo degli encoder per futuri sviluppi con fusione sensoriale (IMU/visione).'
      ]
    }
  },

  'hil-simulation': {
    image: 'assets/images/hil_simulation.jpg',
    github: null,
    period: '2025',
    techStack: ['Automation Studio', 'PLC Ladder Logic', 'GRAFCET', 'HIL Simulation', 'Safety Interlocks', 'Industrial Control'],
    en: {
      title: 'Hardware-in-the-Loop (HIL) Air Quality Control',
      subtitle: 'High-fidelity digital twin simulation validating industrial PLC logic & firmware prior to hardware deployment',
      category: 'CYBER-PHYSICAL CONTROL & HIL',
      highlightBadge: 'AUTOMATION STUDIO',
      desc: 'High-fidelity digital twin and HIL simulation in Automation Studio to validate PLC logic (Ladder & GRAFCET) and firmware for an industrial air purification plant, verifying safety sequences before manufacturing.',
      metricHighlight: {
        val: '100%',
        label: 'Pre-Deployment HIL Validation',
        desc: 'Virtual PLC digital twin coverage in Automation Studio prior to hardware assembly'
      },
      metrics: [
        { label: 'HIL Tool', value: 'Automation Studio' },
        { label: 'Control Logic', value: 'Ladder & GRAFCET' },
        { label: 'Safety Coverage', value: '100% Pre-test' },
        { label: 'Hardware', value: 'B&R / Siemens PLC' }
      ],
      overview: 'Development of a high-fidelity Hardware-in-the-Loop (HIL) simulation in Automation Studio modeling fluid dynamics, sensor responses, and valve actuation for an industrial air purification system.',
      architecture: [
        'Virtual plant modeling capturing airflow, pollutant concentration dynamics, and actuator response times.',
        'Closed-loop interface with physical PLC controller hardware exchanging real-time digital and analog signals.',
        'Rigorous validation of GRAFCET operational state machines, safety interlocks, and emergency stop protocols.',
        'Substantial commissioning risk reduction, preventing physical equipment damage during plant deployment.'
      ]
    },
    es: {
      title: 'Hardware-in-the-Loop (HIL) Air Quality Control',
      subtitle: 'Gemelo digital y simulación en tiempo real para validación de lógica PLC y firmware de purificación industrial',
      category: 'CONTROL CIBERFÍSICO & HIL',
      highlightBadge: 'AUTOMATION STUDIO',
      desc: 'Desarrollo de un gemelo digital y simulación HIL en Automation Studio para validar la lógica PLC (Ladder & GRAFCET) y firmware de un sistema de purificación de aire industrial, garantizando secuencias y protocolos de seguridad.',
      metricHighlight: {
        val: '100%',
        label: 'Validación Previa HIL',
        desc: 'Cobertura de gemelo digital de planta en Automation Studio previa a fabricación'
      },
      metrics: [
        { label: 'Entorno HIL', value: 'Automation Studio' },
        { label: 'Lógica Control', value: 'Ladder & GRAFCET' },
        { label: 'Cobertura Seguridad', value: '100% Pre-test' },
        { label: 'Hardware', value: 'PLC B&R / Siemens' }
      ],
      overview: 'Simulación de alta fidelidad Hardware-in-the-Loop (HIL) dentro de Automation Studio para modelar el comportamiento dinámico termofluidodinámico de un sistema industrial de purificación de aire.',
      architecture: [
        'Modelado de planta virtual con dinámica de flujo de gases, sensores y curvas de actuadores.',
        'Conexión en bucle cerrado directo con el PLC físico mediante intercambio de señales en tiempo real.',
        'Validación de secuencias operativas GRAFCET, enclavamientos críticos y paradas de emergencia.',
        'Eliminación del riesgo de daño a equipos mecánicos y reducción del tiempo de puesta en marcha.'
      ]
    },
    it: {
      title: 'Hardware-in-the-Loop (HIL) Air Quality Control',
      subtitle: 'Gemello digitale e simulazione real-time per la validazione di logica PLC e firmware industriale prima della produzione',
      category: 'CONTROLLO CIBERFISICO & HIL',
      highlightBadge: 'AUTOMATION STUDIO',
      desc: 'Sviluppo di un gemello digitale e simulazione HIL in Automation Studio per validare la logica PLC (Ladder & GRAFCET) e il firmware di un impianto di purificazione dell\'aria, verificando i protocolli di sicurezza.',
      metricHighlight: {
        val: '100%',
        label: 'Validazione HIL Pre-Installazione',
        desc: 'Copertura del gemello digitale PLC in Automation Studio prima della produzione'
      },
      metrics: [
        { label: 'Ambiente HIL', value: 'Automation Studio' },
        { label: 'Logica Controllo', value: 'Ladder & GRAFCET' },
        { label: 'Copertura Sicurezza', value: '100% Pre-test' },
        { label: 'Hardware', value: 'PLC B&R / Siemens' }
      ],
      overview: 'Sviluppo di una simulazione Hardware-in-the-Loop (HIL) ad alta fedeltà in Automation Studio per modellare la dinamica fluidodinamica di un sistema di depurazione dell\'aria industriale.',
      architecture: [
        'Modellazione della pianta virtuale con dinamiche di portata, sensori e curve di risposta delle valvole.',
        'Collegamento in anello chiuso con l\'hardware PLC fisico tramite scambio di segnali digitali e analogici in tempo reale.',
        'Verifica rigorosa degli stati operativi GRAFCET, interblocchi di sicurezza e arresti di emergenza.',
        'Eliminazione dei rischi di guasto hardware e forte riduzione dei tempi di messa in servizio dell\'impianto.'
      ]
    }
  },

  'scara-arm': {
    image: 'assets/images/scara_poster.jpg',
    github: null,
    projectUrl: 'https://tomasvelezvelez.wixsite.com/proyecto-integrador',
    period: '2024',
    videos: [
      {
        id: 'perspective',
        name: {
          en: 'Angle 1: Perspective',
          es: 'Ángulo 1: Perspectiva',
          it: 'Angolo 1: Prospettiva'
        },
        title: {
          en: 'Workstation Setup, Embedded Driver & Trajectory Motion',
          es: 'Estación de Trabajo, Control Embebido y Movimiento de Trayectoria',
          it: 'Setup Stazione, Driver Embedded e Movimento di Traiettoria'
        },
        src: 'videos/scara_perspective.mp4'
      },
      {
        id: 'topdown',
        name: {
          en: 'Angle 2: Top-Down',
          es: 'Ángulo 2: Cenital',
          it: 'Angolo 2: Vista dall\'Alto'
        },
        title: {
          en: 'Planar RR-P Kinematics, Joint Displacements & Workspace Analysis',
          es: 'Cinemática Planar RR-P, Desplazamiento Articular y Espacio de Trabajo',
          it: 'Cinematica Planare RR-P, Spostamenti Articolari e Spazio di Lavoro'
        },
        src: 'videos/scara_topdown.mp4'
      }
    ],
    techStack: ['Industrial Robotics', 'Inverse Kinematics', 'MATLAB', 'C++', 'Denavit-Hartenberg', 'Trajectory Planning', 'Embedded Control', 'Physical Prototype'],
    en: {
      title: 'SCARA 3-DOF Robotic Arm (RR-P)',
      subtitle: 'Kinematics modeling, trajectory planning in Cartesian space, and control for industrial manipulator',
      category: 'INDUSTRIAL ROBOTICS',
      highlightBadge: '3-DOF SCARA',
      desc: 'Forward and inverse kinematics via Denavit-Hartenberg parameters, workspace optimization, and 5th-degree polynomial trajectory planning for industrial pick-and-place manipulation.',
      metricHighlight: {
        val: '3-DOF',
        label: 'Cartesian Trajectory Kinematics',
        desc: '5th-order polynomial splines for zero jerk in pick-and-place manipulation'
      },
      metrics: [
        { label: 'DOF', value: '3-DOF (RR-P)' },
        { label: 'Trajectory', value: '5th-Order Splines' },
        { label: 'Tools', value: 'MATLAB / C++' },
        { label: 'Type', value: 'SCARA Manipulator' }
      ],
      overview: 'Complete kinematic and dynamic modeling for a 3-degree-of-freedom SCARA robotic arm (Revolute-Revolute-Prismatic) designed for high-precision manufacturing tasks.',
      architecture: [
        'Homogeneous transformation matrices using Denavit-Hartenberg convention.',
        'Analytical inverse kinematics with elbow-up and elbow-down posture selection.',
        'Smooth Cartesian trajectory generation minimizing velocity and acceleration jerk.',
        '3D simulated verification of joint limits and singularity avoidance.'
      ]
    },
    es: {
      title: 'SCARA 3-DOF Robotic Arm (RR-P)',
      subtitle: 'Modelado cinemático, planificación de trayectorias en espacio cartesiano y control para robot industrial',
      category: 'ROBÓTICA INDUSTRIAL',
      highlightBadge: '3-DOF SCARA',
      desc: 'Modelado cinemático directo e inverso mediante parámetros Denavit-Hartenberg (DH) y planificación de trayectorias en espacio cartesiano con splines de 5to orden para tareas de pick-and-place.',
      metricHighlight: {
        val: '3-DOF',
        label: 'Cinemática de Trayectorias',
        desc: 'Planificación cartesiana con polinomios de 5to orden para suavidad continua'
      },
      metrics: [
        { label: 'DOF', value: '3-DOF (RR-P)' },
        { label: 'Planificación', value: 'Splines 5to Grado' },
        { label: 'Herramientas', value: 'MATLAB / C++' },
        { label: 'Tipo', value: 'SCARA Manipulator' }
      ],
      overview: 'Modelado cinemático y dinámico completo para un manipulador robótico industrial tipo SCARA de 3 grados de libertad (Revoluta-Revoluta-Prismática).',
      architecture: [
        'Matrices de transformación homogénea mediante parámetros Denavit-Hartenberg (DH).',
        'Resolución de cinemática inversa analítica con selección de configuraciones articulares.',
        'Planificación en espacio cartesiano con perfiles de 5to orden para suavidad continua en aceleración.',
        'Validación tridimensional de límites articulares y singularidades mecánicas.'
      ]
    },
    it: {
      title: 'SCARA 3-DOF Robotic Arm (RR-P)',
      subtitle: 'Modellazione cinematica, pianificazione traiettorie cartesiane e controllo per robot industriale',
      category: 'ROBOTICA INDUSTRIALE',
      highlightBadge: '3-DOF SCARA',
      desc: 'Cinematica diretta e inversa con convenzione Denavit-Hartenberg (DH) e pianificazione di traiettorie nel piano cartesiano tramite spline di 5° grado per manipolazione industriale.',
      metricHighlight: {
        val: '3-DOF',
        label: 'Cinematica delle Traiettorie',
        desc: 'Pianificazione cartesiana con polinomi di 5° grado per annullare il jerk'
      },
      metrics: [
        { label: 'DOF', value: '3-DOF (RR-P)' },
        { label: 'Traiettorie', value: 'Spline 5° Grado' },
        { label: 'Strumenti', value: 'MATLAB / C++' },
        { label: 'Tipo', value: 'Manipolatore SCARA' }
      ],
      overview: 'Modellazione cinematica e dinamica completa per un braccio robotico industriale SCARA a 3 gradi di libertà per attività di assemblaggio e pick-and-place.',
      architecture: [
        'Matrici di trasformazione omogenea con parametri Denavit-Hartenberg.',
        'Risoluzione analitica della cinematica inversa con selezione delle posture del gomito.',
        'Generazione di traiettorie cartesiane continue per minimizzare il jerk di accelerazione.',
        'Verifica in simulazione 3D dei limiti articolari e prevenzione delle singolarità.'
      ]
    }
  },

  'marine-rov': {
    image: 'assets/images/submarine_poster.jpg',
    github: null,
    period: '2024',
    videos: [
      {
        id: 'dynamics',
        name: {
          en: 'Angle 1: Submerged Dynamics',
          es: 'Ángulo 1: Dinámica Sumergida',
          it: 'Angolo 1: Dinamica Sommersa'
        },
        title: {
          en: 'Submerged Maneuvering, Vectored Propulsion & Tank Navigation',
          es: 'Maniobrabilidad Sumergida, Propulsión Vectorial y Navegación en Tanque',
          it: 'Manovre Subacquee, Propulsione Vettoriale e Navigazione in Vasca'
        },
        src: 'videos/submarine_dynamics.mp4'
      },
      {
        id: 'surface',
        name: {
          en: 'Angle 2: Surface & Structural View',
          es: 'Ángulo 2: Superficie y Estructura',
          it: 'Angolo 2: Vista di Superficie e Struttura'
        },
        title: {
          en: 'Hull Waterproofing, Vectored Thruster Matrix & Surface Dynamics',
          es: 'Estanqueidad del Casco, Matriz de Propulsores y Dinámica en Superficie',
          it: 'Tenuta Stagna dello Scafo, Matrice di Propulsori e Dinamica di Superficie'
        },
        src: 'videos/submarine_surface.mp4'
      }
    ],
    techStack: ['Embedded Systems', 'C++', 'Vectored Control', 'Sensors', 'Power Electronics', 'CAD'],
    en: {
      title: 'Marine ROV Submersible Prototype',
      subtitle: 'Tethered submersible for marine oceanographic monitoring with vectored thruster matrix and real-time PC UI',
      category: 'UNDERWATER ROBOTICS',
      highlightBadge: 'TETHERED ROV',
      desc: 'Remotely operated submersible prototype with vectored brushless thrusters, depth/temperature sensor telemetry, and tethered RS-485 PC control station.',
      metricHighlight: {
        val: '4x',
        label: 'Vectored Subsea Propulsion',
        desc: '4x brushless thruster matrix with umbilical RS-485 real-time telemetry'
      },
      metrics: [
        { label: 'Comms', value: 'Tethered RS-485' },
        { label: 'Thrusters', value: '4x Brushless Vector' },
        { label: 'Sensors', value: 'Depth / Temp' },
        { label: 'Interface', value: 'Real-Time PC UI' }
      ],
      overview: 'Design and construction of an underwater Remotely Operated Vehicle (ROV) for aquatic telemetry collection and oceanographic inspection.',
      architecture: [
        'Hydrostatic watertight hull design with positive buoyancy distribution.',
        'Vectored brushless thruster allocation for agile 3D underwater maneuvering.',
        'Subsea temperature and hydrostatic pressure telemetry acquisition on microcontroller.',
        'Tethered umbilical communications linking the sub to a PC monitoring station.'
      ]
    },
    es: {
      title: 'Marine ROV Submersible Prototype',
      subtitle: 'Sumergible teledirigido para monitorización oceanográfica con matriz de propulsores y UI en tiempo real',
      category: 'ROBÓTICA SUBMARINA',
      highlightBadge: 'ROV TELEDIRIGIDO',
      desc: 'Prototipo sumergible teledirigido con propulsores brushless vectoriales, telemetría sensorial de temperatura/presión y estación de control en PC por cable umbilical RS-485.',
      metricHighlight: {
        val: '4x',
        label: 'Propulsión Vectorial Submarina',
        desc: 'Matriz de 4 propulsores brushless con telemetría RS-485 en tiempo real'
      },
      metrics: [
        { label: 'Comunicación', value: 'Tethered RS-485' },
        { label: 'Propulsores', value: 'Vectorial 4x Brushless' },
        { label: 'Sensores', value: 'Profundidad / Temp' },
        { label: 'Interfaz', value: 'UI Telemetría PC' }
      ],
      overview: 'Diseño e integración de un vehículo submarino operado remotamente (ROV) para recolección de variables físicas y exploración en entornos marinos.',
      architecture: [
        'Diseño mecánico y estanqueidad hidrostática calculada con flotabilidad positiva.',
        'Control de orientación y maniobrabilidad mediante matriz de propulsores brushless vectoriales.',
        'Adquisición de sensores de temperatura y presión hidrostática en microcontrolador embebido.',
        'Software de estación de control en superficie conectado por cable umbilical.'
      ]
    },
    it: {
      title: 'Marine ROV Submersible Prototype',
      subtitle: 'Sommergibile filoguidato per monitoraggio oceanografico con matrice vettoriale di propulsori e interfaccia PC',
      category: 'ROBOTICA SOTTOMARINA',
      highlightBadge: 'ROV FILOGUIDATO',
      desc: 'Prototipo di veicolo subacqueo filoguidato con propulsori brushless vettoriali, telemetria di profondità e temperatura e software di controllo da terra via RS-485.',
      metricHighlight: {
        val: '4x',
        label: 'Propulsione Vettoriale Sottomarina',
        desc: 'Matrice di 4 propulsori brushless con telemetria RS-485 in tempo reale'
      },
      metrics: [
        { label: 'Comunicazione', value: 'Tethered RS-485' },
        { label: 'Propulsori', value: '4x Brushless Vettoriali' },
        { label: 'Sensori', value: 'Profondità / Temp' },
        { label: 'Interfaccia', value: 'UI PC Real-Time' }
      ],
      overview: 'Progettazione e realizzazione di un veicolo subacqueo a controllo remoto (ROV) per il rilevamento di parametri ambientali marini.',
      architecture: [
        'Progettazione meccanica dello scafo a tenuta stagna con assetto a galleggiamento positivo.',
        'Allocazione vettoriale di spinta per manovrabilità tridimensionale sottomarina.',
        'Acquisizione sensori di temperatura e pressione idrostatica con microcontrollore.',
        'Collegamento ombelicale con trasmissione dati per monitoraggio e controllo da stazione PC.'
      ]
    }
  }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  const storedLang = localStorage.getItem('site_lang');
  if (storedLang && ['en', 'es', 'it'].includes(storedLang)) {
    currentLang = storedLang;
  } else {
    currentLang = 'en';
  }

  initLanguageSwitcher();
  initMobileMenu();
  initProjectFiltering();
  initProjectModal();
  initCopyEmail();
  initScrollSpy();
  initClock();

  // Apply default language
  applyLanguage(currentLang);
});

// Language Switcher Controller
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      if (selected && ['en', 'es', 'it'].includes(selected)) {
        currentLang = selected;
        localStorage.setItem('site_lang', selected);
        applyLanguage(selected);
      }
    });
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update active state of lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.dataset.lang === lang) {
      b.classList.remove('text-slate-400', 'bg-transparent', 'border-transparent');
      b.classList.add('text-cyan-400', 'bg-cyan-500/20', 'border-cyan-500/40', 'font-bold');
    } else {
      b.classList.add('text-slate-400', 'bg-transparent', 'border-transparent');
      b.classList.remove('text-cyan-400', 'bg-cyan-500/20', 'border-cyan-500/40', 'font-bold');
    }
  });

  // Update text nodes with data-i18n
  const t = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update HTML nodes with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update Project Cards
  updateProjectCards(lang);
}

function updateProjectCards(lang) {
  document.querySelectorAll('.project-card').forEach(card => {
    const id = card.dataset.projectId;
    const pData = projectsI18n[id];
    if (!pData) return;
    const lData = pData[lang] || pData.en;

    const titleEl = card.querySelector('.project-title');
    if (titleEl) titleEl.textContent = lData.title;

    const descEl = card.querySelector('.project-desc');
    if (descEl) descEl.textContent = lData.desc;

    const catEl = card.querySelector('.project-category');
    if (catEl) catEl.textContent = lData.category;

    const badgeEl = card.querySelector('.project-badge');
    if (badgeEl) badgeEl.textContent = lData.highlightBadge;

    const btnEl = card.querySelector('.open-project-modal-btn span');
    if (btnEl) btnEl.textContent = (translations[lang] || translations.en).card_details_btn;

    const siteBtn = card.querySelector('.project-site-btn span');
    if (siteBtn) siteBtn.textContent = (translations[lang] || translations.en).project_site_btn;

    // Contextual Metric Highlight Update
    if (lData.metricHighlight) {
      const metricValEl = card.querySelector('.project-metric-val');
      if (metricValEl) metricValEl.textContent = lData.metricHighlight.val;

      const metricLabelEl = card.querySelector('.project-metric-label');
      if (metricLabelEl) metricLabelEl.textContent = lData.metricHighlight.label;

      const metricDescEl = card.querySelector('.project-metric-desc');
      if (metricDescEl) metricDescEl.textContent = lData.metricHighlight.desc;
    }
  });
}

// Real-time UTC/CET clock in status badge
function initClock() {
  const clockEl = document.getElementById('system-clock');
  if (!clockEl) return;
  function update() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clockEl.textContent = `${timeStr} CET`;
  }
  update();
  setInterval(update, 1000);
}

// Mobile Menu Navigation
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      menu.classList.add('flex');
    } else {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
    }
  });

  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
    });
  });
}

// Copy Email with Toast Feedback
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'fernandovelilla1@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast((translations[currentLang] || translations.en).toast_copied);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3200);
  }
}

// Scrollspy for Active Navbar Links
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400', 'border-cyan-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400');
      }
    });
  });
}

// Interactive Project Filter Tabs
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
        b.classList.add('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
      });
      btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/40');
      btn.classList.remove('bg-slate-900/60', 'text-slate-400', 'border-slate-800');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// Helper to resolve asset paths against Vite's base URL (e.g. /portfolio/)
const BASE_URL = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
function resolveAsset(url) {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('#')) return url;
  const clean = url.startsWith('/') ? url.slice(1) : url;
  return `${BASE_URL}${clean}`;
}

// Project Modal Details
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const detailBtns = document.querySelectorAll('.open-project-modal-btn');

  if (!modal) return;

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    const videoPlayer = document.getElementById('modal-video-player');
    if (videoPlayer) {
      videoPlayer.pause();
    }
  }

  function openModal(projectId) {
    const pData = projectsI18n[projectId];
    if (!pData) return;
    const lData = pData[currentLang] || pData.en;

    document.getElementById('modal-title').textContent = lData.title;
    document.getElementById('modal-subtitle').textContent = lData.subtitle;
    document.getElementById('modal-category-badge').textContent = lData.category;
    document.getElementById('modal-year-badge').textContent = pData.period;

    // Handle Media (Static Image vs Gallery vs Video Player)
    const modalImg = document.getElementById('modal-img');
    const videoContainer = document.getElementById('modal-video-container');
    const videoPlayer = document.getElementById('modal-video-player');
    const videoTitle = document.getElementById('modal-video-title');
    const videoButtons = document.getElementById('modal-video-buttons');
    const galleryContainer = document.getElementById('modal-gallery-container');
    const galleryImg = document.getElementById('modal-gallery-img');
    const galleryCaption = document.getElementById('modal-gallery-caption');
    const galleryButtons = document.getElementById('modal-gallery-buttons');

    if (pData.videos && pData.videos.length > 0) {
      if (modalImg) modalImg.classList.add('hidden');
      if (galleryContainer) galleryContainer.classList.add('hidden');
      if (videoContainer) videoContainer.classList.remove('hidden');

      if (videoButtons) {
        videoButtons.innerHTML = '';
        pData.videos.forEach((vid, idx) => {
          const btn = document.createElement('button');
          btn.className = `video-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            idx === 0
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
          }`;
          const tabLabel = vid.name ? (vid.name[currentLang] || vid.name.en) : `Video ${idx + 1}`;
          btn.textContent = tabLabel;
          btn.addEventListener('click', () => {
            document.querySelectorAll('.video-tab-btn').forEach(b => {
              b.className = 'video-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-all';
            });
            btn.className = 'video-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 transition-all';
            
            if (videoPlayer) {
              videoPlayer.pause();
              videoPlayer.src = resolveAsset(vid.src);
              videoPlayer.load();
              videoPlayer.play().catch(() => {});
            }
            if (videoTitle) {
              videoTitle.textContent = vid.title ? (vid.title[currentLang] || vid.title.en) : tabLabel;
            }
          });
          videoButtons.appendChild(btn);
        });
      }

      if (videoPlayer) {
        const firstVid = pData.videos[0];
        videoPlayer.src = resolveAsset(firstVid.src);
        videoPlayer.load();
      }
      if (videoTitle) {
        const firstVid = pData.videos[0];
        videoTitle.textContent = firstVid.title ? (firstVid.title[currentLang] || firstVid.title.en) : 'Prototype Video';
      }
    } else if (pData.gallery && pData.gallery.length > 0) {
      if (videoContainer) videoContainer.classList.add('hidden');
      if (videoPlayer) videoPlayer.pause();
      if (modalImg) modalImg.classList.add('hidden');
      if (galleryContainer) galleryContainer.classList.remove('hidden');

      const firstItem = pData.gallery[0];
      if (galleryImg) {
        galleryImg.src = resolveAsset(firstItem.src);
        galleryImg.alt = firstItem.caption ? (firstItem.caption[currentLang] || firstItem.caption.en) : 'Gallery Image';
      }
      if (galleryCaption) {
        galleryCaption.textContent = firstItem.caption ? (firstItem.caption[currentLang] || firstItem.caption.en) : 'Gallery View';
      }

      if (galleryButtons) {
        galleryButtons.innerHTML = '';
        pData.gallery.forEach((item, idx) => {
          const btn = document.createElement('button');
          btn.className = `gallery-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            idx === 0
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
              : 'bg-slate-800/90 text-slate-400 hover:text-white border border-slate-700'
          }`;
          const tabLabel = item.tab ? (item.tab[currentLang] || item.tab.en) : `View ${idx + 1}`;
          btn.textContent = tabLabel;
          btn.addEventListener('click', () => {
            document.querySelectorAll('.gallery-tab-btn').forEach(b => {
              b.className = 'gallery-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-800/90 text-slate-400 hover:text-white border border-slate-700 transition-all';
            });
            btn.className = 'gallery-tab-btn px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold transition-all';

            if (galleryImg) {
              galleryImg.src = resolveAsset(item.src);
              galleryImg.alt = item.caption ? (item.caption[currentLang] || item.caption.en) : tabLabel;
            }
            if (galleryCaption) {
              galleryCaption.textContent = item.caption ? (item.caption[currentLang] || item.caption.en) : tabLabel;
            }
          });
          galleryButtons.appendChild(btn);
        });
      }
    } else {
      if (videoContainer) videoContainer.classList.add('hidden');
      if (videoPlayer) videoPlayer.pause();
      if (galleryContainer) galleryContainer.classList.add('hidden');
      if (modalImg) {
        modalImg.classList.remove('hidden');
        modalImg.src = resolveAsset(pData.image);
        modalImg.alt = lData.title;
      }
    }

    document.getElementById('modal-overview').textContent = lData.overview;

    const metricsContainer = document.getElementById('modal-metrics');
    metricsContainer.innerHTML = '';
    lData.metrics.forEach(m => {
      const div = document.createElement('div');
      div.className = 'bg-slate-900/80 border border-slate-800 rounded-lg p-3 text-center';
      div.innerHTML = `
        <div class="text-xs text-slate-400 uppercase font-mono tracking-wider">${m.label}</div>
        <div class="text-lg font-bold text-cyan-400 font-mono mt-1">${m.value}</div>
      `;
      metricsContainer.appendChild(div);
    });

    const archContainer = document.getElementById('modal-architecture');
    archContainer.innerHTML = '';
    lData.architecture.forEach(point => {
      const li = document.createElement('li');
      li.className = 'flex items-start text-sm text-slate-300';
      li.innerHTML = `
        <svg class="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>${point}</span>
      `;
      archContainer.appendChild(li);
    });

    const stackContainer = document.getElementById('modal-stack');
    stackContainer.innerHTML = '';
    pData.techStack.forEach(t => {
      const span = document.createElement('span');
      span.className = 'px-2.5 py-1 text-xs font-mono font-medium rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50';
      span.textContent = t;
      stackContainer.appendChild(span);
    });

    const currentT = translations[currentLang] || translations.en;

    // GitHub Link
    const githubLink = document.getElementById('modal-github-link');
    if (githubLink) {
      if (pData.github) {
        githubLink.style.display = 'inline-flex';
        githubLink.href = pData.github;
        const span = githubLink.querySelector('span');
        if (span) span.textContent = currentT.modal_github || 'Open GitHub Repository';
      } else {
        githubLink.style.display = 'none';
      }
    }

    // Project Site Link
    const projectLink = document.getElementById('modal-project-link');
    if (projectLink) {
      if (pData.projectUrl) {
        projectLink.style.display = 'inline-flex';
        projectLink.href = pData.projectUrl;
        const span = projectLink.querySelector('span');
        if (span) span.textContent = currentT.modal_project_site || 'Open Project Website';
      } else {
        projectLink.style.display = 'none';
      }
    }

    // Research Paper PDF Link
    const paperLink = document.getElementById('modal-paper-link');
    if (paperLink) {
      if (pData.paperUrl) {
        paperLink.style.display = 'inline-flex';
        paperLink.href = resolveAsset(pData.paperUrl);
        const span = paperLink.querySelector('span');
        if (span) span.textContent = currentT.modal_paper_btn || 'Read Research Paper (PDF)';
      } else {
        paperLink.style.display = 'none';
      }
    }

    // University Repository Publication Link
    const publicationLink = document.getElementById('modal-publication-link');
    if (publicationLink) {
      if (pData.publicationUrl) {
        publicationLink.style.display = 'inline-flex';
        publicationLink.href = pData.publicationUrl;
        const span = publicationLink.querySelector('span');
        if (span) span.textContent = currentT.modal_publication_btn || 'Semillero ASIMOV 2024-2';
      } else {
        publicationLink.style.display = 'none';
      }
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.projectId;
      openModal(id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
