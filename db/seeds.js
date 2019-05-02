let database_connector = require("./database_conector");

let database = database_connector.openConnection();

database.run(
  "CREATE TABLE network_logs("  +
    "id integer PRIMARY KEY,"   +
    " date text NOT NULL,"      +
    " url text NOT NULL,"       +
    " content text NOT NULL"    +
  ")"
);

database_connector.closeConnection(database);
