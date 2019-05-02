const express = require("express");
const app     = express();

let databaseHandler = require("./db/database_handler");

app.get("/", (request, response) => {
  response.send(databaseHandler.selectAll());
});

app.post("/register_log", (request, response) => {
  //databaseHandler.insert(request.body.....)
  response.send("POST received!");
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});