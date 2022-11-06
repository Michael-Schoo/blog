---
title: Random Data
date: '2022-11-07'
description: Getting different types of data for a database  
lastmod: '2022-11-07'
categories: 
    - web-dev 
tags: 
    - From Assignments
    - Programming
---

## Overview

As you may already know that the school year is wrapping up soon, I will not talk about it here. Instead, I will talk about my web dev assignment and how I have completed it. The things that I have done for the SQL assignment was getting some data to pre-add to the database, I also made some example scenarios that could occur, and how to write the SQL query's for getting/changing/removing things.

### What was completed

For the data that was needed to be added by default, I decided to add songs and books. For songs/music I found a site called [Genius](http://genius.com/) that had lots of data about songs and used its API to get some random songs to add to the database. The method of getting the songs was basic, I just chose a random number and tried to see if Genuis had a song with that ID. Getting some random books wasn’t as easy, I found an [API](https://bookstore.docs.apiary.io/#reference/books/databooks/get) that claimed to give random books, however the endpoint timed out every time I tried to access. After some digging, I found an endpoint that did actually work (and I used it). The only issue is that some of the books aren’t in English, and I don’t know many of the books listed.

For creating some fake scenarios, I just made up some names and made-up things that they may do. For the [first example](https://github.com/Michael-Schoo/Simple-Database-Design/blob/main/example_queries/example1.md), I made up a person that created an account and made a collection that was shared to a friend who made a comment on that collection. This was useful to show how to set some things in the database, but also fetch them when needed. I made some others, but they weren’t as interesting as they just played with one character.

## Reflection

### What was the best part of the week?

In my opinion, the best thing that I did for the web dev assignment was making the examples. While they didn’t take that long to create, I tried to make an interesting plot of events that many people could do. Getting the data was more frustrating because there was lots of trial and error involved, especially when I finally found a website that does something but find out that it no longer operates. Overall, I would say that I preferred web dev over data science in terms of which one was more fun.

### What’s the purpose of this?

The purpose of this assignment was to complement a website that was made in a previous assignment. However, for some reasons it didn’t happen and that made the assignment a bit more confusing. The intention of the assignment was to learn how to make a database, and I think I have fulfilled that requirement. I just have to do the little things of finishing (i.e. example queries and default data).

### Did you give your best effort on this?

I gave my best effort in the time limits I self-imposed. If I did more before the weekend (like was said in the data science post). In the few days that I did do the assignment, I have made lots of progress, the main issue that I had was it being not detailed on requirements. Once I made the tables and added some data, I wasn’t sure what to do, so I made some queries (was asked, but i did more by making scenarios). Currently I think I need to comment on everything possible, but I would say that I did put lots of effort towards the assignments (this one and the whole year)
