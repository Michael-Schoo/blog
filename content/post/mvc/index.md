---
title: MVCs
date: '2023-02-13'
description: How you can use Model, View, and Controller to design a website.
lastmod: '2023-02-13'
categories:
    - web-dev
tags:
    - From Tasks
---

## Overview

I would hope that you read my blogs in order, but just incase that you think that web dev is better (you would be correct) then this is my first post of the year 2023 and also year 12. This meant that I am doing some different things in IT compared to last year, primarily it will be flask and full stack programing (backend + front end). Hopefully flask will be nice and easy to use.

### What was learnt

This past week was more about reading than doing, but that being said, I did try to understand the things provided. I only looked through the [first page](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) of the multi part flask tutorial blog by a developer. This post was about the MVCs which is what lots of websites are made up of.

**Model:** The modal is data and storage of user things. This is commonly called a database because it is storing collections of things that are used for a website.

**View:** The view is what people can see and interact with. It is the HTML and CSS, but also JavaScript because if they interact with the page, the JS is used. This is also used to show information from the model using controller.

**Controller:** The web server that uses HTTP. In this case flask would be the controller, and it responds to every request which is usually the website. It also uses the model to help populate the response.

I am sure that this is one of the many ways of thinking about the web stack (the different things that are making up that website)., but this works and makes sense.

We also started to learn [Flask](https://flask.palletsprojects.com/en/2.2.x/) and how it is used to build the controller for a website. The blog post started with installing everything (mainly python) and luckily, I had already done that, so I could skip that step. But quickly it went on to making a “hello world” application.

```python
# *app/__init__.py*: Flask application instance
from flask import Flask

app = Flask(__name__)

from app import routes
```

```python
# *app/routes.py*: Home page route
from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"
```

```python
# *microblog.py*: Main application module
from app import app
```

```python
# The layout
microblog/
  venv/
  app/
    __init__.py
    routes.py
  microblog.py
```

The code above is creating the flask application, and then defining what to do once there is a request. In this case it will respond with “Hello, World!”. This is a good way to understand the basics without getting to in-depth too quickly.

## Reflection

### What were the biggest challenges you faced?

The biggest and most obvious challenge is learning something new. I have done lots with Python so you might assume that it should be easy, and this tutorial is useless. and you would be somewhat correct, having that knowledge to quickly understand the code helped a lot, but learning about the new concept (MVC) and still a new library required some more thinking. These things haven’t been too much of an issue because I currently understand it now, but hopefully this tutorial will be interesting and fun.

### What did you do differently than you would have done before?

Lots of things I have done differently than I would have previously thought. A main thing is leaving to the last minute to do the class content and blog post, I know that this is mentioned in the data science post, but I would have liked it to start the year better off. Some better things are that I quickly understood the core concept and how Flask operated, I may have before just looked at it and when the assignment is out, try to understand what is happening.  

### Did you learn anything useful?

Yes, I learnt a lot from this tutorial. I learnt about the different components that make up a website, such as the Model, View, and Controller. I also learnt about the different parts of a flask application and how it receives requests and responds to them. I also learnt the importance of planning and trying to learn new concepts quickly. It would be very naive to say that nothing useful was learnt after spending some time on this (especially after finding out how useful it is to know).
