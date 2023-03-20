---
title: Making User Friendly Design
date: '2023-03-20'
description: Adding pagination and email support for the users.
lastmod: '2023-02-20'
categories:
    - web-dev
tags:
    - From Tasks
---

## Overview

I wonder if you have realised that another week has passed. If you have, then you should know that I have another post waiting for you to read. In this edition, I will tell you about how to make users happy with your Flask app. These things are simple but provide lots of benefits (especially with people with slower internet). Also, making the design look good with make the user want to continue to read/look (at least a higher chance).

### What was learnt

When trying to make a user-friendly design, [pagination](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-ix-pagination) can be a vital component if there are lots of items in the database. In the mega tutorial where a fancy blog is being created, having only a selection of posts on each page makes many things better. To do this the config was updated to reflect that only three posts are to be shown on each page.

```python
# *config.py*: Posts per page configuration.
class Config(object):
    # ...
    POSTS_PER_PAGE = 3
```

Then that config was used with the followed posts database query. It works by only getting the first x values (defined by the posts by page). With the posts, a template is used to show some posts that you may be interested in (because you follow them). An explore route was also added so you can see other people’s work. There was also a `{{ prev_url }}` and `{{ next_url }}` value that you can use on the template and put arrows.

```python
# *app/routes.py*: Followers association table
@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
@login_required
def index():
    # ...
    page = request.args.get('page', 1, type=int)
    posts = current_user.followed_posts().paginate(
        page=page, per_page=app.config['POSTS_PER_PAGE'], error_out=False)
    return render_template('index.html', title='Home', form=form,
                           posts=posts.items)

@app.route('/explore')
@login_required
def explore():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.order_by(Post.timestamp.desc()).paginate(
        page=page, per_page=app.config['POSTS_PER_PAGE'], error_out=False)
    return render_template("index.html", title='Explore', posts=posts.items)
```

Now that there is some pagination support, another thing that can improve the user experience (UX) is [emailing users](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-x-email-support). This is mainly used for authentication (to verify a user has email/ reset password). To simplify things, the [Flask-Mail](https://pypi.org/project/Flask-Mail/) library was used to deal with the painful aspects so that you can just make the template. To start with it, it needs to be initialised in the `__init__.py` file. This is so that it can function as similar to the normal flask instance.

```python
# *app/__init__.py*: Flask-Mail instance.
# ...
from flask_mail import Mail

app = Flask(__name__)
# ...
mail = Mail(app)
```

2 templates should be made, a standard text and one with html (which looks better). They work very similar to all other templates, the main thing to note is how the `send_email` function accepts both options. The mail client chooses which one it wants to show (usually it will do HTML, but better safe than sorry).

```python
# *app/email.py*: Send password reset email function.

from flask import render_template
from app import app

# ...

def send_password_reset_email(user):
    token = user.get_reset_password_token()
    send_email('[Microblog] Reset Your Password',
               sender=app.config['ADMINS'][0],
               recipients=[user.email],
               text_body=render_template('email/reset_password.txt',
                                         user=user, token=token),
               html_body=render_template('email/reset_password.html',
                                         user=user, token=token))
```

```python
# *app/templates/email/reset_password.txt*: Text for password reset email.
Dear {{ user.username }},

To reset your password click on the following link:

{{ url_for('reset_password', token=token, _external=True) }}

If you have not requested a password reset simply ignore this message.

Sincerely,

The Microblog Team
```

```html
<!-- *app/templates/email/reset_password.html*: HTML for password reset email. -->
<p>Dear {{ user.username }},</p>
<p>
    To reset your password
    <a href="{{ url_for('reset_password', token=token, _external=True) }}">
        click here
    </a>.
</p>
<p>Alternatively, you can paste the following link in your browser's address bar:</p>
<p>{{ url_for('reset_password', token=token, _external=True) }}</p>
<p>If you have not requested a password reset simply ignore this message.</p>
<p>Sincerely,</p>
<p>The Microblog Team</p>
```

The [PyJWT](https://pypi.org/project/PyJWT/) was used to make [JWT](https://jwt.io/)’s easier. These are tokens which mean that you can store data but not need to store each token inside a database. It validates the token by a “secret” (which is also used to encode it. The example below is storing a dictionary, but when actually used it will store the user id and an expiry date. The expiry date is important because if it the user somehow gets it compromised the impact will be minimised (when it doesn’t last as long).

```python
# Terminal
>>> import jwt
>>> token = jwt.encode({'a': 'b'}, 'my-secret', algorithm='HS256')
>>> token
'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhIjoiYiJ9.dvOo58OBDHiuSHD4uW88nfJik_sfUHq1mDi4G0'
>>> jwt.decode(token, 'my-secret', algorithms=['HS256'])
{'a': 'b'}
```

Everyone wants to style a website well, but not everyone can actually make it look good (using pure CSS). So, the [Flask-Bootstrap](https://pypi.org/project/Flask-Bootstrap/) can be used to incorporate [Bootstrap](https://getbootstrap.com/) into the project. To start with it, it also needs to be initialised in the `__init__.py` file. You can look at the many methods of bootstrap, so I won't mention them here. This post was called [facelift](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xi-facelift), and it took me some time to realise that it meant “making it look better”.

```python
# *app/__init__.py*: Flask-Bootstrap instance.
# ...
from flask_bootstrap import Bootstrap

app = Flask(__name__)
# ...
bootstrap = Bootstrap(app)
```

## Reflection

### Do you understand the purpose of this?

Yes, I understand that it is good to make the user experience good so that a potential user can continue to use your website. While it can be hard, many ways have been produced to simplify the process and allow for easy styling a website but also not overloading the user (by using pagination). I understand what will happen if this isn’t done, so it will be one of my main priorities when making my own website.

### Has your knowledge of web design been improved these past weeks?

My knowledge of web design has been improved in the past few weeks. The concepts are good to know, and knowing how to apply it in Flask is useful. The important things learned are the things this week. The other topics were more of a HTML knowledge and just work out how to make Python run it (to an extent his week is also). I am excited to continue to learn the other things, and how to apply this new learning into my own projects.

### Are there any other ways to improve UX?

There are many ways that you can improve user experience (UX). An example is supporting new features, this includes dark mode, ipv6, and web3 (if you like crypto…) etc (but these can be wasteful of time with limited benefit). But there are more important things like accessibility, optimisation for different viewports (ie. phone), and generally easy to use interface. These will give a better time to benefit ratio because it is pyritising more important to nerdy things.
