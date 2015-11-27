pracuser@pracuser-VirtualBox:~$ mysql -h localhost -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 39
Server version: 5.5.38-0ubuntu0.14.04.1 (Ubuntu)

Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> SELECT VERSION();
+-------------------------+
| VERSION()               |
+-------------------------+
| 5.5.38-0ubuntu0.14.04.1 |
+-------------------------+
1 row in set (0.00 sec)

mysql> SELECT now();
+---------------------+
| now()               |
+---------------------+
| 2015-11-25 14:21:44 |
+---------------------+
1 row in set (0.00 sec)

mysql> HELP;

For information about MySQL products and services, visit:
   http://www.mysql.com/
For developer information, including the MySQL Reference Manual, visit:
   http://dev.mysql.com/
To buy MySQL Enterprise support, training, or other products, visit:
   https://shop.mysql.com/

List of all MySQL commands:
Note that all text commands must be first on line and end with ';'
?         (\?) Synonym for `help'.
clear     (\c) Clear the current input statement.
connect   (\r) Reconnect to the server. Optional arguments are db and host.
delimiter (\d) Set statement delimiter.
edit      (\e) Edit command with $EDITOR.
ego       (\G) Send command to mysql server, display result vertically.
exit      (\q) Exit mysql. Same as quit.
go        (\g) Send command to mysql server.
help      (\h) Display this help.
nopager   (\n) Disable pager, print to stdout.
notee     (\t) Don't write into outfile.
pager     (\P) Set PAGER [to_pager]. Print the query results via PAGER.
print     (\p) Print current command.
prompt    (\R) Change your mysql prompt.
quit      (\q) Quit mysql.
rehash    (\#) Rebuild completion hash.
source    (\.) Execute an SQL script file. Takes a file name as an argument.
status    (\s) Get status information from the server.
system    (\!) Execute a system shell command.
tee       (\T) Set outfile [to_outfile]. Append everything into given outfile.
use       (\u) Use another database. Takes database name as argument.
charset   (\C) Switch to another charset. Might be needed for processing binlog with multi-byte charsets.
warnings  (\W) Show warnings after every statement.
nowarning (\w) Don't show warnings after every statement.

For server side help, type 'help contents'

mysql> HELP Contents;
You asked for help about help category: "Contents"
For more information, type 'help <item>', where <item> is one of the following
categories:
   Account Management
   Administration
   Compound Statements
   Data Definition
   Data Manipulation
   Data Types
   Functions
   Functions and Modifiers for Use with GROUP BY
   Geographic Features
   Help Metadata
   Language Structure
   Plugins
   Procedures
   Storage Engines
   Table Maintenance
   Transactions
   User-Defined Functions
   Utility

mysql> HELP Data Manipulation;
You asked for help about help category: "Data Manipulation"
For more information, type 'help <item>', where <item> is one of the following
topics:
   CALL
   DELETE
   DO
   DUAL
   HANDLER
   INSERT
   INSERT DELAYED
   INSERT SELECT
   JOIN
   LOAD DATA
   LOAD XML
   REPLACE
   SELECT
   UNION
   UPDATE

mysql> HELP SHOW DATABASES;
Name: 'SHOW DATABASES'
Description:
Syntax:
SHOW {DATABASES | SCHEMAS}
    [LIKE 'pattern' | WHERE expr]

SHOW DATABASES lists the databases on the MySQL server host. SHOW
SCHEMAS is a synonym for SHOW DATABASES. The LIKE clause, if present,
indicates which database names to match. The WHERE clause can be given
to select rows using more general conditions, as discussed in
http://dev.mysql.com/doc/refman/5.5/en/extended-show.html.

You see only those databases for which you have some kind of privilege,
unless you have the global SHOW DATABASES privilege. You can also get
this list using the mysqlshow command.

If the server was started with the --skip-show-database option, you
cannot use this statement at all unless you have the SHOW DATABASES
privilege.

URL: http://dev.mysql.com/doc/refman/5.5/en/show-databases.html


mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| example            |
| mydb               |
| mysql              |
| performance_schema |
| todo               |
+--------------------+
6 rows in set (0.00 sec)

mysql> USE TODO;
ERROR 1049 (42000): Unknown database 'TODO'
mysql> USE todo;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> SELECT DATABASE();
+------------+
| DATABASE() |
+------------+
| todo       |
+------------+
1 row in set (0.00 sec)

mysql> SHOW TABLES;
+----------------+
| Tables_in_todo |
+----------------+
| ItemTag        |
| Tag            |
| ToDoAssignment |
| ToDoItem       |
| ToDoList       |
| User           |
+----------------+
6 rows in set (0.00 sec)

mysql> DESC ItemTag;
+--------+---------+------+-----+---------+-------+
| Field  | Type    | Null | Key | Default | Extra |
+--------+---------+------+-----+---------+-------+
| ToDoId | int(11) | NO   | PRI | NULL    |       |
| TagId  | int(11) | NO   | PRI | NULL    |       |
+--------+---------+------+-----+---------+-------+
2 rows in set (0.00 sec)

mysql> DESC Tag;
+-------+---------+------+-----+---------+----------------+
| Field | Type    | Null | Key | Default | Extra          |
+-------+---------+------+-----+---------+----------------+
| Id    | int(11) | NO   | PRI | NULL    | auto_increment |
| Text  | text    | YES  |     | NULL    |                |
+-------+---------+------+-----+---------+----------------+
2 rows in set (0.00 sec)

mysql> DESC ToDoAssignment;
+------------+-----------+------+-----+---------+----------------+
| Field      | Type      | Null | Key | Default | Extra          |
+------------+-----------+------+-----+---------+----------------+
| ToDoId     | int(11)   | NO   | PRI | NULL    | auto_increment |
| AssigneeId | int(11)   | NO   | PRI | NULL    |                |
| AssignDate | timestamp | YES  |     | NULL    |                |
+------------+-----------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

mysql> DESC ToDoItem;
+----------------+------------+------+-----+---------+----------------+
| Field          | Type       | Null | Key | Default | Extra          |
+----------------+------------+------+-----+---------+----------------+
| Id             | int(11)    | NO   | PRI | NULL    | auto_increment |
| Title          | text       | YES  |     | NULL    |                |
| Text           | text       | YES  |     | NULL    |                |
| CreationDate   | timestamp  | YES  |     | NULL    |                |
| DueDate        | timestamp  | YES  |     | NULL    |                |
| Completed      | tinyint(1) | YES  |     | NULL    |                |
| CompletionDate | timestamp  | YES  |     | NULL    |                |
| Priority       | int(11)    | NO   | PRI | NULL    |                |
| ToDoListID     | int(11)    | YES  | MUL | NULL    |                |
| ParentToDo     | int(11)    | YES  | MUL | NULL    |                |
+----------------+------------+------+-----+---------+----------------+
10 rows in set (0.00 sec)

mysql> Desc ToDoList;
+--------------+------------+------+-----+---------+----------------+
| Field        | Type       | Null | Key | Default | Extra          |
+--------------+------------+------+-----+---------+----------------+
| Id           | int(11)    | NO   | PRI | NULL    | auto_increment |
| Name         | text       | YES  |     | NULL    |                |
| CreationDate | timestamp  | YES  |     | NULL    |                |
| Owner        | int(11)    | YES  | MUL | NULL    |                |
| IsPublic     | tinyint(1) | YES  |     | NULL    |                |
+--------------+------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)

mysql> Desc User;
+----------+----------+------+-----+---------+----------------+
| Field    | Type     | Null | Key | Default | Extra          |
+----------+----------+------+-----+---------+----------------+
| Id       | int(11)  | NO   | PRI | NULL    | auto_increment |
| Name     | text     | YES  |     | NULL    |                |
| Email    | text     | YES  |     | NULL    |                |
| Username | tinytext | YES  |     | NULL    |                |
| Password | text     | YES  |     | NULL    |                |
+----------+----------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
