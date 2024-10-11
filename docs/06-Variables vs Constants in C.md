---
sidebar_position: 6
slug: /variables-vs-constants-in-c
title: "Variables vs Constants"
---

# Variables vs Constants: Flexibility vs Stability in C

In C programming, variables and constants are the bread and butter of how we store and manipulate data. Imagine you're working in a kitchen—variables are like ingredients you can swap or change, while constants are the secret sauce you can't mess with. Let’s dive into the differences and how they work!

### Variables vs Constants

A **variable** is a named location in memory that can hold different values over time. For example, in Python, you might declare a variable like this:

```python
age = 25
age = 30  # Reassigning a new value
```

Similarly, in C, you can declare a variable, give it a value, and change it whenever you want.

```c
int age = 25;
age = 30;  // New value assigned
```

On the other hand, a **constant** is like a locked vault—it holds a value that cannot be changed once assigned. If you try to modify it, the compiler won’t let you! In Python, you might use a naming convention (like all caps) to indicate that something should be treated as a constant:

```python
PI = 3.14159
```

Though Python doesn't have true constants, C gives us the power to explicitly create them.

### Capital Letters in Constants

In C, it’s common practice to use **capital letters** for constants. It’s not mandatory, but it helps make your code more readable. This way, when you see something like `MAX_SIZE`, you know it’s not supposed to change.

```c
#define MAX_SIZE 100
```

Here, `MAX_SIZE` is defined as 100, and you can’t change it later in the code. It’s set in stone from the moment it’s defined.

### How to Use `const` in C

In C, there are two main ways to create constants. The first one is using `#define`, which is called a macro. You saw it in the previous example with `MAX_SIZE`. But there’s also another, more modern way: the `const` keyword. Here’s how you can use it:

```c
const int AGE = 25;
```

Using `const` allows the variable `AGE` to be read-only throughout your program. If you try to change it later, you’ll get an error.

```c
AGE = 30;  // Error! AGE is a constant.
```

### `#define` vs `const`

So why use one over the other? `#define` is a **preprocessor directive**, meaning it gets processed before your code even compiles. It’s a simple text replacement—the compiler doesn’t see `MAX_SIZE`, it just sees `100`.

The `const` keyword, however, is part of the C language itself. This means that a `const` variable has a **data type** (like `int` or `float`), and it gets checked by the compiler as part of the code. This makes `const` a safer and more flexible option in most cases.

Here’s a quick comparison:

- `#define`: Text replacement, no type checking.
- `const`: Full type checking, integrated into the C language.

### Compile Time vs Runtime

Here’s where things get interesting—**compile time** and **runtime**. These are two different phases in the life of a program.

- **Compile Time**: When you hit "compile," the C compiler checks your code, translates it into machine code, and catches any errors it can.
- **Runtime**: This is when your program is actually running, doing its thing. Errors here are often trickier to catch, like trying to divide by zero.

Constants like `#define MAX_SIZE 100` are resolved at **compile time**—the compiler replaces `MAX_SIZE` with `100` in the machine code before your program ever runs.

Variables, on the other hand, are typically resolved at **runtime**. You can assign values to them, change them, and see those changes while the program is running.

Here's an example to clarify:

```c
#define PI 3.14159  // Compile-time constant
const int MAX_LIMIT = 100;  // Compile-time constant

int number = 50;  // Runtime variable
number = 75;  // Changed during runtime
```

In this case, `PI` and `MAX_LIMIT` are determined at compile time, while `number` can change as the program runs.

### Putting It All Together

Here’s a simple C program that demonstrates everything we’ve talked about:

```c
#include <stdio.h>

#define MAX_SIZE 100  // Constant using #define

int main() {
    const float PI = 3.14159;  // Constant using const

    int radius = 5;  // Variable
    float area = PI * radius * radius;  // Calculating area

    printf("Area of the circle: %.2f\n", area);

    radius = 10;  // Change variable
    area = PI * radius * radius;  // Recalculate area

    printf("Area with new radius: %.2f\n", area);

    // MAX_SIZE and PI cannot be changed, they are constants.
    return 0;
}
```

When you run this code, you’ll see the area of a circle printed with two different radii. The values of `PI` and `MAX_SIZE` stay locked, while `radius` and `area` can change during runtime.

---

That's it! Now you know how to use variables and constants in C, and how they work differently at compile time and runtime. Try running the code and experiment with your own constants and variables!
