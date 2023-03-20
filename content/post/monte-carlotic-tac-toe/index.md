---
title: Monte Carlo Tic-Tac-Toe
date: '2023-03-20'
description: Statistical method that uses random sampling to solve problems.
lastmod: '2023-02-20'
categories:
    - data-science
tags:
    - From Tasks
---

## Overview

Did you know that I have done some things in-class this past week? Well, I would hope so, and if you didn’t know then now you do. We took a break with machine learning and went back to algorithms. We are currently studying how an algorithm can outsmart a human, and the process to make it. Next term (or sometime later), machine learning will be the focus, but it is better to understand how to make an algorithm first.

### What was leant

I already knew about [tick-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) which made the first part simple. The more important thing was trying to use an algorithm to go through lots of options (a very nested tree) and conclude which move will statistically be best. It should try to win by getting 3 in a row, but also not let you win first (and block you). We got given some code that wasn’t finished yet (we needed to fix it). The annoying part is that it uses [Python 2](https://www.python.org/download/releases/2.0/), which means that I need to install an older version and also not try to use new features in Python 3. The basics are similar, the print syntax is the main difference for me. The main reason that I can’t just upgrade the code like I sometimes do is that the [library](https://pypi.org/project/SimpleGUITk/) is built for version 2, and I don’t want to fix or find a substitute for it.

The code has many parts, it has the algorithm and the visualization (either console or an app window). The algorithm also mas many parts, the score estimator and actually choosing which place to move. It has the game board and goes many layers deep choosing a random available location and guessing what I (the user) will do next. Hopefully, it will realise that blocking me while also moving into paces where it wins is what it decides. There are [`3^9` or `19,683`](https://www.crows.org/blogpost/1685693/357431/The-Mathematics-of-Tic-Tac-Toe) ways that the board can be filled out.

## Reflection

### Do you understand the content?

Yes, the concept of going over each option and then determining what is best was easy to understand. However, actually applying it is a harder process, trying to battle performance (from the many iterations of options) and quality (good choices) is not easy. But also just making a game is hard in itself (many ways to go about the one method). I am glad that I know what is happening, because otherwise it would be painful for the next weeks.

### What are your next steps?

My next steps should be to apply it and make something similar. This will help me to go further than just understanding, it will mean that I can use it better in another task/time. But more realistically, I am just going to simply understand it and nothing else. This isn’t the best as it is limiting my potential but considering that I understand it and there are other subjects that need my understanding. I will go and see if there is time for this and go accordingly.

### Why do you believe we’re studying this?

As mentioned above, I am studying this because the bases of any machine learning need to be calculating outcomes which used by algorithms (which is similar). I know that my teacher has a process to help us to learn, so I will follow his instructions and learn what we are given (and hopefully extend that). I also know that spending more time with steps are better then everything at one moment (as I will get a bit scared and more confused than spending more time on it).
