---
title: Text summarizer
date: '2023-05-15'
description: My initial research into doing this.
lastmod: '2023-05-15'
categories:
    - data-science
tags:
    - From Assignments
    - Programming
---

## Overview

I wonder of you know that it is week 20 right now… Well hopefully you know that I had done some things in week 20 (or week 13 in school). The things that I did was some research into my ML projects that I considered last time. I spent most of my time on text summarizer, but I think that I want to do it more than the other options (ie OCR). Once I know how to summarize, I should be able to make a shortener and/or expander (or maybe the other way around).

### What was completed

When first Googling how to make a text summarizer in Python, I found how to do a dictionary and just getting the key words (most common) and then presenting it to the user. I don’t like this as it isn’t ML and is a bit too easy (so probably not adequate for the assignment). In my further research into a more complex and better method I found that there is extractive and abstractive text summarization. Extractive is just getting notable information form the text, and abstractive is using another dataset to help understand the provided text (this is what ML mainly uses for doing this). There are also [5 techniques for text summarization in Python](https://www.turing.com/kb/5-powerful-text-summarization-techniques-in-python) (note that there is probably more):

1. Gensim - open-source topic and vector space modeling toolkit
2. Sumy - another library that uses various algorithms to perform text summarization
3. NLTK (Natural Language Toolkit)
4. T5 (Google)
5. GPT-3

All of these are using someone else’s work to make it summarize text. Some require more work done by the user. Using GPT-3 almost feels like cheating because all the hard work is done (training it how to actually summarise the text). The more control I have, the more that I can customise its behavior. There will be always some degree of using another person’s work as Python is used (not including the extra libraries that I can use to help - ie TensorFlow). Overall, I have lots more to do, but I feel confident that I can do this.

## Reflection

### Do you like how there is a range of options?

Yes and no, in some ways I like the range, but in others it can be annoying. I like how there are many options that I can choose from, ranging from different aspects I have to do. Like I can have it so that I only need to provide a dataset to train on, to making everything from scratch (very painful). The only thing that is bad is the abundance of choice makes deciding harder. Currently, I am going to do one in between where I have a decent degree on the code.

### What was the best part of research?

The best part of the research is learning about the many methods. I am interested to know everyone’s method, and knowing some of the ways people did it, gives me an idea on what I want to do. Another thing that I like is when I find something unrelated but still is very interesting to learn about. In this case I saw some other ML things and how people made it work (and/or exploited APIs to get an already established AI to do something).

### What are some of the challenges you faced while researching?

Aside from the abundance of choice, nothing specific was a challenge while researching. It was kind of hard finding a good informational website though. I did like how many people have tried to write how they did it. I prefer to learn a method and then do something similar then copy their code and use it as my own. Knowing all the terms was a minor challenge as I can just Google a term if it didn't make sense to me.
