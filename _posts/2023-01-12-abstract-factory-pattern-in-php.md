---
layout: post
title: Abstract Factory Pattern in PHP
description: The Abstract Factory pattern is a design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
keywords: php backend design-patterns abstract-factory design pattern abstract factory
image:
    path: /assets/images/posts/abstract-factory-pattern-in-php.png
    width: 555
    height: 355
    alt: Shape Abstract Factory in PHP
tags: php design-patterns
---

The Abstract Factory pattern is a design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
It allows for the creation of objects that follow a certain pattern, without the need to specify the exact class of the object to be created.

The Abstract Factory pattern can be implemented in PHP using interfaces and abstract classes.
The interface or abstract class defines a set of methods that must be implemented by concrete factory classes, which are responsible for creating the actual objects.

```php
interface ShapeFactory {
    public function createCircle(): Circle;
    public function createSquare(): Square;
}

class ConcreteShapeFactory implements ShapeFactory {
    public function createCircle(): Circle {
        return new Circle();
    }
    public function createSquare(): Square {
        return new Square();
    }
}

class Circle {
    public function draw() {
        // code to draw a circle
    }
}

class Square {
    public function draw() {
        // code to draw a square
    }
}

$shapeFactory = new ConcreteShapeFactory();
$circle = $shapeFactory->createCircle();
$square = $shapeFactory->createSquare();
```

In this example, the `ShapeFactory` interface defines two methods, `createCircle()` and `createSquare()`, that must be implemented by concrete factory classes.
The `ConcreteShapeFactory` class implements these methods and returns new objects of the `Circle` and `Square` classes.

Another Example could be:

```php
interface CarFactory {
    public function createCar(): Car;
    public function createTruck(): Truck;
}
interface Car {/*...*/}
class Sedan implements Car {/*...*/}
class SUV implements Car {/*...*/}
interface Truck {/*...*/}
class PickupTruck implements Truck {/*...*/}
class BoxTruck implements Truck {/*...*/}

class FamilyCarFactory implements CarFactory {
    public function createCar(): Sedan {
        return new Sedan();
    }
    public function createTruck(): PickupTruck {
        return new PickupTruck();
    }
}

class LuxuryCarFactory implements CarFactory {
    public function createCar(): SUV {
        return new SUV();
    }
    public function createTruck(): BoxTruck {
        return new BoxTruck();
    }
}

$familyCarFactory = new FamilyCarFactory();
$sedan = $familyCarFactory->createCar();
$pickupTruck = $familyCarFactory->createTruck();

$luxuryCarFactory = new LuxuryCarFactory();
$suv = $luxuryCarFactory->createCar();
$boxTruck = $luxuryCarFactory->createTruck();
```

In this example, `CarFactory` is an interface with two methods `createCar()` and `createTruck()` that need to be implemented by concrete factories.
These methods will create an object of a certain class that implements the `Car` and `Truck` interface respectively.

The main benefit of using the Abstract Factory pattern in this scenario is that it allows for a separation of concerns between the classes that create objects and the classes that use them.
The `CarFactory` interface defines the contract for creating cars and trucks, while the concrete factory classes are responsible for creating the actual objects.

By using this pattern, we can easily swap out the concrete factory classes to create different types of cars and trucks, without having to modify the code that uses them.
For example, we can have different implementations of the `CarFactory` such as `FamilyCarFactory` and `LuxuryCarFactory`,
where `FamilyCarFactory` can create `Sedan` and `PickupTruck` and `LuxuryCarFactory` can create `SUV` and `BoxTruck`.

We could also use an abstract factory to create different car factories that creates different type of fuel-based cars such as electric cars factory,
petrol cars factory and diesel cars factory. This way we can create a whole family of related objects based on a certain category with a single factory class.

It's also worth noting that the Abstract Factory pattern can be nested to create complex systems.
In our example, each factory could return an object of an abstract class or interface that would then be implemented by another factory,
this way we can create a hierarchical relationship between factories.

In summary, The Abstract Factory pattern is a powerful tool that allows for the creation of families of related objects in a flexible and maintainable way.
By using interfaces and abstract classes to define the creation methods, the concrete classes can be easily swapped out,
and it also allows for separation of concerns and can be nested for creating complex systems.