layout: default.liquid
---
## Announcements!

{% for post in collections.posts.pages %}
#### {{post.title}}

[{{ post.title }}]({{ post.permalink }})
{% endfor %}

## Meetups

[2019 January]({{ site.base_url }}/events/2019-01-10.html)

[2018 November]({{ site.base_url }}/events/2018-11-20.html)

[2018 August]({{ site.base_url }}/events/2018-08-09-meetup-3-hack-and-learn.html)

[2018 July]({{ site.base_url }}/events/2018-07-19-meetup-2-how-to-start-hacking-in-rust.html)

[2018 June]({{ site.base_url }}/events/2018-06.html)
