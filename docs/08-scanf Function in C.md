---
sidebar_position: 8
slug: /scanf-function-in-c
title: "Scanf Function"
---

# Scanf Function in C: Reading User Input like a Pro

Let’s take a step forward and talk about how you can get input from a user in C. If you’ve tried writing programs that only use `printf()`, you might have realized something — all it does is _output_ information. But what if you want to ask the user for some information, like their age or name? That’s where the `scanf()` function comes into play.

### What is `scanf()`?

Simply put, the `scanf()` function in C is used to _read_ input from the user. It works hand-in-hand with `printf()`. If `printf()` is the way to communicate _to_ the user, `scanf()` is how you communicate _with_ the user.

Here’s how `scanf()` looks:

```c
scanf("format specifier", &variable);
```

- **"format specifier"**: This tells `scanf()` what type of data to expect, just like we saw with `printf()`. If you're expecting an integer, use `%d`, if it’s a float, use `%f`, and so on.
- **&variable**: This is where the magic happens. The **`&`** symbol (called the "address-of" operator) tells the computer where to store the input. Don’t worry too much about pointers just yet — we’ll dig into that later. For now, just remember to use `&` before the variable when using `scanf()`.

### Why Do We Need `scanf()`?

In most real-world programs, you don’t want everything to be hard-coded. For example, let’s say you want the program to ask the user for their name and age instead of pre-defining them in the code. `scanf()` lets you get this input dynamically, so the program can behave differently based on what the user provides.

### How Does `scanf()` Work?

Let’s break down a simple example:

```c
int age;
scanf("%d", &age);
```

In this case:

- `%d` tells `scanf()` to expect an integer.
- `&age` tells the program to store the user’s input in the variable `age`.

The user will type a number (like 25), and that number will be stored in the variable `age` for you to use later in the program.

### Why the `&` Symbol?

When using `scanf()`, the `&` symbol is essential. It’s used to tell the function where in memory to store the user’s input. Without the `&`, `scanf()` won’t know where to put the input, and things can go wrong. Just think of it as giving `scanf()` the “address” of the variable. Don’t worry about understanding memory and pointers just yet—we’ll get into that soon.

Here’s a simple analogy: imagine `scanf()` as a mail delivery service. The format specifier tells it what type of package (data) to expect, and the `&` symbol is like giving the delivery service the exact address (memory location) where you want the package delivered (stored).

### A simple Program: Using `scanf()` and `printf()`

Let’s put this into a complete program. This example will ask the user for their name and age, and then print it back.

```c
#include <stdio.h>

int main() {
    char name[20];  // A string to store the user's name
    int age;        // An integer to store the user's age

    // Ask for the user's name
    printf("What is your name? ");
    scanf("%s", name);  // Notice no & for the string, we’ll explain why later!

    // Ask for the user's age
    printf("How old are you? ");
    scanf("%d", &age);  // Using & because age is an integer

    // Output the information back to the user
    printf("Hello, %s! You are %d years old.\n", name, age);

    return 0;
}
```

#### Let’s break it down:

1. We first declare two variables: `name` to store the user’s name (a string), and `age` to store their age (an integer).
2. We use `scanf()` twice:
   - The first time to read the user’s name (`%s` is the format specifier for a string).
   - The second time to read their age (`%d` for an integer). Notice we use `&` with the `age` variable, but not with `name`. That’s because `name` is already a special kind of variable, called an array, and arrays behave a bit differently when it comes to memory. We’ll talk more about that when we discuss strings.
3. Finally, we use `printf()` to print out a personalized message based on the input.

### Sample Output

Here’s what the program would look like when you run it:

```
What is your name? John
How old are you? 25
Hello, John! You are 25 years old.
```

### Key Takeaways

- **`scanf()`** is used to take input from the user.
- You must use the **`&`** symbol before most variables to tell the program where to store the input.
- Use **format specifiers** like `%d`, `%s`, and `%f` to tell `scanf()` what kind of input to expect.
- **Strings** behave a little differently when it comes to input, and you don’t need to use `&` with them (we’ll dive into that more later).

That’s all for now! We’ll explore more about `scanf()` and other input techniques as we go further into C programming. In the meantime, try playing around with the code and see what happens when you change the format specifiers or input different types of data.
