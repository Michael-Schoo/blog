---
title: Changing Code
date: '2022-03-07'
description: When I change given code, but it wasn't recommended
lastmod: '2022-03-07'
categories: 
    - data-science 
    - web-dev
tags: 
    - From Tasks
---

In the past week I've changed the given code to something different but similar. The code I was changing was from [OO Programming (post)](../object-oriented-programming). Even though I have already done it in the week prior, only in the last week it was submitted, but my teacher didn't like that I changed it, so I showed him the changes. This luckily worked and he told me what I should do when/if I do it again. He said that I need to clearly state the changes but also if can be avoided don't change.

The code below was the original way it was meant to work. This way (the `Connector()`) was meant to combat [recursion](../recursion) but I didn't understand the way it worked well.

```py
   power = Power("Power")
   switch = Switch("Switch")

   and1 = AndGate("and1")
   and2 = AndGate("and2")
   and3 = AndGate("and3")
   not1 = NotGate("not1")
   not2 = NotGate("not1")

   jk1 = JKFlipFlop("jk1")
   jk2 = JKFlipFlop("jk2")

   # The power connecting to the switch (top-left)
   a= Connector(power, switch)
   # The top-left `and1` connecting switch and jk2
   b=Connector(switch, and1)
   c=Connector(jk2, and1)
   # The top-right `not1` connecting switch
   d=Connector(switch, not1)
   # The top-right `and1` and `not1` connecting to jk1
   e=Connector(not1, jk1)
   f=Connector(and1, jk1)
   # The bottom-left `and2` connecting switch and jk1
   h=Connector(switch, and2)
   i=Connector(switch, jk1)
   # The `and2` and power connecting to jk2
   j=Connector(and2, jk2)
   k=Connector(power, jk2)
   # The `not2` and power connecting to jk1
   l=Connector(not2, jk1)
   # The right `and3` connecting from jk1 and jk2
   m=Connector(and3, not2)
   n=Connector(and3, jk2)

    # USE BY:
    and3.performGateLogic()
    print(and3.getOutput())

```

So since I decided that was to confusing for me, I changed it to this way. This way makes more sense to me, and I can understand it better. But the only issue is I had to make new functions for the flip-flop to get around the recursion. Some of the changes are in the classes though, but the code below shows an overview of the changes.

```py
    switch = SWITCH(AlwaysON(), True)
    ffaand = ANDGate(switch, JKFlipFlopReceiver(1))
    ffa = JKFlipFlop(ffaand, NOTGate(switch), 0)
    ffa.set_latch(False)

    ffband = ANDGate(switch, NOTGate(JKFlipFlopReceiver(0)))
    ffb = JKFlipFlop(ffband, AlwaysON(), 1)
    ffb.set_latch(False)

    yand = ANDGate(NOTGate(ffa), ffb)

    y = PRINTER(yand)

     # USE BY:
     print(y.execute())
```

To prevent issues and implement what my teacher said, I've added the following to the top of document.

```py
"""
Changes to the original code:
 * Removed connectors and replaced them with passing the inputs into the class instead (implicit connection)
 * Changed some of the wording of functions - separated some `performGateLogic()` into `calculate()`
 * ... (more)
"""
```

I have now learnt that changing code that was given is not the best idea. I will try to not change much fundamental things, but if I have changed anything, something will be said at the top of the document. I found that by changing the code to something I understood better, the original code actually made more sense then before. That means that from now on, if I have issues with code i can change it to something understandable to understand, but then change it back to the original code.

<!-- Links -->
[code-link]: https://github.com/Michael-Schoo/tasks/blob/main/2%20-%20Python%20Revision%20-%20Object-Oriented%20Programming/Implementation_Model.py
