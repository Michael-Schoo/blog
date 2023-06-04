---
title: Genetic algorithm and a Game
date: '2023-06-05'
description: It is a very simple and effective way to make a game ‘smarter’.
lastmod: '2023-06-05'
categories:
    - data-science
tags:
    - From Assignments
    - Programming
---

## Overview

This should be the last post for a while (technically 2nd on homepage) and that is because my assignment is due today (when blog is published). As a result, I will share my progress and how I feel about the presentation (note that that can be worked on after the main due date). The game is simple because all it is doing is simulating battles (with random) and ‘learning’ by whoever has the best stat. This gets repeated many times until a winner is decided. Because of how my application works, lots of time has to be spent to test things.

### What was completed

I didn’t like my method of getting the best player, so I made a class which would have a dictionary (with a tuple as key) and store the outcome of all the fights. This worked like a log and just needed to iterate over all the data to find the best player (whichever had the highest remaining health - more on that later). There was only one problem and that was memory ballooning and slowness from the fact of storing millions of fights and having to go over them very other. To solve this, I made it simplify the data (get averages and best) at the end of all the days and this worked better as there wasn’t too much data stored anymore. It also had the benefits of a central place of data stored.

Once I added the simplification of data, I wondered if I could make use of it in a graph. So, I exported the data as CSV and plotted the average and best. Even though it was expected, I enjoyed seeing that the average health went down but the best went high (after the many iterations of learning). The iterations of leaning have also been improved; I am now having a progressively smaller rage each iteration to single out the best. This was beneficial because it has more contesting with the better stat instead of still having the large random option. It is also kind of needed to be classified as a genetic algorithm (needs to learn each evolution). I chose to use remaining health because it showed who was better at fighting, the only downsides are it could be including instant kills (opponent doesn’t even get to fight).

I did like the idea of async (allows for multiple processes happening at the same time), so I made it able to simulate many games at once. I chose to have them independent, and they can run at their own pace. It didn’t have too much speed penalties and was very helpful. I am happy that I have implemented as I can have many simulations happening at a time (to even more choose the best player stats). However, for the most part they produced very similar result, but I am still going to use it as it is helpful 9and can sometimes have way different stats but still same outcome.

Now comes the time where I say what I haven’t done yet… I haven’t done any further probability smarts for choosing what action to do in the fight. I also didn’t implement any extra species with further stat changes. I didn’t do them because of time and added complexity (I wanted a good outcome compared to a broken one with lots of features) but it shouldn’t be too hard to implement (as I designed to code to be as easy to change as possible).

## Reflection

### How did you this assignment help you learn?

This assignment helped me to learn confirming my knowledge on things (especially things from old assignments). With all the data, I could use my experience of dealing with data (even big data helped). Some of my ideas of how to solve problems came from how I solved those problems earlier (for example not keeping all the data and only graphing the mean). I also learned to be more creative, even though my web dev was pretty design and creative focused, this assignment allowed me to be creative and make up rules of a game (even though it was heavily inspired by an older assignment).

### With more time, how would you further improve the game?

With more time, lots of things could have been done and as a result further improve the game. For starters, I could have done the fancy features (smarter choosing and different species) and possibly made the game more user friendly (like make a GUI). I know that the assignment is meant to for machine learning, but I feel like it can only be good at learning with a good game to learn from. Just like web dev, I am happy with the end product, but I have a few things that I wish improved/did also.

### Looking back at the last few weeks, how would you rate yourself?

Well, I would rate myself pretty well because the outcome is good in my eyes. I liked how I implemented the basic features as a proof pf concept and slowly added more functionality. I will make sure to continue doing that, but I will also consider starting earlier (like web dev) because time was a large factor involving the features available at the end. I think this was because there wasn’t an easy goal of what to achieve, so in the future I will try to fix that. I know that it isn’t as impressive as what others are doing, but I felt that it was fun and a good use of time (and ultimately I enjoyed it). Overall, I went well mostly but I have some recommendations for next time.
