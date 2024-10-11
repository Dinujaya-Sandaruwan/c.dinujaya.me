---
sidebar_position: 5
slug: /variables-and-data-types-in-c
title: "Variables and Data Types"
---

# Variables and Data Types in C: The Foundation of Dynamic Programming

Let's talk about variables in C. Think of a variable as a storage box in your computer's memory where you can put a piece of data (like a number or a letter) and access it whenever you want. This makes your program more flexible because you can change the data without changing your entire code.

### What Is a Variable?

A variable has two key parts:

1. **Name**: This is what you call the variable. You give it a name so that you can refer to it later.
2. **Data Type**: This tells the computer what kind of data will be stored in the variable (e.g., an integer, a character, etc.).

In C, you have to declare the variable's data type before using it, which is different from Python, where you can just assign a value directly without declaring its type.

### Giving Meaningful Names to Variables

When you create a variable, choose a name that makes sense based on what it represents. For example, if you are storing someone's age, calling the variable `age` makes much more sense than calling it `a` or `x`. Meaningful names make your code easier to read and understand.

```c
int age;  // Meaningful name
int x;    // Not very meaningful
```

### Rules for Creating Identifier Names

You can't just pick any name for your variables. There are some rules to follow:

- The name must start with a letter or an underscore (`_`).
- You can use letters, digits, and underscores, but no spaces or special characters.
- Variable names are case-sensitive. So, `Age` and `age` are two different variables.

```c
int _count;   // Valid
int myAge123; // Valid
int 123name;  // Invalid (can't start with a number)
int my-age;   // Invalid (no special characters)
```

### Naming Conventions: Keeping It Consistent

You might notice programmers tend to follow certain naming conventions. These are just common ways of naming variables that make code more readable and standardized. Here are a few naming conventions:

1. **Camel Case**: The first word is lowercase, and each subsequent word starts with an uppercase letter.

   - Example: `myAge`, `totalCost`
   - Commonly used in variable names.

2. **Pascal Case**: Similar to Camel Case, but the first word starts with an uppercase letter.

   - Example: `MyAge`, `TotalCost`
   - Often used for class names in object-oriented programming.

3. **Snake Case**: Words are separated by underscores, and everything is lowercase.

   - Example: `my_age`, `total_cost`
   - Common in older languages and C-style languages like C and C++.

4. **Kebab Case**: Words are separated by hyphens.
   - Example: `my-age`, `total-cost`
   - This is not valid in C, but you might see it in other programming languages or file names.

It's best to stick to one naming convention throughout your program to keep things consistent and readable. In C, snake_case or camelCase is more common for variables.

### Maximum Length for Variable Names

In C, you can use up to **31 characters** for variable names. After that, the extra characters are ignored, so make sure your important information is within that limit.

### Avoid Using Keywords as Variable Names

Remember that you can't use C keywords (like `int`, `return`, `if`, etc.) as variable names because they are reserved for the language itself.

### Data Types in C

C provides various data types to store different kinds of data. Here's a comprehensive list of the main data types in C:

| Category             | Data Type              | Description                                         | Size (bytes)  | Format Specifier            |
| -------------------- | ---------------------- | --------------------------------------------------- | ------------- | --------------------------- |
| Integer Types        | `char`                 | Stores a single character or small integer          | 1             | %c (as char), %hhi (as int) |
|                      | `unsigned char`        | Stores a single character or small unsigned integer | 1             | %c (as char), %hhu (as int) |
|                      | `short` or `short int` | Stores a small integer                              | 2             | %hi                         |
|                      | `unsigned short`       | Stores a small unsigned integer                     | 2             | %hu                         |
|                      | `int`                  | Stores an integer                                   | 4             | %d or %i                    |
|                      | `unsigned int`         | Stores an unsigned integer                          | 4             | %u                          |
|                      | `long` or `long int`   | Stores a large integer                              | 4 or 8        | %ld or %li                  |
|                      | `unsigned long`        | Stores a large unsigned integer                     | 4 or 8        | %lu                         |
|                      | `long long`            | Stores a very large integer                         | 8             | %lld or %lli                |
|                      | `unsigned long long`   | Stores a very large unsigned integer                | 8             | %llu                        |
| Floating-Point Types | `float`                | Stores single-precision floating-point numbers      | 4             | %f                          |
|                      | `double`               | Stores double-precision floating-point numbers      | 8             | %lf                         |
|                      | `long double`          | Stores extended-precision floating-point numbers    | 10, 12, or 16 | %Lf                         |
| Enumerated Type      | `enum`                 | User-defined type consisting of named constants     | Usually 4     | %d (underlying type is int) |

### Integer Data Types: Range Comparison Across Operating Systems

Have you ever thought about how big numbers can get in C? This table breaks it down for you! This has all the common integer types lined up, showing how high (or low) you can count on different systems. Whether coding on Windows or Linux, 32-bit or 64-bit, this table covers you. Plus, this has thrown in the guaranteed minimum range, so you know what's safe to use everywhere. From tiny chars to long longs, it's all here in one comparison. Perfect for when you need to know if your numbers will fit or if you're curious about why your code might behave differently on different machines.

| **Data Type**      | **32-bit Windows**                                      | **64-bit Windows**                                      | **64-bit Unix/Linux**                                   | **Guaranteed Range**                                    |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| char               | -128 to 127                                             | -128 to 127                                             | -128 to 127                                             | -127 to 127                                             |
| signed char        | -128 to 127                                             | -128 to 127                                             | -128 to 127                                             | -127 to 127                                             |
| unsigned char      | 0 to 255                                                | 0 to 255                                                | 0 to 255                                                | 0 to 255                                                |
| short              | -32,768 to 32,767                                       | -32,768 to 32,767                                       | -32,768 to 32,767                                       | -32,767 to 32,767                                       |
| unsigned short     | 0 to 65,535                                             | 0 to 65,535                                             | 0 to 65,535                                             | 0 to 65,535                                             |
| int                | -2,147,483,648 to 2,147,483,647                         | -2,147,483,648 to 2,147,483,647                         | -2,147,483,648 to 2,147,483,647                         | -32,767 to 32,767                                       |
| unsigned int       | 0 to 4,294,967,295                                      | 0 to 4,294,967,295                                      | 0 to 4,294,967,295                                      | 0 to 65,535                                             |
| long               | -2,147,483,648 to 2,147,483,647                         | -2,147,483,648 to 2,147,483,647                         | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | -2,147,483,647 to 2,147,483,647                         |
| unsigned long      | 0 to 4,294,967,295                                      | 0 to 4,294,967,295                                      | 0 to 18,446,744,073,709,551,615                         | 0 to 4,294,967,295                                      |
| long long          | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | -9,223,372,036,854,775,807 to 9,223,372,036,854,775,807 |
| unsigned long long | 0 to 18,446,744,073,709,551,615                         | 0 to 18,446,744,073,709,551,615                         | 0 to 18,446,744,073,709,551,615                         | 0 to 18,446,744,073,709,551,615                         |

### A few important notes about this integer data types:

1. The value of `char` can be either signed or unsigned by default, depending on the compiler. Most platforms use signed char by default.

2. The major differences between platforms are:

   - The size of `long` on 64-bit Unix/Linux vs Windows
   - The size of pointers (not shown in the table)

3. The "Guaranteed Range" column shows the minimum range that the C standard guarantees for each type. Actual implementations often provide larger ranges.

4. All unsigned types have a minimum value of 0.

Let's break down what each one means:

#### Integer Types

- **`char`**: Stores a single character or a small integer from -128 to 127.

  ```c
  char grade = 'A';
  char small_num = 100;
  ```

- **`unsigned char`**: Stores a single character or a small unsigned integer from 0 to 255.

  ```c
  unsigned char color_code = 255;
  ```

- **`short`**: Stores a small integer, typically from -32,768 to 32,767.

  ```c
  short temperature = -15;
  ```

- **`unsigned short`**: Stores a small unsigned integer, typically from 0 to 65,535.

  ```c
  unsigned short distance = 1000;
  ```

- **`int`**: Stores an integer, typically from -2,147,483,648 to 2,147,483,647.

  ```c
  int population = 1000000;
  ```

- **`unsigned int`**: Stores an unsigned integer, typically from 0 to 4,294,967,295.

  ```c
  unsigned int large_num = 4000000000;
  ```

- **`long`**: Stores a large integer. On most systems, it's the same as `int`.

  ```c
  long big_num = 2147483647L;
  ```

- **`unsigned long`**: Stores a large unsigned integer.

  ```c
  unsigned long very_big_num = 4294967295UL;
  ```

- **`long long`**: Stores a very large integer, from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

  ```c
  long long huge_num = 9223372036854775807LL;
  ```

- **`unsigned long long`**: Stores a very large unsigned integer, from 0 to 18,446,744,073,709,551,615.
  ```c
  unsigned long long max_num = 18446744073709551615ULL;
  ```

#### Floating-Point Types

- **`float`**: Stores single-precision floating-point numbers.

  ```c
  float pi = 3.14159f;
  ```

- **`double`**: Stores double-precision floating-point numbers. More precise than `float`.

  ```c
  double precise_pi = 3.141592653589793;
  ```

- **`long double`**: Stores extended-precision floating-point numbers. Even more precise than `double`.
  ```c
  long double very_precise_pi = 3.141592653589793238L;
  ```

#### Enumerated Type

- **`enum`**: User-defined type consisting of named integer constants.
  ```c
  enum Days {MON, TUE, WED, THU, FRI, SAT, SUN};
  enum Days today = WED;
  ```

### How Variables Work with RAM

When you declare a variable in C, the computer allocates a certain amount of space in the RAM (Random Access Memory) to store the value. The amount of space depends on the data type, as shown in the table above.

Think of RAM as a big grid of memory cells, and each variable gets a specific cell (or a group of cells) to store its data. When you change the value of a variable, you're changing the data stored in that part of the memory.

### Example Code

Here's a small C program that demonstrates defining variables, assigning values, and using different data types:

```c
#include <stdio.h>

int main()
{
    // Integer types
    char grade = 'A';
    unsigned char color = 255;
    short temperature = -15;
    unsigned short distance = 1000;
    int population = 1000000;
    unsigned int large_num = 4000000000U;
    long big_num = 2147483647L;
    unsigned long very_big_num = 4294967295UL;
    long long huge_num = 9223372036854775807LL;
    unsigned long long max_num = 18446744073709551615ULL;

    // Floating-point types
    float pi = 3.14159f;
    double precise_pi = 3.141592653589793;
    long double very_precise_pi = 3.141592653589793238L;

    // Enumerated type
    enum Days {MON, TUE, WED, THU, FRI, SAT, SUN};
    enum Days today = WED;

    return 0;  // End of the program
}
```

### Wrap Up

In this article, we've broken down what variables are in C, the different data types you can use, and how to assign values to them. We covered all the basic data types in C, including various integer types, floating-point types, and even touched on enumerated types. We also discussed naming conventions, rules for creating variables, and how variables interact with your computer's memory. Understanding variables and data types is essential because they are the foundation for storing and manipulating data in your programs.

Next time, we'll dive into how to print these variables to the screen using format specifiers. Stay tuned!
