---
layout: default
title: Início
permalink: /
description: "Interesses em engenharia de dados, software, sistemas distribuídos, nuvem, carros e hardware."
---
<section class="home-intro" aria-labelledby="intro-title">
  <p class="eyebrow">{{ site.data.profile.location }} <span aria-hidden="true">/</span> {{ site.data.profile.role }}</p>
  <h1 id="intro-title">Buenas, sou o {{ site.data.profile.name }}.<br><span class="display-accent">Data, data everywhere.</span></h1>
  <div class="intro-copy">
    {% if site.data.profile.short_bio != "" %}
    <p>{{ site.data.profile.short_bio | escape }}</p>
    {% else %}
    <p>Data Engineer na Zup e Itaú. 5+ anos de experiência em dados, anteriormente como pesquisador acadêmico trabalhando com Bioinformática. Grande foco em desenvolver plataformas de dados em sistemas distribuídos, entregas de alto volume para empresas de gás, motores de recomendação, e sistemas de cobrança e utilização.</p>
    {% endif %}
    <p class="intro-links"><a class="text-link" href="{{ '/blog/' | relative_url }}">Leia o blog <span aria-hidden="true">↗</span></a><a class="text-link" href="{{ '/contact/' | relative_url }}">Entre em contato <span aria-hidden="true">↗</span></a></p>
  </div>
  <div class="intro-index" aria-hidden="true"><span>01</span><span>curiosidade em prática</span></div>
</section>

<section class="interest-section" aria-label="Interesses">
  <ul class="interest-list">
    <li><span class="interest-number">01</span><div><h2>Software & dados</h2><p>Engenharia de dados, modelagem e as decisões que tornam sistemas úteis e confiáveis.</p></div><span class="interest-mark" aria-hidden="true">↗</span></li>
    <li><span class="interest-number">02</span><div><h2>Sistemas distribuídos</h2><p>Concorrência, processamento em escala e os limites que aparecem quando as partes se encontram.</p></div><span class="interest-mark" aria-hidden="true">↗</span></li>
    <li><span class="interest-number">03</span><div><h2>Infraestrutura de nuvem</h2><p>As camadas que colocam software em operação, da infraestrutura à observabilidade.</p></div><span class="interest-mark" aria-hidden="true">↗</span></li>
    <li><span class="interest-number">04</span><div><h2>Carros & hardware</h2><p>Máquinas, componentes e a engenharia física que dá forma às ideias.</p></div><span class="interest-mark" aria-hidden="true">↗</span></li>
  </ul>
</section>

<section class="latest-section" aria-labelledby="latest-title">
  <div class="section-heading section-heading-inline">
    <div><p class="eyebrow">Notas e investigações</p><h2 id="latest-title">Do blog.</h2></div>
    <a class="text-link" href="{{ '/blog/' | relative_url }}">Todos os artigos <span aria-hidden="true">↗</span></a>
  </div>
  {% if site.posts.size > 0 %}
  <ul class="post-list post-list-compact">
    {% for post in site.posts limit:3 %}
    <li class="post-item">
      <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
      <div class="post-summary"><h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3><p>{{ post.description | default: post.excerpt | strip_html | normalize_whitespace | truncate: 160 }}</p></div>
      <span class="post-language">{{ post.lang | default: site.lang }}</span>
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <p class="empty-note">Ainda não há artigos publicados. Estou preparando espaço para anotações sobre tecnologia, sistemas e outras curiosidades.</p>
  {% endif %}
</section>
