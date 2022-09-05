---
title: Local Storage
date: '2022-09-05'
description: A easy way to store data in the user’s computer
lastmod: '2022-09-05'
categories:
    - web-dev
tags:
    - From Tasks
---

## Overview

Unlike data science, web dev this week has been more peaceful. We got another task to complete and we kind of talked about our experiences with the exams (ie. providing feedback). The task which you could guess was about local storage, it is a simple way for a developer to store some data in the user’s computer and access at a later point (and is relatively persistent). Having a relaxed week after a not so relaxed week was good, but I don’t think there will be many of them left in the term (as it is week 8 when this is published) - there might be one when school goes back on week 11.

### What was completed

To help learning this we were instructed to follow a [guide](https://thecodingpie.medium.com/how-to-build-a-todo-list-app-with-javascript-and-local-storage-a884f4ea3ec) on making a to-do website where you can add tasks and cross them out with them all staying (so can view them at a later point).  We were also told to change the `document.querySelector('*')` to use jQuery syntax `$('*')`, at first I didn’t do that because I wanted the page to work (and see that before messing around with it). I spend a bit more time trying to make TypeScript in vsCode happy with the syntax as it wants everything to be `'use strict'` and it didn’t like how some things can be nullable (and thus causing errors when using a function).

To grab grab `.todo-form`, `.todo-input`, `.todo-items`:

```jsx
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');

/* JQUERY */
// basically changing `document.querySelector` to `$`
// select the todo-form
const todoForm = $('.todo-form');
// select the input box
const todoInput = $('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = $('.todo-items');
```

I’m not sure if I will actually use jQuery other then when instructed. In some ways it is useful and can do some cool things, but in vanilla JavaScript the same things can be done without needing a 3rd party framework needing to be downloaded and used. The age of jQuery doesn’t help either, while it is used by lots of developers now, many years ago it had a good market share, so lots of the stack overflow could be for outdated problems. So I am not ruling it out, rather probably not going to (I mean kind of the same thing `¯\*(ツ)*/¯`)

## Reflection

### Did you understand the content?

I did understand the contend that we are currently doing in web dev. That is because I had already used local storage when making websites, but doing this task was a good refresher. I think I could have spend more effort when doing this (and not do as much just because I had used it before). I also I could have asked other people what they were doing/ how they did it so that my ideas can be better when doing the next programming assignment.

### How did you help others?

I kind of helped other people to understand the code (and make it use jQuery, even when I didn’t *at that moment*). The task wasn’t that confusing for I don't think anyone, it was more them asking if their code made sense (and most of the time its was). Obviously, there is sill improvement that could occur with me helping, but I don’t want to take the teachers place or be annoying (and make others think I am a know-it-all).

### How can you elaborate more?

There is not that much that I could be elaborating for, but maybe this could include code comments. My friends know that I have the worst code comments (like I don’t do anything, I just do the code). So, I should elaborate in my code better by putting in some explanations in my code and telling the person who is reading (and trying to understand) what is happening and hopefully they to know the code after analysing it. I also wonder if you can “over” code comment, like making a whole essay for one function (luckily for you, I won’t be doing that).
