---
sidebar_position: 15
slug: /conditional-operator-in-c
title: "Conditional Operator"
---

# The Conditional Operator in C: Making Quick Decisions with Ternary Magic

So, we’ve already discussed unary operators. Now, let's shift gears to something equally important: **conditional operators**. To make things a bit more fun, I’ll explain this with a little story.

Imagine you’re in university, and you have two assignments due. You’re juggling between working on both, and you need to decide which one to finish first. Your thinking process might go like this:

- If the math assignment is due first, you’ll work on that.
- Otherwise, you’ll work on the computer science assignment.

This type of decision-making is what **conditional operators** help you do in C programming. They allow the program to choose between two values based on a condition, just like you deciding which assignment to work on first based on the due dates.

### The Syntax of Conditional Operators

The conditional operator is often called the **ternary operator** because it works with three operands. Here’s the basic syntax:

```c
condition ? value_if_true : value_if_false;
```

Let’s break this down:

1. **Condition**: This is the decision-making part. It can be something like `x > y` or `age >= 18`.
2. **Value if true**: What happens if the condition is true.
3. **Value if false**: What happens if the condition is false.

### Making a decision about one of our assignments

In the examples bellow, you might have noticed we’re using something called `if` to check whether certain conditions are true or false. This is known as an `if statement`, and it’s a way to make decisions in our programs. The condition inside the parentheses is evaluated, and if it’s true, the code inside the curly braces {} runs. If it’s false, the code is skipped. Don’t worry too much about this for now; we’ll dive deeper into how if statements work later in another article!

Let’s apply this to our assignment scenario:

```c
int math_due = 5; // days until the math assignment is due
int cs_due = 3;   // days until the CS assignment is due

int task = (math_due < cs_due) ? 1 : 2;

if (task == 1) {
    printf("Work on the math assignment first.\n");
} else {
    printf("Work on the CS assignment first.\n");
}
```

In this example:

- If `math_due` is less than `cs_due`, you’ll work on the math assignment (`task` is set to 1).
- Otherwise, you’ll work on the CS assignment (`task` is set to 2).

### In-Depth Look at Conditional Operators

The conditional operator is super handy because it condenses an `if-else` statement into a single line. Let’s look at the same logic with a more traditional `if-else` block:

```c
if (math_due < cs_due) {
    task = 1;
} else {
    task = 2;
}
```

As you can see, the conditional operator does the same thing in a more compact way.

### Real-World Use Case: Grading System

Let’s take another real-world scenario—assigning grades based on a student’s marks. We can use the conditional operator here to decide whether a student has passed or failed:

```c
int marks = 65;

char *result = (marks >= 50) ? "Pass" : "Fail";

printf("You %s the exam.\n", result);
```

Here:

- If the student’s marks are 50 or more, they pass.
- Otherwise, they fail.

### The `*` Mark in Variables

You might notice that in some examples, like the one above, certain variables (with strings) have a `*` next to them, such as `char *result`. Don't mind that too much for now! It’s related to **pointers** in C, and we’ll cover this topic in detail in another article. For now, just focus on how the conditional operator works, and we’ll circle back to the `*` mark soon.

### Fun Fact: The Birth of the Ternary Operator

The ternary operator was introduced in **ALGOL 68**, a language developed in the late 1960s. It was one of the first languages to introduce this kind of compact decision-making. C inherited this operator, and it has since become a staple in many modern programming languages.

### A Real-World Use Case

Imagine you’re working on software that decides whether a student qualifies for a scholarship. The conditions might be based on their GPA:

```c
float gpa = 3.8;
char *scholarship = (gpa >= 3.5) ? "Eligible" : "Not Eligible";

printf("The student is %s for the scholarship.\n", scholarship);
```

If the GPA is 3.5 or higher, the student is eligible for the scholarship; otherwise, they are not. Simple, right?

### What’s Next?

Conditional operators are all about making decisions in your programs. They’re especially useful for simplifying code and making it easier to read. Keep practicing with them, and soon they’ll become second nature. In our next article, we’ll continue exploring the world of C programming by diving into **loops and control flow**!

---

### Code Example

Here’s a code example with everything we’ve covered. You can run this on your system:

```c
#include <stdio.h>

int main() {
    // Assignment decision example
    int math_due = 5;
    int cs_due = 3;
    int task = (math_due < cs_due) ? 1 : 2;

    if (task == 1) {
        printf("Work on the math assignment first.\n");
    } else {
        printf("Work on the CS assignment first.\n");
    }

    // Grading system example
    int marks = 65;
    char *result = (marks >= 50) ? "Pass" : "Fail";
    printf("You %s the exam.\n", result);

    // Scholarship eligibility example
    float gpa = 3.8;
    char *scholarship = (gpa >= 3.5) ? "Eligible" : "Not Eligible";
    printf("The student is %s for the scholarship.\n", scholarship);

    return 0;
}
```

---

Conditional operators are a neat way to make decisions in your code. They’re compact, easy to use, and will save you from writing long `if-else` statements. Give them a try in your own projects, and you’ll see how handy they are!
