---
layout: post
title: I - Interface Segregation Principle | SOLID
description: Interface Segregation Principle - Clients should not be forced to depend upon interfaces that they do not use.
keywords: php solid interface segregation principle
tags: php oop solid
---

The Interface Segregation Principle (ISP) is the fourth of the five basic principles of object-oriented programming and 
design, formulated by Robert Martin, known as Uncle Bob.
<br><br>
The principle says that
>Many client-specific interfaces are better than one general-purpose interface.

This principle is very easy to understand, and following it is necessary so that classes that
implement an interface only know about the methods they use, which leads to a reduction in the amount of unused code.

Here is an example from an online store.
<br>
Assume our products have a promotional code, a discount, a price, a condition, and so on.
<br>
If it is clothing, then it is determined by what material it is made of, color, and size.
<br>
Let's describe the following interface.
```php
interface ItemInterface
{
    public function applyDiscount($discount);
    public function applyPromocode($promocode);
    
    public function setColor($color);
    public function setSize($size);
    
    public function setCondition($condition);
    public function setPrice($price);
}
```
This interface is bad because it includes too many methods.
And what if our product category is not eligible for a discount or promotional code,
or if it makes no sense to install the material from which it is made (for example, books)?
Thus, in order not to implement unused methods in each class,
it is better to divide the interface into several small ones and implement the necessary interfaces with each specific class.

```php
interface ItemInterface
{
	public function setCondition($condition);
	public function setPrice($price);
}

interface ClothesInterface
{
	public function setColor($color);
	public function setSize($size);
	public function setMaterial($material);
}

interface DiscountableInterface
{
	public function applyDiscount($discount);
	public function applyPromocode($promocode);
}

class Book implemets ItemInterface, DiscountableInterface
{
    public function setCondition($condition){/*...*/}
    public function setPrice($price){/*...*/}
    public function applyDiscount($discount){/*...*/}
    public function applyPromocode($promocode){/*...*/}
}

class KidsClothes implemets ItemInterface, ClothesInterface
{
    public function setCondition($condition){/*...*/}
    public function setPrice($price){/*...*/}
    public function setColor($color){/*...*/}
    public function setSize($size){/*...*/}
    public function setMaterial($material){/*...*/}
}
```