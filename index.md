layout: default.liquid
---
## Announcements!

{% for post in collections.posts.pages %}
#### {{post.title}}

[{{ post.title }}]({{ post.permalink }})
{% endfor %}

## Meetups

[2018 July]({{ site.base_url }}/events/2018-07)

[2018 June]({{ site.base_url }}/events/2018-06)
