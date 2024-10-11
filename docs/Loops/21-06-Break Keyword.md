---
sidebar_position: 27
slug: /break-keyword-in-c
title: "Break Keyword"
---

# Breaking Out: Using the Break Keyword for Control in C

We’ve already covered the types of loops in C and how the `continue` keyword works. If you're not sure about loops, I suggest checking out the previous articles where we discussed those concepts. Now, let’s talk about a powerful tool inside loops—the `break` keyword.

## What is the `break` Keyword?

The `break` keyword in C is like an emergency exit in a building. You use it when you need to stop whatever is happening inside the loop immediately, regardless of whether all the iterations are completed. When the `break` statement is encountered, it tells the loop, "That's it, we're done here," and jumps out of the loop entirely.

This is especially useful when you've found what you're looking for and no longer need to continue looping. It works inside all loop types (`for`, `while`, and `do-while`) as well as in `switch` statements, which we’ve discussed in the past.

## A Little Example

Imagine you’re waiting in line at your university cafeteria for lunch. You’re looking for a specific meal—say, a vegetarian option. As you move along the line, you keep checking each dish (one iteration in a loop). As soon as you find the vegetarian dish, you grab it and leave the line, even if there are more dishes ahead. In this case, your action of leaving the line is like the `break` statement.

## How `break` Works in Different Loops

The `break` keyword behaves similarly in all loop structures, stopping the loop as soon as it’s executed. Here's how it works with the loops we’ve discussed.

### 1. `for` Loop Example

Let’s say you’re grading student assignments, and you want to stop checking once you find a student who scored 100, because that’s all you care about right now. Here’s how you’d use `break`:

```c
#include <stdio.h>

int main() {
    int scores[] = {88, 75, 100, 92, 65};
    int i;

    for (i = 0; i < 5; i++) {
        if (scores[i] == 100) {
            printf("Found a perfect score! Ending the check.\n");
            break;  // Stop the loop once 100 is found
        }
        printf("Checking score: %d\n", scores[i]);
    }

    return 0;
}
```

**Table for the `for` Loop:**

| i   | scores[i] | Condition (scores[i] == 100) | Action            |
| --- | --------- | ---------------------------- | ----------------- |
| 0   | 88        | false                        | check next score  |
| 1   | 75        | false                        | check next score  |
| 2   | 100       | true                         | break (stop loop) |

Here, the loop stops once we encounter the score of 100. The `break` statement tells the loop to terminate right away.

### 2. `while` Loop Example

Imagine you’re searching for an available study room in your building, checking rooms one by one. If you find a room with fewer than 5 people, you grab the room and stop checking the others. This is where `break` comes in.

```c
#include <stdio.h>

int main() {
    int rooms[] = {10, 7, 4, 12, 6};  // Number of people in each room
    int i = 0;

    while (i < 5) {
        if (rooms[i] < 5) {
            printf("Found an available room with %d people. Stopping search.\n", rooms[i]);
            break;  // Stop searching once we find a room with fewer than 5 people
        }
        printf("Checking room with %d people.\n", rooms[i]);
        i++;
    }

    return 0;
}
```

**Table for the `while` Loop:**

| i   | rooms[i] | Condition (rooms[i] < 5) | Action            |
| --- | -------- | ------------------------ | ----------------- |
| 0   | 10       | false                    | check next room   |
| 1   | 7        | false                    | check next room   |
| 2   | 4        | true                     | break (stop loop) |

The `while` loop stops as soon as it finds a room with fewer than 5 people, thanks to the `break` statement.

### 3. `do-while` Loop Example

In this scenario, let’s say you’re working on a research project, and you need to collect 5 samples of data. If you encounter any faulty data during collection, you immediately stop gathering more samples.

```c
#include <stdio.h>

int main() {
    int data[] = {12, 25, -1, 42, 30};  // -1 represents faulty data
    int i = 0;

    do {
        if (data[i] == -1) {
            printf("Faulty data found. Stopping collection.\n");
            break;  // Stop collecting if faulty data is found
        }
        printf("Collected data: %d\n", data[i]);
        i++;
    } while (i < 5);

    return 0;
}
```

**Table for the `do-while` Loop:**

| i   | data[i] | Condition (data[i] == -1) | Action            |
| --- | ------- | ------------------------- | ----------------- |
| 0   | 12      | false                     | collect next data |
| 1   | 25      | false                     | collect next data |
| 2   | -1      | true                      | break (stop loop) |

The `do-while` loop stops once faulty data (`-1`) is found.

### 4. `switch` Statement Example

Remember when we talked about the `switch` statement? The `break` keyword is used here too, to prevent the code from “falling through” to the next case. Imagine you’re writing a menu system where users select options. You use `break` to ensure the program only executes the code for the chosen option.

```c
#include <stdio.h>

int main() {
    int option = 2;

    switch (option) {
        case 1:
            printf("Option 1 selected.\n");
            break;
        case 2:
            printf("Option 2 selected.\n");
            break;
        case 3:
            printf("Option 3 selected.\n");
            break;
        default:
            printf("Invalid option.\n");
            break;
    }

    return 0;
}
```

**Table for the `switch` Statement:**

| option | Case 1 | Case 2 | Case 3 | Action         |
| ------ | ------ | ------ | ------ | -------------- |
| 2      | false  | true   | false  | execute Case 2 |

When `option == 2`, only the code inside Case 2 is executed, and then the `break` statement ensures that the program exits the `switch` block.

## Why Do We Use `==`?

In all of these examples, you may notice the use of `==`. This is the comparison operator in C (and Python), which checks if two values are equal. It’s different from `=` which is used to assign values. So when you see `if (option == 2)`, it’s asking, “Is the value of `option` equal to 2?”

## Summary

The `break` keyword gives you control over when to stop a loop or `switch` statement. It’s like having the power to walk out of a class when the lecture is over, even if the schedule says you’ve got more time. Whether you’re working with `for`, `while`, `do-while` loops, or `switch` statements, `break` helps you exit early when needed.

## Complete Code Example

```c
#include <stdio.h>

int main() {
    int scores[] = {88, 75, 100, 92, 65};
    int i;

    // Example with a for loop
    for (i = 0; i < 5; i++) {
        if (scores[i] == 100) {
            printf("Found a perfect score! Ending the check.\n");
            break;
        }
        printf("Checking score: %d\n", scores[i]);
    }

    // Example with a while loop
    int rooms[] = {10, 7, 4, 12, 6};
    i = 0;
    while (i < 5) {
        if (rooms[i] < 5) {
            printf("Found an available room with %d people. Stopping search.\n", rooms[i]);
            break;
        }
        printf("Checking room with %d people.\n", rooms[i]);
        i++;
    }

    // Example with a do-while loop
    int data[] = {12, 25, -1, 42, 30};
    i = 0;
    do {
        if (data[i] == -1) {
            printf("Faulty data found. Stopping collection.\n");
            break;
        }
        printf("Collected data: %d\n", data[i]);
        i++;
    } while (i < 5);

    // Example with a switch statement
    int option = 2;
    switch (option) {
        case 1:
            printf("Option 1 selected.\n");
            break;
        case

2:
            printf("Option 2 selected.\n");
            break;
        case 3:
            printf("Option 3 selected.\n");
            break;
        default:
            printf("Invalid option.\n");
            break;
    }

    return 0;
}
```

With that, you now have a good grasp of how to use the `break` keyword in C. It’s a simple but very effective tool when you need to stop a loop or exit a `switch` statement.
