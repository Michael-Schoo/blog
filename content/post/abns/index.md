---
title: ABNs
date: '2022-10-31'
description: Getting information about businesses in Australia
lastmod: '2022-10-31'
categories:
    - data-science
tags:
    - From Assignments
    - Programming
---

## Overview

You really want an update on my progress in the last week with my data science assignment. Well, I’ll give it to you then. Firstly, I have now chosen my dataset (more below), secondly, I have downloaded it and played around with the data (10gb), and finally, thought about the topic for my assignment. After I do the thinking for a hypothesis, I can possibly get more data to be able to support the hypothesis in the 3 graphs. Once I do the graph making, I can write about everything (1,000 words), but that is for next week’s me to talk about.  

### What was completed

I was looking at what data the Australian government had on offer, some more interesting than others, but then I came across [bulk extract of ABNs](https://data.gov.au/dataset/ds-dga-5bd7fcab-e315-42cb-8daf-50b7efc2027e/details). This was interesting because it was going to have a lot of data (more then 1m), but it also had many attributes that I can utilize for creating my report (which is about big data). I came up with many hypotheses, some require more extra data then others:

- The more businesses in one location, the more money earned from GST
- The older the location (using averages of business founded date), the average population’s age is also higher
- The businesses in a location is correlated with amount of residents

Since the dataset doesn’t provide much information about each business, I am currently thinking of using their location (as it is provided) to combine with other data (which will be way smaller) and get some outputs. It shouldn’t be too hard to actually make the graph, once analysed the data to reduce it in size and once deciding on my hypotheses.

## Reflection

### What are some of the complexities you should consider?

I need to consider the complexity of trying to utilise so much data, as 10gb is not a small amount. This should be simple as they are broken up into twenty 500mb xml files. The XML files are another complexity as it isn’t that standard to use, the common file extensions are CSV and sometimes JSON, but rarely XML. Maybe the Government is still old fashioned and uses it because not bothered to upgrade. But the file size is my main worry because I am going to have to reduce those millions of entries into a way smaller amount.

### How can you prove to the teacher/ yourself/ others that you know the objective?

I can prove to by teacher (and everyone else) that I know how to complete the required things by completing the assignment. This could possibly even be going above and beyond, but that is going to be in the coding half of rubric, the other part (report) is going to be not as interesting. I can also prove it by submitting a good draft, however it is getting a bit too late for that (at the time of writing), as I need to have done all the code and chosen a hypothesis to then write about.

### What did you learn this week?

I did learn some things in the week, I learnt that taking things in small steps yield a good return. Not trying to analyse all the data, but a small segment of it made my like easier because it meant that I could try one method quicker than trying it on all the files. And once I think that it was finally good, I will change it a bit to do the thing for all the files. I also learnt that files that big only specialised apps want to open, I tried opening the XML and exported JSON into Chrome and VS Code, but they both crashed or refused to open (so I had to download an app that can open that file).
