---
title: Regex
date: '2022-03-14'
description: How to test if something weather is what you want
lastmod: '2022-03-14'
categories: 
    - web-dev
    - data-science
tags: 
    - From Tasks
---

The last week we (the people that are doing extension work) have learned about Regexes. Regexes are useful for lots of things, from database testing (make sure input is correct), to front end testing (on website form). Even though it is hard to detail the exact uses, they are widely used. Basicity they are how to test a sting for a pattern, if it matches, then you can do something with it. It doesn't have to be a string, that is just what regex is commonly used for. They stand for Regular Expressions, this means using an expression (that is regulated), you can test for a pattern.

We learned about Grep and how it can use regexes to get data from a file. The example below is finding all the words that match the regex `k..d..g.....`. The regex is finding a word that, has `k` in the first char, 2 char (not stated), `d` in 4th char, another 2 wildcard chars, `g` in 7th, and 5 more wildcard chars. When I say first char it isn't really first character, it is just the first part of the matching, so it can be start or middle of the word, as shown below.

```bash
$ grep "k..d..g....." words.txt
    kindergarten
    kindergartener
    kindergartening
    kindergartner
    prekindergarten
    prokindergarten
```

Grep is useful for getting the information, but there tools like Python that can also do regexes. Below shows the way to do the above regex, only difference is that python does it by start (more strict), so the regex is actually `^k..d..g.....`. I spent some more time on python and regexes, and had fun with it, maybe a bit too much... (kept going on tangents like all the tasks before, and coding in general!)

```python
import re
RE = r'k..d..g.....'

with open('words.txt') as words:
 for line in words:
        if re.match(RE, line):
            print(line)

>>> # OUTPUT
kindergarten
kindergartener
kindergartening
kindergartner
<<<
```

I did have some prior knowledge to regex before this task, so I spend some of this week researching extra about them. Furthermore, I managed to find how they got exploited at [Cloudflare][cloudflare-regex], in short someone made a regex [^1] that was very computational heavy and crashed their servers. Because it crashed their servers they couldn’t stop it as the control panel used their servers to authenticate. It only lasted around 30 minutes, a long time for a big percentage of websites to be broken for, but it isn't that long considering other attacks on websites.

<!-- My test to see if looks better with a break between content and reflection -->
---

I believe we are learning this, is because it is useful for databases (data science) and making a website (web dev). I say that because then making servers you want to make sure the imputed data is what you want (eg. testing for secure passwords) and that it isn't going to destroy the servers. Even though I am doing this because I already did the tasks that was meant to be done, I did do a lot of work on it. Though it is an extension task, the reason why I haven't finished it fully. I will plan do it next week or whenever have no other tasks to do. Some of the struggles I had was understanding how to do the work, I already had a good understanding on regex, but I didn't know as much on the Python side, and how to apply it for things not just as simple as a basic check of a string. Some things I need to do whenever I do this next time is (hopefully soon), read more on the given files, and complete those tasks. I also need to learn how to reed the content better, and to those tasks quicker (even though I am doing the extension work because I finished the work earlier than anticipated)

<!-- The references -->
[^1]: The bad regex: ``(?:(?:\"|'|\]|\}|\\|\d|(?:nan|infinity|true|false|null|undefined|symbol|math)|\`|\-|\+)+[)]*;?((?:\s|-|~|!|{}|\|\||\+)*.*(?:.*=.*)))``
<!-- Links -->
[cloudflare-regex]: https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019
