---
layout: default
title: Portafolio
---

<!-- Encabezado con Typed.js -->
<h1 style="text-align:center;">
  <span id="typed"></span>
</h1>

<!-- Sección de proyectos -->
<h2>Mis Proyectos</h2>
<div id="projects">
  {% for project in site.data.projects %}
  <div class="project" data-aos="fade-up" style="border:1px solid #ccc; padding:15px; margin:10px 0; border-radius:8px;">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a href="{{ project.link }}" target="_blank">Ver proyecto</a>
  </div>
  {% endfor %}
</div>

<!-- Formulario de contacto -->
<h2>Contacto</h2>
<form action="https://formspree.io/f/tu-form-id" method="POST">
  <input type="email" name="email" placeholder="Tu correo" required style="width:100%; padding:10px; margin:5px 0;">
  <textarea name="message" placeholder="Mensaje" style="width:100%; padding:10px; margin:5px 0;"></textarea>
  <button type="submit" style="padding:10px 20px; cursor:pointer;">Enviar</button>
</form>

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
<script src="/assets/js/main.js"></script>
