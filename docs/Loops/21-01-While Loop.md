---
sidebar_position: 22
slug: /while-loop-in-c
title: "While Loop"
---

# While Loops in C: Repeating Tasks with Precision

Now that we've wrapped up control structures like conditional statements, it's time to dive into another essential part of programming: **loops**. Loops are what let us repeat certain actions in our programs, and they’re super helpful when we want to run the same code multiple times.

Let’s start with the **while loop**, one of the simplest but most commonly used loops in C programming. We’ll break it down step by step and explore some everyday examples to make this concept easy to grasp.

### What Is a Loop?

In programming, a **loop** is a way of telling the computer to do something **repeatedly**. Imagine you need to revise the same chapter multiple times for an exam until you understand it perfectly. Instead of manually opening the book and reading it over and over, you could “loop” the process by setting a condition: “Repeat until I feel confident.”

### Loops in Day-to-Day Life

Think about checking for updates on a class group chat. You don’t just check it once; you keep checking until someone posts something new. Similarly, in programming, loops allow you to keep doing something until a specific condition is met.

Now, let’s look at how loops work in C.

### The While Loop: Running Until the Condition Is False

In C, the **while loop** is a control structure that allows us to repeat a block of code as long as a certain condition is true. Once the condition becomes false, the loop stops.

Here’s the general syntax of a `while` loop:

```c
while (condition) {
    // Body of the loop
}
```

The loop checks the `condition` before every iteration. If the condition is `true`, the body of the loop is executed. If the condition is `false`, the loop ends.

#### Components of a While Loop

Let’s break down the important parts of a while loop:

1. **Initial value of counter**: This is the starting point. Before entering the loop, we need to declare a counter or control variable.
2. **Condition**: This decides whether the loop will keep running or not. As long as the condition is `true`, the loop continues.
3. **Body of statements**: These are the actions that get repeated with each iteration of the loop.
4. **Increment/decrement of counter**: Usually, the counter is updated each time the loop runs, so that eventually the condition becomes `false` and the loop ends.

### Tracking the Loop's State

Let’s consider a simple while loop example: counting from 1 to 5. We'll use a counter variable to keep track of the current number, and the loop will stop once the number reaches 5.

```c
#include <stdio.h>

int main() {
    int counter = 1; // Initial value of counter

    while (counter <= 5) { // Condition
        printf("%d\n", counter); // Body of statements
        counter++; // Increment counter
    }

    return 0;
}
```

This loop will print the numbers 1 to 5, one per line. Let’s break down what happens at each step:

| Iteration | Value of `counter` | Condition (`counter <= 5`) | Output | Next `counter` |
| --------- | ------------------ | -------------------------- | ------ | -------------- |
| 1         | 1                  | True                       | 1      | 2              |
| 2         | 2                  | True                       | 2      | 3              |
| 3         | 3                  | True                       | 3      | 4              |
| 4         | 4                  | True                       | 4      | 5              |
| 5         | 5                  | True                       | 5      | 6              |
| 6         | 6                  | False                      | -      | -              |

Once `counter` reaches 6, the condition becomes false (`6 <= 5` is false), and the loop ends.

### Real-Life Use Cases of While Loops

Let’s explore some practical examples of when you’d use a while loop.

#### 1. Repeatedly Asking for Input Until Correct

Suppose you're building a system to ask a student to enter their student ID. The program will keep asking for input until the user enters a valid ID number.

```c
#include <stdio.h>

int main() {
    int studentID;

    printf("Enter your student ID: ");
    scanf("%d", &studentID);

    while (studentID <= 0) {
        printf("Invalid ID. Please enter a positive number: ");
        scanf("%d", &studentID);
    }

    printf("Thank you! Your ID is valid.\n");

    return 0;
}
```

This loop will continue asking for a valid ID number until the student enters a positive integer. It’s a great example of using a loop with `scanf` to ensure valid input.

#### 2. Tracking Time Until Class Ends

Let’s say you’re checking how much time is left until the end of your class. You could use a while loop to decrement the remaining time every minute.

```c
#include <stdio.h>

int main() {
    int remainingTime = 60; // Class is 60 minutes long

    while (remainingTime > 0) {
        printf("Time remaining: %d minutes\n", remainingTime);
        remainingTime--;
    }

    printf("Class is over!\n");

    return 0;
}
```

This example shows the loop counting down every minute until the class is over.

#### 3. Endless Notifications (Infinite Loop)

Now, sometimes loops don’t end — and this can happen intentionally or by mistake! An **infinite loop** is one that never stops. Let’s look at an example of an intentional infinite loop.

```c
#include <stdio.h>

int main() {
    while (1) {
        printf("Reminder: Submit your assignment!\n");
    }

    return 0;
}
```

Here, the condition `1` is always true, so this loop runs forever. Be careful with infinite loops because they can cause your program to freeze if not handled correctly.

#### 4. Calculating Total Study Hours

Imagine you want to calculate how many hours you’ve studied in a week. You can use a while loop to keep track of the hours each day and get the total.

```c
#include <stdio.h>

int main() {
    int day = 1;
    int totalHours = 0;
    int hours;

    while (day <= 7) {
        printf("Enter hours studied on day %d: ", day);
        scanf("%d", &hours);
        totalHours += hours;
        day++;
    }

    printf("Total hours studied in the week: %d\n", totalHours);

    return 0;
}
```

In this case, the loop runs for 7 days, allowing you to input the number of hours studied each day, and then calculates the total at the end.

### Infinite Loops: When They Can Be Useful

While infinite loops sound dangerous, they do have their place in certain scenarios, like keeping a program running until a specific event occurs (e.g., a server waiting for a user request). However, most of the time, infinite loops are the result of forgetting to update the loop counter, so always make sure your loop conditions are set correctly!

### A Quick Recap

- **While loop**: Repeats as long as a condition is true.
- Components: Initial counter, condition, body of statements, and counter update (increment/decrement).
- We talked about loops in real-life situations like input validation, time tracking, and calculating totals.
- Be cautious with **infinite loops** as they can cause a program to hang.

### Complete Code Example

Here’s a full program that includes everything we’ve discussed:

```c
#include <stdio.h>

int main() {
    int choice, totalHours = 0, day = 1, hours;

    // Example 1: Asking for valid input
    printf("Enter your student ID: ");
    scanf("%d", &choice);

    while (choice <= 0) {
        printf("Invalid ID. Enter a positive number: ");
        scanf("%d", &choice);
    }

    printf("Valid ID entered.\n");

    // Example 2: Countdown until class ends
    int remainingTime = 10; // Shorter class for demo purposes
    while (remainingTime > 0) {
        printf("Time remaining: %d minutes\n", remainingTime);
        remainingTime--;
    }
    printf("Class is over!\n");

    // Example 3: Calculating total study hours
    while (day <= 7) {
        printf("Enter hours studied on day %d: ", day);
        scanf("%d", &hours);
        totalHours += hours;
        day++;
    }
    printf("Total hours studied in the week: %d\n", totalHours);

    return 0;
}
```

Now you’ve got a solid understanding of how the while loop works in C. Give it a try and see how it fits into your own coding projects!
