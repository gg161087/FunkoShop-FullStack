# workshop_api
create .env

PORT=3000
HOST=localhost
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=


create DATABASE:

CREATE TABLE rol (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
)ENGINE=InnoDB;
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100),
  rol_id INT,
  FOREIGN KEY (rol_id) REFERENCES rol(id)
)ENGINE=InnoDB;


CREATE TABLE product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(50),
  license VARCHAR(50),
  product_name VARCHAR(100),
  description TEXT,
  SKU VARCHAR(50),
  price DECIMAL(10, 2),
  stock INT,
  discount DECIMAL(5, 2),
  installments INT,
  image_front VARCHAR(200),
  image_back VARCHAR(200)
) ENGINE=InnoDB;