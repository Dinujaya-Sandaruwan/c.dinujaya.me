---
sidebar_position: 4
slug: /comments-and-keywords
title: "Comments and Keywords"
---

# Cracking the Code: Comments and Keywords in C Programming

When you're coding, it's important to make your code easy to understand, not just for you but for anyone who might read it in the future. This is where _comments_ come in. They are bits of text in your code that the compiler ignores, but they help explain what your code is doing. Alongside comments, there are _keywords_ in C that have special meanings and can't be used for anything else in your program. Let’s explore both!

### How to Write Single-Line Comments

In C, you can write single-line comments using `//`. Everything after `//` on that line is treated as a comment and won’t affect your code.

```c
// This is a single-line comment
printf("Hello, World!");  // This prints a message to the screen
```

Pretty simple, right? Single-line comments are great for quick notes or explaining what a particular line or small block of code does.

### How to Write Multi-Line Comments

When you want to write longer comments that span multiple lines, you use `/* */`. Everything between `/*` and `*/` is treated as a comment, no matter how many lines it covers.

```c
/*
   This is a multi-line comment.
   You can write detailed explanations here,
   and it won’t affect the code.
*/
printf("This is still working!");
```

This is especially useful when you need to explain more complex sections of your code.

### A Little History About Comments in C

Fun fact: In the original C language, the `//` single-line comment style didn’t exist! That’s right—it was added later with the C99 standard (released in 1999). Before that, programmers could only use the `/* */` style for comments. It was a much-requested feature because `//` comments make code easier to read and maintain.

### What Are Keywords in C?

Keywords are reserved words in C that have special meanings. You can’t use them for variable names, function names, or anything else. They are the core building blocks of the language, and each one serves a specific purpose.

For example, you’ve probably seen `int` before in C:

```c
int main() {
    return 0;
}
```

Here, `int` is a keyword that tells the program you're working with an integer type.

### List of Keywords in C

Here’s a table of all the keywords in C:

| Keyword    | Purpose                                                            |
| ---------- | ------------------------------------------------------------------ |
| `auto`     | Declares automatic variables (rarely used)                         |
| `break`    | Exits out of a loop or switch statement                            |
| `case`     | Defines a case in a switch statement                               |
| `char`     | Declares a character variable                                      |
| `const`    | Declares a constant variable                                       |
| `continue` | Skips the rest of the loop and starts a new iteration              |
| `default`  | Default case in a switch statement                                 |
| `do`       | Starts a do-while loop                                             |
| `double`   | Declares a double-precision floating-point variable                |
| `else`     | Executes alternative code if an `if` condition is false            |
| `enum`     | Declares an enumerated type                                        |
| `extern`   | Declares a global variable that’s visible to all files             |
| `float`    | Declares a floating-point variable                                 |
| `for`      | Starts a for loop                                                  |
| `goto`     | Jumps to a labeled part of the program (avoid using)               |
| `if`       | Checks a condition                                                 |
| `int`      | Declares an integer variable                                       |
| `long`     | Declares a long integer                                            |
| `register` | Suggests storing a variable in a CPU register                      |
| `return`   | Returns a value from a function                                    |
| `short`    | Declares a short integer                                           |
| `signed`   | Declares a signed type (can hold negative values)                  |
| `sizeof`   | Returns the size of a variable or type                             |
| `static`   | Preserves a variable’s value between function calls                |
| `struct`   | Declares a structure                                               |
| `switch`   | Starts a switch statement                                          |
| `typedef`  | Creates a new name for a type                                      |
| `union`    | Declares a union (a special data type)                             |
| `unsigned` | Declares an unsigned type (only positive values)                   |
| `void`     | Declares a function that doesn’t return a value                    |
| `volatile` | Tells the compiler that a variable’s value may change unexpectedly |
| `while`    | Starts a while loop                                                |

### Using Comments and Keywords Together

Let’s combine what we’ve learned so far! Here's a simple program that demonstrates both single-line and multi-line comments, along with some keywords:

```c
#include <stdio.h>

// The main function is where our program starts
int main()
{
    int num = 10;  // Declare an integer variable

    /*
       We are going to check if the number is
       greater than 5 using an if-else statement.
    */
    if (num > 5) {
        printf("The number is greater than 5\n");  // This line prints a message
    }
    else {
        printf("The number is 5 or less\n");
    }

    return 0;  // End the program and return control to the operating system
}
```

### Wrap Up

In this article, we covered the basics of writing comments in C, both single-line and multi-line. We also explored _keywords_, the special words that C uses to understand what you want to do in your program. Remember, writing clear comments makes your code easier to understand, both for you and anyone else reading it. And keywords are the foundation of C—each one has a specific role that helps you write efficient and logical programs!

Now, you’re equipped to write cleaner, more understandable C code.
