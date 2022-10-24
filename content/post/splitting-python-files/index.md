---
title: Splitting up Python files 
date: '2022-10-24'
description: Making the code modular because more efficient
lastmod: '2022-10-24'
categories: 
    - data-science 
tags: 
    - From Assignments
    - Programming
---

## Overview

Apparently, it is time for a recap of the last week. Not that much was done, however some progress was made in the assignment of using big data. Having it for 2 weeks has now let me to think about how the best way to do the task, it is pretty simple just needing to find data and then writing some code to make a report about. That being said, I haven’t made much progress with it, the main thing that I accomplished was creating a layout for the code.

### What was completed

The layout of the code was about splitting up functions that do different things into their respective file so that it is quicker when changing one thing. This is especially useful when dealing with ‘big data’ (or a large amount that is still big for a computer). Currently I have made a data shrinking (map reduce) and another one to clean the smaller data, there will be one that is for the visualization making also. They pass the data through csv files, it starts with the biggest one being the main dataset (100mb), this is reduced to a smaller size and exported to another file which is used by the next function (this will happen many times). The main reason for this is because there is no way to pass that size of data between files, and if I were to make only one file (with all the functions) then changing a simple thing would take a long time to compute.

Because I had the multiple files, I wanted to have a central type. However, this was a challenge as I had made each function a folder, so I had to find a way to access a child folder and a file inside it. I imagined that to be easy, but it needed Google to find an answer that is not optimal because depending on how the file is run it works but not. But it basically works by messing with the python import parser to think it is somewhere that it isn’t.

```python
# append the path of the parent directory
sys.path.append("..")
from Types.Dataset import Dataset
```

## Reflection

### What can you do now to navigate the road ahead with the most success?

Self-explanatory, but to have the most success in the future I have to quickly get a hypothesis for the data, and then create 3 visualizations to address it (and then make a report using all the data). Without doing this I won't even be able to complete the assignment, and that is not very successful. The thing that is currently the most useful to do is find big data especially one that has many aspects that can make the many visualisations.

### What were you most proud of?

Simply thinking of a structure to use to utilize data in meaningful ways made me proud of myself. It does seem basic and was basically only thing that I did in the week, but it did fill good knowing that once I get data, I have one thing less to do. It is also useful for looking at what is needed in a csv that I eventually download, as I need it to have many columns or have many files instead. The reason for this for the many aspects needed to show to prove a hypothesis.

### Which issues/ problems do you see/ find?

I can see spending too much time doing things that are unnecessary (making the code nice and modular) that no time is there to the important things (completing the assignment’s instructions). It makes it hard to not do it because I know that it being useful for the assignment, but I also need to complete all little things that make up the bigger group of everything. So, I just need to pivot what I am doing to be useful at the end of the day.
