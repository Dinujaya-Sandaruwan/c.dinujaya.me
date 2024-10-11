---
sidebar_position: 20
slug: /switch-statement-in-c
title: "Switch Statement"
---

# Switch Statements in C: Simplifying Multi-Case Decisions

Now that we've covered control structures like the `if`, `else`, and `else if` statements, it's time to look at another way to make decisions in your C programs: the **switch statement**. While `if` statements are great for handling conditions, there are situations where the `switch` statement is a cleaner and more efficient choice.

### What is a Control Structure?

As a quick reminder, control structures manage the _order_ of code execution. They help decide when certain blocks of code run. We've already explored **conditional** control structures (like `if` statements), which allow decisions based on conditions. Now, we'll dive into **switch**, a powerful tool for making multiple decisions based on the value of a single expression.

### The Switch Statement: When One Choice Leads to Many Paths

A `switch` statement allows you to evaluate a single expression and take different actions depending on its value. It's like standing at a crossroads where each direction leads to a different outcome. Let’s look at how it works in practice:

#### Basic Structure

Here’s a basic structure of a `switch` statement:

```c
switch (expression) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // code for any other value
}
```

The expression inside the `switch` is evaluated, and then compared to each `case` value. If a match is found, the corresponding block of code runs. If none of the cases match, the `default` block will be executed, if it's provided.

### When Should You Use `switch` Over `if`?

Both `if` and `switch` are used to control the flow of the program, but they work best in different situations.

- **Use `if`** when you need to evaluate **complex conditions**. For example, if you're checking multiple conditions involving operators like `>`, `<`, or logical operators (`&&`, `||`), `if` is a better fit.
- **Use `switch`** when you're evaluating **a single expression** with multiple specific values (like integers or characters). If you're testing whether a variable equals one of many possible values, `switch` makes your code more readable.

Here’s a little story to make it clearer:

Imagine you're deciding what meal to order at the campus cafeteria based on the day of the week. With an `if` statement, you’d have to write something like:

```c
if (day == 'Monday') {
    printf("You get a sandwich!\n");
} else if (day == 'Tuesday') {
    printf("You get pizza!\n");
} else if (day == 'Wednesday') {
    printf("You get a salad!\n");
}
// And so on...
```

But with a `switch`, you could write it like this:

```c
switch (day) {
    case 'Monday':
        printf("You get a sandwich!\n");
        break;
    case 'Tuesday':
        printf("You get pizza!\n");
        break;
    case 'Wednesday':
        printf("You get a salad!\n");
        break;
    default:
        printf("You get a surprise meal!\n");
}
```

Here, you can see that `switch` is much cleaner when you're checking a single value with multiple outcomes.

### Understanding the Importance of `break`

You’ll notice that each `case` ends with a `break` statement. This is **important** because, without the `break`, the program will continue executing all the cases below it, even if a match is found! This is known as **fall-through behavior**. By the way, there will be a dedicated article about `break`statement in the future.

Here's an example of what happens without a `break`:

```c
switch (day) {
    case 'Monday':
        printf("You get a sandwich!\n");
    case 'Tuesday':
        printf("You get pizza!\n");
    case 'Wednesday':
        printf("You get a salad!\n");
}
```

If the value of `day` is `'Monday'`, the program will print **all** the statements — sandwich, pizza, and salad! That’s why `break` is crucial. It tells the program to exit the switch once a match is found and executed.

### Let’s use the switch statement in a more practical way

Imagine you’re writing a program to determine the grade a student receives based on their score. Here’s how it could look:

```c
#include <stdio.h>

int main() {
    int score = 85;
    char grade;

    switch (score / 10) {
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 6:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    printf("Your grade is: %c\n", grade);
    return 0;
}
```

In this case, we’re using `score / 10` to determine the grade bracket. If the result is 9 or 10 (for scores between 90 and 100), the student gets an `A`. The `default` case handles any scores below 60, assigning a grade of `F`.

### Key Points to Remember

1. **Switch is best for multiple decisions**: When you need to check several values for a single variable, `switch` is simpler than a long chain of `if`-`else if` statements.
2. **Use integers or characters**: The expression in a `switch` must evaluate to an integer or character. You can't use floating-point numbers (like `float` or `double`) or other data types in a switch.
3. **Default case**: This runs when no other case matches. It's optional, but it's good practice to include it to handle unexpected values.
4. **Break is essential**: It stops the execution from falling into the next case. Always remember to use it unless you specifically want multiple cases to execute.

### A Little History Lesson

> The `switch` statement was inspired by the idea of a multi-way branch in assembly language, where specific values of a register would direct the program to different locations. Dennis Ritchie, the creator of C in the early 1970s, introduced the `switch` to give C a clean and efficient way of managing multi-way decisions, making it easier to write readable and maintainable code.

### Complete Code Example

Here’s a complete example combining everything we’ve talked about:

```c
#include <stdio.h>

int main() {
    int choice;

    printf("Menu:\n");
    printf("1. Open File\n");
    printf("2. Save File\n");
    printf("3. Exit\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("File opened!\n");
            break;
        case 2:
            printf("File saved!\n");
            break;
        case 3:
            printf("Exiting program...\n");
            break;
        default:
            printf("Invalid choice, please try again.\n");
    }

    return 0;
}
```

In this example, we’re using a `switch` statement to handle a simple menu. If the user selects an option not listed (like 4 or 5), the `default` case informs them that it’s an invalid choice.

This article should give you a solid understanding of when and how to use the `switch` statement in C. It’s a handy tool that makes decision-making cleaner when you have multiple possibilities to check.
