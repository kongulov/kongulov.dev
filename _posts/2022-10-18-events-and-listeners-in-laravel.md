---
layout: post
title: Events and Listeners in Laravel
description: Laravel Events provides a simple implementation of the Observer pattern, allowing you to subscribe to and monitor various events that occur in your application.
keywords: php backend laravel events listeners
image:
    path: /assets/images/posts/events-and-listeners-in-laravel.png
    width: 499
    height: 312
    alt: Register our events and listeners
tags: [php, laravel]
---

Laravel Events provides a simple implementation of the Observer pattern, allowing you to subscribe to and monitor various events that occur in your application.
Event classes are usually stored in the `app/Events` directory and their listeners in `app/Listeners`.

The advantage of this pattern is to separate the different logic in your application.
In this case, one event can have many independent listeners.
For example, you want to be notified every time that you have a new registered user on the site.
To do this, you do not need to make changes to the user registration class or extend it in any way.
It is enough to create a class of an independent event listener "Registration" (subscribe to the event), inside which the notification logic will be implemented.

<h2>What is an Event?</h2>

Events are the ways we hook into our application's activity, it's just a way to observe the activity, such as login, you can create a class to monitor the login activity, when the user logs in, the event class can perform some functions.

<h2>What is a Listener?</h2>

A listener is a class that listens to the events they are associated with and performs a task, that is, they perform the given task for the event.
Let me illustrate. You might want to send a welcome email to a new user of your application and assign a role to the user based on the information provided during registration, etc.
You wouldn’t want to do all of this in the `RegisterController` because we are violating the first SOLID (<a href="{{ site.url }}/blog/solid-single-responsibility-principle" target="_blank">Single Responsibility Principle</a>).
When the Controller will perform more than one task, the RegisterController should only perform the actions of registering a new user.
Thus, the event must be held during the registration process, which includes assigning a role, sending an email, etc.
They are individual listeners within the event.

<h2>Creating Event and Listener class</h2>

To create an event class, use the artisan command `make:event`

```php
php artisan make:event Register
```

This command will create a new class in your application's `app\Events` folder, and that's all you need to create an event class.

To create a listener class, use the artisan command `make:listener`

```php
php artisan make:listener SendWelcomeEmail
```

This command, just like creating an event, will create a new class in your application's `app\Listeners` folder, which is all you need to create a listener class.

<h2>Registering Event and Listener class</h2>

In order for our events and listeners to work, we must register them in the `App\Providers\EventServiceProvider` class, which was already set up for us during the installation of our Laravel project.

looking into the `App\Providers\EventServiceProvider` class you will see the `$listen` array in which we will register our events and listeners.

```php
namespace App\Providers;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        Register::class => [
            SendWelcomeEmail::class,
        ],
    ];
}
```

Let's take a look at our `Register` event and pass our new user into it

```php
<?php
 
namespace App\Events;
 
use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
 
class Register
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
 
    /**
     * The order instance.
     *
     * @var \App\Models\User
     */
    public $user;
 
    /**
     * Create a new event instance.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }
}
```

And now let's look at our listener `SendWelcomeEmail` where all the logic of sending email will be

```php
<?php
 
namespace App\Listeners;
 
use App\Events\Register;
 
class SendWelcomeEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
 
    /**
     * Handle the event.
     *
     * @param  \App\Events\Register  $event
     * @return void
     */
    public function handle(Register $event)
    {
        // Access the user using $event->user...
        // email sending logic for $event->user->email
    }
}
```

<h2>Dispatching an event</h2>

At the time of this writing, I was aware of two methods for dispatching your event and triggering listeners:

- event(new EventClass()); // event(new Register($user));
- EventClass::dispatch(); // Register::dispatch($user);

You should note that public properties declared on the event class can be accessed on the listener class that is associated with it.