---
title: W3C Validator
date: '2022-05-30'
description: Their validator removes fancy code
lastmod: '2022-05-30'
categories:
    - web-dev
tags:
    - From Assignments
    - Programming
---

As always, more work/time/programming was spent on the assignment. This week was majority just coding it (is it really coding as HTML is a markup language? I did do some JS though). Currently, I just have done the basics for it, and only have the basic version of the quiz/products/cart, these mostly were made around using it for the JS component and then trying to do good styling around it with CSS. There is still a lot of pages to do, but they should be a quick task, the contact page is quick as not actually useful (same for fake login/signup), the homepage is probably the hardest as it will have to look good for first impressions. The things to update are, making the quiz look better (and make the questions actually better), add more products (and make individual pages for them - maybe, and make that page look better), make the cart fancier by adding amount of items (and also making look better), I might also make the products stored in a JS object (JSON but not quite) and use JS to populate it (like done with quiz), but I’m not sure how accessible it is for the validator but for SEO (even though it isn’t trying to have good).

The W3C Validator didn’t like my way of having the navbar have a mobile dropdown without JavaScript. The way that it works is when the screen is small enough it shows a toggleable button-like (styled like it) checkbox, then uses CSS query's to show the dropdown when it is selected. However, because it is inside the tags which usually don’t have form elements, it throws a warning. I like the idea of this (not fully my idea though, found it online), but now will have to make the validator happy (I still think it is outdated and doesn’t let new features get used well), the other option I have it to talk to the teacher and ask it I can have that one as an exemption (but I don't think he will agree). (code on [GitHub](https://github.com/Michael-Schoo/Danko))

```html
<body>
  <nav class="navbar">
   <!-- LOGO -->
   <div class="logo">Company Name</div>
   <!-- NAVIGATION MENU -->
   <ul class="nav-links">
    <!-- USING CHECKBOX HACK -->
    <input type="checkbox" id="checkbox_toggle" />
    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
    <!-- NAVIGATION MENUS -->
    <div class=”menu”>...</div>
   </ul>
  </nav>
</body>

<!-- STYLE -->
<style> 
    /*RESPONSIVE NAVBAR MENU STARTS (not all of it) */
    /* CHECKBOX HACK */
    input[type=checkbox]{
        display: none;
    } 
    /*HAMBURGER MENU */
    .hamburger {
        display: none;
        font-size: 24px;
        user-select: none;
    }
    /* APPLYING MEDIA QUERIES */
    /* If screen small remove menu (unless checkbox checked) and show hamburger icon */
    @media (max-width: 768px) {
        .menu { 
            display:none;
            position: absolute;
            background-color:teal;
            right: 0;
            left: 0;
            text-align: center;
            padding: 16px 0;
        }
        input[type=checkbox]:checked ~ .menu{
            display: block;
        }
        .hamburger {
            display: block;
        }
    }
</style>
```

---

I was proud on how well I got the JavaScript component of the page working, in my opinion it is the hardest/most important part of the task to do first. If it is attempted to be don't last, then lots of the HTML probably will be rewritten (unless you are just that good) to accommodate JS selectors. I’m not saying that you need to do JS before HTML, because you can't (you need some level of HTML to start with JS). I found trying to make the page look good frustrating, that is because when I had an idea in my head and tried to do it on the page, I either couldn’t add it because of some prior styles, or spent ages looking at ways to do it. Luckily, most of the time I actually made it look better, this is because when I was going down the tree of CSS I sometimes added things (and that made it look/feel better). The other thing that contributed to the website’s feel was GitHub Copilot (I know that I mentioned it some time ago), it really was just good instead of searching on Google what I wanted, I could just add a comment, and it would give that as an option for me (most times I accepted it). So in some ways my website’s feel was inspired/made by an AI. I couldn’t really help anyone, as only one other person on my class doing web dev, and that person barley started their assignment. However, I did talk to them about the assignment and what I was thinking.

**TL;DR:** _Made website look good, a few annoyances. Need to do the report next week_
