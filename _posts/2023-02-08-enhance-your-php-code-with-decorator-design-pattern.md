---
layout: post
title: Enhance Your PHP Code with Decorator Design Pattern
description: Unlock the power of the Decorator Design Pattern with clear PHP examples. Enhance your object-oriented programming skills and improve code maintainability.
keywords: decorator design pattern, PHP, design patterns, software development, OOP, Object-oriented programming, programming, code structure, best practices, programming principles, design principles, object-oriented programming, programming design patterns.
image:
    path: /assets/images/posts/enhance-your-php-code-with-decorator-design-pattern.png
    width: 586
    height: 675
    alt: Enhance Your PHP Code with Decorator Design Pattern
tags: php design-patterns
---

The Decorator Design Pattern is a design pattern that is used to extend the behavior of an object dynamically, without changing its class.
It is a structural pattern that can be used to add responsibilities to individual objects, instead of creating a new subclass.

The Decorator design pattern can be implemented by creating an interface or abstract class that defines the basic methods that must be implemented by all concrete decorators.
The concrete decorators must inherit from the interface or abstract class and implement the necessary methods.
To use a decorator, an object of the decorated class is passed to the constructor of the concrete decorator.
The concrete decorator can then add or change the behavior of the decorated object.

The Decorator Design Pattern can be useful in several different contexts.
For example, if you have a basic object, like a cup of coffee, and you want to add different types of flavors to it, such as whipped cream or chocolate syrup, the Decorator Design Pattern can be used.

Let's consider an example to understand the Decorator Design Pattern.

First, we create the `Coffee` interface with two methods: `getCost` and `getDescription`.
We also create a `SimpleCoffee` class that implements the `Coffee` interface.
This class represents the basic functions of an object.

```php
interface Coffee
{
    public function getCost(): int;
    public function getDescription(): string;
}

class SimpleCoffee implements Coffee
{
    public function getCost(): int
    {
        return 10;
    }

    public function getDescription(): string
    {
        return 'Simple Coffee';
    }
}
```

We then create an abstract `CoffeeDecorator` class that implements the `Coffee` interface and takes an instance of the `Coffee` interface as a parameter.
This class is used as the base class for concrete decorator classes.

```php
abstract class CoffeeDecorator implements Coffee
{
    protected $decoratedCoffee;

    public function __construct(Coffee $decoratedCoffee)
    {
        $this->decoratedCoffee = $decoratedCoffee;
    }
}
```

Finally, we create two concrete decorator classes, `MilkCoffee` and `CreamCoffee`, which extend from the `CoffeeDecorator` class.

```php
class MilkCoffee extends CoffeeDecorator
{
    private const PRICE = 2;
    
    public function getCost(): int
    {
        return $this->decoratedCoffee->getCost() + self::PRICE;
    }

    public function getDescription(): string
    {
        return $this->decoratedCoffee->getDescription() . ', milk';
    }
}

class CreamCoffee extends CoffeeDecorator
{
    private const PRICE = 5;

    public function getCost(): int
    {
        return $this->decoratedCoffee->getCost() + self::PRICE;
    }

    public function getDescription(): string
    {
        return $this->decoratedCoffee->getDescription() . ', cream';
    }
}
```

Now let's look at an example of calling classes

```php
// Order simple coffee
$simpleCoffee = new SimpleCoffee();
echo $simpleCoffee->getCost(); // output: 10
echo $simpleCoffee->getDescription(); // output: Simple Coffee

// Order coffee with milk
$milkCoffee = new MilkCoffee($simpleCoffee);
echo $milkCoffee->getCost(); // output: 12 (SimpleCoffee cost + MilkCoffee cost)
echo $milkCoffee->getDescription(); // output: Simple Coffee, milk

// Order coffee with cream
$creamCoffee = new CreamCoffee($simpleCoffee);
echo $creamCoffee->getCost(); // output: 15 (SimpleCoffee cost + CreamCoffee cost)
echo $creamCoffee->getDescription(); // output: Simple Coffee, cream
```

What if we want to order coffee with milk and cream?
Then we need to wrap one order in both decorators

```php
// Order simple coffee
$simpleCoffee = new SimpleCoffee();
echo $simpleCoffee->getCost(); // output: 10
echo $simpleCoffee->getDescription(); // output: Simple Coffee

// Order coffee with milk
$milkCoffee = new MilkCoffee($simpleCoffee);
echo $milkCoffee->getCost(); // output: 12 (SimpleCoffee cost + MilkCoffee cost)
echo $milkCoffee->getDescription(); // output: Simple Coffee, milk

// Order coffee with milk and cream
// We create CreamCoffee from $milkCoffee because it contains both coffee and milk
$mixCoffee = new CreamCoffee($milkCoffee);
echo $mixCoffee->getCost(); // output: 17 (SimpleCoffee cost + MilkCoffee cost + CreamCoffee cost)
echo $mixCoffee->getDescription(); // output: Simple Coffee, milk, cream
```

Advantages of using the Decorator Design Pattern:

- The Decorator design pattern allows you to extend the functionalities of existing objects in a flexible and easy-to-maintain way.
- It allows you to add new behaviors and responsibilities to an object dynamically, without affecting the behavior of other objects from the same class.
- The Decorator design pattern is a good alternative to inheritance when you want to add new functionalities to an object, but do not want to modify the source code of the original object.
- It allows you to keep the implementation of the original object separate from the implementation of the new functionalities.