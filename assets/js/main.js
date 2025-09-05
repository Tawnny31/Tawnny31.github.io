document.addEventListener('DOMContentLoaded', () => {

    // --- INICIALIZACIÓN DE LIBRERÍAS ---

    // Inicializar animaciones AOS
    AOS.init({
      duration: 1000,
      once: true
    });

    // --- LÓGICA DE TRADUCCIÓN ---

    const translations = {
        en: {
            pageTitle: "Tawnny Elizondo's Portfolio",
            headerSubtitle: "Computer Systems Engineer",
            typedStrings: ["Hello, I'm Tawnny Elizondo", "Developer and creative mind 🚀"],
            navAbout: "About Me",
            navProjects: "Projects",
            navContact: "Contact",
            aboutTitle: "About Me",
            aboutText: "Here you can write a brief description about yourself, your skills, your passion for technology, and what you are looking for professionally. Highlight your strengths as a systems engineer.",
            projectsTitle: "My Projects",
            project1Title: "Project 1",
            project1Desc: "Description of the project. Mention the technologies used (e.g., Java, Python, React, SQL) and the project's objective.",
            project2Title: "Project 2",
            project2Desc: "Description of the project. Mention the technologies used and the project's objective.",
            projectButton: "View Project",
            contactTitle: "Contact",
            // --- NUEVAS TRADUCCIONES ---
            skillsTitle: "Skills & Tools",
            skillsCatBackend: "Backend",
            skillsCatFrontend: "Frontend",
            skillsCatFrameworks: "Frameworks",
            skillsCatDatabases: "Databases",
            skillsCatData: "Data Analysis",
            skillsCatLowCode: "Low/No Code Platforms",
            skillsCatDevOps: "DevOps & Deployment",
            certsTitle: "Certifications",
            cert1: "Scrum Foundation Professional Certificate (SFPC)",
            cert2: "Important Certification #2",
            cert3: "Important Certification #3",
            downloadTitle: "Download Resume",
            downloadButtonEs: "Spanish",
            downloadButtonEn: "English",
            // --- FIN NUEVAS TRADUCCIONES ---
            formNamePlaceholder: "Your Name",
            formEmailPlaceholder: "Your Email",
            formMessagePlaceholder: "Your Message",
            formButton: "Send Message",
            footerText: "&copy; 2025 Tawnny Elizondo. All rights reserved.",
            modalTitle: "Thank you!",
            modalText: "Your message has been sent. I will get in touch with you shortly."
        },
        es: {
            pageTitle: "Portafolio de Tawnny Elizondo",
            headerSubtitle: "Ingeniera en Sistemas Computacionales",
            typedStrings: ["Hola, soy Tawnny Elizondo", "Desarrolladora y creativa 🚀"],
            navAbout: "Sobre Mí",
            navProjects: "Proyectos",
            navContact: "Contacto",
            aboutTitle: "Sobre Mí",
            aboutText: "Aquí puedes escribir una breve descripción sobre ti, tus habilidades, tu pasión por la tecnología y lo que buscas profesionalmente. Destaca tus fortalezas como ingeniera en sistemas.",
            projectsTitle: "Mis Proyectos",
            project1Title: "Proyecto 1",
            project1Desc: "Descripción del proyecto. Menciona las tecnologías utilizadas (ej. Java, Python, React, SQL) y el objetivo del proyecto.",
            project2Title: "Proyecto 2",
            project2Desc: "Descripción del proyecto. Menciona las tecnologías utilizadas y el objetivo del proyecto.",
            projectButton: "Ver Proyecto",
            contactTitle: "Contacto",
            // --- NUEVAS TRADUCCIONES ---
            skillsTitle: "Habilidades y Herramientas",
            skillsCatBackend: "Backend",
            skillsCatFrontend: "Frontend",
            skillsCatFrameworks: "Frameworks",
            skillsCatDatabases: "Bases de Datos",
            skillsCatData: "Análisis de Datos",
            skillsCatLowCode: "Plataformas Low/No Code",
            skillsCatDevOps: "DevOps & Deployment",
            certsTitle: "Certificaciones",
            cert1: "Scrum Foundation Professional Certificate (SFPC)",
            cert2: "Certificación Importante #2",
            cert3: "Certificación Importante #3",
            downloadTitle: "Descargar CV",
            downloadButtonEs: "Español",
            downloadButtonEn: "English",
            // --- FIN NUEVAS TRADUCCIONES ---
            formNamePlaceholder: "Tu Nombre",
            formEmailPlaceholder: "Tu Email",
            formMessagePlaceholder: "Tu Mensaje",
            formButton: "Enviar Mensaje",
            footerText: "&copy; 2025 Tawnny Elizondo. Todos los derechos reservados.",
            modalTitle: "¡Gracias!",
            modalText: "Tu mensaje ha sido enviado. Me pondré en contacto contigo pronto."
        }
    };

    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    let typedInstance = null; // Variable para guardar la instancia de Typed.js

    const setLanguage = (lang) => {
        // Traducir todos los elementos con data-lang-key
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Actualizar el atributo lang del HTML
        document.documentElement.lang = lang;

        // Actualizar la clase 'active' en los botones
        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
        }

        // Reiniciar Typed.js con las nuevas cadenas de texto
        if (typedInstance) {
            typedInstance.destroy();
        }
        typedInstance = new Typed('#typed', {
            strings: translations[lang].typedStrings,
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    };

    // Asignar los eventos de clic a los botones
    btnEs.addEventListener('click', () => setLanguage('es'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // Establecer el idioma inicial al cargar la página
    setLanguage('es');

    // --- LÓGICA DEL FORMULARIO Y MODAL ---
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('thank-you-modal');
    const closeModal = document.getElementById('close-modal');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene la recarga de la página

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                modal.classList.add('visible'); // Muestra la modal
                contactForm.reset(); // Limpia el formulario
            } else {
                // Opcional: Manejar errores si el envío falla
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje.');
        });
    });

    // Función para cerrar la modal
    const hideModal = () => {
        modal.classList.remove('visible');
    };

    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Cierra la modal si se hace clic en el fondo
            hideModal();
        }
    });
});