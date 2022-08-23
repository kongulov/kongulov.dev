---
layout: post
title: S - Single Responsibility Principle | SOLID
description: Single Responsibility Principle - a class should be one, and only one, reason to change.
keywords: php solid oop coding single responsibility principle
tags: php oop solid
---

The Single Responsibility Principle (SRP) is the one of the five basic principles of object-oriented programming and design,
formulated by Robert Martin, known as Uncle Bob.
<br><br>
The principle says that
>A class should be one, and only one, reason to change.

In this article, I will try to explain this principle with a simple example.
<br>
We have a User class where there is a CRUD of the user with his documents.
```php
class User
{
    public function list() {/*...*/}
    public function get(int $id) {/*...*/}
    public function create(array $data) {/*...*/}
    public function update(array $data, int $id) {/*...*/}
    public function delete(int $id) {/*...*/}
    
    public function documentList(int $userId) {/*...*/}
    public function getDocument(int $userId, int $id) {/*...*/}
    public function createDocument(int $userId, array $data) {/*...*/}
    public function updateDocument(int $userId, array $data, int $id) {/*...*/}
    public function deleteDocument(int $userId, int $id) {/*...*/}
}
```
This approach violates SRP since the class is responsible for two jobs: Working with users and working with documents.

The problem can be solved by dividing the class into two separate classes.
```php
class User
{
    public function list() {/*...*/}
    public function get(int $id) {/*...*/}
    public function create(array $data) {/*...*/}
    public function update(array $data, int $id) {/*...*/}
    public function delete(int $id) {/*...*/}
}

class UserDocument
{
    private $user;
    
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    
    public function list() {/*...*/}
    public function get(int $id) {/*...*/}
    public function create(array $data) {/*...*/}
    public function update(array $data, int $id) {/*...*/}
    public function delete(int $id) {/*...*/}
}
```

Now the class does exactly one thing and has exactly one reason to change.