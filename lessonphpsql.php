<?php

// string and echo
echo "This is my first script";

$stringvar = "This is a string variable";
echo $stringvar;
$stringvar1 = "Hello how you doing";
$stringvar2 = "\"Mark\"";
$stringvar3 = " today $stringvar2";
$stringvar4 = ' today $stringvar2'; // this is raw text now
$stringvar4 = ' today /"$stringvar2/"'; // this is raw text now

$integer = 25;
$integer += 10;
echo $stringvar1 . $stringvar3;

/* this is a comment
*/
// <> is not equals to

//if statements
$num = 3;
if ($num > 4) {

echo "The condition is true";
}

// SQL 
// C:\xampp\mysql\bin\mysql -u root
// show databases;
// CREATE TABLE userdata(name VARCHAR(50) NOT NULL, address VARCHAR(255) NOT NULL);
// use testdb;
// describe userdata;
// INSERT INTO userdata(name, address)VALUES('Mark','19711 Green Road');
// ALTER TABLE userdata ADD email VARCHAR(50) NOT NULL; // add email column
// ALTER TABLE userdata DROP email; // drop email column
// INSERT INTO userdata(name, address, email)VALUES('Lisa','yo momma house','test@test.com');
// UPDATE userdata SET email='mark@test.com' WHERE name='Mark';
// UPDATE userdata SET email='mark@test.com (mark1@test.com)'' WHERE name='Mark';


// add users
// CREATE USER 'tester99'@'localhost' IDENTIFIED by 'tester100';
// GRANT ALL PRIVILEGES ON testdb.* TO 'tester99'@'localhost' IDENTIFIED BY 'tester100';
// FLUSH PRIVILEGES; // need to restart sql to update users
// C:\xampp\mysql\bin\mysql -u tester99 -p testdb

// more learning
// CREATE DATABASE test;
// CREATE DATABASE test;
// DROP DATABASE test;
// DROP DATABASE test;
// constraints are - check default, foreign key, index, unique, primary key, not null

/* CREATE TABLE emp(
ID int not null auto_increment,
ename varchar(20),
address varchar(30),
primary key(id)
);

*/
// DROP TABLE emp;

// column operators
/*
SELECT AVG(Marks) FROM Student;
SELECT SUM(Marks) FROM Student;
SELECT fname, lname, MIN(Marks) FROM Student;
SELECT fname, lname, MAX(Marks) FROM Student;
SLECT Name,City FROM table GROUP BY City;
HAVING City IS 'Boise';
ORDER BY city DESC;
IS NULL;
IS NOT NULL;
UPDATE Student SET Fname = 'Amar', Lname= 'Kumar' WHERE StudentID = 1;
DELETE FROM Table_name WHERE condition;
WHERE city IN ('Boise','Manilla');

*/



?>