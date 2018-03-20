
#creando la base de datos para la aplicacion de CRUD con node JS, Semantic, Express JS y MySql
CREATE database nodejs;

use nodejs;

create table productos(
	id_producto int primary key auto_increment,
    nombre varchar(255) not null,
    precio float not null,
    stock int not null,
    fecha_creacion datetime null
);


INSERT INTO productos (nombre,precio,stock,fecha_creacion) values('salsa de tomate', 2.99, 100, '2018-03-18 09:28:12');
INSERT INTO productos (nombre,precio,stock,fecha_creacion) values('Mayonesa', 3.99, 20, '2018-03-18 09:28:22');