---
title: Linear Regression
slug: linear-regression-basic
date: '2023-03-27'
description: Using the line of best fit to predict values.
lastmod: '2023-02-27'
categories:
    - data-science
tags:
    - From Tasks
---

## Overview

A week, another week… Lots of weeks have passed since I started posting every week this term (and even more if you count last year). I hope you enjoy it because I like to write them to make me consolidate my progress of learning into one place, one where you can enjoy it (even AIs… this would probably make them produce worse outputs if trained on me). I finished last week’s Tick-Tack-Toe and started on a new statistics thing good for predicting values. I will let you guess that is called, and how it can be used to benefit many use cases (ie, guess something in the future).

### What was learnt

As you could have guessed, the thing for predicting values is [linear regression](https://en.wikipedia.org/wiki/Linear_regression) (reading the title of the post gave it away, didn’t it). I first learned about this in Maths, but because I did the lower down version, all I learned is how to get the calculator to do it for me. But last week, I have found out the formula and how it can be used to make a line (line of best fit) and then predict with varying certainty the value. The certainty can also be predicted by looking at how close the points are close the line (closer = higher accuracy). An important thing to remember is that this is only for linier data, this means that if the trend line isn’t a solid line another formula may be needed (but we weren’t taught about this - if ever).

I did do some things to finish the tick-tack-toe, but there isn’t much to say (that I haven’t said already). All there is to know is that it goes through all possible outcomes to predict the best cause of action in order to win. This included blocking the opponent and trying to get 3 in a row for itself.

The formula is basic, and when used in linear regression analysis to estimate the value of a dependent variable based on the value of an independent variable. Here, `Y` is the dependent variable, `C` is a constant, `B` is the slope of the regression line, and `X` is the independent variable. The formula can be used to predict future values of `Y` based on changes in `X`.

```python
Y = C + BX
```

Typically for linier regression it has a similar formula. It still has the same meaning for `x` and `h` just uses theta instead of `c` and `b`. There was also "Cost Function and Gradient Descent” but that is for next week to talk about.

```python
h = θ₀ + θ₁X
```

## Reflection

### Do you understand the purpose of this?

The obvious purpose of learning about linear regression especially in class is because the teacher knows best. But more importantly it is giving us skills to tackle the next assignment. The next assignment is very likely to need to use this, and otherwise it is just good to know nonetheless. It is also school; this means that the whole purpose is to equip us in life for challenges. This specific case is very minor, but you never know how necessary or important it is until you need it.

### What is most relevant or important?

The most relevant thing is math. This is true for lots of things with algorithms and even IT in general, without math things wouldn’t work very nicely. Even though the theoretical side is confusing, I am trying to understand it so that I will be able to use it. I still have some time to fully understand the math as it is very important. The other important aspect is statistics, while it is to a degree math, it is more about the data than then the actual formula (and this is about that to an extent).

### Is machine learning and algorithms becoming less confusing?

I would like to say that I fully understand everything that was done each week and this linear regression formula. However, this would be lying as certain things still confuse me. But things are becoming less confusing slowly, I sometimes look back on the older work and with a fresh set of eyes I understand it better. The thing learned this week has significantly helped me, some of the issues that I was having have been made clearer one I worked out most of the linear regression.
