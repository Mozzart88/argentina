---
layout: "default"
title: "Guides"
description: "Обо всем по рядку и подробно"
---
# Guides

<ul-x>
  {% for page in site.data.pages %}
    {% unless page.disabled == true %}      
    <li>
      {% if page.data %}
        {{ page.title }}
      	<ul>
          {% for data in page.data %}
  			{% assign el=data %}
      		{% include ul-x.html %}
          {% endfor %}
          </ul>
    	{% else %}
          <a href="{{ page.link | relative_url }}">{{ page.title }}</a>
    	{% endif %}
  </li>
    {% endunless %}
  {% endfor %}
</ul-x>
