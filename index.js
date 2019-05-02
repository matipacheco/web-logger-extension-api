import {
  openConnection,
  closeConnection
} from "./db/database_conector";

const express = require("express");
const app     = express();

app.post("/log", (request, response) => {
  database = openConnection();
  closeConnection(database);
  response.send("POST received!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});