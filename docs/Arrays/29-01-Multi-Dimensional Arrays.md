---
sidebar_position: 31
slug: /multi-dimensional-arrays-in-c
title: "Multi-Dimensional Arrays"
---

# Multi-Dimensional Arrays in C: Expanding Data Storage Horizontally and Vertically

In the last article, we explored single-dimensional arrays—how they let us store multiple values of the same type in one neat package. They helped us manage data in a linear way, like a row of exam scores. But what if you need to deal with more complex structures, like organizing scores for different subjects over multiple terms? That’s where **multi-dimensional arrays** come into play.

Before we dive into multi-dimensional arrays, let’s quickly refresh our memory on single-dimensional arrays.

## Recap: Single-Dimensional Arrays in C

A single-dimensional array is like a list. Think of it as a series of boxes, each capable of holding one value of the same data type. Here’s how you declare one:

```c
int scores[5]; // Creates an array that can hold 5 integers
```

Each element in the array has an index starting from 0, and you can store or retrieve values using these indices. For example:

```c
scores[0] = 85; // Stores 85 in the first box (index 0)
```

So, single-dimensional arrays are great when you need to store data in a linear structure. But what if you need something more like a grid?

## Enter Multi-Dimensional Arrays

A **multi-dimensional array** is basically an array of arrays. It allows you to store data in a grid or matrix-like structure. This is super useful when you need to represent data in two (or more) dimensions, like a table with rows and columns.

### Visualizing Multi-Dimensional Arrays

Imagine you’re organizing grades for students across different subjects, like this:

| **Math** | **Physics** | **Chemistry** |
| :------: | :---------: | :-----------: |
|    90    |     85      |      88       |
|    80    |     70      |      75       |
|    95    |     82      |      91       |

This is a **2D array**, where the rows represent the students, and the columns represent their scores in different subjects. In C, you can create and manipulate this grid using a 2D array.

### Declaring a Multi-Dimensional Array

To declare a two-dimensional array in C, you do something like this:

```c
int grades[3][3];  // Creates a 3x3 grid (3 rows and 3 columns)
```

Here, `grades` is the name of the array, and `[3][3]` specifies that it has 3 rows and 3 columns. Each element in the array can hold an integer value.

### Adding Data to a Multi-Dimensional Array

Just like with single-dimensional arrays, you can assign values to a multi-dimensional array using indices:

```c
grades[0][0] = 90;  // Math score for the first student
grades[0][1] = 85;  // Physics score for the first student
grades[0][2] = 88;  // Chemistry score for the first student
```

In this example, the first index refers to the row (the student), and the second index refers to the column (the subject).

### Declaring and Adding Data at the Same Time

You can also initialize a multi-dimensional array with values when you declare it:

```c
int grades[3][3] = {
    {90, 85, 88},
    {80, 70, 75},
    {95, 82, 91}
};
```

This creates the array and fills it with data in one go. Each set of braces `{}` represents a row in the grid.

### Reading Data from a Multi-Dimensional Array

To access a specific value from a multi-dimensional array, you use its row and column indices:

```c
printf("First student's Physics score: %d\n", grades[0][1]);
```

This prints the Physics score of the first student, which is `85`.

## Loops and Multi-Dimensional Arrays

Using nested loops, you can easily go through each element of a multi-dimensional array. Let’s say you want to print out all the grades:

```c
for (int i = 0; i < 3; i++) {      // Loop through rows (students)
    for (int j = 0; j < 3; j++) {  // Loop through columns (subjects)
        printf("%d ", grades[i][j]);
    }
    printf("\n");  // Move to the next line after each row
}
```

This prints:

```
90 85 88
80 70 75
95 82 91
```

### Why Does C Start Array Indices at 0?

> In C (and most programming languages), arrays start at 0 instead of 1. This isn’t just an arbitrary rule—it’s rooted in how memory is handled. The index represents an **offset** from the starting memory address of the array. So, when you use `grades[0]`, you're directly accessing the memory where the first element is stored.

## Multi-Dimensional Arrays Beyond 2D

While 2D arrays are the most common, C also supports higher-dimensional arrays, like 3D arrays (or even 5D, if you want to go crazy!). Here’s how you declare a 3D array:

```c
int cube[3][3][3];  // A 3x3x3 cube (3 layers, each with 3 rows and 3 columns)
```

But for most practical purposes, you’ll usually stick with 2D arrays.

### Example: 3D Array in Action

Let’s take an example of a 3D array to store coordinates (x, y, z) of points in space:

```c
int points[2][2][2] = {
    {{0, 1}, {2, 3}},
    {{4, 5}, {6, 7}}
};
```

You can think of it as a cube where each entry is a set of coordinates. For instance, `points[1][0][1]` would give you the value `5`.

## Storing Grades for Multiple Students

Let’s say you have 3 students, each with scores in 3 subjects. You could represent this data in a 2D array and calculate the average score for each student.

```c
#include <stdio.h>

int main() {
    // Declaring and initializing a 2D array for grades
    int grades[3][3] = {
        {90, 85, 88},
        {80, 70, 75},
        {95, 82, 91}
    };

    // Calculate and print the average score for each student
    for (int i = 0; i < 3; i++) {
        int total = 0;
        for (int j = 0; j < 3; j++) {
            total += grades[i][j];
        }
        printf("Student %d average: %d\n", i + 1, total / 3);
    }

    return 0;
}
```

This code calculates the average score for each student based on their scores in three subjects and prints it out.

---

### Complete Code to Try

```c
#include <stdio.h>

int main() {
    // A 2D array storing grades for 3 students across 3 subjects
    int grades[3][3] = {
        {90, 85, 88},
        {80, 70, 75},
        {95, 82, 91}
    };

    // Print all grades in a grid format
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", grades[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

---

## What’s Next? 3D Arrays and Beyond!

So now you’ve mastered multi-dimensional arrays, you can start thinking about more complex structures like 3D arrays—or even higher!
