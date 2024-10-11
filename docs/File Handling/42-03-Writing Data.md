---
sidebar_position: 45
slug: /writing-data-to-files-in-c
title: "Writing Data to Files"
---

# Writing Data to Files in C: Saving Information for the Future

We've already covered how to **read** data from files in C, but what about **writing** data? Whether you want to save a list of exam scores, store your assignment results, or keep track of group project tasks, writing data to files is just as important as reading it.

In this guide, we'll explore how to write data into files using three key functions:

- `fprintf()`
- `fputs()`
- `fwrite()`

Let's dive into each one!

---

## Writing With `fprintf()`

The `fprintf()` function is super handy when you want to write **formatted data** to a file, similar to how you’d use `printf()` to output to the console.

### Syntax of `fprintf()`:

```c
fprintf(file_pointer, "format_specifiers", values);
```

- **file_pointer**: This points to the file where the data will be written.
- **format_specifiers**: These define the data type you’re writing, such as `%d` for integers, `%s` for strings, and `%c` for characters.
- **values**: The actual values you want to write to the file.

### Writing a Simple String

Let's say you want to save the name of your university in a file.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("abc.txt", "w");  // Open a file for writing
    fprintf(fp, "%s", "University of Colombo");
    fclose(fp);  // Close the file after writing
    return 0;
}
```

This code creates (or overwrites) a file called `abc.txt` and writes `"University of Colombo"` inside it.

### Writing Multiple Data Types

Now let’s say you want to write more than just a string. You also want to add the year and a letter representing a course.

```c
#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("text_file.txt", "w");
    fprintf(fp, "%s %d %c", "University of Colombo", 2024, 'C');
    fclose(fp);
    return 0;
}
```

In this case, you’re writing a string (`%s`), an integer (`%d`), and a character (`%c`).  
Maybe you've noticed that for strings, we use double quotes (`"`), for characters, we use single quotes (`'`), and for integers, we don’t use any quotes at all. Keep that in mind!

---

## Writing With `fputs()`

`fputs()` is another way to write strings to a file, but unlike `fprintf()`, it doesn’t format the output. It’s more straightforward, making it ideal when you're just writing plain text without worrying about format specifiers.

### Syntax of `fputs()`:

```c
fputs(string, file_pointer);
```

- **string**: The string you want to write.
- **file_pointer**: The file where the string will be written.

### Writing a String Using `fputs()`

```c
#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("notes.txt", "w");
    fputs("This is a simple note.", fp);
    fclose(fp);
    return 0;
}
```

In this example, we’re writing a simple sentence to `notes.txt`. Notice that `fputs()` doesn’t require format specifiers—just the string and the file pointer.

---

## Writing With `fwrite()` (For Binary Data)

Next, we have `fwrite()`. This function is used for writing binary data to files, so it’s more advanced. In most cases, you'll use `fprintf()` or `fputs()` to write text, but if you're dealing with raw data (like saving a complex data structure), `fwrite()` is your go-to.

### Syntax of `fwrite()`:

```c
fwrite(pointer, size_of_element, number_of_elements, file_pointer);
```

- **pointer**: A pointer to the data to be written.
- **size_of_element**: Size (in bytes) of each element.
- **number_of_elements**: Number of elements to write.
- **file_pointer**: The file where data will be written.

### Writing Binary Data Using `fwrite()`

```c
#include <stdio.h>

int main() {
    int data = 2024;
    FILE *fp;

    fp = fopen("binary_data.bin", "wb");  // Open for writing in binary mode
    fwrite(&data, sizeof(int), 1, fp);
    fclose(fp);
    return 0;
}
```

This example writes the integer `2024` to a binary file. **Don’t worry too much about binary files just yet!** It’s more advanced, and you’ll rarely need it unless you're dealing with complex data types.

---

## File Opening Modes

Before you start writing to a file, you need to open it using `fopen()`. There are several modes you can use depending on what you want to do:

- `"w"`: Opens a file for writing. If the file exists, it’s **overwritten**.
- `"a"`: Opens a file for writing in **append** mode. If the file exists, new data is added to the end.
- `"wb"`: Opens a file for writing in **binary** mode.

Each of the functions we’ve discussed (`fprintf()`, `fputs()`, and `fwrite()`) works with these modes. Here’s a quick example of how they differ:

```c
#include <stdio.h>

int main() {
    FILE *fp;

    // Example using fprintf() in "w" mode
    fp = fopen("data.txt", "w");
    fprintf(fp, "%s", "Writing with fprintf");
    fclose(fp);

    // Example using fputs() in "a" mode
    fp = fopen("data.txt", "a");
    fputs("\nAppended with fputs", fp);
    fclose(fp);

    // Example using fwrite() in "wb" mode (binary writing)
    int num = 1234;
    fp = fopen("data.bin", "wb");
    fwrite(&num, sizeof(int), 1, fp);
    fclose(fp);

    return 0;
}
```

In this code, we use `fprintf()` to write, `fputs()` to append text, and `fwrite()` to handle binary data.

---

## `fprintf()` vs `fputs()` vs `fwrite()`

| **Function** | **Best For**           | **Handles**              | **Usage**                  |
| ------------ | ---------------------- | ------------------------ | -------------------------- |
| `fprintf()`  | Writing formatted text | Strings, integers, chars | Great for formatted output |
| `fputs()`    | Writing plain text     | Strings                  | Simple, no format needed   |
| `fwrite()`   | Writing binary data    | Raw data                 | Ideal for binary files     |

---

## A Full Example: Managing Your Group Project

Let’s walk through a full example where you’re writing and reading data related to a group project. You want to save the names of group members and their assigned tasks into a file. Later, you’ll read the data back to display the project details.

```c
#include <stdio.h>

int main() {
    char name[100];
    int age;
    char course[100];

    // Get user input
    printf("Enter your full name: ");
    gets(name); // Using gets() to read the full name with spaces

    printf("Enter your age: ");
    scanf("%d", &age); // Using scanf to read an integer

    getchar(); // To consume the newline character left by scanf

    printf("Enter your course name: ");
    gets(course); // Using gets() to read the course name with spaces

    // Writing the input to a file
    FILE *fp;
    fp = fopen("student_info.txt", "w");
    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    fprintf(fp, "Name: %s\nAge: %d\nCourse: %s\n", name, age, course);
    fclose(fp);

    // Reading the file back and displaying the content
    char buffer[200];
    fp = fopen("student_info.txt", "r");
    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    printf("\n--- Reading Data from File ---\n");
    while (fgets(buffer, sizeof(buffer), fp)) {
        printf("%s", buffer);
    }
    fclose(fp);

    return 0;
}
```

## Explanation:

- **Using `gets(name)` and `gets(course)`**: The `gets()` function is used to read strings with spaces for the user's full name and course.
- **`scanf("%d", &age)`**: This reads the user's age as an integer.
- **`getchar()`**: This is used to consume the leftover newline character from the `scanf()` call, ensuring that the following `gets()` call works correctly.
- **File Operations**: The user's data is written to `student_info.txt` and then read back from the file to display.

### Output shoud be like...

```
Enter your full name: John Doe
Enter your age: 22
Enter your course name: Computer Science

--- Reading Data from File ---
Name: John Doe
Age: 22
Course: Computer Science
```

This example is a simple way to manage tasks in a group project, demonstrating both writing and reading data from a file.

## Final Thoughts

Writing data to files is a vital skill in C programming, especially when you're working on projects that need to store or process data. Whether it's storing your group project's tasks or saving a list of scores, you now have the tools to do it!

Experiment with `fprintf()`, `fputs()`, and `fwrite()`, and explore the different file opening modes. By practicing these, you’ll become much more comfortable with file handling in C.
