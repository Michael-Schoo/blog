---
title: Mostly done website
date: '2023-05-29'
description: The website is nearly finished!
lastmod: '2023-05-29'
categories:
    - web-dev
tags:
    - From Assignments
    - Programming
---

## Overview

Wow, the assignment is nearly due and I am also nearly done. This is good because I won’t have to deal with it very soon but that is also sad for the same reason. Most of the progress done was UI and under the hood code changes (the actual methods haven’t changed). I like how it is currently looking and looking very forward to the future of it finalised. Now that I have done/chosen the design language (from bootstrap), I will be doing the last component of the website and making the design consistent (+ testing/fixing bugs).

### What was completed

Since last week, lots have been done. The main thing that I wanted to do was moving routes to their own file. This was because it got confusing trying to find functions and code when I have to scroll up and down through lots of lines. The method that I used is using Flask Blueprints, they basically allow for routes to be grouped and delt with in the separate file. I currently aren’t using them for their full potential as I am using it as I would with the main `app`. However, this is kind of abusing it because I am not actually using the benefits (which seem to be cool). Another thing that I did was condensing pages, this meant putting more things one page. I previously had different pages to add things to collections, but now I am using popups with forms to do it instead. I think this looks better as I would have to have links but now, I am just using buttons which launch a popup of the same form. But the main thing that I am proud of is simply making the pages look good (looking at bootstrap templates and copying good parts.

There are a few things that I plan to do withing the next week though. I currently have my forms using JavaScript onclick to submit it, but now I will change it back to forms with a post submit action. My main reason for JS button was that it could allow for not having the page reload, but I ended up with reloading to deal with state changes (this made it slower and confusing for a bit - no loading bar for initial JS request). I am also planning to add tags to the collections for better sorting. The tags should also be able to make the homepage better.

## Reflection

### Do you feel like you will have something good to submit?

Currently my website looks good, and as such I believe that by next week the submission will be good quality. I still need to deal with the home page and do the quick fixes. Because my plan is to do what I would expect from a similar site, I am going to make it well so I could feel comfortable using with it in real life. I would want dark mode and some other things but that wouldn’t put me off from using it, so it wasn’t important to deal with.

### How has your plan changed?

My plan hasn’t changed too much from the start. The design of the collection page is fairly similar to that I imagined, and the methods are also very close. I like how things haven’t changed much because it meant that I didn’t waste time. I also want to do the script and planning for the presentation before the assignment is due (we have more time to do the presentation planning after due date) because if needed I can change the website.

### Will you make this useable for the public?

Yes and no, the code will be on GitHub once I finish the assignment, but the website won’t be hosted anywhere. If people really want to use the website, they can run the flask app, but I won't give any support or anything (I might get annoyed if they steal and earn money). I don’t see people actually using this and as a result no point of getting a hosting site (especially as Heroku’s free plan shut down).