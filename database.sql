CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';

CREATE DATABASE jwttutorial;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_password TEXT NOT NULL
)

SELECT * from users;

INSERT INTO users(user_name, user_email, user_password) VALUES ('Angelina', '89658366303@mail.ru', "Angelina");

