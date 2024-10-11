---
sidebar_position: 25
slug: /nested-loops-in-c
title: "Nested Loops"
---

# 22. Nested Loops in C: Handling Complex Iterations with Ease

We've already covered the basics of loops in C—`while`, `do-while`, and `for` loops. If you're unfamiliar with any of these, I’d recommend taking a look at the previous articles on loop types before diving into this one. Now, let's talk about something even more powerful—**nested loops**.

But first, let's think about this in a way we can relate to. Have you ever set up a schedule for a university group project? You might have one main loop: everyone works on their task for a few hours (the outer loop). Inside that, there’s a smaller loop: every 30 minutes, you take a short break (the inner loop). Nested loops work in a similar way—they're like loops inside of other loops, and they're great for solving complex repetitive tasks.

## What’s the Point of Nesting Loops?

Nested loops are helpful in situations where one set of actions needs to repeat multiple times within another set of repeating actions. Imagine grading exam papers. You (the teacher) might go through each student (outer loop) and for each student, you go through each answer (inner loop). That’s a classic use of nested loops—going through multiple layers of repetition.

## Basic Nested Loop Structure

In C, nesting loops is simple. You can put a `while` loop inside another `while` loop, a `for` loop inside a `while` loop, and so on. Here’s a quick table of how loops can be nested:

| Outer Loop | Inner Loop |
| ---------- | ---------- |
| `while`    | `while`    |
| `while`    | `for`      |
| `for`      | `while`    |
| `for`      | `for`      |
| `do-while` | `for`      |
| `do-while` | `while`    |
| `........` | `.....`    |

Each type of loop can interact with the others to handle different tasks. Let’s walk through how this might look in day-to-day life, using some real-world examples.

## Nested Loops in Real Life

Imagine you’re organizing a sports event at your university. There are multiple events happening (outer loop), and each event has several rounds (inner loop). Here’s how that would look using nested loops:

```c
#include <stdio.h>

int main() {
    int events = 3; // Number of sports events
    int rounds = 5; // Number of rounds per event

    for(int event = 1; event <= events; event++) {
        printf("Event %d begins:\n", event);
        for(int round = 1; round <= rounds; round++) {
            printf("  Round %d\n", round);
        }
    }
    return 0;
}
```

In this case, we’re running a loop for each event (`for(int event = 1; event <= events; event++)`) and inside that, we’re running a loop for each round (`for(int round = 1; round <= rounds; round++)`).

### Example 1: Nested `for` Loops

Let’s say you’re a teaching assistant and need to help correct some quiz papers. Each quiz has several questions, and for each question, the student has several attempts. Here’s a nested loop to simulate that:

```c
#include <stdio.h>

int main() {
    int students = 3; // Number of students
    int questions = 4; // Number of questions per quiz

    for(int student = 1; student <= students; student++) {
        printf("Correcting papers for Student %d\n", student);
        for(int question = 1; question <= questions; question++) {
            printf("  Question %d\n", question);
        }
    }
    return 0;
}
```

### Example 2: `while` Loop Inside `for` Loop

Let’s pretend you’re a student on a meal plan. For each day (outer loop), you can eat a certain number of meals (inner loop). Here’s a program to track how many meals you’ve eaten each day:

```c
#include <stdio.h>

int main() {
    int days = 3; // Number of days
    int maxMeals = 2; // Meals allowed per day

    for(int day = 1; day <= days; day++) {
        printf("Day %d:\n", day);
        int meals = 0;
        while(meals < maxMeals) {
            meals++;
            printf("  Meal %d\n", meals);
        }
    }
    return 0;
}
```

### Example 3: `do-while` Loop Inside `for` Loop

Let’s now say you’re managing a tournament. For each round (outer loop), a player gets to keep trying until they win (inner loop). Here’s a nested loop using `do-while`:

```c
#include <stdio.h>

int main() {
    int rounds = 3; // Number of rounds

    for(int round = 1; round <= rounds; round++) {
        int win = 0;
        printf("Round %d begins:\n", round);
        do {
            printf("  Attempting to win...\n");
            win = 1; // For simplicity, we assume the player always wins
        } while(!win);
    }
    return 0;
}
```

### Example 4: The `while` Loop Inside Another `while`

Imagine you’re taking notes during a lecture. Every lecture has multiple slides, and every slide has several bullet points. Here’s how you could represent that:

```c
#include <stdio.h>

int main() {
    int lectures = 2; // Number of lectures
    int maxSlides = 3; // Number of slides per lecture

    int lecture = 1;
    while(lecture <= lectures) {
        printf("Lecture %d begins:\n", lecture);
        int slide = 1;
        while(slide <= maxSlides) {
            printf("  Slide %d\n", slide);
            slide++;
        }
        lecture++;
    }
    return 0;
}
```

### Example 5: `for` Inside `do-while`

Let’s consider you are a runner, and each run consists of several laps. For each lap, you keep track of your speed. Here’s a simple simulation of nested loops:

```c
#include <stdio.h>

int main() {
    int runs = 2; // Number of runs
    int laps = 3; // Laps per run

    int run = 1;
    do {
        printf("Run %d:\n", run);
        for(int lap = 1; lap <= laps; lap++) {
            printf("  Lap %d\n", lap);
        }
        run++;
    } while(run <= runs);

    return 0;
}
```

## Boundaries of Nested Loops

When you nest loops, it’s important to understand how the loops interact. For example, in the outer loop, you might go through 10 iterations, but if the inner loop runs 5 times for every outer loop, that’s a total of 50 iterations. The number of iterations is a combination of both loop boundaries.

## A Quick History Tidbit

> Did you know? The idea of loops has been around since the early days of computing! One of the first looping techniques was introduced in the ENIAC, one of the earliest electronic computers. Programmers had to manually set up physical switches to create loops!

## Practice Makes Perfect

It’s important to practice nested loops in C because you’ll often encounter them in coding challenges and exams. One way to get better is to look at a piece of nested loop code and try to figure out its output **in your mind** before running it. This will help you think like a programmer!

## Final Thoughts

Understanding how loops interact with each other is key to mastering programming. Nested loops may seem tricky at first, but with enough practice, you’ll find them incredibly useful. Try writing some nested loops of your own based on your daily routine, and see if you can predict how they’ll work.

## Example Code

Here’s the code we’ve discussed, all in one place. You can run it to see how nested loops behave:

```c
#include <stdio.h>

int main() {
    int events = 3; // Number of sports events
    int rounds = 5; // Number of rounds per event

    for(int event = 1; event <= events; event++) {
        printf("Event %d begins:\n", event);
        for(int round = 1; round <= rounds; round++) {
            printf("  Round %d\n", round);
        }
    }

    // Other examples can be added here as well for practice

    return 0;
}
```

Try running the code and see how it works! Keep practicing, and you’ll get a strong grasp of how nested loops work.
