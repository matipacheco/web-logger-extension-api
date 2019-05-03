const express = require("express");
const app     = express();

let databaseHandler = require("./db/database_handler");


app.get("/", (request, response) => {
  databaseHandler.selectAll((rows) => {
    response.send(rows);
  });
});

app.post("/register_log", (request, response) => {
  //databaseHandler.insert(request.body.....)
  response.send("POST received!");
});



app.listen(process.env.PORT || 3000, () => {
  console.log("Server running!");
});