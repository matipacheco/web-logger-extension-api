const path = require('path');
const logsDatabasePath = path.resolve(__dirname, 'logs_database.db');

const sqlite3 = require("sqlite3").verbose();

module.exports.openConnection = function() {
  return new sqlite3.Database(logsDatabasePath, sqlite3.OPEN_READWRITE, (error) => {
    console.log(error);
  });
};

module.exports.closeConnection = function(database) {
  database.close((error) => {
    console.log(error);
  });
};