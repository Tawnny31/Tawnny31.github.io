// Efecto de Typed.js
var typed = new Typed('#typed', {
  strings: ["Hola, soy Tawnny Elizondo", "Desarrolladora y creativa 🚀"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Inicializar animaciones AOS
AOS.init({
  duration: 1000,
  once: true
});

// Cargar proyectos desde projects.json
fetch("projects.json")
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("projects-container");
    data.forEach(p => {
      let div = document.createElement("div");
      div.classList.add("project");
      div.setAttribute("data-aos", "fade-up");
      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">Ver proyecto</a>
      `;
      container.appendChild(div);
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    let projectsData = []; // Variable para guardar los datos de los proyectos
    let currentLang = 'es'; // Variable para saber el idioma actual

    // --- LÓGICA DE TRADUCCIÓN ---
    const translations = {
        en: {
            pageTitle: "Tawnny Elizondo's Portfolio",
            headerTitle: "Tawnny Elizondo",
            headerSubtitle: "Computer Systems Engineer",
            navAbout: "About Me",
            navProjects: "Projects",
            navContact: "Contact",
            aboutTitle: "About Me",
            aboutText: "Here you can write a brief description about yourself, your skills, your passion for technology, and what you are looking for professionally. Highlight your strengths as a systems engineer.",
            projectsTitle: "My Projects",
            contactTitle: "Contact",
            formNamePlaceholder: "Your Name",
            formEmailPlaceholder: "Your Email",
            formMessagePlaceholder: "Your Message",
            formButton: "Send Message",
            footerText: "&copy; 2025 Tawnny Elizondo. All rights reserved.",
            projectButton: "View Project"
        },
        es: {
            pageTitle: "Portafolio de Tawnny Elizondo",
            headerTitle: "Tawnny Elizondo",
            headerSubtitle: "Ingeniera en Sistemas Computacionales",
            navAbout: "Sobre Mí",
            navProjects: "Proyectos",
            navContact: "Contacto",
            aboutTitle: "Sobre Mí",
            aboutText: "Aquí puedes escribir una breve descripción sobre ti, tus habilidades, tu pasión por la tecnología y lo que buscas profesionalmente. Destaca tus fortalezas como ingeniera en sistemas.",
            projectsTitle: "Mis Proyectos",
            contactTitle: "Contacto",
            formNamePlaceholder: "Tu Nombre",
            formEmailPlaceholder: "Tu Email",
            formMessagePlaceholder: "Tu Mensaje",
            formButton: "Enviar Mensaje",
            footerText: "&copy; 2025 Tawnny Elizondo. Todos los derechos reservados.",
            projectButton: "Ver Proyecto"
        }
    };

    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const projectsContainer = document.getElementById("projects-container");

    // Función para renderizar los proyectos según el idioma
    const renderProjects = (lang) => {
        if (!projectsContainer || projectsData.length === 0) return;

        projectsContainer.innerHTML = ''; // Limpiar contenedor
        projectsData.forEach(p => {
            let div = document.createElement("div");
            div.classList.add("project");
            div.setAttribute("data-aos", "fade-up");
            div.innerHTML = `
                <h3>${p[`title_${lang}`]}</h3>
                <p>${p[`description_${lang}`]}</p>
                <a href="${p.link}" target="_blank">${translations[lang].projectButton}</a>
            `;
            projectsContainer.appendChild(div);
        });
        AOS.refresh(); // Refrescar AOS para que detecte los nuevos elementos
    };

    // Función principal para cambiar el idioma
    const setLanguage = (lang) => {
        currentLang = lang; // Actualizar idioma actual
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
        document.documentElement.lang = lang;

        // Renderizar proyectos con el nuevo idioma
        renderProjects(lang);

        // Actualizar botones activos
        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
        }
    };

    // Cargar proyectos desde JSON y luego inicializar el idioma
    if (projectsContainer) {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => {
                projectsData = data; // Guardar datos de proyectos
                setLanguage(currentLang); // Establecer el idioma inicial (y renderizar proyectos)
            })
            .catch(error => console.error('Error al cargar los proyectos:', error));
    } else {
        setLanguage(currentLang); // Si no hay proyectos, solo traducir el resto
    }

    // Event Listeners para los botones
    btnEs.addEventListener('click', () => setLanguage('es'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // Efecto de Typed.js
    if (document.getElementById('typed')) {
        new Typed('#typed', {
            strings: ["Hola, soy Tawnny Elizondo", "Desarrolladora y creativa 🚀"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    }

    // Inicializar animaciones AOS
    AOS.init({
        duration: 1000,
        once: true
    });
});
