---
title: Combinatorics
date: '2022-03-14'
description: Cracking passwords with enumneration, permutations, and combiners
lastmod: '2022-03-14'
categories: 
    - data-science
    - web-dev
tags: 
    - From Tasks
---

The last week we (the people that are doing extension work) have been tasked to learn about 3 things. Enumeration, finding all possible options for a set. Permutations, basically enumeration but don’t have duplicate possibilities ( `(a,b), (b,a) ⇒ (a,b)`). And Combinations, basically everything mentioned above, but the difference is the order isn’t important/and duplicates are allowed, and can be used to find the amount of options easily.

We learned about those things via videos, but then there was a practical part. The first part was password cracking in Python, using enumeration we made all possible combination of an X length word. Using that function to generate the possible options, another function was used to test the options on the correct password.

When I was playing around with this I my or may not have increased the password length and crashed my computer (even though I have `16gb` of ram). This was kind of annoying as having a blue screen of death is 🥶. Despite this I did it again but instead stopped the program when it used the resources, and also didn't make it do as big of password

The two options of `brute_force` (the code below to crack the password) are generating random strings or using words (as people are bad at making passwords), then it tested the word, the second approach is better in terms of resources needed. There are flours of both approaches, both require lots of computing power, one only works for small passwords, and the other only works if they use only one standard word. [[link][code-link-1]]

```python
def gen_all_passwords(alphabet, length):
  guesses = set([""])
  for idx in range(length):
    temp = set()
    for seq in guesses:
      for letter in alphabet:
        new_seq = seq
        new_seq += letter
        temp.add(new_seq)
    guesses = sorted(temp)
  return guesses

def brute_force(alphabet, password, length):
  for i in range(length+1):
   guesses = gen_all_passwords(alphabet, i)
   for guess in guesses:
     if password == guess:
       return "Password is " + guess

def brute_force2(wordsLoc, password):
    with open(wordsLoc) as words:  # point this to your words file
        for word in words:
            word = word.strip()  # remove trailing newline
            if word == password:
                return "Password is " + word
            # break

alphabet = "abcdefghijklmnopqrstuvwxyz"
words_loc = "../../../Downloads/words.txt"
max_length = 5
password = "cat"
print(brute_force(alphabet, password, max_length))
# print(brute_force2(words_loc, password))
```

Then after finding out how easy it is to crack some ones password is (and after reading an [article][task-1st-read]), we were required to make some basic protectionary measures. I found it quite annoying that so many people had unsecure passwords (to be fair I have done that in the past), and that someone hacked into someone's else [Twitter][task-1st-link-1] account for the fun of it. Luckily they didn't do anything that bad.

The main function (code below) is simulating a computer using the program (or function in this case) to request login, it is assuming that the computer (that is spamming) is nice and waits the time for the next request. This approach isn’t that realistic though, it is on the same file, but for the purpose of demonstration it works. I also haven’t made the cooldown the best yet. [[link][code-link-1.5]]

```python
cooldown = {}
# {1: {lastSent: Date, nextAllowedSent: Date, amountSent: 1}}
password = "" # changed lower anyway

def sendpasswordReq(guess, id):
    if not cooldown.get(id):
        cooldown[id] = {}
        cooldown[id]["lastSent"] = datetime.now()
        cooldown[id]["amountSent"] = 0
        cooldown[id]["nextAllowedSent"] = cooldown[id]["lastSent"] 

    # if not right time yet
    if cooldown[id]["nextAllowedSent"] > datetime.now():
        future_date = (cooldown[id]["nextAllowedSent"])
        past_date = datetime.now()
        difference = (future_date - past_date)
        total_seconds = difference.total_seconds()

        print("Too soon, time left: " + str(total_seconds))
        return total_seconds

    cooldown[id]["amountSent"] += 1
    cooldown[id]["lastSent"] = datetime.now()
    
    global password
    if (password.strip() == str(guess).strip()):
        print(f"Password is {guess}, in {cooldown[id]['amountSent']} attempts"))
        return "Correct"
    else:
        print(colored("Password is not " + guess, 'red'))
        numTries = cooldown[id]["amountSent"]
        secondsRem = numTries/10 
        if numTries == 1 | 2: return 0 # first 2 dont have limit
        if (numTries % 5 == 0): secondsRem = numTries # every 5th make it that number

        print(f"{cooldown[id]['amountSent']}: {secondsRem}")
        cooldown[id]["nextAllowedSent"] = cooldown[id]["lastSent"] + timedelta(seconds= secondsRem)

        return secondsRem

def main():
    with open(words_loc) as words:  # point this to your words file
        wordsList = [word for word in list(words) if word.__len__() == 5]
        print(len(wordsList))
        global password
        print(password)
        password = random.choice(wordsList)
        print(colored("Password is: "+password, "green"))
        while True:
            word = random.choice(wordsList)
            wordsList.pop(wordsList.index(word))

            resp = sendpasswordReq( word.strip() , 1)
            try:
                sleep(resp)
            except Exception as e:
                pass

            if resp == "Correct":
                break
                return True
main()
```

<!-- My test to see if looks better with a break between content and reflection -->
---

I would say I gave my best effort on this task as I started it on Friday and finished it (to an extent) on Sunday, I could have done more but with other assignments that I to do, and the complicatedness of this task I am happy (though I still have heaps to do on this task, but that's for another day). The reason that I started the task a few days ago, was because I had finished the previous tasks, I had the whole last week to do other tasks because there was nothing posted, and then my teacher posted this task, so I started it. I was to do the week differently I would have spent the time without a task to do my other assignments, then I would more time to do this and my other extension [task](../regex) (that one I got earlier though). I wish I could have helped my peers in the class, but I was the only one doing this task, I couldn't help that much, but since I still remembered doing the previous task, I could help to a degree.

<!-- Links -->
[task-1st-read]: https://blog.codinghorror.com/dictionary-attacks-101/
[task-1st-link-1]: blog.wired.com/27bstroke6/2009/01/professed-twitt.html
[code-link-1]: https://github.com/Michael-Schoo/tasks/blob/main/2%20-%20Password/cracking.py
[code-link-1.5]: https://github.com/Michael-Schoo/tasks/blob/main/2%20-%20Password/cracking.py#L56
