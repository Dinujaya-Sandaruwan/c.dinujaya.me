---
sidebar_position: 44
slug: /reading-data-from-files-in-c
title: "Reading Data from Files"
---

# Reading Data from Files in C: Accessing External Information

We’ve already covered how to open and close files in C. Now, let’s move on to a crucial skill: **reading data from files**. Whether it’s reading saved configurations, processing a list of students, or retrieving your project scores, file reading is fundamental.

In C, we have three primary ways to read data from a file:

- `fscanf()`
- `fgets()`
- `fread()`

Each function has its strengths, depending on the type of data you’re working with. Let’s walk through each of these with practical examples.

## 1. **The fscanf() Function**

`fscanf()` works similarly to `scanf()`, which you may have used to take input from the keyboard. The key difference is that `fscanf()` reads from a file instead.

### Syntax of `fscanf()`:

```c
fscanf(file_pointer, "format_specifiers", variable_addresses);
```

- **file_pointer**: A pointer to the file from which data is being read.
- **format_specifiers**: Specifies the type of data you're reading (like `%d` for integers or `%s` for strings).
- **variable_addresses**: Variables where the read data will be stored.

### Reading Data Using `fscanf()`

Here’s a simple example where we read an integer from a file.

```c
#include <stdio.h>

int main() {
    int num;
    FILE *fp;

    fp = fopen("data.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    fscanf(fp, "%d", &num);
    printf("Number from file: %d\n", num);

    fclose(fp);
    return 0;
}
```

This code reads a number from the file `data.txt` and prints it out.

### Reading Multiple Types of Data

Let’s say we have a file `my_details.txt` with a name and an age. We can use `fscanf()` to read both and print them out.

```c
#include <stdio.h>

int main() {
    char name[10];
    int age;
    FILE *fp;

    fp = fopen("my_details.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    fscanf(fp, "%s %d", name, &age);
    printf("%s is %d years old.\n", name, age);

    fclose(fp);
    return 0;
}
```

For example, if `my_details.txt` contains:

```
Alice 21
```

The output will be:

```
Alice is 21 years old.
```

### Why No `&` With Strings?

When we read a string with `%s`, you might notice we don’t use the `&` operator like we do with integers. This is because strings in C are arrays, which are already pointers. So when you write `char name[10]`, the name of the array (`name`) is itself a pointer to the first character.

## 2. **The fgets() Function**

If you want to read entire lines of text, `fgets()` is a better option than `fscanf()`. It reads a string, including spaces, until it reaches a newline character or the specified limit of characters.

### Syntax of `fgets()`:

```c
fgets(buffer, size, file_pointer);
```

- **buffer**: An array where the read line is stored.
- **size**: Maximum number of characters to read.
- **file_pointer**: The file from which data is read.

### Reading a Line Using `fgets()`

Here’s how you can read a full line from a file.

```c
#include <stdio.h>

int main() {
    char line[50];
    FILE *fp;

    fp = fopen("story.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    fgets(line, 50, fp);
    printf("Line from file: %s", line);

    fclose(fp);
    return 0;
}
```

If `story.txt` contains:

```
Once upon a time, there was a C programmer.
```

The output would be:

```
Line from file: Once upon a time, there was a C programmer.
```

`fgets()` stops reading when it hits either the newline character or the 50th character, whichever comes first. This makes it a solid choice for reading lines of text.

## 3. **The fread() Function** (For Binary Files)

Now, let’s introduce `fread()`. This function is used to read data from binary files (files that contain non-text data, like images, compiled programs, or raw data). You won’t use this as often in text processing, but it’s handy when you need to work with raw binary data.

**However, don’t worry too much** about binary files just yet! Reading binary data is a more advanced topic. For now, focus on text files, but feel free to explore this later when you feel comfortable.

### Syntax of `fread()`:

```c
fread(pointer, size_of_each_element, number_of_elements, file_pointer);
```

- **pointer**: Where the data will be stored.
- **size_of_each_element**: The size (in bytes) of each element to read.
- **number_of_elements**: How many elements to read.
- **file_pointer**: The file to read from.

### Reading Binary Data Using `fread()`

```c
#include <stdio.h>

int main() {
    int num;
    FILE *fp;

    fp = fopen("data.bin", "rb");
    if (fp == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    fread(&num, sizeof(int), 1, fp);
    printf("Number from file: %d\n", num);

    fclose(fp);
    return 0;
}
```

In this example, `fread()` reads a single integer from a binary file (`data.bin`). Notice that we use `"rb"` as the mode when opening the file.

## What is the `"rb"` Mode?

When you open a file in `"rb"` mode, you're opening the file for reading **binary data**.

- **"r"**: Means “read” mode, where you’re allowed to read the contents of the file.
- **"b"**: Stands for **binary**, meaning you’re treating the file as a binary file rather than a text file.

Why does this matter? In text mode (`"r"`), the C library might interpret certain characters differently depending on the operating system. For example, Windows uses `\r\n` for a newline, while Unix-based systems (like macOS or Linux) use just `\n`. In binary mode, the file is read exactly as it is, byte by byte, without any interpretation or conversion.

Most of the time, when you're just reading text, you'll stick with the regular `"r"` mode. Use `"rb"` when you’re working with binary data like images or compiled code.

## `fscanf()` vs `fgets()` vs `fread()`

| **Function** | **Best For**                                     | **Type of Data**                          |
| ------------ | ------------------------------------------------ | ----------------------------------------- |
| `fscanf()`   | Reading formatted input from a text file.        | Formatted text (e.g., int, float, string) |
| `fgets()`    | Reading an entire line or block of text.         | Plain text                                |
| `fread()`    | Reading raw binary data or large blocks of text. | Binary data or raw text                   |

So, which one should you use? Here’s a quick guide:

- If you know the structure of the data (e.g., numbers followed by strings), `fscanf()` is your go-to.
- If you need to read whole lines or paragraphs of text, `fgets()` is the easiest option.
- For binary files or raw data, you’ll need `fread()`, but don’t worry too much about this for now!

## Full Example: Reading Data from a File

Let’s put everything together. Suppose you have a file `students.txt` with student names and their ages:

```
Alice 22
Bob 24
Charlie 21
```

Here’s a C program to read and display the data:

```c
#include <stdio.h>

int main() {
    char name[10];
    int age;
    FILE *fp;

    fp = fopen("students.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return 1;
    }

    while (fscanf(fp, "%s %d", name, &age) != EOF) {
        printf("%s is %d years old.\n", name, age);
    }

    fclose(fp);
    return 0;
}
```

## What's Next?

Now that you know how to read data from files in C, you're ready to move on to **writing data to files**. That’s where things get even more practical!
