---
sidebar_position: 43
slug: /file-handling-in-c
title: "File Handling (Basics)"
---

# 34. File Handling in C: Opening the Gateway to Persistent Data

In the previous article, we talked about variable scopes and how variables have a limited lifetime within a program. But what if we want our data to stick around even after the program stops running? That’s where file handling comes in!

When you write a program, the data stored in variables and arrays is temporary. It disappears as soon as the program finishes. But with file handling in C, you can store data in a file on your computer, so it lasts long after the program has ended. Whether you’re storing results from your latest project or important data you need to reference later, file handling is a critical tool for making data persist.

Now, let’s get an overview of how file handling works in C, and how to get started by simply opening files.

## What Exactly is a File?

Think of a file as a storage box on your computer’s memory. It holds data that you want to access later, even when your program is no longer running. A file is saved in the computer's secondary memory (like your hard drive or SSD), which makes it permanent until you decide to delete it.

There are two types of files we deal with in C:

### 1. **Text Files**

- Text files are readable in a standard text editor like Notepad or a code editor like VS Code. They store data as plain text with characters divided by lines using a special character like `\n` (newline).

### 2. **Binary Files**

- Binary files, on the other hand, store data in the form of binary numbers (zeros and ones). They’re efficient for storing large amounts of data but are not human-readable.

For now, we’ll stick with how to open files and handle them before we dive into reading and writing data.

## Steps to Process a File in C

Opening and working with files in C involves four key steps:

1. **Declare a File Pointer Variable**: This pointer keeps track of the file you’re working with.
2. **Open the File Using `fopen()`**: The `fopen()` function is used to open a file. If the file exists, it’s opened; if not, you can create a new one.
3. **Process the File**: Perform any operation (like reading or writing) on the file using appropriate functions such as `fprintf()`, `fscanf()`, `fgetc()`, and so on.
4. **Close the File Using `fclose()`**: Once you’re done with the file, use `fclose()` to close it and free up resources.

Let’s dive deeper into two essential functions: `fopen()` and `fclose()`.

## Understanding `fopen()` in Depth

### What is `fopen()`?

The `fopen()` function is used to open a file in C. It establishes a connection between the program and the file on your disk. Depending on the mode specified, the file can be opened for reading, writing, or both.

Here’s the syntax of the `fopen()` function:

```c
FILE *fopen(const char *filename, const char *mode);
```

- `filename`: This is the name (and path) of the file you want to open.
- `mode`: The mode defines the purpose of opening the file (e.g., reading, writing, appending).

When `fopen()` is called, it returns a pointer to a `FILE` object, which is used for all file-related operations. If the file cannot be opened, it returns `NULL`.

### File Open Modes

As we saw earlier, there are different modes for opening a file. Here's a quick recap of some common modes:

| **Mode** | **Description**                                                           |
| -------- | ------------------------------------------------------------------------- |
| `"r"`    | Open an existing file for reading.                                        |
| `"w"`    | Create a file for writing. If it exists, it’s overwritten.                |
| `"a"`    | Open or create a file for appending (adding data at the end).             |
| `"r+"`   | Open an existing file for reading and writing.                            |
| `"w+"`   | Create a file for reading and writing. Existing contents are overwritten. |
| `"a+"`   | Open or create a file for reading and appending.                          |

### Example: Using `fopen()`

```c
FILE *file;
file = fopen("example.txt", "r");
if (file == NULL) {
    printf("Error: File could not be opened\n");
    exit(1);
}
```

- **Return Value**: If the file is opened successfully, `fopen()` returns a pointer to the file. If it fails (e.g., the file doesn’t exist in read mode), it returns `NULL`.
- **Error Handling**: In the example above, we check if `file` is `NULL`. If it is, an error message is printed, and we use `exit(1)` to terminate the program. `exit()` is a standard C function used to end a program when something goes wrong.

### Path Names in `fopen()`

- **Relative Path**: You can open files located in the current directory using a relative path like `"data.txt"`.
- **Absolute Path**: To specify the full path to the file, use an absolute path like `"/home/user/data.txt"` on Linux, or `"C:\\Users\\Name\\data.txt"` on Windows.

## Understanding `fclose()` in Depth

### What is `fclose()`?

Once you’re done working with a file, you should close it using the `fclose()` function. This is important because leaving files open can lead to memory leaks or errors in the program.

Here’s the syntax of the `fclose()` function:

```c
int fclose(FILE *file);
```

- `file`: This is the file pointer to the file that you want to close.

### How `fclose()` Works

- `fclose()` closes the file and ensures that all data associated with it is properly saved.
- If you don't close a file after opening it, data may not be saved correctly, and the file could remain in an unstable state.

### Example: Using `fclose()`

```c
fclose(file);
```

After finishing any operation with the file (reading, writing, etc.), you should always call `fclose()`. If you forget to close a file, it might cause your program to crash, or worse, data loss!

### Return Value of `fclose()`

`fclose()` returns 0 on success, and EOF (End Of File) on failure. However, it’s rare to check the return value of `fclose()` unless there is a specific need.

### Why Closing Files is Important

When you open a file, system resources are used. Not closing a file means you’re keeping these resources occupied, which can lead to system performance issues if you have many files open at once. Always ensure to close files once you're done with them.

## File Handling Functions in C

To manage files in C, there are specific functions you need to use. Here’s a handy table of the most commonly used file handling functions:

| **Function** | **Description**                                           |
| ------------ | --------------------------------------------------------- |
| `fopen()`    | Opens a new file or an existing file                      |
| `fprintf()`  | Writes formatted data to a file                           |
| `fscanf()`   | Reads formatted data from a file                          |
| `fputc()`    | Writes a character to a file                              |
| `fgetc()`    | Reads a character from a file                             |
| `fclose()`   | Closes the file                                           |
| `fseek()`    | Sets the file pointer to a given position within the file |
| `fputw()`    | Writes an integer to a file                               |
| `fgetw()`    | Reads an integer from a file                              |
| `ftell()`    | Returns the current position of the file pointer          |
| `rewind()`   | Sets the file pointer to the beginning of the file        |

These functions give you full control over how you interact with files in C.

## Example: Opening and Closing a File in C

Here’s a simple C program that opens a file and prints a message to confirm the file was opened successfully, then closes it.

```c
#include <stdio.h>
#include <stdlib.h>  // For exit()

int main() {
    FILE *file;

    // Step 1: Open the file in read mode
    file = fopen("example.txt", "r");

    // Step 2: Check if the file was opened successfully
    if (file == NULL) {
        printf("Error! Could not open file\n");
        exit(1);  // Exit the program if the file cannot be opened
    }

    printf("File opened successfully!\n");

    // Step 3: Process the file (we're just opening it for now)

    // Step 4: Close the file
    if (fclose(file) != 0) {
        printf("Error closing the file\n");
    } else {
        printf("File closed successfully!\n");
    }

    return 0;
}
```

### What’s Happening Here?

1. **Declaring the File Pointer**: We declare `FILE *file;` to hold the file pointer.
2. **Opening the File**: Using `fopen()`, we attempt to open `"example.txt"` in **read mode** (`"r"`).
3. **Error Handling**: If the file doesn’t exist, `fopen()` returns `NULL`. In that case, we print

an error and exit the program. 4. **Closing the File**: After confirming that the file was opened, we close it using `fclose()`.

### Conclusion

File handling in C is essential when you want your data to persist after your program ends. By simply opening files now, you're preparing to read, write, and manage data in upcoming articles. You’ve learned how to open files, handle errors, and the different modes available in C for file handling.

In the next article, we’ll explore how to read data from a file. Stay tuned as we dive deeper into making data storage more flexible and powerful!
