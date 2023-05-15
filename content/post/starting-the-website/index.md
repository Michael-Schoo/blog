---
title: Starting the website
date: '2023-05-15'
description: Doing the basics of Flask and other “important” things…
lastmod: '2023-05-15'
categories:
    - web-dev
tags:
    - From Assignments
    - Programming
---

## Overview

This last week was very interesting… I finished some more of my assignments (not IT) and I started my web dev assignment. I mostly chosen the topic and also done the initial framework of Flask. This included very important things like login and *even more* important things like 2fa. I still need to deal with looks and stuff like that, but I have done some on the database, and just need to implement it.  Overall, I would say that has been a good week.

### What was completed

I started off with creating the database in SQL but later realised that I can use [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/) as the database and use its SQL table generator. I like this method as I can use [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/) to allow for easy updating, instead of remembering what I changed and then doing the update (more painful). The user’s table I started, I first decided what I need and then tried to make it. I needed an ID, an email, and a password in a hashed format (for better privacy). I then decided that QR code 2FA was simple to implement and as such I did it probably way to early on.

For dealing with passwords, I used a package called [Werkzeug.Security](https://werkzeug.palletsprojects.com/en/2.3.x/utils/#module-werkzeug.security). This basically stored the password hash with the salt so that a basic dictionary attack won't give the password to a potential hacker. They will instead have to brute force each salt to get the password, the salt is randomly made for each password. This isn’t a perfect sulution, but is way better than plaintext storage.

```python
class User(db.Model):
    """
    User model
    """
    id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    password_hash = Column(String(128))
    email = Column(String(120), unique=True, nullable=False)
    qr_2fa_secret = Column(String(16), nullable=True)

    def __repr__(self):
        return f'<User {self.username}>'
    
    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
        }
 
  def set_password(self, password):
    # imported from werkzeug.security
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str):
    # imported from werkzeug.security
        return check_password_hash(self.password_hash, password)
```

The way that the 2FA (at least the one with authenticator app) works is by you provide a string and then the app generated a number. You then ask the user for that code and generate the code yourself and verify that it is the same. My first implementation I added it next to the username and password prompt, but that will change when I make better UI (I will make it a step after successful username and password). I made 2FA not required and only validate if provided, this was because my teacher said that it is a cool gimmick, but doesn’t actually want to deal with it. I agree with this, but if I was to make this site real, I would make it actually legit (or remove the feature).

```python
# in the login route
if (user.qr_2fa_secret is not None):
  # not enforce 2fa, but check if provided
  if 'code' in request.form and request.form['code'] != '':
      # Check if 2fa token is valid
      token = request.form['code']
   # imported from pyotp
      totp = pyotp.TOTP(user.qr_2fa_secret)
      if not totp.verify(token):
          return jsonify(error="Invalid 2fa token"), 401

# in the setup 2fa route
secret = random_base32()
totp = TOTP(secret)
qr_url = totp.provisioning_uri(user.email, issuer_name="Flask 2fa")
# qr_url was then used to render template
```

I then decided that I need a way to store that the user is signed in and to which account. There are many ways to implement this, and the one I chose is [JSON Web Tokens](https://jwt.io/) (JWT for short). It is a very simple concept, data stored inside JSON and then a verified signature to prove that it is authentically made by your server. This means that you provide a string (your secret) and then your user’s ID to be stored inside JSON. I also added an expiry date so that the token is only valid for a short time. For actually storing this token, I chose to use cookies as it is sent with every request that the browser makes (the assignment says local storage, but the teacher said I can use cookies).

```python
# add to cookies (in the login route)
resp = make_response(redirect('/user'))
set_auth_cookie(resp, create_token(user))
return resp

# jtw_token.py
def set_auth_cookie(resp: Response, token):
    """
    Set a cookie with the JWT token
    """
    resp.set_cookie('token', token, max_age=Config.JWT_AGE, secure=True)
    return resp

def create_token(user: User):
    """
    Create a JWT token
    """
    payload = {
        "sub": user.id,
        "iat": datetime.utcnow(),
        "exp": datetime.utcnow() + Config.JWT_AGE
    }
    token = jwt.encode(payload, Config.SECRET_KEY, algorithm="HS256")
    return token

def verify_token(token):
    """
    Verify a JWT token
    """
    try:
        payload = jwt.decode(token, Config.SECRET_KEY, algorithms=["HS256"])
       
        if payload["exp"] < datetime.utcnow().timestamp():
            return None
        
        return payload

    except jwt.InvalidTokenError:
        return None
```

My theme currently is a website where a user can create a collection of items (currently movies/books/songs), and then make a description of it. This could work like a reviews website where someone can say my top 10 movies and then say why. I will have it so other users can comment on it like asking why or added perspective. I then can on the item’s website show which collections it is a part of. Currently, I am going to not let user’s upload custom items but let them use a suggestion form to add if someone wants it (this fixes the issue of incorrect information). To start with, I will probably use a similar thing to my [last assignment](https://github.com/Michael-Schoo/Simple-Database-Design/blob/main/populate_db/random_songs.py), and use a popular information site and get the top songs/movies/books because I need data to start with.

## Reflection

### How do you about this assignment now that you started it?

Now that I have started and done some work on the assignment, I feel better about it. I have a feel of what needs to be done and a method of doing it (adding more pages to the Flask app). The presentation still feels daunting, but just like the other things, I hope it will make sense and feel good later (at least before it is due). I just need to keep the enthusiasm and finish it quickly to work on the data science assignment and the presentation.

### What was your reasons for what you did first?

I chose to do what interested me first. I knew that I had to start with a Flask app, but I wanted to do the password hashing first. I saw it as a quick thing, but I wanted to see how it can be done (note: I did try many methods before choosing). Earlier when I was thinking about the assignment, I thought of 2FA, but I haven’t started it yet. So, when I did start, I wanted to implement it even if it wasn’t very useful yet. I have more time for these gimmicky things now, compared to later when the assignment is due (but I can't forget that I need something first).

### What was the most annoying thing?

There wasn’t that many things that were annoying. The main thing that frustrated me was trying to find a template that used modern features. Most of the ones I found used old versions of packages which cause random errors to occur. The template that I used was [create-flask-app](https://github.com/drizzleco/create-flask-app) as it made the boiler plate code, it was basic which was good. The main reason I wanted it was to try and implement the features before creating the structure. I will eventually modify it lots or start again but it really helped. There wasn’t much else that was annoying as it mostly worked fine.
