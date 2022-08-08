---
title: jQuery
date: '2022-08-08'
description: A JavaScript framework for websites 
lastmod: '2022-08-08'
categories:
    - web-dev
tags:
    - From Tasks
---

## Overview

Over the last week in web dev, we learned about JS frameworks and learned about the usefulness of jQuery. Like CSS frameworks, JS ones are just trying to make your (as in a dev) like better and easier by providing “shortcut” methods or easier way of doing something. Similarly, jQuery is all of that, it makes things easier and is pretty intuitive (easy to understand). I didn’t do that much else in this class.

### What was learned

Can get data easy:

- `$("#id").text()`: Just put a CSS selector and then can do some things with it (e.g. get its text content)

Can set/change properties simply:

- `$('').css("color","green")` : Changes a CSS property via inputting the property name and its value.
- `$('').text("Hello World!")` : Similar to getting the text, you put the content you want into the function instead of it being blank
- `$('').attr("href", "https://example.com");` : Like the CSS you put the attribute name and its value to change it

Found out some useful CSS like functions:

- `$('').hide()` and `.show()` and `.toggle()` : If you want to hide/show an element you can use this (toggle does the opposite of last done - show → hide → show → etc)
- `$('').slide{up/down/toggle}()` : Similar to hiding, you can make an element slide up or down the page
- `$('').fade{in/out/toggle}()` : And likewise you can fade in or out
- `$('').animate({color: blue, opacity: 0.6}, 1000)` : Put in some CSS like properties, and it will animate that element.

Common events that can be simulated (eg `$('').click()` ) or do something once it occurs (e.g. `$("p").click(() => $(this).hide())` )

| **Mouse Events** | **Keyboard Events** | **Form Events** | **Document/Window Events** |
| --- | --- | --- | --- |
| click | keypress | submit | load |
| dblclick | keydown | change | resize |
| mouseenter | keyup | focus | scroll |
| mouseleave |   | blur | unload |

Overall, jQuery has a lot of functions and helpful things that it offers.

## Reflection

### What made you curious?

The things that made me curious was mainly finding out the many things that jQuery offers. The reason for that is because it is just interesting to know all the features that something can offer. It was also interesting to find out what others thoughts on what feature they liked the most, mostly we seemed to have a similar thinking around what was thought to be good and useful. Curiosity is mainly the reason I do IT in the end of the day, without it doing assignments would be boring and not fun (thus not doing a good job in it)

### How can you show differences and/ or similarities?

I can currently show the differences between jQuery and vanilla JavaScript. For a start the syntax is different for one you use CSS selectors but the other you can with a for loop indexing over the list of elements. The main reason that you don’t need jQuery to so its things is because it is actually written in JS, so you could instead to what you want differently but not need this library. ([for a bigger list click here](https://youmightnotneedjquery.com/))

### What are your next steps?

My next steps on web dev are currently to continue with more web dev things (which currently is more frameworks). This will allow me to make a website that will be useful (as said in an earlier post). When making an actual site I would probably not use jQuery simply because ES6 and JavaScript its-self is plenty good now. That being said I might use it is I feel like what I'm trying to go would be easier with jQuery.
