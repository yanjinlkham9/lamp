-- Active: 1732688613389@@127.0.0.1@3306@sesac
show databases;
 CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

 CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
 /* 
 collate: character 저장 규칙
 utf8mb4_unicode_ci: emoji 다국어 저장 가능, utf8보다 더 많은 문자열 저장 가능
  */

-- db 사용 선언
USE sesac;
--table 목록 확인
SHOW TABLES;

--db 삭제
DROP DATABASE mydatabase;

SHOW TABLES;

################[ TABLE 관련 명령어 ]##############################
/* CREATE Table 테이블이름 (
    속성 이름1 데이터타입 제약조건,
    속성 이름2 데이터타입 제약조건
); */

-- 제약조건
-- NOT NULL: null 허용하지 않음
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정 (중복 x, null x)
-- DEFAULT: 기본값 설정
-- UNIQUE: 중복 안되는 값, null x, 한 테이블에 여러개 ok

CREATE Table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

--table 목록 확인
SHOW TABLES;

--테이블 구조 확인
DESC products; 

DROP Table products;

--테이블 속성 수정
ALTER Table products ADD new_column VARCHAR(20);

ALTER TABLE products MODIFY new_column INT;

ALTER TABLE products DROP new_column;


#####[ 여기서부터 DML ]##########
-- 데이터 조작어
-- 데이터 CRUD

CREATE Table user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

--create  >> INSERT INTO
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 20, '서울특별시 영등포구');

--read >> SELECT [column name] FROM [table name] (WHERE 조건)
SELECT * FROM user; --전체 데이터 조회
SELECT name FROM user; --특정 컬럼 전체 조회
SELECT age, name FROM user; --특정 컬럼 2개 전체 조회
-- where 절을 이용해서 조건 걸기
SELECT * from user WHERE age >= 25; --이상

SELECT * FROM user WHERE id=3; --일치비교
SELECT id, age FROM user WHERE name='권순모';

--like 통해서 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; --서울로 시작하는 주소값을 찾아옴
SELECT * FROM user WHERE name LIKE '__희'; --이름이 희로 끝난 사람
SELECT * FROM user WHERE name LIKE '%희%'; --이름에 '희' 들어간 사람
SELECT* FROM user WHERE address LIKE '%광역시%'; --주소에 '광역시' 들어간 사람

-- IN(list) : list 중에서 있는 값들
SELECT * FROM user WHERE age IN(20,21,22,23); --나이가 20,21,22,23중 하나

--BETWEEN a AND b : a-b 사이에 있는 값
SELECT * FROM user WHERE age BETWEEN 20 and 30; --20, 30orood ene horond nastai hun
INSERT INTO user(name, age) VALUES ('서현승', 28);

--IS NULL, IS NOT NULL
SELECT * FROM user WHERE address IS NULL; --주소가 null 사람
SELECT * FROM user WHERE address IS NOT NULL; --주소가 not null 사람

--논리 연산자
SELECT * FROM user WHERE address IS NOT NULL AND age > 25; --주소가 null 아니면서 age가 25이상

SELECT * FROM user WHERE name LIKE '최%' AND age=22; --최씨고 age=22 사람

SELECT * FROM user WHERE address LIKE '%서울%' OR name LIKE '김%'; --서울에 살거나 김씨인 사람

--order by, distinct, limit
SELECT * FROM user ORDER BY age DESC; --age ihes bagaruu 정렬
SELECT * FROM user WHERE id>6 ORDER BY age ASC; -- id 6s ih ued age-r n bagas ihruu jagsaah
--distinct
SELECT age FROM user ORDER BY age;
SELECT DISTINCT age FROM user ORDER BY age ASC;

SELECT name, address 
FROM user 
WHERE address LIKE '서울%' 
ORDER BY name ASC
LIMIT 3;

SELECT * FROM user;

/* update 문:
- UPDATE table name
- SET column="바꿀 데이터"
- WHERE ID=1 */
UPDATE user SET address="서울특별시 도봉구" WHERE ID=1;
UPDATE user SET address="제주특별자치도 제주시", name="이지현" WHERE ID=2;
/* delete 문:
- DELETE FROM tablename WHERE 조건 */
DELETE FROM user WHERE id=11;
DELETE FROM user WHERE id>8;
CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL DEFAULT "홍길동",
    hobby VARCHAR(20)
);
DESC student;
INSERT INTO student(hobby) VALUES('등산');
INSERT INTO student(name, hobby) VALUES('박상우', '등산');

SELECT * FROM student;

/* GROUP BY and HAVING
- 
 */
 DROP Table if EXISTS user; 
 CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구', '야구', '클라이밍', '배드민턴') NOT NULL,
    gender ENUM('남', '여') NOT NULL,
    career_year INT NOT NULL
 );
 DESC user;
 INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);
SELECT * FROM user;

--집계 함수 사용
SELECT COUNT(specialize) FROM user WHERE specialize='축구';
SELECT SUM(career_year) FROM user WHERE specialize='축구'; 
SELECT AVG(career_year) FROM user WHERE specialize='축구'; 
SELECT MAX(career_year) FROM user WHERE specialize='축구'; 
SELECT MIN(career_year) FROM user WHERE specialize='축구'; 
--group by
SELECT specialize FROM user GROUP BY specialize;
SELECT specialize, COUNT(specialize) FROM user GROUP BY specialize;
--having
SELECT specialize, COUNT(specialize) FROM user WHERE gender = "여" GROUP BY specialize;
SELECT specialize, COUNT(specialize) FROM user WHERE gender = "여" GROUP BY specialize HAVING COUNT(specialize) >=2;
--그룹화 된 테이블에 조건을 다는 것: HAVING