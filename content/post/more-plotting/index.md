---
title: More plotting
date: '2022-05-16'
description: Some more Matplotlib - even more customization 
lastmod: '2022-05-16'
categories: 
    - data-science
tags: 
    - From Tasks
---
This week hasn’t been that much more different to last week. There weren’t really any tasks posted, and the only one posted was simple. However, that one was showing us about customizing the limits and other important UI changes (more useful compared to [last time](../matplotlib-is-useful)). Well *apparently,* will get our next assignment today (when post published), this means that all the study of this prior to now, is very important. But since the teacher couldn’t possibly teach everything about Matplotlib, there will have to be some independent research done also.

Let's get back to the week’s task (no point talking about something that hasn’t officially come out). Once again there were some mini tasks that required doing, I think I completed it simply [[image][4.1-image] [code][4.1-code] - below]. I know that I didn't make it a 1 to 1 replica, but I think the required image was produced, and that's what's important (tbh I think all the teacher cares about is us understanding how to make graph look good). There was also another mini task, but I didn't make it that close to the reference image, because 1) not bothered enough, and 2) it was made in a way older version and lots of things have changed.

```python
import numpy as np
import matplotlib.pyplot as plt

plt.style.use('classic')

t = np.linspace(0, 2 * np.pi, 150)
x1, y1 = np.cos(t), np.sin(t)
x2, y2 = 2 * x1, 2 * y1

colors = ['darkred', 'darkgreen']

# Try to plot the two circles, scale the axes as shown and add a legend
# Hint: it's easiest to combine `ax.axis(...)` and `ax.margins(...)` to scale the axes

fig, ax = plt.subplots(1, 1)
ax.plot(x1, y1, color=colors[0], label='Inner', linewidth=5)
ax.plot(x2, y2, color=colors[1], label='Outer', linewidth=5)
ax.axis('equal')
ax.margins(0.1)
ax.legend()
plt.show()
```

---

The things that I did well was completing the task(s) set, they weren’t hard just brain power needed to fully think about how to make the given image using starter code. To be fair (and honest) I used [GitHub Copilot][githubcopilot-link] to do the majority of the work, this probably worked because a) guessed what to make based on the inputs but more likely b) because it was trained on code from GitHub it just used someone’s solutions. However, the results from the AI were never 100% correct and I had to fix the code to make the reference image. I do believe that this is being taught (still the same as weeks ago) is, so we know the best way to show the data, and ultimately for our assignment, make it the best. If the basics of everything is taught, then the assignment will not be that hard and be possibly fun, on the basis that the assignment is just about doing stuff with data. Trying to find things to write here is hard when not much was done... I should change my perspective on tasks in IT, my current thinking is that it isn’t that important to do (other than needing something to do in blog), but I should change it to like it is an assignment.

**TL;DR** *Did work, and leaned how to do more functional customization. Will get assignment within the next week...*

<!-- Links -->
[4.1-image]: https://github.com/matplotlib/AnatomyOfMatplotlib/blob/master/images/exercise_4-1.png
[4.1-code]: https://github.com/Michael-Schoo/tasks/blob/main/matplotlib/part4.py#L65-L86
[githubcopilot-link]: https://copilot.github.com/
