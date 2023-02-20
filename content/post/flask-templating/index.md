---
title: Flask Templating
date: '2023-02-20'
description: How to make things similar but different.
lastmod: '2023-02-20'
categories:
    - web-dev
tags:
    - From Tasks
---

## Overview

Do you like the concept of find and replace, if you do then this week's entry may be interesting, otherwise still read because I hope to convince you that it is useful. I mean, templating is slightly more complicated than just find a word (string) and replace it with another word/string, as you can do more complicated things, but more on that later.

### What was learnt

There are many ways to do templating in Flask, an easy way is to make a string and just add data with `+` and other string manipulation methods. This isn’t very versatile and has many drawbacks (the better method later).

```python
# *app/routes.py*: Return complete HTML page from view function
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    return '''
<html>
    <head>
        <title>Home Page - Microblog</title>
    </head>
    <body>
        <h1>Hello, ''' + user['username'] + '''!</h1>
    </body>
</html>'''
```

A better way is to achieve templating is to use the `render_template()` function. This means that you can have a big and complex website that can be modified by using effectively a data dictionary. This also means that you can have syntax highlighting because it is HTML not just a string. Another benefit with this approach is that the files are separated out with the HTML being the front end and the Python file containing the backend fetching and other things to build the website.

```html
<!-- *app/templates/index.html*: Main page template -->
<!doctype html>
<html>
    <head>
        <title>{{ title }} - Microblog</title>
    </head>
    <body>
        <h1>Hello, {{ user.username }}!</h1>
    </body>
</html>
```

```python
# *app/routes.py*: Use render_template() function
from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    return render_template('index.html', title='Home', user=user)
```

There are other things that you can use with the templated HTML file. You can use basic operates, which means that you can check if something exists and change the output accordingly (`if` basically).

```html
<!-- *app/templates/index.html*: Conditional statement in template -->

<!doctype html>
<html>
    <head>
        {% if title %}
        <title>{{ title }} - Microblog</title>
        {% else %}
        <title>Welcome to Microblog!</title>
        {% endif %}
    </head>
    <body>
        <h1>Hello, {{ user.username }}!</h1>
    </body>
</html>
```

Part of the basic operators, you can do a `for` loop, which allows for reptation through similar look but different content. This is very useful if you are trying to show a list of items but don’t want to write them out every time (and use the normal substitution).

```python
# *app/routes.py*: Fake posts in view function 

from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    posts = [
        {
            'author': {'username': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)
```

```html
<!-- app/templates/index.html: for-loop in template -->

<!doctype html>
<html>
    <head>
        {% if title %}
        <title>{{ title }} - Microblog</title>
        {% else %}
        <title>Welcome to Microblog</title>
        {% endif %}
    </head>
    <body>
        <h1>Hi, {{ user.username }}!</h1>
        {% for post in posts %}
        <div><p>{{ post.author.username }} says: <b>{{ post.body }}</b></p></div>
        {% endfor %}
    </body>
</html>
```

Incase you have a common theme throughout your pages, you can make another template that is used on every page. The way to fill in the content is the same as normal, just it doesn’t have to be used on the more specific template.

```html
<!-- *app/templates/base.html*: Base template with navigation bar -->

<!doctype html>
<html>
    <head>
      {% if title %}
      <title>{{ title }} - Microblog</title>
      {% else %}
      <title>Welcome to Microblog</title>
      {% endif %}
    </head>
    <body>
        <div>Microblog: <a href="/index">Home</a></div>
        <hr>
        {% block content %}{% endblock %}
    </body>
</html>
```

## Reflection

## Reflection

### How can you incorporate this to something useful?

A good way to use the new method of templating that was just learned is to simply use it on a test project. As I am going along with the [tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ii-templates), I am doing the things locally with means I can test and change things to help with my understanding of it. I am sure there are many use cases that would benefit with showing data Beautifully. There aren’t many better ways of fetching and displaying data with Flask, and this is one of the best (if not the best) method of doing it.

### What made you curious?

Flask templating is a powerful tool that allows you to create more complex websites by using a data dictionary. I became interested in the things that it can do out of the box because originally, I thought Flask was just a basic HTTP server where basic string manipulation was the only vanilla way of achieving templating. I wonder what else it can do, and I will keep you updated on my journey. of the tutorial and my understanding of it

### What was the most important lesson learned?

The most important lesson learned from this tutorial is that there are many ways to approach things. Especially with Flask, you can use the recommended `render_template()` function as it is the most versatile and powerful way to create complex websites. I have learned that for many things I need to take a break and think of/ find ways of doing a problem, and most of the time I should find a better way. Hopefully, I will find out the many things that can be done with Flask (kind of said that above, but it is important to I am saying it again).
