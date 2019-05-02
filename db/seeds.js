import {
  openConnection,
  closeConnection
} from "./database_conector";

let database = openConnection();

database.run(
  "CREATE TABLE network_logs("  +
    "id integer PRIMARY KEY,"   +
    " date text NOT NULL,"      +
    " url text NOT NULL,"       +
    " content text NOT NULL"    +
  ")"
);

closeConnection(database);
