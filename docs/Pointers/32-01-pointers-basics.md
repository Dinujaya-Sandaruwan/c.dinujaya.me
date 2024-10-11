---
sidebar_position: 33
slug: /pointers-in-c
title: "Pointers (Basics)"
---

# Pointers in C Programming: Direct Access to Memory Mastery

Now that we’ve wrapped up arrays, it’s time to dive into one of the trickiest yet most powerful concepts in C: **pointers**. Pointers can seem confusing at first, but once you get the hang of them, you’ll see how important they are when working with memory in C.

But before we get into the details of pointers, let’s briefly remind ourselves about **variables** and how they work.

## A Quick Recap: Variables and Memory

When we declare a variable in C, we essentially give a name to a memory location. For example, if we declare:

```c
int age = 20;
```

The computer sets aside a block of memory to store the value `20`, and we can refer to that memory location using the name `age`. The key takeaway here is that the **variable** represents a specific place in the computer’s memory where the value is stored.

So, what do we do if we need to work directly with these memory locations? That’s where pointers come into play!

## What Exactly Are Pointers?

Simply put, a pointer is a **variable that stores the memory address** of another variable. Instead of holding a value like `20` or `100`, it holds the location where that value is stored.

To declare a pointer in C, we use the asterisk (`*`) symbol. Here’s an example:

```c
int *ptr;
```

This line declares `ptr` as a pointer to an integer, meaning it will hold the memory address of an `int` variable. But right now, it’s not pointing to anything yet.

### The `&` and `*` Symbols: What Do They Mean?

- **`&`**: This symbol is the **address-of operator**. It’s used to get the memory address of a variable. For example, `&age` gives us the memory address of the variable `age`.
- **`*`**: This is the **dereference operator**. It’s used to access the value stored at a specific memory address. When we have a pointer, using `*` allows us to get the value from the memory location it’s pointing to.

Let’s connect this with an example:

```c
int age = 20;
int *ptr = &age;
```

Here, `ptr` is storing the memory address of `age`. So, `ptr` is now pointing to the location in memory where `age` is stored. If we want to access the value stored at that location, we can use `*ptr`. That would give us the value `20`, the same as `age`.

## Variables vs. Pointers

Let’s break down the difference between variables and pointers:

- **Variables**: Hold values directly. For example, `age` holds the value `20`.
- **Pointers**: Hold **memory addresses** of other variables. For example, `ptr` holds the address of `age`, which is something like `0x7ffeabc12345`.

In a way, you can think of a pointer as a piece of paper with directions (the memory address), and the variable as the actual destination (the value stored in memory).

### Why Do We Use Pointers?

So why bother with pointers when we already have variables? Well, pointers are super useful when you need **direct control over memory**, especially for tasks like:

1. **Dynamic memory allocation**: We’ll get into this later, but pointers allow us to work with memory more efficiently.
2. **Function arguments**: Pointers are essential when we need to modify a variable inside a function (we'll see this in action when we talk about `scanf` next).
3. **Efficient data manipulation**: Instead of copying entire data structures, we can just pass around pointers, saving memory and time.

## Why the `&` in `scanf`?

We’ve used the `scanf` function before to take input from users, like this:

```c
scanf("%d", &age);
```

But why the `&`? Well, remember that `scanf` needs to store the user input in the variable. To do that, it needs to know **where** the variable is in memory. By using `&age`, we’re giving `scanf` the **address** of `age`, so it knows exactly where to store the input. Without the `&`, it wouldn’t work because `scanf` would have no idea where to put the value!

## Why Do We Really Need Pointers?

Imagine you’re organizing a university group project. There’s a shared Google Drive link to all the documents. Instead of copying the files to everyone’s computer (which takes up space), you just share the link with them. Now, everyone can access the same files without duplicating them.

In programming terms, the actual files are like variables, and the shared link is like a pointer to those files. Pointers allow you to access data without duplicating it, saving memory and making things more efficient.

Here’s a simple example in code:

```c
#include <stdio.h>

void updateMarks(int *marksPtr) {
    *marksPtr += 10; // Adding 10 marks to the original value
}

int main() {
    int marks = 80;
    printf("Original Marks: %d\n", marks);

    // Passing the memory address of 'marks' to the function
    updateMarks(&marks);

    printf("Updated Marks: %d\n", marks);
    return 0;
}
```

### How It Works:

- We define a function `updateMarks` that takes a pointer to an integer (`int *marksPtr`).
- Inside the function, we use the `*` operator to modify the value at the memory location.
- In `main`, we pass the **address** of `marks` using `&marks`, allowing the function to directly update the original value.

In this example, instead of passing a copy of `marks`, we pass its memory address, allowing us to change the value inside the function. This is like giving the “shared link” (pointer) instead of a copy of the “file” (value).

Don’t worry if this concept feels a little tricky. We haven’t covered functions in detail yet, but we’ll get to that soon enough. Just know that pointers are super handy when you want to change values outside of their original scope!

## Final Thoughts

Pointers may seem a bit daunting at first, but once you understand how they allow you to interact directly with memory, they become a powerful tool in your C programming toolkit. From managing memory efficiently to passing values between functions, pointers are essential.

Here’s the complete code example for you to try out:

```c
#include <stdio.h>

int main() {
    int age = 20;
    int *ptr = &age;

    // Display the value of 'age'
    printf("Age: %d\n", age);

    // Display the memory address of 'age'
    printf("Memory Address of age: %p\n", &age);

    // Display the memory address stored in 'ptr'
    printf("Pointer (ptr) is pointing to address: %p\n", ptr);

    // Display the value stored at the memory location ptr is pointing to
    printf("Value pointed to by ptr: %d\n", *ptr);

    return 0;
}
```

This code demonstrates how pointers work with memory and shows the difference between variables and pointers. Play around with it, and soon enough, you’ll master pointers!

Stay tuned, we’ll be covering more exciting topics next!
