--
-- File generated with SQLiteStudio v3.4.13 on Sun May 4 14:31:38 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: research_papers
CREATE TABLE IF NOT EXISTS research_papers (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     TEXT    NOT NULL,
    author    TEXT    NOT NULL,
    year      INTEGER NOT NULL,
    sdg       INTEGER NOT NULL,
    sdg_title TEXT,
    abstract  TEXT
);


-- Table: users
CREATE TABLE IF NOT EXISTS users (
    id         INTEGER  PRIMARY KEY AUTOINCREMENT,
    username   TEXT     NOT NULL
                        UNIQUE,
    password   TEXT     NOT NULL,
    role       TEXT     DEFAULT 'user',-- For future use like admin/user
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
