---
layout: post
title: Queues in Laravel
description: Laravel queues provide a unified queueing API across a variety of different queue backends, such as Amazon SQS, Redis, or even a relational database.
keywords: php backend laravel queue
image:
    path: /assets/images/posts/queues-in-laravel/image1.jpeg
    width: 950
    height: 554
    alt: Sending code to the queue handler
tags: php laravel
---

Sometimes individual processes take a long time to complete, such as sending email, payment gateway, etc.
When you send an email for verification, it takes time.
If you don't want to make the user wait, then you need to use queues.
This will make your service fast for the user.

To work with queues in Laravel, it is enough to know and be able to execute a few commands:

- Create a queue handler: `php artisan make:job ProcessSendingEmail`
- Send a new event to the queue: `ProcessSendingEmail::dispatch($user);`
- And run the handler for all events: `php artisan queue:work`

As simple as possible, right? Let's now look in more detail.

<h2>Principle of operation</h2>

The principle of operation of queues consists of two main components:

- queue servers;
- handler;

The queue server keeps a list of messages (or tasks, job queue) that the main application sends to it.
A task is simply information about what needs to be done and how.

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/queues-in-laravel/image1.jpeg" alt="Sending code to the queue handler">
</div>

A handler (or worker) is a part of the main program that works with the queue in the opposite direction.
It receives new messages from the queue and performs the appropriate actions.

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/queues-in-laravel/image2.jpeg" alt="Code handle">
</div>

<h2>Example</h2>

Let's imagine a simple registration form with one email field and a "Register" button.
By clicking on the button, we send the data to the server and check if we have a user with such an email in the database or not,
if so, we will send a message to the form that the user already exists, and if not,
we will send him an email to the specified email to confirm it.
To send an email, we have 2 options:

- send synchronously within a single request;
- add a task to send an email to the queue;

In fact, there is no right answer, you need to look at the specific situation.
If you have a small project, you have several people registering per hour and it is non-critical if they wait 5-10 seconds for a request to be processed,
then the first option with synchronous sending of a letter suits you. But in most cases it is better to use a queue.
To do this, let's go back to the beginning of the article and follow a couple of simple steps:

<h3>1) Create a queue handler</h3>

Execute the command
```php
php artisan make:job ProcessSendingEmail
```

All default handlers are created in `app/Jobs`.
Open the created `app/Jobs/ProcessSendingEmail.php` file and update the handle function:

```php
public function handle(User $user)                             
{                                                               
    Mail::send(
        'mail.confirm-registration',
        [                    
            'html' => 'Confirm your email using the link - https://kongulov.dev'                                               
        ],
        function ($message) use ($user) {                       
            $message->to($user->email)->subject('Confirmation of registration');                                                   
        }
    );                                                         
}
```

Now our handler receives the user model and sends him a letter using the standard Mail package in Laravel,
you can familiarize yourself with its capabilities in the <a href="https://laravel.com/docs/9.x/mail" target="_blank">documentation</a>.

<h3>2) Send a new event to the queue</h3>

```php
public function register(Request $request)                             
{                                                               
    // .... code                                              
    ProcessSendingEmail::dispatch($user);                      
    // .... code                                                       
}
```

After calling the `dispatch` function, a new event will immediately fly to our queue,
and we just have to run our queue handler and wait for the letter to be sent to the user.

<h3>3) Run the handler for all events in the console with the command</h3>

```php
php artisan queue:work
```

After the handler is launched, all our events will be processed one by one, and if we had 100 letters to send in the queue,
then the last letter will obviously not be sent soon and will be approximately like in the first picture, when everyone is waiting in line.

Luckily, we can solve this problem very easily by <a href="https://laravel.com/docs/9.x/queues?ref=https://kongulov.dev/blog/queues-in-laravel#running-multiple-queue-workers" target="_blank">running a few handlers</a> and our emails will be sent in parallel.
Of course, we must be careful with the choice of the number of handlers,
because each will occupy the resources of our server and the optimal number must be selected from our capabilities,
but remember that the more handlers, the faster all our messages will be processed.







