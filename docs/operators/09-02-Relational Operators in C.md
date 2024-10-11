---
sidebar_position: 11
slug: /relational-operators-in-c
title: "Relational Operators"
---

# Relational Operators in C: Building Comparisons and Conditions

Hey there! Now, we’re diving into a very interesting topic: **relational operators** in C. These operators help us compare values, kind of like how we use "greater than" or "equal to" in everyday life. If you've worked with Python, you might already know that Python returns `True` or `False` for such comparisons. In C, it’s slightly different—it returns `0` (false) or `1` (true). Don't worry, we'll break it all down with examples!

## What Are Relational Operators?

Relational operators in C let us compare two values, like checking if one number is bigger than another or if two values are the same. Here's a simple comparison: in a game, you might want to know if your score is higher than a friend's, or whether you both have the same score. Relational operators help with that!

In C, the result of a comparison is either `1` (which means "true") or `0` (which means "false"). No fancy `True` or `False` here like in Python!

Let’s look at all the relational operators you can use in C.

### Relational Operators in C

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |

## Let’s break these down one by one with real-world examples.

In the examples bellow, you might have noticed we’re using something called `if` to check whether certain conditions are true or false. This is known as an `if statement`, and it’s a way to make decisions in our programs. The condition inside the parentheses is evaluated, and if it’s true, the code inside the curly braces {} runs. If it’s false, the code is skipped. Don’t worry too much about this for now; we’ll dive deeper into how if statements work later in another article!

### 1. `==` (Equal to)

This operator checks if two values are equal. Think of it as asking, "Are these two things the same?"

#### Example:

Let’s say you and your friend are comparing scores after a game to see if you tied.

```c
int myScore = 100;
int friendScore = 100;

if (myScore == friendScore) {
    printf("We have the same score!\n");
}
```

In this case, the `==` checks if both scores are the same. If they are, it prints a message.

### 2. `!=` (Not equal to)

This operator checks if two values are **not** equal. It’s like asking, "Are these two things different?"

#### Example:

You want to know if you and your friend have different scores.

```c
int myScore = 100;
int friendScore = 95;

if (myScore != friendScore) {
    printf("Our scores are different!\n");
}
```

Here, the `!=` checks if the scores are **not** equal. Since they aren’t, the message will be printed.

### 3. `>` (Greater than)

This checks if the value on the left is greater than the value on the right.

#### Example:

Let’s say you're checking if your score is higher than your friend’s.

```c
int myScore = 100;
int friendScore = 95;

if (myScore > friendScore) {
    printf("I have a higher score!\n");
}
```

If your score is higher, C will return `1` and print the message. If not, it returns `0`.

### 4. `<` (Less than)

This checks if the value on the left is less than the value on the right.

#### Example:

Now, imagine you want to check if your score is lower than your friend’s.

```c
int myScore = 90;
int friendScore = 95;

if (myScore < friendScore) {
    printf("My score is lower than my friend's.\n");
}
```

If your score is lower, the comparison returns `1` (true), and the message is printed.

### 5. `>=` (Greater than or equal to)

This one checks if the value on the left is either **greater than** or **equal to** the value on the right.

#### Example:

You want to know if you at least tied with your friend or beat their score.

```c
int myScore = 100;
int friendScore = 100;

if (myScore >= friendScore) {
    printf("I either won or tied with my friend!\n");
}
```

In this case, the result is `1` (true) because the scores are equal.

### 6. `<=` (Less than or equal to)

Finally, this operator checks if the value on the left is either **less than** or **equal to** the value on the right.

#### Example:

You want to check if you didn’t beat your friend’s score.

```c
int myScore = 90;
int friendScore = 95;

if (myScore <= friendScore) {
    printf("I didn’t beat my friend’s score.\n");
}
```

Since your score is less than your friend's, the message will be printed.

## Now let’s take a more advanced example.

Imagine you’re writing a program to compare the ages of two people, and you want to check who’s older, younger, or if they’re the same age. Don't worry if you don't understand any part of this code because we will talk about them later.

```c
#include <stdio.h>

struct Person {
    char name[20];
    int age;
};

int main() {
    struct Person person1 = {"Alice", 30};
    struct Person person2 = {"Bob", 25};

    if (person1.age > person2.age) {
        printf("%s is older than %s.\n", person1.name, person2.name);
    } else if (person1.age < person2.age) {
        printf("%s is younger than %s.\n", person1.name, person2.name);
    } else {
        printf("%s and %s are the same age.\n", person1.name, person2.name);
    }

    return 0;
}
```

Here, we used a `struct` to store people’s names and ages (don’t worry, we’ll talk about `struct` in a future article). Then, we compare their ages using relational operators.

## Wrap-up

So, relational operators are your go-to tools for comparing values in C. Whether you're checking if two numbers are equal, or if one is greater than the other, these operators have you covered. You’ll be using them all the time as you continue learning C!

## Full Code Example for you to run

```c
#include <stdio.h>

int main() {
    int myScore = 100;
    int friendScore = 95;

    // Equal to
    if (myScore == friendScore) {
        printf("We have the same score!\n");
    }

    // Not equal to
    if (myScore != friendScore) {
        printf("Our scores are different!\n");
    }

    // Greater than
    if (myScore > friendScore) {
        printf("I have a higher score!\n");
    }

    // Less than
    if (myScore < friendScore) {
        printf("My score is lower than my friend's.\n");
    }

    // Greater than or equal to
    if (myScore >= friendScore) {
        printf("I either won or tied with my friend!\n");
    }

    // Less than or equal to
    if (myScore <= friendScore) {
        printf("I didn’t beat my friend’s score.\n");
    }

    return 0;
}
```

Run this code, and feel free to play around with the values to get comfortable with relational operators.
