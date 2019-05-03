const path = require("path");
const logsDatabasePath = path.resolve(__dirname, 'logs_database.db');

const sqlite3 = require("sqlite3").verbose();

/**
 * openConnection: Connects to the SQLite database
 * @returns {exports.cached.Database}
 */
function openConnection () {
  return new sqlite3.Database(logsDatabasePath, sqlite3.OPEN_READWRITE, (error) => {
    if (error) { throw error }
  });
}

/**
 * closeConnection: Closes the database connection
 * @param database
 */
function closeConnection (database) {
  database.close((error) => {
    if (error) { throw error }
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
    if (error) { throw error }
  });

  closeConnection(database);
}

/**
 * selectAll: Returns all network logs.
 * @param callback
 */
function selectAll(callback) {
  let database    = openConnection();
  let selectQuery = "SELECT * FROM network_logs";

  database.all(selectQuery, [], (error, rows) => {
    if (error) { throw error }

    callback(rows);
  });

  closeConnection(database);
}

module.exports.openConnection  = openConnection;
module.exports.closeConnection = closeConnection;
module.exports.selectAll  = selectAll;
module.exports.insert     = insert;