---
sidebar_position: 13
slug: /logical-operators-in-c
title: "Logical Operators"
---

# Logical Operators in C: Making Decisions with Logic

When you're programming, making decisions is inevitable—like whether something is true or false. Logical operators are the superheroes of decision-making in C. They allow you to check multiple conditions and determine the truth or falsehood of combined statements. Let's dive into the world of logical operators by exploring their origins, how they work in C, and a fun history lesson!

## A Quick Intro to Logic Gates

Before we jump into code, let's get some context. Logical operators in programming are inspired by something called "logic gates" in electronics. Logic gates are like little switches that control the flow of electricity in circuits based on specific conditions. They're essential in making computers "think." The same concept applies in programming—logical operators help us control the flow of a program based on conditions.

### Who's Behind All This Logic?

The logic behind these operators was formalized by George Boole, a mathematician from the 1800s. Boole's work laid the groundwork for what we call Boolean algebra, which eventually became fundamental to digital circuit design and computer programming. Sadly, Boole didn't live to see the widespread practical applications of his work in modern computing. He passed away in 1864, long before the digital revolution would turn his mathematical concepts into the building blocks of computer science.

## Breaking down the three main logical operators in C and how they map to logic gates.

#### AND, OR, NOT

In the examples bellow, you might have noticed we’re using something called `if` to check whether certain conditions are true or false. This is known as an `if statement`, and it’s a way to make decisions in our programs. The condition inside the parentheses is evaluated, and if it’s true, the code inside the curly braces {} runs. If it’s false, the code is skipped. Don’t worry too much about this for now; we’ll dive deeper into how if statements work later in another article!

### 1. `&&` (AND Operator)

This operator checks whether **both** conditions are true. If both conditions are true, the result is true; otherwise, it's false.

| Condition 1 | Condition 2 | Result (AND) |
| :---------: | :---------: | :----------: |
|    True     |    True     |     True     |
|    True     |    False    |    False     |
|    False    |    True     |    False     |
|    False    |    False    |    False     |

In electronics, this is similar to the AND gate—both inputs must be "on" for the output to be "on."

#### Real-world AND Example:

Imagine a security system where a door only opens if you have both a key card **and** know the PIN:

```c
bool hasKeyCard = true;
bool knowsPIN = true;

if (hasKeyCard && knowsPIN) {
    printf("Access granted!\n");
} else {
    printf("Access denied.\n");
}
```

### 2. `||` (OR Operator)

This one checks if **at least one** condition is true. If either condition is true, the result will be true.

| Condition 1 | Condition 2 | Result (OR) |
| :---------: | :---------: | :---------: |
|    True     |    True     |    True     |
|    True     |    False    |    True     |
|    False    |    True     |    True     |
|    False    |    False    |    False    |

In electronics, it's like an OR gate—if at least one input is "on," the output will be "on."

#### Real-world OR Example:

Consider a movie theater offering discounts:

```c
int age = 65;
bool isStudent = false;

if (age >= 65 || isStudent) {
    printf("Discount applied!\n");
} else {
    printf("Regular price.\n");
}
```

### 3. `!` (NOT Operator)

The NOT operator is simple: it **reverses** the truth value. If the condition is true, it becomes false, and if it's false, it becomes true.

| Condition | Result (NOT) |
| :-------: | :----------: |
|   True    |    False     |
|   False   |     True     |

#### Real-world NOT Example:

Checking if a game is not paused:

```c
bool isPaused = false;

if (!isPaused) {
    printf("Game is running\n");
} else {
    printf("Game is paused\n");
}
```

### Logical Operators with `printf`

Let’s see how logical operators like OR (`||`) and AND (`&&`) work in action by combining them with the `printf` function for easy output. This will give us a real-time peek into how these operators evaluate conditions.

```c
#include <stdio.h>

int main() {
    int a = 0, b = 1, c, d;

    printf("a = %d\n", a); // Outputs: a = 0
    printf("b = %d\n", b); // Outputs: b = 1

    // OR operation: at least one condition is true
    c = a || b;
    printf("c = %d (a || b)\n", c); // Outputs: c = 1 (since b is 1, the result is true)

    // AND operation: both conditions must be true
    d = a && b;
    printf("d = %d (a && b)\n", d); // Outputs: d = 0 (since a is 0, the result is false)

    return 0;
}
```

Here’s what’s happening:

- The OR operator (`||`) checks if at least **one** of the conditions is true. Since `b = 1` (true), `c` becomes 1.
- The AND operator (`&&`) requires **both** conditions to be true. Because `a = 0` (false), `d` ends up as 0, no matter what `b` is.

This little example shows how logical operators can influence the outcome of variables in your programs, and `printf` helps us track it all in real-time!

## Short-Circuit Evaluation for Performance Boost

C uses something called "short-circuit evaluation" with logical operators. This means:

- For `&&`, if the first condition is false, C doesn't bother checking the second condition
- For `||`, if the first condition is true, C skips the second condition

This can improve performance and prevent errors. Here's an example:

```c
int x = 0;

// This is safe because the second condition isn't checked if x is 0
if (x != 0 && 10/x > 1) {
    printf("x is greater than 10\n");
}
```

## Combining Operators for Complex Decision Making

You can combine multiple logical operators to create complex conditions:

```c
int age = 25;
bool hasLicense = true;
bool hasInsurance = true;
int experience = 3;

if ((age >= 21 && hasLicense) && (hasInsurance || experience >= 5)) {
    printf("You can rent a car!\n");
} else {
    printf("Sorry, you don't meet the requirements.\n");
}
```

### Operator Precedence

When combining operators, C follows this order:

1. `!` (highest precedence)
2. `&&`
3. `||` (lowest precedence)

Use parentheses to make your code clearer and control the order of evaluation:

```c
// These two conditions are different:
if (!a && b)    // !a is evaluated first
if (!(a && b))  // (a && b) is evaluated first, then negated
```

## Common Pitfalls to Avoid

1. **Using = instead of ==**

```c
int x = 5;
if (x = 10) { // This assigns 10 to x and is always true!
    // ...
}
// Correct way:
if (x == 10) {
    // ...
}
```

2. **Unnecessary comparisons with true/false**

```c
bool isReady = true;
// Don't do this:
if (isReady == true) {
    // ...
}
// Do this instead:
if (isReady) {
    // ...
}
```

If you’ve worked with Python before, this might feel familiar. The logic in Python is similar—and, or, and not operators work in almost the same way.
