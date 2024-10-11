---
sidebar_position: 39
slug: /strings-in-c
title: "Strings"
---

# Strings in C: More Than Just Characters

When we finished talking about functions, we now step into the world of strings. Strings are everywhere—think about all the names, messages, or even the answers you write in a computer science exam. At their core, strings are just a collection of characters. For example:

- `"Hello"`
- `"Colombo University"`

But in C, handling strings is a bit different than in languages like Python, which makes string handling a bit more technical but also interesting.

## What’s a String in C?

In C programming, a string is essentially a collection of characters stored inside a null-terminated character array. Sounds complicated? It’s really not. Let’s break it down.

### The Null Character (`'\0'`)

When you store a string in C, an invisible character is automatically added at the end. This character is the **null character**, written as `'\0'`. The null character is like a **full stop** at the end of a sentence—it marks the end of the string so the computer knows where the string finishes.

### Why Is the Null Character Important?

If the null character weren’t there, how would the computer know when to stop reading the characters? Without it, the program might keep reading into other parts of memory, which could lead to data leaks or security vulnerabilities—yikes!

For example, imagine if your program keeps reading past the end of your string and accidentally exposes your login information. That’s why the null character is crucial in preventing memory-related issues.

### Declaring a Strings

Here’s how you can declare a string in C using a character array:

```c
char university[6] = "Hello";
```

Notice something odd? You might be thinking, “But `Hello` only has five characters. Why did we declare an array of size 6?” That’s because the sixth spot is reserved for the null character (`'\0'`). Whenever you declare a string, you need to add 1 to the length of the array to accommodate this null character.

### Space: Yes, It’s Also a Character

Spaces between words are also characters. For instance, `"Colombo University"` is a string with **23 characters** (including spaces) plus the null character at the end.

### Printing a String in C

Now, how do we actually display these strings? Easy! You can use `printf` or `puts`. Let’s break them down.

```c
printf("Hello, World!\n");  // Works just like printf in Python
```

Alternatively, you can use `puts` to print a string followed by a newline:

```c
puts("Hello, World!");  // Similar to printf, but always adds a new line at the end
```

### Inputting a String: `scanf` vs `gets`

When it comes to taking input, you have two common choices: `scanf` and `gets`. But there’s a major difference!

- **`scanf`:** Reads input until it encounters a space.
- **`gets`:** Reads the entire line, including spaces (but it's dangerous and insecure, so avoid it in modern code).

```c
char name[30];
scanf("%s", name);  // Stops at the first space
```

For input with spaces, you could use:

```c
char name[30];
fgets(name, 30, stdin);  // Safer than gets, and reads the entire line
```

### Declaring Strings Without Specifying Length

You don’t have to specify the length of a string right away. Here’s how:

```c
char name[] = "C Programming";
```

In this case, the compiler automatically calculates the length and adds the null character.

## String Functions in C

C provides some handy functions to manipulate strings. To use them, don’t forget to include the string header:

```c
#include <string.h>
```

Here are a few essential ones:

1. **`strlen`:** Returns the length of a string, excluding the null character.

   ```c
   int len = strlen("Hello");  // Returns 5
   ```

2. **`strcpy`:** Copies one string into another.

   ```c
   char source[] = "Colombo";
   char destination[20];
   strcpy(destination, source);  // destination now contains "Colombo"
   ```

3. **`strcmp`:** Compares two strings. Returns:

   - `0` if the strings are the same,
   - A positive value if the first string is greater,
   - A negative value if the second string is greater.

   ```c
   strcmp("apple", "banana");  // Returns a negative value because "apple" is less than "banana"
   ```

4. **`strcat`:** Concatenates (joins) two strings.

   ```c
   char first[20] = "Hello, ";
   char second[] = "World!";
   strcat(first, second);  // first now contains "Hello, World!"
   ```

### Why Does `strcmp` Return 1 or -1?

In C, `strcmp` uses the difference between ASCII values to compare characters. This is why it returns positive, negative, or zero values. If two strings are identical, `strcmp` returns 0, meaning they are equal. If not, it returns the difference between the ASCII values of the first different character.

## Wrapping It All Together

Here’s a complete code block covering all the topics we’ve discussed:

```c
#include <stdio.h>
#include <string.h>

int main() {
    // Declaring and initializing strings
    char greeting[6] = "Hello";
    char university[] = "Colombo University";

    // Printing strings
    printf("Greeting: %s\n", greeting);
    puts("University: Colombo University");

    // String length (excluding null character)
    int length = strlen(greeting);
    printf("Length of greeting: %d\n", length);

    // String copy
    char copy[20];
    strcpy(copy, greeting);
    printf("Copy of greeting: %s\n", copy);

    // String comparison
    int comparison = strcmp("apple", "banana");
    printf("Comparison between apple and banana: %d\n", comparison);

    // String concatenation
    char sentence[30] = "Hello, ";
    strcat(sentence, "World!");
    printf("Concatenated sentence: %s\n", sentence);

    return 0;
}
```

In this example, we’ve declared and manipulated strings, explored functions like `strlen`, `strcpy`, `strcmp`, and `strcat`, and printed everything out. You can try this code on your computer and see how it works!

# Strings in C vs. Strings in Python

If you’ve worked with Python before, you might be wondering how strings in C compare to Python’s strings. The truth is, strings are much easier to work with in Python, but learning how they work in C gives you a deeper understanding of how computers manage data at a lower level.

### 1. **String Declaration**

- **In Python:**
  Strings in Python are simple. You can just declare them without worrying about size or null characters. Python automatically manages the memory and adds any necessary details behind the scenes.

  ```python
  greeting = "Hello"
  university = "Colombo University"
  ```

  That’s it. No extra work required!

- **In C:**
  As we saw earlier, you need to declare the string as a **character array** and make sure to reserve enough space for the **null character** (`'\0'`), which marks the end of the string.

  ```c
  char greeting[6] = "Hello";  // Null character '\0' at the end
  char university[] = "Colombo University";  // Size is automatically determined
  ```

### 2. **String Length**

- **In Python:**
  You can easily get the length of a string using the built-in `len()` function, which returns the number of characters (including spaces).

  ```python
  length = len("Hello")  # Returns 5
  ```

- **In C:**
  You use the `strlen` function from the `string.h` library, but note that it doesn’t count the null character.

  ```c
  int length = strlen("Hello");  // Returns 5, just like Python
  ```

### 3. **String Concatenation**

- **In Python:**
  Concatenating (joining) two strings is simple. You just use the `+` operator.

  ```python
  greeting = "Hello"
  name = "World"
  full_greeting = greeting + ", " + name + "!"  # "Hello, World!"
  ```

- **In C:**
  You need to use the `strcat` function to concatenate two strings. Remember, C strings are arrays, so you have to be careful about the size of the destination array.

  ```c
  char greeting[20] = "Hello, ";
  char name[] = "World!";
  strcat(greeting, name);  // greeting now contains "Hello, World!"
  ```

### 4. **String Comparison**

- **In Python:**
  Python allows you to directly compare two strings using comparison operators like `==` and `!=`.

  ```python
  if "apple" == "banana":
      print("They are the same")
  else:
      print("They are different")  # Output: They are different
  ```

- **In C:**
  You need to use the `strcmp` function to compare two strings. It doesn’t return `True` or `False` like Python. Instead, it returns:

  - `0` if the strings are equal,
  - A positive number if the first string is greater,
  - A negative number if the second string is greater.

  ```c
  if (strcmp("apple", "banana") == 0) {
      printf("They are the same\n");
  } else {
      printf("They are different\n");  // Output: They are different
  }
  ```

### 5. **String Mutability**

- **In Python:**
  Python strings are **immutable**, meaning once you create a string, you can’t change it. Instead, you create a new string if you need to modify it.

  ```python
  word = "Hello"
  word = word.replace("H", "J")  # New string: "Jello"
  ```

- **In C:**
  C strings are **mutable** because they’re stored in character arrays. You can change individual characters within the array.

  ```c
  char word[] = "Hello";
  word[0] = 'J';  // Now the string is "Jello"
  ```

### 6. **String Input**

- **In Python:**
  You can get string input from the user easily using the `input()` function.

  ```python
  name = input("Enter your name: ")
  ```

- **In C:**
  You use `scanf` or `fgets` for string input. However, `scanf` only reads up to the first space, while `fgets` reads an entire line (including spaces).

  ```c
  char name[30];
  fgets(name, 30, stdin);  // Safely reads a string with spaces
  ```

---

### Quick Comparison Summary

| Feature              | Python                            | C                                         |
| -------------------- | --------------------------------- | ----------------------------------------- |
| String Declaration   | No size or null character worries | Requires size and null character (`'\0'`) |
| String Length        | `len()`                           | `strlen()`                                |
| String Concatenation | `+` operator                      | `strcat()`                                |
| String Comparison    | `==`                              | `strcmp()`                                |
| String Mutability    | Immutable                         | Mutable                                   |
| String Input         | `input()`                         | `scanf()` or `fgets()`                    |

---

### Code Comparison Example

Let’s compare Python and C with a real example:

- **Python Example:**

  ```python
  # Python string handling
  greeting = "Hello"
  name = "World"
  full_greeting = greeting + ", " + name + "!"
  print(full_greeting)

  # String length
  print("Length of greeting:", len(greeting))

  # String comparison
  if "apple" == "banana":
      print("They are the same")
  else:
      print("They are different")
  ```

- **C Example:**

  ```c
  #include <stdio.h>
  #include <string.h>

  int main() {
      // C string handling
      char greeting[20] = "Hello";
      char name[] = "World!";
      strcat(greeting, ", ");
      strcat(greeting, name);
      printf("%s\n", greeting);

      // String length
      printf("Length of greeting: %lu\n", strlen(greeting));

      // String comparison
      if (strcmp("apple", "banana") == 0) {
          printf("They are the same\n");
      } else {
          printf("They are different\n");
      }

      return 0;
  }
  ```

Both pieces of code accomplish similar tasks but use very different methods due to how strings are treated in each language. C requires more manual work, such as managing memory and null characters, while Python abstracts much of this, making it easier to use for beginners.
