-- Active: 1690744329433@@127.0.0.1@3306
CREATE TABLE guests (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  tickets INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  response INTEGER,
  guest_names TEXT,
  replied_at TEXT 
);

SELECT * FROM guests;
DROP TABLE guests;