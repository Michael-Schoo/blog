---
title: Adding Localisation
slug: Adding-Localisation-flask
date: '2023-03-27'
description: Dates/Times and I18n/L10n.
lastmod: '2023-02-27'
categories:
    - web-dev
tags:
    - From Tasks
---

## Overview

To have more news or to not that is the question… This week I have done many things in web dev, I continued with the big tutorial, random framework research (not going to share) and had fun. As mentioned last week, the things learned are more useful and interesting to me, and the parts that I read were no exception. I am going to be happy but sad when I finish the series because it will open a new chapter of things to do, but that will mean different things (and I like the current method). Luckly for you, Flask will still be the man focus (unless web design is taught), so you will still be able to enjoy it (because why else are you reading it… if not for my new flask knowledge)

### What was learnt

Without further to do, let's look at how to add [dates/times](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xii-dates-and-times) to a website. For some context, dealing with dates ([especially in JavaScript](https://fjolt.com/article/javascript-date-is-weird)) are not very good. There are many ways to store dates, UTC milliseconds, a formatted string, or a custom method. The main issue is dealing with localization, especially if the user is in a different time zone compared to the client. If it is a formatted string, then it is painful with working out the best method to format it, because US dates are different to UK.

In this series, the [flask-moment](https://pypi.org/project/Flask-Moment/) library is used to simplify things. It is basically using the powerful [moment.js](https://momentjs.com/) library but ported to Python and Flask. To use this, you need to initialize it in the `__init__.py` like the other flask libraries.

```python
# *app/__init__.py*: Flask-Moment instance.

# ...
from flask_moment import Moment

app = Flask(__name__)
# ...
moment = Moment(app)
```

You need to include it in the base.html so that its JavaScript code is passed into the user. Otherwise, nothing will happen with the user.

```html
<!-- *app/templates/base.html*: Including moment.js in the base template. -->
...

{% block scripts %}
    {{ super() }}
    {{ moment.include_moment() }}
{% endblock %}
```

Moment.js recommends to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard format for dates and times. This contains all the necessary information (with second precision). It also means that the time sone of the server doesn’t matter ac the client (user) will convert it themself. There are also many ways to convert it, you can basically choose what you want it to show.

```python
# {{ year }}-{{ month }}-{{ day }}T{{ hour }}:{{ minute }}:{{ second }}{{ timezone }}
moment('2021-06-28T21:45:23Z').format('L') # 06/28/2021
moment('2021-06-28T21:45:23Z').format('LL') # June 28, 2021
moment('2021-06-28T21:45:23Z').format('LLL') # June 28, 2021 2:45 PM
moment('2021-06-28T21:45:23Z').format('LLLL') # Monday, June 28, 2021 2:45 PM
moment('2021-06-28T21:45:23Z').format('dddd') # Monday
moment('2021-06-28T21:45:23Z').fromNow() # 7 hours ago
moment('2021-06-28T21:45:23Z').calendar() # Today at 2:45 PM
```

To use the time on a template, you just call it as a function with the date in ISO, and then choose the format you want it in. For example, you may want it to show when the user was last online with second accuracy.

```html
<!-- *app/templates/user.html*: Render timestamp with moment.js. -->    
{% if user.last_seen %}
 <p>Last seen on: {{ moment(user.last_seen).format('LLL') }}</p>
{% endif %}
```

Continuing on with user enhancement, adding localisation in terms of translating the content to many languages can be a nice touch. Using [flask-babel](https://pypi.org/project/flask-babel/2.0.0/), this can be done easily. Like the other library’s you need to also initialize it in your flask file and add your languages to your config file which can be used inside the init file to choose which language to show to the user..

```python
# *app/__init__.py*: Flask-Babel instance.

# ...
from flask_babel import Babel
from flask import request

app = Flask(__name__)
# ...
babel = Babel(app)

@babel.localeselector
def get_locale():
    return request.accept_languages.best_match(app.config['LANGUAGES'])
```

```python
# *config.py*: Supported languages list.

class Config(object):
    # ...
    LANGUAGES = ['en', 'es']
```

Actually using it is a bit more complex. The main concept is that you use the `_` export from `flask_babel` and then in a separate file, you can set the translations. These translations are stored in the [POT](https://support.phrase.com/hc/en-us/articles/6111390193820--POT-Gettext-Template-Files-Strings-) file, but this is a bit confusing for me, and as such I would not be using it on my own project (aside from the fact that I would need to know many languages.

```python
# A file

from flask_babel import _
# ...
flash(_('Your post is now live!'))
```

```html
<!-- A template -->
<h1>{{ _('File Not Found') }}</h1>
```

## Reflection

### How are you going apply this into your own project?

As said above, the translation aspect I will probably not use in my own project. This is from that I would need to actually translate it, but also that it adds complexity that I don’t think is necessary. However, the time formatting I will try and use. My aim is to use it as much as I will need to deal with time, which may be very ofth depending on what my own project will be. Even if I don’t use this, understanding moment.js is helpful for other applications.

### What confused you?

This week I got more confused than normal. This was mainly when trying to understand how the translation thing works. Originally, I thought it was a separate template or something different (not what it is actually). Some other methods that I had seen previously (ie a.py and a-en.py) made me think it was going to be a similar process. When realising that it wasn’t that, I assumed that you have a function with many inputs that dictate the language. Overall, I mostly understand it now, but still won’t use it that much.

### Was this necessary to know?

Knowing this isn’t that important, just good. Some parts were better than others, dealing with the date in any method is necessary, but in a better way (moment.js) is recommended and a good idea. It also depends on your requirements, if you want multilanguage support then you may say it is necessary to know a method. Otherwise it is interesting and nothing much else is thought. I am trying to give everything a fair go and try it even if I will not use it in the future (inc post-school).
