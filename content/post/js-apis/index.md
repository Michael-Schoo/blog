---
title: Some JavaScript APIs
date: '2022-05-16'
description: How you can modify a page using JS 
lastmod: '2022-05-16'
categories: 
    - web-dev
tags: 
    - From Tasks
---

Another week has occurred, and this week has been even more uneventful (more than last week, and that was quite), the only thing I did was complete the JS task, by actually making the site that used JS APIs to modify its contents... As said in the other [post](../more-plotting) from today, we are getting a new assignment (I mean when this would be published the assignment is prob also published), and this one apparently is just going to be making a basic website with HTML/CSS/JS to look good (need to not tell everything otherwise next week’s post will be empty).

The APIs that are notable are the ones that can modify pages (only because it can be funny). But the website that was made [[link][JSExamples-link] [code][JSExamples-code]] was made with like no effort, this is shown by how it looks ugly, and how the code it just what the [pages][W3Schools-JS] we copied from had it. Below shows what happens when there are lots of the same ID’s and therefore, I had to increment the name, so it didn’t clash with other parts. However, the below code one of the things that is cool, because it can be used to copy and paste simply and easily. Just need to keep WCAG in mind, because otherwise screen readers or devices without JS could have a broken page, and we don't want that.

```html
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>

<script>
    const para2 = document.createElement("p");
    const node2 = document.createTextNode("This is new.");
    para2.appendChild(node2);

    const element3 = document.getElementById("div1");
    element3.appendChild(para2);
</script>
```

---

As stated above, more JS was learned, this was pretty basic and simple for me (I know for some others, it could be confusing), I also hope that the assignment is just as simple. Fundamentally I didn’t really learn anything because I already knew what could be done, and then searched up how to do it. I also didn’t put my best effort into this (what would that include? making an actually good website that incorporates every API), I could improve but that requires motivation, and I didn’t have that currently. But I will try to improve that and do my other assignments earlier (also why I didn't do as much in prior weeks). However, I did find trying to make a good website showcasing the various things frustrating (so much that I gave up trying to do it), that is because there were lots of example to do, and just trying to make a good UI is hard. As with everything this can be improved with practice, and effort (once again - I really must need that next week). The purpose of this task is very clear, it is to learn about the many techniques available, it was excellent at doing that. I think it helped the other student more than me though.

**TL;DR** *Did work, and leaned how to interact with the DOM. Next week assignment...*

<!-- Links -->
[JSExamples-link]: https://Michael-Schoo.github.io/tasks/BasicWebsite/JSExamples
[JSExamples-code]: https://github.com/Michael-Schoo/tasks/blob/main/BasicWebsite/JSExamples.html
[W3Schools-JS]: https://www.w3schools.com/js/js_htmldom.asp
