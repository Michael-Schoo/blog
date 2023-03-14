---
title: Architecture for websites
date: '2023-03-06'
description: Are they needed create websites? Or are they just recommended?
lastmod: '2023-03-14'
categories:
    - web-dev
tags:
    - From Assignments
    - In-class
---

## Overview

Last week I left you on a cliffhanger of wanting to know about my in-class test. Well, basically in the test, we got given a prompt and were meant to respond to it. Then once we decided how much we agreed or disagreed with the prompt, we started to write a semi large essay (~700 words) to respond to it. I don’t really like these assessment items, but I did them as the curriculum requires written tasks (even this blog is slightly annoying). However, the other things what we are doing in web dev are interesting, for example Flask.

### What was done

The statement for web dev was: “As web servers are their own application, they don't require an operating architecture to create websites.” I decided to say that it is recommended and that you should use an operating architecture, but ultimately the person (developer) can choose whatever meets their needs. I also argued that there are many downsides with a custom method (eg. waste of time and worse end result). I recommended that they use MVC (see last blog for this) to start learning how to design an architecture, but utility it isn't that required, just recommended.

**The mega blog** (Flask tutorial)

As with last week’s blog, I also looked at the Flask tutorials to continue to learn. This time there was [error handling](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vii-error-handling) and making the concept of [followers](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-viii-followers) (which is more database access). The error handling is more new information than followers, but nonetheless it was interesting.

Would you rather to see an error or nothing when trying to access a page? Well, I would say neither, but seeing an error (”internal server error”) and some way to report it to the devs is way better than the page timed out or didn’t respond. Flask by default has some premade error themes, but it is better to customise (and add your branding to it). To customise it, all you have to is use the `errorhandler` decorator and respond like you would with a normal page.

```python
# *app/errors.py:* Custom error handlers

from flask import render_template
from app import app, db

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return render_template('500.html'), 500 
```

And for the template, you can make it anything, it can be as complicated as you like. this example is very simple and makes use of the `url_for` function to go to the homepage. You can also make it send an email to yourself, but that is a bit complex, and I wouldn’t use it.

```html
<!-- *app/templates/404.html*: Not found error template -->
{% extends "base.html" %}

{% block content %}
    <h1>File Not Found</h1>
    <p><a href="{{ url_for('index') }}">Back</a></p>
{% endblock %}
```

Creating the followers is a more fun topic (thinking about errors is a sad topic as you shouldn’t make any). All we need to do is update our database to make another table, and update the users one with a many to many relationship. You also access and use it the same as posts, as such I won't go through it again.

```python
# *app/models.py*: Many-to-many followers relationship
class User(UserMixin, db.Model):
    # ...
    followed = db.relationship(
        'User', secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')
```

## Reflection

### How could you improve for next time?

To improve for the next in class response, I should do some more research and argue a bit better. I had to find things thought the time, and if I had prepared resources and links (with quotes), then more time would be writing compared to Googling. I should have also picked one way and not go between them. With saying that it is recommended rather than required, I am not showing that I fully can decide which is best, even if it is what I believe.

### Do you still believe this stance?

I still believe that having a server architecture to follow will yield lots of benefits. I still think that there is less time spent trying to know what is needed and how to design a good one. Even though I haven’t taken a full side on the matter, I still agree with it. I have also done some more research after the test and I still believe it. With more time in the test, I may have explained it better, but overall I am happy with it.

### How did I help others?

I didn’t really help others much this week. I did talk about it to the other web dev student, but they more focused on HMVC, and I wasn't too interested by it. For data science, I also didn’t talk much (we also had different topics also). I hope that by listening and asking them questions, that I may have helped them slightly, but I am not sure. For the future, I will try to help but also seek help when I am confused.
