const path = require('path');
const logsDatabasePath = path.resolve(__dirname, 'logs_database.db');

const sqlite3 = require("sqlite3").verbose();

/**
 * openConnection: Connects to the SQLite database
 * @returns {exports.cached.Database}
 */
function openConnection () {
  return new sqlite3.Database(logsDatabasePath, sqlite3.OPEN_READWRITE, (error) => {
    console.log(error);
  });
}

/**
 * closeConnection: Closes the database connection
 * @param database
 */
function closeConnection (database) {
  database.close((error) => {
    console.log(error);
  });
}

/**
 * insert: Creates a row in the network_los database
 * @param date
 * @param url
 * @param content
 */
function insert(date, url, content) {
  let database    = openConnection();
  let insertQuery = "INSERT INTO network_logs(date, url, content) VALUES (?, ?, ?)";

  database.run(insertQuery, [date, url, content], (error) => {
    console.log(error);
  });

  closeConnection(database);
}

function selectAll() {
  let database    = openConnection();
  let selectQuery = "SELECT * FROM network_logs";

  let allLogs = database.run(selectQuery, (error) => {
    console.log(error);
  });

  closeConnection(database);

  return allLogs;
}

module.exports.openConnection  = openConnection;
module.exports.closeConnection = closeConnection;
module.exports.selectAll  = selectAll;
module.exports.insert     = insert;