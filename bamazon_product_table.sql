#drop database bamazon ;

create database baMazon;

use baMazon;

drop table Product;

create table Product
(item_id    int(6) NOT NULL,
product_name      varchar(10),
department_name   varchar(20),
price     decimal,
stock_quatity     int(4),
PRIMARY KEY ( item_id ));
 insert into Product values (100, 'jeans', 'Men', 200,  100  ) ;
 insert into Product values (200, 'shirts', 'Men', 50,  100  ) ;
 insert into Product values (300, 'shoes', 'Men', 100,  100  ) ;
 insert into Product values (400, 'jeans', 'Women', 100,  100  ) ;
 insert into Product values (500, 'shirt', 'Women', 50,  100  ) ;
 insert into Product values (600, 'shoes', 'Women', 200,  100  ) ;
 insert into Product values (700, 'bedsheets', 'Home', 20,  100  ) ;
 insert into Product values (800, 'Pillows', 'Home', 10,  100  ) ;
 insert into Product values (900, 'Phone', 'electronics', 100,  100  ) ;
 insert into Product values (1000, 'TV', 'electroincs', 100,  100  ) ;
 
 select * from departments;
 Delete  from product where item_id = 100;
  select * from Product where item_id = 800;
  
  create table departments
(dept_id    int(6) NOT NULL,
dept_name   varchar(20),
Over_head_cost     decimal,
PRIMARY KEY ( dept_id ));



