---
sidebar_position: 19
slug: /control-structures-if-statement
title: "If Statement"
---

# Control Structures with if Statements: Making Decisions in Your Code

Now that we've got a good grasp of _type conversion_ and _type casting_, it's time to move forward to something that lets you control the flow of your programs — _control structures_. These are like traffic signals for your code, deciding what gets executed and when.

### What is a Control Structure?

At its core, a control structure is a feature in programming that determines the _order_ in which instructions are executed. You don’t always want your code to run top-to-bottom, line-by-line, right? Sometimes you need your program to make decisions, repeat tasks, or even jump around to different parts of the code.

There are several types of control structures in C:

- **Conditional**: Decides whether a block of code should run based on a condition (e.g., `if` statements).
- **Looping**: Repeats a block of code multiple times (e.g., `for`, `while` loops).
- **Other controls**: These help manage the flow further, like `break`, `continue`, and `goto`.

For now, let’s focus on **conditional statements** — and specifically, the `if` statement, one of the most common and useful control structures.

### The `if` Statement: Making Decisions

The `if` statement is where your program begins to think for itself. It allows you to make decisions based on conditions, which we briefly touched on earlier when we talked about relational operators.

Here’s the basic structure of an `if` statement:

```c
if (condition) {
    // code to execute if the condition is true
}
```

You write a condition inside the parentheses, and if that condition evaluates to true, the code inside the braces will run. If it evaluates to false, the code is skipped. Simple, right?

#### Example: Passing an Exam

Let’s say you're checking if a student has passed an exam:

```c
int score = 75;

if (score >= 50) {
    printf("You passed the exam!\n");
}
```

In this case, the condition `score >= 50` checks whether the student’s score is 50 or higher. If it’s true, the message _"You passed the exam!"_ will be printed. If the score were below 50, the program would skip over the `printf()` statement.

### Introducing `else`: What if You Fail?

But what if the student didn’t pass? In real life, it wouldn’t make sense to only say _“You passed”_ and ignore everything else, right? That’s where the `else` statement comes in — it allows you to define an alternative block of code that runs if the condition is false.

```c
int score = 40;

if (score >= 50) {
    printf("You passed the exam!\n");
} else {
    printf("You failed the exam. Better luck next time!\n");
}
```

Now, if the score is less than 50, the program will tell the student they failed. This way, you’re handling both outcomes.

### Adding `else if`: A Little More Sophisticated

What if we wanted to introduce different levels of passing or failure? Maybe passing with distinction or just scraping through. For that, we use the `else if` statement. It lets you add multiple conditions, checking one after the other.

Let’s upgrade our example:

```c
int score = 85;

if (score >= 75) {
    printf("You passed with distinction!\n");
} else if (score >= 50) {
    printf("You passed the exam.\n");
} else {
    printf("You failed the exam.\n");
}
```

Here, we’ve added an extra check. If the score is 75 or higher, it prints _“You passed with distinction!”_; otherwise, if the score is 50 or higher, it simply says _“You passed”_. If neither condition is met, the student gets the bad news.

### Let's Choose Your Class

Imagine you’re picking an elective for the semester, and your score in a certain subject helps decide which course you qualify for. If you score high, you get into the advanced class; if you score lower, you’re placed in the regular class. This is just like an `if-else if-else` structure in action.

- If your score is 75 or above: You’re in the advanced class.
- If your score is between 50 and 74: You’re in the regular class.
- If your score is below 50: Time to revisit the basics!

This story parallels how conditional statements work in your code.

### A Bit of History

Fun fact: The idea of control structures in programming can be traced back to the 1940s and 1950s when the very first programming languages were being developed. The concept of conditionally controlling the flow of a program was one of the innovations that transformed computers from basic calculators to machines that could follow more complex instructions. In C, which was developed in the early 1970s by Dennis Ritchie, control structures like `if` are foundational, giving programs the ability to adapt to different conditions in real time.

### Wrapping Up

We’ve now covered how to make decisions in C using `if`, `else`, and `else if`. These control structures give your program the flexibility to respond to different inputs and conditions, just like how you make decisions based on circumstances.

Next up, we’ll look at the **switch** statement, which is another way of handling conditional logic, especially when you have multiple outcomes based on a single variable.

### Complete Code Example

Here’s a full code example with everything we’ve talked about:

```c
#include <stdio.h>

int main() {
    int score = 85;

    // Simple if statement
    if (score >= 75) {
        printf("You passed with distinction!\n");
    }
    // if-else statement
    else if (score >= 50) {
        printf("You passed the exam.\n");
    }
    // if-else if-else chain
    else {
        printf("You failed the exam.\n");
    }

    return 0;
}
```

Give this a try in your C environment, and play around with different scores to see how the program reacts. It’s a great way to get comfortable with control structures and start seeing how they can help you control the flow of your code.
