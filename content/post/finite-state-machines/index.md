---
title: Finite State Machines
date: '2022-02-21'
description: A function that uses states to do different things
lastmod: '2022-02-21'
categories: 
    - data-science 
    - web-dev
tags: 
    - From Tasks
---

This week I have been learning about States including the use in computers. I have been tasked three tasks to do in the week ([automatic door][automatic-door-link], [vending machine][vending-machine-link], [robot][robot-link]), these were simple to imagine but slightly harder to implement. My favorite task was the vending machine task because it was simple but hard with the nature of it. Compared to the door/robot one which doesn’t work with python as easily as it is hard to have changing inputs and waiting time to simulate with.

The task [automatic door][automatic-door-link] was requiring me to make a python program that would accept input (like a remote button) and do different actions on it. An example of this is opening it, it first waits for the button to be pressed, then it checks the state, then it opens in 5 seconds, and making sure censor is not pressed.

```python
# Part of the code for automatic door
door = "closed" 
position = ""
print("Door is", door) 
# repeat forever 
while True: 
    # ask user for input 
    instruction = input("User input: ") 
    # transition to opening state 
    if instruction == "b" and door == "closed": 
        position = "opening" 
    # ... 
    elif instruction == "s" and position == "opening": 
        door = "open" 
    elif instruction == "b" and position == "stopped" and door == "closed":
        position = "opening"
    # ... 
    print("Door is",  position if position != "" else door)

    if position == "closing":
        # wait 5 seconds then transition to closed state
        for i in range(5):
            time.sleep(1)
            instruction = input(f"{'.'*i} ") 
            if instruction == "s" : 
                door = "open" 
                print("Canceled")
                continue
        
        door = "closed"
        position = ""


        door = "open"
        position = ""
``` 

Another task was the [vending machine][vending-machine-link], this simply put was to make a vending machine in python. It was basic but had a few things, one of which was that it had to have money and it had to have a selection of items. I made it have more features when I was making it as it made more sense in my mind, but then I realized I had done the extension task already so thats good.

```python
# Part of the code for vending machine
drinks = [{"id": "water", "name": "Water", "price": 1},{"id": "coke", "name": "Coke", "price": 99.95}]
drinkStock = {"water": "infinite", "coke": 1}
acceptedMoney = [0.10, 0.20, 0.50, 1, 2]
state = "waitsForUserInput"
money = 10
print("Welcome to the vending machine!\n")

while True:
    if state == "waitsForUserInput":
        drinksOption= ", ".join([drink["name"]+" $"+str(drink["price"]) for drink in drinks])
        chosenDrink = input(f"Choose drink ({drinksOption}): ")
        # ...
            chosenDrink = next(drink for drink in drinks if drink["id"]== chosenDrink.lower()) 
                # ...
                print(f"You chose {chosenDrink['name']}")
                state = "waitsForMoney"
                # ...
    elif (state == "waitsForMoney"):
        if moneyGiven > 0:
            print("You gave me $" + str(moneyGiven))
        print("You have $" + str(money))
        moneyGivenInput = input("How much money to spend: ")
        moneyGivenInput = (float(moneyGivenInput))
        # ...
        if moneyGiven+moneyGivenInput == chosenDrink['price']:
            money -= moneyGiven
            state = "givesItem"
            continue
        # ...
    elif state == "givesItem":
        print(f"Here is your {str(chosenDrink['name'])}")
        print("Enjoy...\n")
        state = "waitsForUserInput"
        # ...
        continue
```

The last task was the [robot][robot-link], the idea was to make a robot that followed a line and would do different things depending on the senores. It had the same annoyances as the door task but it was also solvable with some `input()`'s, this would be better solved by having an actual robot but it worked for demonstration.


```python
# Part of the code for robot
lightSensorL = False
lightSensorR = False
bumpSensor = False
switch = True
# ...

while True:
    while switch:
        print(lightSensorL, lightSensorR, bumpSensor)
        if bumpSensor:
            motorA = 100
            motorB = 100
            print((motorA, motorB))
            motorA = 75
            motorB = -75
            time.sleep(1)
            print((motorA, motorB))
        # ...

        match input((motorA, motorB)):
            case "l":
               if (lightSensorL): lightSensorL = False
               else: lightSensorL = True
            case "r":
                if (lightSensorR): lightSensorR = False
                else: lightSensorR = True
            case "b":
                if (bumpSensor): bumpSensor = False
                else: bumpSensor = True
            case "s":
                if (switch): switch = False
                else: switch = True

    if input("") == "s": switch = True
        
```

I was also curious with optimizing the code better with these tasks. I think it would have made them better if they were more efficient. Next week I am going to try more to optimize the code as much as possible.

<!-- Links -->
[automatic-door-link]: https://github.com/Michael-Schoo/tasks/blob/main/4%20-%20Finite%20State%20Machines/4.2%20-%20Automatic%20Door.py
[vending-machine-link]: https://github.com/Michael-Schoo/tasks/blob/main/4%20-%20Finite%20State%20Machines/4.2%20-%20Vending%20Machine.py
[robot-link]: https://github.com/Michael-Schoo/tasks/blob/main/4%20-%20Finite%20State%20Machines/4.2%20-%Robot.py
