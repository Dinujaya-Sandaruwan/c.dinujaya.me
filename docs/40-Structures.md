---
sidebar_position: 40
slug: /structures-in-c
title: "Structures"
---

# Structures in C: Your Personal Blueprint for Organizing Data

You’ve already gotten comfortable with arrays and strings, right? Now, let’s take a step forward and talk about something even cooler: **structures**. Imagine you’re working on an app where you need to keep track of different student records—name, age, grade, etc. Wouldn’t it be easier if you could group all that information under one umbrella? That’s exactly what **structures** allow you to do!

### What is a Structure?

In simple terms, a **structure** is a collection of different variables grouped together under a single name. Think of it as a blueprint. Just like an architect’s blueprint outlines how a building should be constructed, a structure in C defines how different pieces of data should be grouped together.

#### The Blueprint Analogy

Let’s say you’re designing a database for students in your course. Each student has a name, age, student ID, and GPA. You could store each of these variables separately in different arrays, but that’s messy and hard to manage. Instead, you can define a **structure** to represent a student, and then create variables of that structure to store each student’s data. Structures allow you to treat related pieces of information as a unit.

> And here’s something interesting: In object-oriented languages like Python or Java, you’d use **objects** to represent this data. However, C doesn’t have objects. Instead, we use structures to group data logically. It's not the same thing, but it gets the job done efficiently.

### Defining a Structure: The Blueprint

Defining a structure is like writing out the **blueprint**. You specify all the different pieces of data (called **members**) you want to group together. Let’s write a simple example for a **Student** structure:

```c
struct Student {
    char name[50];
    int age;
    int student_id;
    float gpa;
};
```

- `struct` is a keyword in C that tells the compiler you're defining a structure.
- The name of the structure is `Student`.
- Inside the curly braces `{}`, we define the **members** of the structure: `name`, `age`, `student_id`, and `gpa`.

This structure can now represent any student.

### Declaring a Variable Using a Structure

Once you've defined the structure, you can create variables of that type. Here’s how you can declare a `Student` variable:

```c
struct Student john;
```

Here, `john` is now a variable that can hold information about a student.

### Accessing and Storing Data in Structures

To access or modify the members of a structure, we use the **dot operator (`.`)**. Let's fill in some information for our student `john`:

```c
strcpy(john.name, "John Doe");
john.age = 21;
john.student_id = 123456;
john.gpa = 3.75;
```

- `strcpy(john.name, "John Doe");` copies the string "John Doe" into the `name` field of `john`.
- `john.age = 21;` assigns 21 to the `age` field.
- `john.student_id = 123456;` assigns the student ID.
- `john.gpa = 3.75;` assigns the GPA.

### Storing Input Data in Structures

You can also take input from the user and store it in a structure. Let’s say we want to ask the user for this information:

```c
struct Student student;

printf("Enter student's name: ");
scanf("%s", student.name);  // Assuming the name is a single word

printf("Enter student's age: ");
scanf("%d", &student.age);

printf("Enter student's student ID: ");
scanf("%d", &student.student_id);

printf("Enter student's GPA: ");
scanf("%f", &student.gpa);
```

### Initializing Structure Members at Declaration (Method 01)

Up until now, we’ve been assigning values to structure members _after_ declaring the structure variable. But there’s a more efficient way to do it. You can **initialize** the structure members at the time of declaration itself.

It’s like filling out a form when you first meet someone. Instead of having to go back later to add their name, age, and other details, you can record all of it at once!

Here’s how you do it:

```c
struct Student {
    char name[50];
    int age;
    int student_id;
    float gpa;
};

// Initializing the structure at declaration
struct Student john = {"John Doe", 21, 123456, 3.75};
```

In this example:

- `"John Doe"` is assigned to `name`.
- `21` is assigned to `age`.
- `123456` is assigned to `student_id`.
- `3.75` is assigned to `gpa`.

This method is super handy when you know the values in advance and want to avoid repetitive assignments. It’s like filling in all the necessary information for a student in one go!

### Important Points to Note

- The values you provide during initialization should follow the order in which the structure members were declared. In this case, `name` comes first, followed by `age`, `student_id`, and `gpa`.
- You can also partially initialize a structure. The members you don’t specify will automatically be set to their default values (e.g., `0` for numbers, `\0` for strings). For example:

```c
struct Student jane = {"Jane Doe", 19}; // student_id and gpa will be 0
```

Here, `student_id` and `gpa` are not initialized, so they will default to `0`.

### Complete Example with Initialization

Let’s tie everything together, including initialization during declaration:

```c
#include <stdio.h>
#include <string.h>

// Defining the structure
struct Student {
    char name[50];
    int age;
    int student_id;
    float gpa;
};

int main() {
    // Initializing structure at declaration
    struct Student john = {"John Doe", 21, 123456, 3.75};

    // Printing the stored data
    printf("Student Name: %s\n", john.name);
    printf("Age: %d\n", john.age);
    printf("Student ID: %d\n", john.student_id);
    printf("GPA: %.2f\n", john.gpa);

    return 0;
}
```

As you can see, we assigned values to `john` right when we declared it. No need for multiple assignments afterward. You can initialize as many structure variables as you want this way!

### Declaring Structure Variables with the Definition (Method 02)

In C, you can also declare structure variables directly at the time of defining the structure, which is quite handy when you want to immediately start working with multiple instances of that structure.

Imagine you’re setting up a form to collect details about students. Instead of defining the structure and then declaring variables separately, you can declare them right in the structure definition. Here's an example:

```c
struct Student {
    char name[50];
    int age;
    float height;
    float weight;
    char district[20];
} s1, s2, s3;
```

In this case:

- `s1`, `s2`, and `s3` are declared as variables of the `Student` structure type right when the structure is defined.
- You can now access each of these variables and store or retrieve data.

#### How to Use This in Practice

Now, let’s add some student details right away. We can assign values to `s1`, `s2`, and `s3` just like we did before:

```c
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float height;
    float weight;
    char district[20];
} s1, s2, s3; // Declaring structure variables

int main() {
    // Assigning values to s1
    strcpy(s1.name, "John Doe");
    s1.age = 21;
    s1.height = 5.9;
    s1.weight = 75.5;
    strcpy(s1.district, "Colombo");

    // Assigning values to s2
    strcpy(s2.name, "Jane Smith");
    s2.age = 22;
    s2.height = 5.6;
    s2.weight = 65.3;
    strcpy(s2.district, "Kandy");

    // Assigning values to s3
    strcpy(s3.name, "Tom Brown");
    s3.age = 20;
    s3.height = 6.0;
    s3.weight = 80.0;
    strcpy(s3.district, "Galle");

    // Printing details of s1
    printf("Student 1: %s, Age: %d, Height: %.1f, Weight: %.1f, District: %s\n",
            s1.name, s1.age, s1.height, s1.weight, s1.district);

    // Printing details of s2
    printf("Student 2: %s, Age: %d, Height: %.1f, Weight: %.1f, District: %s\n",
            s2.name, s2.age, s2.height, s2.weight, s2.district);

    // Printing details of s3
    printf("Student 3: %s, Age: %d, Height: %.1f, Weight: %.1f, District: %s\n",
            s3.name, s3.age, s3.height, s3.weight, s3.district);

    return 0;
}
```

### Explanation

- Here, the `Student` structure is defined with fields like `name`, `age`, `height`, `weight`, and `district`.
- We declared three variables, `s1`, `s2`, and `s3`, right after the structure definition. This means we can use them to store data immediately.
- For each student, we assign values to the respective fields (`name`, `age`, etc.) and then print them out.

This approach makes it easy to declare multiple variables of the same structure type at once without having to repeat the declaration process.

### Why Do We Need Structures?

Structures are essential when you want to group related data types together. Think of structures as custom data types. In our case, instead of having multiple separate variables for a student’s name, age, and GPA, we can group all that data into one structure and manage it easily. This becomes crucial when working with large, complex datasets.

### How Structures Are Used in Real Life

Let’s take a real-world example of how structures can be useful.

Imagine you’re creating an app to manage a sports club’s inventory. For each piece of equipment, you need to store its name, ID number, quantity in stock, and price. Instead of having four different arrays for these four properties, you can define a structure to keep everything neat and tidy:

```c
struct Equipment {
    char name[50];
    int id;
    int quantity;
    float price;
};
```

Now, every time you need to add a new piece of equipment, you just create a new variable of type `Equipment` and store all its data together. You could even create an array of structures to manage multiple items:

```c
struct Equipment inventory[100];
```

This array can now hold up to 100 pieces of equipment, each with its own name, ID, quantity, and price.

### Defining a Structure Prototype

If you want to declare your structure at the top of your program but define it later, you can use a **structure prototype**. It’s a forward declaration, just like how function prototypes work:

```c
struct Student;  // Prototype

// Some code here...

struct Student {  // Now you define the structure
    char name[50];
    int age;
    int student_id;
    float gpa;
};
```

### Complete Example

Here’s a full example that ties everything we talked about:

```c
#include <stdio.h>
#include <string.h>

// Defining the structure
struct Student {
    char name[50];
    int age;
    int student_id;
    float gpa;
};

int main() {
    // Declaring a structure variable
    struct Student john;

    // Storing data in the structure
    strcpy(john.name, "John Doe");
    john.age = 21;
    john.student_id = 123456;
    john.gpa = 3.75;

    // Printing the stored data
    printf("Student Name: %s\n", john.name);
    printf("Age: %d\n", john.age);
    printf("Student ID: %d\n", john.student_id);
    printf("GPA: %.2f\n", john.gpa);

    return 0;
}
```

---

### Why Do We Use Structures?

Without structures, managing related data becomes complicated and error-prone. Imagine handling hundreds of students' records with individual variables for each student’s name, age, ID, and GPA. It would be chaos! Structures offer a way to logically group data, making your programs cleaner and easier to manage.

In a nutshell, structures allow you to:

- Group related data logically.
- Simplify the management of complex datasets.
- Create cleaner, more readable code.

That’s why structures are like blueprints—they organize different types of data into a single package, much like how blueprints organize various aspects of a building.
