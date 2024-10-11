---
sidebar_position: 30
slug: /arrays-in-c
title: "Single-Dimensional Arrays"
---

# 24. Arrays in C: Organizing Data for Efficient Processing

So, we wrapped up the discussion on loops, right? Now, let’s dive into arrays—one of the most efficient ways to handle lots of data in C. Before we jump into arrays, though, let’s do a quick recap on variables to set the stage.

## Variables: A Quick Recap

In C, variables are like little containers that store data. For example, you can declare a variable like this:

```c
int age = 20;
```

Here, `int` means we're storing an integer, and `age` is our variable's name. This container holds one piece of data (in this case, 20), and it gets stored somewhere in your computer’s RAM. Every time we create a variable, the program reserves a small chunk of memory to store that data.

Variables are awesome, but they come with limitations. What if you had to store 100 students' grades or, say, the marks you got for 6 different assignments? Declaring 100 variables sounds like a lot of work! That’s where **arrays** come to the rescue.

## What Is an Array?

In simple terms, an array is like a collection of variables, but they all have to be of the same type (unlike Python, where you can mix things up in a list). Instead of declaring multiple variables, you declare an array and store all the values in it.

### Why Do We Need Arrays?

Arrays help you store **multiple values** without the pain of creating a variable for each one. Imagine trying to store 10 students' scores. Instead of writing this:

```c
int score1 = 95;
int score2 = 87;
int score3 = 72;
//...and so on
```

You can store all the scores in one go using an array:

```c
int scores[10];
```

Here, `scores` is an array that can hold 10 integers. Think of it like a series of lockers where each one can store one value.

### How Are Arrays Different from Variables?

Variables hold **one value** at a time, but arrays can hold **multiple values of the same type** in a single container. One key difference from Python is that in C, arrays can only hold values of **one data type** (either all integers, all characters, etc.).

## Declaring an Array

Declaring an array is straightforward. Here’s how you do it:

```c
int marks[5];
```

This creates an array called `marks` that can hold 5 integers. But right now, it’s empty. We haven't assigned any values yet.

### Storing Data in an Array

You can store values in an array like this:

```c
marks[0] = 88;  // First element (index 0)
marks[1] = 76;  // Second element (index 1)
marks[2] = 92;
marks[3] = 64;
marks[4] = 80;
```

Arrays in C start with an index of **0**, not 1. This is a bit different from how we normally think about positions, but it’s an important concept.

### Index vs Position

- **Index** is the actual place in memory where the data is stored (starting from 0).
- **Position** is where we humans usually think the element is (starting from 1).

For example, the first element in an array has index 0 but position 1.

### Declaring and Assigning Data at the Same Time

You can also assign values when declaring the array:

```c
int marks[5] = {88, 76, 92, 64, 80};
```

Here, we’ve created the array and filled it with data in one step. This is useful when you already know what values you want to store.

### Printing Values in an Array

To access and print values from an array, you use their index:

```c
printf("The first mark is %d\n", marks[0]);
```

This will print `88`, the value stored at index 0.

### Using Negative Numbers with Indexes?

In C, you **cannot** use negative numbers as array indices like you might in Python. Arrays in C strictly start at 0 and go up to the array’s declared size minus 1.

## Using Loops with Arrays

Now, loops and arrays are like bread and butter. They go hand-in-hand to make things easier. For example, you can use a `for` loop to go through an array and print all its values:

```c
for (int i = 0; i < 5; i++) {
    printf("Mark %d is %d\n", i + 1, marks[i]);
}
```

This loop goes from `i = 0` to `i = 4` (since arrays are zero-indexed) and prints each element of the array.

## Examples of Arrays in Action

### 1. Storing Exam Marks

```c
int marks[3] = {75, 88, 92};
for (int i = 0; i < 3; i++) {
    printf("Mark %d: %d\n", i + 1, marks[i]);
}
```

### 2. Calculating the Average Score

```c
int total = 0;
int marks[4] = {85, 90, 78, 92};
for (int i = 0; i < 4; i++) {
    total += marks[i];
}
printf("Average score: %d\n", total / 4);
```

### 3. Printing Even Numbers

```c
int evens[5] = {2, 4, 6, 8, 10};
for (int i = 0; i < 5; i++) {
    printf("Even number: %d\n", evens[i]);
}
```

### 4. Accessing Array Values by Index

```c
int marks[5] = {10, 20, 30, 40, 50};
printf("The third mark is %d\n", marks[2]);
```

### 5. Summing Elements in an Array

```c
int nums[4] = {1, 2, 3, 4};
int sum = 0;
for (int i = 0; i < 4; i++) {
    sum += nums[i];
}
printf("Sum of numbers: %d\n", sum);
```

### 6. Modifying Array Values

```c
int numbers[3] = {5, 10, 15};
numbers[1] = 20;  // Changing the second element
printf("Updated second number: %d\n", numbers[1]);
```

## What's Next? Multi-Dimensional Arrays!

Arrays are awesome, but things get even more exciting when we start dealing with **multi-dimensional arrays**—basically arrays inside arrays. But let’s save that for later!

---

### Complete Code to Run:

```c
#include <stdio.h>

int main() {
    int marks[5] = {88, 76, 92, 64, 80};

    for (int i = 0; i < 5; i++) {
        printf("Mark %d: %d\n", i + 1, marks[i]);
    }

    return 0;
}
```

That’s the magic of arrays—simplifying things when you have a lot of data to handle. Now you can declare, store, and loop through arrays like a pro!
