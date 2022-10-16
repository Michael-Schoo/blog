---
title: Using SQL 
date: '2022-10-17'
description: Actually using SQL for a real life scenario
lastmod: '2022-10-17'
categories: 
    - web-dev 
tags: 
    - From Assignments
    - Programming
---

## Overview

The week back after holidays in web dev was more eventful then data science (kind of assuming you are reading it first). To recap the week it went as the following, I came back to school (exiting…) then I did some classes until the first period of IT, we then got the assignment but then I remembered that I forgot to do the SQL homework (so I did it while looking the what had to be done for assignment). Within now and then, I have continued to try to do the basics of the assignment (which you can look at below), and there is still lots of things that I have to do in the meantime.

### What was completed

The assignment by the sounds of it is good, nice and simple to understand but has some advanced thinking required. Basically, we are to pretend that we are making the backend SQL (database) for a person who is trying to make a collection website. This means we have to make the tables, example data, and example query's (that would be used through the app). No HTML or front end coding is required.

To start I did a rough ER diagram to get an idea on what tables I will have (collections/users/reviews/etc…). I kind of paused doing that to go straight into creating a start on the layout of my project. I made SQL statements to create those tables, I then filled that with basic information, and then did a basic select all. Below is an example of my table creation, it makes the table Users and will have other tables linked to it. The other file is running the SQL in python, this is so that I can use GitHub Actions to make sure I didn’t break something (and it also is a quick way to refresh all tables when developing).

*SQL (creating a table)*

```sql
-- Destroy the Users table if it exists (we want to reset everything)
DROP TABLE IF EXISTS Users;

-- Create the Users table
CREATE TABLE Users
(   ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    Email TEXT NOT NULL,
    AvatarURL TEXT
);
```

*Python (running the SQL)*

```python
# Open database
import sqlite3
con = sqlite3.connect("../data.db")

list = [
    "Users.sql",
]

# go through each file and execute the SQL
for file in list:
    print("file: "+file)
    
  # open the file and execute it
    with open("../create_tables/"+file, 'r') as f:
          con.executescript(f.read())

# Close database
con.commit()
con.close()
```

With this code I learned more about SQL and how it operates, but also some more Python knowledge (even though it isn’t meant to be used for this assignment).

## Reflection

### Which activities helped you learn the most?

As you would expect, the things (tasks) given out in class actually are helping with this assignment. From the basic intro to SQL, to the more complex relational databases, they all play their part with knowing how to complete the assignment. It is good to have a teacher that does give out things to do that will directly help with assignments (even into the future), because otherwise I would be having to work it out myself with many more issues then now.

### Did you understand the content?

The activities did help me to understand the content (even though it is basic on the surface). Even without those activities, I think I would have understood the contend, just not as much and as well. As was said in the previous question, I may have use some research and other means to understand the assignment, but that is never the same as asking the teacher some questions (I did ask a few), after all he is the one who made the assignment.

### What are your next steps?

My next steps for this assignment but also this term is to continue to write the SQL, this includes making all the tables (after making the ER diagram), and finding a topic that will be used for default data (populated into the collection table). Currently I am going to leave my options open for that data by  making the SQL table having lots of properties that many mediums can use (for song/move/book/etc). And the SQL statements that I have to write should be easy once I have made the ER diagram correctly.
