
show databases;

CREATE DATABASE practice DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE practice; 
CREATE TABLE member (
id VARCHAR(20) PRIMARY KEY NOT NULL,
name VARCHAR(5) NOT NULL,
age int ,
gender VARCHAR(2) NOT NULL,
email VARCHAR(50)  ,
promotion VARCHAR(2)  DEFAULT 'x');

desc member;

ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member ADD interest VARCHAR(100);
ALTER TABLE member DROP age;

CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT ' ',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT (0)
);
desc user;
DROP TABLE user;

INSERT INTO user (id, pw, name, gender, birthday, age ) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', "1990-01-31", 33);
INSERT INTO user (id, pw, name, gender, birthday, age ) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', 19920331, 31);
INSERT INTO user (id, pw, name, gender, birthday, age ) VALUES ('power70', 'qxur8sda', '변사또', 'M', 19700502, 53);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', 19841018, 39);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES('widowmaker', '38ewifh3', '위도우', 'F', 19760627, 47);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES('dvadva', 'k3f3ah', '송하나', 'F', 20010603, 22);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES('jungkrat', '4ifha7f', '정크랫', 'M', 19991111, 24);
SELECT * FROM user;

--1.
SELECT * FROM user ORDER BY birthday ASC;
--2.
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
--3.
SELECT id, name FROM user WHERE birthday LIKE '1990%';
--4.
SELECT * FROM user WHERE birthday LIKE '%06%' ORDER BY birthday ASC;
--5.
SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%';
--6.
SELECT * FROM user ORDER BY age DESC LIMIT 3;
--7.
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
--8.
UPDATE user SET pw=12345678 WHERE id='hong1234';
--9.
DELETE FROM user WHERE id='jungkrat';
