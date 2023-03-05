---
title: How good are MVCs? 
date: '2023-03-06'
description: Are they the best server architecture? Or is there a better one?
lastmod: '2023-03-06'
categories:
    - web-dev
tags:
    - From Tasks
---

## Overview

Have you noticed that it is now another month (March)? Well, if you say that you didn’t then you must live under a rock, so get out from the rock and continue reading. Firstly, I want to remind you what was done last week (and month as a whole) as it would help you with understanding this post, and secondly tell you about my discoveries. The learning up until today (in web dev) have been about making a server and learning about the best way to do it (currently in Flask). This is good fundamentals when having to decide on what really makes a good “server architecture” (but more on that later). Next post will be talking about my in-class test thing (essay in 1 hour), and all I know is that I need to complete good research on servers and their architecture.

### What was learnt

I hope that you are now excited about my learning of server architecture and the suggested MVC (that the teacher provided). The main thing that I have realised is that, the method isn’t the main important aspect, but rather what is trying to be done. For example, if you have to handle dynamic data MVC can be very helpful, but if you want the fastest and low latency then some other method would be better. In most cases, it is just a guide that you can change it towards your use case (but there isn’t much to change most of the time).

Another method is [hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model-view-controller), this is similar to the normal [MVC](https://en.wikipedia.org/wiki/Model-view-controller) and is a variation. It tries to remove some of the downsides of the original by adding more flexibility. To make it scale better it allows for multiple controllers per request and it can reuse views between controllers. While it has advantages there are some downsides, these are mainly adding complexity and difficult to debug/ implement. This is why I am currently going to steer away from it until it is necessary, and I have a project that needs that performance boost. Just like all the options (I haven't listed them all), pros and cons contribute to whether it is good for your use case.

---

**The mega blog** (Flask tutorial)

You may have missed my update every week, of my new understanding of Flask and its new tools. Without further to do, I read about [user logins](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-v-user-logins) and [making them a profile page](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-vi-profile-page-and-avatars). This was once again reading and doing, but this doesn’t mean it is bad, just making sure you know what I did. After leaving you on such a cliffhanger from last time, I want to make sure you know how to actually do the queries.

To start the login page the passwords were hashed and the [flask-login](https://pypi.org/project/Flask-Login) library got used to simplify things. The code below first checks if logging in is necessary (already logged in), then it sends the form, and then does some checks with the form’s response. It checks if the username is correct and then checks the password (otherwise an error is shown), but if the user was correct cookies are set and they get redirected to the homepage.

```python
# *app/routes.py:* Login view function logic
from flask_login import current_user, login_user
from app.models import User

# ...

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    form = LoginForm()

    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()

        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))

        login_user(user, remember=form.remember_me.data)
        return redirect(url_for('index'))

    return render_template('login.html', title='Sign In', form=form)
```

The user may after some time want to sign out, so we need to make it easy. The best method is making use of the flask-login library and use its logout functionality when the user goes to the `/logout` page.

```python
# *app/routes.py:* Logout view function

# ...
from flask_login import logout_user

# ...

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))
```

The library also has a decorator to make a rout require an authenticated session, and otherwise send a 401 unauthorized error. While you could check manually, it is easiest to just make use of premade functions.

```python
# *app/routes.py:* @login\_required decorator
from flask_login import login_required

@app.route('/')
@app.route('/index')
@login_required
def index():
    # ...
```

To make them a profile, we can just use the templating (learned some weeks ago). This is going to be repeated as it is very useful, and should be learned (and understood). The main difference is that its route is allowing for some change (ie not static).

```python
# *app/routes.py:* User profile view function
@app.route('/user/<username>')
@login_required
def user(username):
    user = User.query.filter_by(username=username).first_or_404()
    posts = [
        {'author': user, 'body': 'Test post #1'},
        {'author': user, 'body': 'Test post #2'}
    ]
    return render_template('user.html', user=user, posts=posts)
```

## Reflection

### Why do you believe we’re studying this?

I believe that I am studying this is so that we can make up our own decision on what is a good server architecture and understand the benefits and issues with each. This will mean that for future assignments, we can use the method that was researched because we now know lots more about it than before. That doesn’t mean that I have to still stick with my choice (I may find a really good architecture sometime). The other reason is primary because of the exam, and that I want something to be able to write about. If I don't to the work now, then I will have to either make up things or quick search in test.

### Do you understand the content?

Yes, I understand the content and find it mostly understandable. Because I knew quite a bit from before (some weeks ago), the learning was more about enhancing opposed to starting from scratch which is always good. I found it hard to decide on which server architecture was the “best” so I tried to find the best for most times, but still thought they were all good. So, I just kept the normal one that I understood and could write about it (maybe not if my life depended on it).

### Why did you still do the Flask tutorial?

While I could have ignored the tutorial, and things could have been easier, it was still good to not fall behind on the series. This is important because before next term, I should be close to completing it so that my assignment can use the knowledge (if it was delayed, my holidays would have to do it). I also did it to still update you on the progress, which should be a weekly thing for you (why else are you reading?). But a huge part is that I interested by it and each chapter gives me some new things to think about.
