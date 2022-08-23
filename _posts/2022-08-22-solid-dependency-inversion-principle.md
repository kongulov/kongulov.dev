---
layout: post
title: D - Dependency Inversion Principle | SOLID
description: Dependency Inversion Principle - High level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions.
keywords: php solid oop coding dependency inversion principle
tags: php oop solid
---

The Dependency Inversion Principle (DIP) is the fifth of the five basic principles of object-oriented programming and 
design, formulated by Robert Martin, known as Uncle Bob.
<br><br>
The principle says that
>High level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions.

The principle may seem complicated at first glance, but it is very easy to understand.
<br>
It's better to see this with an example.
```php
class EmailSender {
     private $emailProvider;
 
     public function __construct(Gmail $emailProvider) {
         $this->semailProvider = $emailProvider;
     }
     
     public function connect(){/*...*/}
}
```
`Gmail` is a low-level module, and `EmailSender` is a high-level one.
<br>
But according to the definition of the principle, which says to separate abstractions from implementation,
this fragment violates it because the `EmailSender` class depends on the `Gmail` class.

If you later need to replace the email sending provider, then you will have to change the `EmailSender` class,
which violates the principle of <a href="{{ site.url }}/blog/solid-open-closed-principle" target="_blank">open/closed(OCP)</a>.

The `EmailSender` class doesn't have to worry about the provider that is being used.
<br>
To fix this, we need to allocate an interface so that low-level and high-level modules depend on abstraction.
```php
interface EmailProviderInterface {
     public function connect();
}
```
The interface has a connect method, and the `Gmail` class implements it.
Also, instead of checking the type to see whether the passed object belongs to the `Gmail` class in the `EmailSender` constructor,
we use the interface ownership check. And the `EmailSender` class no longer worries about the type of provider that will be used,
the main thing is that there is a connection possibility and the <a href="{{ site.url }}/blog/solid-open-closed-principle" target="_blank">OCP</a> principle is not violated.
```php
class Gmail implements EmailProviderInterface {
     public function connect() {
         return "Gmail connection";
     }
}
 
class EmailSender {
     private $emailProvider;
 
     public function __construct(EmailProviderInterface $emailProvider) {
         $this->semailProvider = $emailProvider;
     }
     
     public function connect(){/*...*/}
}
```
Now both modules (low-level and high-level) depend on abstraction.