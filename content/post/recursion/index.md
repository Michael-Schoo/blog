---
title: Recursion
date: '2022-02-28'
description: Including recursion in JK Flip-flips
lastmod: '2022-02-28'
categories: 
    - web-dev
    - data-science 
tags: 
    - From Tasks
---

The last week I was required to do some tasks with Object Oriented Programing [(more in other post)](../object-oriented-programming). While doing it I decided to test my code, on making the JK Flip-flop. But it wasn't working because of a `referenced before assignment` error, a fancy way to mention recursion issues. Having errors is one of a developer's most frustrating/common part, so I was keen to try to fix it.

My original JK Flip-flip using the [image][task-2nd-image-link] theoretically made sense, but I was not able to get it to work. One of the main reasons that it didn't work was because the result of the variable (`t2/b2` in this case) is dependent on itself's result. If you don't know what a JK Flip-flop is, it is similar to the SR Flip-flop (which stands for set-reset) but there is no change in state when the J and K inputs are both low. [[code link][code-link-old]]

```py
# make a JK Flip Flop
class JKFlipFlop(BinaryGate):
    def __init__(self,n):
        super(JKFlipFlop,self).__init__(n)
        self.pinJ = None
        self.pinK = None
        self.pinQ = None
        self.pinQ_ = None

    def getPinJ(self) -> bool:
        if self.pinJ == None:
            return int(input("Enter Pin J input for gate "+self.getLabel()+"-->"))
        else:
            return self.pinJ.getFrom().getOutput()
    # ... (for others)

    def performGateLogic(self) -> tuple[bool, bool]:

        self.j = self.getPinJ()
        self.k = self.getPinK()
        self.q = self.getPinQ()
        self.q_ = self.getPinQ_()

        self.t1 = not (self.j and self.q_)
        self.b1 = not (self.k and self.q )

        self.t2 = not (self.b2 and self.t1)
        self.b2 = not (self.t2 and self.b1)

        #       Q      Q_
        return [self.q, self.q_]
```

Then I fixed it by black boxing it, and making it work. If you don't know what black boxing is, it is effectively using the inputs manually, and setting the outputs manually with the inputs. This isn't recommended as can be confusing and is not that scalable but _"what works, works"_. [[code][code-link-old]]

```py
        self.q = 0
        self.j = self.getPinJ()
        self.k = self.getPinK()
        if (self.j == 1):
            self.q=1
        elif (self.k == 1):
            self.q=0
        elif (self.k == 0):
            self.q=1
        

        #       Q        Q_
        return [self.q, int(not self.q)]
```

But then I found an even better method to fix it, by using a clock. This is only doing the task every clock cycle to prevent recursion, this method works the best for me. I did have to rewrite all of the code, but Google and my brother made it better. [[code][code-link-new]]

```py
clock = 0
flip_flop_data: list[list[bool]] = []

# ... [the other classes]

class JKFlipFlop(LogicGate):
    def __init__(self, parentj: LogicGate, parentk: LogicGate, id: int):
        super().__init__()
        self.parentj = parentj
        self.parentk = parentk
        
        flip_flop_data.insert(id, [False])
        self.id = id

    def set_latch(self, value: bool):
        flip_flop_data[self.id][clock] = value

    def calculate(self) -> bool:
        j = self.parentj.performGateLogic()
        k = self.parentk.performGateLogic()

        prev = flip_flop_data[self.id][clock - 1]

        if prev:
            flip_flop_data[self.id].append(not k)
        else:
            flip_flop_data[self.id].append(j)

        return prev

# A special type to resolve before definement problems
class JKFlipFlopReceiver(LogicGate):
    def __init__(self, id) -> None:
        super().__init__()
        self.id = id
    
    def calculate(self) -> bool:
        return flip_flop_data[self.id][clock - 1]

```

---

The strategies I used to solve this problem were not giving up, trial/error, and research. This was required to get it to work, otherwise I wouldn't have had success to the same level or even at all. I was proud of understanding fixing my recursion problems and how to use the clock to solve it. I found finishing the task was a bit of a challenge, but satisfying, and I'm proud of my final result. I learned that changing the code to your code style is a good thing, as it makes it easier to read and understand, this is one of the ways/reasons that the task was completed.

<!-- Links -->
[task-2nd-image-link]: https://www.allaboutcircuits.com/uploads/articles/completed-JK-flip-flop-sequential-circuit.jpg
[code-link-old]: https://github.com/Michael-Schoo/tasks/blob/d3c3b4ef25ba3c61fc4b1f3e75c3724806bf5719/2%20-%20Python%20Revision%20-%20Object-Oriented%20Programming/Implementation_Model.py
[code-link-new]: https://github.com/Michael-Schoo/tasks/blob/main/2%20-%20Python%20Revision%20-%20Object-Oriented%20Programming/Implementation_Model.py
