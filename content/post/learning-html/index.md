---
title: More Learning of HTML
date: '2022-05-02'
description: Adding to my previous knowledge of HTML 
lastmod: '2022-05-02'
categories: 
    - web-dev
tags: 
    - From Tasks
---

In the past few weeks (4 weeks, 2 were school), we have gotten tasks for us to revise our HTML knowledge. This break (aka holidays!) was good because it meant I didn't have to do any work (should have on reflection). I have also gotten some HTML knowledge back from years ago, and now will expand on them.

Because I kind of didn’t really care about how the website looked, I made it address the criteria but look bad. The criteria was that it had to have a) each type of heading, b) some paragraphs, c) CSS - inline and external, d) links - external and internal, e) form - containing elements, f) an image, g) a navbar, h) a table. These are the abbreviated list of requirements - but you get the picture (I hope). However, I have implemented more than necessary - I added JS (JavaScript), which we are not needed to know until next term.

While making the site, I got bored and my teacher (jokingly) said to add the bee movie, and of-cause I add it using JS and a txt file. This was probably the most interesting part of making the task, because I already knew HTML from previous years. The code shown below is very simple, it has the `p` tags for the scroll, and the script to iterate over the list every `750ms`. [[Code](https://github.com/Michael-Schoo/tasks/tree/main/BasicWebsite) | [Live version](https://michael-schoo.github.io/tasks/BasicWebsite/)]

```html
<!DOCTYPE html>
<html lang="en">

    <head><!-- ... --></head>

    <body style="background-color: black;">
        <div id="script" style="">
            <p id="before" style="padding-left: 10px; color: yellow;">_</p>
            <p id="before2"style="padding-left: 10px; color: yellow">_</p>
            <strong><p id="current" style="padding-left: 10px; background-color: yellow; color: black;">_</p></strong>
        </div>
        <script defer async type="module">
           let resp = await fetch("./gistfile1.txt")
           let text =  await resp.text()
           console.log(text);
           const arr = text.toString().replace(/\r\n/g, '\n').split('\n');
           let i = 0
           var elementB = await document.getElementById("before")
           var elementB2 = await document.getElementById("before2")
           var elementC = await document.getElementById("current")
           
           let interv = setInterval( ()=>{
                   elementB.textContent = arr[i-2] || "‎";
                   elementB2.textContent = arr[i-1] || "‎";
                   elementC.textContent = arr[i] || "‎";
                   i++
                   if (i >= arr.length) clearInterval(interv)
               }, 750);
 
        </script>
    </body>
</html>
```

With more effort and determination, I could probably have made a better website. Wait, that's next week’s task, because I would want to start fresh with making an actually good website... (*ssh* wait for that)

---

I haven't learned anything per se, I have only revised my knowledge (and maybe learned some things along the way). I say this because most of the searching was getting templates/examples (because I'm too lazy to actually remember how to do each html thing). As said above, I certainly haven't done my best effort, this can be improved though. It can be done better with a better task but ultimately, it's my fault, I can't blame it on the teacher or the task, I have to accept that it is boring and do the task (like possibly office setting). I am proud of my JavaScript bee movie script; it was simple but fun while being challenging at the same time. For me to improve I should ask my peers for some ideas, and them implement them (but with other assignments, I'm not bothered to do this much). I helped some people that were struggling (or just temporally forgot) how to do HTML, this was beneficial to them and me because it made me think about what things are available to use.

**TL;DR:** *Started new term, and doing more work. Learned more about HTML.*
