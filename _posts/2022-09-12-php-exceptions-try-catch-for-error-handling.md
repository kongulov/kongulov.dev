---
layout: post
title: "PHP Exceptions: Try Catch for Error Handling"
description: Exceptions are something that is deliberately thrown by code and is expected to be caught at some point in your application.
keywords: php coding exception try catch
image:
    path: /assets/images/posts/php-exceptions-try-catch-for-error-handling.png
    width: 850
    height: 610
    alt: Exception handling in a try catch finally block
tags: php
---

PHP 5 has a new error model that allows you to throw and catch exceptions in your application - it's a better way to handle errors than what we had in older versions of PHP.
All exceptions are instances of the `Exception` base class, which we can extend to introduce our own custom exceptions.

It is important to note here that exception handling is different from error handling.
When handling errors, we can use the `set_error_handler` function to set our custom error handling function so that whenever an error is fired, it will call our error handling function.
This way you can manage errors. However, as a rule, some kinds of errors are not recovered and stop the program execution.

On the other hand, exceptions are something that is deliberately thrown by code and is expected to be caught at some point in your application.
So we can say that exceptions are recoverable and not certain errors that are not recoverable.
If the exception being thrown is somewhere in your application, program execution continues from where the exception was caught.
And an exception that doesn't hit anywhere in your application results in an error that stops the program from running.

<h2>Exception handling flow</h2>

Let's take a look at the following diagram, which shows the general control flow of exception handling.

<div class="post-image">
    <img src="{{ site.url }}{{ page.image.path }}" alt="{{ page.image.alt }}">
</div>

Exceptions can be thrown and caught using `try` and `catch` blocks.
You are responsible for throwing exceptions if something happens that is not expected.
Let's take a quick look at the main flow of exception handling as shown in the following pseudocode.

```php
// code before the try-catch block
 
try {
  // code
 
  // if something is not as expected
      // throw exception using the "throw" keyword
 
  // code, it won't be executed if the above exception is thrown
} catch (Exception $e) {
  // exception is raised and it'll be handled here
  // $e->getMessage() contains the error message
}
 
// code after the try-catch block, will always be executed
```

Most of the time, when you're dealing with exceptions, you end up using a pattern, as shown in the snippet above.
You can also use a `finally` block along with `try` and `catch` blocks, but we'll get to that later in this article.

The `try` block is the one used when you suspect that your code may be throwing an exception.
You should always wrap such code using `try` and `catch`.

<h2>Throwing an exception</h2>

The exception can be thrown by the function you are calling, or you can use the throw keyword to manually throw the exception.
For example, you can validate some input before performing any operation and `throw` an exception if the input is invalid.

The important thing to note here is that if you throw an exception, but you haven't defined a `catch` block that should handle that exception, it will result in a fatal error.
Therefore, you need to make sure that you always define a `catch` block if you are throwing exceptions in your application.

When an exception is caught in a `catch` block, the `Exception` object contains the error message that was thrown using the `throw` keyword.
The variable `$e` in the example above is an instance of the `Exception` class, so it has access to all the methods of that class.
In this block, you must define your own exception handling logic - what exactly do you want to do with the error you catch.

In the next section, we'll take a real world example to understand how exception handling works.

<h2>Example from a real project</h2>

In this section, we'll build a real-life example to demonstrate PHP's exception handling.

Let's say you've created an application that loads the application's configuration from a `config.php` file.
Now it's important that the `config.php` file is present when your application boots up. So your application cannot run if the `config.php` file is missing.
So this is the ideal case to throw an exception and tell the user that they need to fix the problem.

```php
try {
    // init bootstrapping phase
 
    $config_file_path = "config.php";
 
    if (!file_exists($config_file_path))
    {
      throw new Exception("Configuration file not found.");
    }
  
    // continue execution of the bootstrapping phase
} catch (Exception $e) {
    echo $e->getMessage();
    die();
}
```

As you can see in the example above, we check for the existence of a `config.php` file at the start of the bootstrap phase.
If the `config.php` file is found, execution continues normally. On the other hand, we will throw an exception if the `config.php` file does not exist.
Also, we would like to stop execution if there is an exception!

This is how you can use exceptions in your applications.
You should throw exceptions for exceptional use cases - you should not unnecessarily throw exceptions for errors such as invalid user credentials,
incorrect directory access permissions, etc. that you often expect. They are better handled by general error messages in the normal application's thread of execution.

So this was an example of exception handling using the default `Exception` class.
In the next section, we'll look at how you can extend the main `Exception` class and create your own custom exceptions in your application.

<h2>How to create custom exceptions</h2>

In this section, we will discuss how you can create custom exceptions in your applications.
In fact, we'll extend the example we just discussed in the previous section to demonstrate custom exceptions.

In the previous example, we chose a configuration exception using the default `Exception` class.
This is fine if you just want to deal with the error message.
However, sometimes you want to do a little more depending on the type of exception being thrown.
This is why custom exclusions are useful.

Let's move on to the previous example as shown in the following snippet.

```php
class ConfigFileNotFoundException extends Exception {}
 
try {
    // init bootstrapping phase
 
    $config_file_path = "config.php";
 
    if (!file_exists($config_file_path))
    {
      throw new ConfigFileNotFoundException("Configuration file not found.");
    }
  
    // continue execution of the bootstrapping phase
} catch (ConfigFileNotFoundException $e) {
    echo "ConfigFileNotFoundException: ".$e->getMessage();
    // other additional actions that you want to carry out for this exception
    die();
} catch (Exception $e) {
    echo $e->getMessage();
    die();
}
```

First, we have defined the `ConfigFileNotFoundException` class, which extends the main `Exception` class.
It now becomes our custom exception class and we can use it when we want to throw a `ConfigFileNotFoundException` in our application.

We then used the `throw` keyword to throw a `ConfigFileNotFoundException` in case the `config.php` file does not exist.
However, the important difference is in the `catch` block.
As you can see, we have defined two `catch` blocks, and each block is used to catch a different type of exception.

The first one gets exceptions of type `ConfigFileNotFoundException`.
So, if the exception being thrown is of type `ConfigFileNotFoundException`, this block will be executed.
If the exception type does not match any particular `catch` block, it will match the latter, which should catch all generic exception messages.

<h2>Finally block</h2>

In this section, we'll look at how you can use the `finally` keyword along with `try` and `catch` blocks.
Sometimes you want to execute a piece of code regardless of whether an exception was thrown.
This is where you can use the `finally` block, since the code you place in the `finally` block will always be executed after the try and catch blocks have been executed,
regardless of whether an exception was thrown.

Let's try to understand this using the following example.

```php
try {
  // code
 
  // if something is not as expected
      // throw exception using the "throw" keyword
 
  // code, it won't be executed if the above exception is thrown
} catch (Exception $e) {
  // exception is raised and it'll be handled here
  // $e->getMessage() contains the error message
} finally {
  // code, it'll always be executed
}
```

The code in the above example is almost the same with the only exception that we have added a `finally` block after the `catch` block.
And, as we discussed, the code in this block will always be executed.

The typical use cases we could come up with for using a `finally` block are usually related to resource cleanup.
For example, if you opened a database connection or file on disk in a `try` block, you can perform cleanup tasks such as closing the connection in a `finally` block, as this is guaranteed.

Exception handling is a key coding skill, and you should consider how exceptions will be handled as you develop your applications.
This will help you detect and recover from unexpected errors in your application. Hope this post inspires you to write better error handling code!