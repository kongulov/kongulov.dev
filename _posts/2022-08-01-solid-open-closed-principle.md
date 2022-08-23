---
layout: post
title: O - Open-Closed Principle | SOLID
description: Open-Closed Principle - Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
keywords: php solid oop coding open closed principle
tags: php oop solid
---

The Open-Closed Principle (OCP) is second of the five basic principles of object-oriented programming and 
design, formulated by Robert Martin, known as Uncle Bob.
<br><br>
The principle says that
>Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification

This means that these entities can change their behavior without changing their source code.

Following the principle of OCP is that software changes not by changing existing code, but by adding new code.
That is, the code originally created remains "intact" and stable, and new functionality is introduced either through
implementation inheritance, or through the use of abstract interfaces and polymorphism.

Consider the `OrderRepository` class as an example.
```php
class OrderRepository
{
    public function load($orderID)
    {
        $pdo = new PDO(
            $this->config->getDsn(),
            $this->config->getDBUser(),
            $this->config->getDBPassword()
        );
        $statement = $pdo->prepare('SELECT * FROM `orders` WHERE id=:id');
        $statement->execute([':id' => $orderID]);
        return $query->fetchObject('Order');	
    }
    public function save($order){/*...*/}
    public function update($order){/*...*/}
    public function delete($order){/*...*/}
}
```
In this case, the storage is the DB database. But if we want to expand the functionality and upload our order data through a third-party server using the API, then what will need to be done for this?

There are several options:

First, you can directly change the methods of the `OrderRepository` class, but this one does not follow the open/closed principle, since the class is closed for modification, and making changes to an already well-functioning class is undesirable.

Second, you can extend the `OrderRepository` class and override all methods, but this is not the best solution.
since when adding a new method to `OrderRepository` we will have to add similar methods in all extended classes.

Therefore, to implement the open/closed principle, it is better to apply the following solution:
<br>
Create an `OrderSourceInterface`, which will be implemented by the corresponding classes `DBOrderSource`, `ApiOrderSource`, and so on.

```php
class OrderRepository
{
    private $source;

    public function __construct(OrderSourceInterface $source)
    {
        $this->source = $source;
    }

    public function load($orderID){/*...*/}
    public function save($order){/*...*/}
    public function update($order){/*...*/}
}

interface OrderSourceInterface
{
    public function load($orderID){/*...*/}
    public function save($order){/*...*/}
    public function update($order){/*...*/}
    public function delete($order){/*...*/}
}

class DBOrderSource implements OrderSourceInterface
{
    public function load($orderID){/*...*/}
    public function save($order){/*...*/}
    public function update($order){/*...*/}
    public function delete($order){/*...*/}
}

class ApiOrderSource implements OrderSourceInterface
{
    public function load($orderID){/*...*/}
    public function save($order){/*...*/}
    public function update($order){/*...*/}
    public function delete($order){/*...*/}
}
```

Thus, we can change the source and, accordingly, the behavior for the `OrderRepository` class by setting the class we need
that implements `OrderSourceInterface`, without changing the `OrderRepository` class.