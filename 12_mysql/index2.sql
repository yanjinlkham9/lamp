show Tables;
CREATE Table customer (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
DESC customer;
INSERT INTO customer VALUES('aaa', '손흥민', "1992-03-17");
INSERT INTO customer VALUES('bbb', '황희찬', "1997-11-01");
INSERT INTO customer VALUES('ccc', '이강인', "2001-05-31");
INSERT INTO customer VALUES('ddd', '조현우', "1992-05-12");
SELECT * FROM customer;
--외래키 테이블
-- ON UPDATE CASCADE: 기존 테이블 데이터 변경 시 외래키로 연결된(references) 테이블 데이터도 자동 변경
-- 측, customer 테이블 id 변경 되면 customer_id가 같이 변경
-- ON DELETE CASCADE: 기존 테이블 데이터 변경 시 외래키로 연결된(references) 테이블 데이터도 자동 삭제
-- 측, customer 테이블 id 변경 되면 customer_id가 같이 삭제
CREATE Table orderlist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);
--테이블 삭제시 구매테이블(orderlist) (FK 있는 테이블)(1)먼저 삭제
--회원 테이블(customer) (참조되는 PK가 있는 테이블) (2)나중 삭제
DESC orderlist;
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES('aaa', '맥북', 1);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES('bbb', '빅파이', 31);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES('ccc', '키보드', 3);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES('bbb', '초코파이', 5);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES('ccc', '텀블러',2);
--customer table에 없는 회원 구매할 수 없음 
--INSERT INTO orderlist(customer_id, product_name, quantity) VALUES('fff', '맥북', 1);
SELECT * FROM orderlist;
--################################
--JOIN: 2table 묶어서 하나의 테이블 만듦

--INNERJOIN
--1. INNER JOIN 과 ON 사용
SELECT * FROM customer INNER JOIN orderlist ON customer.id=orderlist.customer_id;

--2. INNER JOIN 시 WHERE 사용
SELECT * FROM customer, orderlist WHERE customer.id=orderlist.customer_id;

--3. INNER JOIN 과 ON 사용, where 조회조건 추가
SELECT * FROM customer INNER JOIN orderlist ON customer.id=orderlist.customer_id 
WHERE quantity>=5;
--4. INNER JOIN 시 WHERE 사용,조회조건 추가
SELECT * FROM customer, orderlist WHERE customer.id=orderlist.customer_id 
AND quantity>=5; --WHERE 조인조건 AND 조희조건
--5. 특정 컬럼 조회
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name, orderlist.quantity
FROM orderlist, customer
WHERE customer.id=orderlist.customer_id;
--6. 테이블의 별칭 지어서 접근 (AS)
SELECT c.id as userID, o.customer_id, c.name, o.product_name, o.quantity
FROM orderlist AS o , customer AS c
WHERE c.id=o.customer_id;

-- ***** [left outer join, right outer join]
SELECT * FROM orderlist LEFT OUTER JOIN customer ON customer.id = orderlist.customer_id;
SELECT * FROM orderlist RIGHT OUTER JOIN customer ON customer.id = orderlist.customer_id;

--natural join 
--같은 컬럼이 없어서 안됨
SELECT * FROM orderlist NATURAL JOIN customer;
--DCL
DESC mysql.user;
SELECT * FROM mysql.user;

CREATE USER 'user2'@'localhost' IDENTIFIED BY '4321';
show grants for 'user2'@'localhost'; --(권한 확인)권한 없음
DROP USER 'user2'@'localhost';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password
by 'root'; --mysql root 비밀번호 변경
