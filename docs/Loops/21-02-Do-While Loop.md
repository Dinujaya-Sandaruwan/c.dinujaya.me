---
sidebar_position: 23
slug: /do-while-loop-in-c
title: "Do-While Loop"
---

# Do-While Loops in C: Ensuring Execution Before Repetition

We’ve already talked about **Control Structures** and explored the world of loops, specifically the **While Loop**. If you’re not familiar with loops, I’d recommend checking out the previous article. Now, let’s dive into another type of loop in C: the **Do-While Loop**. It’s quite similar to the While Loop but has its unique behavior, which is super useful in certain situations.

## What is a Do-While Loop?

Imagine you have a task that you want to perform at least **once**, and then check if you should repeat it. This is exactly what the Do-While loop does! Unlike the While loop that checks the condition **first** and then executes the code, the Do-While loop **executes first** and then checks the condition. This means the code block will always run at least once.

### Snack Time!

Let’s say you’re hungry and decide to eat snacks until you're full. Here’s the twist: whether you’re hungry or not, you’ll grab a snack at least **once** before asking yourself, “Am I still hungry?” If the answer is “Yes,” you’ll grab another snack. If “No,” you stop.

This is the perfect analogy for a Do-While loop—snacking happens first, and the hunger check happens later!

## Do-While Loop vs While Loop

The main difference between these two loops is **when the condition is evaluated**.

- In a **While Loop**, the condition is evaluated **before** the loop body runs. If the condition is false from the start, the loop body won’t run at all.
- In a **Do-While Loop**, the condition is evaluated **after** the loop body runs. This guarantees that the loop body will always execute at least once.

Here’s a comparison in C syntax:

```c
// While Loop
while (condition) {
    // Code runs if the condition is true
}

// Do-While Loop
do {
    // Code runs at least once, then checks the condition
} while (condition);
```

## Breaking Down the Do-While Loop

Let’s dissect the Do-While loop into its core components:

1. **Initial value of the counter**: Just like in the While loop, the counter or variable must be initialized before the loop starts.
2. **Body of statements**: The block of code you want to execute (the “snack grabbing” part).
3. **Condition**: The loop will run **as long as this condition is true**, but it only checks after the body of statements runs once.
4. **Increment/Decrement Counter**: This is how you control the loop by increasing or decreasing the counter.

### Example Table: Tracking the State of a Do-While Loop

To make things clearer, let’s track a simple Do-While loop example. We’ll count from 1 to 3.

```c
int i = 1;
do {
    printf("%d\n", i);
    i++;
} while (i <= 3);
```

Here’s how it works:

| Step | i (Counter) | Condition (`i <= 3`) | Action                      |
| ---- | ----------- | -------------------- | --------------------------- |
| 1    | 1           | true                 | Prints 1, increments i to 2 |
| 2    | 2           | true                 | Prints 2, increments i to 3 |
| 3    | 3           | true                 | Prints 3, increments i to 4 |
| 4    | 4           | false                | Loop ends                   |

Even though the condition becomes false after `i` is 4, the code block still ran three times.

## Do-While Loop in C

Now that we know what the loop does, here’s how you write it in C. The syntax is pretty simple:

```c
do {
    // Your code here
} while (condition);
```

Let’s revisit some of the stuff we’ve learned previously: **variable declaration**, **printf** for output, and **Conditional Operators**. This knowledge comes in handy while working with Do-While loops!

### Example 1: Simple Counter (Do-While Version)

Imagine you’re organizing an event and you need to display the countdown. You want the message to show at least once, even if the countdown has already started.

```c
int count = 5;
do {
    printf("Countdown: %d\n", count);
    count--;
} while (count > 0);
```

Here, the countdown starts at 5, and it decreases until it reaches 0.

### Example 2: Checking Student Attendance

Let’s say you’re taking attendance for a group of students. Even if there are no students, you’ll still run the process at least once to check.

```c
int students_present;
do {
    printf("Enter the number of students present: ");
    scanf("%d", &students_present);
} while (students_present < 0);
```

This example uses the **scanf** function, and it ensures that the loop runs until a valid number of students is entered.

### Example 3: Infinite Loop

An infinite loop keeps running until you explicitly stop it. With a Do-While loop, you can make this happen by always keeping the condition true:

```c
do {
    printf("This will run forever!\n");
} while (1);
```

Of course, you wouldn’t want to leave a loop like this in real-world applications unless you have a specific reason (like an always-running background service).

## Example 4: The `scanf` Function and Do-While

Sometimes, you need user input to control the flow of the loop. A Do-While loop is great when you want to ensure that input is gathered at least once before validating it.

```c
int number;
do {
    printf("Enter a number greater than 0: ");
    scanf("%d", &number);
} while (number <= 0);
```

In this case, the program keeps asking for input until the user enters a number greater than 0.

### Infinite Loops Revisited

Remember when we talked about **infinite loops** in the previous article? With Do-While loops, it’s also possible to create one by always having the condition evaluate to true. Be careful with these because they can crash your program if you don’t have a way to exit them!

### Up Next...

Now that we’ve covered Do-While loops, we’re ready to move on to another important type of loop: the **For Loop**. Stay tuned for the next article where we’ll break it down and show how it fits into the bigger picture of looping in C.

---

## Complete Code

```c
#include <stdio.h>

int main() {
    // Example 1: Simple counter using do-while loop
    int count = 5;
    do {
        printf("Countdown: %d\n", count);
        count--;
    } while (count > 0);

    // Example 2: Checking student attendance
    int students_present;
    do {
        printf("Enter the number of students present: ");
        scanf("%d", &students_present);
    } while (students_present < 0);

    // Example 3: Infinite loop (commented out to prevent running indefinitely)
    /*
    do {
        printf("This will run forever!\n");
    } while (1);
    */

    // Example 4: Using do-while loop with scanf
    int number;
    do {
        printf("Enter a number greater than 0: ");
        scanf("%d", &number);
    } while (number <= 0);

    return 0;
}
```

This should give you a hands-on understanding of how the Do-While loop works in C. Feel free to copy the code, run it on your machine, and tweak it to suit your learning style!
