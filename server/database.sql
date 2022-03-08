CREATE DATABASE jwtauth;

--download extension 'create extension if not exists "uuid-ossp";'
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- insert a user
INSERT INTO users ( user_name, user_email, user_password)
    VALUES ('Henry', 'Henry123@gmail.com', 'Hen321');