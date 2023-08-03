DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS foods;
DROP TABLE IF EXISTS food_category;
DROP TABLE IF EXISTS orders;

CREATE TABLE admin(
  admin_id SERIAL PRIMARY KEY,
  admin_name VARCHAR(32) NOT NULL,
  password VARCHAR(32) NOT NULL
);

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(24) NOT NULL,
  password VARCHAR(32) NOT NULL,
  email VARCHAR(32) NOT NULL,
  balance INT NOT NULL
);

CREATE TABLE food_category(
  food_category_id SERIAL PRIMARY KEY,
  food_category_name VARCHAR(32) NOT NULL,
  food_category_image VARCHAR(128) NOT NULL
);


CREATE TABLE foods(
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR(48) NOT NULL,
  price INT NOT NULL,
  description TEXT NOT NULL,
  food_image VARCHAR(128) NOT NULL,
  food_category_id INT REFERENCES food_category(food_category_id)
);


CREATE TABLE restaurants(
  restaurant_id SERIAL PRIMARY KEY,
  restaurant_name VARCHAR(32),
  food_category_id INT REFERENCES food_collection(food_collection_id)
);

CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  food_id INT REFERENCES foods(food_id),
  count INT NOT NULL
);

