---
title: Probability Basics 
date: '2023-02-27'
description: Fundamental maths theory for randomness.
lastmod: '2023-02-27'
categories:
    - data-science
tags:
    - From Tasks
---

## Overview

Are you still reading my posts? 3 weeks is dedication, and if you are also looking at the web dev, this would be your 5ᵗʰ post that you will endure and learn about my progress (assuming you are reading in order). And since you are so interested, I will tell you that probability was the focus (but you probably already knew that by reading the title). Probability is being used to determine the chance something will occur, and is a good thing to know outside IT.

### What was learnt

To start and help with understanding, we watched some videos about probability and their importance. The first one (importance) was more general and had an example, it was heads and tails and somehow the guy always lost even after changing to do heads (after doing tails for most of the time). The reason for the experiment is not that important, but in case you want to know: “the machine grader is broken, so either you or I need to grade all the [1,000] mini projects this week … and I don’t want to do it so lets do a coin toss” and after the first loss, the weeks went up because it is probably “not going to get fixed so quickly”. Even though this example is basic, it was useful to know that 50% chance doesn’t always mean half of the times it is the first option and vice versa.

The second video about the basics of probability (with python examples). We learned about some terminology relating to probability:

- **Uniformly distributed:** every outcome is equal (ie {1, 2, 3} is a 1/3 chance)
- **Event:** set of outcomes (ie dice roll {1, 4, 6} each with probability 1/6, fr even dice roll: 1/6+1/6+1/6=1/2)

This code is meant to conduct many rolls to show that 10 random times are going to be very random. I have tried to use python 3 syntax (it was python 2), so this isn’t the exact code, but you should get the picture that it is outputting 10 times.

```python

import random

EVEN_EVENT = set([2, 4, 6])

def roll_die(num_sides=6):
 result = random.randrange(0, num_sides) + 1
 return result

def roll_test(num_sides=6, num_rolls=1):
 print(f"Roll six-sided die {num_rolls} times")
 for _ in range(num_rolls):
  roll = roll_die(num_sides)
  print(f"Roll was {roll}")

roll_test(6, 10)
```

There was more code for making a graph of the data, but it was using old libraries (video very old), so I couldn’t get it working and I will just explain what happened. The main takeaway is that “the difference between the mathematical and computed value is actually pretty big, but as we increase the number of trials, it gets closer to 0.” This is important to know for knowing what we expect and how it gets more accurate as time goes on. He also did a bigger among, and the results were similar, just at the end the difference was smaller.

There was a final piece of code that was making a song with random verses. It worked by having a few presets and choosing randomly which to choose from. At the end there was 33m different variations that could occur. I haven't put the code here as it was basic and long (didn’t want to spend to much time writing it). Overall, this was more of a recap then actual content, but it was good at refreshing my knowledge of it.

## Reflection

### What are your next steps?

My next steps are to continue to learn about probability especially how it can be used for more advanced real-life projects. I will try to learn whatever I am give, and hopefully independently. I will make sure that I understand it before going onto the next topic, as it will/should build upon my experiences this week and expand my horizons in this field. But mainly I will continue to absorb the content in class and use it in my assignments.

### Are you happy with your knowledge?

If I am not happy with my knowledge, then I would spend time to work it out, but luckily, I do and will try to revisit it sometime later (a few weeks) to make sure I know what it is was. As mentioned above, it is necessary to understand whether it is for an assignment or general knowledge. I hope that I won’t forget many things with all the new things leant across IT and other subjects, as learning is important and should be done well (+remembered).

### What is most relevant or important?

The most relevant and important thing with probability is math. However, it is not just for probability but also other things in the field of IT which will contain lots of math and require me to understand it. Even with Big O, math was a curial aspect of understanding, and this is no exception. You could say that they are similar and work hand in hand, but that doesn’t mean that it is less required or important.
