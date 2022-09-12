---
layout: post
title: What are indexes and how do they work
description: Indexes in MySQL are a great tool for optimizing SQL queries.
keywords: database sql mysql index indexes
image:
    path: /assets/images/posts/what-are-indexes-and-how-do-they-work/image1.webp
    width: 897
    height: 657
    alt: Reading data from disk
tags: sql mysql indexes
---

Indexes in MySQL are a great tool for optimizing SQL queries.
<br>
To understand how they work, let's look at working with data without them.

<h3>1. Reading data from disk</h3>

What we see as files, the hard drive sees them as blocks.
One file usually occupies several blocks.
Each block knows which block comes after it.
The file is divided into chunks and each chunk is stored in an empty block.

<div class="post-image">
    <img src="{{ site.url }}{{ page.image.path }}" alt="{{ page.image.alt }}">
</div>

When reading a file, we go through all the blocks in turn and assemble the file piece by piece.
Blocks of the same file can be scattered across the disk (fragmentation).
Then reading the file will slow down, as you will need to jump over different parts of the disk.

When we look for something inside a file, we need to go through all the blocks in which it is stored.
If the file is very large, then the number of blocks will be significant.
The need to jump from block to block, which may be in different places, will greatly slow down the search for data.

<h3>2. Finding data in MySQL</h3>

MySQL tables are regular files. Let's execute a query like this:

```sql
SELECT * FROM users WHERE age = 29
```

MySQL then opens a file that stores data from the `users` table.
And then it starts to sort through the entire file to find the necessary records.

In addition, MySQL will compare the data in `each row of the table` with the value in the query.
Let's say you're working with a table that has 10 records.
Then MySQL will read all 10 records, compare each of their `age` column with the value 29, and select only the matching data:

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image2.webp" alt="Finding data in MySQL">
</div>

So there are two problems when reading data:

- Low speed of reading files due to the location of blocks in different parts of the disk (fragmentation).
- It requires a large number of comparison operations to find the desired data.

<h3>3. Data sorting</h3>

Let's imagine that we have sorted our 10 entries in descending order.
Then, using the <a href="https://en.wikipedia.org/wiki/Binary_search_algorithm" target="_blank" rel="noreferrer">binary search algorithm</a>,
we could select the values we needed in a maximum of four operations:

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image3.webp" alt="Data sorting">
</div>

In addition to fewer comparison operations, we would save on reading unnecessary records.

An index is a sorted set of values. In MySQL, indexes are always built on a particular column.
For example, we could build an index on the age column from the example.

<h3>4. Selecting Indexes in MySQL</h3>

In the simplest case, an index must be created for those columns that are present in the WHERE clause.

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image4.webp" alt="Selecting Indexes in MySQL">
</div>

Consider the query from the example:

```sql
SELECT * FROM users WHERE age = 29
```

We need to create an index on the `age` column:

```sql
CREATE INDEX age ON users(age);
```

After this operation, MySQL will start using the age index to perform similar queries.
The index will also be used for selections by ranges of values for this column:

```sql
SELECT * FROM users WHERE age < 29
```

<h4 class="mb-0">Sorting</h4>

For queries like this:

```sql
SELECT * FROM users ORDER BY register_date
```

The same rule applies — we create an index on the column by which sorting occurs:

```sql
CREATE INDEX register_date ON users(register_date);
```

<h4 class="mb-0">Index storage internals</h4>

Imagine our table looks like this:

<pre>
| id | name   | age |
|----|--------|-----|
| 1  | Den    | 29  |
| 2  | Alyona | 15  |
| 3  | Putin  | 89  |
| 4  | Petro  | 12  |
</pre>

After creating an index on the age column, MySQL will store all its values sorted.
<br>
In addition, the relationship between the value in the index and the entry to which this value corresponds will be preserved.
The primary key is usually used for this:

<pre>
| age | index |
|-----|-------|
| 12  | 4     |
| 15  | 2     |
| 29  | 1     |
| 89  | 3     |
</pre>

<h4 class="mb-0">Unique indexes</h4>

MySQL supports unique indexes. This is useful for columns whose values must be unique throughout the table.
Such indexes improve sampling efficiency for unique values. For example:

```sql
SELECT * FROM users WHERE email = 'example@example.com';
```

You need to create a unique index on the email column:

```sql
CREATE UNIQUE INDEX email ON users(email)
```

Then, when searching for data, MySQL will stop after finding the first match. 
In the case of a regular index, one more check (of the next value in the index) will be mandatory.

<h3>5. Composite Indexes</h3>

MySQL can only use one index per query (unless MySQL is able to combine select results across multiple indexes).
Therefore, for queries that use multiple columns, composite indexes must be used.

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image5.webp" alt="Composite Indexes">
</div>

Consider this query:

```sql
SELECT * FROM users WHERE age = 29 AND gender = 'male'
```

We need to create a composite index on both columns:

```sql
CREATE INDEX age_gender ON users(age, gender);
```

<h4 class="mb-0">How a composite index works</h4>

To properly use composite indexes, you need to understand how they are stored.
Everything works exactly the same as it would for a regular index.
But for values, the values of all incoming columns are used at once.
For a table with data like this:

<pre>
| id | name   | age | gender |
|----|--------|-----|--------|
| 1  | Den    | 29  | male   |
| 2  | Alyona | 15  | female |
| 3  | Putin  | 89  | tsar   |
| 4  | Petro  | 12  | male   |
</pre>

the result of the composite index will be:

<pre>
| age_gender | index |
|------------|-------|
| 12male     | 4     |
| 15female   | 2     |
| 29male     | 1     |
| 89tsar     | 3     |
</pre>

This means that the order of the columns in the index will play a big role.
Generally, columns that are used in `WHERE` clauses should be placed at the beginning of the index.
Columns from `ORDER BY` - to the end.

<h4 class="mb-0">Search by range</h4>

Imagine that our query will not use a comparison but a range search:

```sql
SELECT * FROM users WHERE age <= 29 AND gender = 'male'
```

Then MySQL will not be able to use the full index because gender values will be different for different values of the age column.
In this case, the database will try to use part of the index (only age) to execute this query:

<pre>
| age_gender | index |
|------------|-------|
| 12male     | 4     |
| 15female   | 2     |
| 29male     | 1     |
| 89tsar     | 3     |
</pre>

First, all data that matches the condition `age <= 29` will be filtered.
Then, a search for the value `"male"` will be performed without using an index.

<h4 class="mb-0">Sorting</h4>

Composite indexes can also be used for sorting:

```sql
SELECT * FROM users WHERE gender = 'male' ORDER BY age
```

In this case, we will need to create the index in a different order because sorting (ORDER) occurs after filtering (WHERE):

```sql
CREATE INDEX gender_age ON users(gender, age);
```

This order of the columns in the index will allow you to filter by the first part of the index, and then sort the result by the second.

There can be more columns in the index if required:

```sql
SELECT * FROM users WHERE gender = 'male' AND country = 'UA' ORDER BY age, register_time
```

In this case, you should create an index like this:

```sql
CREATE INDEX gender_country_age_register ON users(gender, country, age, register_time);
```

<h3>6. Using EXPLAIN to analyze Indexes</h3>

The EXPLAIN statement will show index usage data for a particular query. For example

```sql
mysql> EXPLAIN SELECT * FROM users WHERE email = 'example@example.com';
```

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image6.png" alt="Using EXPLAIN to analyze Indexes - image 1">
</div>

The `key` column shows the index used. The `possible_keys` column shows all the indexes that can be used for this query.
The `rows` column shows the number of records that the database had to read to execute this query (there are 336 records in the table).

As you can see, no index is used in the example. After creating the index:

```sql
mysql> EXPLAIN SELECT * FROM users WHERE email = 'example@example.com';
```

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image7.png" alt="Using EXPLAIN to analyze Indexes - image 2">
</div>

Only one entry was read because the index was used.

<h4 class="mb-0">Checking the length of compound indexes</h4>

Explain will also help you determine if you are using a composite index correctly.
Let's check the query from the example (with an index on the age and gender columns):

```sql
mysql> EXPLAIN SELECT * FROM users WHERE age = 29 AND gender = 'male';
```

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image8.png" alt="Using EXPLAIN to analyze Indexes - image 3">
</div>

The value of `key_len` indicates the length of the index to use.
In our case, 24 bytes is the length of the entire index (5 bytes age + 19 bytes gender).

If we change the exact comparison to a range search, we see that MySQL uses only part of the index:

```sql
mysql> EXPLAIN SELECT * FROM users WHERE age <= 29 AND gender = 'male';
```

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image9.png" alt="Using EXPLAIN to analyze Indexes - image 4">
</div>

This indicates that the created index is not suitable for this query. If we create the correct index:

```sql
mysql> Create index gender_age on users(gender, age);
mysql> EXPLAIN SELECT * FROM users WHERE age < 29 and gender = 'male';
```

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image10.png" alt="Using EXPLAIN to analyze Indexes - image 5">
</div>

In this case, MySQL uses the entire `gender_age` index, because the order of the columns in it allows you to make this selection.

<h3>7. Index selectivity</h3>

Let's go back to the query:

```sql
SELECT * FROM users WHERE age = 29 AND gender = 'male'
```

For such a query, you need to create a composite index. But how to choose the right sequence of columns in the index? Option two:

- age, gender
- gender, age

Both will fit. But they will work with different efficiency.

To understand this, consider the uniqueness of the values of each column and the number of corresponding entries in the table:

```sql
mysql> select age, count(*) from users group by age;
```

<pre>
+------+----------+
| age  | count(*) |
+------+----------+
|   15 |      160 |
|   16 |      250 |
|        ...      |
|   76 |      210 |
|   85 |      230 |
+------+----------+
68 rows in set (0.00 sec)
</pre>
<br>
```sql
mysql> select gender, count(*) from users group by gender;
```

<pre>
+--------+----------+
| gender | count(*) |
+--------+----------+
| female |     8740 |
| male   |     4500 |
+--------+----------+
2 rows in set (0.00 sec)
</pre>

This information tells us the following:
- Any value of the `age` column usually contains about 200 entries.
- Any value of the `gender` column is about 6000 entries.

If the `age` column comes first in the index, then MySQL after the first part of the index will reduce the number of records to 200.
It remains to make a selection on them. If the `gender` column comes first,
then the number of entries will be reduced to 6000 after the first part of the index.
That is, an order of magnitude more than in the case of `age`.

This means that the `age_gender` index will perform better than `gender_age`.

The selectivity of a column is determined by the number of records in the table with the same values.
When there are few records with the same value, selectivity is high. Such columns should be used first in composite indexes.

<h3>7. Primary Keys</h3>

A primary key is a special type of index that is an identifier for records in a table.
It is necessarily unique and is specified when creating tables:

```sql
CREATE TABLE `users` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `email` varchar(128) NOT NULL,
    `name` varchar(128) NOT NULL,
    PRIMARY KEY (`id`),
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
```

When using InnoDB tables, always define primary keys. If there is no primary key, MySQL will still create a virtual private key.

<h4 class="mb-0">Clustered indexes</h4>

Regular indexes are non-clustered. This means that the index itself only stores references to table entries.
When working with an index, only the list of records (more precisely, the list of their primary keys) that match the query is determined.
After that, another request occurs - to get the data of each record from this list.

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image11.webp" alt="Primary Keys - image 1">
</div>

Clustered indexes store entire record data, not references to them. When working with such an index, no additional data read operation is required.

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image12.webp" alt="Primary Keys - image 2">
</div>

Primary keys of InnoDB tables are clustered. Therefore, selections for them are very efficient.

<h4 class="mb-0">Overhead</h4>

It is important to remember that indexes involve additional disk writes.
Each time data is updated or added to the table, the data in the index is also written and updated.

<div class="post-image">
    <img src="{{ site.url }}/assets/images/posts/what-are-indexes-and-how-do-they-work/image13.webp" alt="Primary Keys - image 3">
</div>

Create only necessary indexes to avoid wasting server resources. Control index sizes for your tables:

```sql
mysql> show table status;
```

<pre>
+-------------------+--------+---------+------------+--------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+-------------+------------+-----------------+----------+----------------+---------+
| Name              | Engine | Version | Row_format | Rows   | Avg_row_length | Data_length | Max_data_length | Index_length | Data_free | Auto_increment | Create_time         | Update_time | Check_time | Collation       | Checksum | Create_options | Comment |
+-------------------+--------+---------+------------+--------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+-------------+------------+-----------------+----------+----------------+---------+
...
| users             | InnoDB |      10 | Compact    |    314 |            208 |       65536 |               0 |        16384 |         0 |            355 | 2014-07-11 01:12:17 | NULL        | NULL       | utf8_general_ci |     NULL |                |         |
+-------------------+--------+---------+------------+--------+----------------+-------------+-----------------+--------------+-----------+----------------+---------------------+-------------+------------+-----------------+----------+----------------+---------+
18 rows in set (0.06 sec)
</pre>
<br>
<h3>When to create indexes?</h3>

- Indexes should be created as slow queries are discovered. Queries that run for more than 1 second are prime candidates for optimization.
- Start creating indexes with the most frequent queries. A query that runs for a second, but 1000 times a day does more damage than a 10-second query that runs several times a day.
- Do not create indexes on tables with fewer than a few thousand records. For such sizes, the gain from using the index will be almost imperceptible.
- Do not create indexes ahead of time, such as in a development environment. Indexes should be set exclusively for the form and type of load of the operating system.
- Remove unused indexes.

<h3>The most important</h3>

Allow sufficient time to analyze and organize indexes in MySQL (and other databases).
This can take much more time than designing the database structure.
It will be convenient to organize a test environment with a copy of real data and test different index structures there.

Don't create indexes on every column in a query, MySQL doesn't work that way. Use unique indexes where necessary. Always set primary keys.
