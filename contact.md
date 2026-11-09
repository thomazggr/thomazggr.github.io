---
layout: default
title: Contato
permalink: /contact/
description: "Sobre Thomaz e como entrar em contato."
---
<header class="page-heading contact-heading">
  <p class="eyebrow">Uma conversa pode começar por uma ideia</p>
  <h1>Sobre & contato<span class="display-accent">.</span></h1>
</header>

<section class="contact-content" aria-labelledby="about-title">
  <div class="contact-copy">
    <h2 id="about-title">Um pouco sobre mim.</h2>
    {% if site.data.profile.short_bio != "" %}
    <p>{{ site.data.profile.short_bio | escape }}</p>
    {% else %}
    <p>Sou {{ site.data.profile.role | downcase }} e gosto de explorar a engenharia por trás de software, dados e sistemas distribuídos. Fora desse universo, também me interessam carros e hardware.</p>
    {% endif %}
  </div>
  <div class="contact-details">
    <p class="contact-label">Encontre-me também</p>
    <ul class="social-links">
      {% if site.data.profile.github_url != "" %}<li><a href="{{ site.data.profile.github_url | escape }}" rel="me noopener" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.77 3.3 2.11.1-.72.39-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.66 10.66 0 0 1 5.57 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3.01 0 4.29-2.6 5.23-5.09 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg><span>GitHub</span><span class="external-mark" aria-hidden="true">↗</span></a></li>{% endif %}
      {% if site.data.profile.linkedin_url != "" %}<li><a href="{{ site.data.profile.linkedin_url | escape }}" rel="me noopener" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.9H4.98V9.4h2.95v9.5ZM6.46 8.1a1.71 1.71 0 1 1 .02-3.42 1.71 1.71 0 0 1-.02 3.42ZM19.02 18.9h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.8V9.4h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 3 0 3.56 1.97 3.56 4.53v5.2Z"/></svg><span>LinkedIn</span><span class="external-mark" aria-hidden="true">↗</span></a></li>{% endif %}
      {% if site.data.profile.email != "" %}<li><a href="mailto:{{ site.data.profile.email | escape }}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/></svg><span>E-mail</span></a></li>{% endif %}
    </ul>
  </div>
</section>
