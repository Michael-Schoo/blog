---
title: Better UI
date: '2023-05-22'
description: Using Bootstrap to deal with looking good.
lastmod: '2023-05-22'
categories:
    - web-dev
tags:
    - From Assignments
    - Programming
---

## Overview

Wow, another week has progressed. This week in web dev, I have been doing more on my website. Some of this was looking better and fixing the code. Currently, I haven't added any more features because I want to decide on the style first. I also am making an effort to making it assessable via a rest API, which means that I could use JavaScript in the site without having to rewrite code later on. That made me have to change some of the functions, but overall it made better code (with some possible exceptions).

### What was completed

The main thing that I did was to use Bootstrap to deal with the design and let me have to worry about getting and storing the data. I like how people have decided that it looks good and as such, I will use them.

The other aspect I did was making the code cleaner was making an understandable spec for routes. I had some hacky methods of dealing with 2FA (such as a temporary token) but it made a basic POST API complex and instead I made the response of the login when the user has 2FA return a new form with a visible input for key and 2 hidden for email and password (so it is sent at the same time as validation). This had lots of benefits like checking for the token property sent, and if not then I can send a new HTML response. If you use the REST API (by having the headers `accept: application/json`, then you just get an error saying you need to give the code.

I wanted to show the user’s account in the navbar, so I first started by on every response getting the current auth and adding it to the render template params. However, this made the code more messy than necessary, so I made my own template function which gets the user and adds it to the template. This was the first method that seemed to work well, and I like it currently (I may find a better way later… but this works).

```python
# Template.py (a file the routes import)
from flask import render_template
from jinja2 import Template
import typing as t

from tools.jwt_token import get_auth_user

def render_user_template(
    template_name_or_list: str | Template | list[str | Template],
    **context: t.Any,
) -> str:
    """Render a template by name with the given context.

    :param template_name_or_list: The name of the template to render. If
        a list is given, the first name to exist will be rendered.
    :param context: The variables to make available in the template.
    """
    logged_in_user = get_auth_user()
    if logged_in_user: logged_in_user = logged_in_user.to_dict()
    else: logged_in_user = None

    return render_template(template_name_or_list, logged_in_user=logged_in_user, **context)
```

```html
<!-- User in base.html -->
{% if logged_in_user %}
  <div class="dropdown text-end">
      <a href="#" class="d-block text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img src="{{ logged_in_user.gravatar }}" alt="icon" class="rounded-circle" width="32"
              height="32">
          <lol class="align-middle">@{{ logged_in_user.username }}</lol>
      </a>
      <ul class="dropdown-menu text-small" style="">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="{{url_for('profile')}}">Profile</a></li>
          <li>
              <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="/logout">Sign out</a></li>
      </ul>
  </div>
{% else %}
```

## Reflection

### Which issues/ problems do you see/ find?

A big issue that I can see is that I am using one file for all the routes. This isn’t much oof an issue right now, but when I get more routes, it will get complex fast. I liked how it worked and I just needed to add features, but now I need to consider improving that. Another issue is that I am using a library for UI, this gives me less control in that aspect, but it shouldn’t be much of an issue as they have basically everything you would ever need. Finally, I might have multiple things that need to be added in lots of pages, and my hacky `render_user_template` may not work anymore.

### When are you going to actually implement the assignment?

Now that I have a design, I can easily make the rest which includes the actual point of the assignment. I should be able to make the collections as I have the user working and the tables made (haven't tested though). I should only need to add a few pages to add this. However, if I want to add more things such as comments, I will have to do more things (like for comments I can use JS with fetch or use the same as login and use submit/reload). Overall, I feel confident with this and will try and have a working website by next week.

### Is it still fun to work on this?

Currently, it is still fun to work with because I am playing round with some things, but it might get frustrating as complexity increases. I like assignments where I have lots of control on aspects, in this assignment I can’t choose the framework for making it (Flask), but I can choose how I design things and what the topic of the site is. I am hopeful that I will be happy with the end and will want to use it myself (if it was an actual website).
