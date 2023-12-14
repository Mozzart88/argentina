---
layout: default
title: Монотрибуто
description: Монотрибуто
---
# Монотрибуто

<ul-x>
  {% assign articles = site.data.pages | where: "title", page.title | first %}
	{% for data in articles.data %}
      <li>
  		<a href="{{ data.link | relative_url }}">{{ data.title }}</a>
      </li>
	{% endfor %}
</ul-x>
