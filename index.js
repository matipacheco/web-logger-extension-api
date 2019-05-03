const express = require("express");
const app     = express();

let databaseHandler = require("./db/database_handler");

app.use(express.json());


app.get("/", (request, response) => {
  databaseHandler.selectAll((rows) => {
    response.send(rows);
  });
});

app.post("/register_log", (request, response) => {
  console.log(request.body);
  
  databaseHandler.insert(Object.values(request.body));
  response.send();
});



app.listen(process.env.PORT || 3000, () => {
  console.log("Server running!");
});