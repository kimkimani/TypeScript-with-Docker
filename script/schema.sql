/* Create the database */
CREATE DATABASE IF NOT EXISTS blog;

/* Switch to the blog database */
USE blog;

/* Drop existing tables if they exist */
DROP TABLE IF EXISTS posts;

/* Create the tables */
CREATE TABLE posts(
    /* Add auto-incrementing primary key */
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    /* title column*/
    title VARCHAR(255) NOT NULL,
    /* description column of type TEXT */
    description TEXT NOT NULL,
    /* author column, allowing NULL values */
    author VARCHAR(255) DEFAULT NULL,
    /* content column */
    content VARCHAR(255) DEFAULT NULL,
    /* a created_at column with the TIMESTAMP data type
    set to the current timestamp by default */
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
