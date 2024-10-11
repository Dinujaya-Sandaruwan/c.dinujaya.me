---
sidebar_position: 16
slug: /assignment-operators-in-c
title: "Assignment Operators"
---

# Assignment Operators in C: Efficiently Updating Variables

So far, we’ve covered relational, equality, logical, unary, and conditional operators in C. Now, it’s time to talk about **assignment operators**—the ones that make all the math and logic we’ve discussed useful by storing values in variables. While the assignment operator (`=`) is the most basic, there’s more to it than meets the eye when you combine it with arithmetic operators. Let’s break it down!

### 1. The Basic Assignment (`=`)

You’ve seen this operator before. The assignment operator in C is used to assign values to variables. Here’s how it works:

```c
int x = 10;
```

Here, we’re telling the computer, “Put the value `10` in the variable `x`.” It’s pretty straightforward: whatever is on the right side gets assigned to the left.

### 2. Addition Assignment (`+=`)

Now, what if you want to add something to an existing value? Enter the addition assignment operator (`+=`). Instead of writing:

```c
x = x + 5;
```

You can simply write:

```c
x += 5;
```

It’s shorthand for adding a value to an existing variable. It’s like saying, “Take whatever `x` is, add `5`, and store the result back in `x`.”

### 3. Subtraction Assignment (`-=`)

Similarly, if you want to subtract something from a variable, you can use the subtraction assignment operator (`-=`). Instead of writing:

```c
x = x - 3;
```

You write:

```c
x -= 3;
```

This works exactly like addition assignment, just with subtraction.

### 4. Multiplication Assignment (`*=`)

Need to multiply a value? Use the multiplication assignment operator (`*=`). So instead of:

```c
x = x * 2;
```

You write:

```c
x *= 2;
```

It’s a convenient way to multiply a value and store the result back in the same variable.

### 5. Division Assignment (`/=`)

Division works the same way using the division assignment operator (`/=`). So instead of:

```c
x = x / 4;
```

You can write:

```c
x /= 4;
```

This divides the value of `x` by `4` and stores the result back in `x`.

### 6. Modulus Assignment (`%=`)

Finally, there’s the modulus assignment operator (`%=`), which is a bit special. This operator is used to get the remainder when dividing two numbers. Instead of:

```c
x = x % 3;
```

You can write:

```c
x %= 3;
```

This will store the remainder of `x` divided by `3` back in `x`.

### The thing is...

The idea of combining arithmetic and assignment operators wasn’t there in the earliest programming languages. These "compound" operators were introduced later to make code shorter and easier to read. Nowadays, almost all programming languages, including Python, have these operators.

### A Real-World Example

Imagine you’re managing your study schedule. You allocate 5 hours per week for each subject. One week, you decide to add 2 extra hours to your coding time. Instead of writing it out like this:

```c
hoursForCoding = hoursForCoding + 2;
```

You can use:

```c
hoursForCoding += 2;
```

This will automatically add the extra time and store it back into `hoursForCoding`. It’s cleaner and saves typing.

### Putting It All Together

Here’s a simple C program that uses assignment operators:

```c
#include <stdio.h>

int main() {
    int x = 10;
    int y = 20;

    // Basic assignment
    x = 15;

    // Addition assignment
    y += 5;

    // Subtraction assignment
    x -= 2;

    // Multiplication assignment
    y *= 3;

    // Division assignment
    x /= 5;

    // Modulus assignment
    y %= 4;

    printf("x: %d, y: %d\n", x, y);

    return 0;
}
```

You can run this code on your computer and see how each operator works. You’ll notice the `x` and `y` values change as we apply different assignments.

---

Next, we’ll dive into **type conversion and type casting**—a critical part of working with data in C!
