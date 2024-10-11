---
sidebar_position: 28
slug: /printing-star-patterns-in-c
title: "Printing Star Patterns"
---

# Printing Star Patterns in C: Designing Shapes with Code

If you've been following along, we’ve already explored looping concepts in C. If you're not familiar with loops, check out my previous articles where I break them down step by step. Now, we're going to take things a bit further and dive into something that’s not only fun but also commonly appears in university exams: **printing star patterns**. You might wonder, “Why do we print patterns at all?” Well, not only does it make your program output look neat, but it also improves your logical thinking. It's a great way to sharpen your understanding of loops, conditionals, and operators.

And hey, patterns can be tricky at first, but once you get the hang of it, it’s like figuring out a puzzle. You’ll feel the same satisfaction as when you finally solve that last step in a complex math problem or code assignment.

## What We’ll Use

Before we jump into printing these cool patterns, remember that we’ve talked about key concepts like:

- **Variable declaration** (`int`, `char`, etc.)
- **Control structures** (`if-else`, `switch`)
- **Conditional operators** (`<`, `>`, `<=`, `>=`, etc.)
- **Loops** (`for`, `while`, `do-while`)
- **Print statements** (`printf`)

We’ll use all of these concepts to print various patterns. So if you're familiar with these, you're ready to go!

## Let’s Look at Some Patterns

Here are the patterns we’re going to print:

### 1. Pattern 1: Numbers in Rows

```
1
22
333
4444
55555
```

To print this, we’ll need nested loops. The outer loop runs for each row, and the inner loop prints the numbers within that row. Think of the inner loop as handling how many times a particular number appears on a line.

### Breaking It Down:

- Row 1 prints `1` once.
- Row 2 prints `2` twice.
- Row 3 prints `3` three times.
- …and so on until we hit row 5.

#### Code:

```c
#include <stdio.h>

int main() {
    int i, j;  // Declaring variables
    for (i = 1; i <= 5; i++) {  // Outer loop for rows
        for (j = 1; j <= i; j++) {  // Inner loop for columns
            printf("%d", i);  // Print row number
        }
        printf("\n");  // Move to the next line after each row
    }
    return 0;
}
```

### 2. Pattern 2: Ascending Numbers in Rows

```
1
12
123
1234
12345
```

This one is slightly different. Instead of printing the same number repeatedly, the inner loop prints numbers starting from `1` and going up to the current row number.

#### Code:

```c
#include <stdio.h>

int main() {
    int i, j;  // Declaring variables
    for (i = 1; i <= 5; i++) {  // Outer loop for rows
        for (j = 1; j <= i; j++) {  // Inner loop for columns
            printf("%d", j);  // Print column number
        }
        printf("\n");  // Move to the next line after each row
    }
    return 0;
}
```

### 3. Pattern 3: Stars in Ascending Order

```
*
**
***
****
*****
```

Now let's print a basic star pattern. Instead of printing numbers, we simply print stars (`*`). The number of stars in each row increases with the row number.

#### Code:

```c
#include <stdio.h>

int main() {
    int i, j;  // Declaring variables
    for (i = 1; i <= 5; i++) {  // Outer loop for rows
        for (j = 1; j <= i; j++) {  // Inner loop for columns
            printf("*");  // Print a star
        }
        printf("\n");  // Move to the next line after each row
    }
    return 0;
}
```

### 4. Pattern 4: Stars in Descending Order

```
*****
****
***
**
*
```

This pattern reverses the previous one. We’ll start with 5 stars in the first row, and then reduce the number of stars by 1 in each subsequent row.

#### Code:

```c
#include <stdio.h>

int main() {
    int i, j;  // Declaring variables
    for (i = 5; i >= 1; i--) {  // Outer loop for rows, starting from 5
        for (j = 1; j <= i; j++) {  // Inner loop for columns
            printf("*");  // Print a star
        }
        printf("\n");  // Move to the next line after each row
    }
    return 0;
}
```

## Visualizing the Loops

For some clarity, let’s track the state of the variables with a table for **Pattern 1** (Numbers in Rows):

| Row (i) | Column (j) | Output |
| ------- | ---------- | ------ |
| 1       | 1          | 1      |
| 2       | 1          | 2      |
| 2       | 2          | 2      |
| 3       | 1          | 3      |
| 3       | 2          | 3      |
| 3       | 3          | 3      |
| 4       | 1          | 4      |
| 4       | 2          | 4      |
| 4       | 3          | 4      |
| 4       | 4          | 4      |
| 5       | 1          | 5      |
| 5       | 2          | 5      |
| 5       | 3          | 5      |
| 5       | 4          | 5      |
| 5       | 5          | 5      |

You can see that for each row `i`, the column `j` runs from 1 to `i`, and that’s why we get the repeating numbers.

## Final Thoughts

Printing patterns is a great way to apply loops, conditionals, and other concepts we’ve covered so far. It challenges you to think logically and structure your code efficiently. The more you practice, the more confident you'll become with these basic building blocks.

Now that you've got a feel for printing simple patterns, try experimenting with them! See if you can come up with more complex designs or tweak the existing ones. And always remember, coding patterns is not just about producing pretty outputs. It’s about training your brain to break down problems logically—a skill that will serve you well throughout your programming journey.
