const translations = {
    es: {
        nav: {
            video: "Video",
            vision: "Visión",
            method: "Método",
            bluebook: "BlueBook",
            alignment: "Alineación",
            price: "Precio",
            faq: "FAQ",
            implement: "Agenda una demo ahora"
        },
        hero: {
            eyebrow: "Certificación STEM Innovadora",
            subtitle: "El futuro de la educación.<br><span class=\"text-gradient\">Ahora en tus manos.</span>",
            cta_primary: "Agenda una demo ahora",
            cta_secondary: "Conocer al Autor",
            scroll: "Desliza"
        },
        video: {
            eyebrow: "Mira el video explicativo",
            title: "Qué nos<br><span class=\"text-gradient-blue\">mueve</span>",
            play_btn: "Reproducir ahora",
            podcast_text: "Quieres saber más, escucha mi podcast en Spotify",
            podcast_cta: "Escuchar Episodio"
        },
        vision: {
            eyebrow: "Visión",
            title: "Preparando a las<br><span class=\"text-gradient\">próximas generaciones</span>",
            card1_title: "Educación Masiva",
            card1_desc: "Auto-implementable, de ultra bajo costo —o incluso en <strong>plan gratuito</strong>— requiere recursos mínimos, sin laboratorios complejos ni insumos costosos.",
            card2_title: "Derecho Universal",
            card2_desc: "La divulgación científica no es un privilegio. Diseñado para todos, con enfoque en jóvenes de <strong>6 a 18 años</strong> que se convertirán en agentes de cambio.",
            card3_title: "Orientación STEM",
            card3_desc: "Transformamos su visión del futuro, inspirándolos a elegir carreras en <strong>Ciencia, Tecnología, Ingeniería y Matemáticas</strong> para construir un mañana mejor 🌱",
            closing: "<em>Nuestra visión:</em> hacer del <strong>mundo del futuro</strong> una realidad hoy."
        },
        method: {
            eyebrow: "Metodología Educativa",
            subtitle: "<strong>Programa de Intervención para la Innovación STEM de las siguientes generaciones.</strong><br><span style='font-size:0.9em; opacity:0.9;'>(STEM Intervention for Innovation Program for Next Generations) por sus siglas en inglés.</span><br><br>Alineado a <span class='text-highlight-gold'>NGSS</span> y <span class='text-highlight-gold'>RENAC</span>.",
            feat1_title: "Enseñanza divulgativa",
            feat1_desc: "Hacemos las disciplinas STEM más accesibles, comprensibles y atractivas para los jóvenes mediante contenido cuidadosamente diseñado que conecta conceptos complejos con la realidad tecnológica actual.",
            feat2_title: "Aprendizaje basado en competencias",
            feat2_desc: "Nuestro método integra teoría con prácticas sencillas en el aula, permitiendo que los estudiantes exploren y construyan conocimiento por sí mismos, generando aprendizaje significativo sin invertir tiempo ni recursos en experimentos complejos o costosos.",
            feat3_title: "Certificación validada",
            feat3_desc: "Al finalizar el programa, los estudiantes obtienen una certificación tras aprobar una evaluación que valida sus conocimientos y competencias, acreditándolos como JóvenesSTEM, mejor preparados para los retos del entorno tecnológico actual."
        },
        bluebook: {
            eyebrow: "El Material",
            desc: "El libro central del programa JóvenesSTEM. Un material cuidadosamente desarrollado que presenta conceptos selectos STEM de mayor relevancia tecnológica actual de manera accesible y atractiva para las nuevas generaciones.",
            feat1: "Contenido alineado a estándares internacionales",
            feat2: "Diseñado para máximo engagement estudiantil",
            feat3: "Manual del docente incluido",
            feat4: "Disponible en español e inglés"
        },
        explorer: {
            eyebrow: "Plan de Estudios",
            title: "Explora el <span class=\"text-gradient-blue\">Conocimiento</span>",
            subtitle: "Una estructura pedagógica diseñada para despertar la curiosidad científica y tecnológica. Más de 173 páginas efectivas de contenido de vanguardia.",
            tab1: "Ciencia Fundamental",
            tab2: "Tecnología Aplicada",
            tab3: "Programación en contexto",
            chapter: "Capítulo",
            cap1_title: "Fundamentación Ciencia",
            cap1_desc: "Viajaremos desde el Big Bang hasta la estructura misma de la vida. Entender las reglas del juego (Física, Biología, Química) es vital para dominar y entender el futuro de la tecnología, ser ciudadanos del Cosmos conscientes y soportados en Ciencia. +50 conceptos científicos contenidos en esta unidad.",
            cap1_section1: "Base",
            cap1_section2: "Teórica",
            cap1_item1_title: "Cosmos y Átomos",
            cap1_item1_desc: "Del Big Bang a la física de partículas.",
            cap1_item2_title: "ADN y Genética",
            cap1_item2_desc: "El código fuente de la vida biológica.",
            cap1_item3_title: "Radiación y Energía",
            cap1_item3_desc: "El espectro electromagnético invisible.",
            cap1_item4_title: "Gravedad y Movimiento",
            cap1_item4_desc: "Leyes fundamentales que nos rigen.",
            cap2_title: "Ingeniería del Hardware",
            cap2_desc: "Desmitificamos la \"caja negra\". Nuestra tecnología es la representación tecnológica de nuestra ciencia, enteremos que es vivir en un mundo de estándares tecnológicos y cómo se avanza cuando se ha llegado a los límites, lo que significa trabajar en las fronteras de la Ciencia.",
            cap2_section1: "Tecnología",
            cap2_item1_title: "Industria del Silicio",
            cap2_item1_desc: "Microchips y nanómetros.",
            cap2_item2_title: "Conectividad Inalámbrica",
            cap2_item2_desc: "Redes 5G, Wi-Fi y latencia en sistemas.",
            cap2_item3_title: "Procesadores",
            cap2_item3_desc: "Arquitectura y lógica binaria.",
            cap2_item4_title: "Nanotecnología",
            cap2_item4_desc: "El futuro a escala microscópica.",
            cap3_title: "El Lenguaje de nuestra tecnología.",
            cap3_desc: "Introducción sólida al pensamiento computacional, bases sobre algoritmos y la lógica detrás del lenguaje computaciones IA, ML, como se distribuyen y usan los lenguajes y como iniciarse en este mundo.",
            cap3_section1: "Lógica",
            cap3_section2: "& IA",
            cap3_item1_title: "Introducción a la Programación",
            cap3_item1_desc: "Sintaxis, variables y estructuras de control.",
            cap3_item2_title: "Inteligencia Artificial + ML",
            cap3_item2_desc: "Conceptos básicos y su interacción con hardware.",
            cap3_item3_title: "Algoritmos",
            cap3_item3_desc: "Diagramas de flujo y resolución de problemas.",
            cap3_item4_title: "Front-end vs Back-end",
            cap3_item4_desc: "Entendiendo la arquitectura del software."
        },
        cert: {
            eyebrow: "Tu Futuro Profesional",
            title: "Certificación Oficial",
            desc: "Al completar el programa, cada estudiante recibe un certificado que valida sus competencias en Ciencia, Tecnología y Programación.",
            list1: "Alineado con la <strong>Red Nacional de Actividades Científicas (RENAC)</strong>.",
            list2: "Alineado a estándares <strong>NGSS (Next Generation Science Standards)</strong> de USA.",
            list3: "Reconocimiento tangible de tus nuevas habilidades para tu currículum académico."
        },
        align: {
            eyebrow: "Alineación Curricular",
            title: "Estándares<br><span class=\"text-gradient-gold\">Internacionales</span>",
            renac_desc: "Nuestro contenido está completamente alineado con el marco de competencias nacionales de México, asegurando relevancia y validez curricular.",
            renac_verified: "Verificado",
            ngss_desc: "Diseñado para cumplir con los estándares de ciencia de próxima generación de Estados Unidos, facilitando la implementación internacional.",
            ngss_verified: "Verificado",
            cert_card_title: "Certificación Oficial",
            cert_card_desc: "Al completar el programa, cada estudiante recibe un certificado oficial de JóvenesSTEM que avala sus competencias y habilidades en STEM."
        },
        price: {
            eyebrow: "Inversión Accesible",
            title: "Educación de calidad.",
            title_new: "Educación de calidad<br><span class=\"text-gradient-blue\">para todos</span>",
            // Public Schools Card
            ribbon_free: "🎁 GRATIS",
            pub_title: "Escuelas Públicas",
            pub_badge: "Fast Track o Curricular (completo)",
            pub_note: "Solo costo de material impreso ó gratis Digital.",
            pub_item1: "Licencia de uso completa",
            pub_item2: "BlueBook v1",
            pub_item3: "Certificación Oficial",
            pub_item4: "Guía del Docente",
            pub_item5: "Capacitación virtual",
            pub_ideal: "<strong>Ideal para:</strong> Escuelas públicas de cualquier nivel",
            // Fast Track Card
            ft_badge: "20 Horas · Intensivo",
            ft_note: "+ material impreso (~$70 MXN)",
            ft_item1: "BlueBook v1",
            ft_item2: "Certificación Oficial",
            ft_item3: "Manual del Docente",
            ft_item4: "Asesoría del Autor en persona",
            ft_ideal: "<strong>Ideal para:</strong> Empresas, programas públicos, tiempo reducido",
            ft_format: "<strong>Formato:</strong> 5 semanas · 4 hrs/sesión · 1 vez/semana",
            // Curricular Card
            cr_badge: "90 Horas · Completo",
            cr_note: "+ material impreso (~$70 MXN)",
            cr_item1: "BlueBook v1 Completo (90 horas)",
            cr_item2: "Certificación Oficial Completa",
            cr_item3: "Guía Docente",
            cr_item4: "Asesoría Personalizada del Autor",
            cr_ideal: "<strong>Ideal para:</strong> Escuelas privadas, integración curricular",
            cr_format: "<strong>Formato:</strong> Anual (1hr/sem) o Semestral (2hrs/sem)",
            // Common
            per_alum: "MXN / alumno",
            inc_title: "Incluye:",
            cta_solic: "Solicitar Implementación",
            comp_title: "Comparación de valor",
            comp_others: "Programas similares",
            comp_value_js: "desde $0 MXN",
            // New additions
            cert_aligned: "Certificación alineada a SEP CONOCER Estándar EC009 (MX) y NGSS (USA)",
            ft_demo_btn: "Descarga Demo Plan de Implementación FastTrack",
            cr_book_link: "Revisa los contenidos del libro completo a detalle aquí!",
            cr_book_url: "https://heyzine.com/flip-book/b3d2f0a53e.html"
        },
        author: {
            eyebrow: "El Autor",
            desc: "Con una trayectoria sólida en gigantes globales como <strong>Apple, PepsiCo, Avis y Santillana</strong>, Alberto combina experiencia corporativa de clase mundial con su pasión por la educación. Como creador del método <strong>SIIP NextGen</strong>, transforma esta visión estratégica en un programa educativo de vanguardia que conecta realmente con las nuevas generaciones.",
            cred1: "Investigador y Educador",
            cred2: "Autor de BlueBook v1",
            cred3: "Método SIIP NextGen",
            cta: "Conocer más en @yepzhi.com"
        },
        study: {
            eyebrow: "Respaldado por la Investigación",
            title: "Datos que<br><span class=\"text-gradient-blue\">comprueban la necesidad</span>",
            subtitle: "Nuestro programa está respaldado por un estudio de investigación realizado con 400 estudiantes de nivel medio superior en Hermosillo, Sonora. Los resultados confirman la urgencia de intervenciones STEM.",
            stat1: "Estudiantes evaluados en 8 instituciones",
            stat2: "Puntaje STEM promedio — muy por debajo del estándar",
            stat3: "Hipótesis confirmadas con evidencia concluyente",
            cta: "Explora los Resultados Completos →"
        },
        contact: {
            eyebrow: "Comienza Hoy",
            title: "Implementa JóvenesSTEM<br><span class=\"text-gradient-blue\">en tu institución</span>",
            subtitle: "Completa el formulario y nos pondremos en contacto contigo para iniciar el proceso de implementación.",
            prefer_direct: "¿Prefieres contacto directo?",
            whatsapp_btn: "WhatsApp Directo",
            instagram_btn: "Síguenos en Instagram"
        },
        faq: {
            eyebrow: "Resuelve tus Dudas",
            title: "Preguntas<br><span class=\"text-gradient-blue\">Frecuentes</span>",
            q1: "¿Qué incluye el programa JóvenesSTEM?",
            a1: "El programa incluye el BlueBook v1 (libro de trabajo), acceso a materiales digitales, guía docente, y certificación oficial al completar el curso.",
            q2: "¿Necesito equipo especial para implementarlo?",
            a2: "No se requiere equipo especializado. El programa está diseñado para funcionar con recursos básicos disponibles en la mayoría de las escuelas.",
            q3: "¿Qué capacitación reciben los docentes?",
            a3: "Ofrecemos capacitación integral para docentes que incluye metodología SIIP NextGen, uso de materiales, y estrategias de evaluación.",
            q4: "¿Cuánto tiempo dura el programa?",
            a4: "Ofrecemos dos modalidades: Fast Track (20 horas intensivas) y Curricular (90 horas distribuidas en el ciclo escolar).",
            q5: "¿Cómo puedo agendar una demostración?",
            a5: "Haz clic en \"Agenda una demo sin costo\" en la parte superior de esta página, o contáctanos directamente por WhatsApp para programar una sesión personalizada."
        },
        form: {
            name: "Nombre completo",
            name_ph: "Tu nombre",
            email: "Correo electrónico",
            email_ph: "correo@ejemplo.com",
            institution: "Institución",
            inst_ph: "Nombre de la institución",
            phone: "Teléfono",
            type: "Tipo de institución",
            select_option: "Selecciona una opción",
            primary: "Primaria",
            secondary: "Secundaria",
            highschool: "Preparatoria",
            university: "Universidad",
            government: "Gobierno / Institución Pública",
            other: "Otro",
            students: "Número aproximado de alumnos",
            students_1_50: "1 - 50 alumnos",
            students_51_100: "51 - 100 alumnos",
            students_101_500: "101 - 500 alumnos",
            students_501_1000: "501 - 1,000 alumnos",
            students_1000_plus: "Más de 1,000 alumnos",
            message: "Mensaje (opcional)",
            message_ph: "Cuéntanos más sobre tus necesidades...",
            submit: "Enviar Solicitud"
        },
        footer: {
            tagline: "Transformando el futuro de la educación STEM en México y el mundo.",
            program: "Programa",
            vision: "Visión",
            method: "Método SIIP",
            bluebook: "BlueBook",
            implementation: "Implementación",
            alignment: "Alineación Curricular",
            pricing: "Precios",
            contact: "Contacto",
            legal: "Legal",
            terms: "Términos de Uso",
            privacy: "Privacidad",
            copyright: "© 2025 JóvenesSTEM. Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            video: "Video",
            vision: "Vision",
            method: "Method",
            bluebook: "BlueBook",
            alignment: "Alignment",
            price: "Pricing",
            faq: "FAQ",
            implement: "Schedule a demo now"
        },
        hero: {
            eyebrow: "Innovative STEM Certification",
            subtitle: "The future of education.<br><span class=\"text-gradient\">Now in your hands.</span>",
            cta_primary: "Schedule a demo now",
            cta_secondary: "Meet the Author",
            scroll: "Scroll"
        },
        video: {
            eyebrow: "Watch the explainer video",
            title: "What<br><span class=\"text-gradient-blue\">moves us</span>",
            play_btn: "Play now",
            podcast_text: "Want to know more? Listen to my podcast on Spotify",
            podcast_cta: "Listen to Episode"
        },
        vision: {
            eyebrow: "Vision",
            title: "Preparing the<br><span class=\"text-gradient\">next generations</span>",
            card1_title: "Massive Education",
            card1_desc: "Self-implementing, ultra-low cost —or even on a <strong>free plan</strong>— requires minimal resources, no complex labs or expensive supplies.",
            card2_title: "Universal Right",
            card2_desc: "Science education is not a privilege. Designed for everyone, focused on youth <strong>ages 6 to 18</strong> who will become agents of change.",
            card3_title: "STEM Orientation",
            card3_desc: "We transform their vision of the future, inspiring them to pursue careers in <strong>Science, Technology, Engineering, and Mathematics</strong> for a better tomorrow 🌱",
            closing: "<em>Our vision:</em> making the <strong>world of the future</strong> a reality today."
        },
        method: {
            eyebrow: "Educational Methodology",
            subtitle: "STEM Intervention for Innovation Program for Next Generations.<br>Aligned with NGSS and RENAC.",
            feat1_title: "Outreach Teaching",
            feat1_desc: "We make STEM fields more accessible, understandable, and attractive for youth through carefully designed content.",
            feat2_title: "Interactive Learning",
            feat2_desc: "The method combines theory with practice, allowing students to experiment and discover for themselves.",
            feat3_title: "Validated Certification",
            feat3_desc: "Upon completing the program, students receive a certification that endorses their STEM knowledge and skills."
        },
        bluebook: {
            eyebrow: "The Material",
            desc: "The core book of the JovenesSTEM program. A carefully developed material that presents STEM concepts in an accessible and attractive way for new generations.",
            feat1: "Content aligned with international standards",
            feat2: "Designed for maximum student engagement",
            feat3: "Teacher's manual included",
            feat4: "Available in Spanish and English"
        },
        explorer: {
            eyebrow: "Curriculum",
            title: "Explore <span class=\"text-gradient-blue\">Knowledge</span>",
            subtitle: "A pedagogical structure designed to awaken scientific and technological curiosity. More than 173 effective pages of cutting-edge content.",
            tab1: "Fundamental Science",
            tab2: "Applied Technology",
            tab3: "Programming & Code",
            chapter: "Chapter",
            cap1_title: "The basis of the universe",
            cap1_desc: "We will travel from the Big Bang to the very structure of life. Understanding the rules of the game (Physics, Biology, Chemistry) is vital to dominating the future.",
            cap1_section1: "Theoretical",
            cap1_section2: "Base",
            cap1_item1_title: "Cosmos and Atoms",
            cap1_item1_desc: "From the Big Bang to particle physics.",
            cap1_item2_title: "DNA and Genetics",
            cap1_item2_desc: "The source code of biological life.",
            cap1_item3_title: "Radiation and Energy",
            cap1_item3_desc: "The invisible electromagnetic spectrum.",
            cap1_item4_title: "Gravity and Motion",
            cap1_item4_desc: "Fundamental laws that govern us.",
            cap2_title: "Hardware Engineering",
            cap2_desc: "We demystify the \"black box\". we will open devices to understand the materials science, optics, and electronics that make them work.",
            cap2_section1: "Technology",
            cap2_item1_title: "Screens and Optics",
            cap2_item1_desc: "OLED vs LED, lenses, aperture, and resolution.",
            cap2_item2_title: "Wireless Connectivity",
            cap2_item2_desc: "5G networks, Wi-Fi, and system latency.",
            cap2_item3_title: "Processing and Memory",
            cap2_item3_desc: "Multicore CPUs, DDR, and binary logic.",
            cap2_item4_title: "Nanotechnology",
            cap2_item4_desc: "The future at a microscopic scale.",
            cap3_title: "The Language of Code",
            cap3_desc: "It's not enough to use apps, you have to create them. Solid introduction to computational thinking, algorithms, and the logic behind AI.",
            cap3_section1: "Logic",
            cap3_section2: "& AI",
            cap3_item1_title: "Introduction to Programming",
            cap3_item1_desc: "Syntax, variables, and control structures.",
            cap3_item2_title: "Artificial Intelligence",
            cap3_item2_desc: "Basic concepts and their interaction with hardware.",
            cap3_item3_title: "Algorithms",
            cap3_item3_desc: "Flowcharts and problem solving.",
            cap3_item4_title: "Front-end vs Back-end",
            cap3_item4_desc: "Understanding software architecture."
        },
        cert: {
            eyebrow: "Your Professional Future",
            title: "Official Certification",
            desc: "Upon completing the program, each student receives a certificate validating their competencies in Science, Technology, and Programming.",
            list1: "Aligned with the <strong>National Network of Scientific Activities (RENAC)</strong>.",
            list2: "Aligned with <strong>NGSS (Next Generation Science Standards)</strong> from the USA.",
            list3: "Tangible recognition of your new skills for your academic resume."
        },
        align: {
            eyebrow: "Curricular Alignment",
            title: "International<br><span class=\"text-gradient-gold\">Standards</span>",
            renac_desc: "Our content is completely aligned with Mexico's national competency framework, ensuring relevance and curricular validity.",
            renac_verified: "Verified",
            ngss_desc: "Designed to meet Next Generation Science Standards of the United States, facilitating international implementation.",
            ngss_verified: "Verified",
            cert_card_title: "Official Certification",
            cert_card_desc: "Upon completing the program, each student receives an official JovenesSTEM certificate endorsing their STEM knowledge and skills."
        },
        price: {
            eyebrow: "Affordable Investment",
            title: "Quality education.",
            title_new: "Quality education<br><span class=\"text-gradient-blue\">for everyone</span>",
            // Public Schools Card
            ribbon_free: "🎁 FREE",
            pub_title: "Public Schools",
            pub_badge: "Fast Track or Curricular",
            pub_note: "Only printed material cost",
            pub_item1: "Full usage license",
            pub_item2: "BlueBook v1 (digital)",
            pub_item3: "Official Certification",
            pub_item4: "Teacher Guide",
            pub_item5: "Virtual training",
            pub_ideal: "<strong>Ideal for:</strong> Public schools of any level",
            // Fast Track Card
            ft_badge: "20 Hours · Intensive",
            ft_note: "+ printed material (~$70 MXN)",
            ft_item1: "BlueBook v1 (FastTrack Version)",
            ft_item2: "Official Certification",
            ft_item3: "Virtual Lab Access",
            ft_item4: "Teacher Manual",
            ft_item5: "Author Advisory",
            ft_ideal: "<strong>Ideal for:</strong> Companies, public programs, limited time",
            ft_format: "<strong>Format:</strong> 5 weeks · 4 hrs/session · 1x/week",
            // Curricular Card
            cr_badge: "90 Hours · Complete",
            cr_note: "+ printed material (~$70 MXN)",
            cr_item1: "Full BlueBook v1 (90 hours)",
            cr_item2: "Full Official Certification",
            cr_item3: "Hands-on Lab Included",
            cr_item4: "Premium Teacher Guide",
            cr_item5: "Personalized Author Advisory",
            cr_ideal: "<strong>Ideal for:</strong> Private schools, curricular integration",
            cr_format: "<strong>Format:</strong> Annual (1hr/wk) or Semester (2hrs/wk)",
            // Common
            per_alum: "MXN / student",
            inc_title: "Includes:",
            cta_solic: "Request Implementation",
            comp_title: "Value Comparison",
            comp_others: "Similar Programs",
            comp_value_js: "starts from $0 MXN",
            // New additions
            cert_aligned: "Certification aligned to SEP CONOCER Standard EC009 (MX) and NGSS (USA)",
            ft_demo_btn: "Download FastTrack Implementation Plan Demo",
            cr_book_link: "Check the full book contents in detail here!",
            cr_book_url: "https://heyzine.com/flip-book/cdcc88acef.html"
        },
        author: {
            eyebrow: "The Author",
            desc: "With a solid trajectory in global giants like <strong>Apple, PepsiCo, Avis, and Santillana</strong>, Alberto combines world-class corporate experience with his passion for education. As the creator of the <strong>SIIP NextGen</strong> method, he transforms this strategic vision into a cutting-edge educational program that truly connects with new generations.",
            cred1: "Researcher and Educator",
            cred2: "Author of BlueBook v1",
            cred3: "SIIP NextGen Method",
            cta: "Learn more at @yepzhi.com"
        },
        study: {
            eyebrow: "Backed by Research",
            title: "Data that<br><span class=\"text-gradient-blue\">proves the need</span>",
            subtitle: "Our programme is backed by a research study involving 400 upper secondary students in Hermosillo, Sonora. The findings confirm the urgency of STEM interventions.",
            stat1: "Students assessed across 8 institutions",
            stat2: "Average STEM score — well below standard",
            stat3: "Hypotheses confirmed with conclusive evidence",
            cta: "Explore the Full Results →"
        },
        contact: {
            eyebrow: "Start Today",
            title: "Implement JóvenesSTEM<br><span class=\"text-gradient-blue\">at your institution</span>",
            subtitle: "Complete the form and we will contact you to start the implementation process.",
            prefer_direct: "Prefer direct contact?",
            whatsapp_btn: "Direct WhatsApp",
            instagram_btn: "Follow us on Instagram"
        },
        faq: {
            eyebrow: "Got Questions?",
            title: "Frequently<br><span class=\"text-gradient-blue\">Asked Questions</span>",
            q1: "What does the JóvenesSTEM program include?",
            a1: "The program includes BlueBook v1 (workbook), access to digital materials, teacher guide, and official certification upon completion.",
            q2: "Do I need special equipment to implement it?",
            a2: "No specialized equipment is required. The program is designed to work with basic resources available in most schools.",
            q3: "What training do teachers receive?",
            a3: "We offer comprehensive teacher training that includes SIIP NextGen methodology, material usage, and assessment strategies.",
            q4: "How long does the program last?",
            a4: "We offer two modes: Fast Track (20 intensive hours) and Curricular (90 hours distributed throughout the school year).",
            q5: "How can I schedule a demonstration?",
            a5: "Click \"Schedule a free demo\" at the top of this page, or contact us directly via WhatsApp to schedule a personalized session."
        },
        form: {
            name: "Full name",
            name_ph: "Your name",
            email: "Email address",
            email_ph: "email@example.com",
            institution: "Institution",
            inst_ph: "Institution name",
            phone: "Phone",
            type: "Institution type",
            select_option: "Select an option",
            primary: "Elementary",
            secondary: "Middle School",
            highschool: "High School",
            university: "University",
            government: "Government / Public Institution",
            other: "Other",
            students: "Approximate number of students",
            students_1_50: "1 - 50 students",
            students_51_100: "51 - 100 students",
            students_101_500: "101 - 500 students",
            students_501_1000: "501 - 1,000 students",
            students_1000_plus: "More than 1,000 students",
            message: "Message (optional)",
            message_ph: "Tell us more about your needs...",
            submit: "Send Request"
        },
        footer: {
            tagline: "Transforming the future of STEM education in Mexico and the world.",
            program: "Program",
            vision: "Vision",
            method: "SIIP Method",
            bluebook: "BlueBook",
            implementation: "Implementation",
            alignment: "Curricular Alignment",
            pricing: "Pricing",
            contact: "Contact",
            legal: "Legal",
            terms: "Terms of Use",
            privacy: "Privacy",
            copyright: "© 2025 JóvenesSTEM. All rights reserved."
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'es';

    // Function to update texts
    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            let text = translations[lang];

            keys.forEach(k => {
                if (text) text = text[k];
            });

            if (text) {
                element.innerHTML = text;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const keys = key.split('.');
            let text = translations[lang];

            keys.forEach(k => {
                if (text) text = text[k];
            });

            if (text) {
                element.placeholder = text;
            }
        });

        // Update hrefs (links)
        document.querySelectorAll('[data-i18n-href]').forEach(element => {
            const key = element.getAttribute('data-i18n-href');
            const keys = key.split('.');
            let url = translations[lang];

            keys.forEach(k => {
                if (url) url = url[k];
            });

            if (url) {
                element.href = url;
            }
        });

        // Update Button - show opposite language option
        if (lang === 'es') {
            langBtn.innerHTML = '<span class="lang-flag">🇺🇸</span><span class="lang-text">ENG</span>';
            langBtn.title = "Switch to English";
        } else {
            langBtn.innerHTML = '<span class="lang-flag">🇲🇽</span><span class="lang-text">ESP</span>';
            langBtn.title = "Cambiar a Español";
        }

        // Save preference
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    // Initialize
    updateLanguage(currentLang);

    // Toggle listener
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage(newLang);
        });
    }
});
