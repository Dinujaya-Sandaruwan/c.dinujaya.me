---
sidebar_position: 12
slug: /equality-operators-in-c
title: "Equality Operators"
---

# 11. Equality Operators in C: Testing for Exact Matches

Hey! We’ve already touched on **relational operators**, and now, we’re going to dive deeper into **equality operators**. These are part of the relational operator family, but they have a special purpose: checking if two values are the same or different.

In C, we have two equality operators:

- `==` (Equal to)
- `!=` (Not equal to)

You’ll use these operators all the time in your coding journey. Let’s break them down and see how they work, with real-life examples to make things crystal clear.

## Equality Operators in C

Here’s a quick table of the equality operators you’ll use in C:

| Operator | Meaning      |
| -------- | ------------ |
| `==`     | Equal to     |
| `!=`     | Not equal to |

Now, let’s explain them one by one.

In the examples bellow, you might have noticed we’re using something called `if` to check whether certain conditions are true or false. This is known as an `if statement`, and it’s a way to make decisions in our programs. The condition inside the parentheses is evaluated, and if it’s true, the code inside the curly braces {} runs. If it’s false, the code is skipped. Don’t worry too much about this for now; we’ll dive deeper into how if statements work later in another article!

### 1. `==` (Equal to)

The `==` operator checks if two values are equal. Think of it as asking, "Are these two things the same?"

#### Example:

Let’s say you and your friend are comparing scores after a game to see if you have the same score.

```c
int myScore = 100;
int friendScore = 100;

if (myScore == friendScore) {
    printf("We both have the same score!\n");
}
```

In this case, `myScore == friendScore` checks if the scores are the same. If they are, C returns `1` (true) and prints the message.

### 2. `!=` (Not equal to)

The `!=` operator checks if two values are **not** equal. It’s like asking, "Are these two things different?"

#### Example:

You want to know if you and your friend have different scores.

```c
int myScore = 100;
int friendScore = 95;

if (myScore != friendScore) {
    printf("Our scores are different!\n");
}
```

Here, `myScore != friendScore` checks if the scores are **not** equal. Since they’re different, the message is printed.

### Why Use Equality Operators?

Equality operators are super useful in programming. Whether you’re comparing scores in a game, checking if a password is correct, or even making decisions in your program, these operators come in handy.

You’ll find yourself using equality operators in almost every program you write. They’re essential for controlling the flow of your program, making decisions, and validating data.

## Let’s put everything together into a real-world example.

Imagine you’re building a system that checks if students passed or failed an exam based on their scores.

```c
#include <stdio.h>

struct Student {
    char name[20];
    int score;
};

int main() {
    struct Student student1 = {"Alice", 75};
    struct Student student2 = {"Bob", 50};

    if (student1.score == student2.score) {
        printf("%s and %s got the same score.\n", student1.name, student2.name);
    } else if (student1.score > student2.score) {
        printf("%s scored higher than %s.\n", student1.name, student2.name);
    } else {
        printf("%s scored lower than %s.\n", student1.name, student2.name);
    }

    if (student1.score >= 50) {
        printf("%s passed the exam!\n", student1.name);
    } else {
        printf("%s failed the exam.\n", student1.name);
    }

    if (student2.score >= 50) {
        printf("%s passed the exam!\n", student2.name);
    } else {
        printf("%s failed the exam.\n", student2.name);
    }

    return 0;
}
```

In this code, we’re comparing two students' scores. We use both equality operators (`==` and `!=`) and relational operators (`>`, `>=`) to check if their scores are the same or different, and whether they passed or failed the exam.

Don’t worry about the `struct` part right now—we’ll talk about that later in another article!

## Full Code Example

Let’s put everything we talked about into one simple program.

```c
#include <stdio.h>

int main() {
    int myScore = 100;
    int friendScore = 95;

    // Equal to
    if (myScore == friendScore) {
        printf("We both have the same score!\n");
    } else {
        printf("Our scores are not the same.\n");
    }

    // Not equal to
    if (myScore != friendScore) {
        printf("Our scores are different!\n");
    }

    // Greater than
    if (myScore > friendScore) {
        printf("I have a higher score than my friend.\n");
    }

    // Less than or equal to
    if (myScore <= friendScore) {
        printf("My friend's score is greater than or equal to mine.\n");
    }

    return 0;
}
```

Run this code on your machine and play around with the values. It will help you get comfortable with how equality operators work.

### Wrap-up

Equality operators are key to making decisions in your C programs. Whether you’re checking if two values are equal or not, or making decisions based on comparisons, these operators will be your go-to tools.
