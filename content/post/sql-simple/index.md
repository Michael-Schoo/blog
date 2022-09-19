---
title: SQL is simple
date: '2022-09-19'
description: To write a query is self explanatory
lastmod: '2022-09-19'
categories: 
    - web-dev 
tags: 
    - From Tasks
---

## Overview

Hmm you also want to know about what happened in web dev (this is assuming that you red my data science first)? Well, we learned about SQL, it is an acronym for “Structured Query Language”, and it is useful for talking to databases (getting/setting data). Pretend that this post was inside a database, with columns with metadata and the post itself, now if I were to change the date (part of metadata) I would use an SQL statement to change it. That is pretend because I am using `.md` files to store my post and using [Hugo](https://gohugo.io/) with a [theme](https://github.com/CaiJimmy/hugo-theme-stack) to render and show my post, so a database would be over the top. For most people writing SQL queries should not be that big of a learning curve (especially if they have a good understanding of programming)

### What was completed

We started to learn about SQL by finding out some of the most Important SQL Commands that can be used. Some of them are for fetching data, others are for changing previously added data, and some of the others can create new data:

- `SELECT` - extracts data from a database
- `UPDATE` - updates data in a database
- `DELETE` - deletes data from a database
- `INSERT INTO` - inserts new data into a database
- `CREATE DATABASE` - creates a new database
- `ALTER DATABASE` - modifies a database
- `CREATE TABLE` - creates a new table
- `ALTER TABLE` - modifies a table
- `DROP TABLE` - deletes a table
- `CREATE INDEX` - creates an index (search key)
- `DROP INDEX` - deletes an index

These were easy to learn and find out, but knowing the commands is not that useful without knowing how to use them to create a query. As shown below, you can use lots of commands, and just add what you want to get and optionally add a where statement to do if (but there are lots and many more ways that a query can be made).

```sql
SELECT column1, column2 FROM table_name;
-- another example:
SELECT * FROM table_name WHERE column1 = 1
```

## Reflection

### What are some things you did really well?

Some of things that I did well is understanding the basics of SQL. While it sounds simple, it is a important step for working with databases (reading/writing). I currently don’t know all the ways to make a query (including how to do SQL injection), I will aspire to learn to finalise my knowledge. This will be useful especially in terms of web dev where we might make a website that needed to fetch data to show things on the page.

### Which activities helped you learn the most?

The activities that helped me to learn about SQL is the [Grok Course](https://groklearning.com/course/intro-sql-1/). This was especially useful because it had interactive examples and questions that needed my thinking, but wasn’t too hard to complete. It wasn’t required for me to understand all the commands and how to structure a query, as there are lots of demos for SQL (and it just happens that Grok makes it nice). The [w3schools](https://www.w3schools.com/sql/) SQL information page was also useful when just wanting a quick definition for a command.

### What is frustrating you?

There was not that much things that were frustrating me in IT. The only thing what could be annoying is trying to wrap my head around the more complex parts of SQL. That is mainly because I haven’t looked at it that much, but also because it may just be harder in nature, which you would expect with advanced parts. For my other classes, they are frustrating me in terms of their assignments (but I won’t talk about them here).
