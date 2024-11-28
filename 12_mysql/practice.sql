
show databases;

CREATE DATABASE practice DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE practice; 
CREATE TABLE member (
id VARCHAR(20) PRIMARY KEY NOT NULL,
name VARCHAR(5) NOT NULL,
age int ,
gender VARCHAR(2) NOT NULL,
email VARCHAR(50)  ,
promotion VARCHAR(2)  DEFAULT('x'));

desc member;