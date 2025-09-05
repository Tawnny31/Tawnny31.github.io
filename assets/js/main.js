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
