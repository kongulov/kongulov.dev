---
layout: post
title: Repository Pattern in Laravel - PHP Design Pattern
description: A Repository is a centralized component that contains logic for accessing data sources. Implementing the Repository Pattern using an interface allows for reduced dependencies between classes, centralizing data access logic for easier maintenance, and separation of business logic from storage methods. In Laravel, using the Eloquent ORM simplifies the code for data persistence logic.
keywords: php laravel repository pattern ORM interface
image:
    path: /assets/images/posts/repository-pattern-in-laravel-php-design-pattern.png
    width: 633
    height: 376
    alt: Post Repository Class in PHP
tags: php design-patterns laravel
---

Repositories are classes or components that contain the logic needed to access data sources.
Repositories provide centralized functionality for accessing data, allowing better management and separation of the infrastructure or technology used to access data from the domain model.
If you're using an object-relational mapping (ORM) like the Laravel Framework, the code you need to implement is simplified thanks to Eloquent and strong typing.
This allows you to focus on the data persistence logic rather than the data access helper functions.

Let's take an example in Laravel.

We usually implement the repository pattern with an interface.
An interface can reduce dependencies between classes, and the implemented class will use the same functionality as the interface.

And so let's create our `PostRepositoryInterface` in the `app/Interfaces/` folder

```php
namespace App\Interfaces;

interface PostRepositoryInterface
{
    public function list();
    public function findById(int $postId);
    public function create(array $details);
    public function update(int $postId, array $details);
    public function delete(int $postId);
}
```

And now let's create the `PostRepository` in the `app/Repositories` folder which will implements the `PostRepositoryInterface`

```php
namespace App\Repositories;

use App\Interfaces\PostRepositoryInterface;
use App\Models\Post;

class PostRepository implements PostRepositoryInterface
{
    public function list()
    {
        return Post::all();
    }

    public function findById(int $postId)
    {
        return Post::query()->findOrFail($postId);
    }

    public function create(array $details)
    {
        return Post::create($details);
    }

    public function update(int $postId, array $details)
    {
        return Post::query()->where('id', $postId)->update($details);
    }

    public function delete(int $postId)
    {
        return Post::query()->where('id', $postId)->delete();
    }
}
```

Next in our class, through dependency injection, we use our `PostRepositoryInterface`

```php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\PostCreateRequest;
use App\Http\Requests\Api\PostUpdateRequest;
use App\Interfaces\PostRepositoryInterface;

class PostController extends Controller
{
    private PostRepositoryInterface $postRepository;
    
    public function __construct(PostRepositoryInterface $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function list()
    {
        return $this->postRepository->list();
    }

    public function findById(int $postId)
    {
        return $this->postRepository->findById($postId);
    }

    public function create(PostCreateRequest $request)
    {
        return $this->postRepository->create($request->validated());
    }

    public function update(PostUpdateRequest $request, int $postId)
    {
        return $this->postRepository->update($postId, $request->validated());
    }

    public function delete(int $postId)
    {
        return $this->postRepository->delete($postId);
    }
}
```

But in order for `PostRepositoryInterface` to refer to `PostRepository` we need to bind the interface to the repository.

Go to the command line and run the following command at the root of the application to create a `RepositoryServiceProvider`.

```php
php artisan make:provider RepositoryServiceProvider
// Provider created successfully.
```

And this command should create a file `RepositoryServiceProvider.php` in the `app/Providers`.

Inside the `RepositoryServiceProvider` class, in the `register()` method, we will bind the interface to the repository.
We will also bind all our other interfaces to repositories in this provider.

```php
class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(PostRepositoryInterface::class, PostRepository::class);
        // $this->app->bind(CommentRepositoryInterface::class, CommentRepository::class);
        // $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
    }
}
```

The last step is to register this service provider in our `config/app.php`.
Open this file and add to the `providers` array our provider `App\Providers\RepositoryServiceProvider::class`

```php
'providers' => [
    // ...other declared providers
    App\Providers\RepositoryServiceProvider::class,
];
```

And it's all! Now our application knows what class it should use when we type objects by its interfaces.

<h2>Repository and ORM</h2>

Perhaps you have a question: why use a repository if I use an ORM?
After all, ORM can work with data, operating with business objects.

However, there may be many cases where data storage is something more complex or specific than just an ORM.
And then such a data layer is encapsulated using the repository pattern:
- Working through interfaces, you can create multiple repository implementations. For example, MySql for data and a file system for storing images.
- Centralizing the data access logic makes the code easier to maintain. For example, you may have some complex query that you need to call from somewhere else in your code.
- Don't Repeat Yourself (DRY): This technique reduces code duplication.
- Independence of business logic from the storage method.

<h2>Conclusion</h2>

After we implemented the Repository Pattern, our code became more structured, more readable, and,
importantly, easier to develop and more reusable in the future.