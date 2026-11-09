---
layout: default
title: Blog
permalink: /blog/
description: "Artigos e anotações sobre engenharia de dados, software e sistemas."
---
<header class="page-heading">
  <p class="eyebrow">Ideias em construção</p>
  <h1>Blog<span class="display-accent">.</span></h1>
  <p>Artigos, explicações e anotações sobre software, dados e como sistemas funcionam.</p>
</header>

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <div class="post-summary">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      {% if post.description %}<p>{{ post.description | escape }}</p>{% endif %}
      {% if post.tags.size > 0 %}<ul class="tag-list" aria-label="Tópicos">{% for tag in post.tags %}<li>{{ tag | escape }}</li>{% endfor %}</ul>{% endif %}
    </div>
    <span class="post-language">{{ post.lang | default: site.lang }}</span>
  </li>
  {% endfor %}
</ul>
{% else %}
<div class="empty-state">
  <p class="eyebrow">Primeira página em branco</p>
  <h2>O blog ainda está começando.</h2>
  <p>Quando eu publicar um artigo, ele vai aparecer aqui, com data, idioma e os assuntos abordados.</p>
</div>
{% endif %}
