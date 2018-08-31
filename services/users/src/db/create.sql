CREATE DATABASE users_dev;
CREATE DATABASE users_test;

\c users_dev;

CREATE TABLE users (
  first VARCHAR,
  last VARCHAR
);
