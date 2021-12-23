DROP TABLE IF EXISTS play_land;

CREATE DATABASE play_land;

USE play_land;

CREATE TABLE Products(id varchar(36) NOT NULL, PRIMARY KEY(id),name varchar(50) NOT NULL, price INT NOT NULL, description TEXT NOT NULL, image TEXT NOT NULL, descImgI TEXT, descImgII TEXT, descImgIII TEXT, idCategory varchar(36), players INT NOT NULL, rating FLOAT NOT NULL);

CREATE TABLE Category(id varchar(36) NOT NULL, PRIMARY KEY(id),name varchar(50));

CREATE TABLE Product_categories(id varchar(36) NOT NULL, PRIMARY KEY(id), product_id varchar(36) NOT NULL, FOREIGN KEY(product_id) REFERENCES Products(id), category_id varchar(36) NOT NULL, FOREIGN KEY(category_id) REFERENCES Category(id));

CREATE TABLE User(id varchar(36) NOT NULL, PRIMARY KEY(id) ,email varchar(100) NOT NULL, password varchar(100) NOT NULL, name varchar(50) NOT NULL, last_name varchar(50) NOT NULL, image TEXT NOT NULL, role BOOLEAN DEFAULT false);

CREATE TABLE Purchase(id varchar(36) NOT NULL, PRIMARY KEY(id), userId varchar(36) NOT NULL, FOREIGN KEY(userId) REFERENCES User(id), total_price INT NOT NULL, tracking_number INT NOT NULL, shipping_address TEXT, order_date datetime NOT NULL, order_status enum('PENDIENTE','ENVIADO','ENTREGADO','CANCELADO'));

CREATE TABLE Purchase_Details(id varchar(36) NOT NULL, purchase_id varchar(36) NOT NULL, product_id varchar(36) NOT NULL, price INT NOT NULL, quantity INT NOT NULL, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES Products(id), FOREIGN KEY(purchase_id) REFERENCES Purchase(id));

CREATE TABLE Product_User(id varchar(36) NOT NULL, PRIMARY KEY(id), product_id varchar(36) NOT NULL, category_id varchar(36) NOT NULL, FOREIGN KEY(product_id) REFERENCES Products(id), FOREIGN KEY(category_id) REFERENCES Category(id));

CREATE TABLE Reviews(id varchar(36) NOT NULL, PRIMARY KEY(id), title varchar(50), rating FLOAT NOT NULL, review TEXT, product_id varchar(36), FOREIGN KEY(product_id) REFERENCES Products(id), userId varchar(36), FOREIGN KEY(userId) REFERENCES User(id));