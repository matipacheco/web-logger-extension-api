let databaseHandler = require("./database_handler");
let database        = databaseHandler.openConnection();

database.run(
  "CREATE TABLE network_logs("  +
    "id integer PRIMARY KEY,"   +
    " date text NOT NULL,"      +
    " url text NOT NULL,"       +
    " content text NOT NULL"    +
  ")"
);

databaseHandler.closeConnection(database);
