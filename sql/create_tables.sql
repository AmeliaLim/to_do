DROP TABLE IF EXISTS todo;

CREATE TABLE IF NOT EXISTS todo(
id SERIAL PRIMARY KEY NOT NULL,
task text UNIQUE,
status INTEGER DEFAULT 0
);
