const express = require("express");
const itemRoutes = require('./routes/item.routes')
// var bodyParser = require('body-parser')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
// app.use(express.bodyParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/football", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
