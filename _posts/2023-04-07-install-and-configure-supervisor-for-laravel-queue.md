---
layout: post
title: Install and Configure Supervisor for Laravel Queue
description: Learn how to install and use Supervisor with Laravel Queue. Maximize reliability, performance, and efficiency of your queue management.
keywords: Supervisor, Laravel, Queue, Laravel Queue, software development, programming
image:
    path: /assets/images/posts/install-and-configure-supervisor-for-laravel-queue.png
    width: 660
    height: 357
    alt: Configuration file for Laravel queue
tags: laravel
---

Supervisor is a process control system for Linux that allows you to monitor and control processes on your server.
It is particularly useful for managing long-running processes, such as Laravel queues, which can run for hours or even days at a time.
In this post, we will go through the process of installing and using Supervisor with Laravel queue

<h2>1. Install Supervisor</h2>

The first step is to install Supervisor on your server. This can typically be done using your server's package manager.
For example, on Ubuntu, you can install Supervisor using the following command:

```php
sudo apt-get install supervisor
```

Once Supervisor is installed, you can start and stop it using the following commands:

```php
sudo systemctl start supervisor
sudo systemctl stop supervisor
```

<h2>2. Configure Supervisor</h2>

The next step is to configure Supervisor to manage your Laravel queue processes.
Supervisor uses configuration files to define the processes it should manage.
These files are typically stored in the `/etc/supervisor/conf.d/` directory.

Create a new configuration file for your Laravel queue using the following command:

```php
sudo nano /etc/supervisor/conf.d/laravel-queue.conf
```

In this file, you will need to define the command that Supervisor should use to start your Laravel queue.
Here is an example configuration file:

```ini
[program:laravel-queue]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/artisan queue:work --queue=default --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=8
redirect_stderr=true
stdout_logfile=/var/log/laravel-queue.log
stopwaitsecs=3600

```

In this configuration file, we have defined a process called `laravel-queue`, which will run the `queue:work` command.
We have specified that the process should start automatically and restart if it crashes, and we have set the number of processes to run to 8.
We have also redirected the stderr output to a log file.

Save and close the configuration file when you are done.

<h2>3. Reload Supervisor</h2>

Once you have created your configuration file, you will need to tell Supervisor to reload its configuration:

```php
sudo supervisorctl reread
sudo supervisorctl update
```

This will read your new configuration file and add the `laravel-queue` process to the list of processes that Supervisor should manage.

<h2>4. Start the Laravel Queue</h2>

With Supervisor configured, you can now start the Laravel queue using the following command:

```php
sudo supervisorctl start laravel-queue:*
```

This will start all of the processes defined in your configuration file.

<h2>5. Monitor the Laravel Queue</h2>

This will display the status of all processes managed by Supervisor, including your Laravel queue processes.

<h2>Conclusion</h2>

In this post, we have gone through the process of installing and using Supervisor with Laravel queue.
By using Supervisor to manage your Laravel queue processes, you can ensure that they run reliably and continuously,
even if they encounter errors or crashes. This can help to ensure that your application runs smoothly and efficiently,
even under heavy load.

You can read about how to create a queue in Laravel in the following article: <a href="{{ site.url }}/blog/queues-in-laravel">Queues in Laravel</a>