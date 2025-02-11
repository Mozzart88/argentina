---
layout: default
title: AGIP
description: Монотрибуто AGIP
---
# {{ page.description }}

{% assign articles = site.data.pages | where: "title", page.title | first %}
<ul-x>
  {% for article in articles.data %}
    <li>
    {% if article.data %}
      {{ article.title }}
    	<ul>
        {% for data in article.data %}
			{% assign el=data %}
    		{% include ul-x.html %}
        {% endfor %}
        </ul>
	{% else %}
      <a href="{{ article.link | relative_url }}">{{ article.title }}</a>
	{% endif %}

  </li>
  {% endfor %}
</ul-x>
