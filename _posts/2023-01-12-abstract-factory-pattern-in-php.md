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

First, consider an example with an interface:

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

Now consider an example using an abstract class:

```php
abstract class CarFactory {
    abstract public function createCar(): Car;
    abstract public function createTruck(): Truck;
}

abstract class Car {
    abstract public function drive();
}

abstract class Truck {
    abstract public function load();
}

class ElectricCar extends Car {
    public function drive() {
        // code to drive electric car
    }
}
class PetrolCar extends Car {
    public function drive() {
        // code to drive petrol car
    }
}
class ElectricTruck extends Truck {
    public function load() {
        // code to load electric truck
    }
}
class PetrolTruck extends Truck {
    public function load() {
        // code to load petrol truck
    }
}

class ElectricCarFactory extends CarFactory {
    public function createCar(): ElectricCar {
        return new ElectricCar();
    }
    public function createTruck(): ElectricTruck {
        return new ElectricTruck();
    }
}
class PetrolCarFactory extends CarFactory {
    public function createCar(): PetrolCar {
        return new PetrolCar();
    }
    public function createTruck(): PetrolTruck {
        return new PetrolTruck();
    }
}

$electricCarFactory = new ElectricCarFactory();
$electricCar = $electricCarFactory->createCar();
$electricCar->drive();

$petrolCarFactory = new PetrolCarFactory();
$petrolCar = $petrolCarFactory->createCar();
$petrolCar->drive();
```

In this example, the `CarFactory` abstract class defines two methods, `createCar()` and `createTruck()`, that must be implemented by concrete factory classes.
The `ElectricCarFactory` and `PetrolCarFactory` classes implement these methods and return new objects of the `ElectricCar`, `PetrolCar`, `ElectricTruck` and `PetrolTruck` classes.

You can see that the abstract class of CarFactory defines the contract and structure of the factory, while the concrete factory classes are responsible for creating the actual objects of the Car and Truck.

Using abstract classes also provides an opportunity for sharing common functionality between concrete factories. The abstract class can provide a default implementation for some of the methods, which can be overridden by the concrete classes if needed.

In summary, The Abstract Factory pattern is a powerful tool that allows for the creation of families of related objects in a flexible and maintainable way.
By using interfaces and abstract classes to define the creation methods, the concrete classes can be easily swapped out.
Using an abstract class allows for providing a default implementation and share common functionality between concrete factories.