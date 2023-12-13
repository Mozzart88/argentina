---
layout: "default"
title: "Guides"
description: "Обо всем по рядку и подробно"
---
# Guides

<ul is="expanding-list">
  {% for page in site.data.pages %}
    <li>
    {% if page.data %}
      {{ page.title }}
    	<ul>
        {% for data in page.data %}
          <li><a href="{{ data.link | relative_url }}">{{ data.title }}</a></li>
        {% endfor %}
        </ul>
	{% else %}
      <a href="{{ page.link | relative_url }}">{{ page.title }}</a>
	{% endif %}

  </li>
  {% endfor %}
</ul>
