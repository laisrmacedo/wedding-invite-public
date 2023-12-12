-- Active: 1693426668140@@127.0.0.1@5432@postgres
CREATE TABLE form (
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  tickets INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  response INTEGER,
  guest_names TEXT,
  replied_at TEXT 
);

SELECT * FROM form;