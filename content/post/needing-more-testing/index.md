---
title: Needing to do more testing
date: '2023-05-29'
description: Testing the genetic algorithms and doing changes.
lastmod: '2023-05-29'
categories:
    - data-science
tags:
    - From Assignments
    - Programming
---

## Overview

In web-dev I did more progress (nearly finished), and data science is no exception. I have done some more with my game/algorithm but I need to do more testing to improve it and make it better. I also plan to do lots more operations at the same time (parallel) to allow for it to become smarter as genetic algorithms get better over lots of generations. I also just like looking at the stats where the days decrease and see who wins.

### What was completed

I spend most of the time planning and thinking about the assignment compared to actually doing this. I felt that I needed to think about it because I did do lots and I should try and think about the best way. I have decided to use async again but this time to have parallel games running at once. This also is making me change how I calculate the best player. I will have a separate class for logs which the game launcher makes and passes down to the games. I will have it have a set number of games or use CPU cores to decide how many will run in parallel. There will be games → days → fights. each will be responsible for deciding the best stats. I think that I should stick with the method of who killed everyone the fastest even though they could be making worse fighters as they die fast. Ultimately, they are the winners so they must be good (I could do the average or mean instead if I want to).

## Reflection

### Do you feel like you will have something to submit?

Yes, I feel like I will have something to submit for this assignment. I should have all the issues/improvements done by then and as a result have a good project completed. As long as I have time management, I can’t see how it won’t be possible. Just like the web dev, my goal was making a good outcome withing the boundaries (which means some compromising because of time). Overall, I feel confident with it currently and am hopeful that it will continue wven with the added pressure of time.

### How has your plan changed?

My plan has changed quite significantly, I originally wanted to do something that was useful, but ended up choosing something that is more fun. I find more motivation with things that I enjoy which is why it is no surprise that I shifted my focus onto this. Even though it isn’t as useful as my original idea, I do feel happier and more confident with making the project. I saw too many ways of text summarization and couldn’t think of how to do it in my own way.

### Will you make this playable for the public?

I will put this on GitHub when I am finished and happy with the code, but I am not sure whether I will upload the game stat data (where the best player is decided). This means that it is kind of playable for the public because they have to download the code and will have to run it them self. It isn’t just a website that can be accessed for the purposes of playing the game (making a server seems a bit useless right now).