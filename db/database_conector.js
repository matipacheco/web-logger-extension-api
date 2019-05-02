const sqlite3 = require("sqlite3").verbose();

export function openConnection() {
  return new sqlite3.Database("./logs_database.db", sqlite3.OPEN_READWRITE, (error) => {});
}

export function closeConnection(database) {
  database.close((error) => {});
}