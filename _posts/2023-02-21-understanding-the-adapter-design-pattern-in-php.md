---
layout: post
title: Understanding the Adapter Design Pattern in PHP
description: Learn how to use the Adapter pattern in PHP for a payment system to integrate multiple payment gateways. Bridge incompatible interfaces to easily use existing code with this structural design pattern.
keywords: Adapter design pattern, PHP, design patterns, software development, OOP, Object-oriented programming, programming, code structure, best practices, programming principles, design principles, object-oriented programming, programming design patterns, interfaces.
image:
    path: /assets/images/posts/understanding-the-adapter-design-pattern-in-php.png
    width: 622
    height: 381
    alt: Understanding the Adapter Design Pattern in PHP
tags: php design-patterns
---

The Adapter pattern is a structural design pattern that allows two incompatible interfaces to work together.
This pattern is used to create a bridge between two incompatible interfaces by creating an intermediate adapter that can translate the interface of one object to another.
The Adapter pattern is useful when you need to use an existing class, but its interface doesn't match the one you need.

Let's take a real-life example to understand the Adapter pattern better.
Suppose you have a smartphone that uses a USB Type-C charging cable, and you want to charge it using an old charger that only has a Micro-USB port.
To connect your smartphone to the old charger, you need a Type-C to Micro-USB adapter.
This adapter acts as a bridge between the incompatible interfaces of your smartphone and the old charger, allowing them to work together.

In software development, the Adapter pattern is commonly used in legacy codebases where you need to use existing code or libraries that have an incompatible interface with your application.
By creating an adapter, you can use the existing code without having to modify it.

Let's take an example of a payment system to understand how the Adapter pattern works in PHP.

Suppose you are building an e-commerce website that needs to accept payments from multiple payment gateways, such as `PayPal` and `Stripe`.
Each payment gateway has its own API and interface for processing payments.
To make it easier to integrate these payment gateways into your website, you can create an adapter for each payment gateway that translates its API into a common interface that your website can use.

Let's create the `PaymentGatewayInterface` interface, which will define the general interface for processing payments.
We will then create two payment gateway classes, `PayPalGateway` and `StripeGateway`, which have their own payment processing interface.

```php
interface PaymentGatewayInterface
{
    public function processPayment(float $amount): bool;
}

class PayPalGateway
{
    public function sendPayment(float $amount): bool
    {
        // Send payment using PayPal API
        return true;
    }
}

class StripeGateway
{
    public function charge(float $amount): bool
    {
        // Charge payment using Stripe API
        return true;
    }
}
```

To make these payment gateways compatible with our payment system,we have created two adapter classes `PayPalAdapter` and `StripeAdapter` that implement the `PaymentGatewayInterface` and translate the API of the payment gateway to the common interface.

```php
class PayPalAdapter implements PaymentGatewayInterface
{
    private $payPalGateway;

    public function __construct(PayPalGateway $payPalGateway)
    {
        $this->payPalGateway = $payPalGateway;
    }

    public function processPayment(float $amount): bool
    {
        return $this->payPalGateway->sendPayment($amount);
    }
}

class StripeAdapter implements PaymentGatewayInterface
{
    private $stripeGateway;

    public function __construct(StripeGateway $stripeGateway)
    {
        $this->stripeGateway = $stripeGateway;
    }

    public function processPayment(float $amount): bool
    {
        return $this->stripeGateway->charge($amount);
    }
}
```

Now we can use these adapters in our payment system to process payments from different payment gateways:

```php
$payPalGateway = new PayPalGateway();
$payPalAdapter = new PayPalAdapter($payPalGateway);
$payPalAdapter->processPayment(100.00);

$stripeGateway = new StripeGateway();
$stripeAdapter = new StripeAdapter($stripeGateway);
$stripeAdapter->processPayment(100.00);
```

Using an Adapter pattern, we can easily integrate various payment gateways into your system.
