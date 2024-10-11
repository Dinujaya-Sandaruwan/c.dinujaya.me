---
sidebar_position: 26
slug: /continue-keyword-in-c
title: "Continue Keyword"
---

# Mastering the Continue Keyword in C: Skipping Steps like a Pro

Now that we’ve gone through different loop types in C—`while`, `do-while`, and `for` loops—let’s dive into something that makes loops even more interesting: the `continue` keyword. If you’re unsure about how loops work, take a moment to revisit our previous articles on looping. Here, we’re going to build on that knowledge.

## What is the `continue` Keyword?

Imagine you’re working on a group project, and someone proposes an idea that doesn’t fit. Instead of stopping the entire discussion to reject it, you simply ignore that idea and move on to the next. That’s exactly what the `continue` keyword does inside loops: it skips the current iteration and jumps straight to the next one, without stopping the whole loop. This can be handy when you only want to skip over specific cases.

### How `continue` Works in Different Loops

We’ve talked about the different loop structures in C. Let's now see how `continue` behaves in each of them.

- In a `for` loop, when `continue` is encountered, the remaining code inside the loop is skipped, and the loop moves directly to the next iteration (updating the counter).
- In a `while` loop, `continue` causes the loop to check the condition again without executing the rest of the loop body.
- Similarly, in a `do-while` loop, after `continue`, the loop checks its condition at the end and proceeds to the next iteration.

Let’s make this more relatable with a story.

## A Little Example

Imagine you're in a cafeteria line. There’s a special rule: if anyone’s tray has a spilled drink, the staff asks them to clean up and move on without checking out. Everyone else can finish their checkout process.

This is like a loop where each student (iteration) gets checked, but if there’s a spilled drink (`continue` condition), they skip the rest of the checkout and move to the back of the line.

### Let’s see the `continue` keyword in action with different loops.

### 1. `for` Loop Example

In this example, let’s assume you want to print out only even numbers between 1 and 10. When the loop encounters an odd number, it skips that iteration.

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            continue;  // Skip if the number is odd
        }
        printf("%d\n", i);  // Print only even numbers
    }
    return 0;
}
```

**Table for the `for` Loop:**

| i   | Condition (i % 2 != 0) | Action          |
| --- | ---------------------- | --------------- |
| 1   | true                   | continue (skip) |
| 2   | false                  | print           |
| 3   | true                   | continue (skip) |
| 4   | false                  | print           |
| ... |                        | ...             |
| 10  | false                  | print           |

Here, the `continue` skips printing odd numbers. Notice how we use `i % 2 != 0` to check if the number is odd. In C, `==` is used for comparison, unlike Python, where indentation plays a key role in structure.

### 2. `while` Loop Example

Imagine you’re going through a list of student grades, and you want to ignore any grades that are below 40 (let’s assume they’re incomplete) and only print those that are above or equal to 40.

```c
#include <stdio.h>

int main() {
    int grades[] = {55, 32, 75, 22, 89, 41};
    int i = 0;

    while (i < 6) {
        if (grades[i] < 40) {
            i++;
            continue;  // Skip grades below 40
        }
        printf("Grade: %d\n", grades[i]);
        i++;
    }
    return 0;
}
```

**Table for the `while` Loop:**

| i   | Grade | Condition (grades[i] < 40) | Action          |
| --- | ----- | -------------------------- | --------------- |
| 0   | 55    | false                      | print           |
| 1   | 32    | true                       | continue (skip) |
| 2   | 75    | false                      | print           |
| ... |       |                            | ...             |

The `continue` keyword helps us skip grades less than 40 here.

### 3. `do-while` Loop Example

Suppose you’re a cashier, and you must check each customer’s bill. You want to skip customers whose total bill is less than $5 (maybe for some special discount rule), and continue processing the next customer.

```c
#include <stdio.h>

int main() {
    int bills[] = {10, 3, 12, 7, 2};
    int i = 0;

    do {
        if (bills[i] < 5) {
            i++;
            continue;  // Skip bills less than 5
        }
        printf("Bill: $%d\n", bills[i]);
        i++;
    } while (i < 5);

    return 0;
}
```

**Table for the `do-while` Loop:**

| i   | Bill | Condition (bills[i] < 5) | Action          |
| --- | ---- | ------------------------ | --------------- |
| 0   | 10   | false                    | print           |
| 1   | 3    | true                     | continue (skip) |
| 2   | 12   | false                    | print           |
| ... |      |                          | ...             |

### More Examples with Stories

### 4. Counting Pass Marks with a `for` Loop

Imagine you’re a TA marking papers. You only want to count the papers with marks above 50, so you skip the rest.

```c
#include <stdio.h>

int main() {
    int marks[] = {78, 45, 67, 23, 90, 39, 56};
    int passCount = 0;

    for (int i = 0; i < 7; i++) {
        if (marks[i] < 50) {
            continue;  // Skip marks below 50
        }
        passCount++;
    }

    printf("Number of pass marks: %d\n", passCount);
    return 0;
}
```

### 5. Skipping Unavailable Items in an Inventory

You’re scanning items in a warehouse and want to skip any that are marked as unavailable.

```c
#include <stdio.h>

int main() {
    int items[] = {1, 0, 1, 1, 0, 1}; // 1 means available, 0 means unavailable

    for (int i = 0; i < 6; i++) {
        if (items[i] == 0) {
            continue;  // Skip unavailable items
        }
        printf("Item %d is available.\n", i + 1);
    }

    return 0;
}
```

### 6. Ignoring Weekends in a Loop

If you’re checking work done each day of the week and want to ignore weekends (Saturday and Sunday), here’s how you could use `continue` to skip those days.

```c
#include <stdio.h>

int main() {
    for (int day = 1; day <= 7; day++) {
        if (day == 6 || day == 7) {
            continue;  // Skip weekends (Saturday = 6, Sunday = 7)
        }
        printf("Day %d: Work completed.\n", day);
    }

    return 0;
}
```

## Practice and Visualize!

It’s important to get used to how loops and `continue` work because these types of questions often show up in exams. Try to visualize the flow of control in your head and practice writing out the code. Use simple examples like we discussed here, and soon it will become second nature.

Next, we’ll move on to the **`break`** keyword, which does something a bit different—so stay tuned for that!
