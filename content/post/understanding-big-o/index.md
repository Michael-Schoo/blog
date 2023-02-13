---
title: Getting to know Big O
slug: understanding-big-o
date: '2023-02-13'
description: But I am still confused by it…
lastmod: '2023-02-13'
categories:
    - data-science
tags:
    - From Tasks
---

## Overview

Another year has commenced, I am now in year 12 and is starting to learn about some other things now. The main thing that I have tried to understand is Big O, it seemed simple at the start, but got confusing really quick. I also had to learn about some other mathematical concepts like logs (the lecture was using it as an example, but I couldn’t understand it). Overall, learning about this is a multi-week adventure, so get used to seeing posts about it.

### What was learnt

As mentioned above, I have tried to learn about the concept of Big O. We had to watch a series of videos which tried to explain different aspects of Big O. I only really got through one, this was about “orders of growth” and was trying to show how different methods have a longer/shorter **running times** depending on the formula used. The table below shows the running times of 4 popular ways, and how many times it will take to go through every entry.

| *n*       | `Log(n)`  | `n` | `n^2`  | `2^n`        |
| ---     | ---       | --- | ---    | ---          |
| **2**   | 1         | 2   | 4      | 4            |
| **16**  | 4         | 16  | 256    | 65,536       |
| **256** | 8         | 256 | 65,536 | 1.1579x10^77 | 

**N (going through every item)**

This goes through every item and prints it, and is why the amount of `n` is equal to running time:

```python
arr = [1, 2, 3,...]
for i in arr:
 print(i)
```

**N^2 (double the time)**

This goes through every item and prints it and does that again, and is why the amount of `n*n` is equal to running time:

```python
arr = [1, 2, 3,...]
for i in arr:
 print(i)
for i in arr:
 print(i)
```

**2^N (double the time)**

This goes through every element twice (double for loop) and is slow.

```python
arr = [1, 2, 3,...]
for a in arr:
 for b in arr:
  print(a+b)
```

**Log(n)**

I am still confused by how this works and will try to understand logs better.

## Reflection

### Did you put your best effort forward?

While I could say that I did a lot of effort trying to understand Big O and how it shows the number of iterations something has to do. I should say that it was more of a weekend thing, I spend the week just trying to do minimal amount of work, but at the weekend I realised that I have to write this (the blog post) and there has to be something in it. This upcoming week I will try to use more in class time to continue to watch the remaining videos and read the content.

### How did you try to understand even when confused?

It is not that surprising that I got confused on sections of this task, but the ways that I have tried to fill in the gaps are important. Firstly, I went to look at some other opinions, these were Google results and [YouTube videos](https://youtu.be/g2o22C3CRfU), they helped significantly but there were some things that still didn’t make sense. An example of this was logs, while I still don’t fully understand them, I have a way better knowledge than before. To do this, I asked my sibling that has done this before and understands math. At the same time Big O was explained and most of my questions were answered.

### What have you learnt about yourself from this task?

From this task, I learnt that I should try and take the time to understand something more deeply, rather than trying to rush through it and not understand a concept. With Big O, I had to take a lot of time to understand the concept and the formula, but in the end it was worth it, and I am able to now try and look at the next topic related to Big O. Additionally, I learnt that I should ask people more questions when I am stuck and even try to use the internet to my advantage by looking at opinions and watching videos on the subject.
