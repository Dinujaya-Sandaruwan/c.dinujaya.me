---
sidebar_position: 24
slug: /for-loop-in-c
title: "For Loop"
---

# For Loops in C: Streamlining Repetitions with Power and Control

So, we’ve already covered **while** loops and **do-while** loops in C. If you’re unfamiliar with looping concepts, you can always check the previous articles for a refresher. Now, let’s focus on the **for** loop—one of the most efficient ways to handle repetitive tasks when you already know how many times you need something to happen.

Imagine this: you’ve got five assignments due, and you need to work on each one individually. Wouldn’t it be easier if you had a system to check off each task one by one automatically? The **for** loop works like that in programming—helping you repeat an action a certain number of times.

## For Loop vs While and Do-While: A Quick Recap

Let’s quickly compare the three loops we’ve learned so far:

| **Loop Type** | **How It Works**                                           |
| ------------- | ---------------------------------------------------------- |
| **while**     | Repeats as long as a condition is true.                    |
| **do-while**  | Executes at least once, then repeats based on a condition. |
| **for**       | Perfect when you know in advance how many times to loop.   |

A **for** loop is ideal when you can predict exactly how many iterations (repetitions) are needed, like reviewing 10 pages of notes or printing a list of numbers.

## The Anatomy of a For Loop

Here’s the basic structure of a **for** loop in C:

```c
for (initialization; condition; increment/decrement) {
    // Code to repeat
}
```

Let’s break it down:

1. **Initialization**: This is where you set up your counter variable (usually starting at 0 or 1). We’ve discussed variable declarations before, so this should look familiar.
2. **Condition**: The loop keeps running as long as this condition is true. Think of it like a checkpoint the loop checks before every run.
3. **Increment/Decrement**: After each iteration, the loop increases or decreases the value of the counter.
4. **Body**: The block of code that runs repeatedly as long as the condition is true.

### Real-World Example

Imagine you need to go through a list of 5 different topics to study. You know exactly how many topics there are, so a **for** loop would be perfect for this:

```c
for (int i = 1; i <= 5; i++) {
    printf("Studying topic %d\n", i);
}
```

Here, the loop starts with `i = 1`, checks if `i` is less than or equal to 5, and then prints out “Studying topic X” for each value of `i`.

- **Initialization**: `int i = 1;` sets up the loop with `i` starting at 1.
- **Condition**: The loop keeps running as long as `i <= 5`.
- **Increment**: After each iteration, `i` increases by 1.
- **Body**: The `printf` statement is executed each time, printing which topic is being studied.

## Comparing Loops: For vs While vs Do-While

Let’s visualize how **for**, **while**, and **do-while** loops differ when counting to 5:

| **Loop Type** | **Behavior**                                              |
| ------------- | --------------------------------------------------------- |
| **for**       | Runs a specific number of times (predictable).            |
| **while**     | Runs as long as a condition remains true (unpredictable). |
| **do-while**  | Runs at least once, then repeats based on the condition.  |

The **for** loop is especially handy when the number of iterations is known beforehand, like when you’re working on exactly 5 assignments.

## Example 1: Checking Assignment Status

Let’s say you’re tracking the progress of your assignments. You have 5 assignments, and you want to print the status of each one:

```c
for (int i = 1; i <= 5; i++) {
    printf("Assignment %d is submitted.\n", i);
}
```

Here, each time the loop runs, it checks the next assignment. This loop will repeat 5 times.

## Example 2: Collecting Student Marks

You can also use a **for** loop to handle user input, like collecting marks for a set of students:

```c
int marks, i;
for (i = 1; i <= 3; i++) {
    printf("Enter marks for student %d: ", i);
    scanf("%d", &marks);
    printf("You entered %d for student %d\n", marks, i);
}
```

Each time the loop runs, it asks for a student’s marks and prints them out. In this case, the loop repeats exactly 3 times, one for each student.

## Example 3: Repeating a Message

Imagine you want to print a message five times, perhaps as a reminder to submit homework. Here’s how you can do that:

```c
for (int i = 1; i <= 5; i++) {
    printf("Reminder: Don’t forget to submit your homework!\n");
}
```

This simple loop repeats the reminder message five times, keeping you on track with your tasks.

## Infinite Loops: A Quick Word of Caution

If you forget to update the counter variable, or you don’t set a proper condition, your loop could run forever! For example:

```c
for (int i = 1; ; i++) {
    printf("This loop will run forever!\n");
}
```

Without a condition to stop it, the loop continues endlessly, which we’ve already discussed in the past when covering infinite loops.

## Declaring Variables Inside and Outside the Loop

In C, you can declare variables inside or outside the **for** loop. Declaring them inside keeps them local to the loop, while declaring them outside makes them accessible after the loop ends.

**Inside the loop**:

```c
for (int i = 1; i <= 3; i++) {
    printf("This is iteration %d\n", i);
}
```

**Outside the loop**:

```c
int i;
for (i = 1; i <= 3; i++) {
    printf("This is iteration %d\n", i);
}
```

In the second case, `i` remains accessible after the loop finishes, which can be useful depending on your needs.

## Bringing It All Together

Let’s put everything we’ve discussed into one example:

```c
#include <stdio.h>

int main() {
    int marks, i;

    // Collecting marks for 3 students
    for (i = 1; i <= 3; i++) {
        printf("Enter marks for student %d: ", i);
        scanf("%d", &marks);
        printf("Marks for student %d: %d\n", i, marks);
    }

    // Printing a reminder 5 times
    for (i = 1; i <= 5; i++) {
        printf("Reminder: Don’t forget to submit your homework!\n");
    }

    return 0;
}
```

Here, we first use the **for** loop to collect marks for 3 students and then print a reminder 5 times. Simple and effective!

## What’s Next?

Next up, we’ll dive into **nested loops**—a loop inside another loop. That’s where things start to get really interesting. Stay tuned!
