---
layout: post
title: Simplifying data structures with ENUM in Laravel
description: Simplify data structures in Laravel with ENUM. Learn how to define and use ENUM for efficient and readable code in PHP.
keywords: PHP, Laravel, ENUM, Trait, software development, programming
image:
    path: /assets/images/posts/simplifying-data-structures-with-unum-in-laravel.png
    width: 690
    height: 488
    alt: ENUM in Laravel
tags: [php, laravel]
---

In modern web development, handling data structures efficiently is a crucial aspect of creating robust applications.
ENUM (Enumerated Type) is a powerful feature in PHP that enables developers to define a set of named constants, making code more readable, maintainable, and less prone to errors.
In this blog post, we will explore ENUM in PHP and discuss how it can be integrated into Laravel, one of the most popular PHP frameworks.

Laravel, with its elegant syntax and powerful features, provides built-in support for ENUM.
Here's a step-by-step guide on how to utilize ENUM in Laravel:

<h2>Create the ENUM Class:</h2>

Inside the `app/Enums` directory, create a new PHP file, e.g., `StatusEnum.php`.
This file will contain the ENUM constants and their associated values:

```php
<?php

namespace App\Enums;

enum StatusEnum: string {
    case Pending = 'pending';
    case Active = 'active';
    case Inactive = 'inactive';
}
```

Here, we've defined three constants: `ACTIVE`, `INACTIVE`, and `PENDING`, representing different statuses.

To make it even more convenient to work with ENUMs, we will use the <a href="https://github.com/kongulov/interact-with-enum" ratget="_blank">kongulov/interact-with-enum</a> package with the `InteractWithEnum` trait, which contains useful methods for working with ENUMs

Install the package via Composer:

```bash
# Install interact-with-enum
composer require kongulov/interact-with-enum
```

And use it in all our ENUMs to make it look like this

```php
<?php

namespace App\Enums;

use Kongulov\Traits\InteractWithEnum;

enum StatusEnum: string {
    use InteractWithEnum;

    case Pending = 'pending';
    case Active = 'active';
    case Inactive = 'inactive';
}
```

<h2>Using ENUM in Code:</h2>

Once you've created the ENUM class, you can leverage it in your code. Here are a few examples:

<h3>Model Definition</h3>

In your Eloquent models, you can specify the ENUM field and its associated ENUM class using the $casts attribute:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Enums\StatusEnum;

class User extends Model
{
    // ...
    protected $fillable = [
        'name',
        'email',
        'status',
    ];

    protected $casts = [
        'status' => StatusEnum::class,
    ];
    // ...
}
```

By setting the status field's cast type to `StatusEnum`, Laravel will automatically handle the conversion between the ENUM value and its corresponding constant.

<h3>Database Migrations</h3>

In your database migration files, you can define ENUM columns using the `->enum()` method:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\StatusEnum;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            // ...
            $table->enum('status', StatusEnum::values())->default(StatusEnum::Pending->value);
            // ...
        });
    }

    // ...
}
```

Here, we've created a status column in the users table, using the ENUM constants defined in `StatusEnum`.

<h3>Using ENUM in Validation:</h3>

Laravel's validation rules allow you to validate ENUM values easily. Here's an example:

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;
use App\Enums\StatusEnum;

class UpdateUserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'status' => ['required', new Enum(StatusEnum::class)],
        ];
    }
}
```

In this example, we've defined a validation rule for the `status` field, ensuring that it is required and can only contain one of the ENUM constants defined in `StatusEnum`.

<h2>Conclusion</h2>

ENUMs in Laravel provide an elegant solution for handling fixed sets of values, improving code readability and maintaining data integrity.
By creating an ENUM class, you can define constants representing different values and easily use them throughout your application.
Whether it's in database migrations, models, or validation, ENUMs offer a robust way to manage and validate your data effectively.
Implement ENUMs in your Laravel projects and experience the benefits of streamlined code and enhanced data structure management.