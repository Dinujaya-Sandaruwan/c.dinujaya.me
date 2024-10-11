---
sidebar_position: 10
slug: /arithmetic-operators-in-c
title: "Arithmetic Operators"
---

# 09. Arithmetic Operators in C: Calculating with Precision

In C programming, we often need to perform calculations. Whether you’re adding up scores or calculating the result of a physics equation, arithmetic operators are your best friends. Let's break down the operators that help us do math in C.

## What Are Arithmetic Operators?

Arithmetic operators in C are the symbols we use to perform basic math operations like addition, subtraction, multiplication, and more. If you've used math in Python, this will feel quite familiar.

Here’s the list of arithmetic operators in C:

| **Operation**       | **Operator** | **Syntax** | **Result**                           |
| ------------------- | ------------ | ---------- | ------------------------------------ |
| Addition            | `+`          | `a + b`    | Sum of `a` and `b`                   |
| Subtraction         | `-`          | `a - b`    | Difference of `a` and `b`            |
| Multiplication      | `*`          | `a * b`    | Product of `a` and `b`               |
| Division            | `/`          | `a / b`    | Quotient of `a` and `b`              |
| Modulus (Remainder) | `%`          | `a % b`    | Remainder when `a` is divided by `b` |

Let’s explore each one.

### 1. **Addition (`+`)**

The addition operator adds two numbers together. Here's a simple example:

```c
int sum = 5 + 3;  // sum = 8
```

This is like what you’d expect in Python, where `5 + 3` equals `8`. If you use variables, it works the same way.

### 2. **Subtraction (`-`)**

The subtraction operator subtracts one number from another. Example:

```c
int difference = 9 - 4;  // difference = 5
```

It’s straightforward. Again, you can use variables or just plain numbers.

### 3. **Multiplication (`*`)**

For multiplying two numbers, use the `*` symbol:

```c
int product = 7 * 6;  // product = 42
```

Note: Don’t confuse the multiplication operator (`*`) with pointers (which also use `*` but mean something entirely different).

### 4. **Division (`/`)**

Division in C works similarly to what you know, but there’s one key thing to keep in mind: if you divide two integers, the result will also be an integer, and C will **truncate** the result (cut off any decimal points).

Example:

```c
int quotient = 9 / 2;  // quotient = 4
```

Notice that `9 / 2` gives `4` and not `4.5`. That’s because C is performing integer division here. If you want a more precise result (with decimal points), you need to use floating-point numbers (`float` or `double`).

```c
float quotient = 9.0 / 2.0;  // quotient = 4.5
```

### 5. **Modulus (`%`)**

The modulus operator gives you the **remainder** after division. It’s useful when you want to know what’s left after dividing two numbers.

```c
int remainder = 10 % 3;  // remainder = 1
```

This operation works only with integers and tells you the leftover after division.

### **BODMAS: Operator Precedence**

You might be wondering what happens when you mix these operators in a single expression. For example:

```c
int result = 2 + 3 * 4;
```

Here, C follows the BODMAS rule (Brackets, Orders (i.e., powers and square roots, etc.), Division and Multiplication, Addition and Subtraction). In this example:

1. Multiplication happens first (`3 * 4`), which gives `12`.
2. Then, `2 + 12` results in `14`.

So, the result is `14`. If you want to change the order, use parentheses:

```c
int result = (2 + 3) * 4;  // Now, result = 20
```

## **Division and Remainders: Positive vs Negative**

Now, let’s talk about division and modulus when it comes to positive and negative numbers. It’s easy when both numbers are positive, but things change a bit when negative numbers are involved.

```c
int result1 = 9 / -2;  // result1 = -4 (Division truncates towards 0)
int result2 = -9 / 2;  // result2 = -4
int result3 = -9 % 2;  // result3 = -1 (Remainder has the same sign as dividend)
```

In both cases of division, C truncates the result toward zero. For the modulus operator, the sign of the remainder will match the dividend (the number being divided).

## Arithmetic Operators in Action

Now, let’s use `scanf()` to allow users to input two numbers and then perform some arithmetic operations on them. Here’s a simple program:

```c
#include <stdio.h>

int main() {
    int num1, num2;

    // Ask the user for input
    printf("Enter the first number: ");
    scanf("%d", &num1);

    printf("Enter the second number: ");
    scanf("%d", &num2);

    // Perform arithmetic operations
    printf("Addition: %d + %d = %d\n", num1, num2, num1 + num2);
    printf("Subtraction: %d - %d = %d\n", num1, num2, num1 - num2);
    printf("Multiplication: %d * %d = %d\n", num1, num2, num1 * num2);
    printf("Division: %d / %d = %d\n", num1, num2, num1 / num2);
    printf("Modulus: %d %% %d = %d\n", num1, num2, num1 % num2);

    return 0;
}
```

### Let's explan the Code:

1. The program asks for two integers from the user using `scanf()`.
2. It then performs the basic arithmetic operations (addition, subtraction, multiplication, division, and modulus) and prints the results using `printf()`.

### Sample Output:

```
Enter the first number: 10
Enter the second number: 3
Addition: 10 + 3 = 13
Subtraction: 10 - 3 = 7
Multiplication: 10 * 3 = 30
Division: 10 / 3 = 3
Modulus: 10 % 3 = 1
```

## Key Takeaways

- **Arithmetic operators** in C allow you to perform basic math operations.
- Integer division truncates results, and the modulus operator gives you the remainder.
- Be mindful of operator precedence (BODMAS) when performing multiple operations in a single expression.
- When dividing or finding the remainder of negative numbers, keep track of how signs affect the result.

Now, try this out in your own program and experiment with different numbers to see how the operators work!
