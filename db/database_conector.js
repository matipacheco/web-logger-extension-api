const sqlite3 = require("sqlite3").verbose();

function openConnection() {
  return new sqlite3.Database("./network_log.db", sqlite3.OPEN_READWRITE, (error) => {});
}

function closeConnection(database) {
  database.close((error) => {});
}

export { openConnection, closeConnection }