//express
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./Views");
app.use(express.static("Public"));

app.listen(process.env.PORT || 3000)
 
require("./Routes/Personal")(app)