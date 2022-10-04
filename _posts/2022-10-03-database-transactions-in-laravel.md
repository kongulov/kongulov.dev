---
layout: post
title: Database transactions in Laravel
description: A repository embodies the concept of storing a collection of a particular type of entity.
keywords: php laravel database transactions
image:
    path: /assets/images/posts/database-transactions-in-laravel.png
    width: 539
    height: 268
    alt: Database transactions in Laravel
tags: php laravel database
---

In web development, data integrity and accuracy are important.
Therefore, we need to be sure that we are writing code that securely stores, updates, and deletes data in our databases.
In this article, we'll take a look at what database transactions are, why they're important, and how to get started using them in Laravel.
We will also look at typical problems associated with queued jobs and database transactions.

<h2>What are database transactions</h2>

Before we get started with transactions in Laravel, let's take a look at what they are and how they are useful.

A transaction is an archive for database queries. It protects your data thanks to the all-or-nothing principle.

Let's say you transfer money from one account to another. In the application, it looks like several operations

```sql
UPDATE `wallets` SET `amount` = `amount` - 100 WHERE `id` = 1;
UPDATE `wallets` SET `amount` = `amount` + 100 WHERE `id` = 2;
```

What if one request succeeds and the other fails? Then the integrity of the data will be violated.
To avoid such situations, the DBMS introduced the concept of a transaction - an atomic impact on data.
That is, the transfer of the database from one holistic state to another.
In other words, we include several requests in the transaction, which must all be executed, but if at least one is not executed, then all the requests included in the transaction will not be executed.
This is the all-or-nothing principle.

<h2>Using database transactions in Laravel</h2>

Now that we have an idea about transactions, let's look at how to use them in Laravel.

First, let's see what we have in the `wallets` table

<pre>
| id | amount |
|----|--------|
| 1  | 1000   |
| 2  | 0      |
</pre>
<br>
I intentionally made a mistake in the `transfer` method to see the consequences of a data violation.

```php
public function transfer()
{
    Wallet::where('id', 1)->decrement('amount', 100);
    Wallet::where('id_', 2)->increment('amount', 100);
}
```

After executing the code, check the database

<pre>
| id | amount |
|----|--------|
| 1  | 900    |
| 2  | 0      |
</pre>
<br>
The first request passed, but the second one failed.
And in the end: the funds from the first account were gone, but they did not come to the second one.
Data integrity has been violated. To prevent this from happening, you need to use transactions.

It's very easy to get started with transactions in Laravel thanks to the `transaction()` method, which we can access from the `DB` facade.
Based on the previous code example, let's look at how to use transactions in Laravel.

```php
use Illuminate\Support\Facades\DB;

public function transfer()
{
    DB::transaction(function(){
        Wallet::where('id', 1)->decrement('amount', 100);
        Wallet::where('id_', 2)->increment('amount', 100); // <-- left an error
    });
}
```

Let's run the code.
But now both requests are in a transaction. Therefore, no query should be executed.

<pre>
| id | amount |
|----|--------|
| 1  | 1000   |
| 2  | 0      |
</pre>
<br>
An error occurred while executing the second request.
Because of this, the transaction as a whole failed. The amounts on the wallets have not changed.

Let's fix the `transfer` method and run the code

```php
use Illuminate\Support\Facades\DB;

public function transfer()
{
    DB::transaction(function(){
        Wallet::where('id', 1)->decrement('amount', 100);
        Wallet::where('id', 2)->increment('amount', 100);
    });
}
```
After executing the code, check the database

<pre>
| id | amount |
|----|--------|
| 1  | 900    |
| 2  | 100    |
</pre>
<br>
All requests were completed without errors, so the transaction was successful.
The amounts on the wallets have changed.

This was a simple example using a closure.
But what if you have third-party services whose response is important and should affect an event in the code?
Because not all services return exceptions, some just return a boolean.
To do this, Laravel has several methods for manually processing transactions.

- `DB::beginTransaction()` – for defining a transaction
- `DB::commit()` – to execute all queries after `DB::beginTransaction()`
- `DB::rollBack()` – to cancel all requests after `DB::beginTransaction()`

Let's consider them with an example.
We have a wallet with a balance of $100, and we have a card with a balance of $50, we want to use both balances to transfer $150 to another wallet.

```php
use App\Services\ThirdPartyService;
use Illuminate\Support\Facades\DB;

private ThirdPartyService $thirdPartyService;
    
public function __construct(ThirdPartyService $thirdPartyService)
{
    $this->thirdPartyService = $thirdPartyService;
}
    
public function transfer()
{
    DB::transaction(function(){
        Wallet::where('id', 1)->decrement('amount', 100);
        $this->thirdPartyService->withdrawal(50); // <-- returns false
        Wallet::where('id', 2)->increment('amount', 150);
    });
}
```

Data integrity has been violated.
Since the service does not throw an exception so that the transaction is not completed, but only returns a false value and the code continues to work.
As a result, we replenish the balance by 150 without deducting 50 from the card

Now we use the above methods to manually use transactions

```php
use App\Services\ThirdPartyService;
use Illuminate\Support\Facades\DB;

private ThirdPartyService $thirdPartyService;
    
public function __construct(ThirdPartyService $thirdPartyService)
{
    $this->thirdPartyService = $thirdPartyService;
}
    
public function transfer()
{
    DB::beginTransaction();
    
    Wallet::where('id', 1)->decrement('amount', 100);
    
    if(!$this->thirdPartyService->withdrawal(50)) {
        DB::rollBack();
        
        return;
    }
    
    Wallet::where('id', 2)->increment('amount', 150);
    
    DB::commit();
}
```

Thus, if a third-party service returns `false` to us, then by calling `DB::rollBack()` we will prevent the execution of requests and preserve the integrity of the data