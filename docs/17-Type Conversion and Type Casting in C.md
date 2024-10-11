---
sidebar_position: 17
slug: /type-conversion-and-type-casting-in-c
title: "Type Conversion and Type Casting"
---

# Type Conversion and Type Casting: Navigating Between Data Types in C

Alright, we’ve come a long way! Now that we’ve talked about operators in C, let’s dive into something quite essential for making sure your code works as you expect — _type conversion_ and _type casting_. It's a fascinating topic, and once you get the hang of it, you’ll see how handy it is when working with different kinds of data.

### Hierarchy of Data Types

Before we get into conversions, let’s talk about the **hierarchy of data types** in C. Think of it like a ladder — some data types are “bigger” (or more important in terms of memory and precision), and others are “smaller.” A fun way to remember this hierarchy is:

**Double floats long into short char.**

It sounds quirky, but it sticks! Here’s what it actually represents:

1. **double** (biggest)
2. **float**
3. **long**
4. **int**
5. **short**
6. **char** (smallest)

So why is there a hierarchy? Well, it’s all about memory and precision. A `double` takes up more space and can hold more precise values (especially useful for complex mathematical operations), while a `char` is just a single byte used to store a character or small integer.

### Implicit Casting vs Explicit Casting

Now, let’s talk about _implicit_ and _explicit_ casting — they’re like two sides of the same coin, but with a key difference in how much control you have.

#### Implicit Casting: The “Automatic” Conversion

Implicit casting happens **automatically** when you’re moving from a smaller data type to a larger one. Why? Because C knows that a bigger box can easily hold a smaller object without losing information. So, you don’t have to worry about it.

For example, say you’ve got an `int` (which is smaller in the hierarchy) and you’re assigning it to a `float` (which is larger). C will handle it for you, no questions asked:

```c
int score = 95;
float average = score;  // Automatically converts int to float
```

No drama here! The `int` just becomes a `float`, and life goes on. Easy, right?

#### Explicit Casting: When You Take Charge

Explicit casting is needed when you’re going **from a larger type to a smaller one**. Here, you’ve got to be careful because you might lose data, and C won’t do this automatically for you. You’ve got to step in and make sure the conversion happens the way you want it.

Let’s say you have a `float` but need to convert it to an `int`:

```c
float marks = 95.75;
int final_marks = (int) marks;  // Explicitly casting float to int
```

Notice how we used `(int)` to tell C, “Hey, I know what I’m doing, convert this `float` to `int`.” But be warned: this will chop off the decimal part! So `95.75` becomes `95` — no rounding.

### Why Do We Care About This?

Type conversion is a big deal because it helps avoid bugs, especially when mixing data types in your code. Imagine you’re writing a program to calculate grades and your GPA is stored as a `double`. But when you print it, the professor only wants to see the integer part. Without proper casting, you could end up with unexpected results — and professors don’t like that!

### A Little History Lesson

Fun fact: Type conversion has roots in the early days of C’s creation by Dennis Ritchie. Back in the 1970s, computers were a lot more limited in terms of memory, so converting between types efficiently was key to getting things to work without wasting resources. Today, type conversion is still crucial — it allows modern programs to run smoothly, no matter what kind of data you're juggling.

### Examples of Common Conversions

Let’s walk through a few examples of how these conversions work:

1. **Converting `int` to `float` (Implicit Casting)**  
   When you convert a smaller type to a larger type, it’s automatic.

   ```c
   int credits = 30;
   float total_credits = credits;  // credits is automatically converted to float
   ```

2. **Converting `float` to `int` (Explicit Casting)**  
   This is where you lose precision because the decimal part is chopped off.

   ```c
   float gpa = 3.85;
   int final_gpa = (int) gpa;  // Explicit conversion from float to int
   ```

3. **Converting `char` to `int` (Implicit Casting)**  
   Characters can be stored as integers, where each character has a corresponding ASCII value.

   ```c
   char grade = 'A';
   int ascii_value = grade;  // 'A' is implicitly converted to its ASCII value, 65
   ```

4. **Converting `int` to `char` (Explicit Casting)**  
   Here, you’re converting an integer to a character. Just be cautious that the integer corresponds to a valid ASCII character!
   ```c
   int num = 70;
   char letter = (char) num;  // Converts 70 to 'F'
   ```

### What's Next?

Now that we’ve tackled type conversion and casting, we’re ready to dive into something even more exciting — control structures! These are the building blocks that let you decide what your program does based on conditions, loops, and more. But that’s for next time!

### Complete Code Example

Here’s a small program that combines all the concepts we’ve discussed, so you can try it out on your own machine:

```c
#include <stdio.h>

int main() {
    int credits = 30;          // Implicit cast from int to float
    float total_credits = credits;

    float gpa = 3.85;          // Explicit cast from float to int
    int final_gpa = (int) gpa;

    char grade = 'A';          // Implicit cast from char to int
    int ascii_value = grade;

    int num = 70;              // Explicit cast from int to char
    char letter = (char) num;

    // Output results
    printf("Credits (float): %.2f\n", total_credits);
    printf("Final GPA (int): %d\n", final_gpa);
    printf("Grade 'A' as ASCII: %d\n", ascii_value);
    printf("Number 70 as letter: %c\n", letter);

    return 0;
}
```

Try running this and see how each conversion works in action. You’ll get to see firsthand how C handles implicit and explicit type conversions!
